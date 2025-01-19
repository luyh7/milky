import { GameService } from './GameService'

export const LeaderboardService = {
    async getGameData() {
        const gameData = await GameService.fetchGameData()

        // 所有可重组的物品
        const transmuteList = Object.values(gameData['itemDetailMap']).filter((item) => item.alchemyDetail && item.alchemyDetail.transmuteDropTable)

        let profitList = []

        for (let i = 0; i < transmuteList.length; i++) {
            const item = transmuteList[i]
            // 掉落表
            const dropTable = item.alchemyDetail.transmuteDropTable

            let income = 0

            // 单次收益
            for (let j = 0; j < dropTable.length; j++) {
                const drop = dropTable[j]
                const price = await GameService.getPriceOf(drop.itemHrid)
                income += drop.dropRate * drop.maxCount * price.bid
            }

            // todo 计算效率
            const level = item.itemLevel
            const efficiency = 1
            const speed = 1
            // todo 催化茶、催化剂
            const catalystTeaRate = 1
            const timeCost = (await GameService.getTransmuteTimeCost()) / speed
            const actionsPH = ((60 * 60 * 1000000000) / timeCost) * efficiency

            // 单次收益
            income = income * item.alchemyDetail.transmuteSuccessRate * catalystTeaRate

            // 计算每小时成本
            let cost = (await GameService.getPriceOf(item.hrid)).ask
            const costPH = cost * actionsPH * item.alchemyDetail.bulkMultiplier
            const incomePH = income * actionsPH
            const profitPH = incomePH - costPH

            const profitRate = `${Math.floor((profitPH / costPH) * 10000) / 100}%`

            // 一天收益
            const profitPD = profitPH * 24
            profitList.push({ hrid: item.hrid, name: item.name, profitPH, profitPD, profitRate, costPH })
        }
        profitList = profitList.filter((item) => item.costPH > 0)
        profitList.sort((a, b) => b.profitPD - a.profitPD)

        return profitList
    }
}

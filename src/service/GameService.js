import { useDataStore } from '@/stores/data'
import { getActivePinia } from 'pinia'
async function loadData() {
    // 检查 Pinia 上下文是否存在
    const pinia = getActivePinia()
    if (!pinia) throw new Error('Pinia is not initialized')
    // 获取 Store 实例
    const dataStore = useDataStore()

    // 调用 Store 方法获取数据
    try {
        return await dataStore.fetchData()
    } catch (error) {
        console.error('Error loading data from store:', error)
    }
}
export const GameService = {
    async fetchGameData() {
        return loadData().then((res) => res.gameData)
    },
    async fetchMarketData() {
        return loadData().then((res) => res.marketData)
    },
    async getPriceOf(itemHrid) {
        const item = (await this.fetchGameData()).itemDetailMap[itemHrid]
        return (await this.fetchMarketData()).market[item.name]
    },
    async getTransmuteTimeCost() {
        return (await this.fetchGameData()).actionDetailMap['/actions/alchemy/transmute'].baseTimeCost
    }
}

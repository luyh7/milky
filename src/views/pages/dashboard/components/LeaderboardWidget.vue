<script setup>
import { LeaderboardService } from '@/service/LeaderboardService'
import Popover from 'primevue/popover'
import { onMounted, ref } from 'vue'

const products = ref(null)

function formatNumber(value) {
    return value && value.toLocaleString('en-US')
}
function loadData() {
    LeaderboardService.getGameData().then((data) => {
        products.value = data
    })
}

const op = ref(null)

onMounted(() => {
    loadData()
})
</script>

<template>
    <div class="card">
        <div class="font-semibold text-xl mb-4">扫单填单利润排行榜</div>
        <DataTable :value="products" :rows="10" :paginator="true" responsiveLayout="scroll">
            <!-- <Column style="width: 15%" header="Image">
                <template #body="slotProps">
                    <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" width="50" class="shadow" />
                </template>
            </Column> -->
            <Column field="name" header="物品" style="width: 35%"></Column>

            <Column field="profitPD" header="利润" :sortable="true" style="width: 35%">
                <template #body="slotProps">
                    {{ formatNumber(slotProps.data.profitPD) }}
                </template>
            </Column>
            <Column field="profitRate" header="利润率" :sortable="true" style="width: 35%">
                <template #body="slotProps">
                    {{ slotProps.data.profitRate }}
                </template>
            </Column>
            <Column style="width: 15%" header="详情">
                <template #body>
                    <Button icon="pi pi-search" type="button" class="p-button-text" label="Share" @click="op.toggle"></Button>
                </template>
            </Column>
        </DataTable>
        <Popover ref="op">
            <div class="flex flex-col gap-4 w-[25rem]">
                <div>
                    <span class="font-medium block mb-2">Share this document</span>
                    <InputGroup>
                        <InputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-[25rem]"></InputText>
                        <InputGroupAddon>
                            <i class="pi pi-copy"></i>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div>
                    <span class="font-medium block mb-2">Invite Member</span>
                    <InputGroup>
                        <InputText disabled />
                        <Button label="Invite" icon="pi pi-users"></Button>
                    </InputGroup>
                </div>
            </div>
        </Popover>
    </div>
</template>

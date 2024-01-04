<template>
    <div v-if="$route.name != 'login'">
        <div class="flex max-h-full min-h-full">
            <app-sidebar  />
            <div class="viewPort">
                <app-header />
                <div class="overflow-auto flex-1">
                    <main class="m-2 p-2">
                        <nuxt />
                    </main>
                </div>
                <!-- <app-footer   /> -->
            </div>
        </div>
    </div>
        <div v-else>
            <nuxt />
        </div>
</template>

<script>
import AppSidebar from '@/components/layout/Sidebar';
import AppHeader from '@/components/layout/Header';
import AppFooter from '@/components/layout/Footer';

export default{
    components : {
        AppSidebar,
        AppHeader,
        AppFooter
    }
}
</script>
<style scoped>
    .viewPort{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        flex: 1;
        max-height: calc(100vh - 0px);
        min-height : 100vh;
    }
</style>

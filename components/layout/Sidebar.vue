<template>
    <div>
        <el-menu
            class="el-menu-vertical-demo overflow-auto max-h-[100vh] min-h-full"
            :class="collapse == false ? 'w-[50px]' : 'w-[60px]'"
            text-color="#c2c7d0"
            background-color="#071936"
            :collapse="collapse"
            :router="true"  
            :default-active="$route.path"
        >   
            <div class="flex w justify-center items-center w-full py-4">
                <nuxt-link  to="/">
                    <div class="text-xl text-white font-bold">
                        <img src="company-logo-title.png" alt="" width="100px">
                    </div> 
                </nuxt-link>
            </div>
            <template v-for="item in aside">
                <template v-if="item.sub.length > 0">
                    <el-submenu :index="item.route">
                        <template #title>
                            <!-- <el-icon>
                                <img :src="item.icon" class="p-0 m-0 transition-all duration-300 ease-out w-[15px] h-auto"/>
                            </el-icon> -->
                            <span class="material-icons mr-2">{{ item.icon }}</span>
                            <span>{{ item.title }}</span>
                        </template>
                        <div v-for="key in item.sub">
                            <el-menu-item :index="key.route">{{ key.title }}</el-menu-item>
                        </div>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.route">
                        <!-- <el-icon>
                            <img :src="item.icon" class="p-0 m-0 transition-all duration-300 ease-out w-[15px] h-auto "/>
                        </el-icon> -->
                        <span class="material-icons mr-2">{{ item.icon }}</span>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>
<script>

export default{
    data(){
        return {
            collapse : false,
            activeLink: null,
            aside : [
                {
                    id : "",
                    title: "Dashboard",
                    route: "/",
                    icon:"dashboard",
                    sub : []
                },
                {
                    id : "",
                    title: "Module",
                    route: "/module",
                    icon:"announcement",
                    sub : [
                        {
                            id : "",
                            title: "Sub-Module",
                            route: "/module/sub-module",
                            sub : []
                        },
                    ]
                },
            ]
        }
    },
}
</script>
<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 220px;
        scrollbar-width: 2px;
    }
</style>
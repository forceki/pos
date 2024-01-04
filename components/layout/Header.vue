<template>
  <!-- <el-menu
    class="flex justify-between items-center"
    mode="horizontal"
    menu-trigger="click"
    text-color="black"
  >
    <div>
      <p class="" style="font-size: 14px">
        {{ $route.path }}
      </p>
    </div>

    <el-submenu>
      <template slot="title">
        <el-avatar
          :size="25"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          @error="Image"
          fit="fill"
          class="mr-2"
        >
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </el-avatar>
        <span style="font-size: 14px">Admin</span>
      </template>

      <el-menu-item style="height: auto !important; width: 10px !important; padding: 10px 0px 10px 10px;">
        <div class="flex items-center">
          <span class="material-icons text-sm mr-1">logout</span>
          <span class="text-sm">Logout</span>
        </div>
      </el-menu-item>
    </el-submenu>
  </el-menu> -->
  <div>
    <div
      class="flex gap-5 h-[3rem] justify-between breadCrumbs"
      >
      <div class="flex items-center gap-2">
        <p
          class="antialiased"
          style="font-size: 14px"
        >
          {{ $route.path }}
        </p>
      </div>
      <el-dropdown
        @mouseenter.native="up = true"
        @mouseleave.native="up = false"
      >
        <div class="flex items-center gap-1">
          <div class="demo-type ">
            <el-avatar
              :size="30"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              @error=""
              fit="fill"
            >
              <img
                src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
              />
            </el-avatar>
          </div>
          <span
            class="text-[12px] text-black ml-2 flex justify-center items-center "
          >
           {{ 'admin' }}
            <span v-if="up" class="material-icons ">
              arrow_drop_up
            </span>
            <span v-else class="material-icons ">
              arrow_drop_down
            </span>
          </span>
        </div>
        <template #dropdown>
          <el-dropdown-menu
            @mouseenter.native="up = true"
            @mouseleave.native="up = false"
          >
            <el-dropdown-item >
              <div @click="logout" class="flex justify-center items-center">
                <span class="material-icons text-sm mr-1">logout</span>
                <span>Logout</span>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
  
 <script>
export default {
  data() {
    return {
      up : false,
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    async logout () { 
        await this.$auth.logout() 
        windows.localtion.href('/login');
    }
  },
}
</script>
  
  <style scoped>
.breadCrumbs {
  color: #282a3a;
  -webkit-font-smoothing: antialiased;
  display: flex;
  padding: 30px;
  box-sizing: border-box;
  align-items: center;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid rgb(217, 217, 217);
}

</style>
  
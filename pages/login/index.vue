<template>
    <div class="bg-custom" style="background-repeat: no-repeat; background-size:contain; background-position: center center;">
        <div class="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 float">
            <div class="w-[26rem] rounded-lg bg-white pt-3 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div class="flex justify-center ">
                        <span class="text-2xl font-bold">Selamat Datang !</span>
                    </div>
                    <div class="flex justify-center pb-8" style="margin-top: 14px !important;" >
                        <span class="text-sm">Login untuk melanjutkan</span>
                    </div>
                    <el-form 
                    label-position="top"
                    :model="form"
                    ref="formLogin"
                    :rules="rulesAdd"
                    >
                        <el-form-item label="Username" prop="username">
                            <el-input
                                v-model="form.username"
                                placeholder="Username"
                                @keyup.enter.native="login"
                            />
                        </el-form-item>
                        <el-form-item label="Password" prop="password">
                            <el-input
                                v-model="form.password"
                                type="password"
                                placeholder="Password"
                                show-password
                                v-on:keyup.enter="postLogin()"
                                @keyup.enter.native="login"
                            />
                        </el-form-item>
                        <el-button @keyup.enter.native="login" @click="login()" :loading="loading" type="primary" class="px-15">Login</el-button>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState , mapActions } from 'vuex'

export default {
  head(){
    return { 
        title : 'Selamat Datang'
    }
  },
  data(){
    return {
        rulesAdd: {
            username: [
                {
                    required: true, 
                    message: 'username required', 
                    trigger: 'blur' 
                }
            ],
            password: [
                {
                    required: true, 
                    message: 'password required', 
                    trigger: 'blur' 
                }
            ]
        },
    }
  },
  computed: {
    ...mapState('authentication', {
        form: (state) => state.form,
        loading: (state) => state.loading,
    }),
  },
  methods : {
    ...mapActions('authentication', ['postLogin']),
    login(){
        this.$refs.formLogin.validate(async (valid) => {
            if(valid) {
                this.postLogin()
                .then(()=>{
                    window.location.href = '/'
                })
                .catch(() => {
                    this.$message.error({
                        message: 'Invalid Username or Password'
                    });
                })
            }
        })
    }
  }
}
</script>
<style>
.bg-custom{
    background: linear-gradient(to right, #071936, #2c4a7b);

}
</style>
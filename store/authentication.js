
 export const state  = () => ({
    form : {
        username : '',
        password : ''
    },
    loading : false,
    token : ''
})

export const  mutations = { 
   
}

export const actions = {
     postLogin({state}){
        state.loading = true
        return new Promise((resolve,reject) => {
            this.$auth.loginWith('local', {
                data: {
                    username: state.form.username,
                    password : state.form.password, 
                }
            }).then((response) => {
                state.loading  = false
                resolve(response)
            }).catch((error) => {
                state.loading = false
                reject(error)
            })
        })
    },
    gotToDashboard(){
        window.location.href = '/'
    }
}

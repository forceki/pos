import Vue from 'vue'
import money from 'v-money'
 
// register directive v-money and component <money>
Vue.use(money, {precision: 0})

Vue.directive('money', {
    bind(el, binding, vnode) {
        el.innerText = 'Rp ' + _.toNumber(el.innerText).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    },
    componentUpdated(el, binding, vnode) {
        if (!_.includes(el.innerText, 'Rp ')) {
            el.innerText = 'Rp ' + _.toNumber(el.innerText).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
        }
    },
})
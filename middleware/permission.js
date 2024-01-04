export default async function ({ store, route, redirect, app, error }) {
    if (app.$auth.loggedIn) {
        try {
            await store.dispatch('checkPermission', { url: route.path })
        } catch (e) {
            if(e.response.status === 401) error({
                statusCode: 401,
                message: 'Unauthenticated'
            })
            else redirect('/')
        }
    }
}

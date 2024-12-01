import {useRouter} from "vue-router";
import {useUser} from "@/composables/useUser.js";

export default (to) => {
    const {user} = useUser()
    const router = useRouter()
    if (to.meta?.auth === false) {
        return;
    }

    if (to.meta?.unauthenticated === true) {
        if (user) {
            return router.push('/')
        }
        return
    }

    if (!user) {
        return router.push('/login')
    }
}

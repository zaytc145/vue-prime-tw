import {useUserStore} from "@/stores/user.js";
import {useRouter} from "vue-router";

export default (to) => {
    const {user} = useUserStore()
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

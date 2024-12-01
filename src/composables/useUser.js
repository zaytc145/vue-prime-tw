import {ref} from "vue";

export function useUser() {
    const user = ref(null)

    return {
        user
    }
}

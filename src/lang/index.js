import {createI18n} from "vue-i18n";
import ru from "@/lang/ru.js";
import en from "@/lang/en.js";

export default createI18n({
    locale: 'ru',
    fallbackLocale: 'en',
    messages: {
        ru,
        en
    }
})

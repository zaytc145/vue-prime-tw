import {createI18n} from "vue-i18n";
import ru from "./ru.js";
import en from "./en.js";

export default createI18n({
    locale: 'ru',
    fallbackLocale: 'en',
    messages: {
        ru,
        en
    }
})

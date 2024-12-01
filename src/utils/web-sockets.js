import Pusher from 'pusher-js';
import Echo from "laravel-echo";
import echoConfig from "@/config/echo.js"

const setup = () => {
    window.Pusher = Pusher;
    const echo = new Echo(echoConfig)


    echo.private(`orders`)
        .listen('OrderShipmentStatusUpdated', (e) => {
            console.log(e.order);
        });
}

export default {
    setup
}

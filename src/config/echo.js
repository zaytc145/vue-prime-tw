
export default {
    broadcaster: 'reverb',
    key: import.meta.env.VITE_ECHO_APP_KEY,
    wsHost: import.meta.env.VITE_ECHO_HOST,
    wsPort: import.meta.env.VITE_ECHO_PORT,
    wssPort: import.meta.env.VITE_ECHO_PORT,
    forceTLS: (import.meta.env.VITE_ECHO_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
}

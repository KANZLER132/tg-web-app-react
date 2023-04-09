const tg = window.Telegram.WebApp;
const weba = 'https://core.telegram.org/bots/webapps#initializing-web-apps';
export function useTelegram() {
    const onClose = () => {

        tg.openTelegramLink(weba);
    }

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }


    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.queryId,
    }
}
const tg = window.Telegram.WebApp;
export function useTelegram() {
    const onClose = () => {
        tg.close();
        tg.openTelegramLink('https://core.telegram.org/bots/webapps#initializing-web-apps');
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
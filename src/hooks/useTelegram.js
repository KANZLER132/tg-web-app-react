const tg = window.Telegram.WebApp;
export function useTelegram() {
    const onClose = () => {
        tg.openTelegramLink('https://t.me/{https://telegram-web-apps.github.io/twa/docs/apps-communication/methods}');
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
import Toast from 'react-native-toast-message';

export const errorHandler = (result, onForbidden) => {
    // const route = result.
    if (result.code === 500) {
        Toast.show({
            type: 'error',
            text1: 'Сервертэй холбогдож чадсангүй',
        });
        return;
    }

    if (result.code === 403) {
        try {
            const route = result.message.split('.');
            const message = getMessage(route);

            if (message) {
                Toast.show({
                    type: 'error',
                    text1: message,
                });
            }
        } catch (e) {
            console.log(result.message);
        }

        onForbidden && onForbidden();
        return;
    }

    if (result.code === 404) {
        const route = result.message.split('.');

        try {
            const message = getMessage(route);
            if (message === undefined) throw new Error();

            Toast.show({
                type: 'error',
                text1: message,
            });
        } catch (e) {
            console.log(result.message);
            Toast.show({
                type: 'error',
                text1: result.message,
            });
        }
    }
};

const getMessage = (route) => {
    let errorObj = errors;

    route.forEach((routeName) => (errorObj = errorObj[routeName]));

    return errorObj;
};

// "accounts.login.login_error"

const errors = {
    accounts: {
        login: {
            login_error: 'Утасны дугаар, нууц үг буруу байна!',
        },
        create: {
            duplicate_user: 'Утас бүртгэлтэй байна!',
            not_minute: '1 минутын дотор дахин авах боломжгүй!',
        },
        code_again: {
            not_minute: '1 минутын дотор дахин авах боломжгүй!',
        },
        confirm: {
            wrong: 'Код буруу байна!',
            wrong_multiple: '5 удаа буруу оруулсан байна!',
        },
        forgot_password: {
            not_found: 'Утас бүртгэлгүй байна!',
            not_minute: '1 минутын дотор дахин авах боломжгүй!',
        },
    },
};

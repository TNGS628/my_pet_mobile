const regexNumberCheck = /\d/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexWebsite =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

export const validatePhone = (phoneText = '') => {
    if (phoneText.length !== 8) return false;

    // 9, 8, 7 goor ehelsen bol zuw dugaar gej uzne
    if (phoneText[0] < 7) return false;

    return true;
};

export const validatePassword = (passwordText = '') => {
    if (passwordText.length < 8) {
        return {
            valid: false,
            error: 'Нууц үг 8 аас доош оронтой байна',
        };
    }

    if (!regexNumberCheck.test(passwordText)) {
        return {
            valid: false,
            error: 'Нууц үг тоо агуулсан байх ёстой',
        };
    }

    return {
        valid: true,
    };
};

export const validateEmail = (mail) => regexEmail.test(mail);

export const validateWebsite = (web) => regexWebsite.test(web);

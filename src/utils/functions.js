export const convertName = (lastName, firstName) => {
    return `${lastName && `${lastName[0]}.`}${firstName}`;
};

export const currencyToFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const getCommentsStringDependingOnAmount = (amount: number) => {
    const lastTwoDigits = Math.abs(amount) % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return `${amount} комментариев`;
    }

    const lastDigit = lastTwoDigits % 10;

    if (lastDigit === 1) {
        return `${amount} комментарий`;
    }

    if (lastDigit > 1 && lastDigit < 5) {
        return `${amount} комментария`;
    }

    return `${amount} комментариев`;
};

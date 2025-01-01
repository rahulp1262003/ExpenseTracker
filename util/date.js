export function getFormattedDate(date) {
    return date.toISOString().slice(0, 10);
    // return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    // if (!date) return '';
    // const validDate = new Date(date);
    // return !isNaN(validDate) ? validDate.toISOString().split('T')[0] : '';
}

export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}
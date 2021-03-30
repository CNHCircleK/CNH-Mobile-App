export function getTimeString(date) {
    let hours = date.getHours() % 12;
    hours = hours == 0 ? 12 : hours;

    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let period = date.getHours() < 12 ? 'AM' : 'PM';

    return hours + ':' + minutes + ' ' + period;
}
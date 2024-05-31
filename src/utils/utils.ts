export function getDateTime() {
    const time = new Date();
    const m = time.getMonth() + 1;
    const hour = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    const weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekdayName = weekday[time.getDay()];
    return {
        year: time.getFullYear(),
        month: m,
        day: time.getDate(),
        hour: hour,
        minutes: minutes,
        seconds,
        weekdayName
    }
}
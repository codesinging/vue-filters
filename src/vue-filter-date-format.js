import Vue from 'vue'

// Padding zero
const padding = n => {
    return (n < 10 ? '0' : '') + n
}

/**
 * Format date like PHP date function
 */
Vue.filter('date-format', (date, format = 'Y-m-d H:i:s') => {
    if (typeof date === 'number') {
        if (date.toString().length === 10) {
            date *= 1000
        }
        date = new Date(date)
    }

    let objects = {
        "Y": date.getFullYear(),
        "m": padding(date.getMonth() + 1),
        "d": padding(date.getDate()),
        "H": padding(date.getHours()),
        "i": padding(date.getMinutes()),
        "s": padding(date.getSeconds()),
    };
    for (let p in objects) {
        if (format.indexOf(p) > -1) {
            format = format.replace(new RegExp("(" + p + ")"), objects[p]);
        }
    }
    return format
})
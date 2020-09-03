import Vue from 'vue'

const format = integer => {
    integer = integer.toString()
    if (integer.length<=3){
        return integer
    }
    let array = integer.split('')
    let count = 0
    let data = []
    for (let n = integer.length; n >0; n--, count++){
        if (count && count%3 ===0){
            data.unshift(',')
        }
        data.unshift(array.pop())
    }
    return data.join('')
}

/**
 * Format money
 */
Vue.filter('money', (value, digits=2) => {
    value = Number(value).toFixed(digits);

    let decimal = value.match(/\.[0-9]*/g);
    decimal = decimal ? decimal[0]:''

    let integer = parseInt(value, 10)
    integer = format(integer)

    return integer + decimal
})
import Vue from 'vue'

Vue.filter('card', value => {
    value = `${value}`

    const regexp = /([0-9]{4})/g
    if (value){
        value = value.replace(regexp, '$1 ')
    }

    return value
})
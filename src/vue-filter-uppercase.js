import Vue from 'vue'

Vue.filter('uppercase', value => {
    if (value) {
        value.toUpperCase()
    }
    return ''
})
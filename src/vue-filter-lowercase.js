import Vue from 'vue'

Vue.filter('lowercase', value => {
    if (value) {
        value.toLowerCase()
    }
    return ''
})
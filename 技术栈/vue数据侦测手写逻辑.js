new Vue({
    el: '#app',
    data(){
        return{}
    },
    mounted(){},
    watch:{

    },
})
class Vue {
    constructor(options){
        if(!options.render){
            options.render = trans(options.template)
        }
    }
}
const IAmA = {
    data(){
        return{
            entry:[
                { text: 'programmer' },
                { text: 'web developer' },
                { text: 'tall nerd' },
                { text: 'game designer' },
                { text: 'University of Michigan student' },
                { text: 'musician' },
                { text: 'former Gubernatorial campaign manager' }
            ]
        }
    },
    methods:{
        cycleEntry(){
            setTimeout(function()
            {

            }, 1000);
        }
    }
}

Vue.createApp(IAmA).mount('#i-am-a')
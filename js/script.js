/*
new Vue ({
    el: '#i-am-a',
    data: {
        entry: 'programmer',
        entryList:[
            'programmer', 
            'web developer', 
            'tall nerd', 
            'game designer',
            'University of Michigan student',
            'musician' ,
            'former Gubernatorial campaign manager'
        ]
    },
    methods:{
    }
})
*/

Vue.createApp({
    data() {
        return {
            entry: 'programmer.',
            index: 1,
            entryList:[
                'programmer', 
                'web developer', 
                'tall nerd', 
                'CS student',
                'game designer',
                'musician' ,
                'cybersecurity fan',
                'former campaign manager'
            ]
        }
    },
    mounted() {
        setInterval(() => {
            document.getElementById("i-am-a").style.opacity = 0;
            setTimeout(() => {
                document.getElementById("i-am-a").style.opacity = 1;
                this.entry = this.entryList[this.index] + '.';
                this.index++;
                if(this.index == this.entryList.length){
                    this.index = 0;
                }
            }, 500)
        }, 4000)
    }
}).mount('#i-am-a')
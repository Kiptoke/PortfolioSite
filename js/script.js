const iama = Vue.createApp({
    data() {
        return {
            entry: 'programmer.',
            index: 1,
            entryList:[
                'programmer', 
                'web developer', 
                'tall nerd', 
                'CS student',
                'UMich instructional aide',
                'game designer',
                'musician',
                'cybersecurity fan',
                'D&D enthusiast',
                'former campaign manager',
                'chiptune composer'
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
})
iama.mount('#i-am-a')

const social = Vue.createApp({})
social.component('social-media', {
    template: `
    <footer>
        <a href='mailto:kiptoke@gmail.com?' style='text-decoration:none;' target='_blank'>
            <img src='graphics/icons/email.svg' alt='Email' class='icon'>
        </a>
        <a href='https://www.facebook.com/kiptoke' style='text-decoration:none;' target='_blank'>
            <img src='graphics/icons/facebook.svg' alt='Facebook' class='icon'>
        </a>
        <a href='https://twitter.com/KiptokeDev' style='text-decoration:none;' target='_blank'>
            <img src='graphics/icons/twitter.svg' alt='Twitter' class='icon'>
        </a>
        <a href='https://github.com/Kiptoke' style='text-decoration:none;' target='_blank'>
            <img src='graphics/icons/github.svg' alt='Github' class='icon'>
        </a>
        <a href='https://www.linkedin.com/in/kiptoke/' style='text-decoration:none;' target='_blank'>
            <img src='graphics/icons/linkedin.svg' alt='LinkedIn' class='icon'>
        </a>
        <a href='https://www.youtube.com/channel/UCTABjZeu0Hkbukw8WiJlwLA' style='text-decoration:none;' target='_blank'>
            <img src='graphics/icons/youtube.svg' alt='Youtube' class='icon'>
        </a>
    </footer>`
})
social.mount('#social')

const devblog = Vue.createApp({})
devblog.component('devblog', {
    template: `
    <p>
        <b>DevBlogs:</b> 
        <ul>
            <li><a href='devblog/prealpha1.html' style='text-decoration:none;'>Pre-Alpha 1</a></li>
        </ul>
    </p>
    `
})
devblog.mount('#tower')
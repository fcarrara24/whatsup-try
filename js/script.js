const { createApp } = Vue;


let personIsMe = 'end';


const obj = {
    data() {
        return {

            messageToSend: '',
            index: 0,
            messageList: [],

            totalMsg: ''
        }
    },
    methods: {

        detectSend() {
            this.messageList[this.index] = this.messageToSend;
            let msgContainer = `<div class="d-flex justify-content-${personIsMe} pb-1">
            <div class="card p-1 message-content bg-warning">
                ${this.messageList[this.index]}
            </div>
            </div>`;
            this.index = this.index + 1;

            this.totalMsg += msgContainer;
            this.messageToSend = ''
        },
        changePerson() {
            personIsMe = personIsMe === 'end' ? 'start' : 'end';
        }
    }
}

createApp(obj).mount('#app')



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
            if (this.messageToSend !== '') {
                //changing code to secure it
                let savedMsg = this.messageToSend.replace(/</g, '<i class="fa-solid fa-less-than" style="font-size: 0.7em!important; padding-top: 7px;"></i>');
                //stored all messages for future updates
                this.messageList[this.index] = savedMsg;

                let msgContainer = `
                <div class="d-flex justify-content-${personIsMe} pb-1">
                    <div class="card p-1 message-content bg-${personIsMe} d-flex flex-row">
                        ${this.messageList[this.index]}
                    </div>
                </div>`;
                this.index = this.index + 1;

                this.totalMsg += msgContainer;
                this.messageToSend = ''
            }

        },
        changePerson() {
            personIsMe = personIsMe === 'end' ? 'start' : 'end';
        }
    }
}

createApp(obj).mount('#app')



//VUEJS
const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
            emailList: [],
            doubleEmail: 0,
        }
    },
    methods: {
        getRandomEmail() {
            axios.get(this.apiUrl)
                .then((response) => {
                    if (!this.emailList.includes(response.data.response)) {
                        this.emailList.push(response.data.response);
                    } else {
                        this.doubleEmail += 1;
                        this.getRandomEmail();
                    }
                }
                );
        },
        getTotRandomEmail(tot) {
            for (let i = 0; i < tot; i++) {
                this.getRandomEmail();
            }
        }
    },
    mounted() {
        this.getTotRandomEmail(10);
    }
}).mount('#app')
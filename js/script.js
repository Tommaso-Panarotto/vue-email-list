//VUEJS
const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
            emailList: [],
        }
    },
    methods: {
        getRandomEmail() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.emailList.push(response.data.response);
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
        this.getTotRandomEmail(10)
    }
}).mount('#app')
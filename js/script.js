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
                    console.log(response.data);
                    this.emailList.push(response.data.response);
                    console.table(this.emailList);
                }
                );
        },
        getTotRandomEmail(tot) {
            let start = 0;
            while (start < tot) {
                this.getRandomEmail();
                start += 1;
            }
        }
    },
    mounted() {
        this.getTotRandomEmail(10)
    }
}).mount('#app')
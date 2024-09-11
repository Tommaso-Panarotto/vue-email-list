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
        }
    },
    mounted() {
        this.getRandomEmail();
    }
}).mount('#app')
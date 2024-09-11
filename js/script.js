//VUEJS
const { createApp } = Vue

createApp({
    data() {
        return {
            message: "Hello Vue!",
            apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
            emailList: [],
        }
    }
}).mount('#app')
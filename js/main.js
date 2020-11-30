/*
Cresare una lista di 10 mail generate randomicamente tramite API
L'API si trova al link: https://flynn.boolean.careers/exercises/api/random/mail
*/

const myApp = new Vue({
  el:"#root",
  data: {
    mails: []
  },
  mounted: function(){
    for (var i = 0; i < 10; i++) {

      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((result) => {
        this.mails.push(result.data.response);
      });
    };
    console.log(this.mails);
  }
})

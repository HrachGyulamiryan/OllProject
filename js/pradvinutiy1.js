 "use strict"

// const person = {
//     Hrach: "Sofi",
//     tel: "093454644",
//     parents: {
//         mom: 'Naz'
//     }
// };

// console.log(JSON.stringify(person)); // erp serverin tvyalenq uxarkum 
// const clon = JSON.parse(JSON.stringify(person)); // erp serveric tvalenq stanum: u es JSON ov lriv kopiaya linum 
// clon.parents.mom = 'Nazeli'; // menak copii meja poxum
// console.log(person)
// console.log(clon)


                         //AJAX

// const inputRub = document.querySelector('.ajaxihamarrub'),
//       inputUsd = document.querySelector('.ajaxihamarusd');

//     inputRub.addEventListener('input', () => { //input@ amen knopka sexmeluc katarvuma: ka change eti erp grum prcnumenq inputi mej u ancnum hajordin et vaxta liunum kam enter
//     const request = new XMLHttpRequest(); // tuyla talis tarmacnel tvyalner@ aranc ej@ abnavit anelu
//     request.open('GET', 'js/arajinjavascript.json'); // openov bacumenq , get stanum enq heto jampenenq cuc tali
//     // openi 3 rd argument sinxron ev asixron ixron@ vor hertova kod@ linum, login, parol
//     request.setRequestHeader('content-type', 'application/json; charset=utf-8'); // json fayli peredacha
//     request.send();// uxarkumenq zapros@
    

//     request.addEventListener('readystatechange', () => { // ete load dnenq nuyn dzevi kashxati u readyistaten hanum enq: erp amen inch patrasta esika anum read..@
//         if(request.readyState === 4 && request.status === 200) { // radyState- status gatovnosti 4 @ vor sax tvyalner@ ekelen: status ===200 nshanakuma vse ok
//             console.log(request.response) //respons - esi jsoni faylna vercum
//             const data = JSON.parse(request.response); // stanumenq json fil@
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); // .ic het 2 tiv kgri
//         }else {
//             inputUsd.value = "cto to pashlo ne tak";
//         }
//     })
    
// })



                      //  PROMISE      THEN


// const req = new Promise((resolve, reject) => { // xostuma vor ete jishta anci araj
//     setTimeout(() => {
//         console.log('padgatovka')

//         const product = {
//             name: 'TV',
//             price: 2000
//         }

//        resolve(product) // verevi kod@ jishta urem katarvi

//     },2000)
// });

// req.then((product) => {     
//     return new Promise((resolve, reject) => { // reject@ erori vaxta ogtagorcvum?
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product)
//         },2000)
//     })
   
// }).then(data => {
//     data.inchvorban = true;
//     return data; // hajordi mej ete uzumenq ogtagorcen petqa veradarcnenq
// }).then(data => { 
//     console.log(data)
// }).catch(() => { // ete sxala kod@ 
//     console.error('ashibka')
// }).finally(() => { // grvuma verjum linuma ankax amen inchic
//     console.log('finaly')
// });


// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time)
//     })
// }
// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms erkrord'));

// Promise.all([test(1000), test(2000)]).then(() => { //spasuma sax Promisnerin vor prcnen nor inq@ lini
//     console.log('All')
// });

// Promise.race([test(1000), test(2000)]).then(() => { // araji Promisen henc linuma es kod@ ashxatuma 
//     console.log('All')
// });
 
//                         // FETCH

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify({name: 'Alex'}),
//     headers: {
//         'Content-type': 'application/json' // eso vor json@ karananq ogtagorcenq
//     }
// }) // fetch@ mez Promise a veradarcnun u then petqa ogtagorcenq
//     .then(response => response.json()) // json- vercuma fayler@ lcnuma js obyecti mej vor karananq heto ogtagorcenq
//     .then(json => console.log(json))


                                   // Aysic/await


    // function resolveAfter2Seconds() {
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //     resolve('resolved');
    //     }, 2000);
    // });
    // }
    
    // async function asyncCall() {
    // console.log('calling');
    // const result = await resolveAfter2Seconds();
    // console.log(result);
    // }

    // asyncCall();


                           //LocalStorage // texayin tvyalneri pahpanman taracq


// localStorage.setItem('number', 3);//qcuma localStorage i mej: setatributina nman arajin@ anunenq tali erkrordnel ira kluchna
// //localStorage.removeItem('number') // jnjuma
// localStorage.clear();// jnjuma sax
// console.log(localStorage.getItem('number')); // stanumenq tvyal@



                            // Regulyarni virajenia kanonavor artahaytutyun. RegExp


// const ans = prompt('vvedite vash name');
// const reg = /n/i; // es /x/ en inch@ manenq gali grumenq /mej@/ , rezultat talisa araji gtac@
// const reg1 = /n/ig; // es g n vor grumenq sax /mejinerna/ berum masivi mej lcrac bayc inq@ searchi het nuyn@ klni inch i n iran matchova petq ogtagorcel
// console.log(ans.search(reg)) // mana gali araji ham@nknum@
// console.log(ans.match(reg)) // sax gtnelu hamara// ete i a urem masivi mej vercuma /mejin@/, index@, input@, grup@ ete g-i a vercuma sax /mejinner@/  
////console.log(reg.test(ans)) // ete ka trua ete che false

// const pass = prompt('pasword');
// console.log(pass.replace(/\./g, "*")) // . @ asuma mej@ inch grenq * es nshan@ di: isk \. @ asuma vor menak .erin veraberi


// console.log('12-34-56'.replace(/-/g, ':')) // sax - er@ sarquma :

// const x = 'vvedite vse chislo5 654';
// const reg = /\d/g; // tverna vercum masivi meja qcum arandzin heto karanq kpcnenq strok kam urish gorcoxutyun anenq
// // ka naev /\w/ - esi saxa vercum baci spaceic: ka /\s/ - vor@ spacenerna vercum nuyn / / esa
// // ka naev /\W/  - voch tar voch tiv: /\D/ - aranc tiv
// console.log(x.match(reg)) 



                                    //geter seter

// const persone = {
//     name: 'Alex',
//     age: 25,
//     get userAge() { // stanum enq :
//         return this.age; //  karanq stex matematikakan hashvarkner anenq
//     },
//     set userAge(num) { // partadir petqa arjeq grenq mej@
//         this.age = num;
//     }
// };

// console.log(persone.userAge = 30) // pakagcer@ chenq dnum vortev get@ haskanuma vor funkciaya: poxuma objecti meji arjeq@
// console.log(persone.userAge)


                                  //  Inkapsulacii - tvyalne voronq chen linum poxel drsic

// class User{
//     constructor(name, age) {
//         this.name = name;
//         this._age = age; 
//     }
//     #surname = 'Hrach';  //# privatnia darcnum stexic durs chenq kara iran dzer tanq

//     say = () => {
//         console.log(`imya polzovatelya: ${this.name}, ${this.#surname} vozrost ${this._age}`);
//     }
//     get age() {
//         return this._age;
//     }
//     set age(age) {
//         if(typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         }else{
//             console.log('sxal')
//         }
//     }
// }

// const ivan = new User('Ivan', 27)
// console.log(ivan.age);
// ivan._age = 99;
// console.log(ivan.age)

// // console.log(ivan.getAge());

// // ivan.setAge(30);
// // ivan.setAge(300);
// // console.log(ivan.getAge())
// //ivan.age = 30; // es orinakov funcciayi mej poxvuma
// // ivan.name = 'Alex'
// ivan.say();


// const app = '123';

// const number = 1;

// (function() { // function decloration ( - nuyna vor dem@ grenq - void . aranc kanchelu linuma
//     let number = 2;
//     console.log(number)
// }())
// console.log(number) // es nuber@ functiayi nuberi het kap chuni

// const user = (function() {
//         const privat = function() {
//             console.log('i am private');
//         }
//         return {
//             sayHello: privat
//         }
// }())
// let privat = 51;
// console.log(privat)

// user.sayHello();

                                    // funkcii generatori         

// function* count(n) { // anmijapes chi katarum veradarcnuma krknox obyekt
//     for(let i = 0; i < n; i++) {
//         yield i;
//     }
// }
// for(let k of count(7)) { // vor hat hat chanenq dnumenq for ofi mej
//     console.log(k)
// }
// // const counter = count(7); // qani anqam kanchenq etqan@ klni functiai meji ete avel kanchenq undefinde kta
// // console.log(counter.next().value) //// stanum enq yield i mejin@
// // console.log(counter.next().value)
// // console.log(counter.next().value)


                            // asixron ev sixron kod ,  ivent loop, stack


// console.log(1) // sixron aysinqn mianqamic linuma
// kod@ kardalov galisa tenuma timout etuma Web Apis @ndex hashvark@ anum et @ntacqum kod@ etuma araj erp lranuma web apisum hashvark@ gnuma Calback Quene u hert kangnum vor katarvi gorcoxutyun@
// u cankacac click herta kangnum Calback um vor hertov koder@ linen  
// setTimeout(() => {   // asinxron aysinqn linuma vorosh jamanak heto, sax colback functianer@ asixron en
//     console.log('timout') // kam klick submit sax asixron en
// },2000);

// setTimeout(() => {
//     console.log('timout_4000')
// },4000)

// console.log(2) //


                                    // Makro i Mikro taski

// setTimeout(() =>  console.log('timout')) 
// Promise.resolve() // sranq settimoutner@ u funkcianer@ microzadachaner en 
// .then(() => console.log('promis'));

// queueMicrotask(() => console.log('wow'))// esi grumenq en vaxt erp microzadachaneri mej uzumenq vor hertov kod@ eta araj

// Promise.resolve()
// .then(() => console.log('promis_2'));

// console.log('code')






































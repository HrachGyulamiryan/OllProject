"use strict"

				        // DAKUMENTNER-metodner .JAVA SCRIPT

  //  const btns = document.getElementsByTagName('button'), // veraberum a tag erin
  //   	  classs = document.getElementsByClassName('buttons'), // dimum enq classin. stex nshvuma class dra hamar . chenq dnum
  //  	  klors = document.querySelectorAll('.klor'), // . selektora dra hamarenq dnum 
  //     //console.log(heart) // dimum enq selektorin  or. ~consol u forEach ka stex 
  //  	  oneklors = document.querySelector('.klor'),
  //  	  wrapper = document.querySelector('.wrapper');
          
  // //oneklors[1].style.backgroundColor = 'red';
  // btns[1].style.borderRadius = '100px';
  //  classs[1].style.backgroundColor = 'blue';
  // classs[2].style.cssText = `background-color: green; width: 500px`; //cssText mianqamic mi qani parametr talu hamara

  // for(let i = 0; i < klors.length; i++) {
  // 	klors[i].style.backgroundColor = 'grey';
  //}

  //const div = document.createElement('div');
  //div.classList.add('black'); // bloki het ashxatelu hamar kanchum enq
  //klors[1].after(div);// karanq befor el anenq. div@ dnuma klors i i=1 ic heto 
  //wrapper.append(div); // wrapperi verjna tanum. prepend skizbna: u ka befor u aftor sranqel drsic skizbn u verjnen tanum
  //div.innerHTML = "Hello world"; // esi html teger karanq ogtagorcenq mej@
  //div.textContent = "Hello" //menak text karanq grenq
  //div.insertAdjacentHTML("afterbegin",'<h2>Haello<h2>') //Hello ic araj h2 kodna linum u @tex kara lini mec kod orinak
  //beforeBegin - divi mej amenaarajuc kdi: beforend-divi mej divic heto: afterend h2 ic heto

//   classs[0].remove();// jnjuma

//   classs[3].replaceWith(klors[0]) // poxuma element@


  // const btn = document.querySelectorAll('button'),
  // 	   porc = document.querySelector('.porc');

//  const deleteElement = (event) => {
//   //console.log(event); // canotananq sax sabitianeri het
//  	//console.log(event.target); // vor knopkan sexmumenq dra htmlna berum ete knopki meji tvi vra tivi htmlna berelu
//  	console.log(event.currentTarget);//kberi raditelskinel het@ : amen depqum knopki htmlna berum
//  	console.log(event.type);// es pahin clikna tipy
//  }

//  btn.forEach((item) => {
//  	item.addEventListener('click', deleteElement, {once: true}); //once mi knopken mi anqam: ka naev - 
//  }) //sax buttoner@ vercelu hamara;

//  const link = document.querySelector('a');

//  link.addEventListener('click', function(event) { //  mouseenter eli pahumes vran anuma: mauseleave mknik@ hanluca linum
//  	event.preventDefault(); //asuma brauzer mi mti link@
//  	console.log(event.target)
//  });
 

// const container = document.querySelector('.container');
// const texter =  document.querySelector('.texter');

// container.addEventListener('click', function(event) {
//   console.log('perviy uroven')
// }); //{"capture": true});// esi vor grumenq arajin@ esa berum heto mnacac@
// texter.addEventListener('click', function(event) {
//   console.log('vtaroy uroven');
//   event.stopPropagation() // vtaroy urovenin sexmeluc arajin uyrovenin chi berum
// });


//console.log(document.body.childNodes);// stanum enq sax inch ka chka: children-menak elementnery: amen toxic ancnel@ myusin noda eli
//console.log(document.documentElement);// headn u body in enq stanum
//console.log(document.body.firstElementChild); //araji element@ body i: (sranc saxin karan element@ hanenq u Node tan (textavo))
//console.log(document.body.parentElement); // html nenq stanum

 // const btn = document.querySelector('.raditelskihamar');
// //console.log(btn.parentNode.parentNode); //stanum enq raditelii raditelin
// // console.log(btn.parentElement); //stanum enq element@ (clas@ voch te Node)
  //console.log(btn.nextElementSibling); //stanuma textavoy fayl@ hajord klasnel het@, partadir text 
// console.log(btn.previousSibling) //stanumenq raditelskii text@

//  const mainElement = document.documentElement;        //??????????????????????????????????????????/ chi ashxatum
//  const mainElementHeigth = mainElement.clientwidth;
//  console.log(mainElementHeigth);

// const widowWhidth = window.innerWidth; //et pahin ekrani laynutyunna . 17 avela scroli texna voncor
// console.log(widowWhidth)

// const windowScrollTop = window.pageYOffset;// cuca tali inchqana scrol arac depi nerqev
// console.log(windowScrollTop)


// function setScrollToOptions() { //// 500 px amenaverevic ichacnuma nerqev es sax funkcian
//   window.scrollTo({   // scrolBy ka eetel vortex vor kangnaca ytexica 500px ijnum
//     top:500,
//     left:0,
//     behavior:"smooth" // plavnii hamara ka instant - neplavno
//   });
// }
// const btn1 = document.querySelector('.buttonsporc');
// btn1.addEventListener('click', setScrollToOptions);


// const btn1 = document.querySelector('.buttonsporc');
// btn1.addEventListener('click', setScrollIntoView);

// function setScrollIntoView(top) {
//   const lessonSelected = document.querySelector('.lesson_Selected'); 
//   lessonSelected.scrollIntoView({ // knopkan sexmumes beruma qo uzac tex@ 
//     block: "senter",  // start, end hamapatasxanabar
//      inline:"nearest" //po umolcheni: horizunakani patasaxanatuna eli start end sentra linum
//    }); 
// }


//  const btns = document.querySelectorAll('button'),
//  wrapperr = document.querySelector('.firstcontainer');

// //console.log(btns[1].classList.length) //cuca talu te qani hat klas ka btn imej
// //console.log(btns[0].classList.item(1));// button[0] i meji 2rd clas@

// // for(let i = 0; i < btns.length; i++) {
//     btns[0].addEventListener('click', () => {
//         // if(!btns[1].classList.contains('red')) { //stuguma ka [i] andami mej red clas te che
//         //     btns[1].classList.add('red');  //klasa avelacnum  karanq , ov eli avelacnenq
//         // }else{
//         //     btns[1].classList.remove('red')
//         // }
//         btns[1].classList.toggle('red');// ete ka jnjuma ete chka avelacnum uxaki voch mishta hasaneli (toggle)n
//     });
// //   }

// wrapperr.addEventListener('click', (event) => {
//     // if(event.target && event.target.matches("button.red")) { //matches en depquma payman@ ashxatum erp clasi mej ka red anunov class
//     //     console.log("hello")
//     //     }
//     //     if(event.target.classList.contains('red')) { //contsins asuma ka senc klas te che
//     //    console.log("hello"); //ete forEachov anenq hetoyva avelacvac knopkin chi veraberi
//     //    }
//        if(event.target && event.target.tagName == "BUTTON") { //tagName stuguma vor button lini "BUTTON" kojak@ senca sabitianeri mej aysinqn senc petqa iran janachi 
//         console.log("hello"); //ete forEachov anenq hetoyva avelacvac knopkin chi veraberi
//         }
// });

// const btn = document.createElement('button');
// btn.classList.add('blue');
// wrapperr.append(btn)


// const btn = document.querySelector('.buttonsporc');
// let timerid, i = 1;    // ste publichnii hamara vor funkciaic durs iran janachi

// btn.addEventListener('click', () => {
//    // const timerid = setTimeout(logger,2000)  //asumenq te erp petq lini es funkcian
//     timerid = setInterval(logger,2000); // setInterval gorcoxutyun@ katarvuma an@ndhat
// })

// function logger () {
//     if(i === 3) {
//         clearInterval(timerid); //dadarecnuma ashxatanq@
//     }
//     console.log('es funkcian vor tanq setTimoutin kkatarvi')
//     i++;
//  }


// let id = setTimeout(function logo() {
//     console.log('hello');
//     //id = setTimeout(logo, 500)
// },500)

                              //Animation


// const btn = document.querySelector('.buttonsporc'); // lav tarberak chi 
// const elem = document.querySelector('.touchme');
// let pos = 0;

// // function myAnimation() {
// //     const timer = setInterval(frame, 10)
// //     function frame() {
// //         if(pos == 300) {
// //             clearInterval(timer);
// //         }else {
// //             pos++;
// //             elem.style.top = pos+"px";
// //             elem.style.left = pos +"px";
// //         }
// //     }
// // }

// function myAnimation() { // es tarberak@ aveli lava
   
//   pos++;
//   elem.style.top = pos+"px";
//   elem.style.left = pos +"px";
//   if(pos < 300) {
//     requestAnimationFrame(myAnimation);
//   }
// }
// btn.addEventListener('click', () => requestAnimationFrame(myAnimation)); // ete strelkan chdnenq mianqamic functian kkanchi aranc klik anelu


// const touchme = document.querySelector('.touchme'),
//       btn = document.querySelector('.buttonsporc');

// let animatetouchme;
// btn.addEventListener('click', () => {
//   if(!animatetouchme) {
//     animatetouchme = touchme.animate([ // animate - n karumenq animacia sarqenq
//     {transform: 'translateY(0) rotate(0deg)',
//       filter: 'opacity(100%)'
//     },
//     {transform: 'translateY(100px) rotate(180deg)',
//     filter: 'opacity(50%)'
//     },
//     {transform: 'translateY(-100px) rotate(270deg)',
//     filter: 'opacity(75%)'
//     },
//     {transform: 'translateY(0 rotate(360deg))',
//     filter: 'opacity(100%)'
//     }
//   ],{
//     duration: 3000,
//     iterations: Infinity
//   });
//   }else if(animatetouchme.playState == 'paused') {
//     animatetouchme.play()
//   }else {
//     animatetouchme.pause();
//   }

// })


// let cache = new WeakMap(); //hishoxutyunic lriv jnjuma erp deletenq tali , ete uxaki Map anenq u null tanq hishoxutyan mej kmna 

// function cahcheUser(user) {
//     if(!cache.has(user)) {
//         cache.set(user); 
//     }
//     return cache.get(user); // stanuma nor masiv
// }
// let lena = {name: 'Elena'};
// let alex = {name: 'Alex'};

// cahcheUser(lena);
// cahcheUser(alex);

// lena = null;
// console.log(cache.has(lena)); // asuma ka senc obyect
// console.log(cache.has(alex));

// let readMessages = new WeakSet(); // menak obyektneri hamara - add, has, delete;


// const now = new Date(); //jamanaki het ashxatelu hamar

//  console.log(now.setHours(13,40,61))// nuyn banern uni inch get@  setov mech@ partadir petqa menq nermucenq
//  console.log(now)

// console.log(now.getDate()) //orna, get.FullYear, get.maunth jam rope sax nuyn pricipov;
// console.log(now.getDay()) // cuca tali shabatva vor orna tvov
// console.log(now.getTimezoneOff()); // himikva jamanaki u UTC i tarberutyunna
// console.log(now.getTime()); // 1970 hunvari mek milivarkyannerov 


//  const box = document.querySelector('.container');
//  const box1 = document.querySelector('.texter');
// const buton = document.querySelector('.buttonsporc');

//  const width = box1.scrollHeight; // amboxj erkarutyunna
//  const height = box1.offsetWidth;// inchqan vor chap@ tvaca html ov
//  const width1 = box1.clientWidth; // marginner@ hanac 
//  console.log(width, height,width1)

// buton.addEventListener('click', () => {
//    //  box.style.height = box1.scrollHeight + 'px'
//    console.log(box1.scrollTop) // cuca tali te inchqane scrol are
// })

// ////console.log(document.documentElement.scrollTop);
// window.scrollBy(0, 100) // 2 argument arajin@ horizonna. vorte gtnvumenq @texic 100px nerqev
// window.scrollTo(0, 100) // amenaverevic 100 nerqev  ??????????????????????????
// console.log(box.getBoundingClientRect()) // sax heravorutyunnerna berum 
// const sstyle = window.getComputedStyle(box) // sax stilnerna patuhani
// console.log(sstyle.color)


// const box = document.querySelector('.box');

// let observer = new MutationObserver(mutationRecords => { 
//     console.log(mutationRecords);
// })

// observer.observe(box, { // vor haxordagrutyun stananq
//     childList: true // boxi mej ban grveluc katarvuma  verevi funkcian
// })


                                  // THIS                         

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() { // ete ogtagorcumenq method obyekti mej uremn method@ veraberuma misht obyektin
//        const shout = () => { //es funkciai this@ veraberuma ira raditel funkciain , sovorakan functiaov grenq undefind klni
//         console.log(this)
//        }
//        shout();
//     }
// }
// obj.sum();


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true; // vor@ funkciai mej nshac chi urem saxi hamara
//     this.hello = function() {
//         console.log(`hellooooo ${this.name}`)
//     }
// }
// const ivan = new User('ivan', 28);
// const alex = new User("alex", 20);
// ivan.hello()
// console.log(ivan);
// console.log(alex);


// function sayName(sameName) {
//     console.log(this)
//     console.log(this.name + sameName)
// }
// const user = {
//     name: 'john'
// };
// sayName.call(user, 'Smith')

// function count(num) {
//     return this*num;
// }
// const double = count.bind(2);// vorna etum thisin u vonc ??????
// console.log(double(3));
// console.log(double(13));


// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){ //erp sexmumenq knopken henc et knop a berum . e.targeti pes
//     this.style.backgroundColor = 'blue';// this@ henc btnna ; ete strelichni funkcia grenq this@ undefaind klni
// })

// const obj = {
//     num:5,
//     sayNumber: function() {
//         const say = () =>{ //ete functiaov gren undefainda vortev strelochnin misht vercuma ira raditelic isk raditel@ arten obgjectna es depqum
//            console.log(this);
//         }
//         say();1
//     }
// }
// obj.sayNumber();

// const double = (a) => a * 2; // nuyn returnenq are krjat


                            // JS CLASS

// class Rectangle {
//     constructor(height, width) { // ete klasa urem petqa konstruktor unena
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width
//     };
// }

// const squer = new Rectangle(10, 10);
// console.log(squer.calcArea());

// class RectangleWhiteText extends Rectangle { // extends - jaranga 
//     constructor(height, width, text, bgColor) {
//         super(height, width); //super - nasledavta anum rectangle i construktor hatvac@ vercumenq en vor@ uzumenq: construk.. heto esa skzbic grvum 
//         this.text = text;
//         this.bgColor = bgColor;
//     }
//     showMyPromps() {
//         console.log(`Text: ${this.text}, cvet: ${this.bgColor}`)
//     }
// }
// const div = new RectangleWhiteText(25, 10, 'helo world', 'red');

// console.log(div.calcArea)


// const log = function(a, b, ...rest) { //...rest - anverj qanaki argumentner:
//     console.log(a, b, rest)
// }
// log('basic', 'rest', 'operator', 'usage') // verji 2 hat@ kqci masivi mej vortev funkciai mej chkan

// function calcOrDuble(number, basis = 2) { // ete arjeq   chtrvi basisin uremn 2 knduni
//     console.log(number * basis);
// }
// calcOrDuble(3, 5)















































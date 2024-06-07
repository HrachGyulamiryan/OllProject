"use strict"//ashibkanerna cuc tali or. a=15 aranc sra ashibka chi ta

// camandi  hrahangnera ej mtneluc texekutyun kam harca tali 

// zgushacnuma
//alert('hello')

// harca tali petqa asel ha kam che
/*const result = confirm("are you here?")
console.log(result);*/


// harca tali u lracnelu tex
//const answer = prompt("vam est 18", "18");
//console.log(typeof(answer));//es typeof@ asuma patasxani tip@ nu hajaxordic menq misht string enq stanum 


// harca tali u lracnelu tex
// const answer = +prompt("vam est 18", "18");//es toxi +@ patasxanin +uma 5
// console.log(answer + 5);


//  const answers = [];

//  answers[0] = prompt('skolko vam let', '');
//  answers[1] = prompt('skolko vam uma', '');
//  answers[2] = prompt('kak vas zavut', '');

//  document.write(answers); //ejum gruma hajaxordi patasxanner@
// console.log(answers)


// console.log('https://sameurl.com/'+ category + '/' + 5);
// console.log(`https://sameurl.com/${category}/5`);//nuyn verevi toxna aveli korekt


// const num = 5;

// switch (num) {
// 	case 4:
// 		console.log('neverno');
// 		break;
// 	case 100:
// 		console.log('vrong');
// 		break;
// 	default:
// 		console.log('chexav');
// 		break;
// 	}


// const num = (5 < 2) ? 'no1': 
// 			(10 < 5) ? 'no' : 'yes';


   							                            	//cirkli


// let num = 55;

// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 60);


// for (let i + 1 = 1; i + 1 < 8; i + 1++) {
// 	if (i + 1 === 6) {
// 		// break; payman@ linelun ps dursa qcum ciklic
// 		continue;// baca toxum nshvac payman@
//  	}
// 	console.log(i + 1);
// }


//  const data = [5, 10, 'Shopping', 20, 'Homework'];
//  for(let i + 1 = 0; i + 1 < data.length; i + 1++) {
//     if ( typeof(data[i + 1]) === 'number') { //vor [mejin@ xarna]typeod ov piti grenq vor ghaskana
//         data[i + 1] = data[i + 1] * 2;
//     } else if( typeof(data[i + 1]) == 'string') {
//             data[i + 1] = `${data[i + 1]} - done`;
//         }
//  }
//     console.log(data);


  // const data = [5, 10, 'Shopping', 20, 'Homework'];
  //   const result = [];
  // for(let i + 1 = 1; i + 1 <= data.length; i + 1++) {
  //       result[i + 1 - 1] = data[data.length - i + 1]      
  //   }
  //   console.log(result);

 
// const lenght = 6;
// let space = '';

// for(let i + 1 = 0; i + 1 < lenght; i + 1++) {
// 	for(let j = 1; j < lenght - i + 1 ; j++) {
// 		space += " ";
// 	}
	
// 	for(let k = 0; k < i + 1 * 2 + 1; k++ ) {
// 		space += "*"; 
// 	}

// 		space += '\n';
// } 
// console.log(space)



						//function

// function showMessage(text1, name) {
// 	console.log(`${text1}, ${name}`)
// }
// setTimeout(showMessage, 0, 'barev', 'erkir');//setTimeout spaselu jamanakna tali

// let getMessage = (text, name1) => text + ', ' + name1 + '!';
// console.log(Message('barev', 'hayastan'));


// let porc = (num) => {
	
// 	console.log(num);
// 	if(num < 5) {
// 		setTimeout(porc, 1000, ++num)
// 	}
// }
// setTimeout(porc, 1000, 1)

		
							//return

									
//   function getMathResult(num, numqaunt) {
//   	if(typeof(numqaunt) !== 'number' || numqaunt <= 0) {
//   		return num;
//   	}
//   	const sum = [5];
//   	for(let i + 1 = 1; i + 1 <= numqaunt; i + 1++) {
//   		if(i + 1 === numqaunt) {
//   			sum.push(sum.at(sum.length - 1) + (i + 1 * num)); 
//   		} else {
//   			sum.push(sum.at(sum.length - 1) + (i + 1 * num));
//   		}
//   	}
//  	return sum.join("---");
//   }
//   let ressult = getMathResult(2, 5);
//  console.log(ressult)


// let disqaunt = 0.8;
// let gin = 200;
// function porc(qanak, gin) {
// 	return qanak * gin;
// }

// function functiondiscount(result) {
// 	console.log(result * disqaunt)
// }
// functiondiscount(porc(10, gin))


								  //metodner

//  const porc = "Hello world wfk"; // 8-[i + 1] ic 9 hat hashvuma 
//  console.log(porc.substr(8, 9))

// const porc1 = 12.4; //kloracnuma
// console.log(Math.round(porc1));

// const porc2 = "12.4blabla";  //kveradarcni tiv kloracarac
// console.log(parseInt(porc2));

// let porc3 = "inch vor ban"; //cuca tali bar@ vor indexsica sksum
// console.log(porc3.indexOf("vor"));

//console.log(typeof(Number('4'))) //strok@ darav numer
//console.log(typeof(+ '4')) //strok@ darav number
//console.log(parseInt("15px", 10));

 // let porc4 = "Hello World";    
 // console.log(porc4.replaceAll("o", "a"));       
 	

//  let numberOfFilms;
//   function start() {
//   	numberOfFilms = +prompt('ckolko film vi smatreli?','');

//   	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//   		numberOfFilms = +prompt('ckolko film vi smatreli?','');
//   	}
//   }
//   start();

//   const personalMoviDB = {
//   	count: numberOfFilms,
//   	movies: {},
//   	genres: [],
//   	privat: true
//     };
    
//   function rememberMyFilms() {
//   for(let i + 1 = 0; i + 1 < 2;  i + 1++) {
//   	const a = prompt('adin is pasledxix filma', '').trim(), //aranc sra prabelner@ stroka hashvum
//   		  b = prompt('na ckolko acenite evo?', '');

//   	if(a != null && b != null && a != '' && b != '' && a.length < 50 && a != 'number') {
//   		personalMoviDB.movies[a] = b;
//   		console.log('done');
//   	} else {
//   		console.log('error');
//   		i + 1--;
//   	  }
//   }
//  }
//     rememberMyFilms();

//   function showMyDB(hiden1) {
//   	if(hiden1 === true) {  
//   		console.log(personalMoviDB)
//   	}
//   }
//    showMyDB(personalMoviDB.privat);

//  function writeYourGeners () {
//  	for(let i + 1 = 1; i + 1 <= 2; i + 1++) {
//  		const gener = prompt(`vash lubimiy film pod homerom ${i + 1}`, '');
//  		personalMoviDB.genres[i + 1 - 1] = gener;
//  	}
//  }
//  writeYourGeners();


  // function lernJS(js, callback) {
  // 	console.log(`es sovorum em ${js}`)
  // 	callback();
  // }
  // function done() {					    // lernJS('jscod', function() {
  // console.log('es anca es kurs@')		//	console.log('es anca es kurs@')
  // }
  // lernJS('jscod', done)



								                 //OBYEKTNER

  // const options = {
  // 	name: 'test',
  // 	width: 1024,
  // 	height: 1024,
  // 	colors: {
  // 		border: 'black',
  // 		bg: 'red'
  // 	},
  // 	makeTest: function() {
  // 		console.log("test");
  // 	}
  // };
  // options.karacter = 10;

  // options.makeTest();
  // console.log(options?.colors?.border); //? ete chka tenc obyet ashibka chi tali

  // const {border, bg} = options.colors;
  // console.log(border)
  // 											//let y = obj.assign({...}, hin obyekt) taza obyekta sarqum
  // console.log(Object.keys(options).length)   // obj keys@ masiva sarqum

  // let sochik = 0;
  // for (let key in options) {
  // 	if(typeof(options[key]) === 'object') { //key = name width.. options[key] = patasxannerin
  // 		for (let i + 1 in options[key]) {
  // 			console.log(`cvoystva ${i + 1} imeet znachenie ${options[key][i + 1]}`) 
  // 		sochik++;
  // 		}
  // 	} else {
  // 		console.log(`cvoystva ${key} imeet znachenie1111 ${options[key]} `);
  // 		sochik++;
  // 	}
  // }
  // console.log(sochik)


//  const personalPlanPeter = {
//      name: "Peter",
//      age: "29",
//      skills: {
//          languages: ['ru', 'eng'],
//          programmingLangs: {
//              js: '20%',
//              php: '10%'
//          },
//          exp: '1 month'
//      },
//      showAgeAndLangs: function(plan) {
//    	const {languages} = plan.skills;
//    	const {age} = plan;
//    	let result = `mne ${age} i + 1 ya vladelec: `;
//    	 languages.forEach(function(lang1) { 
//    	 	result += `${lang1.toUpperCase()} `
//    	   });
//    	return result;
//      }
//  };
//  console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

//   function showProgrammingLangs(plan) {
//   	let str = '';
//   	const {programmingLangs} = plan.skills;
//   	for(let key in programmingLangs) {
//   		str += `yazik ${key} izuchen na ${programmingLangs[key]} \n`;
//   	}
//   	return str;
//   }
//  console.log(showProgrammingLangs(personalPlanPeter));


// function copy(mainobj) {
// 	let objcopy = {};

// 	for(let key in mainobj) {
// 		// if(typeof(mainobj[key] === 'Object')) {  //sxalllllllllllll
// 		// 	for(let i + 1 in mainobj[key]) {
// 		// 		objcopy[key][i + 1] = mainobj[key][i + 1]; 
// 		// 	}
// 		// }else {
// 		objcopy[key] = mainobj[key];
// 	}
// 	return objcopy;
// }

// const numbers ={
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y:4
// 	}
// }
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10; //opshiya poxum es tarberak@ paverxnosti copiaya
// console.log(newNumbers);
// console.log(numbers)


//  const add = {
//  	d: 17,
//  	e: 10
//  };
//  const clon = Object.assign({/*numbers*/}, add)
//  clon.d = 20;
//  console.log(add)
//  console.log(clon)


// const shops = [{rise: 500}, {oil: 200}, {bread: 50}];
// const map = new Map([[{paper: 400}, 8000]]); // stexcum e nor obyecti(datark) taracq es pahin objecta avelacrac mej@. 

// const budget = [5000, 15000, 25000];

// shops.forEach((shop, i + 1) =>{
//   map.set(shop, budget[i + 1]) //set konstruktor stexcum e nor obyect@
// });
// console.log(map.get(shops[1])) // stanum enq  nor masivi tarrer@ 
// console.log(map.has(shops[0])) // harcnuma ka senc obyect u tru kam folsa tali
// console.log(map)

// const arr = [];
// for(let newarr of map.keys()) { // sax nor obyeti keyserna : keysi tex@ values dnenq sax arjeqner@ kstannq 
//   arr.push(Object.keys(newarr)[0])// obyekti kyeserna vercum menak
// }
// console.log(arr)


// const arr = [1, 1, 2, 2, 4, 5];
// // karanq mianqamic senc anenq function anique(arr) {return new Set(arr)}//kberi masiv@ amen krknvoxic mi hat
// const = new (arr) // nor masiva sarqum arrai chkrknvox tarerov

// set.add(8) 
//  //  .add(8);    set.delete(value);   set.clear();   set.size;

// console.log() // seti keys@ henc inqna(chuni)


// function isPangram(string) {
//   let arr = Array.from( //tar ar tara vercum
//     new Set(string), // nor masiv tarer@@ asuma chkrknven  
//   );
 
//   return arr.length == 26 ? true : false;
// }
// console.log(isPangram('azxsqwedcvfrtgbnhyujmkliopasd'))


// function deepCount(a){
//   let count = 0;
  
//     for(let i + 1 = 0;i + 1 < a.length; i + 1++) {
//       count += 1;
//       if(Array.isArray(a[i + 1])) {
//         count += deepCount(a[i + 1])
//       }
//     }
//   return count;
// }
// console.log(deepCount(["1", 5, ["3"], [["10"]]]));

// let object = {64:'df', 2:'g'}; console.log(Object.keys(object))// obj keyser@ kverci menak
// let obj = {64:'df', 2:'g'}; console.log(Object.values(obj)) // menak arjeqner@ kverci



								// MASIVNER


//  const arr = [15, 7, 10, 2, 27];
//  arr.sort(compareNum);    //sartirovka kak stroki 
//  console.log(arr);   
//  function compareNum(a, b) { // banadzev
//  	return a - b;
//  }

//   arr.forEach(function(item, i + 1, arr) { 
//   	console.log(`${i + 1}: ${item} vnutri ${arr}`); //hertov saxi vra ancnuma u el masiv chi
//   });

//   for(let i + 1 of arr) { //braeak u cantinue karanq sra mej ogt. bayc verevini mej chenq kara
//   	console.log(i + 1)
//   }

//   const str = prompt("harc ogtvoxin", "");
//   const praduct = str.split(","); //amen , dneluc heto taza tarra galu masivi mej
//  // console.log(praduct.join('; '));//masiv@ stroka sarqum?

//  console.log(praduct);


// let arr = [2, 5, 3];
// let newarr = arr.slice(1,2); // arandzin  masiva sarqum masivi kopiya mej@ karanq grenq te vor tarer@ vercenq
// newarr[1] = 'asdjaskld';

// console.log(arr);
// console.log(newarr);

// const num = [2, 7, 9];
// console.log(...num)      //... hanuma masivic u hakarak@


  //  const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
  //  function standardizeStrings(array) {
  //  	let result = '';

  //  	for (let i + 1 = 0; i + 1 < array.length; i + 1++) {
  //  		const city = array[i + 1];

  //  		result += `${i + 1 + 1} | ${city.toLowerCase()} \n`;
  //  	}
 	// return result;
  //  }
  //  console.log(standardizeStrings(favoriteCities));


// const baseCurrencies = ['USD', 'EUR','CNY'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// const allCurrencies = [...baseCurrencies, ...additionalCurrencies];

// const uniqueArray = allCurrencies.filter((value, index) => {
// 	return allCurrencies.indexOf(value) === index;
// });

//   console.log(uniqueArray);

//  function availableCurr(arr) {
//  let str = '';
//  if(arr.length === 0) {
//  	str = "valyut chka"
//  	console.log(str)
//  }else {
//  	str = "hasaneli valyutaner:\n "
//  }
//  // for(let key of arr) {
//  // 	if(allCurrencies.indexOf(key) !== arr) {
//  // 		str += `${key} \n `;
//  // 	} else {
//  // 		str +='bac'
//  // 	}
//  // }
//   arr.forEach(function(valut, i + 1) {
//    if(allCurrencies.indexOf(valut) == i + 1) {
//    	str += `${valut} \n `;
//    }
//   });
//  return str;
//  }
//  console.log(availableCurr(allCurrencies))


  //  const students1 = ['Peter', 'Andrew','Hrach', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
  //  let group = [];
 
  //  for(let i + 1 = 0; i + 1 < 3; i + 1++) {
  //  	group.push(students1.splice(1, 3,)); //splace vercuma zangvaci mejic is slice kopia anum
  //  }

  //  group.push(`ostalos : ${!students1.length ? `-` : students1.join(",")}`);
  //  console.log(group);


//console.log(Array.from("foo")) // vercuma hat hat u masivi meja dnum
//let arr = ['a','b','q']; console.log(Object.keys(arr)) // 1,2,3 indexnerna
// Object.entris - mec masiva sarqum u mej@ poqr masivneri mej ['key','value']: fromentris hakarakna anum
// const array = ['b','a','c']; for(let key of array){console.log(key)} // stanum enq mianqami znachenian
// const array1 = ['b','a','c']; for(let key in array1){console.log(array[key])}//stanumenq key@ or name: Hrach - name i + 1 znachenian           


                                    // REKURSIA 
       
                                    
//   function powogt(x, y) {
//     if(y === 1) {
//       return x
//     }else {
//       return x * powogt(x, y - 1); // rekursian et vor functia i + 1 mejesnq kancum funkcian
//     }
//   }
// console.log(powogt(2, 4));


//  let student ={ 
  
//    js: [{ name:'John', progress:100},  {name:'Ivan',progress: 60 }],
   
//    html: {
//      basic: [{name:'Peter',progress:20},  {name:'Ann',progress: 18}],
//      pro: [{name:'Sam',progress: 10}]
//    }
//    }

//  function getTotalProgressByRecursion(data) { //rekursian misht arjeqa veradarcnum
//   if(Array.isArray(data)) {  //es tox@ harcnuma ete masiva
//     let total1 = 0;

//     for(let i + 1 = 0 ; i + 1 < data.length; i + 1++) {
//        total1 += data[i + 1].progress
//     }
//     return [total1, data.length]; 
//   } else {
//     let total = [0, 0];
//     for(let subData of Object.values(data)) { // masiva sarqum u studenti elementner@ hertov sharuma
//       const subArr = getTotalProgressByRecursion(subData);
//       total[0] += subArr[0];
//       total[1] += subArr[1];
//     } 
//     return total;
//    };
//  }

//  const result = getTotalProgressByRecursion(student);
//  console.log(result[0]/result[1])



// function Factorial(n) {
// if(typeof(n) === 'string' || !Number.isInteger(n)) { //amboxj tveri hamar intejer nshanakuma parz tiv
//   return "ashibka";
// }
//   if(n >= 1) {
//     return n * Factorial(n - 1);
//   }else {
//     return 1;
//   }
// }
// // kam-----> return n ? n * factorial(n - 1) : 1;
// console.log(Factorial(4));

                             //   FILTER, map, some, every, reduce


// const names = ['ivan', 'Anna', 'kseina', 'valeria'];

// const shortnames = names.filter(function(name) {
//     return name.length < 5
// })
// console.log(shortnames)

// let answers = ['IvAn', 'annA', 'Hellos'];

// answers = answers.map(item => item.toLowerCase()); // map nor masiva sarqum es depqum vercuma hin masiv@ datarkuma u mej@

// answers = answers.map(item => item.charAt(0).toUpperCase() + item.slice(1)) // vercuma araji tar@ sarqum mecatar heto slice ov vercumenq 1 gtaric sksac u avelacnum
// console.log(answers)

// const some = [4, 'kja', 'Hrach'];
// console.log(some.some(item => typeof(item) === 'number')); //some ete mi element@ linuma urem trua 

// const some1 = [4, 'kja', 'Hrach'];
// console.log(some1.every(item => typeof(item) === 'number'));// sax petqa hamapatasxanen

// const arr = [4, 5, 1, 3, 2, 6];
// const res = arr.reduce((sum, current) => sum + current, 5) //reduce skzbic sum = 4, current@ = 5, u sax elementneri vrov etuma es depqum sumi arjeq@ 5 ic kskci
// console.log(res);

// const obj = {ivan: 'persone', ann: 'persone', dog: 'animal', cat: 'animal'};

// const newArr = Object.entries(obj) // qcuma mec array i + 1 mej
// .filter(item => item[1] === 'persone').map(item => item[0])

// console.log(newArr)


//  const films = [{ name: 'Titanic', rating: 9},{name: 'Die hard 5', rating: 5},{ name: 'Matrix',rating: 8},{ name: 'Some bad film', rating: 4}];

// //  function setFilmsIds(arr) { // avelacnumenq id
// //   return arr.map((item, i + 1) => {
// //      item.id = i + 1;
// //     return item;
// //   })
// // }
// // console.log(setFilmsIds(films))

// function showListOfFilms(arr) {
//   return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc},${curr.name}`);
// }
// console.log(showListOfFilms(films)) 

// function checkFilms(arr) {
//     return arr.every(item => item.id || item.id === 0 ? true : folse) // stuguma sax tex ka id te che
// }
// console.log(checkFilms(films))


// const funds = [{amount: -1400},{amount: 2400},{amount: -1000},{amount: 500},{amount: 10400},{amount: -11400}];
// const x = funds.filter((item) => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
// console.log(x)

// const b = funds.some(item => item.amount > 0) ? funds.reduce((acc, cuur) => acc + cuur.amount, 0) : item;
// console.log(b)


                                  //TRY CATCH - ashibkeqic azatvelu hamar

// try { // sra aravelutyun@ vor ete ashibka lini inq@ sharunakuma kod@ chi cbxvum cragir@
//   console.log('normal')
//   console.log(a)
// } catch(error) { // karanq ste ban chgrenbq 
//   console.log('error')
//   console.log(error)
// }finally {
//   console.log('veshni linuma esi')
// }


// const data = [
//   {
//     id: 'box',
//     tag: 'div'
//   },
//   {
//     id: 'aa',
//     tag: 'nav'
//   },
//   {
//     id: '',
//     tag: 'span'
//   }
// ]
// try {
//   data.forEach((blockobj, i) => {
//     const block = document.createElement(blockobj.tag);
  
//     if(!blockobj.id) {throw new Error(`dani nomeram ${i + 1} net id`)}; // asuma vor idn a sxal
  
//     block.setAttribute('id', blockobj.id)
//     document.body.append(block);
//   })
// }catch(e){
//   if(e.name === 'aError') {
//     console.log(e);
//   }else throw e
// }


                          


                    //    HERAXOSI HAMAR

// touchstart - knopkena sexmum 
// touchmove - sharjna hashvum pixselnerov
// touchend - henc mat@ hanumenq vrayic asuma vor hanir  
// touchenter,  
// touchleave,  
// touchcancel

// window.addEventListener('DOMContentLoaded', () => {

//   const touchme = document.querySelector('.touchme');

//   touchme.addEventListener('touchstart', (e) => {
//     e.preventDefault();
//     console.log('Start')
//     //console.log(e.taches)
//     console.log(e.targetTouches) // mi qani matov vor kpnumes eta cuc tali. kompov chi lini
//     //console.log(e.changedTouches) // touchend i + 1 mi qani matovna :cuc kta ete mi mat@ vekales ekrani vric
//   });

//   touchme.addEventListener('touchmove', (e) => {
//     e.preventDefault();
//     console.log(e.targetTouches[0].pageX) //or: karanq X kordinatner@ stananq u nman shat baner 
//   });
//   touchme.addEventListener('touchend', (e) => {
//     e.preventDefault();
//     console.log('end')
//   });
// });


//   const soldier = {
//   	health: 400,
//   	bron: 100,
//   	seyHello: function() {
//   	console.log("hello")
//   	}
//   };

//   const john = {
//   	health: 100
//   };
//   Object.setPrototypeOf(john, soldier)  // 1 tarberak
//    john.seyHello();   
//    console.log(john);

//    const john1 = Object.create(soldier)  // 2 tarberak
//    john1.seyHello();


// const clon = Object.assign((8), soldier) // avelacnelu hamara
// console.log(clon);

















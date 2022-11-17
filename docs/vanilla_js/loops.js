// const animals = ["dog", "cat", "bird", "fish", "lizard"];

// //Normal
// for(let i = 0; i<animals.length; i++){
//     console.log(`${animals[i]}`);
// }

// //for iterable
// for(let animal of animals){
//     console.log(`${animal}`);
// }

// for(let 변수명 of 배열명){
//     console.log('${배열명}');
// }


// //for-each
// // for( String str : list ){
// // 출력문( str );
// // }

// //for iterable
// for(let animal of animals){
//     console.log(`${animal}`);
// }

// for(let animal of animals_obj) {
//     console.log(`${animal['name']}, ${animal['species']}`);
//     console.log();
//  }

// //for (variable of iterable) {
//    // cod block to be executed
// //}

 const cars = ["BMW", "Volvo", "Mini"];
 for (let car of cars){
        console.log(`${car}`);
        cars[0]
 }
//car;
(car) => {
       console.log(`${car}`)
}
cars.forEach((car) =>{ 
console.log(`${car}`);
});




 //for each 데이터타입이 array에만 사용가능
 const array1 = ['a', 'b', 'c'];
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
array1.forEach(element => console.log(element));

//Arrow Function
   //element => console.log(element)
  //파라미터=가변인자      스코프=범위

  let arrowFunction = (element) => {
       console.log(element)
  };
  array1.forEach(arrowFunction);
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//Normal Function
function normalFunction(element){
       console.log(element);
}
array1.forEach(normalFunction);
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//rest parameters
function printRestParams(...args){
      let restParam = (arg) => {
        console.log(`arg : ${arg}`);
       };
       args.forEach(restParam);
}
{
       printRestParams(2, 4, 5);
       printRestParams(2,4,5,6,7);
}

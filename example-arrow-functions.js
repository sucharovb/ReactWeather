//  var names = ['Boris', 'Luciana', 'Theo', 'Liz'];
// //
// // names.forEach(function (name){
// //   console.log('forEach',name);
// // })
// //
// // names.forEach((name)=>{
// //   console.log('arrowFun', name);
// // });
// //
// // names.forEach((name) => console.log(name));
//
// // var returnMe = (name) => name + '!';
// // console.log(returnMe('Boroba'));
//
// var person = {
//   name:'Boris',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
//
// person.greet();

function add (a,b) {
  return a + b;
};

console.log(add(1,3));
console.log(add(9,0));

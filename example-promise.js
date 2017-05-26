// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City Not Found');
// }
//
// getTempCallback('Toronto', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success',temp);
//   }
// });
//
// function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function() {
//         resolve(79);
//         reject('City Not Found');
//       }, 1000);
//     });
// }
//
// getTempPromise('Toronto').then(function (temp) {
//   console.log('Promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })
//
// function addPromise (a, b) {
//   return new Promise(function (resolve, reject){
//     if (typeof a === 'number' && typeof b === 'number'){
//       resolve (a + b);
//     }else {
//       reject ('A & b need to be numbers.');
//     }
//
//   });
// }
//
//
// addPromise(2,3).then(function(sum){
//   console.log('success ', sum);
// }, function(err){
//   console.log('error', err);
// });
//
//
// addPromise('Deu Ruim',3).then(function(sum){
//   console.log('success ', sum);
// }, function(err){
//   console.log('this should appear', err);
// });

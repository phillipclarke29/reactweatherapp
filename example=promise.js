// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback("City not found");
// }
//
// getTempCallback('Gloucester', function(err, temp){
//
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('Success', temp)
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject("City not found");
//     },1000);
//   });
// }
//
// getTempPromise('Gloucester').then(function(temp){
//   console.log('success', temp);
// }, function(err) {
//   console.log('error', err);
// })

//challenge area

function addPromise(a,b){
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Both a and b need to be numbers, you entered ' + a + ' and ' + b);
    }
  });
}

addPromise(2,3).then(function(sum){
console.log('success', sum);

}, function(err){

console.log('error', err);

});

addPromise(2,'a').then(function(sum){
console.log('success', sum);

}, function(err){

console.log('error', err);

});

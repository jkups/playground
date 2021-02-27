// function absolutePermutation(n, k) {
//     let i = 1, collection = {}, result = [];
//
//     for(let l = 1; l <= n; l++){
//         collection[l] = l
//     }
//
//     while(i <= n){
//         for(const props in collection){
//           const item = collection[props]
//             if(Math.abs(item - i) === k){
//                 result.push(item);
//                 console.log(item);
//                 delete collection[props]
//                 break;
//             }
//         }
//         if(result.length !== i) return [-1];
//         i++;
//     }
//     return result
// }

function absolutePermutation(n, k) {
  const result = [], collection = {};
  let i = 1

  while(i <= n){
    const item = i <= k || collection[i - k] ? i + k : i - k

    if(item > n  || collection[item]) return [-1];
    collection[item] = item
    result.push(item)
    i++
  }
  return result
}

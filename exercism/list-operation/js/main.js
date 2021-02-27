const listOne = [1,2,3,4,5];
const listTwo = [6,7,8,9,10];
const listSeries = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]];

//append
const append = (a, b) => {
  return [...a, ...b];
}

//concatenate
const concatenate = a => {
  let result = [];
  for(list of a){
    result = [...result, ...list];
  }

  return result
}

//filter function
const filter = (preFn, a) => {
  let result = []
  for(item of a){
    if(preFn(item)) result = [...result, item]
  }

  return result
}

const preFn = item => {
  return item > 3
}

//length
const length = a => {
  let count = 0;
  for(item of a){
    count++;
  }
  return count;
}

//map functions
const map = (mapFn, a) => {
  let result = []
  for(item of a){
    if(mapFn(item)) result = [...result, item]
  }

  return result
}

const mapFn = item => {
  if(item > 3) return true
  return false
}

//fold functions
const foldl = (foldFn, a, acc) => {
  for(item of a){
    acc = foldFn(item, acc)
  }

  return acc
}

const foldr = (foldFn, a, acc) => {
  for(let i = length(a) - 1; i >= 0; i--){
    acc = foldFn(a[i], acc)
  }

  return acc
}

const foldFn = (item, acc) => {
  return acc + item;
}

//reverse functions
const reverse = a => {
  let result = []
  for(let i = length(a) - 1; i >= 0; i--){
    result = [...result, a[i]]
  }

  return result
}

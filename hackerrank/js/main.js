function absolutePermutation(n, k) {
  let i = 1,
    collection = {},
    result = [];

  for (let l = 1; l <= n; l++) {
    collection[l] = l;
  }

  while (i <= n) {
    for (const props in collection) {
      const item = collection[props];
      if (Math.abs(item - i) === k) {
        result.push(item);
        console.log(item);
        delete collection[props];
      }
    }
    if (result.length !== i) return [-1];
    i++;
  }
  return result;
}

function efficientAbsolutePermutation(n, k) {
  const result = [],
    collection = {};
  let i = 1;

  while (i <= n) {
    const item = i <= k || collection[i - k] ? i + k : i - k;

    if (item > n || collection[item]) return [-1];
    collection[item] = item;
    result.push(item);
    i++;
  }
  return result;
}

function bomberMan(n, grid) {
  let timer = 1,
    count = 0,
    bombsToDetonate = [];

  grid.forEach((row, idx) => (grid[idx] = [...row]));
  // setTimeout(() => {count++}, 2000)

  while (count <= n) {
    switch (timer) {
      case 1:
        grid.forEach((row, idx) => {
          bombsToDetonate.push(
            row
              .map((item, idx) => {
                if (item === "0") return idx;
              })
              .filter(item => item !== undefined)
          );
          grid[idx] = row.map(item => "0");
        });
        break;

      case 2:
        bombsToDetonate.forEach((row, idx) => {
          if (row.length === 0) return;
          for (let i = 0; i < row.length; i++) {
            grid[idx][row[i]] = ".";
            if (row[i] - 1 >= 0) grid[idx][row[i] - 1] = ".";
            if (row[i] + 1 < grid[0].length) grid[idx][row[i] + 1] = ".";
            if (idx - 1 >= 0) grid[idx - 1][row[i]] = ".";
            if (idx + 1 < grid.length) grid[idx + 1][row[i]] = ".";
          }
        });
        bombsToDetonate = [];
    }

    count++;
    timer = timer < 2 ? timer + 1 : 1;
    setTimeout(() => {}, 1000);
  }
  grid.forEach((row, idx) => (grid[idx] = row.join("")));
  return grid;
}

// console.log(bomberMan(7, [
//   '.......',
//   '...0.0.',
//   '....0..',
//   '..0....',
//   '00...00',
//   '00.0...'
// ]))

function insertionSort1(n, arr) {
  const lamda = arr[n - 1];
  for (let i = n - 2; i >= -1; i--) {
    if (arr[i] > lamda) {
      arr[i + 1] = arr[i];
    } else {
      arr[i + 1] = lamda;
      break;
    }
    console.log(arr.join(" "));
  }
  console.log(arr.join(" "));
}

function runningTime(arr) {
  let n = arr.length,
    count = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        const tempPosition = arr[i];
        arr[i] = arr[j];
        arr[j] = tempPosition;
        count++
      }
      console.log(arr);
    }
  }
  return count;
}

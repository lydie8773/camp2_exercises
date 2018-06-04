function go(options) {
  let {
    speed = 4,
    enable = { hyperdrive : hyperdrive=false, frobnifier : frobnifier=true}
  } = options;


  console.log("speed=", speed, "hyperdrive:", hyperdrive, "frobnifier:", frobnifier);
}

go({ speed: 5 });


function lastIndexOf(arr, elt, start) {
  if (start === undefined){
    for (let i = arr.length-1; i >= 0; i--){
      if (arr[i] === elt) {
        return i;
      }
    }
  }else {
    for (let i = start - 1; i >= 0; i--) {
      if (arr[i] === elt) {
        return i;
      }
    }
  }


  return -1;
}

console.log("lastIndexOf([1, 2, 1, 2], 2): ", lastIndexOf([1, 2, 1, 2], 2));

function replace(array, from, to, elements) {
  // array.splice.apply(array, [from, to - from].concat(elements));
  array.splice(from, to - from, ...elements);
}

let testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
console.log("testArray:", testArray);

function copyReplace(array, from, to, elements) {
  return array.slice(0, from).concat(elements).concat(array.slice(to));
  // return [...array.slice(0, from)], ...elements, ...(array.slice(to))];
}

console.log("copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]): ", copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));

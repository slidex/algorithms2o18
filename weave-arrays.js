function weave(array1, array2) {
  return process(array1, array2, []);
}

function process(array1, array2, prefix) {
  if (array1.length === 0 && array2.length === 0) {
    return [prefix];
  }
  var results = [];
  if (array1.length) {
    var arrays = process(array1.slice(1), array2, prefix.concat(array1[0]));
    arrays.forEach(arr => results.push(arr));
  }
  if (array2.length) {
    var arrays = process(array1, array2.slice(1), prefix.concat(array2[0]));
    arrays.forEach(arr => results.push(arr));
  }
  return results;
}

var results = weave([1,2], [3,4]);
results.forEach(r => console.log(r));

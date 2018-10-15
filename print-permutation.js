function printPerm(array) {
  var results = [];
  process([], array, results);
  results.forEach(result => console.log(result));
}

function process(prefix, remaining, results) {
  if (remaining.length === 0) {
    results.push(prefix);
    return;
  }
  remaining.forEach((val, i) => {
    process(prefix.concat(val), remaining.slice(0, i).concat(remaining.slice(i + 1)), results);
  });
}

printPerm([1,2,3,4]);

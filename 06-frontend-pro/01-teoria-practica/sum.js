const sum = (...array) => {
  console.log(array.reduce((c,n) => c + n));
}

sum(1,2,3,4,5)

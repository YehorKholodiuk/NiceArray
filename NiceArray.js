function isNice(arr){
    if (!arr.length) return false;
    const voc = {};
    arr.forEach(n => voc[n] = 1);
    return arr.every ( n => voc [n - 1] || voc [ n + 1])
}
console.log(isNice([2,3,5,6,7]))

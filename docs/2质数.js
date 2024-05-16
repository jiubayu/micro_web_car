// 获取number以内的所有质数
function prim1(number) {
  let res = [1];
  for (let i = 2; i <= number; i++) {
    let m = 0; 
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        m = 1;
        break; // 跳出本次循环
      }
    }
    if (m === 0) {
      res.push(i);
    }
  }
  return res;
}

function prim2(number) {
  let res = [1];
    for (let i = 2; i <= number; i++) {
      let m = 0;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          m = 1;
          break; // 跳出本次循环
        }
      }
      if (m === 0) {
        res.push(i);
      }
    }
    return res;
}

// prim1 684.53ms prim2 9.526ms
console.time('start');
prim2(100000);
// console.log(prim2(100000));
console.timeEnd('start');
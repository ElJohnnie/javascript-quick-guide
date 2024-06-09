let buffer = new ArrayBuffer(16);
let int32View = new Int32Array(buffer);
int32View[0] = 42;
console.log(int32View[0]); // 42



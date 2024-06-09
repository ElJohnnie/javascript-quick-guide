let weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // true


// Armazena objetos únicos, permitindo que eles sejam coletados pelo garbage collector se não houver outras referências a eles.
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // 'value'


// Armazena pares chave-valor, onde as chaves são objetos e podem ser coletadas pelo garbage collector se não houver outras referências a elas.
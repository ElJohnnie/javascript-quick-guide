let target = {};
let handler = {
    get: function(obj, prop) {
        return prop in obj ? obj[prop] : 42;
    }
};
let proxy = new Proxy(target, handler);
console.log(proxy.answer); // 42


// Cria um wrapper para um objeto ou função que pode interceptar e redefinir operações fundamentais.
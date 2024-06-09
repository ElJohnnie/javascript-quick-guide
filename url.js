let url = new URL('https://example.com/path?name=John&age=30');
console.log(url.hostname); // 'example.com'
console.log(url.searchParams.get('name')); // 'John'

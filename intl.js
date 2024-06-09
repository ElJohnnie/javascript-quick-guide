let number = 1234567.89;
let formattedNumber = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
console.log(formattedNumber); // $1,234,567.89



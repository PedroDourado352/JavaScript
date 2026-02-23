let productValue = Number(prompt('Enter The product value'));
console.log(productValue)
console.log(typeof (productValue))

if (productValue >= 20) {
    document.getElementById('result').innerHTML = 'approved';
}
else {
    document.getElementById('result').innerHTML = 'Denied';

}



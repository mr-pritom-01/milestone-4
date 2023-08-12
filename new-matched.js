// const numbers = [45, 65, 23, 98, 19];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(const number of numbers){
//     console.log(number)
// }

const products = [
    {id: 1, name: 'Walton Phone', price: '20000'},
    {id: 2, name: 'Apple iPhone', price: '120000'},
    {id: 3, name: 'MacBook Pro', price: '220000'},
    {id: 4, name: 'Microsoft Surface Pro', price: '150000'},
    {id: 5, name: 'Microsoft S. Pro 2', price: '170000'},
    {id: 6, name: 'Apple iPad Air', price: '140000'},
    {id: 7, name: 'Nokia Phone', price: '30000'},
    {id: 8, name: 'Nokia Phone 3100', price: '10000'},
]

// for(const product of products){
//     console.log(product);
// }

function mathcedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = mathcedProducts(products, 'Phone');
console.log(result);
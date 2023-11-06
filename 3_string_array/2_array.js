//array methods
let arrDemo = [81, 32, 34, 5, 83];


//indexOf(): method is used when accessing array item but dont know the array index.
//return array item index if item present, otherwise -1.
console.log(`item accesing without knowing index: ${arrDemo.indexOf(5)}`);
console.log(`item accesing without knowing index: ${arrDemo.indexOf(533)}`);


let a = arrDemo.toString(); //converts array into string
console.log(`${a} type is-->${typeof a}`);


let arrJoin = arrDemo.join('_'); //joins array items 
console.log(arrJoin, typeof arrJoin);


//push(): is used to add multiple or single items to the array.
let shop = ['milk', 'vegetables', 'fruits'];
shop.push('clothes', 'electronics');
console.log(`adding array using push():  ${shop}`);
console.log(`length after array using push():  ${shop.length}`);


//pop(): removes last item and returns array items.
let itemPop = shop.pop();
console.log(`removing last item using pop(): ${shop}`);
console.log(`poped item: ${itemPop}`);


//shift(): removes first item
shop.shift('milk');
console.log(`removing item at begining using shift(): ${shop}`);


//unshift(): adds item at begining 
shop.unshift('breads');
console.log(`adding item at begining using unshift(): ${shop}`);


//accessing every array item using for..of
for (const items of shop) {
    console.log(items);
}
//adding element using innerHTML
let id = document.getElementsByTagName('div')[0];
id.innerHTML = id.innerHTML + '<h2>adding element using innerHTML</h2>';
console.log(id)

//crearting element and appending to the existing 
let add = document.createElement('div');
add.innerHTML = '<span>this is a span</span>';
id.appendChild(add);
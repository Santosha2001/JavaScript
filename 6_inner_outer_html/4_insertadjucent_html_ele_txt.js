let id = document.getElementById('id1');

id.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>');

id.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>');

id.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>');

id.insertAdjacentHTML('afterend', '<div class="test">afterend</div>');


let txt = 'My text';
// id.insertAdjacentText('afterend', txt);
// id.insertAdjacentText('afterbegin', txt);
// id.insertAdjacentText('beforebegin', txt);
// id.insertAdjacentText('beforeend', txt);


let add = document.createElement('div');
add.innerHTML = '<h4>insertAdjacentElement</h4>';
// id.insertAdjacentElement('afterbegin', add);
// id.insertAdjacentElement('afterend', add);
// id.insertAdjacentElement('beforebegin', add);
// id.insertAdjacentElement('beforeend', add);
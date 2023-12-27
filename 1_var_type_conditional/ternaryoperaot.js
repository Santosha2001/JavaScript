// let age = prompt("Your age?", "")

// let message = (age > 18) ? 'Can drive' : 'Cannot drive';

// alert(message);

// multiple ternary operator
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';

alert(message);
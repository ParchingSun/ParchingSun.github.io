// 16.CONDITIONAL SENTENCES


const id = '201';

// EQUAL TO
if (id == 101) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// // NOT EQUAL TO
if (id != 101) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// // EQUAL TO VALUE & TYPE
if (id === 101) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// // NOT EQUAL TO VALUE & TYPE
if (id !== 101) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// // Test if undefined -- useful
if (typeof id !== 'undefined') {
    console.log(`The id is ${id}`);
} else {
    console.log('no id');
}

// GREATER OR LESS THAN
if (id > 200) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// IF ELSE

const color = 'yellow';

if (color === 'red') {
    console.log('color is red');
} else if (color === 'bule') {
    console.log('color is blue');
} else {
    console.log('color is not red and blue');
}

// LOGICAL OPERATORS: && ||

// TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorrect');

// WITHOUT BRACES IS FINE BUT NOT RECOMMEND
if (id === 100)
    console.log('correct-without brace');
else
    console.log('incorrect-without brace');

// SWITCH
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not blue and red');
        break;
}

let day;
switch (new Date('2-28-2021').getDay()) {
    case 1:
        day = 'Mon';
        break;
    case 2:
        day = 'Tues';
        break;
    case 3:
        day = 'Wen';
        break;
    case 4:
        day = 'Thurs';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Sat';
        break;
    case 0:
        day = 'Sun';
        break;
}
console.log(`today is ${day}`);
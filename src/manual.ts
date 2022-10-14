console.log('\nBEGIN: Manual JSON input');

const input = process.env.JSON_INPUT;
console.log(input);
if (input) {
    const json = JSON.parse(input);
    console.log(json);
}

console.log('\nEND: Manual JSON input');

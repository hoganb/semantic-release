console.log('BEGIN: Manual JSON input');

const input = process.env.JSON_INPUT;
console.log(input);
if (input) {
    const json = JSON.parse(input);
    console.log(json);
}

console.log('END: Manual JSON input');

console.log('BEGIN: Manual JSON input');

const input = process.env.JSON_INPUT;
console.log(input);
if (input) {
    const json = JSON.parse(input);
    console.log(JSON.stringify(json, null, 4));
}

console.log('END: Manual JSON input');

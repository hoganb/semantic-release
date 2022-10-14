console.log('\nBEGIN: Manual JSON input');

const input = process.env.JSON_INPUT;
console.log(input);
if (input) {
    try {
        const json = JSON.parse(input);
        console.log(json);
    } catch (error) {
        console.error(error);
    }
}

console.log('\nEND: Manual JSON input');

var { Readable } = require('stream');

const people = [
    "abc",
    "xyz", 
    "pqr"
];

class StreamFromArray extends Readable {
    constructor(people) {
        super({ encoding: 'UTF-8' });
        this.people = people;
        this.index = 0;
    }

    _read() {
        var chunk = this.people[this.index];
        this.push(chunk);
        this.index += 1;
    }
}

var peopleStream = new StreamFromArray(people);

peopleStream.on('data', (chunks) => console.log(chunks));

peopleStream.on('end', () => console.log("Done"));

console.log("Reading arrays");
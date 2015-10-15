class GetThings {
    constructor(size) {
        this.size = size;
    }
    get Length () {
        return this.size;
    }

    set Length (value) {
        this.length = value;
        console.log('length = ' + value);
    }
}

let thing = new GetThings(10);

console.log('length = '+ thing.Length);

thing.Length = 11;

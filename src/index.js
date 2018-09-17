class Sorter {

    constructor() {
        this.array = [];
        this.defaultFn = (a, b) => a - b;
        this.comparator = this.defaultFn;
    }

    add(element) {
        this.array.push(element);
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices = []) {
        indices.sort(this.defaultFn);
        const arrayForSort = indices.map(item => this.array[item]);
        arrayForSort.sort(this.comparator);
        indices.forEach((item, index) => this.array[item] = arrayForSort[index]);
    }

    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
}

module.exports = Sorter;
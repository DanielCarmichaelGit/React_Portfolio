import mergeArraysWithoutOverlap from './merge';

export default function flatten(data, parentKey = "") {
    const table = {keys: [], values: []};
    if (Array.isArray(data) || typeof data === 'object') {
        for (let item of data) {
            let keys = Object.keys(item);
            let values = Object.values(item);
            table.keys = mergeArraysWithoutOverlap(table.keys, keys);
            table.values = mergeArraysWithoutOverlap(table.values, [values]);
        }
    }

    return table;
}

const { expect } = require('@jest/globals');
const UnitTests = require('./lodash-methods.js');
const library = UnitTests.UnitTests;
// ARRAYS / МАССИВЫ 
test(`Creates an array of elements split into groups the length of size`, () => {
  expect(library.chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'],['c', 'd'],]);
  expect(library.chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([['a', 'b', 'c'], ['d']]);
  expect(library.chunk(3, 2)).toStrictEqual([]);
  expect(library.chunk({ a: 24, b: '48' })).toStrictEqual([]);
  expect(library.chunk([1, 2, 3], 0)).toStrictEqual([]);
  expect(library.chunk(false)).toStrictEqual([]);
  expect(library.chunk([])).toStrictEqual([]);
});

test(`Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey`, () => {
  expect(library.compact([0, 1, 2, 3, 4, null, false])).toEqual([1, 2, 3, 4]);
  expect(library.compact(['', 0, false])).toStrictEqual([]);
  expect(library.compact(['a', 'f', 1, true])).toStrictEqual(['a', 'f', 1, true]);
  expect(library.compact(['a', '', 1, 0])).toStrictEqual(['a', 1]);
  expect(library.compact(['', 0, false])).toStrictEqual([]);
  expect(library.compact(['15', null, 10, NaN])).toStrictEqual(['15', 10]);
  expect(library.compact('mango')).toStrictEqual(['m', 'a', 'n', 'g', 'o']);
  expect(library.compact({ a: 0 })).toStrictEqual([]);
  expect(library.compact([])).toStrictEqual([]);
});
  
test(`Creates a slice of array with n elements dropped from the beginning`, () => {
  expect(library.drop([1, 2, 3, 4, 5, 6], 3)).toStrictEqual([4, 5, 6]);
  expect(library.drop(['a', 'b', 'c', 'd'], 2)).toStrictEqual(['c', 'd']);
  expect(library.drop('Butterfly', 6)).toStrictEqual(['f', 'l', 'y']);
  expect(library.drop([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
  expect(library.drop('24', 0)).toStrictEqual(['2', '4']);
  expect(library.drop([1, 2, 3], 3)).toStrictEqual([]);
  expect(library.drop(24, 3)).toStrictEqual([]);
  expect(library.drop(true, 8)).toStrictEqual([]);
});

test(`Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey.`, () => {
  expect(library.dropWhile([1, 2, 3, 4, 5, 6], (a) => a <= 3)).toStrictEqual([4, 5, 6]);
  expect(library.dropWhile([
    { 'user': 'john',  'active': false },
    { 'user': 'david',    'active': false },
    { 'user': 'john david', 'active': true }
  ], (v) => !v.active)).toStrictEqual([ { user: 'john david', active: true } ]);
  expect(library.dropWhile('Yellow', (v) => v === v.toUpperCase())).toStrictEqual([ 'e', 'l', 'l', 'o', 'w' ]);
  expect(library.dropWhile({a: 5, b: 10}, (v) => v % 2)).toStrictEqual([]);
  expect(library.dropWhile(10, (v) => v > 2)).toStrictEqual([]);
});

test(`Creates a slice of array with n elements taken from the beginning`, () => {
  expect(library.take([1, 2, 3, 4, 5, 6], 3)).toStrictEqual([1, 2, 3]);
  expect(library.take('Little Girl', 6)).toStrictEqual(['L', 'i', 't', 't', 'l', 'e']);
  expect(library.take([1, 2, 3], 2)).toStrictEqual([1, 2]);
  expect(library.take([1, 2, 3], 0)).toStrictEqual([]);
});

test(`Iterates over elements of collection, returning an array of all elements predicate returns truthy for.`, () => {
  expect(library.filter([1, 2, 3, 4, 5, 6], (a) => a % 2 === 0)).toStrictEqual([2, 4, 6]);
  expect(library.filter('Inception', (v) => v !== 'o')).toStrictEqual([ 'I', 'n', 'c', 'e', 'p', 't', 'i', 'n' ]);
  expect(library.filter([1, 2, 3, 4], (v) => v > 2)).toStrictEqual([ 3, 4 ]);
  expect(library.filter(12, (v) => v > 2)).toStrictEqual([]);
});

test(`Iterates over elements of collection, returning the first element predicate returns truthy for.`, () => {
expect(library.find([1, 2, 3, 4, 5, 6], (a) => a % 3 === 0, 4)).toBe(6);
expect(library.find('Javascript', (v) => v === v.toUpperCase())).toStrictEqual('J');
expect(library.find('Javascript', (v) => v === v.toUpperCase(), 3)).toStrictEqual(undefined);
expect(library.find([1, 2, 3], (v) => v > 2)).toStrictEqual(3);
expect(library.find([1, 9, 3], (v) => !(v % 3))).toStrictEqual(9);
expect(library.find([1, 9, 3], (v) => !(v % 3), 2)).toStrictEqual(3);
expect(library.find([1, 9, 3], (v) => !(v % 2))).toStrictEqual(undefined);
expect(library.find(12, (v) => v === 12)).toStrictEqual(undefined);
expect(library.find({a: 10, b: 5}, (v) => v > 15)).toStrictEqual(undefined);
});
  
test(`Checks if value is in Array`, () => {
  expect(library.includes([1, 2, 3, 4, 5], 3, -4)).toBe(true);  
  expect(library.includes([1, 2, 3], 1, 2)).toBe(false);
  expect(library.includes([1, 2, 3], 1, 2)).toBe(false);
  expect(library.includes({ 'a': 1, 'b': 2 }, 'a')).toBe(false);
  expect(library.includes(10, 1)).toBe(false);
});
  
test(`Creates an array of values by running each element in Array thru function`, () => {
  expect(library.map([2, 4, 8], (n) => n * n)).toStrictEqual([4, 16, 64]);
  expect(library.map('Follow Your Dream', (v) => v.toUpperCase())).toStrictEqual([ 'F','O','L','L','O','W',' ','Y','O','U','R',' ','D','R','E','A','M' ]);
  expect(library.map(true, (n) => !n)).toStrictEqual([]);
});

test(`Creates an array of grouped elements`, () => {
  expect(library.zip([2, 4, 6], ['A', 'B', 'C'], [true, false, true])).toContainEqual([2, 'A', true], [4, 'B', false], [6, 'C', true]);
  expect(library.zip(['a', 'b', 'c'], [1, 1], [8, 16])).toStrictEqual([ [ 'a', 1, 8 ], [ 'b', 1, 16 ], [ 'c', undefined, undefined ]]);
});

// OBJECTS / ОБЪЕКТЫ
test(`Sets a key Value Pair for an object, returns the !value!`, () => {
  expect(library.setProperty({}, 'a', 5)).toBe(5);
});

test(`Merges own and inherited enumerable string keyed properties of source objects into the destination object.`, () => {
  expect(library.merge({ a: 1, b: 2 }, { c: 3, d: 4 })).toMatchObject({a: 1, b: 2, c: 3, d: 4,});
  expect(library.merge({a: 3, f: 8},{b: 3, a: 5, c: 7})).toStrictEqual({ a: 5, f: 8, b: 3, c: 7 });
  expect(library.merge({a: 3, a: 6},{c: 2, d: 4, a: 1})).toStrictEqual({ a: 1, c: 2, d: 4 });
});

test(`Creates an object composed of the own and inherited enumerable property paths of object that are not omitted`, () => {
  expect(library.omit({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toMatchObject({ b: 2 });  
  expect(library.omit({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'])).toStrictEqual({ b: '2' });
  expect(library.omit({ 'a': 1, 'b': '2', 'c': 3 }, 2)).toMatchObject({ a: 1, b: '2', c: 3 });
  expect(library.omit(false, 3)).toMatchObject({});
});

test(`Removes the properies of the object for values which does not return truthy of a function given`, () => {
  expect(library.omitBy({ a: 1, b: '2', c: 3 }, (a) => typeof a === 'number')).toMatchObject({ b: '2' }); 
  expect(library.omitBy({ 'a': 1, 'b': '2', 'c': 3 }, (v) => v < 1)).toMatchObject({ a: 1, b: '2', c: 3 });
  expect(library.omitBy(null, (v) => !v === true)).toMatchObject({});
});

test(`Creates an object composed of the picked object properties`, () => {
  expect(library.pick({ a: 1, b: '2', c: 3 }, ['a', 'c'])).toMatchObject({ a: 1, c: 3 });
  expect(library.pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'])).toStrictEqual({ a: 1, c: 3 });
  expect(library.pick({ 'a': 1, 'b': '2', 'c': 3 }, 2)).toStrictEqual({});
  expect(library.pick(false, 3)).toStrictEqual({});
});

test(`Creates an object composed of the object properties predicate returns truthy for.`, () => {
  expect(library.pickBy({ a: 1, b: '2', c: 3 }, (a) => typeof a === 'number')).toMatchObject({ a: 1, c: 3 });
  expect(library.pickBy({ 'a': 1, 'b': '2', 'c': 3 }, (v) => v > 1)).toMatchObject({ b: '2', c: 3 });
  expect(library.pickBy({ 'a': 1, 'b': '2', 'c': 3 }, (v) => v < 1)).toMatchObject({});
  expect(library.pickBy([1, 2, 4], (v) => v % 2)).toMatchObject({ '0': 1 });
  expect(library.pickBy('Maria', (v) => v === v.toLowerCase())).toMatchObject({ '1': 'a', '2': 'r', '3': 'i', '4': 'a' });
  expect(library.pickBy(null, (v) => !v === true)).toMatchObject({});
});

test(`Creates an array of own enumerable string keyed-value pairs for objects`, () => {
  expect(library.toPairs({ a: '1', b: '2' })).toMatchObject([['a', 1], ['b', 2]]);
  expect(library.toPairs({a: 5, b: 7})).toMatchObject([ [ 'a', 5 ], [ 'b', 7 ] ]);
  expect(library.toPairs([1, 2, 3])).toMatchObject([ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ] ]);
});



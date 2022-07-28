// var _ = require('lodash');
import _ from 'lodash';

const data = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 21 },
    { name: 'Josh', age: 21 },
    { name: 'Joe', age: 22 }
];

const rta = _.groupBy(data, (item) => item.age);
console.log(rta);
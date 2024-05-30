import '../css/common.css';

import { sum } from './sum';

/**
 * Catch variable type error
 */
let result = sum('1', 1);
console.log(result);

/**
 * Right way to pass args
 */
result = sum(1, 1);
console.log(result);

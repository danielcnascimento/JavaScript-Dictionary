// I can export functions, or anything i want, let's export an objects holding functions.

import myRandom from './return-me-a-random.js';

function area(ray){
    return Math.PI * ray * ray;
}

function circuference(ray){
    return 2 * ray * Math.PI;
}

myRandom();

export const allFunctions = {
    area,
    circuference,
    myRandom
}

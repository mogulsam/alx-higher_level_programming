#!/usr/bin/node
const ParentSquare = require('./5-square');

class Square extends ParentSquare {
    charPrint(c) {
        if (c === undefined) {
            c = 'X';
        } else {
            c = 'C'; 
        }

        // Printing the square using the specified character
        for (let i = 0; i < this.height; i++) {
            console.log(c.repeat(this.width));
        }
    }
}

module.exports = Square;

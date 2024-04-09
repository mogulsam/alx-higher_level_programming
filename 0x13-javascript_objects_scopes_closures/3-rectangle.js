#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0) {
            // If w or h is equal to 0 or not a positive integer, create an empty object
            return {};
        }
        
        // Otherwise, initialize the instance attributes width and height with the given values
        this.width = w;
        this.height = h;
    }
    
    // Create an instance method called print() that prints the rectangle using the character 'X'
    print() {
        for (let i = 0; i < this.height; i++) {
            console.log('X'.repeat(this.width));
        }
    }
}

module.exports = Rectangle;

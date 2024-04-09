#!/usr/bin/node
const Rectangle = require("./4-rectangle");  //import the rectangle class
class Square extends Rectangle {    //define a class Square that inherits from rectangle class-extend
   constructor(size){
       super(size, size)   //calling the constructor of the parent class  with size as both width and height- rectangle
   }

   double(){     //double the width and height of the square
    this.width  *=2;
    this.height  *=2;

   }

}
            

module.exports = Square;

#!/usr/bin/node
class Rectangle {
     constructor(w,h){
      if(w<= 0 || h <= 0) {


            //otherwise, initialize the instance attributes width with the value w/h
        this.width = w;
        this.height = h;
      }
    }

}


module.exports = Rectangle;

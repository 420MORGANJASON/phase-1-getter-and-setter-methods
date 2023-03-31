// Add your Circle class here

class circle{
     constructor(radius) {
        this.radius = radius;
     }

   get diameter() {
    return this.radius * 2;
   }
   get circumference() {
    return Math.PI * this.diameter;
   }

   get area() {
    return Math.PI * this.radius ** 2;
   }
// Setter 
set diameter(diameter) {
this.radius = diameter / 2;
}

set circumference(circumference) {
this.radius = circumference / (2 * Math.PI);
}

set area(area) {
this.radius = Math.sqrt(area / Math.PI);
}
}

// Calculations

const c1 = new circle(5);
console.log(c1.diameter); 
console.log(c1.circumference); 
console.log(c1.area); 

c1.diameter = 20;
console.log(c1.radius); 

c1.circumference = 50;
console.log(c1.radius);

c1.area = 100;
console.log(c1.radius); 


/*
    Q1)
    The error in this code is a redeclaration of a variable
*/
console.log('Question 1 : ');
let num=1;
num=2;
console.log(num);


console.log('-------------');




/*
  Q2)
 */

console.log('Question 2 : ');

function check(a,b){
    if(((typeof a)===(typeof b))&&(a===b))
    return true;
    else return false;
}
console.log(check(3,3));
console.log(check(3,3.0));

console.log('-------------');



/*
  Q3)
*/

console.log('Question 3 : ');

const colors=['red','green','blue','yellow'];
colors.push('orange');
colors.splice(colors.indexOf('green'), 1);
console.log(colors);

console.log('-------------');




/*
Q4)
 */

console.log('Question 4 : ');

class Shape{
  constructor(color){
    this.color=color;
  }
  getColor(){
    console.log(this.color);
  }
}
class Rect extends Shape{
  constructor(color,width,length){
    super(color);
    this.width=width;
    this.length=length;
    
  }
  calculateArea(){
    console.log(`area of thr rectagle =  ${this.width*this.length}`);
  }
}
let obj=new Rect('red',2,3);
obj.calculateArea();


console.log('-------------');

//Q5)

console.log('Question 5 : ');

const evaluate =new Promise((resolve ,reject)=>{
  let bool=true;
setTimeout(() => {
  if(bool)
resolve('success');
// else
// reject('fail');
}, 2000);
});
async function getData(){
console.log('before the promise');
console.log(await evaluate);
console.log('after promise');
}

getData();


class Rectangle
{
  constructor(width, height)
  {
    this._width = width;
    this._height = height;
  }

  get width() { return this._width; }
  get height() { return this._height; }

  set width(value) { this._width = value; }
  set height(value) { this._height = value; }

  get area()
  {
    return this._width * this._height;
  }

  toString()
  {
    return `${this._width}×${this._height}`;
  }
}

/*
you have SetWidth and SetHeight methods on your Rectangle base class; 
this seems perfectly logical. However if your Rectangle reference pointed to a Square, 
then SetWidth and SetHeight doesn't make sense because setting one would change the other to match it. 
In this case Square fails the Liskov Substitution Test 
with Rectangle and the abstraction of having Square inherit from Rectangle is a bad one. */

// BASICALLY WE SHOULD NOT INHERIT THE SQUARE CLASS FROM RECTANGLE
class Square extends Rectangle
{
  constructor(size)
  {
    super(size, size);
  }

  //calling any of the setter will also change the value of the other
  //this is not a good behaviour
  set width(value)
  {
    this._width = this._height = value;
  }

  set height(value)
  {
    this._width = this._height = value;
  }
}


//this is breaking the inherited Square class
let useIt = function(rc)
{
console.log('before',rc)
  let width = rc._width;
  rc.height = 10;
  console.log('after',rc)
  console.log(
    `Expected area of ${10*width}, ` +
    `got ${rc.area}`
  );
};

let rc = new Rectangle(2,3);
useIt(rc); //Expected area of 20, got 20

let sq = new Square(5);
useIt(sq); //Expected area of 50, got 100
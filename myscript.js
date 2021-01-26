// create functio testMe
function testMe()
{
    let firstvar = 1
    let secondvar = 2
    let thirdvar = 3

    return firstvar * secondvar * thirdvar + " is th product of the three numbers"
}

// function AI
function AI(receive)
{
    let response = ""
  if (receive == 'hello')
  {
      response= "hi"
  }
  else{
      response = "i cannot Understand"
  }

  return response
}

//function tripplesum
function tripplesum (a,b,c)
{
    let eni = a
    let eji  = b
    let eta = c

    let product = eni * eji * eta

    return product;
}

// fxn factorial
function factorial(n)
{
    let total = 1
    while( n > 0)
    {
        
        total*=n
        n--
        
    }

    return total
}

// fxm calculator
function calculator(n1, n2 , sign)
{
    

    if (sign == "+")
    { return ans = n1 + n2}
    else if( sign == "-")
    { return ans  = n1 - n2}
    else if ( sign == "*")
    { return ans = n1 * n2}
    else if (sign == "/")
    {  return ans = n1/n2}

    
}

//fxn absoluteval
function absoluteval( x)
{
  let ans =  Math.abs(x)

    return ans
}

//fxn fizzbuzz()
function fizzbuzz(y)
{
    if (y % 3  === 0)
    {
        return "fizz"
    }
    else if ( y% 7 === 0)
    { return buzz}
    else{ return y}
}

// fxn true
function rtrntru(b)
{
    return b > 0
}

//fxn transform
function transform(num)
{
    if ( num > 9)
    {return "invalid numer"}
    else if (num == 9)
    {return "nine"}
    else if (num== "8") {return "eight"}
    else if (num == " 7") {return "Seven"}
    else if( num == "6") { return "Six"}
    else if(num == "5") {return "Five"}
    else if (num== "4") { return"four" }
    else if( num == "3") { return "three"}
    else if(num == "2") {return "two"}
    else if (num== "1") { return"one" }
    else if (num== "0") { return"zero" }

    
}

// fxn rtrnarysum
 let numary = [5,2,3,19,5]

 function  rtrnarysum(val) {
     let sum = 0
   for ( let i = 0; i < 5; i++)
   {
     sum+= val[i]
   }

     return sum
 }
 
 // fxn min
  function min()
  {
      numary.sort(function (a,b){ return a - b});
    return   numary[0]

  }
  
  let bio ={name: "John", surname: "Doe"}
  let arrayofobject = []
  let i =0
  //fxn arrayFi
  function arrayFi(obj)
  {
    
    for (prop in obj)
    {
        arrayofobject[i] = prop
        i++
        arrayofobject[i] = obj[prop]
        i++

    }
    return arrayofobject
  }
 let obj = {}, y= 0
  //fxn objectFi
  function objectFi(ary) {
      while (y<arrayofobject.length)
      {
          obj.ar = Object.assign({},arrayofobject[y])
            y++
      }
      return obj
  }
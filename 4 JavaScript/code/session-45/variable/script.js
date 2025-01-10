function fun()
{
    if (true)
    {
         y = 25;
    }
    console.log(y)
}
fun()
var x = 25;
var x = 35; //redclear is possible 
var z = 30;
y = 45; // reassign


/* this is for let variable */
function fun1()
{
    if (true)
    {
        let y1 = 25;
    }
    console.log(y1)
}
fun1()
let x1 = 25;
// let x1 = 35; redclear is not possible 
let z = 30;
y1 = 45; // reassign is possible

/* this is for const variable */
function fun2()
{
    if (true)
    {
        const p1 = 25;
    }
    console.log(p1)
}
fun2()
const q1 = 25;
// const x1 = 35; redclear is not possible 
const s = 30;
p1 = 45; // reassign is not possible



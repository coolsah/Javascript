let xyx = "abc";
let xyz = 3;
let za = true;
console.log(xyx);
console.log(xyz);
console.log(za);
let fd;
console.log(fd);
console.log(typeof xyx);
console.log(typeof za);
console.log(typeof xyz);
console.log("1"+2+3);//6 123
console.log(1+3+4 +"2");//1082
console.log(2+3+"4"+3);//12 543
console.log(2+1+""+3)//6 33
let num = "123";
console.log(typeof num);
 let  n = Number(num)
console.log(typeof n)
console.log(n)
let bool = 1;
console.log(typeof bool)
console.log(Boolean(bool))
let str = "abc";
console.log(Boolean(str))
console.log( typeof String(bool))

console.log(1+ 2 +Boolean("abc")+String("2")+2) ;//3abc22 //422


console.log(2 * "2")//4
console.log(2 +Number("2"))//4
console.log(3+4 +Boolean("")+String(true)+ Number(true)+false+"2")//11 lock 7true1false2
//test basic interveiw questions

//data types primtive(call by value , stack mamaory , immutable) * non primitve(reference , heap memory , mutable);
// string(charcter) , numbers(2) , boolean(true , false) ,null , undefined , bigInt, symbol;
let d = "aftab";
let e = d;


console.log(e[0]="b");
console.log(d);
let s = [2,3,4];
let r = [...s];
r[0] =4;
console.log(r);
console.log(s)
// non -primtive array obj function
let a =["a",2,4] /// square bracket represent
console.log(a)
let obj = { //curly braces
 name:"aftab",
 rollNo: 3
}
console.log(obj.name)
function abc(){
    let abc = "abc";
    console.log(abc)
}
abc()

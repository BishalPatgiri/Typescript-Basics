
type name1=string
type age=number
type isFetching=boolean

let array:number[]=[1,2,3]
let str:string[]=["a","b","c"]

let myTuple:[string,boolean]=["Bishal",true]
console.log(myTuple)

enum firstEnum{
    User,
    SuperUser,
    Admin,
    SuperAdmin
}
console.log(firstEnum)

function prodeuct(x:number,y:number):number{
return x*y
}
console.log(divide(4,2))

function divide(x:number,y:number):number{
    return x/y
}
console.log(divide(4,2))

function printName(name:string):void{
    console.log(name)
}
printName("Bishal")

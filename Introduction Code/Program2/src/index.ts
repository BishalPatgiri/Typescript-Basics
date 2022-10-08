
interface card{
    title:string,
    status:boolean,
    id:number
}

interface person{
    firstname:string,
    lastname?:string
}


function getName({firstname,lastname}:person):string{
    return `${firstname} ${lastname}}`
}

interface Address{
    houseNumber:number,
    street:string,
    city:string,
    state:string,
    postalCode:number
    country:string
}

interface PersonDetails{
    prefix?:string,
    phones:number[],
    address:string[],
    email:string,
    firstname:string,
    lastname:string,
    middlename?:string
}

let data:PersonDetails[]=[]

let Myobj={
    phones:[8,6,3,8],
    address:["Guwahati","Assam"],
    email:"abc7@gmail.com",
    firstname:"Bishal",
    lastname:"Patgiri"
}

function PhoneBook(obj:PersonDetails){
data.push(obj)
}

PhoneBook(Myobj)
//console.log(data)
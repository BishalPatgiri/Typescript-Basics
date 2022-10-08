interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

const getType=(obj:(Admin|User))=>{
    return obj.type
}

console.log(getType( {type: 'admin',
name: "Bishal",
age: 24,
role: "FWT"}))
function getName({ firstname, lastname }) {
    return `${firstname} ${lastname}}`;
}
let data = [];
let Myobj = {
    phones: [8, 6, 3, 8],
    address: ["Guwahati", "Assam"],
    email: "abc7@gmail.com",
    firstname: "Bishal",
    lastname: "Patgiri"
};
function PhoneBook(obj) {
    data.push(obj);
}
PhoneBook(Myobj);
//console.log(data)
//# sourceMappingURL=index.js.map
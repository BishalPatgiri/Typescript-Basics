let array = [1, 2, 3];
let str = ["a", "b", "c"];
let myTuple = ["Bishal", true];
console.log(myTuple);
var firstEnum;
(function (firstEnum) {
    firstEnum[firstEnum["User"] = 0] = "User";
    firstEnum[firstEnum["SuperUser"] = 1] = "SuperUser";
    firstEnum[firstEnum["Admin"] = 2] = "Admin";
    firstEnum[firstEnum["SuperAdmin"] = 3] = "SuperAdmin";
})(firstEnum || (firstEnum = {}));
console.log(firstEnum);
function prodeuct(x, y) {
    return x * y;
}
console.log(divide(4, 2));
function divide(x, y) {
    return x / y;
}
console.log(divide(4, 2));
function printName(name) {
    console.log(name);
}
printName("Bishal");
//# sourceMappingURL=index.js.map
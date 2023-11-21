//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0 , 23, 5, 3)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleString());

let newDate = new Date();
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday: "long"
})

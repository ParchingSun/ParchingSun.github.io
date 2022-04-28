let val;

const today = new Date();
let birthday = new Date('1-1-1997 11:25:00');
birthday = new Date('September 10 1998 11:25:00');
birthday = new Date('1/1/1970 8:00:00');

val = birthday;

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = birthday.getTime();  //the amount of seconds pasted since 1/1/1970

birthday.setFullYear(1998);
birthday.setDate(12);

console.log(val);
console.log(birthday);
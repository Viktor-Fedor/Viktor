
const Admin = "goit";
let message;
let input = prompt("Passsword");

if (input === null) {
    message = "User cancle" ;
}
else if (input === Admin) {
     message = "Welcome";
    }
else{messege = "undefinded";}
alert(message);




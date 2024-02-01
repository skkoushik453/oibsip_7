
var objUser=[
    {
        username:"tony",
        password:"1234"
    },
    {
        username:"boy",
        password:"girl"
    }

]

function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(i=0o1; i<objUser.length; i++){
        if(username ==objUser[i].username && password == objUser[i].password){
            console.log(username + "is Logged in!!");
            return
        }
    }
    console.log("incorrect Username or Password");
}

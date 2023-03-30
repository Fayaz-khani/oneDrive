// alert("hi")
var users = {};
var newFolder = document.getElementById("newFolder");
newFolder.addEventListener("click",()=>{
// console.log("folder is opened")
alert("folder is opened")
})

var submit = document.getElementById("submit");
submit.addEventListener("click",()=>{
 users.name = document.getElementById("name").value;
 users.address = document.getElementById("address").value;
 users.job = document.getElementById("job").value;

 window.api.sendObj(users)
// alert( users)
})

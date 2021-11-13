
   document.querySelector("button").addEventListener("click",signUp);

  var userArr=JSON.parse(localStorage.getItem("userData")) ||[];


    function signUp(event)
   {
      event.preventDefault();
   
     var name=document.getElementById("name").value;
     var email=document.getElementById("email").value;
     var pass=document.getElementById("pass").value;
     var ReEnter=document.getElementById("Re").value;
    
    console.log(name,email)
      
     var user={
         Name:name,
         Email:email,
         passwords:pass,
         Re_Enter:ReEnter,

     };

     console.log(user)
     userArr.push(user);
     console.log(userArr);
    localStorage.setItem("userData",JSON.stringify(userArr));


   
    
      window.location.href="sign-in.html"
  
 }

 document.querySelector("button").addEventListener("click",signIn);
var regdUser = JSON.parse(localStorage.getItem("userData"));
    console.log(regdUser)
    function signIn()
    {
        var email= document.querySelector("#email").value;
        var pass=document.querySelector("#pass").value;

        if(email=="677kajal@gmail.com"  && pass =="kk")
        {
            window.location.href="home_page.html";
        }
        else{
            for (var i = 0; i < regdUser.length; i++)
            {
                if(regdUser[i].Email == email &&
                regdUser[i].passwords==pass)
                {
                  window.location.href="product_page.html"
                  console.log()
                }
               
            }

        }
    }


    function create_Acc()
    {
        document.getElementById("Create")
        window.location.href="sign-up.html"
    }
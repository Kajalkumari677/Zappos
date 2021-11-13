let prod = document.getElementById("product");
//.get the data from local storage

let cart=JSON.parse(localStorage.getItem("cart"))
console.log("cart",cart);

function showProducts(){

cart.forEach(function(product){

  //  console.log(product.name);

let img_div = document.createElement("div");


img_div.setAttribute("id","img_div")

// img_div.style.height="400px";
// img_div.style.width="250px";
// img_div.style.backgroundColor="rgb(157, 179, 207)"

// img_div.style.border="1px solid grey";

let img = document.createElement("img");

img.src=product.img;

let product_price = document.createElement("p");

product_price.textContent=product.price;



let product_name = document.createElement("p");

product_name.textContent= product.name;
img_div.append(img);

var detail_div=document.createElement("div")
detail_div.setAttribute("id","detail_div")
detail_div.append(product_name,product_price)


let addtocart_btn=document.createElement("button");

 addtocart_btn.innerText="Buy Now";

addtocart_btn.onclick=function(){
    addtocart(product);
};

detail_div.append(product_name,product_price,addtocart_btn);//html element

prod.append(img_div,detail_div)
});
}
showProducts();
var container=document.getElementsByClassName("container")[0];
var row=document.getElementsByClassName("row")[0];
//var red =document.createElement("h1")
var cartBtn =document.getElementById("add")
var things = [{
    id:0, price :" Rs.10000",productDes : "4 gb RAM ,64 Gb ROM",model : "realme 9"
},
{

    id:1,
    price : "Rs.90000",
    productDes : "6 gb RAM , 64 Gb ROM",
    model : "OPPO"
},
{
    id:2,
    price : "Rs.80000",
    productDes : "8 gb RAM , 128 Gb ROM",
    model : "ONE+"
}]

function adcst () {
    
var cart = [];
//addCart(1)
var ids = prompt("quatity");

console.log(ids);
  
    var added = cart.find(function(item,index){
        return item.id==ids;
    })
    if(added){
        var temp = cart.map(function(item){
            if(item.id==ids){
                item.qty=item.qty+1;
                return item;
            }
            else{
                return item;
            }
        })
        cart=temp
        console.log(temp);
    }
    else{
        var temp= things.find(function(item,index){
            return item.id==ids;
            // cart.push(item.id= things[index])
            // var r={qty:1}
            // cart.push(r)
            // return cart

        })
    
       //
       
       temp.qty=1;
        cart.push(temp);
        console.log(cart);
        
    }

//console.log(cart);


    console.log(cart);
    // for (let index = 0; index < cart.length; index++) {
 
    
    var itemcard=document.createElement("div");
    itemcard.setAttribute("class","card col-4" );

    var displayproduct=document.createElement("div");
    displayproduct.setAttribute("class","card-body");

    var prodeuctname=document.createElement("h5");
    prodeuctname.setAttribute("class","card-title");
    prodeuctname.innerText = cart[0].model

    var pricedetail=document.createElement("h6");
    pricedetail.setAttribute("class","card-subtitle mb-2 text-muted");
    pricedetail.innerText = cart[0]. productDes 

    var featredetail=document.createElement("p");
    featredetail.setAttribute("class","card-text");
    featredetail.innerText =  cart[0]. price


    console.log( featredetail,   pricedetail);

    displayproduct.appendChild( prodeuctname)
    displayproduct.appendChild( pricedetail)
    displayproduct.appendChild(featredetail)
    itemcard.appendChild( displayproduct)
    row.appendChild( itemcard)
    container.appendChild(row)

    }
;
cartBtn.addEventListener("click",  adcst )





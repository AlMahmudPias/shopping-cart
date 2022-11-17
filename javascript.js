//plus button handler
const incrementItemBtn1 = document.getElementById("incrementItem1");
incrementItemBtn1.addEventListener("click",function(){
    increment_decrement_handler("quantityOfItem1", "increment")

});
const decrementItemBtn1 = document.getElementById("decrementItem1");
decrementItemBtn1.addEventListener("click",function(){
    increment_decrement_handler("quantityOfItem1", "decrement")
    
});


function increment_decrement_handler(itemQuantityId,type){
    const itemQuantity = document.getElementById(itemQuantityId).value;
   const newItemQuantity= type == "increment" ? parseFloat(itemQuantity) + 1 : parseFloat(itemQuantity) - 1 ;   
}

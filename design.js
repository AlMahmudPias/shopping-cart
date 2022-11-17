//plus button handler
const incrementItemBtn1 = document.getElementById("incrementItem1");
incrementItemBtn1.addEventListener("click",function(){
    const newQuantityNUmber = increment_decrement_handler(true);
    increment_decrement_handler(newQuantityNUmber);

});
const decrementItemBtn1 = document.getElementById("decrementItem1");
decrementItemBtn1.addEventListener("click",function(){
    const newQuantityNUmber = increment_decrement_handler(false);
    increment_decrement_handler(newQuantityNUmber)
    
});


function increment_decrement_handler(isIncrease){
      const quantityOfItem = document.getElementById('quantityOfItem1');
      const quantityNumberString = quantityOfItem.value;
      const previousQuantityNumber = parseInt(quantityNumberString);

      let newQuantityNUmber ;
      if(isIncrease){
        newQuantityNUmber = previousQuantityNumber + 1;
      }
      else {
        newQuantityNUmber = previousQuantityNumber - 1;
         
      }
      quantityOfItem1.value = newQuantityNUmber;
      return newQuantityNUmber;
    
      
}

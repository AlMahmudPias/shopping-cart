function updatePhoneNumber (isIncrease){
  const phoneNumberField = document.getElementById('phone-number-field');
  const phoneNumberString = phoneNumberField.value;
  const previousPhoneNumber = parseInt(phoneNumberString);

  let newPhoneNumber;

  if(isIncrease){
      newPhoneNumber = previousPhoneNumber + 1;
  }
  else{
      newPhoneNumber = previousPhoneNumber - 1;
  }
  phoneNumberField.value = newPhoneNumber;
  
  return newPhoneNumber;
}
function update_CaseNumber (isIncrease){
  const caseNumberField = document.getElementById('case-number-field');
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);

  let new_CaseNumber;

  if(isIncrease){
    new_CaseNumber = previousCaseNumber + 1;
  }
  else{
    new_CaseNumber = previousCaseNumber - 1;
  }
  caseNumberField.value = new_CaseNumber;
  
  return new_CaseNumber;
}
function update_airpodNumber (isIncrease){
  const airpodNumberField = document.getElementById('airpod-number-field');
  const airpodNumberString = airpodNumberField.value;
  const previousairpodNumber = parseInt(airpodNumberString);

  let newairpodNumber;

  if(isIncrease){
      newairpodNumber = previousairpodNumber + 1;
  }
  else{
    newairpodNumber = previousairpodNumber - 1;
  }
  airpodNumberField.value = newairpodNumber;
  
  return newairpodNumber;
}
function phone_total_price(newPhoneNumber){
  const phone_total_price = 1219 * newPhoneNumber;
  const update_phone_price = document.getElementById('phone-price');
  update_phone_price.innerText = phone_total_price;
}
function case_total_price(newcaseNumber){
  const case_total_price = 59 * newcaseNumber;
  const update_case_price = document.getElementById('case-price');
  update_case_price.innerText = case_total_price;
}
function airpod_total_price(newairpodNumber){
  const airpod_total_price = 119 * newairpodNumber;
  const update_case_price = document.getElementById('airpod-price');
  update_case_price.innerText = airpod_total_price;
}
function get(x){
  const phone_Total = document.getElementById(x);
  const current_total = phone_Total.innerText;
  const current = parseInt(current_total);
  return current;
}
function set(x, value){
  const sub_total_element= document.getElementById(x);
  sub_total_element.innerText = value;
}
function update_total_price(){
  const phone_total = get('phone-price');
  const case_total = get('case-price');
  const airpod_total = get('airpod-price')
  const sub_total = phone_total + case_total + airpod_total;
  set('total-price', sub_total);

  const convert_tax_amount = (sub_total * 0.2).toFixed(2);
  const tax_amount = parseFloat(convert_tax_amount);
  set('total-tax', tax_amount);

  const grand_total = tax_amount + sub_total;
  set('grad-total', grand_total);
  
 

}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
  const newPhoneNumber = updatePhoneNumber(true);
  phone_total_price(newPhoneNumber);
  update_total_price();
  
});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
  const newPhoneNumber = updatePhoneNumber(false);
  phone_total_price(newPhoneNumber);
  update_total_price();

})
document.getElementById('btn-case-plus').addEventListener('click', function(){
  const newcaseNumber = update_CaseNumber(true);
  case_total_price(newcaseNumber);
  update_total_price();

  
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
  const newcaseNumber = update_CaseNumber(false);
  case_total_price(newcaseNumber);
  update_total_price();
})
document.getElementById('btn-airpod-plus').addEventListener('click', function(){
  const new_airpod_Number = update_airpodNumber(true);
  airpod_total_price(new_airpod_Number);
  update_total_price();
})
document.getElementById('btn-airpod-minus').addEventListener('click', function(){
  const new_airpod_Number = update_airpodNumber(false);
  airpod_total_price(new_airpod_Number);
  update_total_price();
})


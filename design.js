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
document.getElementById('btn-phone-plus').addEventListener('click', function(){
  const newPhoneNumber = updatePhoneNumber(true);
  



});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
  const newPhoneNumber = updatePhoneNumber(false);


  
})
document.getElementById('btn-case-plus').addEventListener('click', function(){
  const newcaseNumber = update_CaseNumber(true);

  
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
  const newcaseNumber = update_CaseNumber(false);

  
  
})

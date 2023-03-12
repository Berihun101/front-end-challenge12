const inputs=document.querySelectorAll('input')
const firstbtn=document.getElementById('firstStep')
const secondbtn=document.getElementById('secondStep')
const thirdbtn=document.getElementById('thirdStep')
const backToFirstStep=document.getElementById('toFirstStep')
const backToThirdStep=document.getElementById('toTheThirdStep')
const backToSecondStep=document.getElementById('toSecondStep')
const alert=document.querySelectorAll('.alert')
const personalInfo=document.querySelector('.personal-info')
const addOns=document.querySelector('.add-ons')
const plan=document.querySelector('.plan')
const finish=document.querySelector('.Finishingup')
const btn1=document.querySelector('.btn1')
const btn2=document.querySelector('.btn2')
const btn3=document.querySelector('.btn3')
const btn4=document.querySelector('.btn4')
const arcade=document.querySelector('.Arcade')
const online=document.querySelector('.online')
const storage=document.querySelector('.storage')
const custom=document.querySelector('.custom')
const advanced=document.querySelector('.Advanced')
const pro=document.querySelector('.pro')
const arcadeValue=document.getElementById('Arcade-value')
const onlineServiceValue=document.getElementById('online-service-value')
const serviceOnline=document.querySelector('.service-online')
const largeStorage=document.querySelector('.Large-storage')
const profileCustom=document.querySelector('.custom-profile')
const storageValue=document.getElementById('storage-value')
const onlineService=document.getElementById('onlineService')
const storageCheckbox=document.getElementById('storagebox')
const customizable=document.getElementById('customProfile')
const confirmbtn=document.getElementById('confirm-button')
const totalValue=document.getElementById('total')
const thankyouCard=document.querySelector('.thank-you')

var total=0;
var check=true;
firstbtn.addEventListener('click', function(){
for (var i = 0; i < inputs.length-4; i++) {
  if(inputs[i].value===''){
    inputs[i].style.border="1px solid red";
   alert[i].style.display='block';
   check=false;
  }
  else{
  alert[i].style.display='none';
  inputs[i].style.border="1px solid hsl(231, 11%, 63%)";
  }
}

if(check){
  personalInfo.style.display='none'
  plan.style.display='block'
  btn1.style.background='transparent'
  btn2.style.background='hsl(206, 94%, 87%)'

}
else{
  check=true;
}

})

let clicked=false;
let arcadeClicked=true;
let advancedClicked=false;
let proClicked=false;
let previousPlan = "";

arcade.addEventListener('click', function(){
  clicked=true;
  if (previousPlan !== "arcade") {
    total = total + 9;
    if (previousPlan === "advanced") {
      total = total - 12;
      advancedClicked = false;
    } else if (previousPlan === "pro") {
      total = total - 15;
      proClicked = false;
    }
    arcadeClicked = true;
    arcade.style.background='hsl(228, 100%, 84%)'
    advanced.style.background='white'
    pro.style.background='white'
    arcadeValue.innerHTML='$9/mo'
    previousPlan = "arcade";
  }
});

advanced.addEventListener('click', function(){
  clicked=true;
  if (previousPlan !== "advanced") {
    total = total + 12;
    if (previousPlan === "arcade") {
      total = total - 9;
      arcadeClicked = false;
    } else if (previousPlan === "pro") {
      total = total - 15;
      proClicked = false;
    }
    advancedClicked = true;
    advanced.style.background='hsl(228, 100%, 84%)'
    arcade.style.background='white'
    pro.style.background='white'
    arcadeValue.innerHTML='$12/mo'
    previousPlan = "advanced";
  }
});

pro.addEventListener('click', function(){
  clicked=true;
  if (previousPlan !== "pro") {
    total = total + 15;
    if (previousPlan === "arcade") {
      total = total - 9;
      arcadeClicked = false;
    } else if (previousPlan === "advanced") {
      total = total - 12;
      advancedClicked = false;
    }
    proClicked = true;
    pro.style.background='hsl(228, 100%, 84%)'
    arcade.style.background='white'
    advanced.style.background='white'
    arcadeValue.innerHTML='$15/mo'
    previousPlan = "pro";
  }
});

secondbtn.addEventListener('click', function(){
  if(clicked){
    plan.style.display='none'
    addOns.style.display='block'
    btn2.style.background='transparent'
    btn3.style.background='hsl(206, 94%, 87%)'
  }
});


let checker=false;
let isChecked=false;
let onlineChecked=false;
let storageChecked=false;
let customChecked=false;
serviceOnline.addEventListener('click', function(){
  onlineChecked = !onlineChecked;
  checker=true;
  online.style.display='flex'
  if(onlineChecked){
  onlineService.checked=onlineChecked;
  total=total + 1;
  }
  else{
  onlineService.checked=onlineChecked;
  online.style.display='none'
  total=total-1;
  }

})

largeStorage.addEventListener('click', function(){
  storageChecked = !storageChecked;
  checker=true;
storage.style.display='flex'

  if(storageChecked){
  storageCheckbox.checked=storageChecked;
  total=total + 2;
  }
  else{
  storageCheckbox.checked=storageChecked;
  storage.style.display='none'
  total=total-2;
  }


})

profileCustom.addEventListener('click', function(){
  customChecked = !customChecked;
  checker=true;
  custom.style.display='flex'
  if(customChecked){
  customizable.checked=customChecked;
  total=total + 2;
  }
  else{
    customizable.checked=customChecked;
    custom.style.display='none'
      total=total - 2;
  }


})
confirmbtn.addEventListener('click', function(){
finish.style.display='none'
thankyouCard.style.display='block'
})
 thirdbtn.addEventListener('click', function(){
  if(checker){
     addOns.style.display='none'
     finish.style.display='block'
     btn3.style.background='transparent'
     btn4.style.background='hsl(206, 94%, 87%)'
     totalValue.innerHTML='$'+ total+ '/mo';
   }
 })

 backToFirstStep.addEventListener('click', function(){
   personalInfo.style.display='block'
   plan.style.display='none'
   btn1.style.background='hsl(206, 94%, 87%)'
   btn2.style.background='transparent'
 })

 backToSecondStep.addEventListener('click', function(){
   plan.style.display='block'
   addOns.style.display='none'
   btn2.style.background='hsl(206, 94%, 87%)'
   btn3.style.background='transparent'
 })

 backToThirdStep.addEventListener('click', function(){
   finish.style.display='none'
   addOns.style.display='block'
   btn4.style.background='transparent'
   btn3.style.background='hsl(206, 94%, 87%)'
 })

//selectors
var tablinks=document.querySelectorAll('.tab-links');
var tabcontents=document.querySelectorAll('.tab-contents');
//functions
function openTab(tabName){

for(tablink of tablinks){

tablink.classList.remove('active-link');

}

for(tabcontent of tabcontents){

tabcontent.classList.remove('active-tab');

}
event.currentTarget.classList.add('active-link');
document.getElementById(tabName).classList.add('active-tab');

}

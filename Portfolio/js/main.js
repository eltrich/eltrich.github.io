//selectors
var tablinks=document.querySelectorAll('.tab-links');
var tabcontents=document.querySelectorAll('.tab-contents');
var pages=document.querySelectorAll('.pages');
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
//pages- function
function viewPage(){

for(tablink of tablinks){

tablink.classList.remove('active-page');

}


event.currentTarget.classList.add('active-page');


}

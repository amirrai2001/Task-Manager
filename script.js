'use strict'

const formEl = document.getElementById('form-item');
const itemEl = document.getElementById('input-item');
const itemcontainerEl = document.getElementById('items-container');
const btnsubmit = document.getElementById('btn-submit');


let items =[];
let iseditting = false;
let editid = null;


const displayui = function() {
    itemcontainerEl.textContent=null;
    if (items.length > 0) {
        items.forEach((item) => {
         const listEl = document.createElement('li');
         listEl.classList.add('list-item');
         listEl.innerHTML = `${item.value} <button onclick='deleteitem(${item.id})'> delete </button>  <button onclick='edittem(${item.id})'> edit </button>`;
         itemcontainerEl.appendChild(listEl);
        })
    }
}
const deleteitem = function (id) {
   items =  items.filter((item)=>item.id !==id);
    displayui()
}
const edittem = function(id) {
    const itemtoedit = items.find((item)=>item.id===id)
    itemEl.value=itemtoedit.value;
    editid= id;
    iseditting= true;
    
}



formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (iseditting) {
        items=items.map((item)=>{
       if (item.id===editid) {
             return {  ...item, value:itemEl.value};
       }else{
        return item;
       }
    })
   displayui();
   itemEl.value===null;
        iseditting=false;
        editid=null;
        
    
    }else{ if (itemEl.value) {
        const item = {
            id: new Date().valueOf(),
            value: itemEl.value,
        };
        

        items.push(item);
        itemEl.value=null;
        displayui()
        
     }
    else{
        alert('eneter a valid input');
    }
}}
   
);

















const input=document.querySelector('#input1')
const add=document.querySelector('.button1')
const tasks=document.querySelector('.tasks')
const deleteall=document.querySelector('.button3')
const deleteselected=document.querySelector('.button2')
const total_tasks=document.querySelector('.end3 span');
const total_tick=document.querySelector('.end2 span');
const dropdown=document.querySelector('.dropdown')
const dropdwon_content=document.querySelector('.dropdwon-content');
const a=document.querySelector('a');
const deleteicon=document.querySelector('i');



dropdown.addEventListener('mouseenter',()=>{
    dropdwon_content.classList.add('focus')
})
dropdown.addEventListener('mouseleave',()=>{
    dropdwon_content.classList.remove('focus')
})
a.addEventListener('mouseenter',()=>{
    dropdwon_content.classList.add('focus')
})
dropdwon_content.addEventListener('mouseleave',()=>{
    dropdwon_content.classList.remove('focus')
})


//ADD NEW TASK USING THE INPUT
add.addEventListener('click',()=>{ 
       if(input.value==''){
          alert("YOU MUST WRITE SOMETHING")
       }
     else{
    const newdiv=document.createElement('div');
    newdiv.classList.add('task')
    
newdiv.innerHTML=` <div class="task">
            <div class="text">${input.value}</div>
            <div class="logo">
                <div class="tick"> &#x2713</div>
                <div class="delete"><i class="fa fa-trash-o"></i></div>
            </div>
        </div>`
tasks.append(newdiv)
input.value='';
}
//update local storage using this save data function
savedata()
total_tasks.innerText=tasks.childElementCount;
})

//DELETE ALL THE TASKS IN ONE CLICK
deleteall.addEventListener('click',()=>{
    tasks.innerHTML='';
    total_tasks.innerText=tasks.childElementCount;
    total_tick.innerText=document.querySelectorAll('.tick').length
    savedata();
})

//ADD FUNCTION TO THE TICK AND DELETE LOGO
tasks.addEventListener('click',(e)=>{
    console.log(e.target.tagName)
    if(e.target.classList[0]=='tick'){
       e.target.parentElement.previousElementSibling.classList.toggle('check')
       total_tick.innerText=document.querySelectorAll('.check').length
    }
    else if(e.target.classList[0]=='delete'){
        e.target.parentElement.parentElement.parentElement.remove()
        total_tasks.innerText=tasks.childElementCount;
        total_tick.innerText=document.querySelectorAll('.check').length
     }
     else if(e.target.tagName=='I'){
        e.target.parentElement.parentElement.parentElement.parentElement.remove()
        total_tasks.innerText=tasks.childElementCount;
        total_tick.innerText=document.querySelectorAll('.check').length
        console.log(e.target)
     }
     savedata();
 })
 //DELEYTE PMNLY SELECTE ELEMENTS
deleteselected.addEventListener('click',()=>{
   const allselected=document.querySelectorAll('.check');
   for(let i=0;i<allselected.length;i++){
allselected[i].parentElement.parentElement.remove()}
total_tick.innerText=document.querySelectorAll('.check').length
total_tasks.innerText=tasks.childElementCount;
savedata();
})

//SAVE THE DATA IN THE LOCAL STORAGE
function savedata(){
    //here we have stored the tasks inner html in the browser with the name data
    localStorage.setItem("data",tasks.innerHTML)
    localStorage.setItem("completed",document.querySelectorAll('.check').length)
    localStorage.setItem("totaltask",tasks.childElementCount)
    //now we can get these data using get data
}
//now we will set all these things from the local sorage
function showpreviousdata(){
   tasks.innerHTML=localStorage.getItem("data");
   total_tick.innerText=localStorage.getItem("completed")
total_tasks.innerText=localStorage.getItem("totaltask")
}
//now show this
showpreviousdata()





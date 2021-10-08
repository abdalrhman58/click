// document.addEventListener("DOMContentLoaded",function(){
//     document.querySelector("#red").onclick =function(){
//         document.querySelector('h1').style.color = 'red';
//     }
//         document.querySelector("#blue").onclick =function(){
//         document.querySelector('h1').style.color = 'blue';
//         }
//         document.querySelector("#green").onclick =function(){
//         document.querySelector('h1').style.color = 'green';
//     }
// });
// document.addEventListener("DOMContentLoaded",() =>{
//     document.querySelectorAll("button").forEach((button)=>{
//         button.onclick =() =>{
//             document.querySelector("h1").style.color = button.dataset.color;
//         }
//     })
// });
// document.addEventListener("DOMContentLoaded",function(){
//     document.querySelector("select").onchange = function(){
//         document.querySelector("h1").style.color=this.value;

//     };
// });
// document.addEventListener("DOMContentLoaded",function(){
//     const headerstyle = document.querySelector("h1").style;
//         headerstyle.color=red;

// });

document.addEventListener("DOMContentLoaded",function(){
    const newTask = document.querySelector("#task");
    const submit = document.querySelector("#submit");
    // submit.disabled = true;
    document.querySelector("form").onsubmit = function() {
        // creat element لانشاء عنصر جديد
        const li = document.createElement("li");
        const task = newTask.value;
        li.innerHTML = task;
        document.querySelector("#tasks").append(li);
        newTask.value ="";//منشان بعد ما نكتب تروح الكلمة 
        return false;
    }
 });
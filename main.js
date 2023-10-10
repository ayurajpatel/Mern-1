//Modules=========================
import {Upper, Lower} from "./module/case.js";

//Selecters=======================
const upper = document.querySelector("#upper")
const lower = document.querySelector("#lower")
//ifelse selector===================
const form = document.querySelector("#form")

//Function=========================
//   upper.onclick = ()=> {
//     var result = Upper("hii dosto !");
//     alert(result);
//  }

//   lower.onclick=()=>{
//     var result = Lower("HELLO FRIENDS !");
//     alert(result);
//  }

 //ifelse function======================

 form.onsubmit = (e)=>{
    e.preventDefault()
    var value = e.target[0].value
    if(value.length) return alert("OK !")
    alert("NOT OK !")


 }
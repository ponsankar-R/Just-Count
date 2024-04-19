val=0;
console.log(val)
let count=document.getElementById("count");
console.log("Javasccript working properly")
function add(){
    
    val++
    count.innerHTML=val;
    if(val<0){
        count.style.border="5px solid violet";
    }
    if(val%2==0){
    count.style.borderLeftColor="blue"
    count.style.borderRightColor="orange"
    }
    else{
        count.style.borderLeftColor="orange"
        count.style.borderRightColor="blue"
    }

    if(note.includes(val)){
        count.style.color="red";
        count.style.backgroundColor="white";
    }
    else{
        count.style.color="black"
        count.style.backgroundColor="";
    }
}
function sub(){
    val--

    count.innerHTML=val;
    if(val<0){
        count.style.border="5px solid red"
    }
    
    if(val%2==0){
        count.style.borderLeftColor="red"
        count.style.borderRightColor="black"
        }
        else{
            count.style.borderLeftColor="black"
            count.style.borderRightColor="red"
        }
        if(note.includes(val)){
            count.style.color="red";
            count.style.backgroundColor="white";
        }
        else{
            count.style.color="black"
            count.style.backgroundColor="";
        }

    }

let note=[];
function onNote(){
    note.push(val);
}

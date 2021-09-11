
document.getElementById("add").addEventListener("click", createbox);

//this function creates a textbox and appends it to an empty list 
function createbox() {
    //creating elements
    var listel=document.createElement("div");

    //styles for list elm
    listel.setAttribute("ID","lelm")
    listel.style.margin=5+"px";

    var box=document.createElement("div");
    box.setAttribute("ID", "tbox");
    box.setAttribute("contenteditable","true");
    //appending
    listel.appendChild(box);
    document.getElementById("mlistwrapper").appendChild(listel);

    //styles for textbox
    box.style.zIndex=3000;
    box.style.padding=10 + "px";
    box.style.maxWidth=350+"px";
    box.style.color="white";
    box.style.font=5;
    box.style.backgroundColor="rgb(110, 105, 105)";
    box.style.overflowY="auto";
    box.style.overflowWrap="break-word";
    

    //setting the cursor to the box
    box.focus();


//event listeners
    //allowing the box to be typed in
    listel.addEventListener("click",function(){
        box.focus()
    });                                    
}




    

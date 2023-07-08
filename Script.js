function Buttonclick(val){
    document.getElementById("screen").value+=val;
}

function ScreenClear(){
    document.getElementById("screen").value=""
}

function esult(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}


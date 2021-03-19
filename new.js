var i=-1;

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function addArea() {
    var dom = document.createElement('div');
    dom.classList.add("toast-area");
    insertAfter(document.querySelector("#alert-btn"),dom);
}

function removeArea() {
    if(document.querySelector(".toast-area")!==null)
        if(document.querySelector(".toast-area").childElementCount===0)
            document.querySelector(".toast-area").remove();
}

var stringToHTML = function (str) {
    var dom = document.createElement('div');
    dom.classList.add(`container--alert`);
    dom.classList.add(`a-${i}`);
	dom.innerHTML = str;
	return dom;
};

function myfun() {

    if(i%4==0)
        toast('Error','success',false)
    else if(i%4==1)
        toast('Error','error',false)
    else if(i%2==0)
        toast('Error','info',false)
    else
        toast('Error','warning',false)
}

var colors = [
    "warning"={
        "iconType":"fa-exclamation-triangle",
        "1st background":"#feda9c",
        "1st border":"#fda501",
        "2nd background":"#feda9c",
        "3rd background":"rgb(255, 208, 128)",
        "3rd background hover":"rgb(255, 199, 102)",
        "icon":"#ce8507",
        "2nd text":"#cd953c",
        "cross":"#ce8500",
    },
    "success"={
        "iconType":"fa-check",
        "1st background":"#c5f3d7",
        "1st border":"#2cd675",
        "2nd background":"#c5f3d7",
        "3rd background":"rgb(148, 234, 185)",
        "3rd background hover":"rgb(105, 226, 157)",
        "icon":"#20ae5e",
        "2nd text":"#5eb384",
        "cross":"#22ac57",
    },
    "error"={
        "iconType":"fa-fire",
        "1st background":"#ffe1e3",
        "1st border":"#ff4856",
        "2nd background":"#ffe1e3",
        "3rd background":"rgb(252, 155, 163)",
        "3rd background hover":"rgb(251, 122, 133)",
        "icon":"#ff4854",
        "2nd text":"#eb6b71",
        "cross":"#fc4854",
    },
    "info"={
        "iconType":"fa-info-circle",
        "1st background":"#d6f0fd",
        "1st border":"#71c7fb",
        "2nd background":"#d6f0fd",
        "3rd background":"rgb(154, 216, 253)",
        "3rd background hover":"rgb(121, 203, 252)",
        "icon":"#3db7ff",
        "2nd text":"#59b7ef",
        "cross":"#43b5f5",
    }
]

function toast(text,type,autoDismiss){

    if(document.querySelector(".toast-area")===null)
        addArea();

    if(type.toLowerCase() ==="info")
    {
        i++;
        document.querySelector(".toast-area").appendChild(stringToHTML(`<div class="cell--alert-1"><i class="fas fa-info-circle"></i></div><div class="cell--alert-2">${text}</div><div class="cell--alert-3"><i class="fas fa-times"></i></div>`));
        document.querySelectorAll(".cell--alert-1")[i].style.background = "#d6f0fd";
        document.querySelectorAll(".cell--alert-2")[i].style.background = "#d6f0fd";
        document.querySelectorAll(".cell--alert-1")[i].style.borderLeft = "8px solid #71c7fb";
        document.querySelectorAll(".cell--alert-1 i")[i].style.color = "#3db7ff";
        document.querySelectorAll(".cell--alert-2")[i].style.color = "#59b7ef";
        document.querySelectorAll(".cell--alert-3")[i].style.background = "#9ad8fd";
        document.querySelectorAll(".cell--alert-3 i")[i].style.color = "#43b5f5";
    }
    else if(type.toLowerCase() ==="error")
    {
        i++;
        document.querySelector(".toast-area").appendChild(stringToHTML(`<div class="cell--alert-1"><i class="fas fa-fire"></i></div><div class="cell--alert-2">${text}</div><div class="cell--alert-3"><i class="fas fa-times"></i></div>`));
        document.querySelectorAll(".cell--alert-1")[i].style.background = "#ffe1e3";
        document.querySelectorAll(".cell--alert-2")[i].style.background = "#ffe1e3";
        document.querySelectorAll(".cell--alert-1")[i].style.borderLeft = "8px solid #ff4856";
        document.querySelectorAll(".cell--alert-1 i")[i].style.color = "#ff4854";
        document.querySelectorAll(".cell--alert-2")[i].style.color = "#eb6b71";
        document.querySelectorAll(".cell--alert-3")[i].style.background = "#fc9ba3";
        document.querySelectorAll(".cell--alert-3 i")[i].style.color = "#fc4854";
    }

    else if(type.toLowerCase() ==="success")
    {
        i++;
        document.querySelector(".toast-area").appendChild(stringToHTML(`<div class="cell--alert-1"><i class="fas fa-check"></i></div><div class="cell--alert-2">${text}</div><div class="cell--alert-3"><i class="fas fa-times"></i></div>`));
        document.querySelectorAll(".cell--alert-1")[i].style.background = "#c5f3d7";
        document.querySelectorAll(".cell--alert-2")[i].style.background = "#c5f3d7";
        document.querySelectorAll(".cell--alert-1")[i].style.borderLeft = "8px solid #2cd675";
        document.querySelectorAll(".cell--alert-1 i")[i].style.color = "#20ae5e";
        document.querySelectorAll(".cell--alert-2")[i].style.color = "#5eb384";
        document.querySelectorAll(".cell--alert-3")[i].style.background = "#94eab9";
        document.querySelectorAll(".cell--alert-3 i")[i].style.color = "#22ac57";
    }
    else if(type.toLowerCase() ==="warning")
    {
        i++;
        document.querySelector(".toast-area").appendChild(stringToHTML(`<div class="cell--alert-1"><i class="fas fa-exclamation-triangle"></i></div><div class="cell--alert-2">${text}</div><div class="cell--alert-3"><i class="fas fa-times"></i></div>`));
        document.querySelectorAll(".cell--alert-1")[i].style.background = "#feda9c";
        document.querySelectorAll(".cell--alert-2")[i].style.background = "#feda9c";
        document.querySelectorAll(".cell--alert-1")[i].style.borderLeft = "8px solid #fda501";
        document.querySelectorAll(".cell--alert-1 i")[i].style.color = "#ce8507";
        document.querySelectorAll(".cell--alert-2")[i].style.color = "#cd953c";
        document.querySelectorAll(".cell--alert-3")[i].style.background = "#ffd080";
        document.querySelectorAll(".cell--alert-3 i")[i].style.color = "#ce8500";
    }


    document.querySelectorAll('.container--alert')[i].classList.add("show");
    document.querySelectorAll('.container--alert')[i].classList.remove("hide");

    if(autoDismiss)
    {
        setTimeout(function(){
            document.querySelectorAll('.container--alert')[document.querySelectorAll('.container--alert').length-i-1].classList.remove("show");
            document.querySelectorAll('.container--alert')[document.querySelectorAll('.container--alert').length-i-1].classList.add("hide");
            i--;
            document.querySelectorAll('.container--alert').forEach((key,value) =>{
                if(key.classList.contains("hide"))
                {
                    setTimeout(function(){
                        try
                        {
                            key.parentNode.removeChild(key);
                            removeArea();
                        }
                        catch(e)
                        {}
                    },1000);
                }
            })
        },5000);
    }

    document.querySelectorAll('.cell--alert-3').forEach((key,value)=>{
        key.onclick=function(){
            key.parentNode.classList.remove("show");
            key.parentNode.classList.add("hide");
            setTimeout(function(){
                try
                {
                    key.parentNode.parentNode.removeChild(key.parentNode);
                    i--;
                    removeArea();
                }
                catch(e)
                {}
            },1000);
        };

        key.onmouseover = function() {

            if(key.style.background==="rgb(154, 216, 253)")
                key.style.background="rgb(121, 203, 252)";

            else if(key.style.background==="rgb(252, 155, 163)")
                key.style.background="rgb(251, 122, 133)";

            else if(key.style.background==="rgb(148, 234, 185)")
                key.style.background="rgb(105, 226, 157)";

            else if(key.style.background==="rgb(255, 208, 128)")
                key.style.background="rgb(255, 199, 102)";
        };

        key.onmouseout = function() {

            if(key.style.background==="rgb(121, 203, 252)")
                key.style.background="rgb(154, 216, 253)";

            else if(key.style.background==="rgb(251, 122, 133)")
                key.style.background="rgb(252, 155, 163)";

            else if(key.style.background==="rgb(105, 226, 157)")
                key.style.background="rgb(148, 234, 185)";

            else if(key.style.background==="rgb(255, 199, 102)")
                key.style.background="rgb(255, 208, 128)";
        };
    });
}
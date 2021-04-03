function insertAfter(referenceNode, newNode)
{
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function addArea(conPosition)
{
    var dom = document.createElement('div');
    dom.classList.add("toast-area");
    dom.setAttribute("position",conPosition);
    dom.classList.add(conPosition);
    insertAfter(document.querySelector("#alert-btn"),dom);
}

function removeArea()
{
    if(document.querySelector(".toast-area")!==null)
        if(document.querySelector(".toast-area").childElementCount===0)
            document.querySelector(".toast-area").remove();
}

function toastParent(str,type)
{
    var dom = document.createElement('div');
    dom.classList.add(`container--alert`);
    dom.setAttribute("toastType",type);
	dom.innerHTML = str;
	return dom;
};

var colors = {
    "warning":
    {
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
    "success":
    {
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
    "error":
    {
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
    "info":
    {
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
}



function toast(conPosition,text,type,autoDismiss,time=5000,zindex=9999)
{

    if(document.querySelector(".toast-area")===null)
        addArea(conPosition.toLowerCase());

    type=type.toLowerCase();

    var node = toastParent(`<div class="cell--alert-1"><i class="fas ${colors[type]["iconType"]}"></i></div><div class="cell--alert-2"></div><div class="cell--alert-3"><i class="fas fa-times"></i></div>`,type);

    document.querySelector(".toast-area").appendChild(node);

    node.style.zIndex = zindex;
    node.children[0].style.background = colors[type]["1st background"];
    node.children[1].innerHTML = text;
    node.children[1].style.background = colors[type]["2nd background"];
    node.children[0].style.borderLeft = `8px solid ${colors[type]["1st border"]}`;
    node.children[0].children[0].style.color = colors[type]["icon"];
    node.children[1].style.color = colors[type]["2nd text"];
    node.children[2].style.background = colors[type]["3rd background"];
    node.children[2].children[0].style.color = colors[type]["cross"];

    node.classList.add("show");
    node.classList.remove("hide");
    node.style.animation=`show_slide__${node.parentNode.getAttribute("position")} 1s ease forwards`;

    if(autoDismiss)
    {
        setTimeout(function(){
            try
            {
                node.classList.remove("show");
                node.classList.add("hide");
                node.style.animation=`hide_slide__${node.parentNode.getAttribute("position")} 1s ease forwards`;
                setTimeout(function(){
                    node.parentNode.removeChild(node);
                    removeArea();
                },1000);
            }
            catch(e)
            {}
        },time);
    }

    node.children[2].onclick=()=>{
        node.children[2].parentNode.classList.remove("show");
        node.children[2].parentNode.classList.add("hide");
        node.children[2].parentNode.style.animation=`hide_slide__${node.parentNode.getAttribute("position")} 1s ease forwards`;
        setTimeout(function(){
            node.parentNode.removeChild(node.children[2].parentNode);
            removeArea();
        },1000);
    };

    node.children[2].onmouseover = () => node.children[2].style.background=colors[node.getAttribute("toasttype")]["3rd background hover"];

    node.children[2].onmouseout = () => node.children[2].style.background=colors[node.getAttribute("toasttype")]["3rd background"];
}
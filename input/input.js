window.onload = () => {
    document.querySelector(".btn-outline.primary").onclick = function() {
        toast('top-right','This is a <a href="#" style="text-decoration: none;color: unset;">info</a> text','info',false,4000,50);
    }

    document.querySelector(".btn-outline.success").onclick = function() {
        toast('top-right','This is a <a href="#" style="text-decoration: none;color: unset;">success</a> text','success',false,4000,50);
    }

    document.querySelector(".btn-outline.warning").onclick = function() {
        toast('top-right','This is a <a href="#" style="text-decoration: none;color: unset;">warning</a> text','warning',false,4000,50);
    }

    document.querySelector(".btn-outline.danger").onclick = function() {
        toast('top-right','This is a <a href="#" style="text-decoration: none;color: unset;">error</a> text','error',false,4000,50);
    }
}


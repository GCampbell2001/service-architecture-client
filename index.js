
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("indeximage");
    for(i=0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if(myIndex > x.length) {
        myIndex = 1;
    }

    x[myIndex-1].style.display = "block";

    setTimeout(carousel, 9000);
};

function credentialStartUp() {
    document.getElementById("launchlogin").style.display = 'none';
    document.getElementById("logo").style.display = 'none';
    document.getElementById('id01').style.display='block';
}

function cancelButton() {
    document.getElementById("launchlogin").style.display = 'block';
    document.getElementById("logo").style.display = 'block';
    document.getElementById('id01').style.display='none';
}
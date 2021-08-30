
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

function login() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "http://localhost:9090/users/" + username + "/" + password);
    xmlHttp.setRequestHeader('Access-Control-Allow-Headers', '*');
    // xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xmlHttp.send();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.status == 200){
            var json_data = xmlHttp.responseText;
            sessionStorage.setItem("user", json_data);
            if(json_data.includes("STUDENT")){
                window.location.href("./degree.html");
            } else if(json_data.includes("TEACHER")){
                window.location.href("./tdegree.html");
            }
            // return json_data;
        }
    }
    // window.location.href("http://127.0.0.1:5500/degree.html");
    // window.open("degree.html", '_self');
    // document.location.href = "degree.html";
}
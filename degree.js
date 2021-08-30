let courseList = ["15"];
let courseInfo = [];
let headerList = ["Code", "Course Name", "Course Time", "Start Date", "End Date", "Instructor"];

function signout() {
    location.replace("index.html");
}

window.onload = function loadCatalog() {
    LoadTable();
    TableGenerate();

}

function LoadTable() {
    var username = sessionStorage.getItem("username");
    var password = sessionStorage.getItem("password");

     fetch('http://localhost:9090/users/' + username + '/' + password).then(res =>
     res.json()).then(data => {list = data;
        document.getElementById("idUser").innerHTML(data.id);
        document.getElementById("nameUser").innerHTML(data.name);
        document.getElementById("Email").innerHTML(data.email);
        document.getElementById("birthdayUser").innerHTML(data.birthday);
        document.getElementById("degreeUser").innerHTML(data.degree);
     });
}

function TableGenerate() {
    var table = document.getElementById("courseTable");
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    for (var j=0; j < headerList.length; j++){
        var th = document.createElement('th');
        var text = document.createTextNode(headerList[j]);
        th.appendChild(text);
        tr.appendChild(th);
    }
    thead.appendChild(tr);

    table.appendChild(thead);
    for(var i=0; i < courseList.length; i++){
        var tr = document.createElement('tr');
        populateCourseInfo(courseList[i])
        for(var j=0; j< 6; j++) {
            var td = document.createElement('td');
            var text = document.createTextNode(courseInfo[j]);
            td.appendChild(text);
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
        table.appendChild(tbody);
    }
    // document.getElementsById('')
}

function populateCourseInfo(CourseCode){
    // fetch('http://localhost:9090/courses/' + CourseCode).then(res =>
    // res.json()).then(data => {list = data;
    //     courseInfo.splice(0, courseInfo.length);
    //     console.log(data);
    //     courseInfo.push(data.code);
    //     courseInfo.push(data.instructorName);
    //     courseInfo.push(data.courseTime);
    //     courseInfo.push(data.startDate);
    //     courseInfo.push(data.endDate);
    // });

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "http://localhost:9090/courses");
    xmlHttp.setRequestHeader('Access-Control-Allow-Headers', '*');
    // xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xmlHttp.send();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.status == 200){
            var json_data = xmlHttp.responseText;
            console.log(json_data);
            // return json_data;
        }
    }

}
let courseList = ["11"];
let courseInfo = [];
let headerList = ["Code", "Course Name", "Course Time", "Start Date", "End Date", "Instructor"];

function signout() {
    location.replace("index.html");
}

window.onload = function loadCatalog() {
    TableGenerate();

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


    
}
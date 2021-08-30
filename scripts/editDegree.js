let courseList = ["15"];
let courseInfo = [];
let headerList = ["Code", "Course Name", "Course Time", "Start Date", "End Date", "Instructor"];
let fullCourseCodes = [];

window.onload = function loadCatalog() {
    TableGenerate();
    FullCourseGenerate();
}


function FullCourseGenerate() {
    var table = document.getElementById("fullCourseTable");
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    getAllCourseCodes();
    for(var i=0; i < fullCourseCodes.length; i++){
        var checkBoxtd = document.createElement('td');
        var checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('name', 'courses');
        populateCourseInfo(fullCourseCodes[x]);
        checkBox.setAttribute('name', courseInfo[0]);
        for(let x in fullCourseCodes) {
            var td = document.createElement('td');
            var text = document.createTextNode(courseInfo[j]);
            
            td.appendChild(text);
            tr.appendChild(td);
        }
        checkBoxtd.appendChild(checkBox);
        tr.appendChild(checkBoxtd);
        tbody.appendChild(tr);
        table.appendChild(tbody);
    }


    


    // for(var i=0; i < courseList.length; i++){
    //     var tr = document.createElement('tr');
    //     populateCourseInfo(courseList[i])
    //     for(var j=0; j< 6; j++) {
    //         var td = document.createElement('td');
    //         var text = document.createTextNode(courseInfo[j]);
    //         td.appendChild(text);
    //         tr.appendChild(td);
    //     }
    //     tbody.appendChild(tr);
    //     table.appendChild(tbody);
    // }


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
        populateCourseInfo(courseList[i]);
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

function getAllCourseCodes() {
    fetch('http://localhost:9090/courses/' + CourseCode).then(res =>
            res.json()).then(data => {list = data;
                for (let x in data) {
                    fullCourseCodes.push(data[x].code) 
                }
            });
}


function populateCourseInfo(CourseCode){
    try{
        fetch('http://localhost:9090/courses/' + CourseCode).then(res =>
            res.json()).then(data => {list = data;
                //This line is supposed to clear the courseInfo array
                courseInfo.splice(0, courseInfo.length);
                // these lines populate the array in the order the info is printed onto the table left-to-right
                courseInfo.push(data.code);
                courseInfo.push(data.name);
                courseInfo.push(data.courseTime);
                courseInfo.push(data.startDate);
                courseInfo.push(data.endDate);
                courseInfo.push(data.instructorName);
            });
    } catch(err) {
        console.log(err);
    }
}



function updateSchedule() {
    var entriesToAdd = document.getElementsByName("courses");
    var codesToAdd = [];
    for(let i = 0; i < entriesToAdd.length; i++) {
        if (entriesToAdd[i].checked){
            codesToAdd.push(entriesToAdd[i].value);
            // console.log(entriesToAdd[i].className);
        }
    }
    //TODO: need to update the User and cookies for course list to the codes from codesToAdd[]
    
}


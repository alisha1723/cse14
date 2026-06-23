function calculateResult() {

    var numberOfSubjects = Number(document.getElementById("numSubjects").value);

    var totalMarks = 0;
    var pass = true;

    for (var i = 1; i <= numberOfSubjects; i++) {

        var marks = Number(prompt("Enter marks for Subject " + i));

        totalMarks = totalMarks + marks;

        if (marks < 33) {
            pass = false;
        }
    }

    var average = totalMarks / numberOfSubjects;

    var grade;

    if (average >= 90) {
        grade = "A+";
    }
    else if (average >= 80) {
        grade = "A";
    }
    else if (average >= 70) {
        grade = "B";
    }
    else if (average >= 60) {
        grade = "C";
    }
    else if (average >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    var result;

    if (pass) {
        result = "PASS";
    }
    else {
        result = "FAIL";
    }

    document.getElementById("result").innerHTML =
        "<h3>Result</h3>" +
        "Total Marks: " + totalMarks + "<br>" +
        "Average: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result;
}
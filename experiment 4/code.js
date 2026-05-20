function calculateresult() { 
    let n = document.getElementById("subjects").value; 
    if (n <= 0) { 
        alert("Please enter a valid number of subjects."); 
        return;} 
    let total = 0; 
    for (let i = 0; i < n; i += 1) { 
        let marks = parseFloat(prompt("Enter marks for subject " + (i + 1))); 
        if (!isNaN(marks)) { 
            total += marks;}} 
    let avg = total / n; 
    let grade;  
    let result; 
    if (avg > 90) grade = "A"; 
    else if (avg > 80) grade = "B"; 
    else if (avg > 70) grade = "C"; 
    else if (avg > 60) grade = "D"; 
    else if (avg > 50) grade = "E"; 
    else grade = "F"; 
    result = (avg > 40) ? "PASS" : "FAIL"; 
    document.getElementById("result").innerHTML = ` 
        <div class="result"> 
            <p>Total Marks: ${total}</p> 
            <p>Average Marks: ${avg.toFixed(2)}</p> 
            <p>Grade: ${grade}</p> 
            <p>Final Result: ${result}</p> 
        </div> `;} 
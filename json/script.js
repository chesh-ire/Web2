document.addEventListener("DOMContentLoaded", function() {
    const OutputDiv = document.getElementById("output");
    fetch("database.json")
    .then(response => response.json())
    .then(data => {
        OutputDiv.innerHTML = "<h2>Student Info</h2>";
        data.forEach(student => {
            OutputDiv.innerHTML += `<p>Name: ${student.studentName}, USN: ${student.usn}</p>`;
        });
    })
    .catch(error => {
        console.log("Error fetching data:", error);
        OutputDiv.innerHTML = "<p>Error fetching data</p>";
    });
});

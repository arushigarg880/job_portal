
var form = document.getElementById("jobForm");

form.onsubmit = function(event) {
    event.preventDefault();

    
    var company = document.getElementById("name").value;
    var title = document.getElementById("title").value;
    var category = document.getElementById("category").value;
    var experience = document.getElementById("experience").value;
    var minSalary = document.getElementById("minSalary").value;
    var maxSalary = document.getElementById("maxSalary").value;
    var description = document.getElementById("jobDescription").value;
    var deadline = document.getElementById("deadline").value;
    var email = document.getElementById("recieve").value;
    if (company === "" || title === "" || category === "" || experience === "" || description === "" || 
    email === "") {

    alert("Please fill all required fields!");
    return;

}
if (minSalary < 0 || maxSalary < 0) {
    alert("Salary cannot be negative!");
    return;
}

if (minSalary > maxSalary) {
    alert("Minimum salary cannot be greater than maximum salary!");
    return;
}




   
    var jobCard = document.createElement("div");


    
    jobCard.innerHTML =
        "<h3>" + title + "</h3>" +
        "<p><b>Company:</b> " + company + "</p>" +
        "<p><b>Category:</b> " + category + "</p>" +
        "<p><b>Experience:</b> " + experience + "</p>" +
        "<p><b>Salary:</b> ₹" + minSalary + " - ₹" + maxSalary + "</p>" +
        "<p><b>Description:</b> " + description + "</p>" +
        "<p><b>Deadline:</b> " + deadline + "</p>" +
        "<p><b>Email:</b> " + email + "</p>";

   
    document.getElementById("jobList").appendChild(jobCard);


    form.reset();
};

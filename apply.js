
var form = document.getElementById("resume");

form.onsubmit = function(event) {

    event.preventDefault();

    alert("Resume uploaded successfully!");

    form.reset();
};


var applyButton = document.getElementById("applyBtn");

applyButton.onclick = function() {

    applyButton.innerHTML = "Applied Successfully";
    applyButton.disabled = true;
};

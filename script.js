function calculateAge() {
    var birthInput = document.getElementById("birth-input").value;
    
    if (birthInput.trim() === "") {
        alert("Birth input cannot be empty!");
    }
    
    var birthDate = new Date(birthInput);
    var today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate(); 
    document.getElementById("year").textContent = years;
    document.getElementById("month").textContent = months;
    document.getElementById("day").textContent = days;
}

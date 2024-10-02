function calculateAge() {
    var birthInput = document.getElementById("birth-input").value;
    
    if (birthInput.trim() === "") {
        alert("Birth input cannot be empty!");
        return;
    }
    var birthDate = new Date(birthInput);
    var today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate(); 
    if (birthDate > today){
        alert("Birth year cannot be in the future!");
        return;
    }
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    document.getElementById("year").textContent = years;
    document.getElementById("month").textContent = months;
    document.getElementById("day").textContent = days;
}

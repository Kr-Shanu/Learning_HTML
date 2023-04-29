function handleClick() {
            
    let age = document.getElementById("ageOfUser").value;
    let name = document.getElementById("nameOfUser").value;
    let roll = document.getElementById("rollOfUser").value;
    if(age <= 0 || age > 100) {
        window.alert("Invalid Age !! Please Enter your valid age");
    }
    else {
        document.getElementById("print").style.padding = "1rem";
        document.getElementById("n").innerHTML = "Name Entered: "+ name;
        document.getElementById("a").innerHTML = "Age Entered: "+ age;
        document.getElementById("r").innerHTML = "Roll Number: "+ roll;
    }
}
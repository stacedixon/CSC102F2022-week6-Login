function checkCreds(){
    //collect the data
    var fstName = document.getElementById("fName").value;
    var lstName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    //work with the data
    var fullName = fstName + lstName;
    console.log("the full name is " + fullName);
    console.log("the badge number is " + badgeNumb);
    var fullLength = fullName.length;
    console.log("the name length is " + fullLength);

    if(fullLength > 20){
        document.getElementById("loginStatus").innerHTML ="Invalid name entry, please try again";
    } else if(badgeNumb > 999 || badgeNumb < 1){
        document.getElementById("loginStatus").innerHTML ="Invalid Badge Number, please try again";
    } else {
        alert("access Granted, welcome "+ fullName);
    location.replace("./UATSpace.html")
    }
}
function calculateBirthday(dob)
{
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    var location = document.getElementById("age");
    var age = Math.abs(age_dt.getUTCFullYear() - 1970);
    location.innerHTML = age;
}

calculateBirthday(new Date(2002, 1, 13));
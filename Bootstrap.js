let btnRegister = document.querySelector("#btnregister");

function registerUser() {
    let txtName = document.querySelector("#txtregisterName");
    let txtEmail = document.querySelector("#txtregisterEmail");
    let txtPassword = document.querySelector("#txtregisterPassword");
    let txtConfirmPassword = document.querySelector("#txtregisterConfirmPassword");
    let txtMale = document.querySelector("#txtregisterMale");
    let txtFemale = document.querySelector("#txtregisterFemale");
    let txtRegisterNot = document.querySelector("#txtregisterNot");
    let regYearSelect = document.querySelector("#regYear");
    let selectedYear = regYearSelect.options[regYearSelect.selectedIndex].text;
    let txtAddress = document.querySelector("#txtRegisterAddress");
    let txtBirthdate = document.querySelector("#txtRegisterBirthdate");

 
    let user = {
        name: txtName.value,
        email: txtEmail.value,
        password: txtPassword.value,
        confirmPassword: txtConfirmPassword.value,
        gender: txtMale.checked ? "Male" : (txtFemale.checked ? "Female" : (txtRegisterNot.checked ? "Rather not say" : "")),
        yearLevel: selectedYear,
        address: txtAddress.value,
        birthdate: txtBirthdate.value,
    };

    if (!user.email) {
        return alert("No Email ER404.");
    } else if (!user.name) {
        return alert("Name Required!");
    } else if (!user.password || !user.confirmPassword) {
        return alert("Password is required.");
    } else if (user.password !== user.confirmPassword) {
        return alert("Password Doesn't Match.");
    } else if (!user.gender) {
        return alert("Gender Required");
    } else if (regYearSelect.selectedIndex === 0) {
        return alert("Pick an Age.");
    } else if (!user.address) {
        return alert("No Address Detected");
    } else if (!user.birthdate) {
        return alert("No Birthday Input.");
    }


    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    console.log("You Have Successfully Registered!", user);
}

btnRegister.onclick = () => {
    registerUser();
};

function navigatebootstrap() {

    window.location.href = "Bootstrap.html";
  };
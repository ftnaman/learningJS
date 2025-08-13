function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.info = function () {
        return `First Name: ${this.firstName} <br>
Last Name: ${this.lastName} <br>
Age: ${this.age} <br><br>`;
    }
}

let userArray = [];

const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener("click", () => {
    const f_name_cont = document.querySelector("#f_name");
    const l_name_cont = document.querySelector("#l_name");
    const age_cont = document.querySelector("#age");
    let temp_user = new User(f_name_cont.value, l_name_cont.value, age_cont.value);

    f_name_cont.value = "";
    l_name_cont.value = "";
    age_cont.value = "";

    userArray.push(temp_user);
});

const showButton = document.querySelector('#showButton');

showButton.addEventListener("click", () => {
    const result = document.querySelector("#resultPara");
    result.innerHTML = "";
    for (let user of userArray) {
        result.innerHTML += user.info();
    }
});

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value} <br> Message: ${mess.value}`;

  Email.send({
    SecureToken: "0dd071b6-551b-4d0d-936c-4a25b9d461b7",
    Host: "smtp.elasticemail.com",
    Username: "miljanakajo17@gmail.com",
    Password: "79FEB3E08B70EAD8C549AED682EF96B6BEBC",
    To: "miljanakajo17@gmail.com",
    From: "miljanakajo17@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Me sukses!",
        text: "Mesazhi u dergua me sukses!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }
    items[1].addEventListener("keyup", () => {
      checkEmail();
    });
    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector("error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    item.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Shkruani nje adrese emaili valide";
    } else {
      errorTxtEmail.innerText = "Adresa e emailit nuk mund te jete bosh!";
    }
  } else {
    email.classList.remove("error");
    item.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
  checkInputs();

  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !mess.classList.contains("error")
  ) {
    sendEmail();

    form.reset();
    return false;
  }
});

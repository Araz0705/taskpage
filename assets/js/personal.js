const bar = document.querySelector(".bar")
const resp = document.querySelector(".resp")
const header = document.querySelector("header")
bar.addEventListener("click", function () {
    resp.classList.toggle("responsive")
    header.classList.toggle("header_bg")
})




const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("mesagge");
const send = document.querySelector(".formik");


let arr = [];
send.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("salam")
    let obj = {
        email: "",
        subject: "",
        message: "",
    }

    obj.email = email.value;
    obj.subject=subject.value;
    obj.message=message.value;
    arr.push(obj);
    console.log(arr);

    localStorage.setItem("arr", JSON.stringify(arr));

    // JSON.parse(localStorage.getItem(arr));
    // console.log(arr);


});



const adlar = document.querySelectorAll(".adlar");
const sekiller = document.querySelectorAll(".sekiller");
const comment = document.querySelectorAll(".comment");
sekiller.id = "bayraqOlcusu";



fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {

        for (let i = 0; i < data.length; i++) {
            for (let index = 0; index < adlar.length; index++) {

                if (i == index) {
                    adlar[i].innerText = data[index].name.common;
                    sekiller[i].src = data[index].flags.png;
                    data[i].name.official


                   


                    comment[i].innerText = data[i].name.official + " ---- " + comment[i].innerText;

                }

            }

        }
    });







var modal = document.querySelector(".modal-activate");
var form = document.querySelector(".modal-search");
var arrivalDate = document.querySelector("#arrival-date");
var exitDate = document.querySelector("#exit-date");
var calendarArrival = document.querySelector(".modal-search-arrival-date .modal-search-calendar");
var calendarExit = document.querySelector(".modal-search-exit-date .modal-search-calendar");
var search = document.querySelector(".button-search");
var adult = document.querySelector("#adult");
var kid = document.querySelector("#kid");
var addAdult = document.querySelector(".modal-search-count-adult .button-add");
var subtractAdult = document.querySelector(".modal-search-count-adult .button-subtract");
var addKid = document.querySelector(".modal-search-count-kid .button-add");
var subtractKid = document.querySelector(".modal-search-count-kid .button-subtract");
var adultCount = adult.value;
var kidCount = kid.value;

modal.addEventListener("click", function (evt) {
    evt.preventDefault ();
    form.classList.toggle("modal-show");
    if (form.classList.contains("modal-show")) {
        arrivalDate.focus();
      }
    arrivalDate.classList.remove("wrong-input");
    exitDate.classList.remove("wrong-input");
} )

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (form.classList.contains("modal-show")) {
        form.classList.remove("modal-show");
      }
    }
  });

search.addEventListener("click", function (evt) {
    if (!arrivalDate.value) {
        evt.preventDefault();
        arrivalDate.classList.remove("wrong-input");
        arrivalDate.offsetWidth = arrivalDate.offsetWidth;
        arrivalDate.classList.add("wrong-input");
    }
    if (!exitDate.value) {
        evt.preventDefault();
        exitDate.classList.remove("wrong-input");
        exitDate.offsetWidth = arrivalDate.offsetWidth;
        exitDate.classList.add("wrong-input");
    }
} )



calendarArrival.addEventListener("click", function (evt) {
    evt.preventDefault ();
    arrivalDate.focus();
} )

calendarExit.addEventListener("click", function (evt) {
    evt.preventDefault ();
    exitDate.focus();
} )

addAdult.addEventListener("click", function (evt) {
    evt.preventDefault ();
    adultCount ++;
    adult.value = adultCount;
} )

subtractAdult.addEventListener("click", function (evt) {
    evt.preventDefault ();
    if (adult.value > 0) {
    adultCount -= 1;
    adult.value = adultCount;
    }
} )

addKid.addEventListener("click", function (evt) {
    evt.preventDefault ();
    kidCount ++;
    kid.value = kidCount;
} )

subtractKid.addEventListener("click", function (evt) {
    evt.preventDefault ();
    if (kid.value > 0) {
    kidCount -= 1;
    kid.value = kidCount;
    }
} )
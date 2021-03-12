let phoneInput = document.getElementById("phone");

IMask(phoneInput, {
  mask: "+{0}(000)000-00-00",
});

let sendButton = document.querySelector(".feedback__button");

sendButton.addEventListener("onsubmit", () => {});

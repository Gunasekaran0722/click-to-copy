var text = document.querySelector(".code").innerText;

const button = document.createElement("button");
button.innerHTML =("copy to click");

button.addEventListener("click",function(){
    var textarea = document.createElement("textarea");
    textarea.value = text;

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Copied a text");

});


document.querySelector('.container').appendChild(button);
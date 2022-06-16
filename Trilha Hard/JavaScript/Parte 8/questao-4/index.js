let button = document.querySelector("button");

button.addEventListener("click", jsonverifier);

function jsonverifier() {
    let text = document.querySelector("textarea").value;

    try{
        const object = JSON.parse(text);

        if ( typeof object != "object" ) throw "JSON string not parsable!"

        document.getElementById("message").innerHTML = "Pasable JSON string!";

        console.log(object);
    } catch (error) {
        document.getElementById("message").innerHTML = error;
    };
};
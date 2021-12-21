var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {

    console.log(event);
    
    var Content = event.reults[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;

    speak();
}

function speak() 
{
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("value");
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attatch(camera);
}

Webcam.set ({

    width : 360,
    height : 250,
    image_format : "png",
    png_quality : 90,

})

camera = document.getElementById("camera");
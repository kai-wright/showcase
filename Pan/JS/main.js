const fancy_text = document.getElementById("fancy_text");

const typewriter = new Typewriter(fancy_text, {
    loop: true,
    delay: 200,
    strings : ['last', 'are fast', 'are secure'],
    autoStart:true
});
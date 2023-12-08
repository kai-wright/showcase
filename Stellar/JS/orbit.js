var hero = document.getElementById("hero");
var image = document.getElementById("hero_image");
var title = document.getElementById("hero_title");
var content = document.getElementById("hero_content");
var left_arrow = document.getElementById("left_arrow");
var right_arrow = document.getElementById("right_arrow");
var navbar = document.getElementById("navbar");
var planets = {
    sun: {
        name: "The Sun",
        about: "A massive ball of hot, glowing gas at the center of our solar system, providing light and energy for all planets.",
        image: "./IMG/0_sun.svg",
        navID: "nav_sun",
    },
    mercury: {
        name: "Mercury",
        about: "Mercury is the closest planet to the Sun, with extreme temperatures ranging from scorching to freezing.",
        image: "./IMG/1_mercury.svg",
        navID: "nav_mercury",
    },
    venus: {
        name: "Venus",
        about: "Venus, the second planet from the Sun, is a scorching world with a thick atmosphere, acidic clouds, and a runaway greenhouse effect.",
        image: "./IMG/2_venus.svg",
        navID: "nav_venus",
    },
    earth: {
        name: "Earth",
        about: "Our home planet, Earth is the only known celestial body to support life, featuring diverse ecosystems and a variety of climates.",
        image: "./IMG/3_earth.svg",
        navID: "nav_earth",
    },
    mars: {
        name: "Mars",
        about: "Known as the Red Planet, Mars has a thin atmosphere and is home to the tallest volcano and the deepest canyon in our solar system.",
        image: "./IMG/4_mars.svg",
        navID: "nav_mars",
    },
    jupiter: {
        name: "Jupiter",
        about: "The largest planet, Jupiter has a powerful magnetic field, numerous moons, and a distinctive banded appearance due to swirling clouds.",
        image: "./IMG/5_jupiter.svg",
        navID: "nav_jupiter",
    },
    saturn: {
        name: "Saturn",
        about: "Famous for its stunning ring system, Saturn is a gas giant with unique features like hexagonal cloud patterns at its north pole.",
        image: "./IMG/6_saturn.svg",
        navID: "nav_saturn",
    },
    uranus: {
        name: "Uranus",
        about: "Uranus is an ice giant with a tilted rotation axis, causing it to rotate on its side. It has a faint ring system and numerous moons.",
        image: "./IMG/7_uranus.svg",
        navID: "nav_uranus",
    },
    neptune: {
        name: "Neptune",
        about: "Neptune, the farthest planet from the Sun, is a vibrant blue gas giant with strong winds, dark storms, and a mysterious Great Dark Spot.",
        image: "./IMG/8_neptune.svg",
        navID: "nav_neptune",
    },
};
function setPlanet(planet) {
    // Update Hero
    image.setAttribute("src", planet.image);
    title.innerHTML = planet.name;
    content.innerHTML = planet.about;
    document.getElementById(planet.navID).scrollIntoView();
    // Update URL
    if (window.location.hash != "#" + planet.navID) {
        window.location.hash = planet.navID;
    }
    // Hide the back arrow on the first planet
    // and hide the next arrow on the last planet
    if (planet.navID == "nav_sun") {
        document.getElementById("left_arrow").style.display = "none";
        document.getElementById("right_arrow").style.display = "flex";
    }
    else if (planet.navID == "nav_neptune") {
        document.getElementById("right_arrow").style.display = "none";
        document.getElementById("left_arrow").style.display = "flex";
    }
    else {
        document.getElementById("left_arrow").style.display = "flex";
        document.getElementById("right_arrow").style.display = "flex";
    }
    // Finish up
    return true;
}
function changePlanet(planet) {
    if (setPlanet(planets[planet])) {
        return true;
    }
    return false;
}
// Listen for clicks on the arrows as well as hash changes
left_arrow.addEventListener("click", function () {
    var current_planet = window.location.hash.replace("#nav_", "");
    var next_planet = Object.keys(planets)[Object.keys(planets).indexOf(current_planet) - 1];
    console.log(current_planet);
    console.log(next_planet);
    changePlanet(next_planet);
});
right_arrow.addEventListener("click", function () {
    var current_planet = window.location.hash.replace("#nav_", "");
    var next_planet = Object.keys(planets)[Object.keys(planets).indexOf(current_planet) + 1];
    console.log(current_planet);
    console.log(next_planet);
    changePlanet(next_planet);
});
window.addEventListener("hashchange", function () {
    var current_planet = window.location.hash.replace("#nav_", "");
    var next_planet = Object.keys(planets)[Object.keys(planets).indexOf(current_planet)];
    console.log(current_planet);
    console.log(next_planet);
    changePlanet(next_planet);
});
// Also detect key presses for the arrows and click them if they are visible
// Add event listener for key presses
window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft" && document.getElementById("left_arrow").style.display !== "none") {
        document.getElementById("left_arrow").click();
    }
    else if (event.key === "ArrowRight" && document.getElementById("right_arrow").style.display !== "none") {
        document.getElementById("right_arrow").click();
    }
});
// Also detect when the navbar at the top is scrolled and makes a different planet name visible
// each scrollable item is 500px wide
navbar.addEventListener("scroll", function () {
    var current_scroll = navbar.scrollLeft;
    var scroll_ended = (current_scroll % 500) == 0;
    if (scroll_ended) {
        var target_planet_id = current_scroll / 500;
        var target_planet = Object.keys(planets)[target_planet_id];
        console.log(target_planet);
        changePlanet(target_planet);
    }
});
function quick_switch() {
    var myDelay = 1000;
    var _loop_1 = function (planet) {
        var debugDelay_1 = window.setTimeout(function () {
            setPlanet(planets[planet]);
        }, myDelay);
        myDelay += 1000;
    };
    for (var planet in planets) {
        _loop_1(planet);
    }
    var debugDelay = window.setTimeout(function () {
        setPlanet(planets.sun);
    }, myDelay);
}
setPlanet(planets.sun);
//# sourceMappingURL=orbit.js.map
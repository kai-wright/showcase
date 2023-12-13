var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var hero = document.getElementById("hero");
var image = document.getElementById("hero_image");
var title = document.getElementById("hero_title");
var content = document.getElementById("hero_content");
var left_arrow = document.getElementById("left_arrow");
var right_arrow = document.getElementById("right_arrow");
var navbar = document.getElementById("navbar");
// import data from './JS/DATA/data.json' and store it in the const planets
var planets = [];
// fetch('./JS/DATA/data.json')
//   .then(response => response.json())
//   .then(data => {
//     planets = data;
//     // Use the planets data here or in subsequent code
//     console.log(planets);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./JS/DATA/data.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    planets = data;
                    // Use the planets data here or in subsequent code
                    console.log(planets);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchData();
function setPlanet(planet) {
    console.log(planet);
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
    var scroll_ended = current_scroll % 500 == 0;
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
        setPlanet(planets["sun"]);
    }, myDelay);
}
function start_loading() {
    console.log("Logging : All planets");
    console.log(planets);
    console.log("Logging : The sun");
    console.log(planets["sun"]);
    setPlanet(planets["sun"]);
    return true;
}
setTimeout(start_loading, 3000);
//# sourceMappingURL=orbit.js.map
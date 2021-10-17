function start() {
    var lat = 34.05885105800525;
    var lng = -118.28543092887885;
    initMap(lat, lng);
}


LosAngeles.onclick = function () {
    var lat = 34.05885105800525;
    var lng = -118.28543092887885;
    initMap(lat, lng);
}

NewYork.onclick = function () {
    var lat = 40.722314;
    var lng = -74.006358;
    initMap(lat, lng);
}
Boston.onclick = function () {
    var lat = 42.35887182278444;
    var lng = -71.05837511484654;
    initMap(lat, lng);
}
Detroid.onclick = function () {
    var lat = 42.34053389998734;
    var lng = -83.05903253316049;
    initMap(lat, lng);
}


function initMap(lat, lng) {
    var pos = {lat: lat, lng: lng}
    var opt = {
        center: pos,
        zoom: 12,
    };

    var map = new google.maps.Map(document.getElementById("map"), opt);

    var marker = new google.maps.Marker({
        position: pos,
        map: map
    });

};


const switchers = [...document.querySelectorAll(".btn")];

switchers.forEach((item) => {
    item.addEventListener("click", function () {
        switchers.forEach((item) =>
            item.classList.remove("active")
        );
        this.classList.add("active")

    });

});


rotate = document.getElementById("rotate");
window.addEventListener("scroll", function () {
    var m = window.pageYOffset * 0.1 + 270;
    if (m < 360) {
        m = 360
        rotate.style.transform = "rotate(" + m + "deg)";
    } else if (m > 535) {
        m = 535
        rotate.style.transform = "rotate(" + m + "deg)";
    } else {

        rotate.style.transform = "rotate(" + m + "deg)";
    }


});




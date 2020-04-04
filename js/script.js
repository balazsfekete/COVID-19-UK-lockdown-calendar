const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


var datevalue = new Date("2020-03-23");
var noOfWeeks = 12;

var calendar;
calendar = document.getElementById("calendar");

var i;
for (i = 0; i < noOfWeeks; i++) {

    var j;
    for (j = 0; j < 7; j++) {


        var day = document.createElement("div");
        day.className = "day";
        calendar.appendChild(day);


        var month = document.createElement("div");
        month.className = "month";
        day.appendChild(month);
        month.innerHTML = months[datevalue.getMonth()];

        var date = document.createElement("div");
        date.className = "date";
        day.appendChild(date);
        date.innerHTML = datevalue.getDate();

        if (datevalue.getTime() < Date.now()) {
            day.classList.add("past");
        } 

        datevalue.setDate(datevalue.getDate() + 1);
    }

    if (i%3==2) {
        var review = document.createElement("div");
        review.className = "review";
        calendar.appendChild(review);
        review.innerHTML = "Lockdown review";
    }
}

$(document).ready(function () {
    // cors issue
    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    // ajax
    var location = "oklahoma";
    var queryURL = "https://www.expodatabase.de/api/1/messen/show.php?json=1&city=" + location + "&token=df9c447drg67zHujLiopq7774dh567sIjkzT";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        // console.log(response.messen);
        // console.log(response.messen.messe);
        // console.log(response.messen.messe[0].id);
        // console.log(response.messen.messe[1].id);
        // console.log(response.messen.messe[2].id);
        // console.log(response.messen.title_short + " in " + response.messen.messe_city);
        // console.log("Start Date: " + response.messen.messe.date_start);
        // console.log("End Date: " + response.messen.messe.date_end);

        var results = response.messen.messe;
        // console.log(results);

        var showName = [];
        var startDate = [];
        var endDate = [];
        var showVenue = [];
        console.log(showName);
        console.log(startDate);
        console.log(endDate);
        console.log(showVenue);

        var eventDetails = {
            // name: showName,
            starts: startDate,
            ends: endDate,
            venue: showVenue
        };

        for (var i = 0; i < results.length; i++) {

            showName.push(results[i].short_title);
            startDate.push("Start Date: " + results[i].date_start);
            endDate.push("End Date: " + results[i].date_end);
            showVenue.push("Venue: " + results[i].venues.venue.name);

            // div for results
            var eventDiv = $("<div>");
            eventDiv.html("Event" + " at " + showVenue + ".</br>" + startDate +
                "<br>" + endDate + ".");
            $("#results").append(eventDiv);


        }

        // $("#html").append(response);
    });
})
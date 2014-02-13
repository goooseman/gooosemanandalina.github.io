function together(fromString) {

    var date = moment(fromString);
    var now = moment();

    var years = now.diff(date, 'years');
    date = date.add('years', years);

    var months = now.diff(date, 'months');
    date = date.add('months', months);

    var days = now.diff(date, 'days');
    date = date.add('days', days);

    var hours = now.diff(date, 'hours');
    date = date.add('hours', hours);

    var minutes = now.diff(date, 'minutes');
    date = date.add('minutes', minutes);

    var seconds = now.diff(date, 'seconds');

    var dateArray = [years, months, days, hours, minutes, seconds];

    return dateArray;
}

function enDateString(dateArray) {
    var yearsString, monthsString, daysString, hoursString, minutesString, secondsString;
    switch (dateArray[0]) {

        case 1:
            yearsString = ' year'
            break
        default:
            yearsString = ' years'
            break
    }

    switch (dateArray[1]) {
        case 1:
            monthsString = ' month'
            break
        default:
            monthsString = ' months'
            break
    }

    switch (dateArray[2]) {
        case 1:
            daysString = ' day'
            break
        default:
            daysString = ' days'
            break
    }

    switch (dateArray[3]) {
        case 1:
            hoursString = ' hour'
            break
        default:
            hoursString = ' hours'
            break
    }

    switch (dateArray[4]) {
        case 1:
            minutesString = ' minute'
            break
        default:
            minutesString = ' minutes'
            break
    }

    switch (dateArray[5]) {
        case 1:
            secondsString = ' second'
            break
        default:
            secondsString = ' seconds'
            break

    }
    var dateString = ' ' + dateArray[0] + yearsString + ', ' + dateArray[1] + monthsString + ', ' + dateArray[2] + daysString + ', ' + dateArray[3] + hoursString + ', ' + dateArray[4] + minutesString + ', ' + dateArray[5] + secondsString;

    dateString = dateString.replace(/\s[0][^,]*[,]/gm, "").replace(/[,]\s[0]\s[s][e].*$/gm, "");
    return dateString;
}

$(document).ready(function() {
    moment.lang('en');

    var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);

    if (iOS) {
        $('#play-overlay').show();
        $('#play-overlay').click(function() {
            $('video').get(0).play();
            $('#play-overlay').hide();
        });
        $('#play-overlay').bind("touchstart", function() {
            $('video').get(0).play();
            $('#play-overlay').hide();
        });
    }

    $('#play-button').click(function() {
        var video = $('video').get(0);
        if (video.paused) {
            video.play();
            $(this).html('<i class="fa fa-pause"></i>');
        } else {
            video.pause();
            $(this).html('<i class="fa fa-play"></i>');
        }
    });
    //Timer


    $('#timeTogether').text('We are together for' + enDateString(together("2010-05-15 19:00")));
    $('#timeSinceWedding').text('We are married for' + enDateString(together("2013-08-09 10:00")));
    setInterval(function() {
        $('#timeTogether').text('We are together for' + enDateString(together("2010-05-15 19:00")));
        $('#timeSinceWedding').text('We are married for' + enDateString(together("2013-08-09 10:00")));

    }, 1000);

});
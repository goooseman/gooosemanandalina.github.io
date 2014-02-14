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

function ruDateString(dateArray) {
    var yearsString, monthsString, daysString, hoursString, minutesString, secondsString;
    switch (dateArray[0]) {

        case 1:
            yearsString = ' год'
            break
        case 2:
            yearsString = ' года'
            break
        case 3:
            yearsString = ' года'
            break
        case 4:
            yearsString = ' года'
            break
        default:
            yearsString = ' лет'
            break
    }

    switch (dateArray[1]) {
        case 1:
            monthsString = ' месяц'
            break
        case 2:
            monthsString = ' месяца'
            break
        case 3:
            monthsString = ' месяца'
            break
        case 4:
            monthsString = ' месяца'
            break
        default:
            monthsString = ' месяцев'
            break
    }

    switch (dateArray[2]) {
        case 1:
            daysString = ' день'
            break
        case 2:
            daysString = ' дня'
            break
        case 3:
            daysString = ' дня'
            break
        case 4:
            daysString = ' дня'
            break
        case 21:
            daysString = ' день'
            break
        case 22:
            daysString = ' дня'
            break
        case 23:
            daysString = ' дня'
            break
        case 24:
            daysString = ' дня'
            break
        case 31:
            daysString = ' день'
            break
        default:
            daysString = ' дней'
            break
    }

    switch (dateArray[3]) {
        case 1:
            hoursString = ' час'
            break
        case 2:
            hoursString = ' часа'
            break
        case 3:
            hoursString = ' часа'
            break
        case 4:
            hoursString = ' часа'
            break
        default:
            hoursString = ' часов'
            break
    }

    switch (dateArray[4]) {
        case 1:
            minutesString = ' минута'
            break
        case 2:
            minutesString = ' минуты'
            break
        case 3:
            minutesString = ' минуты'
            break
        case 4:
            minutesString = ' минуты'
            break
        case 21:
            minutesString = ' минута'
            break
        case 22:
            minutesString = ' минуты'
            break
        case 23:
            minutesString = ' минуты'
            break
        case 24:
            minutesString = ' минуты'
            break
        case 31:
            minutesString = ' минута'
            break
        case 32:
            minutesString = ' минуты'
            break
        case 33:
            minutesString = ' минуты'
            break
        case 34:
            minutesString = ' минуты'
            break
        case 41:
            minutesString = ' минута'
            break
        case 42:
            minutesString = ' минуты'
            break
        case 43:
            minutesString = ' минуты'
            break
        case 44:
            minutesString = ' минуты'
            break
        case 51:
            minutesString = ' минута'
            break
        case 52:
            minutesString = ' минуты'
            break
        case 53:
            minutesString = ' минуты'
            break
        case 54:
            minutesString = ' минуты'
            break
        default:
            minutesString = ' минут'
            break
    }

    switch (dateArray[5]) {
        case 1:
            secondsString = ' секунда'
            break
        case 2:
            secondsString = ' секунды'
            break
        case 3:
            secondsString = ' секунды'
            break
        case 4:
            secondsString = ' секунды'
            break
        case 21:
            secondsString = ' секунда'
            break
        case 22:
            secondsString = ' секунды'
            break
        case 23:
            secondsString = ' секунды'
            break
        case 24:
            secondsString = ' секунды'
            break
        case 31:
            secondsString = ' секунда'
            break
        case 32:
            secondsString = ' секунды'
            break
        case 33:
            secondsString = ' секунды'
            break
        case 34:
            secondsString = ' секунды'
            break
        case 41:
            secondsString = ' секунда'
            break
        case 42:
            secondsString = ' секунды'
            break
        case 43:
            secondsString = ' секунды'
            break
        case 44:
            secondsString = ' секунды'
            break
        case 51:
            secondsString = ' секунда'
            break
        case 52:
            secondsString = ' секунды'
            break
        case 53:
            secondsString = ' секунды'
            break
        case 54:
            secondsString = ' секунды'
            break
        default:
            secondsString = ' секунд'
            break

    }
    var dateString = ' ' + dateArray[0] + yearsString + ', ' + dateArray[1] + monthsString + ', ' + dateArray[2] + daysString + ', ' + dateArray[3] + hoursString + ', ' + dateArray[4] + minutesString + ', ' + dateArray[5] + secondsString;

    dateString = dateString.replace(/\s[0][^,]*[,]/gm, "").replace(/[,]\s[0]\s[с][е].*$/gm, "");
    return dateString;
}

$(document).ready(function() {
    moment.lang('ru');


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


    $('#timeTogether').text('Мы уже вместе' + ruDateString(together("2010-05-15 19:00")));
    $('#timeSinceWedding').text('Мы уже женаты' + ruDateString(together("2013-08-09 10:00")));
    setInterval(function() {
        $('#timeTogether').text('Мы уже вместе' + ruDateString(together("2010-05-15 19:00")));
        $('#timeSinceWedding').text('Мы уже женаты' + ruDateString(together("2013-08-09 10:00")));

    }, 1000);

});
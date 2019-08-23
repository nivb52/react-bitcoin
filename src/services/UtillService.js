
export default {
    getMonthByName,
    createDateFromStamp
}

function getMonthByName(monthNumber) {
    const months = [];
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

    return months[monthNumber]
}


function createDateFromStamp(stp){
    var userLang = window.navigator.language || 'en-US'
    var dateFormat = new Date(stp).toLocaleDateString(userLang);
    return dateFormat;
}
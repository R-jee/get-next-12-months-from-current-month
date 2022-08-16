function DateUtilFunctions() {
    var self = this;

    var monthNames = new Array();

    monthNames[0] = "January";
    monthNames[1] = "February";
    monthNames[2] = "March";
    monthNames[3] = "April";
    monthNames[4] = "May";
    monthNames[5] = "June";
    monthNames[6] = "July";
    monthNames[7] = "August";
    monthNames[8] = "September";
    monthNames[9] = "October";
    monthNames[10] = "November";
    monthNames[11] = "December";

    self.getNext12MonthNamesWithYear = function () {
        var months = new Array();
        var today = new Date();
        var tmpDate = new Date();
        var tmpYear = tmpDate.getFullYear();
        var tmpMonth = tmpDate.getMonth();
        var monthLiteral;

        for (var i = 0; i < 12; i++) {
            tmpDate.setMonth(tmpMonth + i);
            tmpDate.setFullYear(tmpYear);
            monthLiteral = monthNames[tmpMonth];

            months.push(monthLiteral + ' ' + tmpYear);

            tmpYear = (tmpMonth == 11) ? tmpYear + 1 : tmpYear;
            tmpMonth = (tmpMonth == 11) ? 0 : tmpMonth + 1;
        }

        return months;
    };
}

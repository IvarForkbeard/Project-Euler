const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let month = 0;
let dayOfWeek = 0;
let daysInTHISMonth = 31;
let sundays = 0;
for (year = 1900; year < 2001; year++) {
    while (month < 12) {
        daysInTHISMonth = daysInMonths[month];
        if (month === 1) {
            console.log("This is February");
            if (year % 4 === 0) {
                daysInTHISMonth++;
                console.log("Oh!  This year is divisible by 4!");
            }
            if (year % 100 === 0) {
                console.log("Oh!  This year is divisible by 100!!");
                daysInTHISMonth--;
            }
            if (year % 400 === 0) {
                console.log("Wait!  It's divisible by 400!");
                daysInTHISMonth++;
            }
        }
        console.log("Year: " + year + "Month: " + month + "Days in this month: " + daysInTHISMonth);
        for (day = 1; day < daysInTHISMonth; day++) {
            if (day === 1 && dayOfWeek === 6 && year != 1900) {
                sundays++;
            }
            dayOfWeek++;
            if (dayOfWeek > 6) {
                dayOfWeek = 0;
            }
        }
        month++;
    }
    month = 0;
}
console.log("The answer is: " + sundays);
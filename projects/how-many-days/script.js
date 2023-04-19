function pluralize(value, singular, plural) {
    return value === 1 ? singular : plural;
}

function calculateTimeAgo() {
    const unit = document.getElementById("unit").value;
    const datePicker = document.getElementById("datePicker");
    const result = document.getElementById("result");

    if (!datePicker.value) {
        result.textContent = "Please choose a date. *";
        result.classList.add('visible', 'error');
        return;
    }
    result.classList.remove('error');

    const selectedDate = new Date(datePicker.value);
    const currentDate = new Date();
    const timeDiff = currentDate - selectedDate;

    let response = "";

    switch (unit) {
        case "days":
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            if (days > 0) response += `${days} ${pluralize(days, "day", "days")}`;
            const remainingHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            if (remainingHours > 0) response += `${days > 0 ? ' and ' : ''}${remainingHours} ${pluralize(remainingHours, "hour", "hours")}`;
            break;
        case "weeks":
            const weeks = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
            if (weeks > 0) response += `${weeks} ${pluralize(weeks, "week", "weeks")}`;
            const remainingDaysInWeek = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
            if (remainingDaysInWeek > 0) response += `${weeks > 0 ? ' and ' : ''}${remainingDaysInWeek} ${pluralize(remainingDaysInWeek, "day", "days")}`;
            break;
        case "months":
            const months = (currentDate.getFullYear() - selectedDate.getFullYear()) * 12 + (currentDate.getMonth() - selectedDate.getMonth());
            if (months > 0) response += `${months} ${pluralize(months, "month", "months")}`;
            const remainingDaysInMonth = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
            if (remainingDaysInMonth > 0) response += `${months > 0 ? ' and ' : ''}${remainingDaysInMonth} ${pluralize(remainingDaysInMonth, "day", "days")}`;
            break;
        case "years":
            const years = Math.floor((timeDiff) / (1000 * 60 * 60 * 24 * 365.25));
            const remainingMonths = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
            const remainingDaysInYear = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
            if (years > 0) response += `${years} ${pluralize(years, "year", "years")}${remainingMonths > 0 && remainingDaysInYear > 0 ? ', ' : (remainingMonths > 0 || remainingDaysInYear > 0 ? ' ' : '')}`;
            if (remainingMonths > 0) response += `${remainingMonths} ${pluralize(remainingMonths, "month", "months")}${remainingDaysInYear > 0 && years > 0 ? ', ' : (remainingDaysInYear > 0 ? ' ' : '')}`;
            if (remainingDaysInYear > 0) response += `${remainingMonths > 0 || years > 0 ? 'and ' : ''}${remainingDaysInYear} ${pluralize(remainingDaysInYear, "day", "days")}`;
            break;
    }

    const formattedDate = selectedDate.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    result.textContent = `${formattedDate} was ${response} ago.`;
    result.classList.add('visible');
    resultElement.textContent = `${datePicker.value} was ${response} ago.`;
    resultElement.classList.remove("error");
    resultElement.classList.add("visible");

}

document.addEventListener("DOMContentLoaded", function () {
    const datePicker = document.getElementById("datePicker");
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    const currentDay = String(currentDate.getDate()).padStart(2, '0');
    datePicker.setAttribute("max", `${currentYear}-${currentMonth}-${currentDay}`);
});

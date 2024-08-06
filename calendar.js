document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById("calendar");

    // Get the current date
    const today = new Date();

    // Month names array
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Generate the calendar HTML
    let calendarHTML = `<h2>${monthNames[today.getMonth()]} ${today.getFullYear()}</h2>`;
    calendarHTML += `<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>`;

    // Get the first day of the month
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    // Get the number of days in the month
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    // Fill in the blank cells before the first day of the month
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
        calendarHTML += `<td></td>`;
    }

    // Fill in the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        const isToday = (i === today.getDate()) ? 'today' : '';
        calendarHTML += `<td class="${isToday}"><button class="calendar-date" data-day="${i}">${i}</button></td>`;
        if ((firstDayOfMonth.getDay() + i) % 7 === 0) {
            calendarHTML += `</tr><tr>`;
        }
    }

    // Fill in the blank cells after the last day of the month
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), daysInMonth);
    for (let i = lastDayOfMonth.getDay() + 1; i < 7; i++) {
        calendarHTML += `<td></td>`;
    }

    calendarHTML += `</tr></table>`;

    // Insert the calendar HTML into the calendar element
    calendar.innerHTML = calendarHTML;

    // Add event listeners to date buttons
    const dateButtons = document.querySelectorAll('.calendar-date');
    dateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedDate = button.dataset.day;
            alert(`You selected ${monthNames[today.getMonth()]} ${selectedDate}`);
            // You can add code here to fetch and display events for the selected date
        });
    });
});

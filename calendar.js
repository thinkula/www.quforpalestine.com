/* Add your calendar styles here */
#calendar {
    width: 80%; /* Adjust the width of the calendar */
    margin: 0 auto; /* Center the calendar horizontally */
}

#calendar table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1.2em; /* Increase font size for better readability */
}

#calendar table th,
#calendar table td {
    padding: 15px; /* Increase cell padding for larger cells */
    text-align: center;
    border: 1px solid #ddd;
}

#calendar table th {
    background-color: #333; /* Black background for table headers */
    color: #fff; /* White text color for table headers */
}

#calendar table td {
    background-color: #fff; /* White background for table cells */
}

#calendar table td:hover {
    background-color: #f9f9f9; /* Light grey background on hover */
}

#calendar table td.today {
    background-color: #4CAF50; /* Green color for today's date */
    color: #fff; /* White text color */
}

#calendar table td.event {
    background-color: #d33; /* Red color for event dates */
    color: #fff; /* White text color */
}

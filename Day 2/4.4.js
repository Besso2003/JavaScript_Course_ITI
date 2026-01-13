function getDayName(dateString) {
    const date = new Date(dateString);

    if (isNaN(date)) {
        throw new Error("Invalid date string");
    }

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}


try {
    console.log(getDayName("2026-01-04")); // Sunday
    console.log(getDayName("2026-01-05")); // Monday
    console.log(getDayName("2026-12-25")); // Friday
    console.log(getDayName("invalid-date")); // Throws error
} catch (error) {
    console.error(error.message);
}

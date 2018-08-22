// write your code below!
function happyHolidays(string) {
   return "Happy Holidays!"
}

function happyHolidaysTo(name) {
  return `Happy Holidays, ${name}!`
}

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
}

happyHolidays()
happyHolidaysTo("Sam")
happyHolidayTo("4th of July", "Sam")
holidayCountdown("Christmas", "15")
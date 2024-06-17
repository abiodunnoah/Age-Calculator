'use strict';

const calYear = document.querySelector('.number-year');
const calMonth = document.querySelector('.number-month');
const calDay = document.querySelector('.number-day');
const calWeek = document.querySelector('.number-week');
const calHour = document.querySelector('.number-hour');
const calMinute = document.querySelector('.number-minute');
const calSecond = document.querySelector('.number-second');
const calMilli = document.querySelector('.number-milli-sec');
const currentDate = document.querySelector('#current-date');
const birthDate = document.querySelector('#birth-date');
const btnCal = document.querySelector('.btn');
const result = document.querySelector('.result');

const setValue = () => {
  if (birthDate.value >= currentDate.value) {
    result.textContent = `Birth date cannot be present date or in the future`;
    result.style.color = 'red';
    btnCal.textContent = 'Please change the both dates';
    btnCal.style.backgroundColor = 'red';
    return;
  } else if (currentDate.value && birthDate.value) {
    btnCal.textContent = 'Age Calculate';
    btnCal.style.backgroundColor = 'rgb(12, 129, 224)';
    result.textContent = '';
  }
};

currentDate.addEventListener('input', setValue);
birthDate.addEventListener('input', setValue);

btnCal.addEventListener('click', function () {
  const newCurrentDate = new Date(currentDate.value);
  const newBirthDate = new Date(birthDate.value);

  if (!currentDate.value || !birthDate.value) return;

  const milliSeconds = newCurrentDate - newBirthDate;
  const seconds = Math.floor(milliSeconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const years = newCurrentDate.getFullYear() - newBirthDate.getFullYear();
  const months =
    newCurrentDate.getMonth() - newBirthDate.getMonth() + years * 12;
  console.log(milliSeconds);

  calYear.textContent = years;
  calMonth.textContent = months;
  calDay.textContent = days;
  calWeek.textContent = weeks;
  calHour.textContent = hours;
  calMinute.textContent = minutes;
  calSecond.textContent = seconds;
  calMilli.textContent = milliSeconds;
});

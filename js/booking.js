const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const todayDate = `${year}-${month}-${day}`;
$('#todayDate').val(todayDate);

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${day}/${month}/${year}`;
  }
  
  function getDayName(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();
  
    return daysOfWeek[dayIndex];
  }
  
  function getNextDayOfWeek(dayOfWeek) {
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    const timeTillNextDay = (dayOfWeek - currentDayOfWeek + 7) % 7;
  
    today.setDate(today.getDate() + timeTillNextDay);
  
    const formattedDate = formatDate(today);
    const dayName = getDayName(today);
  
    return `${formattedDate} (${dayName})`;
  }
  
  const sunday = getNextDayOfWeek(0);
  const tuesday = getNextDayOfWeek(2);
  const thursday = getNextDayOfWeek(4);
  
  console.log(sunday);
  console.log(tuesday);
  console.log(thursday);

  const selectElement = document.getElementById("appointment");

  // Function to add an option to the select element
  function addOption(text, value,styles) {
    const option = document.createElement("option");
    option.text = text;
    option.value = value;
    Object.assign(option.style, styles);
    selectElement.appendChild(option);
  }
addOption(sunday,sunday,{ color: "white", background: "grey" })  
addOption(tuesday,tuesday,{ color: "white", background: "grey" })  
addOption(thursday,thursday,{ color: "white", background: "grey" })  

const scriptURL = 'https://script.google.com/macros/s/AKfycbxrZbtd-oTwcxuckDLEWr2M___g60baOJXFIrB9ALUvw8pC3zn81Z7LKrBjhBYjRsr6/exec'
const form = document.forms['product']

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Form submitted successfully.'
          }).then(() => {
            location.reload();
          });
        } else {
          throw new Error('Form submission failed.');
        }
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: error.message
        });
      });
  });
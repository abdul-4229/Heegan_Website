function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("subject").value,
  };

  const serviceID = "service_cyp8nkz";
  const templateID = "template_zvcqrkf";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("subject").value = "";
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your message sent successfully!'
      }).then(() => {
        location.reload();
      });
    })
    .catch(err => {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to send message.'
      });
    });
}
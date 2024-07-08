function sendMail() {
	var params = {
	  name: document.getElementById("name").value,
	  email: document.getElementById("email").value,
	  subject: document.getElementById("subject").value,
	  message: document.getElementById("message").value,
	};
  
	const serviceID = "service_ms0vvqw";
	const templateID = "template_g668cto";
  
	  emailjs.send(serviceID, templateID, params)
	  .then(res=>{
		  document.getElementById("name").value = "";
		  document.getElementById("email").value = "";
		  document.getElementById("subject").value = "";
		  document.getElementById("message").value = "";
		  console.log(res);
		  alert("Your message sent successfully!!")
  
	  })
	  .catch(err=>console.log(err));
  
  }
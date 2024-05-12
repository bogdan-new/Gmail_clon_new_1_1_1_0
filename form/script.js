function sendEmail(){
	let params = {
		from_name: document.getElementById('fromName').value,
		email: document.getElementById('email').value,
		message: document.getElementById('message').value,

	}
	emailjs.send("service_7jfz6dm","template_ehx4nl4", params)
	.then(function(res){
		alert('Succesfully sent' + res.status);
	})
}
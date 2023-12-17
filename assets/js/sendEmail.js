function sendMail(contactForm) {
    emailjs.send("service_7h79vfr", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectsummary.value
    })
        .then(
            function (repsonse) {
                console.log("Success", repsonse);
            },
            function (error) {
                console.log("Failed", error);
            }
        );
    return false;
}
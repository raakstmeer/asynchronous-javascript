const paymentCheck = true;
const courseMark = 90;

function enroll(prograss) {
    console.log("Your course is enrolling...");

    setTimeout(function(){
        if(paymentCheck) {
            console.log("Enrolled");
        }
    },1000)

    setTimeout(function() {
        if(paymentCheck) {
            prograss();
        }else{
            console.log("Payment Failed!");
        }
    },1500);
}

function prograss(getCertificate) {
    console.log("Course is prograssing...");

    setTimeout(function() {
        if(courseMark >= 80){
            getCertificate();
        }else{
            console.log("You are not elagable for certificate");
        }
    },3000);
}

function getCertificate() {
    console.log("Preparing your certificate");

    setTimeout(function() {
        console.log("Yeah! Congrates you got your certificate.")
    },1200)
}

enroll(function() {
    prograss(getCertificate);
});
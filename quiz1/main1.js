function check(){


	//κάνουμε μεταβλητές τις ερωτήσεις, θα ψάξει όλο το αρχείο  για ένα όνομα  quiz, μετά question 1 και τελικά το value
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;


	//Δημιουργία μετρητή για τις σωστές απαντήσεις
	var correct = 0 ;

	//Έλεγχος αν η κάθε ερώτηση είναι σωστή ,σε περίπτωση που είναι ,ο μετρητής αυξάνεται κατα ένα
	if (question1=="Newton" || question1=="Νεύτων" || question1=="Νεύτωνας" || question1=="Νιούτον") {
		correct++;
	}

	if (question2=="swsto") {
		correct++;
	}

	if (question3=="swsto") {
		correct++;
	}

	if (question4=="lathos") {
		correct++;
	}
//διακρίνουμε επιλογή αν ο χρήστης χρησιμοποιίσει ελληνικό χαρακτήρα η λατινικό και αν αφήσει κενό
	if (question5=="1Ν" || question5=="1 Ν" || question5=="1Ν" || question5=="1 Ν") {
		correct++;
	}

	if (question6=="lathos") {
		correct++;
	}

	if (question7=="swsto") {
		correct++;
	}

	if (question8=="Τριβή" || question8=="Τριβής" || question8=="τριβή" || question8=="τριβής") {
		correct++;
	}



	//Δημιουργία array messages
	var message = ["Excellent", "Good Job", "Oh, you need more practice"]
	//Δημιουργία πίνακα στον οποίο θα  προσθέσω τις φωτογραφίες, img είναι ο φάκελος και ακολουθεί το όνομα του αρχείου
	var pictures = ["img/excellent.png","img/good_job.jpg","img/try_again.png"]
	var range;

	if (correct >= 0 && correct < 3) {
		range=2;
	}

	if (correct >= 3 && correct < 6) {
		range = 1;
	}

	if (correct >= 6 && correct <= 8) {
		range = 0;
	}

	//Θέλουμε να βρούμε το αντικείμενο απο το id
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = message[range];
	//Θέλουμε να βρούμε το αντικείμενο απο το id,αφού βρεί το number_correct είναι άδειο στο >< στο οποίο προσθέτουμε το you got ...
	document.getElementById("number_correct").innerHTML = " You got " + correct +" correct.";
	//προσθέτει src το οποίο θα γίνει  φωτογραφία του πίνακα
	document.getElementById("picture").src = pictures[range];

}

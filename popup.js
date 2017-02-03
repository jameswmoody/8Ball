document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function() {
        window.location.reload();
    });
});

var answer = Math.floor(Math.random()*21)
switch (answer){
	case 1:
		document.querySelector('.message').innerHTML = "IT IS CERTAIN";
		break;
	case 2:
		document.querySelector('.message').innerHTML = "IT IS DECIDEDLY SO";
		break;
	case 3:
		document.querySelector('.message').innerHTML = "WITHOUT A DOUBT";
		break;
	case 4:
		document.querySelector('.message').innerHTML = "YES, DEFINITELY";
		break;
	case 5:
		document.querySelector('.message').innerHTML = "YOU MAY RELY ON IT";
		break;
	case 6:
		document.querySelector('.message').innerHTML = "AS I SEE IT, YES";
		break;
	case 7:
		document.querySelector('.message').innerHTML = "MOST LIKELY";
		break;
	case 8:
		document.querySelector('.message').innerHTML = "OUTLOOK GOOD";
		break;
	case 9:
		document.querySelector('.message').innerHTML = "YES";
		break;
	case 10:
		document.querySelector('.message').innerHTML = "SIGNS POINT TO YES";
		break;
	case 11:
		document.querySelector('.message').innerHTML = "REPLY HAZY TRY AGAIN";
		break;
	case 12:
		document.querySelector('.message').innerHTML = "ASK AGAIN LATER";
		break;
	case 13:
		document.querySelector('.message').innerHTML = "BETTER NOT TELL \n YOU NOW";
		break;
	case 14:
		document.querySelector('.message').innerHTML = "CANNOT PREDICT NOW";
		break;
	case 15:
		document.querySelector('.message').innerHTML = "CONCENTRATE AND ASK \n AGAIN";
		break;
	case 16:
		document.querySelector('.message').innerHTML = "DON\'T COUNT ON IT";
		break;
	case 17:
		document.querySelector('.message').innerHTML = "MY REPLY IS NO";
		break;
	case 18:
		document.querySelector('.message').innerHTML = "MY SOURCES SAY NO";
		break;
	case 19:
		document.querySelector('.message').innerHTML = "OUTLOOK NOT SO GOOD";
		break;
	case 20:
		document.querySelector('.message').innerHTML = "VERY DOUBTFUL";
		break;
	default:
		document.querySelector('.message').innerHTML = "TRY AGAIN";
}

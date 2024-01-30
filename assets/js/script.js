const start_btn = document.querySelector('.start-btn');
const exit_btn = document.querySelector('.quit-btn');
const continue_btn = document.querySelector('.continue');
const retry_btn = document.querySelector('.restart-btn');

const info_box = document.querySelector('.info-box');
const quiz_box = document.querySelector('.quiz-box');
const result_box = document.querySelector('.result-box');
const question = document.querySelector('#question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const time_line = document.querySelector('header .time-line');
const time_text = document.querySelector('.timer .time-left-txt');
const time_count = document.querySelector('.timer .timer-sec');
// these two variables must stay var because they are used in the global scope
var userScore = 0;
var questionsCount = 0;

let timeValue = 15;

info_box.setAttribute('style', 'display:none');
quiz_box.setAttribute('style', 'display:none');
result_box.setAttribute('style', 'display:none');
start_btn.onclick = () => {
	start_btn.setAttribute('style', 'display:none');
	info_box.setAttribute('style', 'display:block');
	showInfoBox();
};

function showInfoBox() {
	continue_btn.addEventListener('click', () => {
		showQuestionOne();
		answerHandelers(questionsCount);
	});
}

function answerHandelers(questionsCount) {
	option1.addEventListener('click', (event) => {
		let isCorrect = isAnswerCorrect(event);
		if (isCorrect) {
			userScore += 1;
			questionsCount += 1;
			showNextQuestion(questionsCount);
		}
	});
	option2.addEventListener('click', (event) => {
		let isCorrect = isAnswerCorrect(event);
		if (isCorrect) {
			userScore += 1;
			questionsCount += 1;
			showNextQuestion(questionsCount);
		}
	});
	option3.addEventListener('click', (event) => {
		let isCorrect = isAnswerCorrect(event);
		if (isCorrect) {
			userScore += 1;
			questionsCount += 1;
			showNextQuestion(questionsCount);
		}
	});
	option4.addEventListener('click', (event) => {
		let isCorrect = isAnswerCorrect(event);
		if (isCorrect) {
			userScore += 1;
			questionsCount += 1;
			showNextQuestion(questionsCount);
		}
	});
}

function showNextQuestion(questionsCount) {
	if (questionsCount === 1) {
		showQuestionTwo();
	} else if (questionsCount === 2) {
		showQuestionThree();
	} else if (questionsCount === 3) {
		showQuestionFour();
	} else if (questionsCount === 4) {
		showQuestionFive();
	} else {
		showResultBox();
	}
}

function showQuestionOne() {
	info_box.setAttribute('style', 'display:none');
	quiz_box.setAttribute('style', 'display:block');
	question.textContent = questions[0].question;
	option1.textContent = questions[0].options[0];
	option2.textContent = questions[0].options[1];
	option3.textContent = questions[0].options[2];
	option4.textContent = questions[0].options[3];
	answerHandelers(questionsCount);
}
function showQuestionTwo() {
	question.textContent = questions[1].question;
	option1.textContent = questions[1].options[0];
	option2.textContent = questions[1].options[1];
	option3.textContent = questions[1].options[2];
	option4.textContent = questions[1].options[3];
	answerHandelers();
}
function showQuestionThree() {
	question.textContent = questions[2].question;
	option1.textContent = questions[2].options[0];
	option2.textContent = questions[2].options[1];
	option3.textContent = questions[2].options[2];
	option4.textContent = questions[2].options[3];
	answerHandelers();
}
function showQuestionFour() {
	question.textContent = questions[3].question;
	option1.textContent = questions[3].options[0];
	option2.textContent = questions[3].options[1];
	option3.textContent = questions[3].options[2];
	option4.textContent = questions[3].options[3];
	answerHandelers();
}
function showQuestionFive() {
	question.textContent = questions[4].question;
	option1.textContent = questions[4].options[0];
	option2.textContent = questions[4].options[1];
	option3.textContent = questions[4].options[2];
	option4.textContent = questions[4].options[3];
	answerHandelers();
}

function isAnswerCorrect(event) {
	if (questions[0].options[1] === event.target.textContent) {
		return true;
	} else if (questions[1].options[3] === event.target.textContent) {
		return true;
	} else if (questions[2].options[0] === event.target.textContent) {
		return true;
	} else if (questions[3].options[3] === event.target.textContent) {
		return true;
	} else if (questions[4].options[0] === event.target.textContent) {
		return true;
	} else {
		return false;
	}
}
function showResultBox() {
	quiz_box.setAttribute('style', 'display:none');
	result_box.setAttribute('style', 'display:block');
}
function startTimer() {
	console.log('timer');
}

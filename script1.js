const quizForm = document.getElementById('quizForm');
const resultDiv = document.getElementById('result');

// Array of questions

const questions = [
    'I enjoy working with numbers and analyzing data.',
    'I am a creative person and enjoy expressing myself through art or writing.',
    'I am good at solving problems and finding solutions.',
    'I enjoy working with people and helping them solve their issues.',
];


// Function to generate HTML for a question
function createQuestionHTML(question, index) {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question');

    const label = document.createElement('label');
    label.textContent = question;
    label.setAttribute('for', `answer${index}`);
    questionContainer.appendChild(label);

    const input = document.createElement('input');
    input.type = 'number';
    input.min = '1';
    input.max = '5';
    input.required = true;
    input.id = `answer${index}`;
    questionContainer.appendChild(input);

    return questionContainer;
}

// Display questions
questions.forEach((question, index) => {
    const questionElement = createQuestionHTML(question, index);
    quizForm.insertBefore(questionElement, quizForm.lastChild);
});

// Event listener for form submission
quizForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const answers = [];

    // Collect answers
    questions.forEach((submit, index) => {
        const answer = parseInt(document.getElementById(`answer${index}`).value) || 0;
        answers.push(answer);
    });

    // Calculate total score
    const totalScore = answers.reduce((acc, curr) => acc + curr, 0);

    // Determine career based on total score
    let career = '';
    if (totalScore <= 8) {
        career = 'Accountant';
    } else if (totalScore <= 12) {
        career = 'Artist';
    } else if (totalScore <= 16) {
        career = 'Engineer';
    } else {
        career = 'Counselor';
    }

    // Display result
    resultDiv.innerHTML = `<p>Your suggested career is: <strong>${career}</strong></p>`;
});

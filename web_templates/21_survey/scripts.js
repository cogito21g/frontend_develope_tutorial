document.addEventListener("DOMContentLoaded", function() {
    // Quiz Form
    const quizForm = document.getElementById('quizForm');
    const quizResult = document.getElementById('quizResult');

    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let score = 0;
        const answers = {
            q1: 'Paris',
            q2: 'Mars'
        };
        const formData = new FormData(quizForm);
        for (let [key, value] of formData.entries()) {
            if (value === answers[key]) {
                score++;
            }
        }
        quizResult.innerHTML = `You scored ${score} out of 2.`;
    });

    // Survey Form
    const surveyForm = document.getElementById('surveyForm');
    const surveyResult = document.getElementById('surveyResult');

    surveyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(surveyForm);
        let satisfaction = formData.get('satisfaction');
        let suggestions = formData.get('suggestions');

        surveyResult.innerHTML = `<p>Thank you for your feedback!</p>
                                  <p>Satisfaction Level: ${satisfaction}</p>
                                  <p>Suggestions: ${suggestions}</p>`;
    });
});

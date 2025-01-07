document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        { text: "Soch le", image: "https://media.tenor.com/K0Op-0SpsvkAAAAj/dudu-cute.gif" },
        { text: "Regret karegi", image: "https://media.tenor.com/eL8GIMHWbFAAAAAj/bubu-dudu.gif" },
        { text: "Kitna rude he yaar tu", image: "https://i.pinimg.com/originals/38/7a/db/387adb2cfa06323f299aec4ab5e399c7.gif" },
        { text: "Nahi milega mujsa kohi", image: "https://media.tenor.com/tsFBHGxponYAAAAj/bubu-dudu.gif" }
    ];
    
    let currentQuestion = 0;
    const questionElement = document.getElementById('question');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const bearImage = document.getElementById('bearImage');
    const questionContainer = document.getElementById('questionContainer');
    const dateContainer = document.getElementById('dateContainer');
    const timeContainer = document.getElementById('timeContainer');
    const messageContainer = document.getElementById('messageContainer');
    const finalMessage = document.getElementById('finalMessage');

    // Handle No button hover movement
    noBtn.addEventListener('mouseover', function() {
        if (currentQuestion === questions.length) {
            noBtn.style.position = 'absolute';
            noBtn.style.left = `${Math.random() * 80}%`;
            noBtn.style.top = `${Math.random() * 80}%`;
        }
    });

    // Handle No button click
    noBtn.addEventListener('click', function() {
        if (currentQuestion < questions.length) {
            questionElement.textContent = questions[currentQuestion].text;
            bearImage.src = questions[currentQuestion].image; // Change bear image for each question
            currentQuestion++;
        }
    });

    // Handle Yes button click
    yesBtn.addEventListener('click', function() {
        questionContainer.style.display = 'none';
        dateContainer.style.display = 'block';
    });

    // Handle Day selection
    document.querySelectorAll('.day-btn').forEach(button => {
        button.addEventListener('click', function() {
            const selectedDay = this.getAttribute('data-day');
            dateContainer.style.display = 'none';
            timeContainer.style.display = 'block';

            // Handle Time selection
            document.querySelectorAll('.time-btn').forEach(timeButton => {
                timeButton.addEventListener('click', function() {
                    const selectedTime = this.getAttribute('data-time');
                    timeContainer.style.display = 'none';
                    messageContainer.style.display = 'block';
                    finalMessage.textContent = `${selectedDay} ${selectedTime}`;
                });
            });
        });
    });
});

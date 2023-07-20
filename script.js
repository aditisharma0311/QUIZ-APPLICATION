// Quiz questions based on different topics
const quizData = {
    entertainment: [
        {
            question: "Which Indian cricketer has the nickname 'Captain Cool'?",
            choices: ["Virat Kohli", "Sachin Tendulkar", "Rahul Dravid", "MS Dhoni"],
            correctAnswer: 3
        },
        // Add more entertainment questions here...
        {
            question: "Which Bollywood actor is often referred to as the 'King Khan'?",
            choices: ["Aamir Khan", "Salman Khan", "Shah Rukh Khan", "Akshay Kumar"],
            correctAnswer: 2
        },
        {
            question: "Who won the 2020 Academy Award for Best Actor for his role in 'Joker'?",
            choices: ["Joaquin Phoenix", "Brad Pitt", "Leonardo DiCaprio", "Tom Hanks"],
            correctAnswer: 0
        },
        {
            question: "What is the highest-grossing film of all time (as of 2021)?",
            choices: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"],
            correctAnswer: 1
        },
        {
            question: "Which band is known for hits like 'Bohemian Rhapsody' and 'We Will Rock You'?",
            choices: ["The Rolling Stones", "The Beatles", "Queen", "Led Zeppelin"],
            correctAnswer: 2
        },
        {
            question: "Who played the character of 'Forrest Gump' in the 1994 movie of the same name?",
            choices: ["Tom Cruise", "Johnny Depp", "Tom Hanks", "Matt Damon"],
            correctAnswer: 2
        },
        {
            question: "Which Indian actress made her Hollywood debut in the movie 'xXx: Return of Xander Cage'?",
            choices: ["Priyanka Chopra", "Deepika Padukone", "Aishwarya Rai", "Kangana Ranaut"],
            correctAnswer: 1
        },
        {
            question: "Which animated film features a young lion prince named Simba?",
            choices: ["Frozen", "Aladdin", "The Lion King", "Toy Story"],
            correctAnswer: 2
        },
        {
            question: "Who won the Best Director Oscar for the movie 'La La Land'?",
            choices: ["Steven Spielberg", "Quentin Tarantino", "Damien Chazelle", "Martin Scorsese"],
            correctAnswer: 2
        },
        {
            question: "In the TV series 'Friends', what is the name of Ross and Monica's pet dog?",
            choices: ["Fluffy", "Fido", "Chandler", "Chi-Chi"],
            correctAnswer: 3
        },
        {
            question: "Which famous wizard is the main protagonist in the 'Harry Potter' book series?",
            choices: ["Gandalf", "Dumbledore", "Voldemort", "Harry Potter"],
            correctAnswer: 3
        },
        {
            question: "Who is the lead vocalist of the rock band 'Coldplay'?",
            choices: ["Chris Martin", "Bono", "Thom Yorke", "Brandon Flowers"],
            correctAnswer: 0
        },
        {
            question: "Which character is played by Robert Downey Jr. in the Marvel Cinematic Universe?",
            choices: ["Captain America", "Thor", "Iron Man", "Hulk"],
            correctAnswer: 2
        },
        {
            question: "Which Netflix series is about a young woman named Piper Chapman and her experiences in prison?",
            choices: ["Breaking Bad", "Stranger Things", "Orange Is the New Black", "House of Cards"],
            correctAnswer: 2
        },
        {
            question: "Who played the role of Jack Dawson in the movie 'Titanic'?",
            choices: ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio", "Tom Cruise"],
            correctAnswer: 2
        },
        {
            question: "Which film won the Academy Award for Best Picture in 2019?",
            choices: ["Parasite", "Joker", "1917", "Once Upon a Time in Hollywood"],
            correctAnswer: 0
        },
        {
            question: "Who is the creator of the 'Star Wars' film franchise?",
            choices: ["George Lucas", "Steven Spielberg", "James Cameron", "Peter Jackson"],
            correctAnswer: 0
        },
        {
            question: "Which Disney princess is known for having a magic golden hair in the movie 'Tangled'?",
            choices: ["Cinderella", "Belle", "Rapunzel", "Ariel"],
            correctAnswer: 2
        },
        {
            question: "Who is the director of the 'The Dark Knight' trilogy?",
            choices: ["Christopher Nolan", "Tim Burton", "Zack Snyder", "J.J. Abrams"],
            correctAnswer: 0
        },
        {
            question: "In the 'Star Wars' series, what is the real name of the character known as Darth Vader?",
            choices: ["Anakin Skywalker", "Obi-Wan Kenobi", "Luke Skywalker", "Han Solo"],
            correctAnswer: 0
        },
        {
            question: "Which famous singer is known as the 'Queen of Pop'?",
            choices: ["Beyoncé", "Madonna", "Adele", "Lady Gaga"],
            correctAnswer: 1
        },
    ],
    movies: [
        {
            question: "Who played the lead role in the movie 'Dilwale Dulhania Le Jayenge'?",
            choices: ["Shah Rukh Khan", "Salman Khan", "Aamir Khan", "Akshay Kumar"],
            correctAnswer: 0
        },
        // Add more movie questions here...
        {
            question: "Which film won the Academy Award for Best Picture in 2020?",
            choices: ["The Irishman", "Joker", "Parasite", "1917"],
            correctAnswer: 2
        },
        {
            question: "Who directed the movie 'Jurassic Park'?",
            choices: ["Steven Spielberg", "James Cameron", "Tim Burton", "Ridley Scott"],
            correctAnswer: 0
        },
        {
            question: "In the 'Lord of the Rings' film trilogy, what is the name of Frodo's sword?",
            choices: ["Andúril", "Glamdring", "Sting", "Narsil"],
            correctAnswer: 2
        },
        {
            question: "Which actor played the role of 'John Wick' in the action film series?",
            choices: ["Keanu Reeves", "Jason Statham", "Brad Pitt", "Vin Diesel"],
            correctAnswer: 0
        },
        {
            question: "Who won the Academy Award for Best Director for the movie 'The Shape of Water'?",
            choices: ["Christopher Nolan", "Guillermo del Toro", "Denis Villeneuve", "Martin McDonagh"],
            correctAnswer: 1
        },
        {
            question: "Which movie features a clown named Pennywise, who terrorizes children in the town of Derry?",
            choices: ["The Conjuring", "Annabelle", "Insidious", "It"],
            correctAnswer: 3
        },
        {
            question: "Which actress portrayed the character of Katniss Everdeen in 'The Hunger Games' film series?",
            choices: ["Emma Watson", "Jennifer Aniston", "Jennifer Lawrence", "Emma Stone"],
            correctAnswer: 2
        },
        {
            question: "In the movie 'The Shawshank Redemption', what is the name of the main character who is wrongly convicted of murder?",
            choices: ["Andy Dufresne", "Frank Abagnale", "Michael Oher", "John Nash"],
            correctAnswer: 0
        },
        {
            question: "Which famous director is known for films like 'Pulp Fiction', 'Kill Bill', and 'Django Unchained'?",
            choices: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg", "David Fincher"],
            correctAnswer: 1
        },
    
    ],
    sports: [
        {
            question: "Which sport is known as the 'Gentleman's Game'?",
            choices: ["Football", "Cricket", "Tennis", "Basketball"],
            correctAnswer: 1
        },
        // Add more sports questions here...
        {
            question: "Who is the current President of the United States?",
            choices: ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"],
            correctAnswer: 0
        },
        {
            question: "Who is the Prime Minister of the United Kingdom as of 2021?",
            choices: ["Theresa May", "Boris Johnson", "David Cameron", "Tony Blair"],
            correctAnswer: 1
        },
        {
            question: "What is the capital city of Russia?",
            choices: ["St. Petersburg", "Moscow", "Kiev", "Warsaw"],
            correctAnswer: 1
        },
        {
            question: "Which country is known as the 'Land of the Rising Sun'?",
            choices: ["China", "Japan", "South Korea", "Thailand"],
            correctAnswer: 1
        },
        {
            question: "In which city is the headquarters of the European Union located?",
            choices: ["Berlin", "Brussels", "Paris", "Amsterdam"],
            correctAnswer: 1
        },
        {
            question: "Who is the current Chancellor of Germany?",
            choices: ["Angela Merkel", "Emmanuel Macron", "Theresa May", "Shinzo Abe"],
            correctAnswer: 0
        },
        {
            question: "Which country was the first to give women the right to vote?",
            choices: ["United States", "United Kingdom", "New Zealand", "France"],
            correctAnswer: 2
        },
        {
            question: "Which U.S. president signed the Civil Rights Act of 1964 into law?",
            choices: ["John F. Kennedy", "Lyndon B. Johnson", "Richard Nixon", "Dwight D. Eisenhower"],
            correctAnswer: 1
        },
    ],
    general_knowledge: [
        {
            question: "What is the capital of India?",
            choices: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
            correctAnswer: 1
        },
        // Add more general knowledge questions here...
    ],
    politics: [
        {
            question: "Who is the current Prime Minister of India?",
            choices: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Manmohan Singh"],
            correctAnswer: 0
        },
        // Add more politics questions here...
    ]
};

let currentTopic = null;
let currentQuestionIndex = 0;
let score = 0;

// Helper function to shuffle an array
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Function to start the quiz with a selected topic
function startQuiz(topic) {
    currentTopic = topic;
    const topicSelection = document.getElementById("topicSelection");
    const quiz = document.getElementById("quiz");
    topicSelection.style.display = "none";
    quiz.style.display = "block";
    startNextQuestion();
}

// Function to load and display the next question
function startNextQuestion() {
    const choices = document.querySelectorAll(".choice");
    choices.forEach(choice => {
        choice.classList.remove("selected");
        choice.style.animation = "";
    });

    if (currentQuestionIndex < quizData[currentTopic].length) {
        const questionElement = document.getElementById("question");
        const choicesElement = document.getElementById("choices");
        const currentQuestion = quizData[currentTopic][currentQuestionIndex];

        questionElement.textContent = currentQuestion.question;
        choicesElement.innerHTML = "";

        currentQuestion.choices.forEach((choice, index) => {
            const choiceElement = document.createElement("label");
            choiceElement.className = "choice";
            choiceElement.innerHTML = `
                <input type="radio" class="radio-input" name="choice" value="${index}">
                <span>${choice}</span>
            `;
            choicesElement.appendChild(choiceElement);
        });
    } else {
        displayResult();
    }
}

// Function to handle choice selection
function selectChoice(index) {
    const choices = document.querySelectorAll(".choice");
    choices.forEach(choice => {
        choice.classList.remove("selected");
    });
    choices[index].classList.add("selected");
}

// Function to check the selected answer and update the score
function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentTopic][currentQuestionIndex];
    const choices = document.querySelectorAll(".choice");

    choices.forEach((choice, index) => {
        if (index === currentQuestion.correctAnswer) {
            choice.style.animation = "correctAnswer 1s";
        }  else {
            choice.style.animation = "wrongAnswer 1s";
        }
    });

    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        const selectedAnswer = parseInt(selectedChoice.value);
        if (selectedAnswer === currentQuestion.correctAnswer) {
            score++;
        }
    }

    currentQuestionIndex++;
    setTimeout(startNextQuestion, 1000);
}

// Function to display the quiz result
function displayResult() {
    const quiz = document.getElementById("quiz");
    const result = document.getElementById("result");
    const totalQuestions = document.getElementById("totalQuestions");
    const correctAnswers = document.getElementById("correctAnswers");
    const wrongAnswers = document.getElementById("wrongAnswers");

    quiz.style.display = "none";
    result.style.display = "block";

    totalQuestions.textContent = quizData[currentTopic].length;
    correctAnswers.textContent = score;
    wrongAnswers.textContent = quizData[currentTopic].length - score;
}

// Add event listeners for topic selection buttons
document.getElementById("topicButtons").addEventListener("click", (event) => {
    const topic = event.target.dataset.topic;
    if (topic) {
        startQuiz(topic);
    }
});

// Add event listener for the submit button
document.getElementById("submitBtn").addEventListener("click", () => {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        checkAnswer(parseInt(selectedChoice.value));
    }
});

// Call the function to display topic selection at the beginning
const topicSelection = document.getElementById("topicSelection");
const topicButtons = document.getElementById("topicButtons");

for (const topic in quizData) {
    if (quizData.hasOwnProperty(topic)) {
        const button = document.createElement("button");
        button.textContent = topic.replace(/_/g, " ");
        button.dataset.topic = topic;
        topicButtons.appendChild(button);
    }
}

topicSelection.style.display = "block";


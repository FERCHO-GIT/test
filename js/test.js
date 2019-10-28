window.onload = () => {
    let btnOK = document.getElementById("btn-ok");
    btnOK.addEventListener("click", () => {
        var ch = document.getElementById("challenge");

        while (ch.lastChild) {
            ch.removeChild(ch.lastChild);
        }

        var number = 0, question = 0
            userCorrectAnswers = 0, userIncorrectAnswers = 0,
            userMissedAnswers = 0, timeLimit = 25;

        var questions = [
            { num: "1", question: "What is JavaScript?" },
            { num: "2", question: "What is NULL type?" },
            { num: "3", question: "What is the DOM?" },
            { num: "4", question: "false == false?" },
            { num: "5", question: "What is CLASS type" },
            { num: "6", question: "\"hola\".charAt(-2)?" },
            { num: "7", question: "Top lavel object?" },
            { num: "8", question: "\"123456\".substring(2,3)" },
            { num: "9", question: "SWITCH is used for?" },
            { num: "10", question: "DO-WHILE is used for?" },
            { num: "11", question: "Can you put a FUNCTION into an ARRAY?" },
            { num: "12", question: "-7 > -4 && 5 >= 3" },
            { num: "13", question: "What is a variable?" },
            { num: "14", question: "[4, 5, 7].slice(2)" },
            { num: "15", question: "Math.sqrt(289)" }
        ];

        var answers = [
            ["A toy", "A programming languaje", "A prototype languaje", "An OOP languaje"],
            ["number", "string", "float", "object"],
            ["Document object model", "Doctype object model", "Doctype optimization model", "Programming language"],
            ["true", "false", "\"false\"", "\"true\""],
            ["null", "function", "undefined", "object"],
            ["la", "ho", "\"\"", "ol"],
            ["document", "console", "window", "Object"],
            ["2", "3", "4", "1"],
            ["Repetitive tasks", "Test a function", "Single condition test", "Multiple condition test"],
            ["Call a function", "Repetitive task lunch at least once", "Repetitive task only", "Deletes an object"],
            ["No", "Yes", "Not sure", "I don't know"],
            ["false", "true", "null", "undefined"],
            ["Placeholder", "Data type", "Container", "Object"],
            ["\"\"", "4", "5", "7"],
            ["18", "17", "16", "15"]
        ];

        var correct = [
            "2", "3", "0", "0", "1", "2", "2", "1", "3", "1", "1", "0", "2", "3", "1"
        ];

        var selected = [];

        var spanTime = document.createElement("span");
        spanTime.appendChild(document.createTextNode(timeLimit));
        spanTime.id = "time-limit";

        var spanNumber = document.createElement("span");
        spanNumber.appendChild(document.createTextNode(questions[number].num));
        spanNumber.id = "number-question";

        var h1Question = document.createElement("h1");
        h1Question.appendChild(document.createTextNode("Question "));
        h1Question.appendChild(spanNumber);

        var paraQuestion = document.createElement("p");
        paraQuestion.appendChild(document.createTextNode(questions[number].question));
        paraQuestion.id = "display-question";

        var ulAnswers = document.createElement("ul");
        ulAnswers.setAttribute("class", "list");
        ulAnswers.id = "answers";

        for (let i = 0; i < answers[question].length; i++) {
            let radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("class", "btn-radio");
            radio.name = "option";
            radio.value = i;

            let label = document.createElement("label");

            switch (i) {
                case 0: radio.id = "one"; label.setAttribute("for", "one"); break;
                case 1: radio.id = "two"; label.setAttribute("for", "two"); break;
                case 2: radio.id = "three"; label.setAttribute("for", "three"); break;
                case 3: radio.id = "four"; label.setAttribute("for", "four"); break;
            }

            let star = document.createElement("span");
            star.setAttribute("class", "icofont-star");

            label.appendChild(star);
            label.appendChild(document.createTextNode(answers[question][i]));

            let li = document.createElement("li");
            li.appendChild(radio);
            li.appendChild(label);
            ulAnswers.appendChild(li);
        }

        var btnNext = document.createElement("button");
        btnNext.appendChild(document.createTextNode("Next"));
        btnNext.id = "btn-next";

        var divBtnNext = document.createElement("div");
        divBtnNext.setAttribute("class", "btn-wrapper");
        divBtnNext.appendChild(btnNext);

        ch.appendChild(spanTime);
        ch.appendChild(h1Question);
        ch.appendChild(paraQuestion);
        ch.appendChild(ulAnswers);
        ch.appendChild(divBtnNext);

        var timePerQuestion = setInterval(() => {
            timeLimit--;
            let getTime = document.getElementById("time-limit");
            getTime.innerHTML = timeLimit;

            if (timeLimit == 5) {
                getTime.style.backgroundColor = "#edb5bf";
            }

            if (timeLimit == 25) {
                getTime.style.backgroundColor = "#99ced3";
                update();
                (number == (questions.length - 1)) ? finishing() : nextQuestion();
            }

            if (timeLimit == 0) {
                timeLimit = 26;
            }
        }, 1000);
        
        var next = document.getElementById("btn-next");
        next.addEventListener("click", () => {
            timeLimit = 26;
        }, false);

        function nextQuestion() {
            number++;
            question++;

            let sNumber = document.getElementById("number-question");
            sNumber.innerHTML = questions[number].num;

            let pQuestion = document.getElementById("display-question");
            pQuestion.innerHTML = questions[number].question;

            let displayAnswer = document.getElementById("answers");

            while (displayAnswer.lastChild) {
                displayAnswer.removeChild(displayAnswer.lastChild);
            }

            for (let i = 0; i < answers[question].length; i++) {    
                let radio = document.createElement("input");
                radio.setAttribute("type", "radio");
                radio.setAttribute("class", "btn-radio");
                radio.name = "option";
                radio.value = i;

                let label = document.createElement("label");

                switch (i) {
                    case 0: radio.id = "one"; label.setAttribute("for", "one"); break;
                    case 1: radio.id = "two"; label.setAttribute("for", "two"); break;
                    case 2: radio.id = "three"; label.setAttribute("for", "three"); break;
                    case 3: radio.id = "four"; label.setAttribute("for", "four"); break;
                }

                let star = document.createElement("span");
                star.setAttribute("class", "icofont-star");

                label.appendChild(star);
                label.appendChild(document.createTextNode(answers[question][i]));

                let li = document.createElement("li");
                li.appendChild(radio);
                li.appendChild(label);
                displayAnswer.appendChild(li);
            }

            if (number == (questions.length - 1)) {
                next.innerHTML = "Finish";
            }
        }

        function finishing() {
            clearInterval(timePerQuestion);
            let ch = document.getElementById("challenge");

            while (ch.lastChild) {
                ch.removeChild(ch.lastChild);
            }

            for (let i = 0; i < selected.length; i++) {
                if (selected[i] == correct[i]) {
                    userCorrectAnswers++;
                } else {
                    if (selected[i] != "") {
                        userIncorrectAnswers++;
                    }
                }
            }

            let h1Complete = document.createElement("h1");
            h1Complete.appendChild(document.createTextNode("Completed!"));

            let paraComplete = document.createElement("p");
            paraComplete.appendChild(document.createTextNode("All right, here's the score"));

            let result = (parseInt(userCorrectAnswers) / questions.length) * 100;
            let tblResult = '<table class="tbl-results">';
                tblResult += '<tbody>';
                tblResult += '<tr>';
                tblResult += '<td><span class="icofont-check icofont-3x"></span></td>';
                tblResult += '<td><span class="icofont-close icofont-3x"></span></td>';
                tblResult += '<td><span class="icofont-exclamation icofont-3x"></span></td>';
                tblResult += '<td><span class="icofont-speed-meter icofont-3x"></span></td>';
                tblResult += '</tr>';
                tblResult += '<tr>';
                tblResult += '<td>Correct</td>';
                tblResult += '<td>Incorrect</td>';
                tblResult += '<td>Missing</td>';
                tblResult += '<td>Avarage</td>';
                tblResult += '</tr>';
                tblResult += '<tr>';
                tblResult += '<td>' + userCorrectAnswers + '</td>';
                tblResult += '<td>' + userIncorrectAnswers + '</td>';
                tblResult += '<td>' + userMissedAnswers + '</td>';
                tblResult += '<td>' + result.toFixed(2) + '%</td>';
                tblResult += '</tr>';
                tblResult += '</tbody>';
                tblResult += '</table>';

            let divComplete = document.createElement("div");
            divComplete.setAttribute("class", "display-completed");
            divComplete.id = "completed";

            ch.appendChild(h1Complete);
            ch.appendChild(paraComplete);
            ch.appendChild(divComplete);

            let completed = document.getElementById("completed");
            completed.innerHTML = tblResult;
        }

        function update() {
            let checkAnswer = document.getElementsByTagName("input"),
                missed = [];

            for (let i = 0; i < checkAnswer.length; i++) {
                if (checkAnswer[i].checked) {
                    selected.push(checkAnswer[i].value);
                } else {
                    missed.push(true);
                }
            }

            if (missed.length == 4) {
                userMissedAnswers++;
                selected.push("");
            }
        }
    }, false);
}
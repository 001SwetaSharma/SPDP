/*
Open for extension but close for modification
exisiting code/classes should not be changed
new functionalities/modules should be added by resuing the existing code
*/

//without OCP
function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description);
        switch(question.type) {
            case 'boolean':
                console.log(true);
                console.log(false);
                break;

            case 'multipleChoice':
                question.options.forEach((option, index) => {
                    console.log(`${index+1}.${option}`);
                });
                break;

            case 'text':
                console.log('Answer :: ----------------------------------------------');
                break;
        }
    });
}

const questions = [
    {
        type:'boolean',
        description: 'This video is useful'
    },
    {
        type:'multipleChoice',
        description: 'what is your favourite language',
        options: ['CSS', 'HTML', 'JS', 'Python']
    },
    {
        type:'text',
        description: 'Describe your favourite JS feature'
    }
]

printQuiz(questions);

/*
if more question object is added then we will have to add new code to the switch statement whcih means we will have to modify the
code
*/


//With OCP
class BooleanQuestions {
    constructor(description) {
        this.description = description;
    }
    printQuestionChoices() {
        console.log('1: True');
        console.log('2: False');
    }
}


class MultipleChoiceQuestions {
    constructor(description,options) {
        this.description = description;
        this.options = options;
    }
    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index+1}.${option}`);
        });
    }
}

class TextQuestions {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices(){
        console.log('Answer :: --------------');
    }
}

class RangeQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log('Min:: ----------------------');
        console.log('Max:: ----------------------');
    }
}

function printQuizq(questions1) {
    questions1.forEach(question => {
        console.log(question);
        console.log(question.description);
        question.printQuestionChoices();
        console.log(' ');
    });
}

const questions1 = [
    new BooleanQuestions('This video is useful'),
    new MultipleChoiceQuestions('what is your favourite language', ['CSS', 'HTML', 'JS', 'Python']),
    new TextQuestions('Describe your favourite JS feature'),
    new RangeQuestion('What is the speed limit in your city')
]

printQuizq(questions1);
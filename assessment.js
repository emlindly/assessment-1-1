/** 
 * Assessment 1.1 
 * 
 * Please read each question carefully and answer with the according type specified. This assessment is WITHOUT
 * notes or Google. You will be screensharing while attempting this assessment, so please make sure to be sharing your
 * entire desktop when attempting it. 
 * 
 * Best of luck, and ask any of the professors for help if needed!
 * 
 * Time allotment: 1 hour
 * 
**/

/*****************************************/

/** 
 * QUESTION #1 -
 * What is the difference between a method and a function?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"A method is a pre-determined function within an already written system. A function can be named, written and executed however you want in your own code."


/**
 * QUESTION #2 -
 * What is wrong with the following for loop?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

let timesToLoop = 15;
for (let i = 0; i = timesToLoop; i++) {
    console.log('I am looping!');
}

"Revised Answer: The i=timesToLoop is incorrect. If you want your "for loop" to run 15 times it would need to say i <= 14."


/**
 * QUESTION #3 -
 * Which type of conditional do you use when you want to assign a value to a variable based on a two-path conditional?
 * (Two path conditional means that there's only true or false, and no additional routes the conditional can take.)
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */


"Revised Answer: You would use a ternary."

/**
 * QUESTION #4 -
 * What are some of the main reasons to use a function? 
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"Functions allow us to execute blocks of codes under specific conditions. They allow us to sequentially break down large projects or huge amounts of code, into manageable pieces. The more simplified a function is in that, it has one specific purpose, the more functional of a developer you are. When you inevitably need to go back and modify your code, if your code is broken down semantically and into sequential steps, you know exactly which function/s you need to amend. It is also essential to have readable and digestible code when you are working within a team of developers on the same project."

/**
 * QUESTION #5 -
 * Which of the following answers allows JavaScript to programmatically generate a new HTML element?
 * 
 * A) dom.createElement('div');
 * B) document.element('div');
 * C) document.createElement('div');
 * D) document.cloneElement('div');
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"C)"

/**
 * QUESTION #6 -
 * What does the word DOM mean in JS?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"DOM stands for Document Object Model and it is an object model representation of HTML elements. It is a way to access, create and manipulate HTML elements within JS."

/**
 * QUESTION #7 -
 * What is the output of the function?
 * 
 * Answer Type: String (Add Answer Between Quotes, Whitespace Ignored)
 */

function testQuestionSeven() {
    let statement = "Assessments are fun, right?!";

    if (statement === true) {
        console.log('Yes!');
    } else {
        console.log('No!');
    }
}

"Revised Answer: You never called the function. But if you did, the output would be 'No!'"

/**
 * QUESTION #8 -
 * What do the following things have in common? 1.14, 10, 10009, 10.19919292
 * 
 * Answer Type: String (Add Answer Between Quotes)
 * Hint: Think of their general TYPE....
 */

"They are all numbers, which is a primitive data type in JS."

/**
 * QUESTION #9 -
 * What is the purpose of an IIFE? (Immediately Invoked Function Expressions)
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"Revised Answer: Wrapping your code in an IIFE prevents pollution of the global scope when it comes to code and variables."

/**
 * QUESTION #10 -
 * What is the output of the following conditional?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

let value = 'CODEM-9';
switch (value) {
    case "CODEM7":
        console.log('The answer is cupcakes!');
    case "CODEM8":
        console.log('The answer is pancakes!');
    case "CODEM9":
        console.log('The answer is french fries!');
    default:
        console.log('We are out of food...');
};

"Revised Answer: The output is the default 'We are out of food...'"

/**
 * QUESTION #11 -
 * Write a function that takes a height, and a width, and creates that amount of squares in a grid. 
 * 
 * Answer Type: Function
 */


"Revised Answer: "

let gridConfig = {
    width: 50,
    height: 50
}

function makeGrid(width, height) {
    for (let i = 0; i < height; i++) {
        let gridContainer = document.querySelector('.grid-container');
        let row = document.createElement('div');
        row.classList.add('row');
        gridContainer.appendChild(row);

        for (let j = 0; j < width; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
    }
}
makeGrid(gridConfig.width, gridConfig.height);

/**
 * QUESTION #12 -
 * What is the difference between a global and a local variable?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"A global variable is a variable that can be accessed anywhere within your JS. A local variable is a variable you've created and can only be accessed within the same function it was created."


/**
 * QUESTION #13 - (EXTRA CREDIT!)
 * What is the default method of a fetch request?
 * 
 * A) GET
 * B) POST
 * C) PATCH
 * D) DELETE
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"C)"

"Revised Answer: A)"
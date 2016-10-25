$(document).ready(apply_click_handlers);
var input_array = [''];
var input_index = 0;
var answer;

function apply_click_handlers(){
//LFZ START
    $('.operands').click(receive_operand); /*This adds the click event to the element with the operands class
    and has the receive_operand function as a parameter*/
    $('.operators').click(receive_operator);/*This adds the click event to the element with the operators class
     and has the receive_operator function as a parameter*/
    $('.clear').click(clear);/* This applies the click event to the element with the clear class and has the clear
    function as a parameter*/
    //$('.clear-everything').click(clearEverything);
    $('.equals').click(doMath); /*This applies the click event to the element with the equals class and has the
     doMath function as the parameter*/
    //LFZ END
}

//INPUTTING OPERAND
function receive_operand(){
    // if (answer == undefined) {
    input_array[input_index] += $(this).text();
    $('.display-text span').html(input_array);
    console.log('input_Array= ', input_array);
    /*} else {
     input_array = [''];
     input_index = 0;
     input_array[0] = answer;
     input_index++;

     $('.display-text span').html(input_array);
     console.log('input_Array= ', input_array);
     }*/
}
//INPUTTING OPERATOR
function receive_operator() {
    //  if (answer == undefined) {
    //LFZ START
    console.log('we be in receive operator land');/* This is a console log used to show that the function is being
    called*/
    input_index++;/*This increments the input_array's index from the operators index to an empty index where the
     operator will go*/
    input_array[input_index] = $(this).text(); /*This assigns the text being input into the current index
     of the input_array*/

    $('.display-text span').append(input_array[input_index]);/*This adds the value of the index of the input array
     into the dom and displays it in the span element with the the display-text class*/
    console.log('input_Array= ', input_array);//this logs the current value of the array for testing purposes

    input_index++;/*This moves the current index from the index where the operator occupies and moves to the next
     empty index for the next operand*/
    input_array[input_index] = '';/*this ensures that the current index is empty*/
    return input_array; /*this returns the entire value of the array so the values can be used as parameters in the
     doMath function*/
    //LFZ END
    /*} else {

     input_array[input_index] = '';
     //input_array[0] = $(this).text();

     $('.display-text span').append(input_array[input_index]);

     //input_index++;
     input_array[input_index] = '';
     return input_array;
     }*/
}

//MATH OPERATIONS
function doMath(receive_operator) {

    $('.display-text span').html('');
    var operand1 = parseInt(input_array[input_array.length-3]);
    var operator = input_array[input_array.length-2];
    var operand2 = parseInt(input_array[input_array.length-1]);
    if (input_array.length === 3 ){
        switch(operator) {
            case '+' :
                answer = operand1 + operand2;
                $('.display-text span').text(answer);
                input_array = [''];
                input_index = 0;
                input_array[0] = answer;// these few lines of code make it so that the answer can be used in an equation
                //input_index++;
                return answer;
                break;
            case '-':
                answer = operand1 - operand2;
                $('.display-text span').text(answer);
                input_array = [''];
                input_index = 0;
                input_array[0] = answer;
                //input_index++;
                return answer;
                break;
            case '*':
                answer = operand1 * operand2;
                $('.display-text span').text(answer);
                input_array = [''];
                input_index = 0;
                input_array[0] = answer;
                //input_index++;
                return answer;
                break;
            case '/':
                answer = operand1 / operand2;
                $('.display-text span').text(answer);
                input_array = [''];
                input_index = 0;
                input_array[0] = answer;
                //input_index++;
                return answer;
                break;
            default:
                answer = operand1;
                $('.display-text span').text(answer);
                input_array = [''];
                input_index = 0;
                input_array[0] = answer;
                //input_index++;
                return answer;
        };
    };
};



function clear() {
    input_array.length = 0;
    input_array = [''];
    input_index = 0;
    $('.display-text span').html(' ');

}

// CE should have an additional function to C -- if an operation is taking place and the user clicks CE,
// then the most recent operand should be deleted or changed to 0
/*function clearEverything() {
 if(answer) {
 input_array.pop();
 $('.display-text span').append(input_array[input_index]);
 } else {
 clear();
 }
 };*/

//  need to be able to perform operations on answers

// need to be able to perform operations on more than one set of operands

// CE should have an additional function to C -- if an operation is taking place and the user clicks CE,
// then the most recent operand should be deleted or changed to 0
// try to do this, if its too tough change the button to back space

//  need to be able to perform operations on answers

// Also, outlying scenarios, like if the answer is displayed and someone presses the = sign
// should order of operations matter or is that a user decision?

// decimal should be considered an operand digit,
// if a user clicks . and no number after, then it should default to 0



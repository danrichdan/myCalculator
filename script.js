$(document).ready(apply_click_handlers);
var input_array = [''];
var input_index = 0;
var answer = null;
var operand1 = null;
var operand2 = null;
var operator = null;

function apply_click_handlers(){
    $('.operands').click(receive_operand); /*This adds the click event to the element with the operands class
    and has the receive_operand function as a parameter*/
    $('.operators').click(receive_operator);/*This adds the click event to the element with the operators class
     and has the receive_operator function as a parameter*/
    $('.clear').click(clear);/* This applies the click event to the element with the clear class and has the clear
    function as a parameter*/
    $('.clear-entry').click(clearEntry);
    $('.equals').click(doMath); /*This applies the click event to the element with the equals class and has the
     doMath function as the parameter*/
}

//INPUTTING OPERAND
function receive_operand(){
    input_array[input_index] += $(this).text();
    $('.display-text span').html(input_array);
    console.log('input_Array= ', input_array);
}

//INPUTTING OPERATOR
function receive_operator() {
    console.log('In the receive operator function');/* This is a console log used to show that the function is being
    called*/
    input_index++;/*This increments the input_array's index from the operators index to an empty index where the
     operator will go*/
    input_array[input_index] = $(this).text(); /*This assigns the text being input into the current index
     of the input_array*/
    $('.display-text span').append(input_array[input_index]);/*This adds the value of the index of the input array
     into the dom and displays it*/
    console.log('input_Array= ', input_array);//this logs the current value of the array for testing purposes
    input_index++;/*This moves the current index from the index where the operator occupies and moves to the next
     empty index for the next operand*/
    input_array[input_index] = '';/*this ensures that the current index is empty*/
    return input_array; /*this returns the entire value of the array so the values can be used as parameters in the
     doMath function*/
}


//MATH OPERATIONS
function doMath(receive_operator) {
    $('.display-text span').html('');
        operand1 = parseInt(input_array[input_array.length - 3]);
        operator = input_array[input_array.length - 2];
        operand2 = parseInt(input_array[input_array.length - 1]);
    if (input_array.length === 3 && $(this).val('=')){
        switch(operator) {
            case '+' :
                answer = operand1 + operand2;
                $('.display-text span').text(answer);
                input_array = [''];
                input_index = 0;
                input_array[0] = answer;// these few lines of code make it so that the answer can be used in an equation
                console.log("This is the answer value after the addition operation is performed : ", input_array[i]);
                return answer;
                break;
            case '-':
                answer = operand1 - operand2;
                $('.display-text span').text(answer);
                input_array = [''];
                input_index = 0;
                input_array[0] = answer;
                return answer;
                break;
            case '*':
                answer = operand1 * operand2;
                $('.display-text span').text(answer);
                input_array = [''];
                input_index = 0;
                input_array[0] = answer;
                return answer;
                break;
            case '/':
                answer = operand1 / operand2;
                $('.display-text span').text(answer);
                input_array = [''];
                input_index = 0;
                input_array[0] = answer;
                return answer;
                break;
            default:
                answer = operand1;
                $('.display-text span').text(answer);
                input_array = [''];
                input_index = 0;
                input_array[0] = answer;
                return answer;
        };
    };
};

//Clear button's function
function clear() {
    input_array.length = 0;
    input_array = [''];
    input_index = 0;
    $('.display-text span').html(' ');
};

function clearEntry() {
    console.log("Here is the input_array at the beginning of the clearEntry function",input_array );
    console.log("In the ClearEntry function  ");
    input_array.pop();
    input_array.pop();
    input_index--;
    input_index--;
    console.log("Here is the input_array after popping the array",input_array[input_index]);
    $('.display-text span').text(input_array[input_index]);
};




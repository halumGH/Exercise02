/*
1. Write a code to check whether the number is odd or even
*/
let _number: number = 6;
if(_number % 2){
    console.log(_number + " is an odd number");
}
else{
    console.log(_number + " is an even number");
}


/*
2. Write a code to check whether the number is prime or not
*/
if(_number < 2){
    console.log(_number + " is not a prime number");
}
else{
    for (let i = 2; i <= _number; i++){
        if(i < _number){
            if(_number % i == 0){
            console.log(_number + " is not a prime number");
            break;
            }
        }
        else{
            console.log(_number + " is a prime number");
        }
    } 
}

/*
3. Write a code to find the sum of the number 1 to N
*/
let _SumNumber: number = 0;
let _SumString: string = `${_number} -> `;
for(let i = 1; i<= _number; i++){
    _SumNumber += i;
    _SumString += i === _number ? `${i} = ${_SumNumber}` : `${i} + `;
}
console.log(_SumNumber);
console.log(_SumString);


/*
4. Write a code to find factorial of a number
*/
let _factorial: number = 1;
let _FacString: string = `${_number}! ->`
for(let i = _number; i > 0; i--){
    _factorial *= i;
    _FacString += i == 1 ? ` ${i} = ${_factorial}` : ` ${i} x`;
    }
console.log(_factorial);
console.log(_FacString);


/*
5. Write a code to print the first N fibonacci numbers
*/
let _fibonacci1: number = 0;
let _fibonacci2: number = 1;
let _temp: number = 1;

if(_number >= 0){
    for (let i = 0; i <= _number; i++){
        if(_number == 0){
            console.log(_fibonacci1);
        }
        else{
            _temp = _fibonacci1;
            _fibonacci1 = _fibonacci2;
            _fibonacci2 += _temp;
            if(i == (_number - 1)){
                console.log(_fibonacci1);
            }
        }
    }
}

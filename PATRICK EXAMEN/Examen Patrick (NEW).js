function initiate(){
    let number1 = parseInt(prompt("Enter the first number:"));
    let number2 = parseInt(prompt("Enter the seco.nd number:"));
    let number3 = parseInt(prompt("Enter the third number:"));

    /* A  */
    function part1(){
    if(number1 == number2 || number1 == number3 || number2== number3){
    alert("Hay dos numeros iguales.")}
    else {
        alert("No hay dos numeros iguales.");
    }
}
    /* B */
    function part2(){
        let i = 0; i <= 1; i+1
        if(number1 + i === number2 && number2 + i === number3){
        alert("Si estan ordenados.")}
        else{
    alert("No estan ordenados.")
}
}

    /* C */
    function part3(){
        if(number1 !== number2 !== number3){
            /* checks to see if number2 is intermediate */
            let firstcheck = number1 < number2 && number2 < number3

            /* checks to see if number1 is intermediate */
            let secondcheck = number2 < number1 && number1 < number3

            /* checks to see if number3 is intermediate */
             thirdcheck = number2 < number1 && number1 < number3

            if(firstcheck){
                alert("El numero intermedio es " + number2)
            }

            if(secondcheck){
                alert("El numero intermedio es " + number1)
            }
            
            if(thirdcheck){
                alert("El numero intermedio es " + number3)
            }



        }
    }

    /* D */
    function part4(){
        if(number1 < number2 && number2 < number3){
            alert("El menor es " +  number1);
        } else{
            if(number2 < number1 && number2 < number3){
                alert("El menor es " +  number2);
            } else{
                if(number3 < number1 && number3 < number2){
                    alert("El numero menor es " +  number3)
                }
            }
        }
    }

    /* E */
    function part5(){
        let suma = number1 + number2 + number3
        let media = suma / 3
        if (part4()){
            alert ("La media es " + media)
        }
    }

/* 
Execution
*/


if (number3){
    {part1();}
    if (part1())
    {part2();};

    if(part2() && number1 !== number2 !== number3)
    {part3();};

    if (part3() || part2())
    {part4();};

    if (part4())
    {part5();};
}

}

initiate();

/*
Take number1, add plus 1. Check if it is equal to number2.
If equal, take number2, add plus 1 and check if its equal to number3.
if not, they are not ordered.
*/

/*
if all the numbers are different, display the intermediate number.
check if number1 is bigger than 2
check if number2 is bigger than 3
check if number 1 is bigger than 3
*/

/*
A partir de tres numeros:
a. Si hay dos iguales.
b. Si estan ordenados
c. El intermedio (condicion: si son diferentes)
d. El menor
e. La media entre ellos (suma de todos, dividia entre la cantidad de numeros).
*/

/*
for (let i = 1; i <= 10; i = i + 1) {
  console.log(i);
}
*/

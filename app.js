document.addEventListener("DOMContentLoaded", function() {
    
   

    /* 
    let rangeStart = 1;
    let rangeEnd = 100;
    let numberToCheck =13; 
    let inRange = false;

    for(let i = rangeStart; i <= rangeEnd; i++ )
    {
        if(numberToCheck === i) 
        {
            inRange = true;
            break;
        }

    }

    /*if(inRange === true)
    {
        console.log("Number is in range");
    }

    else
    {
        console.log("Not in range");
    

    //Ternary Operator
    let result = inRange ? "In Range" : "Out of Range" ;
    console.log(result); 
    */

    //Korrutustabel:
    //Testi andmeid
    //number: 5
    
   /* let muut = 5

    for(let i = 1; 1 <= 10; i++)
    {
        console.log(muut, " X ", i, " = ", muut*i); 


    }*/


    /*let number = 5;

    for(let i = 1; 1 <= 10; i++)
    {

        let string = 
    } */

    let stringLength;
    let string = "Hello world!";
    stringLength = string.length;
    console.log(stringLength);

    /*for(let i = 0; i < 12; i++)
    {
        console.log(string[i]);
    } 

    for (let i = string.length -1 ; i >= 0; i--)
    {
        if (string[i] === "o")
        {
            string[i] = "*";
        }
        
    }*/

    for(let i = 0; i < 12; i++)
    {
        
        if(string[i] === "o")
        {
            string[i] = " * ";
        }

        else
        {
            console.log(string[i]);
        }
    } 
    let substitute = string.substitute("o", "*");

    console.log(string);
    
});

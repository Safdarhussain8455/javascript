<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
        <script>
           
    //Write a program that takes 1 or more character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
            
        var alphacount=0,capcount=0,lowcount=0, ncount=0;
        var entry = prompt("Enter the value");
        for(i=0;i<entry.length;i++)
            {
                var code=entry.charCodeAt(i);
                if ((code>=65&&code<=90)||(code>=97&&code<=122))//if any alphabet
                { 
                    alphacount++;//count the alphabet
                    if (code>=65&&code<=90)
                        capcount++;//count the capital letters
                    else if (code>=97&&code<=122)
                        lowcount++;//count the lowercase letters
                    
                }
                else{
                    ncount++;//count the numbers
                }
            }
        if(alphacount==0){
           alert("You have entered " + ncount + " numbers only");
           }
        else{
            alert("You have entered " + ncount + " numbers and " + alphacount + " alphabets. \r\n Out of which there was " + capcount + " uppercase and " + lowcount + " Lower case alphabet(s)");
            }
        
    </script>
</head>
<body>
    
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<!--     // Q1     Declare an empty array using JS literal notation to store student names in future.
Declare an empty array using JS object notation to store student names in future.
Declare and initialize a strings array.
Declare and initialize a numbers array.
Declare and initialize a boolean array.
Declare and initialize a mixed array.
Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
 -->
    <script>
        var empty_array = [];
        var string_array = ["Atif","Kashif","Iqbal"];
        var num_array = [99,100,101]
        var bool_array = [true,true,false];
        var mix_array=["atif",99, true]
        var edu_array = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
        document.write("Qualifications:</br>");
        for (i=0;i<edu_array.length;i++){
            document.write(i+1+")"+ edu_array[i] + "</br>" );
            }
        
        
        
        
    var container;
        var colors=["red","green","blue","yellow"];
        document.write("Original array is: </br>" + colors);
        
/*
//Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.    
        container=prompt("Which colour you want to add at the end of the array?")
        colors.push(container);
        document.write("</br></br> New color has been added to the end: </br>" + colors);
*/
        
/*
//Add two more color to the beginning of the array. Display the updated array in your browser.
        container=prompt("Which colour you want to add at the beginning of the array?");
        colors.unshift(container);
        container=prompt("Which other colour you want to add at the beginning of the array?");
        colors.unshift(container);
        document.write("</br></br>2 new colors have been added to the beginning of the array: </br>" + colors);
*/

/*
//Delete the first color in the array. Display the updated array in your browser.
        colors.shift();
        document.write("</br></br>The 1st color has been deleted from the beginning of the array: </br>" + colors);
*/
        
/*
//Delete the last color in the array. Display the updated array in your browser.
        colors.pop();
        document.write("</br></br>The last color has been deleted from the end of the array: </br>" + colors);
*/

/*//Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. 
        container=prompt("Which colour you want to add in the array?");
        var loc = prompt("Which index number do you want to add it in the array?");
        colors.splice(loc,0,container);
        document.write("</br></br>The array has been revised: </br>" + colors);*/

//Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.
        var start=prompt("From which index number do you want to start deleting in the array?");
        var total = prompt("How many do you want to delete?");
        colors.splice(start,total);
        document.write("</br></br>The array has been revised: </br>" + colors)
        
        
        var container;
//        var scores=[320,230,480,120];
        var scores=[25,35,250];
        document.write("Scores of students:" + scores);
        scores.sort(function(a,b){return a-b});
        document.write("</br>Ordered score of students:" + scores);
        
//      Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.  
        var cities=["Karachi","Lahore","Islamabad","Multan","Hyderabad","Rawalpindi"];
        document.write("Cities:" + cities);
        var sel_cities=cities.slice(1,4);
        document.write("</br> 3 Cities:" + sel_cities);
        
    </script>
</head>
<body>
    
</body>
</html>

/*
File: actions.js
GUI Assignment: Mult table
Joseph Gosselin, UMass Lowell Computer Science, joseph_gosselin@student.uml.edu
Copyright (c) 2021 by Joseph Gosselin. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by JG on October 20, 2021
Description: Java script takes the input from the forms and performs actions on the values.
*/

// gets values and stores at floats 
//then calues validateValues to ensure all values are integers and not floats/other text
function getValues() {
    xStart = parseFloat(document.getElementById("startX").value);
    xEnd = parseFloat(document.getElementById("endX").value);
    yStart = parseFloat(document.getElementById("startY").value);
    yEnd = parseFloat(document.getElementById("endY").value);

    var valid = validateValues(xStart,xEnd,yStart,yEnd);

    if (valid)
    {
      buildTable();  // input values into table
    }
    else {
        document.getElementById("mult-Table").innerHTML = "Invalid Input..."
    }

}

function validateValues (x1,x2,y1,y2) {

    if (Number.isInteger(x1) && Number.isInteger(x2) && Number.isInteger(y1) && Number.isInteger(y2) ) {
        console.log("All values are integers");
        console.log("xstart: " + xStart);
        console.log("xEnd: " + xEnd);
        console.log("yStart: " + yStart);
        console.log("yEnd: " + yEnd);
        return true;
    } else {
        console.log("Not all values are integers");
        return false;
    }
}

function buildTable () {
    var temp; 

    // alls loop to know how many rows are needed
    totalRows = Math.abs(yEnd - yStart);


    //incase somone puts largers values first to smaller values

    //sets largest numbers
    largestX = Math.max(xStart,xEnd);
    largestY = Math.max(yStart,yEnd)

    //sets smallest values
    smallestX = Math.min(xStart,xEnd);
    smallestY = Math.min(yStart,yEnd);

    //prevents really large numbers
    if (largestX-smallestX > 100 || largestY - smallestY > 100)
    {
        document.getElementById("mult-Table").innerHTML = "Values are to large, please reduce the inputs..."
    } else {

    // builds the table, once done replace the orginal code
    for (let i = 0; i <= totalRows; i++) {
        if (i == 0) {
            temp = "<tr> <th class=\"removed-Value\"></th>"
            for (let i = smallestX; i <= largestX; i++) {
                temp += "<th>" + i + "</th>"
            }
            temp += "</tr>"
        }

        // initializing the start of a new row
        temp += "<tr> <th>" + smallestY + "</th>";

        for (let n = smallestX; n <= largestX; n++) {
            temp += "<th>" + n*smallestY + "</th>"
        }
        temp += "</tr>"
        smallestY++;
    }
    
    temp += "</tr>";

    document.getElementById("mult-Table").innerHTML = temp;
    

}
}

//default values...
var xStart = 1;
var xEnd = 1;
var yStart = 1;
var yEnd = 1;


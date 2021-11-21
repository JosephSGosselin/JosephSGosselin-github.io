/*
File: validation.js
GUI Assignment: Creating Multiplication table
Joseph Gosselin, UMass Lowell Computer Science, joseph_gosselin@student.uml.edu
Copyright (c) 2021 by Joseph Gosselin. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by JG on Nov. 20, 2021
Description: checks for correct input from the user. If not display errors. If okay, create and display table.
*/


// https://www.youtube.com/watch?v=xNSQ3i-BWMo
//we are using jquery here
$().ready(function () {

    $("#input-form").validate({
        //need values in the text boxes
        //also must be in certain range
        //dont need to check for 
        rules: {
            startX: {
                required: true,
                integer: true,
                range: [-50, 50]
            },
            endX: {
                required: true,
                integer: true,
                range: [-50, 50]
            },
            startY: {
                required: true,
                integer: true,
                range: [-50, 50]
            },
            endY: {
                required: true,
                integer: true,
                range: [-50, 50]
            }
        },

        // alternative messages to display when conditions are not met.
        messages: {
            startX: {
                required: 'Please enter a value',
                range: 'Please enter a number from [-50,50]'
            },
            startY: {
                required: 'Please enter a value',
                range: 'Please enter a number from [-50,50]'
            },
            endX: {
                required: 'Please enter a value',
                range: 'Please enter a number from [-50,50]'
            },
            endY: {
                required: 'Please enter a value',
                range: 'Please enter a number from [-50,50]'
            },
        },

        /*When true, submit the table to be created. */
        submitHandler: function () {
            console.log("test");
            buildTable();
            return false;
        }
    });

})


// when value of inputboxes change, autocheck and build new table.
//this will updated on the fly, if you want to update once you exit the textbox
// then use update change()
$("#input-form").on('input', function () {
    if ($("#input-form").valid()) {
        buildTable()
    }

})

let temp = "";

// just builds the table
function buildTable() {

    // values are already checked with the rules above, so parsing is all set
    xStart = parseFloat(document.getElementById("startX").value);
    xEnd = parseFloat(document.getElementById("endX").value);
    yStart = parseFloat(document.getElementById("startY").value);
    yEnd = parseFloat(document.getElementById("endY").value);




    // alls loop to know how many rows are needed
    totalRows = Math.abs(yEnd - yStart);


    //incase somone puts largers values first to smaller values

    //sets largest numbers
    largestX = Math.max(xStart, xEnd);
    largestY = Math.max(yStart, yEnd)

    //sets smallest values
    smallestX = Math.min(xStart, xEnd);
    smallestY = Math.min(yStart, yEnd);

    //prevents really large numbers
    if (largestX > 50 || largestY > 50 || smallestY < -50 || smallestX < -50) {
        //dont do anything... no refresh of screen.
        //document.getElementById("mult-Table").innerHTML = "Values are to large, please reduce the inputs..."
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
                temp += "<th>" + n * smallestY + "</th>"
            }
            temp += "</tr>"
            smallestY++;
        }

        temp += "</tr>";

        document.getElementById("mult-Table").innerHTML = temp;


    }
}


function verify() {
    if ($("#input-form").valid()) {
        buildTable();
    }
}


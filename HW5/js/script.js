

// File: script.js
// GUI Assignment: Creating Multiplication table
// Joseph Gosselin, UMass Lowell Computer Science, joseph_gosselin@student.uml.edu
// Copyright (c) 2021 by Joseph Gosselin. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by JG on December 12, 2021
// Description: handles reading in json file, jquery functions such as drop and drag, etc

// setup of class obj. This will be stored in array later to display tiles
class tile {
    constructor(letter, value, src) {
        this.letter = letter
        this.value = value
        this.imageSrc = src
    }
}


let tilesArray = new Array(0)

//generates all the tiles and stores them in array
$.getJSON("HW5/json/pieces.json", function(data){
    $.each(data.pieces, function(index,value){

        //loop creates the total amount of tiles for each letter
        for (i = 0; i < value["amount"]; i++){
            tilesArray.push(new tile(value["letter"],value["value"],("../images/Tiles/Scrabble_Tile_" + value.letter + ".jpg")))
        }
                
    });

});

//https://stackoverflow.com/questions/60662796/shuffle-array-in-js
//shuffles array for they are not in order anymore
//used to distribute tile to player
function shuffle (arr) {
    var j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = arr[index];
        arr[index] = arr[j];
        arr[j] = x;
    }
    return arr;
}

// timeout because the javascript console doesnt recognize the array filled initally (to fast)
setTimeout(function(){

    shuffle(tilesArray)

    //give player 7 tiles, that were already shuffled.
    for (let i = 1; i < 8; i++) {
        $(".tile"+i).prepend("<div class=\"draggable col-md-1\">  <img src="+tilesArray.pop().imageSrc+" width=\"140\" height=\"140\"  /> </div>")
    }
    

    // must be called to allow dynamically created items to be draggable
    //got most of this code from the jquery website.
    $( function() {
        $( ".draggable" ).draggable({revert: "invalid"});
        $( "#board" ).droppable({
            drop: function( event, ui ) {
              $( this )
                .addClass( "ui-state-highlight" )
                .find( "p" )
                  .html( "Dropped!" );
            }
          });
          $( "#rack" ).droppable({
            drop: function( event, ui ) {
              $( this )
                .addClass( "ui-state-highlight" )
                .find( "p" )
                  .html( "Dropped!" );
            }
          });
    } );


},1000
)












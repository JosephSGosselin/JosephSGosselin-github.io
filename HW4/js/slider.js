/*
File: slider.html
GUI Assignment: Creating Multiplication table
Joseph Gosselin, UMass Lowell Computer Science, joseph_gosselin@student.uml.edu
Copyright (c) 2021 by Joseph Gosselin. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by JG on Nov. 20, 2021
Description: Creates the 2 way binded slider

https://www.tutorialspoint.com/jqueryui/jqueryui_slider.htm
https://jqueryui.com/slider/
*/


/*NOTE: I commented the first function since the rest are just copied and pasted of each other.  */


//all these are the same, just for different sliders
//it binds the textbox with the slider, and also sets the sliders max/min
// if conditions are not met, the slider returns to its previous values

$( function() {
  $( "#sliderX1" ).slider({
    orientation: "horizontal",
    min: -50,
    max: 50,
    animation: true,
    value: 0,

    /*Everytime the slider changes you must verify the slider input */
    slide: function (event, ui) {
      $("#startX").val(ui.value);
      verify();
    },
  });

  /*This makes sure the if the slider changes, if it is valid, change the text box associated
  if not, place the old value back */
  var initialValue = $("#sliderX1").slider("option", "value");
  $("#startX").val(initialValue);
  $("#startX").change(function () {
    var oldVal = $("#sliderX1").slider("option", "value");
    var newVal = $(this).val();
    if (isNaN(newVal) || newVal <= -51 || newVal >= 51) {
      $("#startX").val(oldVal);
    } else {
      $("#sliderX1").slider("option", "value", newVal);
    }
  });
})

  $( function() {
    $( "#sliderX2" ).slider({
      orientation: "horizontal",
      min: -50,
      max: 50,
      animation: true,
      value: 0,
      slide: function (event, ui) {
        $("#endX").val(ui.value);
        verify();
      },
    });
    var initialValue = $("#sliderX2").slider("option", "value");
    $("#endX").val(initialValue);
    $("#endX").change(function () {
      var oldVal = $("#sliderX2").slider("option", "value");
      var newVal = $(this).val();
      if (isNaN(newVal) || newVal <= -51 || newVal >= 51) {
        $("#endX").val(oldVal);
      } else {
        $("#sliderX2").slider("option", "value", newVal);
      }
    });
  })


  $( function() {
    $( "#sliderY1" ).slider({
      orientation: "horizontal",
      min: -50,
      max: 50,
      animation: true,
      value: 0,
      slide: function (event, ui) {
        $("#startY").val(ui.value);
        verify();
      },
    });
    var initialValue = $("#sliderY1").slider("option", "value");
    $("#startY").val(initialValue);
    $("#startY").change(function () {
      var oldVal = $("#sliderY1").slider("option", "value");
      var newVal = $(this).val();
      if (isNaN(newVal) || newVal <= -51 || newVal >= 51) {
        $("#startY").val(oldVal);
      } else {
        $("#sliderY1").slider("option", "value", newVal);
      }
    });
  })

  $( function() {
    $( "#sliderY2" ).slider({
      orientation: "horizontal",
      min: -50,
      max: 50,
      animation: true,
      value: 0,
      slide: function (event, ui) {
        $("#endY").val(ui.value);
        verify();
      },
    });
    var initialValue = $("#sliderY2").slider("option", "value");
    $("#endY").val(initialValue);
    $("#endY").change(function () {
      var oldVal = $("#sliderY2").slider("option", "value");
      var newVal = $(this).val();
      if (isNaN(newVal) || newVal <= -51 || newVal >= 51) {
        $("#endY").val(oldVal);
      } else {
        $("#sliderY2").slider("option", "value", newVal);
      }
    });
  })

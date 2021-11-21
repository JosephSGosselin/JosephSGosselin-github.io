/*
File: tabs.js
GUI Assignment: Creating Multiplication table
Joseph Gosselin, UMass Lowell Computer Science, joseph_gosselin@student.uml.edu
Copyright (c) 2021 by Joseph Gosselin. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by JG on Nov. 20, 2021
Description: Creates tabs for the mult table
*/

/*Supporting code came from the jquery website: https://jqueryui.com/tabs/#manipulation*/

$(function () {
  /*Setups the actual tab within the tab div in the html.*/ 
  var tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
  var tabCounter = 0;
  var tabs = $("#tabs").tabs({
    collapsible: true
  });

  // Modal dialog init: custom buttons and a "close" callback resetting the form inside
  var dialog = $("#dialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      Add: function () {
        $(this).dialog("close");
      },
      Cancel: function () {
        $(this).dialog("close");
      }
    },
    close: function () {
      form[0].reset();
    }
  });

  // AddTab form: calls addTab function on submit and closes the dialog
  var form = dialog.find("form").on("submit", function (event) {

    dialog.dialog("close");
    event.preventDefault();
  });

  // Actual addTab function: adds new tab using the input from the form above
  function addTab() {
    var label = "[ X1: " + $(startX).val() + ", X2: " + $(endX).val() + "] ---> [ Y1: " + $(startY).val() + ", Y2: " + $(endY).val() + "]"
    var id = "tabs-" + tabCounter
    var myTab = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label))

    // grabs the table. innerHtml only get the values not the table itself.
    tabContentHtml = document.getElementById("mult-Table").outerHTML;
    tabs.find(".ui-tabs-nav").append(myTab);
    // added the overflow so you can scroll the table in the tab
    tabs.append("<div id='" + id + "' style='overflow-x: auto'>" + tabContentHtml + "</div>");
    tabs.tabs("refresh");
    tabCounter++;
  }

  // AddTab button: just opens the dialog
  $("#add_tab")
    .button()
    .on("click", function () {
      console.log("added tab");
      addTab();
    });


  //clears everything within the tab-names to remove the tabs themselves
  $("#removeSelected")
    .button()
    .on("click", function () {
      document.getElementById("tab-names").innerHTML = ""

      //this loop removes the actual contents within the tabs that were already removed
      for (var i = tabCounter; i >= 0; --i) {
        console.log("tabs-" + i)
        // document.getElementById("tabs-"+i).remove().attr( "aria=controls")
        $("#tabs-" + i).remove()
      }
      tabs.tabs("refresh");
      tabCounter = 0
    });


  // Close icon: removing the tab on click
  tabs.on("click", "span.ui-icon-close", function () {
    var panelId = $(this).closest("li").remove().attr("aria-controls");
    console.log(panelId)
    $("#" + panelId).remove();
    tabs.tabs("refresh");
    tabCounter--;
  });

  tabs.on("keyup", function (event) {
    if (event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE) {
      var panelId = tabs.find(".ui-tabs-active").remove().attr("aria-controls");
      $("#" + panelId).remove();
      tabs.tabs("refresh");
    }
  });
});
// ADD NEW ITEM TO END OF LIST
var myList = document.getElementsByTagName('ul')[0];
var lastEle = document.createElement('li');
lastEle.appendChild(document.createTextNode('cream'));
myList.appendChild(lastEle);


// ADD NEW ITEM START OF LIST
var firstEle = document.createElement('li');
firstEle.appendChild(document.createTextNode('kale'));


myList.insertBefore( firstEle, myList.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var coolElement = document.querySelectorAll('li');
for(var i = 0; i < coolElement.length; i++){
    coolElement[i].className = 'cool';
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var headNum = document.querySelector('h2');
headNum.innerHTML =  headNum.firstChild.nodeValue + '<span>' + coolElement.length + '</span>';



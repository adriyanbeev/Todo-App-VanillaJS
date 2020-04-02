const insertBtn = document.querySelector('#btn-insert');
const editBtn = document.querySelector("#btn-edit");
const deleteBtn = document.querySelector("#btn-delete");
const deleteAllBtn = document.querySelector('#btn-deleteAll');
const ol = document.querySelector('#task-id');
const input = document.getElementById('new-task');
var itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));



const liMaker = (text,index) => {

    const li = document.createElement('li');
    li.textContent = text;
    li.id = index ;
    ol.appendChild(li);
    li.addEventListener('dblclick', function(event){
      var tar = event.target;
      var select = event.target;
      input.value = select.innerHTML;

    deleteBtn.addEventListener('click', function(event){
       
        itemsArray.splice(index - 1, 1);
        localStorage.setItem('items',JSON.stringify(itemsArray));
        input.value = "";
      location.reload();
      })

    editBtn.addEventListener('click',function(){
     
      select.innerHTML = input.value;
      itemsArray.splice(index - 1, 1, input.value);
      localStorage.setItem('items',JSON.stringify(itemsArray));
      input.value = "";
      location.reload();
      })
      console.log(event.target);
     })
}



insertBtn.addEventListener('click', function () {
  if(input.value === ""){
      alert("Please write something!");
  }else{
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value, itemsArray.length);
  input.value = "";
}
});



data.forEach((item,index) => {
  liMaker(item,index+1);
});

  deleteAllBtn.addEventListener('click', function () {

    var r = confirm("Do you want to delete ALL tasks!");
    if (r == true){
      localStorage.clear();
       while (ol.firstChild) {
      ol.removeChild(ol.firstChild);
  }
  itemsArray = []; 
} 
});


function count (){
  
  var counter = document.getElementById('task-id');
  var para = document.getElementsByClassName('counter')[0];
  counter = counter.getElementsByTagName('li');
  counter = counter.length;
  para.innerHTML = "You have " + counter + " todos left! ";
  //document.getElementsByClassName('counter')[0] = counter.length;
  
}

count();




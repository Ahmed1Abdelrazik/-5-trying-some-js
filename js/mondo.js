



// to change from categ to another;
let left = document.querySelector(".Left");
let right = document.querySelector(".Right");
let image = document.querySelector("img");
let body = document.querySelector("body");

//this function to change pics (1) from left and right
function change1(){
  var i = 1;

  left.onclick = function(){
    if(i===1) i=5;
    i--;
    image.src ="img/SC0"+i+".jpg";
  };

  right.onclick = function(){

    i++;
    if(i===5) i =1;
    image.src ="img/SC0"+i+".jpg";

  };
};

//this function to change pics (2) from left and right

function change2(){

  var i = 1;

  left.onclick = function(){
    if(i===1) i=9;
    i--;
    image.src ="img/shuffle-0"+i+".jpg";
  };

  right.onclick = function(){

    i++;
    if(i===9) i =1;
    image.src ="img/shuffle-0"+i+".jpg";

  };
};


//this function to change pics (3) from left and right
function change3(){
  var i = 1;

  left.onclick = function(){
    if(i===1) i=6;
    i--;
    image.src ="img/PH0"+i+".jpg";
  };

  right.onclick = function(){

    i++;
    if(i===6) i =1;
    image.src ="img/PH0"+i+".jpg";

  };
}




//change2 is by default
change2();

//function to change pics according to nav bar selections

let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let active_box = document.querySelector(".active");



box1.onclick = function(){ 
  if(active_box !== this){
    box1.classList.add("active");
    active_box.classList.remove("active");
    active_box = document.querySelector(".active");
    image.src ="img/SC01.jpg";
    change1();
  }
};
box2.onclick = function(){ 
  if(active_box !== this){
    box2.classList.add("active");
    active_box.classList.remove("active");
    active_box = document.querySelector(".active");
    image.src ="img/shuffle-01.jpg";
    change2();
  }
};
box3.onclick = function(){ 
  if(active_box !== this){
    box3.classList.add("active");
    active_box.classList.remove("active");
    active_box = document.querySelector(".active");
    image.src ="img/PH01.jpg";
    change3();
  }
};
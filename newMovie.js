

function showJSON(){
  
  
  let name = document.getElementById("mname").value ;
let ids = document.getElementById("ids").value  ;
let description = document.getElementById("des").value ;
let high_q = document.getElementById("highQ").value ;
let medium_q = document.getElementById("mediumQ").value ;
let low_q = document.getElementById("lowQ").value ;
let trailer = document.getElementById("trailer").value ;
let thumbnail = document.getElementById("thumbnail").value ;


let not = "/.com/not.html";


let container1 = document.getElementById('main_container1');
let container = document.getElementById('main_container');




container.style.display="none";




let AmPm = "";


let time = new Date();
h = time.getHours();
m = time.getMinutes();




if (h < 10) {
  h = "0" + h;
} else {
  h = h;
}






if (h >= 12) {
  AmPm = "PM";

  if (h > 12) {
    h = h - 12;
  } else {
    h = h;

  }

} else {
  AmPm = "AM";
};








if (m < 10) {
  m = "0" + m;
} else {

  m = time.getMinutes();

};

time = h + ":" + m;

//alert(h + ':' + m)




/*

let name = prompt("Movies Name......", "");
let ids = prompt("Movies Ids......", "");
//let time = prompt("Uploading Time......" , "");
//let AmPm = prompt("Time AM / PM......" , "");
let description = prompt("Movies Description......", "");
let high_q = prompt("Movies High Quality Link......", "");
let medium_q = prompt("Movies Medium Quality Link......", "");
let low_q = prompt("Movies Low Quality Link......", "");
let trailer = prompt("Movies Trailer Link......", "");
let thumbnail = prompt("Movies Thumbnail Link......", "");

*/





if (high_q == "") {
  high_q = not;

}
else {
  high_q = high_q;

}




if (medium_q == "") {
  medium_q = not;

}
else {
  medium_q = medium_q;

}





if (low_q == "") {
  low_q = not;

}
else {
  low_q = low_q;

}



if (trailer == "") {
  trailer = not;

}
else {
  trailer = trailer;

}








container1.innerHTML = `
     
             <pre>

    {
        "Title": "` + name + `",
        
        "Ids": "` + ids + `",
        
        "Time": "` + time + `",
        
        "Am_Pm": "` + AmPm + `",
    
    
        "Description": "` + description + `",
    
        "_1080P": "` + high_q + `",
        
        "_720P": "` + medium_q + `",
        
        "_480P": "` + low_q + `",
        
        "Trailer": "` + trailer + `",
    
        "Thumbnail": "/hollywood/h_img/` + thumbnail + `"
      },

    </pre>`;



  
  
  
  
  
}






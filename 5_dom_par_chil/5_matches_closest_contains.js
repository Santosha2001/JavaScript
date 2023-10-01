let id = document.getElementById("id1");
console.log(id);

let sp1 = document.getElementById("sp1");

// matches()-->checks gives css matches or not
console.log(id.matches(".santhu")); //false because santhu class is not present
console.log(id.matches(".box"));  //true
console.log(id.matches("#box"));  //false because box id is not present
console.log(id.matches("#id1"));   //true


//closest()--> looks for nearest ancestor that contain css selector if not there--- null
console.log(sp1.closest(".spm"));
console.log(sp1.closest("#sp1"));
console.log(sp1.closest("#id1"));
console.log(sp1.closest("#id3")); //if css class or id not present then gives--> null


//contains()--> parent css selector conatins sub css then true otherwise false
console.log(id1.contains(sp1)); //true
console.log(sp1.contains(sp1));  //true
console.log(sp1.contains(id1));  //false
const img = document.getElementById("img");
const box = document.getElementsByClassName("boxes");
console.log(img); //We get image with all its attribute
//Darg start event
img.addEventListener("dragstart", (e)=>{
    console.log("Drag Start");            
    setTimeout(() => {   //we use this for not hide element directly "0" for till end then hide
        e.target.className = " hide";
    }, 0);
});
//When img is been drag
// img.addEventListener("drag", (e)=>{
//     console.log("Image is been draged");
// });
//Drag  event
img.addEventListener("dragend",(e)=>{
    e.target.className = "img"; //it target my image class named as img //it will show img
    console.log("Drag End");
});

//For all boxes.        
console.log(box); //we are getting in the form of array. so we use for-of loop
for( let boxes of box){
    console.log(boxes) //here we get all the element of class name boxes

    //Drag over event
    boxes.addEventListener("dragover",(e)=>{
        e.preventDefault();   //help to put append element
        console.log("Drag Over");
    });

    //Drag enter event
    boxes.addEventListener("dragenter",(e)=>{
        e.target.className += " dash";
        console.log("Drag Enter");
    });

    //Drag leave event
    boxes.addEventListener("dragleave",(e)=>{
        e.target.className = "boxes";
        console.log("Drag leave");
    });

    //Drop event
    boxes.addEventListener("drop",(e)=>{
        e.target.append(img);
        e.target.className = "boxes";
        console.log("Drop");
    });
}
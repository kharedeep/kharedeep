//javascript
//filter array
let filterarray=[];

let data = {
    id: "64a5c188b89b1e2299ba3e02",
    record: {
      data: [
        {
          product_image:
            "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/um-training-001-1.jpg",
          product_title: "Limited",
          product_badge: "NEW",
          product_variants: [
            { v1: "Blue/S" },
            { v2: "Blue/M" },
            { v3: "Blue/L" },
          ],
        },
        {
          product_image:
            "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/limited-edition-003-4.jpg",
          product_title: "Um Training",
          product_badge: "HOT",
          product_variants: [{ v1: "RED/S" }, { v2: "RED/M" }, { v3: "RED/L" }],
        },
        {
          product_image:
            "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/beach-bum-01.jpg",
          product_title: "Beach Bum",
          product_badge: "NEW",
          product_variants: [
            { v1: "Orange/S" },
            { v2: "Orange/M" },
            { v3: "Orange/L" },
          ],
        },
        {
          product_image:
            "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/limited-edition-003-4.jpg",
          product_title: "Um Training X",
          product_badge: "HOT",
          product_variants: [{ v1: "RED/XS" }, { v2: "RED/M" }, { v3: "RED/XL" }],
        },
        {
          product_image:
            "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/um-training-001-1.jpg",
          product_title: "Limited X",
          product_badge: "NEW",
          product_variants: [
            { v1: "Blue/XS" },
            { v2: "Blue/M" },
            { v3: "Blue/XL" },
          ],
        },
        {
          product_image:
            "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/beach-bum-01.jpg",
          product_title: "Beach Bum X",
          product_badge: "NEW",
          product_variants: [
            { v1: "Orange/XS" },
            { v2: "Orange/M" },
            { v3: "Orange/XL" },
          ],
        },
      ],
    },
    metadata: {
      name: "api",
      readCountRemaining: 98,
      timeToExpire: 86388,
      createdAt: "2023-07-05T19:16:24.556Z",
    },
  };

let galleryarray= [
    {
      product_image:
        "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/um-training-001-1.jpg",
      product_title: "Limited",
      product_badge: "NEW",
      product_variants: [
        { v1: "Blue/S" },
        { v2: "Blue/M" },
        { v3: "Blue/L" },
      ],
    },
    {
      product_image:
        "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/limited-edition-003-4.jpg",
      product_title: "Um Training",
      product_badge: "HOT",
      product_variants: [{ v1: "RED/S" }, { v2: "RED/M" }, { v3: "RED/L" }],
    },
    {
      product_image:
        "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/beach-bum-01.jpg",
      product_title: "Beach Bum",
      product_badge: "NEW",
      product_variants: [
        { v1: "Orange/S" },
        { v2: "Orange/M" },
        { v3: "Orange/L" },
      ],
    },
    {
      product_image:
        "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/limited-edition-003-4.jpg",
      product_title: "Um Training X",
      product_badge: "HOT",
      product_variants: [{ v1: "RED/XS" }, { v2: "RED/M" }, { v3: "RED/XL" }],
    },
    {
      product_image:
        "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/um-training-001-1.jpg",
      product_title: "Limited X",
      product_badge: "NEW",
      product_variants: [
        { v1: "Blue/XS" },
        { v2: "Blue/M" },
        { v3: "Blue/XL" },
      ],
    },
    {
      product_image:
        "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/beach-bum-01.jpg",
      product_title: "Beach Bum X",
      product_badge: "NEW",
      product_variants: [
        { v1: "Orange/XS" },
        { v2: "Orange/M" },
        { v3: "Orange/XL" },
      ],
    },
  ];



//create a function to show gallery 
showgallery(galleryarray);


 function showgallery(currarray){
    document.getElementById("card").innerHTML=""
    for(var i=0;i<currarray.length;i++){
        document.getElementById("card").innerHTML+= `
        <div class="card" >
<div class="row">
<div class="col-3">
    <img class="card-img-top" src="${currarray[i].product_image}" alt="Card image cap">
</div>
<div class="col-9">
    <div class="card-body">
        <h5 class="card-title"><b>${currarray[i].product_title}</b></h5>
        <p class="card-text">${currarray[i].product_variants[0].v1}</p>
        <p class="card-text">${currarray[i].product_variants[1].v2}</p>
        <p class="card-text">${currarray[i].product_variants[2].v3}</p>
    </div>
</div>
</div>
</div>`

    }
}


function showgridone() {
    let currarray= galleryarray;
    document.getElementById("card").innerHTML=""
    for(var i=0;i<currarray.length;i++){
        document.getElementById("card").innerHTML+= `
        <div class="card w-50" >
<div class="row">
<div class="col-3">
    <img class="card-img-top" src="${currarray[i].product_image}" alt="Card image cap">
</div>
<div class="col-9">
    <div class="card-body">
        <h5 class="card-title"><b>${currarray[i].product_title}</b></h5>
        <p class="card-text">${currarray[i].product_variants[0].v1}</p>
        <p class="card-text">${currarray[i].product_variants[1].v2}</p>
        <p class="card-text">${currarray[i].product_variants[2].v3}</p>
    </div>
</div>
</div>
</div>`

    }
}
function showgridtwo() {
    let currarray= galleryarray;
    document.getElementById("card").innerHTML=""
    for(var i=0;i<currarray.length;i++){
        document.getElementById("card").innerHTML+= `
        <div class="card" >
<div class="row">
<div class="col-3">
    <img class="card-img-top" src="${currarray[i].product_image}" alt="Card image cap">
</div>
<div class="col-9">
    <div class="card-body">
        <h5 class="card-title"><b>${currarray[i].product_title}</b></h5>
        <p class="card-text">${currarray[i].product_variants[0].v1}</p>
        <p class="card-text">${currarray[i].product_variants[1].v2}</p>
        <p class="card-text">${currarray[i].product_variants[2].v3}</p>
    </div>
</div>
</div>
</div>`

    }
}


    //live searching using key input

 document.getElementById("myinput").addEventListener("keyup",
function(){
   let text=document.getElementById("myinput").value.toLowerCase();
   filterarray=galleryarray.filter(function(a){
    
    if(a.product_title.toLowerCase().includes(text)){
        // console.log(a.product_title.includes(text));
        return a.product_title;

    }
   });
   if(this.value==""){
    showgallery(galleryarray);

   }
else{
    if(filterarray ==""){
        document.getElementById("para").style.display="block";
        document.getElementById("card").innerHTML="";

    }
    else{
        showgallery(filterarray);
        document.getElementById("para").style.display="none";
        console.log(filterarray);
    }
}


 })


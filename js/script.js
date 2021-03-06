var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
  ];
var container = document.getElementById("item-container");
for (var i = 0; i < products.length; i++) {
var image = document.createElement("img");
 image.setAttribute('src', "./images/" + products[i].imageTitle);
  image.classList.add("product-image");  
  
  /*name.innerText = products[i].name;*/
  var para = document.createElement("p");
  var node = document.createTextNode(products[i].name);
  para.appendChild(node);

  para.classList.add("product-name")
  container.appendChild(para);
    
  console.log(name, image);
  console.log(products.length);
  
  container.appendChild(image);
  }
  /* item.className = "item";
  item.innerHTML = "<h4>" + products[i].name + "</h4>";
  item.innerHTML += "<img srcset='" + products[i].imageSrcSet + "' " + "sizes='" + products[i].imagesSizes + "' " + "src'" + products[i].imageTitle + "'alt='" + products[i].name + " image'>";
  item.innerHTML += "<p>" + products[i].description + "<p>";*/
  
      
  function handleForm() {
  console.log(document.filterBoss.name.value);
    event.preventDefault();
  }

function addItem(name,price){
  var item = {}
    item.name = name;
    item.price = price;
    products.push(item);
    // console.log(item, item.name, item.price);
  
}

function removeItem(name){
    for(var i = 0; i < products.length; i++)
      if(name == products[i].name){
        products.splice(i, 1);
        break;
  }
}

function myFunction() {
    products.sort();
    document.getElementById("cart").innerHTML = products;
}

//ToDo: Trigger on change of cart contents
function checkout(cartArray){
  //for loop through array, sum value of price attribute for each object
  var total = 0;
  
  for (var i=0; i < cartArray.length; i++){
    
    //console.log(cartArray[i].price);
   if(cartArray[i].price){
    total = total + cartArray[i].price;
   }
    //todo: print total as html to page, next to cart icon
  console.log(total);
  }
}
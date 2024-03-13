class ToyCar {
  constructor(name, brand, modal,color, material, scale, price, availability, ageGroup, dimensions, sku, vehicleType, description, rating, reviews) {
      this.name = name;
      this.brand = brand;
      this.modal = modal;
      this.color = color;
      this.material = material;
      this.scale = scale;
      this.price = price;
      this.availability = availability;
      this.ageGroup = ageGroup;
      this.dimensions = dimensions;
      this.sku = sku;
      this.vehicleType = vehicleType;
      this.description = description;
      this.rating = rating;
      this.reviews = reviews;
  }
}

let speedyRacer = new ToyCar("Han's Toyota Supra", "Toyota", "Supra","Orange", "Metal", "1/24",
 "17.99", "True", "3+ years", "7.5 x 3.5 x 2.5", "32097-JADA-ORANGE", 
 "Movie Car",
  "You'll be blown away by this awesome movie car from Jada Toys! This Han's 2020 Toyota Supra is a 1/24 scale model replica. It comes in orange and features opening hood, doors , detailed interior, and trunk. It's a great model for any movie car collection, and just right for unwavering Toyota enthusiasts!",
   "0.0", "0");

function displayProductDetails() {
  let table = document.getElementById('productTable');
  for (let key in speedyRacer) {
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      cell1.innerHTML = key;
      cell2.innerHTML = speedyRacer[key];
  }
}

function isValidScale (value){
  var regex = /^\d+\/\d+$/;
  return  regex.test(value);
}


function isValidPrice(value){
  var pattern = new RegExp('^[0-9]+(\\.[0-9]{1,2})?$');  
  return  pattern.test(value);

}


function isValidRating(value){
  var pattern = new RegExp('^[0-5]$');
  return  pattern.test(value);

}


function isValidMaterial(value){
  let regex = /^[A-Za-z]+$/;
  return  regex.test(value);

}

function updateFieldValue(fieldName) {
  let fieldValue = document.getElementById(`${fieldName}Value`).value;
  if (fieldName =="scale"){
    if(!isValidScale(fieldValue)){
      alert(" scale value should be in the form number/number")
            return
    }
  }

  if(fieldName =="price"){
    if(!isValidPrice(fieldValue)){
      alert(" Price should contain only numbers")
            return
    }
    else{
      if(!fieldValue.includes(".")){
        fieldValue+=".00"
      }
    }
  }

  
  if(fieldName=="rating"){
    if(!isValidRating(fieldValue)){
      alert("rating should always be a number between 0 to 5")
        return
      
    }
  }
  
  if(fieldName == "material"){
    if(!isValidMaterial(fieldValue)){
      alert(" material field should only contain aplhabets")
      return
    }
  }

  speedyRacer[fieldName] = fieldValue;
  document.getElementById('productTable').innerHTML = '';
  displayProductDetails();
}






const changeableFields = ["material", "scale", "price","rating"]




function addFormfields(){
  var container = document.getElementById("form-container");
  changeableFields.forEach(function(field) {
    var form = document.createElement("form");
    form.onsubmit = function(event) {
        event.preventDefault();
        updateFieldValue(field);
    };

    var label = document.createElement("label");
    label.for = field + "Value";
    label.textContent = field.charAt(0).toUpperCase() + field.slice(1) + " Value:";

    var input = document.createElement("input");
    input.type = "text";
    input.id = field + "Value";
    input.name = field + "Value";
    input.value = speedyRacer[field];

    var submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Update";

    form.appendChild(label);
    form.appendChild(document.createElement("br"));
    form.appendChild(input);
    form.appendChild(document.createElement("br"));
    form.appendChild(submit);

    container.appendChild(form);
});
};




window.onload = function(){
  displayProductDetails()
  addFormfields()
  
  
}
function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
}

function  readFormData(){
    var formData = {};
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["address"] = document.getElementById("address").value;
    formData["pincode"] = document.getElementById("pincode").value;
    formData["state"] = document.getElementById("state").value;
    formData["country"] = document.getElementById("country").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("Studentlist").getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);
    cell1 = newrow.insertCell(0);
    cell1.innerHTML= data.firstname;
    cell1 = newrow.insertCell(1);
    cell1.innerHTML= data.lastname;
    cell1 = newrow.insertCell(2);
    cell1.innerHTML= data.address;
    cell1 = newrow.insertCell(3);
    cell1.innerHTML= data.pincode;
    cell1 = newrow.insertCell(4);
    cell1.innerHTML= data.state;
    cell1 = newrow.insertCell(5);
    cell1.innerHTML= data.country;
}



function firstPage(params) {
    var gender, skin;
    if (document.getElementById('male').checked) {
        gender = "male"
    } else if (document.getElementById('female').checked) {
        gender = "female"
    } else {
        gender = "null";
    }

    if (document.getElementById('yellow').checked) {
        skin = "yellow"
    } else if (document.getElementById('pink').checked) {
        skin = "pink"
    } else if (document.getElementById('twotone').checked) {
        skin = "twotone"
    } else if (document.getElementById('tan').checked) {
        skin = "tan"
    } else {
        skin = "null";
    }

    if ((skin == "null" )||(gender == "null")) {
        alert("Plese choose your gender and skintone");
    }else{
        document.location.href = 'Page2.html';
    }

    //var result = confirm(P)
   
}




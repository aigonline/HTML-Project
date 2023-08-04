const form = document.getElementById('myform');
form.addEventListener('submit', function(event){
  event.preventDefault();
    form.reset();})
function submitButton() {
    window.alert('Your response has been recorded!');
} function printValue() {
    var name1 = document.form1.name1.value;
 var name2 = document.form1.name2.value;
    window.alert("Welcome: "+name1+ " " + name2)
}
function cart() {
    window.alert("Successfully Added To Cart")
}
function order() {
    window.alert("Your Order Has Been Placed")
}

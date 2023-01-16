function change1() {
  document.getElementById("pic").src= "./images/pink.png";
  document.getElementById("a6").style.backgroundColor="pink"
}
function change2() {
  document.getElementById("pic").src= "./images/blue.png";
  document.getElementById("a6").style.backgroundColor="blue"
}
function change3() {
  document.getElementById("pic").src= "./images/yellow.png";
  document.getElementById("a6").style.backgroundColor="yellow"
}
var a = document.getElementById("logo");
function readUrl(input){
    if(input.files){
        var reader=new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onload=(e)=>{
            a.src=e.target.result;
        }
    }
}
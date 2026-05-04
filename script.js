function selectPlan(plan){
document.getElementById("planSelect").value = plan;
document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

function showPopup(){
alert("✅ Your details have been submitted!");
location.reload();
return false;
}
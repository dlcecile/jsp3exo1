document.getElementById("image1").addEventListener("mouseover", function() {ajout(this.id)});

function ajout(id)
{
document.getElementById(id).addEventListener("mouseover", function() {this.style=`border: solid 3px red`});
document.getElementById(id).addEventListener("mouseout", function() {this.style=`border: none`});

}

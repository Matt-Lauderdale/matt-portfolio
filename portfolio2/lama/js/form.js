
function display(obj,id1,id2,id3,id4,id5,id6) {
txt = obj.options[obj.selectedIndex].value;
document.getElementById(id1).style.display = 'none';
document.getElementById(id2).style.display = 'none';
document.getElementById(id3).style.display = 'none';
document.getElementById(id4).style.display = 'none';
document.getElementById(id5).style.display = 'none';
document.getElementById(id6).style.display = 'none';
if ( txt.match(id1) ) {
document.getElementById(id1).style.display = 'block';
}
if ( txt.match(id2) ) {
document.getElementById(id2).style.display = 'block';
}
if ( txt.match(id3) ) {
document.getElementById(id3).style.display = 'block';
}
if ( txt.match(id4) ) {
document.getElementById(id4).style.display = 'block';
}
if ( txt.match(id5) ) {
document.getElementById(id5).style.display = 'block';
}
if ( txt.match(id6) ) {
document.getElementById(id6).style.display = 'block';
}
}


$('.paris').click(function(){
	$('.paristruck').show()
})
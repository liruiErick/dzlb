var zoomRate = 34;

function init(contentid){
	document.all[contentid].style.zoom = '100%';
}
function zoomInOut(contentid) {
	document.all[contentid].style.zoom = parseInt(document.all[contentid].style.zoom)-zoomRate+'%'
}	

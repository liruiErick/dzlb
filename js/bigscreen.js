// 判断各种浏览器，找到正确的方法
function launchFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

window.onload = function(){
	//launchFullscreen(document.documentElement); // 整个网页
}

window.onresize = function(){
	//alert(111);
	adjustElement();
}

function adjustElement(){
	var lastHeight = $('.investigation').height();
	var height=$(window).height();
	//alert(height-lastHeight);
	
	//$('body').css("height",height);
	$('.add').css("height",height);
	$('.investigation').css("height",height);
	
	$('.scheme').css("height",height);
	$('.type').css("height",height);
	$('.br-hardware').css("height",height);
	$('.br-academic-conference').css("height",height);
	$('.br-department-construction').css("height",height);
	$('.br-patient-education').css("height",height);
	$('.br-generating-scheme').css("height",height);
	$('.cb-hardware').css("height",height);
	$('.cb-academic-conference').css("height",height);
	$('.cb-department-construction').css("height",height);
	$('.cb-patient-education').css("height",height);
	$('.cb-generating-scheme').css("height",height);
	$('.save-result').css("height",height);
	
	if(height>lastHeight){
		$('.title h3').css("margin-top","60px");
		$('.br-hardware table,.br-academic-conference table,.br-department-construction table,.br-patient-education table,.br-generating-scheme table,.cb-hardware table,.cb-academic-conference table,.cb-department-construction table,.cb-patient-education table,.cb-generating-scheme table').css("margin-top","40px");
	}else{
		$('.title h3').css("margin-top","20px");
		$('.br-hardware table,.br-academic-conference table,.br-department-construction table,.br-patient-education table,.br-generating-scheme table,.cb-hardware table,.cb-academic-conference table,.cb-department-construction table,.cb-patient-education table,.cb-generating-scheme table').css("margin-top","0");
	}
}

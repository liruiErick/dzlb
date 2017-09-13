//浮动显示pdf文档；
var myModal=null;
function showpdf(){
	if(myModal==null){
		myModal = new jBox('Modal',{width:960,height:600,attatch:$('#pdfsrc')});
	}
	myModal.open();
	myModal.setContent($('#pdfview'));
	myModal.setTitle("文献原文");	
}

//课时调研
$(document).ready(function(){
	$("#addhospital").click(function(){
    	var hospital=$("#hospital").val(); 
    		
    	localStorage.setItem("hospital_va",hospital);	        
    	if(hospital == null || hospital == ""){	
    		alert("请填写医院！");
    		$("#hospital").focus();
    	}else{
    		$("#hospitaltrueName").html(hospital);
			$(".add").addClass("hide");
			$(".containers").removeClass("hide");
			$("body").css("overflow","hidden");
    	}    	
    	
    	//顺便把文献准备好；
    	var options = {
			width:"960px",
		    height:"600px",
		    pdfOpenParams: { page: '0' }
		};		
		PDFObject.embed("literature.pdf", "#pdfview",options);
		launchFullscreen();
    });
    //轮播过后 点击 进入选择页面  
	$(".select").click(function(){	
		$(".containers").addClass("hide");
		$(".investigation").removeClass("hide");
		$("#1").removeClass("hide");    
		$("body").css("overflow","auto");
    });
    //调研答案选中后加颜色
    //第一题选中结果
    $("#questions1 a").click(function(){
    	$("#questions1 a span").css("border","1px solid #455260");
    	$("#questions1 a span").css("background","#FFFFFF");
    	$(this).children("span").css("border","1px solid #91d646");
    	$(this).children("span").css("background","#91d646");
    	$("#checked1").attr("value",$(this).attr("value"));
    });
    //第二题选中结果
    $("#questions2 a").click(function(){
    	$("#questions2 a span").css("border","1px solid #455260");
    	$("#questions2 a span").css("background","#FFFFFF");
    	$(this).children("span").css("border","1px solid #91d646");
    	$(this).children("span").css("background","#91d646");
    	$("#checked2").attr("value",$(this).attr("value"));
    });
    //第三题选中结果
    $("#questions3 a").click(function(){
    	$("#questions3 a span").css("border","1px solid #455260");
    	$("#questions3 a span").css("background","#FFFFFF");
    	$(this).children("span").css("border","1px solid #91d646");
    	$(this).children("span").css("background","#91d646");
		$("#checked3").attr("value",$(this).attr("value"));
    });
    //第四题选中结果
    $("#questions4 a").click(function(){
    	$("#questions4 a span").css("border","1px solid #455260");
    	$("#questions4 a span").css("background","#FFFFFF");
    	$(this).children("span").css("border","1px solid #91d646");
    	$(this).children("span").css("background","#91d646");
		$("#checked4").attr("value",$(this).attr("value"));
    });
    //第五题选中结果
    $("#questions5 a").click(function(){
    	$("#questions5 a span").css("border","1px solid #455260");
    	$("#questions5 a span").css("background","#FFFFFF");
    	$(this).children("span").css("border","1px solid #91d646");
    	$(this).children("span").css("background","#91d646");
    	$("#checked5").attr("value",$(this).attr("value"));
    });
    //第六题选中结果
    $("#questions6 a").click(function(){
    	$("#questions6 a span").css("border","1px solid #455260");
    	$("#questions6 a span").css("background","#FFFFFF");
    	$(this).children("span").css("border","1px solid #91d646");
    	$(this).children("span").css("background","#91d646");
    	$("#checked6").attr("value",$(this).attr("value"));
    });
    //第七题选中结果   多选 
    $("#questions7 a").click(function(){
    	$(this).toggleClass("red");
    });
    //第八题选中结果
    $("#questions8 a").click(function(){
    	$("#questions8 a span").css("border","1px solid #455260");
    	$("#questions8 a span").css("background","#FFFFFF");
    	$(this).children("span").css("border","1px solid #91d646");
    	$(this).children("span").css("background","#91d646");
    	$("#checked8").attr("value",$(this).attr("value"));
    });
    //判断最后一题结果  多选
    $("#A").click(function(){
    	var isclassA=$("#A").hasClass('red');
    	if(isclassA){
            $("#checked7A").attr("value",$(this).attr("value"));
        }else{
        	 $("#checked7A").attr("value","");
        }
    });
    $("#B").click(function(){
    	var isclassB=$("#B").hasClass('red');
    	if(isclassB){
            $("#checked7B").attr("value",$(this).attr("value"));
        }else{
        	$("#checked7B").attr("value","");
        }
    });
    $("#C").click(function(){
    	var isclassC=$("#C").hasClass('red'); 
    	if(isclassC){
            $("#checked7C").attr("value",$(this).attr("value"));
        }else{
        	$("#checked7C").attr("value","");
        }    	
    });
    $("#D").click(function(){
    	var isclassD=$("#D").hasClass('red'); 
    	if(isclassD){
            $("#checked7D").attr("value",$(this).attr("value"));
        }else{
        	$("#checked7D").attr("value","");
        }    	
    });
    $("#E").click(function(){
    	var isclassE=$("#E").hasClass('red'); 
    	if(isclassE){
            $("#checked7E").attr("value",$(this).attr("value"));
        }else{
        	$("#checked7E").attr("value","");
        }    	
    });
});

$(document).ready(function(){
	//点击上一题  下一题隐藏   上一题显示  
	$(".prev").click(function(){
    	var id = $(this).parent().parent("div").attr('id');
    	var prev = parseInt(id) - 1;
    	$("#"+id).addClass("hide");
    	$("#"+prev).removeClass("hide");
    });
	//点击下一题  上一题隐藏 下一题显示  
    $(".next").click(function(){
    	var id = $(this).parent().parent("div").attr('id');
    	var next = parseInt(id) + 1;   	
    	var inputval=$("#"+id+" input").val();
    	//判断是否选中 
    	if(inputval == null || inputval == ""){	
    		alert("请选择！");
    	}else{
    		$("#"+id).addClass("hide");
    		$("#"+next).removeClass("hide");
    	}      	
    });
    //第七题 多选  
    $(".next7").click(function(){
    	var checked7A=$("#checked7A").val();
    	var checked7B=$("#checked7B").val();
    	var checked7C=$("#checked7C").val();
    	var checked7D=$("#checked7D").val();
    	var checked7E=$("#checked7E").val();
    	//判断是否选中 
    	if(checked7A !="" || checked7B !="" || checked7C !="" || checked7D !="" || checked7E !=""){
    		$("#7").addClass("hide");
    		$("#8").removeClass("hide");
    	}else{
    		alert("请选择！");
    	}
    });
    //点击提交  判断最后一题不为空   
    $("#btnsubmit").click(function(){
    	var checked8=$("#8 input").val();
    	//判断是否选中 
    	if(checked8 !=""){
    		var height = $(window).height();
			$(".loading-div").css("height",height);
			$("#8").addClass("hide");
			$(".loading-div").removeClass("hide");
	    	setTimeout(function () {
				$(".loading-div").addClass("hide");
				$(".picture").removeClass("hide");

				//判断第四题 第五题 结果   
				var select4=$("#checked4").val();
				if(select4=="A" || select4=="B"){				
					$("#character-slider1").removeClass("hide");
					$("#character-slider1").addClass("special");
					var names=$("#character-slider1 .sc-selected img").attr("names");
					if(names == "huiyi"){
						$(".huiyi-button").parent("div.exhibition").addClass("exhibition-active");	
					}else if(names == "huanjiao"){
						$(".huanjiao-button").parent("div.exhibition").addClass("exhibition-active");
					}else if(names == "keshi"){
						$(".keshi-button").parent("div.exhibition").addClass("exhibition-active");
					}else if(names == "yingjian"){
						$(".yingjian-button").parent("div.exhibition").addClass("exhibition-active");
					}
				}else if(select4=="C" || select4=="D"){					
					$("#character-slider2").removeClass("hide");
					$("#character-slider2").addClass("special");
					var names=$("#character-slider2 .sc-selected img").attr("names");
					if(names == "huiyi"){
						$(".huiyi-button").parent("div.exhibition").addClass("exhibition-active");
					}else if(names == "huanjiao"){
						$(".huanjiao-button").parent("div.exhibition").addClass("exhibition-active");
					}else if(names == "keshi"){
						$(".keshi-button").parent("div.exhibition").addClass("exhibition-active");
					}else if(names == "yingjian"){
						$(".yingjian-button").parent("div.exhibition").addClass("exhibition-active");
					}
				}else if(select4=="E"){				
					$("#character-slider3").removeClass("hide");	
					$("#character-slider3").addClass("special");
					var names=$("#character-slider3 .sc-selected img").attr("names");
					if(names == "huiyi"){
						$(".huiyi-button").parent("div.exhibition").addClass("exhibition-active");	
					}else if(names == "huanjiao"){
						$(".huanjiao-button").parent("div.exhibition").addClass("exhibition-active");
					}else if(names == "keshi"){
						$(".keshi-button").parent("div.exhibition").addClass("exhibition-active");
					}else if(names == "yingjian"){
						$(".yingjian-button").parent("div.exhibition").addClass("exhibition-active");
					}
				}else if(select4=="F"){					
					$("#character-slider4").removeClass("hide");
					$("#character-slider4").addClass("special");
					var names=$("#character-slider4 .sc-selected img").attr("names");
					if(names == "huiyi"){
						$(".huiyi-button").parent("div.exhibition").addClass("exhibition-active");	
					}else if(names == "huanjiao"){
						$(".huanjiao-button").parent("div.exhibition").addClass("exhibition-active");
					}else if(names == "keshi"){
						$(".keshi-button").parent("div.exhibition").addClass("exhibition-active");
					}else if(names == "yingjian"){
						$(".yingjian-button").parent("div.exhibition").addClass("exhibition-active");
					}
				}					
			}, 2000);
    	}else{
    		alert("请选择！");
    	}
    });
    //答题完后 点击确认  第一轮结束 
    $("#btnConfirm").click(function(){
    	var result=$(".first-round table").html();
    	$(".save-result table").html(result);
    	$(".scheme").addClass("hide");
		$(".save-result").removeClass("hide");
    });
    
    //点击下一页，跳转生成方案页面
    $("#nextpage").click(function(){
    	$(".investigation").addClass("hide");
		$(".picture").addClass("hide");
    	$(".scheme").removeClass("hide");		
		//判断第四题 结果   
		var select4=$("#checked4").val();
		if(select4=="A" || select4=="B"){
			$(".four-situation").removeClass("hide");
			var v=$(".four-situation").html();
			$(".first-round table").html(v);
		}else if(select4=="C" || select4=="D"){
			$(".three-situation").removeClass("hide");
			var v=$(".three-situation").html();
			$(".first-round table").html(v);
		}else if(select4=="E"){
			$(".two-situation").removeClass("hide");
			var v=$(".two-situation").html();
			$(".first-round table").html(v);
		}else if(select4=="F"){
			$(".one-situation").removeClass("hide");
			var v=$(".one-situation").html();
			$(".first-round table").html(v);
		}	
	});	
    //点击其他方案    第二轮开始 
    $("#other").click(function(){
    	$(".scheme").addClass("hide");
		$(".type").removeClass("hide");
    });
    
    /***********百人中心  问卷答题效果***********************/
    //点击百人中心       
    $("#hundred-center").click(function(){
    	$(".type").addClass("hide");
		$(".br-hardware").removeClass("hide");
    });
    //点击硬件投入 的 下一页       
    $("#br-hardware-next").click(function(){
    	//判断是否选中
    	var gray1=$(".br-hardware > table > tbody > tr:eq(0)").hasClass("gray");
    	var gray2=$(".br-hardware > table > tbody > tr:eq(1)").hasClass("gray");
    	var gray3=$(".br-hardware > table > tbody > tr:eq(2)").hasClass("gray");
		if(gray1 == true || gray2 == true || gray3 == true){
	    	//硬件  选择结果
	    	var yingjian1=$(".br-hardware > table > tbody > tr:eq(0)").hasClass("gray");
			if(yingjian1 == true){			
				var yingjian1_content=$(".br-hardware > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var yingjian1_detail=$(".br-hardware > table > tbody > tr:eq(0)").find("td:eq(1)").text();
	    		$(".br-yingjian1-content").attr("value",yingjian1_content);
	    		$(".br-yingjian1-detail").attr("value",yingjian1_detail);
			}else{
				$(".br-yingjian1-content").attr("value","");
	    		$(".br-yingjian1-detail").attr("value","");
			}
	    	var yingjian2=$(".br-hardware > table > tbody > tr:eq(1)").hasClass("gray");
			if(yingjian2 == true){
				var yingjian2_content=$(".br-hardware > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var	yingjian2_detail=$(".br-hardware > table > tbody > tr:eq(1)").find("td:eq(1)").text();
	    		$(".br-yingjian2-content").attr("value",yingjian2_content);
	    		$(".br-yingjian2-detail").attr("value",yingjian2_detail);
			}else{
				$(".br-yingjian2-content").attr("value","");
	    		$(".br-yingjian2-detail").attr("value","");
			}
	    	var yingjian3=$(".br-hardware > table > tbody > tr:eq(2)").hasClass("gray");
			if(yingjian3 == true){
				var yingjian3_content=$(".br-hardware > table > tbody > tr:eq(2)").find("td:eq(0)").text();
	    		var	yingjian3_detail=$(".br-hardware > table > tbody > tr:eq(2)").find("td:eq(1)").text();
	    		$(".br-yingjian3-content").attr("value",yingjian3_content);
	    		$(".br-yingjian3-detail").attr("value",yingjian3_detail);
			}else{
				$(".br-yingjian3-content").attr("value","");
	    		$(".br-yingjian3-detail").attr("value","");
			}
	    	$(".br-hardware").addClass("hide");
			$(".br-academic-conference").removeClass("hide");
		}else{
			alert("请选择！");
	
		}
    });
    //点击学术会议 的 下一页       
    $("#br-academic-next").click(function(){
    	//判断是否选中
    	var grayxue1=$(".br-academic-conference > table > tbody > tr:eq(0)").hasClass("gray");
    	var grayxue2=$(".br-academic-conference > table > tbody > tr:eq(1)").hasClass("gray");
    	var grayxue3=$(".br-academic-conference > table > tbody > tr:eq(2)").hasClass("gray");
    	var grayxue4=$(".br-academic-conference > table > tbody > tr:eq(3)").hasClass("gray");
		if(grayxue1 == true || grayxue2 == true || grayxue3 == true || grayxue4 == true){
    		//学术会议 选择结果
	    	var xueshu1=$(".br-academic-conference > table > tbody > tr:eq(0)").hasClass("gray");
			if(xueshu1 == true){			
				var xueshu1_content=$(".br-academic-conference > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var xueshu1_detail=$(".br-academic-conference > table > tbody > tr:eq(0)").find("td:eq(2)").text();
	    		$(".br-xueshu1-content").attr("value",xueshu1_content);
	    		$(".br-xueshu1-detail").attr("value",xueshu1_detail);
			}else{
				$(".br-xueshu1-content").attr("value","");
	    		$(".br-xueshu1-detail").attr("value","");
			}
			var xueshu2=$(".br-academic-conference > table > tbody > tr:eq(1)").hasClass("gray");
			if(xueshu2 == true){			
				var xueshu2_content=$(".br-academic-conference > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var xueshu2_detail=$(".br-academic-conference > table > tbody > tr:eq(1)").find("td:eq(2)").text();
	    		$(".br-xueshu2-content").attr("value",xueshu2_content);
	    		$(".br-xueshu2-detail").attr("value",xueshu2_detail);
			}else{
				$(".br-xueshu2-content").attr("value","");
	    		$(".br-xueshu2-detail").attr("value","");
			}
			var xueshu3=$(".br-academic-conference > table > tbody > tr:eq(2)").hasClass("gray");
			if(xueshu3 == true){			
				var xueshu3_content=$(".br-academic-conference > table > tbody > tr:eq(2)").find("td:eq(0)").text();
	    		var xueshu3_detail=$(".br-academic-conference > table > tbody > tr:eq(2)").find("td:eq(2)").text();
	    		$(".br-xueshu3-content").attr("value",xueshu3_content);
	    		$(".br-xueshu3-detail").attr("value",xueshu3_detail);
			}else{
				$(".br-xueshu3-content").attr("value","");
	    		$(".br-xueshu3-detail").attr("value","");
			}
			var xueshu4=$(".br-academic-conference > table > tbody > tr:eq(3)").hasClass("gray");
			if(xueshu4 == true){			
				var xueshu4_content=$(".br-academic-conference > table > tbody > tr:eq(3)").find("td:eq(0)").text();
	    		var xueshu4_detail=$(".br-academic-conference > table > tbody > tr:eq(3)").find("td:eq(2)").text();
	    		$(".br-xueshu4-content").attr("value",xueshu4_content);
	    		$(".br-xueshu4-detail").attr("value",xueshu4_detail);
			}else{
				$(".br-xueshu4-content").attr("value","");
	    		$(".br-xueshu4-detail").attr("value","");
			}
	    	$(".br-academic-conference").addClass("hide");
			$(".br-department-construction").removeClass("hide");
		}else{
			alert("请选择！");	
		}	
    });
    //点击科室建设 的 下一页       
    $("#br-department-next").click(function(){
    	//判断是否选中
    	var grayKE1=$(".br-department-construction > table > tbody > tr:eq(0)").hasClass("gray");
    	var grayKE2=$(".br-department-construction > table > tbody > tr:eq(1)").hasClass("gray");
		if(grayKE1 == true || grayKE2 == true){
	    	//科室建设 选择结果
	    	var keshi1=$(".br-department-construction > table > tbody > tr:eq(0)").hasClass("gray");
			if(keshi1 == true){			
				var keshi1_content=$(".br-department-construction > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var keshi1_detail=$(".br-department-construction > table > tbody > tr:eq(0)").find("td:eq(1)").text();
	    		$(".br-keshi1-content").attr("value",keshi1_content);
	    		$(".br-keshi1-detail").attr("value",keshi1_detail);
			}else{
				$(".br-keshi1-content").attr("value","");
	    		$(".br-keshi1-detail").attr("value","");
			}
			var keshi2=$(".br-department-construction > table > tbody > tr:eq(1)").hasClass("gray");
			if(keshi2 == true){			
				var keshi2_content=$(".br-department-construction > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var keshi2_detail=$(".br-department-construction > table > tbody > tr:eq(1)").find("td:eq(1)").text();
	    		$(".br-keshi2-content").attr("value",keshi2_content);
	    		$(".br-keshi2-detail").attr("value",keshi2_detail);
			}else{
				$(".br-keshi2-content").attr("value","");
	    		$(".br-keshi2-detail").attr("value","");
			}
	    	$(".br-department-construction").addClass("hide");
			$(".br-patient-education").removeClass("hide");
		}else{
			alert("请选择！");	
		}	
    });
    //点击结果   重选 
    $("#br-again").click(function(){
    	$(".br-generating-scheme").addClass("hide");
		$(".type").removeClass("hide");
    });
   //百人中心 问卷选择 结果  硬件投入
    //硬件投入、学术会议、科社建设、患者教育选择切换开关
    var brhardwareSwitch=true;
    var brconferenceSwitch=true;
    var brconstructionSwitch=true;
    var breducationSwitch=true;
    $(".br-hardware > table > tbody").find(".click").find("td:nth-of-type(2)").click(function(){
    	if(brhardwareSwitch){
    		$(this).parent().find("td").css("background","#E86767");
    	    $(this).prev().css("background","#f5a21b");
    	    $(this).parent().addClass("gray");
    	}
    	else{
            $(this).parent().find("td").css("background","-webkit-linear-gradient(left,#4998c5,#4393c1)");	
    	    $(this).prev().css("background","#f5a21b");
    	    $(this).parent().removeClass("gray");
    	}
    	brhardwareSwitch=!brhardwareSwitch;
    });
    //百人中心 问卷选择 结果  学术会议 
    $(".br-academic-conference > table > tbody").find(".click").find("td").each(function(){
    	$(this).click(function(){
    		if(brconferenceSwitch){
	    		$(this).parent().find("td").css("background","#E86767");
	    	    $(this).parent().children(".br-first").css("background","#f5a21b");
	    	    $(this).parent().addClass("gray");
	    	}
	    	else{
                $(this).parent().find("td").css("background","-webkit-linear-gradient(left,#4998c5,#4393c1)");	
	    	    $(this).parent().children(".br-first").css("background","#f5a21b");
	    	    $(this).parent().removeClass("gray");
	    	}
	    	brconferenceSwitch=!brconferenceSwitch;
    	});
    });
    //百人中心 问卷选择 结果  科室建设 
    $(".br-department-construction > table > tbody").find(".click").find("td:nth-of-type(2)").click(function(){
    	if(brconstructionSwitch){
    		$(this).parent().find("td").css("background","#E86767");
    	    $(this).prev().css("background","#f5a21b");
    	    $(this).parent().addClass("gray");
    	}
    	else{
            $(this).parent().find("td").css("background","-webkit-linear-gradient(left,#4998c5,#4393c1)");	
    	    $(this).parent().children(".br-first").css("background","#f5a21b");
    	    $(this).parent().removeClass("gray");
    	}
    	brconstructionSwitch=!brconstructionSwitch;
    });
    //百人中心 问卷选择 结果  患教项目
    $(".br-patient-education > table > tbody").find(".click").find("td:nth-of-type(2)").click(function(){
    	if(breducationSwitch){
    		$(this).parent().find("td").css("background","#E86767");
    	    $(this).prev().css("background","#f5a21b");
    	    $(this).parent().addClass("gray");
    	}
    	else{
            $(this).parent().find("td").css("background","-webkit-linear-gradient(left,#4998c5,#4393c1)");	
    	    $(this).prev().css("background","#f5a21b");
    	    $(this).parent().removeClass("gray");
    	}
    	breducationSwitch=!breducationSwitch;
    });    
    //百人中心 问卷选择 结果  提交
    $("#br-patient-next").click(function(){
    	//判断是否选中
    	var grayjiao1=$(".br-patient-education > table > tbody > tr:eq(0)").hasClass("gray");
    	var grayjiao2=$(".br-patient-education > table > tbody > tr:eq(1)").hasClass("gray");
    	var grayjiao3=$(".br-patient-education > table > tbody > tr:eq(2)").hasClass("gray");
    	var grayjiao4=$(".br-patient-education > table > tbody > tr:eq(3)").hasClass("gray");
    	var grayjiao5=$(".br-patient-education > table > tbody > tr:eq(4)").hasClass("gray");
		if(grayjiao1 == true || grayjiao2 == true || grayjiao3 == true || grayjiao4 == true || grayjiao5 == true){
    	
	    	//患教 选择结果
	    	var huanjiao1=$(".br-patient-education > table > tbody > tr:eq(0)").hasClass("gray");
			if(huanjiao1 == true){			
				var huanjiao1_content=$(".br-patient-education > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var huanjiao1_detail=$(".br-patient-education > table > tbody > tr:eq(0)").find("td:eq(1)").text();
	    		$(".br-huanjiao1-content").attr("value",huanjiao1_content);
	    		$(".br-huanjiao1-detail").attr("value",huanjiao1_detail);
			}else{
				$(".br-huanjiao1-content").attr("value","");
	    		$(".br-huanjiao1-detail").attr("value","");
			}
			var huanjiao2=$(".br-patient-education > table > tbody > tr:eq(1)").hasClass("gray");
			if(huanjiao2 == true){			
				var huanjiao2_content=$(".br-patient-education > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var huanjiao2_detail=$(".br-patient-education > table > tbody > tr:eq(1)").find("td:eq(1)").text();
	    		$(".br-huanjiao2-content").attr("value",huanjiao2_content);
	    		$(".br-huanjiao2-detail").attr("value",huanjiao2_detail);
			}else{
				$(".br-huanjiao2-content").attr("value","");
	    		$(".br-huanjiao2-detail").attr("value","");
			}
	    	var huanjiao3=$(".br-patient-education > table > tbody > tr:eq(2)").hasClass("gray");
			if(huanjiao3 == true){			
				var huanjiao3_content=$(".br-patient-education > table > tbody > tr:eq(2)").find("td:eq(0)").text();
	    		var huanjiao3_detail=$(".br-patient-education > table > tbody > tr:eq(2)").find("td:eq(1)").text();
	    		$(".br-huanjiao3-content").attr("value",huanjiao3_content);
	    		$(".br-huanjiao3-detail").attr("value",huanjiao3_detail);
			}else{
				$(".br-huanjiao3-content").attr("value","");
	    		$(".br-huanjiao3-detail").attr("value","");
			}
	    	var huanjiao4=$(".br-patient-education > table > tbody > tr:eq(3)").hasClass("gray");
			if(huanjiao4 == true){			
				var huanjiao4_content=$(".br-patient-education > table > tbody > tr:eq(3)").find("td:eq(0)").text();
	    		var huanjiao4_detail=$(".br-patient-education > table > tbody > tr:eq(3)").find("td:eq(1)").text();
	    		$(".br-huanjiao4-content").attr("value",huanjiao4_content);
	    		$(".br-huanjiao4-detail").attr("value",huanjiao4_detail);
			}else{
				$(".br-huanjiao4-content").attr("value","");
	    		$(".br-huanjiao4-detail").attr("value","");
			}
			var huanjiao5=$(".br-patient-education > table > tbody > tr:eq(4)").hasClass("gray");
			if(huanjiao5 == true){			
				var huanjiao5_content=$(".br-patient-education > table > tbody > tr:eq(4)").find("td:eq(0)").text();
	    		var huanjiao5_detail=$(".br-patient-education > table > tbody > tr:eq(4)").find("td:eq(1)").text();
	    		$(".br-huanjiao5-content").attr("value",huanjiao5_content);
	    		$(".br-huanjiao5-detail").attr("value",huanjiao5_detail);
			}else{
				$(".br-huanjiao5-content").attr("value","");
	    		$(".br-huanjiao5-detail").attr("value","");
			}
	    	$(".br-patient-education").addClass("hide");
			$(".br-generating-scheme").removeClass("hide");
	    	
	    	var hardwareNo = 0;
	    	var hardware_content=""; //硬件选择 内容 
	    	var hardware_detail="";   //细则
	    	var hardware_price=0;   //价值    	
	    	$(".br-hardware > table > tbody > tr").each(function(){
	    		var gray=$(this).hasClass("gray");
	    		if(gray == true){
	    			if(hardwareNo>0){
	    				hardware_content += "、";
	    				hardware_detail += "、";
	    			}
	    			hardware_content=hardware_content+$(this).find("td:eq(0)").text();
	    			hardware_detail=hardware_detail+$(this).find("td:eq(1)").text();
	    			hardware_price=parseFloat(hardware_price)+parseFloat($(this).find("td:eq(2)").text());
	    			hardwareNo++;
	    		}   		
	    	});
	    	var conferenceNo = 0;
	    	var conference_content="";  //学术会议 选择 内容 
	    	var conference_detail="";   //细则
	    	var conference_price=0;   //价值 
	    	$(".br-academic-conference > table > tbody > tr").each(function(){
	    		var gray=$(this).hasClass("gray");
	    		if(gray == true){
	    			if(conferenceNo>0){
	    				conference_content +="、";
	    				conference_detail +="、";
	    			}
	    			conference_content=conference_content+$(this).find("td:eq(0)").text();
	    			conference_detail=conference_detail+$(this).find("td:eq(2)").text();
	    			conference_price=parseFloat(conference_price)+parseFloat($(this).find("td:eq(3)").text());
	    			conferenceNo ++;
	    		}
	    	});
	    	
	    	var departmentNo = 0;
	    	var department_content="";  //科室建设  选择 内容 
	    	var department_detail="";   //细则
	    	var department_price=0;   //价值 
	    	$(".br-department-construction > table > tbody > tr").each(function(){
	    		var gray=$(this).hasClass("gray");
	    		if(gray == true){
	    			if(departmentNo>0){
	    				department_content += "、";
	    				department_detail +="、";
	    			}
	    			department_content=department_content+$(this).find("td:eq(0)").text();
	    			department_detail=department_detail+$(this).find("td:eq(1)").text();
	    			department_price=parseFloat(department_price)+parseFloat($(this).find("td:eq(2)").text());
	    			departmentNo++;
	    		}
	    	});
	    	
	    	var patientNo = 0;
	    	var patient_content="";  //患教项目 选择 内容 
	    	var patient_detail="";   //细则 
	    	var patient_price=0;   //价值 
	    	$(".br-patient-education > table > tbody > tr").each(function(){
	    		var gray=$(this).hasClass("gray");
	    		if(gray == true){
	    			if(patientNo>0){
	    				patient_content +="、";
	    				patient_detail += "、";
	    			}	    			
	    			patient_content=patient_content+$(this).find("td:eq(0)").text();
	    			patient_detail=patient_detail+$(this).find("td:eq(1)").text();
	    			patient_price=parseFloat(patient_price)+parseFloat($(this).find("td:eq(2)").text());
	    			patientNo++;
	    		}
	    	});
	    	var total = parseFloat(hardware_price)+parseFloat(conference_price)+parseFloat(department_price)+parseFloat(patient_price);
	    	$(".br-generating-scheme > table > tbody > tr:eq(0) > td:eq(1)").html(hardware_content);
	    	$(".br-generating-scheme > table > tbody > tr:eq(0) > td:eq(2)").html(hardware_detail);
	    	$(".br-generating-scheme > table > tbody > tr:eq(1) > td:eq(1)").html(conference_content);
	    	$(".br-generating-scheme > table > tbody > tr:eq(1) > td:eq(2)").html(conference_detail);
	    	$(".br-generating-scheme > table > tbody > tr:eq(2) > td:eq(1)").html(department_content);
	    	$(".br-generating-scheme > table > tbody > tr:eq(2) > td:eq(2)").html(department_detail);
	    	$(".br-generating-scheme > table > tbody > tr:eq(3) > td:eq(1)").html(patient_content);
	    	$(".br-generating-scheme > table > tbody > tr:eq(3) > td:eq(2)").html(patient_detail);
	    	if(total<50000){
	    		$(".br-generating-scheme > table > tbody > tr:eq(4) > td:eq(1)").html("与华润双鹤共同管理腹透患者100人");
	    	}else if(total >= 50000 && total <= 80000){
	    		$(".br-generating-scheme > table > tbody > tr:eq(4) > td:eq(1)").html("与华润双鹤共同管理腹透患者130人");
	    	}else{
	    		$(".br-generating-scheme > table > tbody > tr:eq(4) > td:eq(1)").html("与华润双鹤共同管理腹透患者150人");
	    	}  
	    	//生成结果点击变化内容效果
			//百人中心 方案提交  
			var bryingjian1content=$(".br-yingjian1-content").val();
			var bryingjian2content=$(".br-yingjian2-content").val();
			var bryingjian3content=$(".br-yingjian3-content").val();
			var dabiao=$(".br-data > tbody > tr:eq(4) > td:eq(1)").text();
			if(bryingjian1content != "" && bryingjian2content != "" && bryingjian3content != ""){
				$(".brzhanshi-data > tbody > tr:eq(0) > td:eq(1)").text(bryingjian1content+"、"+bryingjian2content+"、"+bryingjian3content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);	
			}else if(bryingjian1content != "" && bryingjian2content != ""){
				$(".brzhanshi-data > tbody > tr:eq(0) > td:eq(1)").text(bryingjian1content+"、"+bryingjian2content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(bryingjian2content != "" && bryingjian3content != ""){
				$(".brzhanshi-data > tbody > tr:eq(0) > td:eq(1)").text(bryingjian2content+"、"+bryingjian3content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(bryingjian1content != "" && bryingjian3content != ""){
				$(".brzhanshi-data > tbody > tr:eq(0) > td:eq(1)").text(bryingjian1content+"、"+bryingjian3content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(bryingjian1content != ""){
				$(".brzhanshi-data > tbody > tr:eq(0) > td:eq(1)").text(bryingjian1content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(bryingjian2content != ""){
				$(".brzhanshi-data > tbody > tr:eq(0) > td:eq(1)").text(bryingjian2content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(bryingjian3content != ""){
				$(".brzhanshi-data > tbody > tr:eq(0) > td:eq(1)").text(bryingjian3content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}
			//百人中心 学术会议
			var xueshu1content=$(".br-xueshu1-content").val();
			var xueshu2content=$(".br-xueshu2-content").val();
			var xueshu3content=$(".br-xueshu3-content").val();
			var xueshu4content=$(".br-xueshu4-content").val();
			var dabiao=$(".br-data > tbody > tr:eq(4) > td:eq(1)").text();
			if(xueshu1content != "" && xueshu2content != "" && xueshu3content != "" && xueshu4content != ""){
				$(".brzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu1content+"、"+xueshu2content+"、"+xueshu3content+"、"+xueshu4content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(xueshu1content != "" && xueshu2content != "" && xueshu3content != ""){
				$(".brzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu1content+"、"+xueshu2content+"、"+xueshu3content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(xueshu1content != "" && xueshu2content != "" && xueshu4content != ""){
				$(".brzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu1content+"、"+xueshu2content+"、"+xueshu4content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(xueshu1content != "" && xueshu3content != "" && xueshu4content != ""){
				$(".brzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu1content+"、"+xueshu3content+"、"+xueshu4content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(xueshu1content != "" && xueshu2content != ""){
				$(".brzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu1content+"、"+xueshu2content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(xueshu1content != "" && xueshu3content != ""){
				$(".brzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu1content+"、"+xueshu3content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(xueshu1content != "" && xueshu4content != ""){
				$(".brzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu1content+"、"+xueshu4content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(xueshu2content != "" && xueshu3content != ""){
				$(".brzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu2content+"、"+xueshu3content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(xueshu2content != "" && xueshu4content != ""){
				$(".brzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu2content+"、"+xueshu4content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(xueshu3content != "" && xueshu4content != ""){
				$(".brzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu3content+"、"+xueshu4content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(xueshu1content != ""){
				$(".brzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu1content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(xueshu2content != ""){
				$(".brzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu2content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(xueshu3content != ""){
				$(".brzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu3content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(xueshu4content != ""){
				$(".brzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu4content);
				$(".brdabiao").text(dabiao);
			}
			//百人中心 科室建设
			var brkeshi1content=$(".br-keshi1-content").val();
			var brkeshi2content=$(".br-keshi2-content").val();	
			var dabiao=$(".br-data > tbody > tr:eq(4) > td:eq(1)").text();
			if(brkeshi1content != "" && brkeshi2content != ""){		
				$(".brzhanshi-data > tbody > tr:eq(2) > td:eq(1)").text(brkeshi1content+"、"+brkeshi2content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(brkeshi1content != ""){
				$(".brzhanshi-data > tbody > tr:eq(2) > td:eq(1)").text(brkeshi1content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(brkeshi2content != ""){
				$(".brzhanshi-data > tbody > tr:eq(2) > td:eq(1)").text(brkeshi2content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}
			//百人中心 患者教育
			var huanjiao1content=$(".br-huanjiao1-content").val();
			var huanjiao2content=$(".br-huanjiao2-content").val();
			var huanjiao3content=$(".br-huanjiao3-content").val();
			var huanjiao4content=$(".br-huanjiao4-content").val();
			if(huanjiao1content != "" && huanjiao2content != "" && huanjiao3content != "" && huanjiao4content != ""){
				$(".brzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content+"、"+huanjiao2content+"、"+huanjiao3content+"、"+huanjiao4content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(huanjiao1content != "" && huanjiao2content != "" && huanjiao3content != ""){
				$(".brzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content+"、"+huanjiao2content+"、"+huanjiao3content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(huanjiao1content != "" && huanjiao2content != "" && huanjiao4content != ""){
				$(".brzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content+"、"+huanjiao2content+"、"+huanjiao4content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(huanjiao1content != "" && huanjiao3content != "" && huanjiao4content != ""){
				$(".brzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content+"、"+huanjiao3content+"、"+huanjiao4content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(huanjiao1content != "" && huanjiao2content != ""){
				$(".brzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content+"、"+huanjiao2content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(huanjiao1content != "" && huanjiao3content != ""){
				$(".brzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content+"、"+huanjiao3content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(huanjiao1content != "" && huanjiao4content != ""){
				$(".brzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content+"、"+huanjiao4content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(huanjiao2content != "" && huanjiao3content != ""){
				$(".brzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao2content+"、"+huanjiao3content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(huanjiao2content != "" && huanjiao4content != ""){
				$(".brzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao2content+"、"+huanjiao4content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(huanjiao3content != "" && huanjiao4content != ""){
				$(".brzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao3content+"、"+huanjiao4content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(huanjiao1content != ""){
				$(".brzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(huanjiao2content != ""){
				$(".brzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao2content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(huanjiao3content != ""){
				$(".brzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao3content);
				$(".brzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".brdabiao").text(dabiao);
			}else if(huanjiao4content != ""){
				$(".brzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao4content);
				$(".brdabiao").text(dabiao);
			}
		}else{
    		alert("请选择！");
    	}
    });
    //点击百人中心       问卷结果    确认    
    $("#br-generate").click(function(){
    	$(".br-generating-scheme").addClass("hide");
		$(".save-result").removeClass("hide");
    	var result=$(".br-generating-scheme .br-data").html();
    	$(".save-result table").html(result);
    	$("#questype").val("bairen");
    });
    
    /***********储备中心  问卷答题效果***********************/
    //点击储备中心       
    $("#reserve-center").click(function(){
    	$(".type").addClass("hide");
		$(".cb-hardware").removeClass("hide");
    });
    //点击硬件投入 的 下一页       
    $("#cb-hardware-next").click(function(){
    	//判断是否选中
    	var graych1=$(".cb-hardware > table > tbody > tr:eq(0)").hasClass("gray");
    	var graych2=$(".cb-hardware > table > tbody > tr:eq(1)").hasClass("gray");
    	var graych3=$(".cb-hardware > table > tbody > tr:eq(2)").hasClass("gray");
		if(graych1 == true || graych2 == true || graych3 == true){
	    	//硬件  选择结果
	    	var cbyingjian1=$(".cb-hardware > table > tbody > tr:eq(0)").hasClass("gray");
			if(cbyingjian1 == true){			
				var cbyingjian1_content=$(".cb-hardware > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var cbyingjian1_detail=$(".cb-hardware > table > tbody > tr:eq(0)").find("td:eq(1)").text();
	    		$(".cb-yingjian1-content").attr("value",cbyingjian1_content);
	    		$(".cb-yingjian1-detail").attr("value",cbyingjian1_detail);
			}else{
				$(".cb-yingjian1-content").attr("value","");
	    		$(".cb-yingjian1-detail").attr("value","");
			}
	    	var cbyingjian2=$(".cb-hardware > table > tbody > tr:eq(1)").hasClass("gray");
			if(cbyingjian2 == true){
				var cbyingjian2_content=$(".cb-hardware > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var	cbyingjian2_detail=$(".cb-hardware > table > tbody > tr:eq(1)").find("td:eq(1)").text();
	    		$(".cb-yingjian2-content").attr("value",cbyingjian2_content);
	    		$(".cb-yingjian2-detail").attr("value",cbyingjian2_detail);
			}else{
				$(".cb-yingjian2-content").attr("value","");
	    		$(".cb-yingjian2-detail").attr("value","");
			}
	    	var cbyingjian3=$(".cb-hardware > table > tbody > tr:eq(2)").hasClass("gray");
			if(cbyingjian3 == true){
				var cbyingjian3_content=$(".cb-hardware > table > tbody > tr:eq(2)").find("td:eq(0)").text();
	    		var	cbyingjian3_detail=$(".cb-hardware > table > tbody > tr:eq(2)").find("td:eq(1)").text();
	    		$(".cb-yingjian3-content").attr("value",cbyingjian3_content);
	    		$(".cb-yingjian3-detail").attr("value",cbyingjian3_detail);
			}else{
				$(".cb-yingjian3-content").attr("value","");
	    		$(".cb-yingjian3-detail").attr("value","");
			}
	    	$(".cb-hardware").addClass("hide");
			$(".cb-academic-conference").removeClass("hide");
		}else{
			alert("请选择！");
		}
    });
    //点击学术会议 的 下一页       
    $("#cb-academic-next").click(function(){
    	//判断是否选中
    	var graycbxue1=$(".cb-academic-conference > table > tbody > tr:eq(0)").hasClass("gray");
    	var graycbxue2=$(".cb-academic-conference > table > tbody > tr:eq(1)").hasClass("gray");
		if(graycbxue1 == true || graycbxue2 == true){
	    	//学术会议 选择结果
	    	var cbxueshu1=$(".cb-academic-conference > table > tbody > tr:eq(0)").hasClass("gray");
			if(cbxueshu1 == true){			
				var cbxueshu1_content=$(".cb-academic-conference > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var cbxueshu1_detail=$(".cb-academic-conference > table > tbody > tr:eq(0)").find("td:eq(2)").text();
	    		$(".cb-xueshu1-content").attr("value",cbxueshu1_content);
	    		$(".cb-xueshu1-detail").attr("value",cbxueshu1_detail);
			}else{
				$(".cb-xueshu1-content").attr("value","");
	    		$(".cb-xueshu1-detail").attr("value","");
			}
			var cbxueshu2=$(".cb-academic-conference > table > tbody > tr:eq(1)").hasClass("gray");
			if(cbxueshu2 == true){			
				var cbxueshu2_content=$(".cb-academic-conference > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var cbxueshu2_detail=$(".cb-academic-conference > table > tbody > tr:eq(1)").find("td:eq(2)").text();
	    		$(".cb-xueshu2-content").attr("value",cbxueshu2_content);
	    		$(".cb-xueshu2-detail").attr("value",cbxueshu2_detail);
			}else{
				$(".cb-xueshu2-content").attr("value","");
	    		$(".cb-xueshu2-detail").attr("value","");
			}
	    	$(".cb-academic-conference").addClass("hide");
			$(".cb-department-construction").removeClass("hide");
		}else{
			alert("请选择！");
		}	
    });
    //点击科室建设 的 下一页       
    $("#cb-department-next").click(function(){
    	//判断是否选中
    	var graycbKE1=$(".cb-department-construction > table > tbody > tr:eq(0)").hasClass("gray");
    	var graycbKE2=$(".cb-department-construction > table > tbody > tr:eq(1)").hasClass("gray");
		if(graycbKE1 == true || graycbKE2 == true){
	    	//科室建设 选择结果
	    	var cbkeshi1=$(".cb-department-construction > table > tbody > tr:eq(0)").hasClass("gray");
			if(cbkeshi1 == true){			
				var cbkeshi1_content=$(".cb-department-construction > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var cbkeshi1_detail=$(".cb-department-construction > table > tbody > tr:eq(0)").find("td:eq(1)").text();
	    		$(".cb-keshi1-content").attr("value",cbkeshi1_content);
	    		$(".cb-keshi1-detail").attr("value",cbkeshi1_detail);
			}else{
				$(".cb-keshi1-content").attr("value","");
	    		$(".cb-keshi1-detail").attr("value","");
			}
			var cbkeshi2=$(".cb-department-construction > table > tbody > tr:eq(1)").hasClass("gray");
			if(cbkeshi2 == true){			
				var cbkeshi2_content=$(".cb-department-construction > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var cbkeshi2_detail=$(".cb-department-construction > table > tbody > tr:eq(1)").find("td:eq(1)").text();
	    		$(".cb-keshi2-content").attr("value",cbkeshi2_content);
	    		$(".cb-keshi2-detail").attr("value",cbkeshi2_detail);
			}else{
				$(".cb-keshi2-content").attr("value","");
	    		$(".cb-keshi2-detail").attr("value","");
			}
	    	$(".cb-department-construction").addClass("hide");
			$(".cb-patient-education").removeClass("hide");
		}else{
			alert("请选择！");
		}	
    });

    //点击结果   重选 
    $("#cb-again").click(function(){
    	$(".cb-generating-scheme").addClass("hide");
		$(".type").removeClass("hide");
    });
    //储备中心 问卷选择 结果  硬件投入
    //硬件投入、学术会议、科社建设、患者教育选择切换开关
    var cbhardwareSwitch=true;
    var cbconferenceSwitch=true;
    var cbconstructionSwitch=true;
    var cbeducationSwitch=true;
    $(".cb-hardware > table > tbody").find(".click").find("td:nth-of-type(2)").click(function(){
    	if(cbhardwareSwitch){
    		$(this).parent().find("td").css("background","#E86767");
    	    $(this).prev().css("background","#f5a21b");
    	    $(this).parent().addClass("gray");
    	}
    	else{
    		$(this).parent().find("td").css("background","-webkit-linear-gradient(left,#4998c5,#4393c1)");	
    	    $(this).prev().css("background","#f5a21b");
    	    $(this).parent().removeClass("gray");
    	}
    	cbhardwareSwitch=!cbhardwareSwitch;
    });     
    //储备中心 问卷选择 结果  学术会议
    $(".cb-academic-conference > table > tbody").find(".click").find("td").each(function(){
    	$(this).click(function(){
    		if(cbconferenceSwitch){
	    		$(this).parent().find("td").css("background","#E86767");
	    	    $(this).parent().children(".br-first").css("background","#f5a21b");
	    	    $(this).parent().addClass("gray");
	    	}
	    	else{ 
	    		$(this).parent().find("td").css("background","-webkit-linear-gradient(left,#4998c5,#4393c1)");	
	    	    $(this).parent().children(".br-first").css("background","#f5a21b");
	    	    $(this).parent().removeClass("gray");
	    	}
	    	cbconferenceSwitch=!cbconferenceSwitch;
    	});
    });
    //储备中心 问卷选择 结果  科室建设
    $(".cb-department-construction > table > tbody").find(".click").find("td:nth-of-type(2)").click(function(){
    	if(cbconstructionSwitch){
    		$(this).parent().find("td").css("background","#E86767");
    	    $(this).prev().css("background","#f5a21b");
    	    $(this).parent().addClass("gray");
    	}
    	else{
    		$(this).parent().find("td").css("background","-webkit-linear-gradient(left,#4998c5,#4393c1)");	
    	    $(this).prev().css("background","#f5a21b");
    	    $(this).parent().removeClass("gray");
    	}
    	cbconstructionSwitch=!cbconstructionSwitch;
    });
    //储备中心 问卷选择 结果  患教项目
    $(".cb-patient-education > table > tbody").find(".click").find("td:nth-of-type(2)").click(function(){
    	if(cbeducationSwitch){
    		$(this).parent().find("td").css("background","#E86767");
    	    $(this).prev().css("background","#f5a21b");
    	    $(this).parent().addClass("gray");
    	}
    	else{
    		$(this).parent().find("td").css("background","-webkit-linear-gradient(left,#4998c5,#4393c1)");	
    	    $(this).prev().css("background","#f5a21b");
    	    $(this).parent().removeClass("gray");
    	}
    	cbeducationSwitch=!cbeducationSwitch;
    });
    
    //储备中心 问卷选择 结果  提交
    $("#cb-patient-next").click(function(){
    	//判断是否选中
    	var graycbjiao1=$(".cb-patient-education > table > tbody > tr:eq(0)").hasClass("gray");
    	var graycbjiao2=$(".cb-patient-education > table > tbody > tr:eq(1)").hasClass("gray");
    	var graycbjiao3=$(".cb-patient-education > table > tbody > tr:eq(2)").hasClass("gray");
    	var graycbjiao4=$(".cb-patient-education > table > tbody > tr:eq(3)").hasClass("gray");
		if(graycbjiao1 == true || graycbjiao2 == true || graycbjiao3 == true || graycbjiao4 == true){
    	
	    	//患教 选择结果
	    	var cbhuanjiao1=$(".cb-patient-education > table > tbody > tr:eq(0)").hasClass("gray");
			if(cbhuanjiao1 == true){			
				var cbhuanjiao1_content=$(".cb-patient-education > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var cbhuanjiao1_detail=$(".cb-patient-education > table > tbody > tr:eq(0)").find("td:eq(1)").text();
	    		$(".cb-huanjiao1-content").attr("value",cbhuanjiao1_content);
	    		$(".cb-huanjiao1-detail").attr("value",cbhuanjiao1_detail);
			}else{
				$(".cb-huanjiao1-content").attr("value","");
	    		$(".cb-huanjiao1-detail").attr("value","");
			}
			var cbhuanjiao2=$(".cb-patient-education > table > tbody > tr:eq(1)").hasClass("gray");
			if(cbhuanjiao2 == true){			
				var cbhuanjiao2_content=$(".cb-patient-education > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var cbhuanjiao2_detail=$(".cb-patient-education > table > tbody > tr:eq(1)").find("td:eq(1)").text();
	    		$(".cb-huanjiao2-content").attr("value",cbhuanjiao2_content);
	    		$(".cb-huanjiao2-detail").attr("value",cbhuanjiao2_detail);
			}else{
				$(".cb-huanjiao2-content").attr("value","");
	    		$(".cb-huanjiao2-detail").attr("value","");
			}
	    	var cbhuanjiao3=$(".cb-patient-education > table > tbody > tr:eq(2)").hasClass("gray");
			if(cbhuanjiao3 == true){			
				var cbhuanjiao3_content=$(".cb-patient-education > table > tbody > tr:eq(2)").find("td:eq(0)").text();
	    		var cbhuanjiao3_detail=$(".cb-patient-education > table > tbody > tr:eq(2)").find("td:eq(1)").text();
	    		$(".cb-huanjiao3-content").attr("value",cbhuanjiao3_content);
	    		$(".cb-huanjiao3-detail").attr("value",cbhuanjiao3_detail);
			}else{
				$(".cb-huanjiao3-content").attr("value","");
	    		$(".cb-huanjiao3-detail").attr("value","");
			}
	    	var cbhuanjiao4=$(".cb-patient-education > table > tbody > tr:eq(3)").hasClass("gray");
			if(cbhuanjiao4 == true){			
				var cbhuanjiao4_content=$(".cb-patient-education > table > tbody > tr:eq(3)").find("td:eq(0)").text();
	    		var cbhuanjiao4_detail=$(".cb-patient-education > table > tbody > tr:eq(3)").find("td:eq(1)").text();
	    		$(".cb-huanjiao4-content").attr("value",cbhuanjiao4_content);
	    		$(".cb-huanjiao4-detail").attr("value",cbhuanjiao4_detail);
			}else{
				$(".cb-huanjiao4-content").attr("value","");
	    		$(".cb-huanjiao4-detail").attr("value","");
			}
			
	    	$(".cb-patient-education").addClass("hide");
			$(".cb-generating-scheme").removeClass("hide");
			
			var hardwareNo=0;
	    	var hardware_content=""; //硬件选择 内容 
	    	var hardware_detail="";   //细则 
	    	var hardware_price=0;   //价值 
	    	$(".cb-hardware > table > tbody > tr").each(function(){
	    		var gray=$(this).hasClass("gray");
	    		if(gray == true){
	    			if(hardwareNo>0){
	    				hardware_content += "、";
	    				hardware_detail += "、";
	    			}
	    			hardware_content=hardware_content+$(this).find("td:eq(0)").text();
	    			hardware_detail=hardware_detail+$(this).find("td:eq(1)").text();
	    			hardware_price=parseFloat(hardware_price)+parseFloat($(this).find("td:eq(2)").text());
	    			hardwareNo++;
	    		}
	    	});
	    	
	    	var conferenceNo=0;
	    	var conference_content="";  //学术会议 选择 内容 
	    	var conference_detail="";   //细则 
	    	var conference_price=0;   //价值 
	    	$(".cb-academic-conference > table > tbody > tr").each(function(){
	    		var gray=$(this).hasClass("gray");
	    		if(gray == true){
	    			if(conferenceNo>0){
	    				conference_content += "、";
	    				conference_detail += "、";
	    			}
	    			conference_content=conference_content+$(this).find("td:eq(0)").text();
	    		    conference_detail=conference_detail+$(this).find("td:eq(2)").text();
	    			conference_price=parseFloat(conference_price)+parseFloat($(this).find("td:eq(3)").text());
	    			conferenceNo++;
	    		}
	    	});
	    	
	    	var departmentNo = 0;
	    	var department_content="";  //科室建设  选择 内容 
	    	var department_detail="";   //细则 
	    	var department_price=0;   //价值 
	    	$(".cb-department-construction > table > tbody > tr").each(function(){
	    		var gray=$(this).hasClass("gray");
	    		if(gray == true){
	    			if(departmentNo>0){
	    				department_content += "、";
	    				department_detail +="、";
	    			}
	    			department_content=department_content+$(this).find("td:eq(0)").text();
	    			department_detail=department_detail+$(this).find("td:eq(1)").text();
	    			department_price=parseFloat(department_price)+parseFloat($(this).find("td:eq(2)").text());
	    			departmentNo ++;
	    		}
	    	});
	    	
	    	var patientNo = 0;
	    	var patient_content="";  //患教项目 选择 内容 
	    	var patient_detail="";   //细则 
	    	var patient_price=0;   //价值 
	    	$(".cb-patient-education > table > tbody > tr").each(function(){
	    		var gray=$(this).hasClass("gray");
	    		if(gray == true){
	    			if(patientNo>0){
	    				patient_content += "、";
	    				patient_detail += "、";
	    			}
	    			patient_content=patient_content+$(this).find("td:eq(0)").text();
	    			patient_detail=patient_detail+$(this).find("td:eq(1)").text();
	    			patient_price=parseFloat(patient_price)+parseFloat($(this).find("td:eq(2)").text());
	    			patientNo++;
	    		}
	    	});
	    	var total = parseFloat(hardware_price)+parseFloat(conference_price)+parseFloat(department_price)+parseFloat(patient_price);
	    	$(".cb-generating-scheme > table > tbody > tr:eq(0) > td:eq(1)").html(hardware_content);
	    	$(".cb-generating-scheme > table > tbody > tr:eq(0) > td:eq(2)").html(hardware_detail);
	    	$(".cb-generating-scheme > table > tbody > tr:eq(1) > td:eq(1)").html(conference_content);
	    	$(".cb-generating-scheme > table > tbody > tr:eq(1) > td:eq(2)").html(conference_detail);
	    	$(".cb-generating-scheme > table > tbody > tr:eq(2) > td:eq(1)").html(department_content);
	    	$(".cb-generating-scheme > table > tbody > tr:eq(2) > td:eq(2)").html(department_detail);
	    	$(".cb-generating-scheme > table > tbody > tr:eq(3) > td:eq(1)").html(patient_content);   	
	    	$(".cb-generating-scheme > table > tbody > tr:eq(3) > td:eq(2)").html(patient_detail); 
	    	if(total<10000){
	    		$(".cb-generating-scheme > table > tbody > tr:eq(4) > td:eq(1)").html("与华润双鹤共同管理腹透患者30人");
	    	}else if(total >= 10000 && total <= 20000){
	    		$(".cb-generating-scheme > table > tbody > tr:eq(4) > td:eq(1)").html("与华润双鹤共同管理腹透患者50人");
	    	} 
	    	
	    	//储备 方案提交  
			var cbyingjian1content=$(".cb-yingjian1-content").val();
			var cbyingjian2content=$(".cb-yingjian2-content").val();
			var cbyingjian3content=$(".cb-yingjian3-content").val();
			var dabiao=$(".cb-data > tbody > tr:eq(4) > td:eq(1)").text();
			if(cbyingjian1content != "" && cbyingjian2content != "" && cbyingjian3content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(0) > td:eq(1)").text(cbyingjian1content+"、"+cbyingjian2content+"、"+cbyingjian3content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);	
			}else if(cbyingjian1content != "" && cbyingjian2content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(0) > td:eq(1)").text(cbyingjian1content+"、"+cbyingjian2content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(cbyingjian2content != "" && cbyingjian3content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(0) > td:eq(1)").text(cbyingjian2content+"、"+cbyingjian3content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(cbyingjian1content != "" && cbyingjian3content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(0) > td:eq(1)").text(cbyingjian1content+"、"+cbyingjian3content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(cbyingjian1content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(0) > td:eq(1)").text(cbyingjian1content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(cbyingjian2content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(0) > td:eq(1)").text(cbyingjian2content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(cbyingjian3content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(0) > td:eq(1)").text(cbyingjian3content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}
			//储备 学术会议
			var xueshu1content=$(".cb-xueshu1-content").val();
			var xueshu2content=$(".cb-xueshu2-content").val();
			var dabiao=$(".cb-data > tbody > tr:eq(4) > td:eq(1)").text();
			if(xueshu1content != "" && xueshu2content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu1content+"、"+xueshu2content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(xueshu1content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu1content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(xueshu2content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(1) > td:eq(1)").text(xueshu2content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}
			//储备 科室建设
			var cbkeshi1content=$(".cb-keshi1-content").val();
			var cbkeshi2content=$(".cb-keshi2-content").val();	
			var dabiao=$(".cb-data > tbody > tr:eq(4) > td:eq(1)").text();
			if(cbkeshi1content != "" && cbkeshi2content != ""){		
				$(".cbzhanshi-data > tbody > tr:eq(2) > td:eq(1)").text(cbkeshi1content+"、"+cbkeshi2content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(cbkeshi1content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(2) > td:eq(1)").text(cbkeshi1content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(cbkeshi2content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(2) > td:eq(1)").text(cbkeshi2content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}
			//储备 患者教育
			var huanjiao1content=$(".cb-huanjiao1-content").val();
			var huanjiao2content=$(".cb-huanjiao2-content").val();
			var huanjiao3content=$(".cb-huanjiao3-content").val();
			var huanjiao4content=$(".cb-huanjiao4-content").val();
			if(huanjiao1content != "" && huanjiao2content != "" && huanjiao3content != "" && huanjiao4content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content+"、"+huanjiao2content+"、"+huanjiao3content+"、"+huanjiao4content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(huanjiao1content != "" && huanjiao2content != "" && huanjiao3content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content+"、"+huanjiao2content+"、"+huanjiao3content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(huanjiao1content != "" && huanjiao2content != "" && huanjiao4content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content+"、"+huanjiao2content+"、"+huanjiao4content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(huanjiao1content != "" && huanjiao3content != "" && huanjiao4content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content+"、"+huanjiao3content+"、"+huanjiao4content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(huanjiao1content != "" && huanjiao2content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content+"、"+huanjiao2content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(huanjiao1content != "" && huanjiao3content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content+"、"+huanjiao3content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(huanjiao1content != "" && huanjiao4content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content+"、"+huanjiao4content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(huanjiao2content != "" && huanjiao3content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao2content+"、"+huanjiao3content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(huanjiao2content != "" && huanjiao4content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao2content+"、"+huanjiao4content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(huanjiao3content != "" && huanjiao4content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao3content+"、"+huanjiao4content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(huanjiao1content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao1content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(huanjiao2content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao2content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(huanjiao3content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao3content);
				$(".cbzhanshi-data > tbody > tr:eq(4)").addClass("hide");
				$(".cbdabiao").text(dabiao);
			}else if(huanjiao4content != ""){
				$(".cbzhanshi-data > tbody > tr:eq(3) > td:eq(1)").text(huanjiao4content);
				$(".cbdabiao").text(dabiao);
			}
		}else{
    		alert("请选择！");
    	}
    });    
    //点击储备中心       问卷结果    确认    
    $("#cb-generate").click(function(){
    	$(".cb-generating-scheme").addClass("hide");
		$(".save-result").removeClass("hide");
    	var result=$(".cb-generating-scheme table").html();
    	$(".save-result table").html(result);
    	$("#questype").val("chubei");
    });
    
});




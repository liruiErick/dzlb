var db ;   //operating object of indexDB
var arrayKey=[];
var openRequest;
var lastCursor;
var indexedDB = window.indexedDB || window.webkitIndexDB || window.mozIndexedDB || window.msIndexedDB;
var dbName = "electronicdb2016";
var tableName = "questionair";

//从页面获取用户输入数据
function getUserData(){
	var userdata = {};
	var now = new Date();  //添加时间 
	userdata.hospital = document.querySelector("#hospital").value; //获取医院;
	userdata.create_time = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()+' '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();

	userdata.baseinfo = {};
	userdata.baseinfo.question1 = document.querySelector("#checked1").value;
	userdata.baseinfo.question2 = document.querySelector("#checked2").value;
	userdata.baseinfo.question3 = document.querySelector("#checked3").value;
	userdata.baseinfo.question4 = document.querySelector("#checked4").value;
	userdata.baseinfo.question5 = document.querySelector("#checked5").value;
	userdata.baseinfo.question6 = document.querySelector("#checked6").value;
	userdata.baseinfo.question8 = document.querySelector("#checked8").value;
	
	//多选题 结果
	userdata.baseinfo.question7 = {};
	userdata.baseinfo.question7.a = document.querySelector("#checked7A").value;
	userdata.baseinfo.question7.b = document.querySelector("#checked7B").value;
	userdata.baseinfo.question7.c = document.querySelector("#checked7C").value;
	userdata.baseinfo.question7.d = document.querySelector("#checked7D").value;
	userdata.baseinfo.question7.e = document.querySelector("#checked7E").value;
	//生成结果   硬件投入   学术会议  患者教育  科室建设  达标内容   第一轮 结果  固定方案
	userdata.fixedplan = {};
	userdata.fixedplan.hardware_input = $(".first-round > table > tbody > tr:eq(0) > td:eq(1)").text();
	userdata.fixedplan.academic_conference = $(".first-round > table > tbody > tr:eq(1) > td:eq(1)").text();
	userdata.fixedplan.patient_education = $(".first-round > table > tbody > tr:eq(2) > td:eq(1)").text();
	userdata.fixedplan.department_construction = $(".first-round > table > tbody > tr:eq(3) > td:eq(1)").text();
	userdata.fixedplan.standard_content = $(".first-round > table > tbody > tr:eq(4) > td:eq(1)").text();
	//自己选择生成结果 
	var quetype=document.querySelector("#questype").value;	
	if(quetype=="bairen"){		
		var solution = {
			hardware_input : {
				hardware_input1 : {					
						title : $(".br-yingjian1-content").val(),
						detail : $(".br-yingjian1-detail").val()					
				},
				hardware_input2 : {
					title : $(".br-yingjian2-content").val(),
					detail : $(".br-yingjian2-detail").val()
				},
				hardware_input3 : {	
					title : $(".br-yingjian3-content").val(),
					detail : $(".br-yingjian3-detail").val()
				}
			},			
			academic_conference : {
				academic_conference1 : {
					title : $(".br-xueshu1-content").val(),
					detail : $(".br-xueshu1-detail").val()
				},
				academic_conference2 : {
					title : $(".br-xueshu2-content").val(),
					detail : $(".br-xueshu2-detail").val()
				},
				academic_conference3 : {
					title : $(".br-xueshu3-content").val(),
					detail : $(".br-xueshu3-detail").val()
				},
				academic_conference4 : {
					title : $(".br-xueshu4-content").val(),
					detail : $(".br-xueshu4-detail").val()
				}
			},			
			department_construction : {
				department_construction1 : {
					title : $(".br-keshi1-content").val(),
					detail : $(".br-keshi1-detail").val()
				},
				department_construction2 : {
					title : $(".br-keshi2-content").val(),
					detail : $(".br-keshi2-detail").val()
				}
			},
			
			patient_education : {
				patient_education1 : {
					title : $(".br-huanjiao1-content").val(),
					detail : $(".br-huanjiao1-detail").val()
				},
				patient_education2 : {
					title : $(".br-huanjiao2-content").val(),
					detail : $(".br-huanjiao2-detail").val()	
				},
				patient_education3 : {
					title : $(".br-huanjiao3-content").val(),
					detail : $(".br-huanjiao3-detail").val()
				},
				patient_education4 : {
					title : $(".br-huanjiao4-content").val(),
					detail : $(".br-huanjiao4-detail").val()
				},
				patient_education5 : {
					title : $(".br-huanjiao5-content").val(),
					detail : $(".br-huanjiao5-detail").val()
				}
			},			
			standard_content : $(".save-result > table > tbody > tr:eq(4) > td:eq(1)").text()
		};
	}else{
		var solution = {
			hardware_input : {
				hardware_input1 : {
					title : $(".cb-yingjian1-content").val(),
					detail : $(".cb-yingjian1-detail").val()	
				},
				hardware_input2 : {
					title : $(".cb-yingjian2-content").val(),
					detail : $(".cb-yingjian2-detail").val()
				},
				hardware_input3 : {
					title : $(".cb-yingjian3-content").val(),
					detail : $(".cb-yingjian3-detail").val()
				}
			},			
			academic_conference : {
				academic_conference1 : {
					title : $(".cb-xueshu1-content").val(),
					detail : $(".cb-xueshu1-detail").val()	
				},
				academic_conference2 : {
					title : $(".cb-xueshu2-content").val(),
					detail : $(".cb-xueshu2-detail").val()
				}
			},			
			department_construction : {
				department_construction1 : {
					title : $(".cb-keshi1-content").val(),
					detail : $(".cb-keshi1-detail").val()
				},
				department_construction2 : {
					title : $(".cb-keshi2-content").val(),
					detail : $(".cb-keshi2-detail").val()
				}
			},
			
			patient_education : {
				patient_education1 : {
					title : $(".cb-huanjiao1-content").val(),
					detail : $(".cb-huanjiao1-detail").val()
				},
				patient_education2 : {
					title : $(".cb-huanjiao2-content").val(),
					detail : $(".cb-huanjiao2-detail").val()
				},
				patient_education3 : {
					title : $(".cb-huanjiao3-content").val(),
					detail : $(".cb-huanjiao3-detail").val()
				},
				patient_education4 : {
					title : $(".cb-huanjiao4-content").val(),
					detail : $(".cb-huanjiao4-detail").val()
				},
				patient_education5 : {
					title : $(".cb-huanjiao5-content").val(),
					detail : $(".cb-huanjiao5-detail").val()
				}
			},			
			standard_content : $(".save-result > table > tbody > tr:eq(4) > td:eq(1)").text()
		};
	}	
	userdata.solution = solution;
	return userdata;
}

function init(){
	openRequest = indexedDB.open(dbName);  //open the databse or new one
	//handle setup
	openRequest.onupgradeneeded = function(e){    // new database or version change
		console.log("running onupgradeneeded");
		var thisDb = e.target.result;   
		console.log(thisDb.version);
		if(!thisDb.objectStoreNames.contains(tableName)){   //if contains the table
			console.log("I need to create the obejectstore");
			//   primary key id ,auto increment
			var objectStore = thisDb.createObjectStore(tableName,{keyPath:"id",autoIncrement:true});
			//set index ,if unique
			objectStore.createIndex("hospitalIndex","hospital",{unique:false});
			objectStore.createIndex("timeIndex","create_time",{unique:false});
		}
	}
	openRequest.onsuccess = function (e){
		db = e.target.result;
		console.log(db.version);
		db.onerror = function (){
			//generic error handleer for all errors targeted at this database'sd
			console.log("Database error:"+ event.target.errorCode);
			console.dir(event.target);
		};
		if(db.objectStoreNames.contains(tableName)){
			console.log("contains table "+ tableName);
			var transaction = db.transaction([tableName],"readwrite");
			transaction.oncomlete = function (event){
				console.log("All done!");
			};
			//var content = document.querySelector("#content");
			transaction.onerror = function(event){
				//Don't forget to handle errors
				console.dir(event);
			}
			//get the records from the table
			var objectStore  = transaction.objectStore(tableName);			
			//iterator
			objectStore.openCursor().onsuccess = function(event){
				var cursor = event.target.result;
				// console.log(cursor);
				if(cursor){
					lastCursor = cursor.key;
					cursor.continue();
				}else{
					console.log("Done with cursor");
				}
			};
			objectStore.openCursor().onerror = function (event){
				console.log(event);
			};
		}
	}

	openRequest.onerror = function(event){
		console.log("Error Open or Create Database:" + dbName);
	}
	
	//保存结果  生成结果页面
	function createResult(){
		$("body").css("overflow","auto");	
		var hospital = document.querySelector("#hospital").value;
		$(".join-hospital").text(hospital);
		var quetype=document.querySelector("#questype").value;	
		if(quetype=="bairen"){
			var yingjian1=$(".br-hardware > table > tbody > tr:eq(0)").hasClass("gray");			
			if(yingjian1 == true){			
				var yingjian1_content=$(".br-hardware > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var	yingjian1_detail=$(".br-hardware > table > tbody > tr:eq(0)").find("td:eq(1)").text();			
				var neir1="<tr><td>"+yingjian1_content+"</td><td>"+yingjian1_detail+"</td></tr>"			
				$("#yingjianresult1").append(neir1);
			}
			var yingjian2=$(".br-hardware > table > tbody > tr:eq(1)").hasClass("gray");
			if(yingjian2 == true){
				var yingjian2_content=$(".br-hardware > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var	yingjian2_detail=$(".br-hardware > table > tbody > tr:eq(1)").find("td:eq(1)").text();
				var neir2="<tr><td>"+yingjian2_content+"</td><td>"+yingjian2_detail+"</td></tr>"
				$("#yingjianresult1").append(neir2);
			}
			var yingjian3=$(".br-hardware > table > tbody > tr:eq(2)").hasClass("gray");
			if(yingjian3 == true){
				var yingjian3_content=$(".br-hardware > table > tbody > tr:eq(2)").find("td:eq(0)").text();
	    		var	yingjian3_detail=$(".br-hardware > table > tbody > tr:eq(2)").find("td:eq(1)").text();
				var neir3="<tr><td>"+yingjian3_content+"</td><td>"+yingjian3_detail+"</td></tr>";
				$("#yingjianresult1").append(neir3);
			}
			var xueshu1=$(".br-academic-conference > table > tbody > tr:eq(0)").hasClass("gray");
			if(xueshu1 == true){
				var xueshu1_content=$(".br-academic-conference > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var shijian1=$(".br-academic-conference > table > tbody > tr:eq(0)").find("td:eq(1)").text();
	    		var didian1=$(".br-academic-conference > table > tbody > tr:eq(0)").find("td:eq(2)").text();
	    		var xueshu1_detail=$(".br-academic-conference > table > tbody > tr:eq(0)").find("td:eq(3)").text();
				var xueshuneir1="<tr><td>"+xueshu1_content+"</td><td>"+shijian1+"</td><td>"+didian1+"</td></tr>";
				$("#xueshusult1").append(xueshuneir1);
			}
			
			var xueshu2=$(".br-academic-conference > table > tbody > tr:eq(1)").hasClass("gray");
			if(xueshu2 == true){
				var xueshu2_content=$(".br-academic-conference > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var shijian2=$(".br-academic-conference > table > tbody > tr:eq(1)").find("td:eq(1)").text();
	    		var didian2=$(".br-academic-conference > table > tbody > tr:eq(1)").find("td:eq(2)").text();
	    		var xueshu2_detail=$(".br-academic-conference > table > tbody > tr:eq(1)").find("td:eq(3)").text();
				var xueshuneir2="<tr><td>"+xueshu2_content+"</td><td>"+shijian2+"</td><td>"+didian2+"</td></tr>";
				$("#xueshusult1").append(xueshuneir2);
			}
			
			var xueshu3=$(".br-academic-conference > table > tbody > tr:eq(2)").hasClass("gray");
			if(xueshu3 == true){
				var xueshu3_content=$(".br-academic-conference > table > tbody > tr:eq(2)").find("td:eq(0)").text();
	    		var shijian3=$(".br-academic-conference > table > tbody > tr:eq(2)").find("td:eq(1)").text();
	    		var didian3=$(".br-academic-conference > table > tbody > tr:eq(2)").find("td:eq(2)").text();
	    		var xueshu3_detail=$(".br-academic-conference > table > tbody > tr:eq(2)").find("td:eq(3)").text();
				var xueshuneir3="<tr><td>"+xueshu3_content+"</td><td>"+shijian3+"</td><td>"+didian3+"</td></tr>";
				$("#xueshusult1").append(xueshuneir3);
			}
			var xueshu4=$(".br-academic-conference > table > tbody > tr:eq(3)").hasClass("gray");
			if(xueshu4 == true){
				var xueshu4_content=$(".br-academic-conference > table > tbody > tr:eq(3)").find("td:eq(0)").text();
	    		var shijian4=$(".br-academic-conference > table > tbody > tr:eq(3)").find("td:eq(1)").text();
	    		var didian4=$(".br-academic-conference > table > tbody > tr:eq(3)").find("td:eq(2)").text();
	    		var xueshu4_detail=$(".br-academic-conference > table > tbody > tr:eq(3)").find("td:eq(3)").text();
				var xueshuneir4="<tr><td>"+xueshu4_content+"</td><td>"+shijian4+"</td><td>"+didian4+"</td></tr>";
				$("#xueshusult1").append(xueshuneir4);
			}
			var keshi1=$(".br-department-construction > table > tbody > tr:eq(0)").hasClass("gray");	
			if(keshi1 == true){
				var keshi1_content=$(".br-department-construction > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var keshi1_detail=$(".br-department-construction > table > tbody > tr:eq(0)").find("td:eq(1)").text();
				var keshineir1="<tr><td>"+keshi1_content+"</td><td>"+keshi1_detail+"</td></tr>";
				$("#keshisult1").append(keshineir1);
			}
			var keshi2=$(".br-department-construction > table > tbody > tr:eq(1)").hasClass("gray");
			if(keshi2 == true){
				var keshi2_content=$(".br-department-construction > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var keshi2_detail=$(".br-department-construction > table > tbody > tr:eq(1)").find("td:eq(1)").text();
				var keshineir2="<tr><td>"+keshi2_content+"</td><td>"+keshi2_detail+"</td></tr>";
				$("#keshisult1").append(keshineir2);
			}
			
			var huanjiao1=$(".br-patient-education > table > tbody > tr:eq(0)").hasClass("gray");
			if(huanjiao1 == true){
				var huanjiao1_content=$(".br-patient-education > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var huanjiao1_detail=$(".br-patient-education > table > tbody > tr:eq(0)").find("td:eq(1)").text();
				var huanjiaoneir1="<tr><td>"+huanjiao1_content+"</td><td>"+huanjiao1_detail+"</td></tr>";
				$("#huanjiaosult1").append(huanjiaoneir1);
			}
			
			var huanjiao2=$(".br-patient-education > table > tbody > tr:eq(1)").hasClass("gray");
			if(huanjiao2 == true){
				var huanjiao2_content=$(".br-patient-education > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var huanjiao2_detail=$(".br-patient-education > table > tbody > tr:eq(1)").find("td:eq(1)").text();
				var huanjiaoneir2="<tr><td>"+huanjiao2_content+"</td><td>"+huanjiao2_detail+"</td></tr>";
				$("#huanjiaosult1").append(huanjiaoneir2);
			}
			var huanjiao3=$(".br-patient-education > table > tbody > tr:eq(2)").hasClass("gray");
			if(huanjiao3 == true){
				var huanjiao3_content=$(".br-patient-education > table > tbody > tr:eq(2)").find("td:eq(0)").text();
	    		var huanjiao3_detail=$(".br-patient-education > table > tbody > tr:eq(2)").find("td:eq(1)").text();
				var huanjiaoneir3="<tr><td>"+huanjiao3_content+"</td><td>"+huanjiao3_detail+"</td></tr>";
				$("#huanjiaosult1").append(huanjiaoneir3);
			}
			var huanjiao4=$(".br-patient-education > table > tbody > tr:eq(3)").hasClass("gray");
			if(huanjiao4 == true){
				var huanjiao4_content=$(".br-patient-education > table > tbody > tr:eq(3)").find("td:eq(0)").text();
	    		var huanjiao4_detail=$(".br-patient-education > table > tbody > tr:eq(3)").find("td:eq(1)").text();
				var huanjiaoneir4="<tr><td>"+huanjiao4_content+"</td><td>"+huanjiao4_detail+"</td></tr>";
				$("#huanjiaosult1").append(huanjiaoneir4);
			}
			
		}else if(quetype=="chubei"){
			var yingjian1=$(".cb-hardware > table > tbody > tr:eq(0)").hasClass("gray");
			if(yingjian1 == true){
				var yingjian1_content=$(".cb-hardware > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var	yingjian1_detail=$(".cb-hardware > table > tbody > tr:eq(0)").find("td:eq(1)").text();
				var neir1="<tr><td>"+yingjian1_content+"</td><td>"+yingjian1_detail+"</td></tr>";
				$("#yingjianresult1").append(neir1);
			}
			var yingjian2=$(".cb-hardware > table > tbody > tr:eq(1)").hasClass("gray");
			if(yingjian2 == true){
				var yingjian2_content=$(".cb-hardware > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var	yingjian2_detail=$(".cb-hardware > table > tbody > tr:eq(1)").find("td:eq(1)").text();
				var neir2="<tr><td>"+yingjian2_content+"</td><td>"+yingjian2_detail+"</td></tr>";
				$("#yingjianresult1").append(neir2);
			}
			var yingjian3=$(".cb-hardware > table > tbody > tr:eq(2)").hasClass("gray");
			if(yingjian3 == true){
				var yingjian3_content=$(".cb-hardware > table > tbody > tr:eq(2)").find("td:eq(0)").text();
	    		var	yingjian3_detail=$(".cb-hardware > table > tbody > tr:eq(2)").find("td:eq(1)").text();
				var neir3="<tr><td>"+yingjian3_content+"</td><td>"+yingjian3_detail+"</td></tr>";
				$("#yingjianresult1").append(neir3);
			}
			//修改
			var yingjian4=$(".cb-hardware > table > tbody > tr:eq(3)").hasClass("gray");
			if(yingjian4 == true){
				var yingjian4_content=$(".cb-hardware > table > tbody > tr:eq(3)").find("td:eq(0)").text();
	    		var	yingjian4_detail=$(".cb-hardware > table > tbody > tr:eq(3)").find("td:eq(1)").text();
				var neir4="<tr><td>"+yingjian4_content+"</td><td>"+yingjian4_detail+"</td></tr>";
				$("#yingjianresult1").append(neir4);
			}
			var xueshu1=$(".cb-academic-conference > table > tbody > tr:eq(0)").hasClass("gray");
			if(xueshu1 == true){
				var xueshu1_content=$(".cb-academic-conference > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var shijian1=$(".cb-academic-conference > table > tbody > tr:eq(0)").find("td:eq(1)").text();
	    		var didian1=$(".cb-academic-conference > table > tbody > tr:eq(0)").find("td:eq(2)").text();
	    		var xueshu1_detail=$(".cb-academic-conference > table > tbody > tr:eq(0)").find("td:eq(3)").text();
				var xueshuneir1="<tr><td>"+xueshu1_content+"</td><td>"+shijian1+"</td><td>"+didian1+"</td></tr>";
				$("#xueshusult1").append(xueshuneir1);
			}
			
			var xueshu2=$(".cb-academic-conference > table > tbody > tr:eq(1)").hasClass("gray");
			if(xueshu2 == true){
				var xueshu2_content=$(".cb-academic-conference > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var shijian2=$(".cb-academic-conference > table > tbody > tr:eq(1)").find("td:eq(1)").text();
	    		var didian2=$(".cb-academic-conference > table > tbody > tr:eq(1)").find("td:eq(2)").text();
	    		var xueshu2_detail=$(".cb-academic-conference > table > tbody > tr:eq(1)").find("td:eq(3)").text();
				var xueshuneir2="<tr><td>"+xueshu2_content+"</td><td>"+shijian2+"</td><td>"+didian2+"</td></tr>";
				$("#xueshusult1").append(xueshuneir2);
			}
			
			var keshi1=$(".cb-department-construction > table > tbody > tr:eq(0)").hasClass("gray");			
			if(keshi1 == true){
				var keshi1_content=$(".cb-department-construction > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var keshi1_detail=$(".cb-department-construction > table > tbody > tr:eq(0)").find("td:eq(1)").text();
				var keshineir1="<tr><td>"+keshi1_content+"</td><td>"+keshi1_detail+"</td></tr>";
				$("#keshisult1").append(keshineir1);
			}
			var keshi2=$(".cb-department-construction > table > tbody > tr:eq(1)").hasClass("gray");
			if(keshi2 == true){
				var keshi2_content=$(".cb-department-construction > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var keshi2_detail=$(".cb-department-construction > table > tbody > tr:eq(1)").find("td:eq(1)").text();
				var keshineir2="<tr><td>"+keshi2_content+"</td><td>"+keshi2_detail+"</td></tr>";
				$("#keshisult1").append(keshineir2);
			}
			
			var huanjiao1=$(".cb-patient-education > table > tbody > tr:eq(0)").hasClass("gray");
			if(huanjiao1 == true){
				var huanjiao1_content=$(".cb-patient-education > table > tbody > tr:eq(0)").find("td:eq(0)").text();
	    		var huanjiao1_detail=$(".cb-patient-education > table > tbody > tr:eq(0)").find("td:eq(1)").text();
				var huanjiaoneir1="<tr><td>"+huanjiao1_content+"</td><td>"+huanjiao1_detail+"</td></tr>";
				$("#huanjiaosult1").append(huanjiaoneir1);
			}
			
			var huanjiao2=$(".cb-patient-education > table > tbody > tr:eq(1)").hasClass("gray");
			if(huanjiao2 == true){
				var huanjiao2_content=$(".cb-patient-education > table > tbody > tr:eq(1)").find("td:eq(0)").text();
	    		var huanjiao2_detail=$(".cb-patient-education > table > tbody > tr:eq(1)").find("td:eq(1)").text();
				var huanjiaoneir2="<tr><td>"+huanjiao2_content+"</td><td>"+huanjiao2_detail+"</td></tr>";
				$("#huanjiaosult1").append(huanjiaoneir2);
			}
			var huanjiao3=$(".cb-patient-education > table > tbody > tr:eq(2)").hasClass("gray");
			if(huanjiao3 == true){
				var huanjiao3_content=$(".cb-patient-education > table > tbody > tr:eq(2)").find("td:eq(0)").text();
	    		var huanjiao3_detail=$(".cb-patient-education > table > tbody > tr:eq(2)").find("td:eq(1)").text();
				var huanjiaoneir3="<tr><td>"+huanjiao3_content+"</td><td>"+huanjiao3_detail+"</td></tr>";
				$("#huanjiaosult1").append(huanjiaoneir3);
			}
			var huanjiao4=$(".cb-patient-education > table > tbody > tr:eq(3)").hasClass("gray");
			if(huanjiao4 == true){
				var huanjiao4_content=$(".cb-patient-education > table > tbody > tr:eq(3)").find("td:eq(0)").text();
	    		var huanjiao4_detail=$(".cb-patient-education > table > tbody > tr:eq(3)").find("td:eq(1)").text();
				var huanjiaoneir4="<tr><td>"+huanjiao4_content+"</td><td>"+huanjiao4_detail+"</td></tr>";
				$("#huanjiaosult1").append(huanjiaoneir4);
			}
		}else{
			
			$(".yingjianresult").addClass("hide");
			var yinjiana=$(".first-round > table > tbody > tr:eq(0)").find("td:eq(1)").text();
			var yinjianx="<table class='changshang' id='yinjianx'><thead><tr><th>项目</th><th>内容</th></tr></thead><tbody><tr><td>双鹤投入硬件</td><td>"+yinjiana+"</td></tr></tbody></table>";
			$("#daanyingjian").append(yinjianx);
			
			$(".xueshuresult").addClass("hide");
			var xueshua=$(".first-round > table > tbody > tr:eq(1)").find("td:eq(1)").text();
			var xueshux="<table class='changshang' id='xueshux'><thead><tr><th>项目</th><th>内容</th></tr></thead><tbody><tr><td>双鹤投入技术</td><td>"+xueshua+"</td></tr></tbody></table>";
			$("#daanxun").append(xueshux);
			
			$(".huanjiaoresult").addClass("hide");
			var huanjiaoa=$(".first-round > table > tbody > tr:eq(2)").find("td:eq(1)").text();
			var huanjiaox="<table class='changshang' id='huanjiaox'><thead><tr><th>项目</th><th>内容</th></tr></thead><tbody><tr><td>双鹤投入患教</td><td>"+huanjiaoa+"</td></tr></tbody></table>";
			$("#daanhuanjiao").append(huanjiaox);
			
			$(".keshiresult").addClass("hide");
			var keshia=$(".first-round > table > tbody > tr:eq(3)").find("td:eq(1)").text();
			var keshix="<table class='changshang' id='keshix'><thead><tr><th>项目</th><th>内容</th></tr></thead><tbody><tr><td>双鹤投入科室</td><td>"+keshia+"</td></tr></tbody></table>";
			$("#daankeshi").append(keshix);	
		}
			
	}

	// add new record 
	document.querySelector("#save-result").addEventListener("click",function(){
		createResult();		
		
		var userData = getUserData();
		var transaction = db.transaction([tableName],"readwrite");
		transaction.oncomlete = function(e){
			console.log("transaction complete!");
		}
		transaction.onerror = function(e){
			console.dir(event);
		}
		
		userData.result= $(".result-html").html();
		
		var objectStore = transaction.objectStore(tableName);
		objectStore.add(userData);
		objectStore.openCursor().onsuccess = function(event){
			alert("数据添加成功！");
			$(".save-result").addClass("hide");
			$("#floatbutton").removeClass("hide");
		    $(".result-html").removeClass("hide");	
			
			cursor = event.target.result;
			var key;
			if(lastCursor==null){
				key = cursor.key;
				lastCursor = key;
			}else{
				key = ++lastCursor;
			}
			//render({key:key,name:name,phone:phone,address:address});
			//render({key:cursor.key,hospital:cursor.value["hospital"],create_time:cursor.value["create_time"]});
			console.log("success add new record ! key:"+key);
			//console.dir(userData);
			$("#resultid").val(key);
		}
	},false);
	
	//删除指定id
	function deleteRecord(id){
		var transaction = db.transaction([tableName],"readwrite");
		transaction.oncomlete = function(e){
			console.log("transction complete!");
		}
		transaction.onerror = function(e){
			console.dir(event);
		};
		var objectStore = transaction.objectStore(tableName);//get the obejct objectStore
		var removeKey = parseInt(id);
		var getRequest = objectStore.get(removeKey);
		getRequest.onsuccess=function(e){
			var result = e.result;
			console.log(result);
		}
		var request = objectStore.delete(removeKey);
		request.onsuccess=function(e){
			console.log("successed delete record!");
		}
		request.onerror = function(e){
			console.log("success delete record!");
			console.dir(e);
		}	
		//display the record deleted
		document.getElementById(removeKey).style.display="none";
	}
	
	//delete the database handler
	/*
	document.querySelector("#deleteDB").addEventListener("click",function(){
		deleteDB(dbName);
	},false);
	*/
	
	//query
	/*
	document.querySelector("#selectBtn").addEventListener("click",function(){
		var curName = document.getElementById("selname").value;
		var transaction = db.transaction([tableName],'readwrite');
			transaction.oncomlete = function(e){
				console.log("transaction complete!");
			}
			transaction.onerror = function(e){
				console.dir(e);
			}

			var objectStore = transaction.objectStore(tableName);
			var boundkeyRange = IDBKeyRange.only(curName);//get the range object
				objectStore.index("name").openCursor(boundkeyRange).onsuccess =function(event){
					var cursor = event.target.result;
					if(!cursor){
						return;
					}
					var rowData =cursor.value;
					// console.log(rowData);
					// console.log(cursor);
					render({key:cursor.value.id,name:cursor.value['name'],phone:cursor.value["phone"],address:cursor.value["address"]});
					cursor.continue();
				};
				clearTable();

	},false)
	*/

	//delete the databse
	function deleteDB(name){
		var deleteDB = indexedDB.deleteDatabase(name);
		deleteDB.onsuccess=function(e){
			console.log("database delete successed!");
		}
		deleteDB.onerror=function(e){
			console.dir("database delete error! "+e.target);
		}
	}
	//render the data in page
	/*
	function render(obj){
		var table  = document.querySelector("#table tbody");
		//table.innerHTML += "<tr id='"+obj.key+"'><td>"+obj.key+"</td><td>"+obj.name+"</td><td>"+obj.phone+"</td><td>"+obj.address+"</td><td><input type='button' name='deleteRe' id='deleteRe' data-id='"+obj.key+"' value='删除'/></tr>";
	}
	*/
	//clear table
	/*
	function clearTable(){
		var table  = document.querySelector("#table tbody");
		table.innerHTML="";
	}
	*/
	/*
	document.querySelector("table").addEventListener("click", function(e){
		//delete the record handler
		var event = window.event || e;
		var target = event.srcElement||event.target;
		// console.log(target.getAttribute("type").toLowerCase());
		if(target.getAttribute("type").toLowerCase()=="button" ){
			deleteRecord(target.getAttribute("data-id"));
		}
	},false);
	*/
	
}	
	
window.addEventListener("DOMContentLoaded",init,false);	
var localDatabase = {};
var dbName = "electronicdb2016"; //数据库名   电子量表
var tableName = "questionair";
localDatabase.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
localDatabase.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
localDatabase.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
localDatabase.indexedDB.onerror = function (e) {
	console.log("Database error: " + e.target.errorCode);
};
//打开数据库
function openDatabase() {
	var openRequest = localDatabase.indexedDB.open(dbName);
	openRequest.onerror = function(e) {
		alert("open failed.");
		console.log("Database error: " + e.target.errorCode);
	};
	openRequest.onsuccess = function(event) {
		localDatabase.db = openRequest.result;
	};
}

//获取所有信息 列表
function fetchAllList() {

	openDatabase();	
	try {	
		alert(localDatabase.indexedDB);
		if (localDatabase.indexedDB != null) {
			alert('111');
			var store = localDatabase.indexedDB.transaction(tableName,'readwrite').objectStore("questionair");
			var request = store.openCursor();
			request.onsuccess = function(evt) { 
				alert('222');
			    var cursor = evt.target.result; 			    
			    if (cursor) {
			    	var userdata = cursor.value;
			    	alert(userdata.id);
			    	//var jsonStr = JSON.stringify(employee);
			    	var result ='<span><a href="list-detail.html?id='+userdata.id+'">'+userdata.hospital+'</a></span><span>'+userdata.create_time+'</span>'
			    	$(".content").append(result)		    	
			    	
			        cursor.continue();			        
			    } 
			};
		}
	}catch(e){
		console.log(e);
	}
}

//获取所有数据
function fetchAll() {
	var openRequest = localDatabase.indexedDB.open(dbName);
	openRequest.onerror = function(e) {
		console.log("Database error: " + e.target.errorCode);
	};
	openRequest.onsuccess = function(event) {
		localDatabase.db = openRequest.result;
	};
	try {
		var result = document.getElementById("datalist");
		result.innerHTML = "医院,调研时间,答案1,答案2,答案3,答案4,答案5,答案6,答案7,答案8,生成硬件投入,生成学术会议,生成科室建设,生成患者教育,生成达标内容,选择硬件投入内容1,选择硬件投入细则1,选择硬件投入内容2,选择硬件投入细则2,选择硬件投入内容3,选择硬件投入细则3,选择学术会议内容1,选择学术会议细则1,选择学术会议内容2,选择学术会议细则2,选择学术会议内容3,选择学术会议细则3,选择学术会议内容4,选择学术会议细则4,选择科室建设内容1,选择科室建设细则1,选择科室建设内容2,选择科室建设细则2,选择患者教育内容1,选择患者教育细则1,选择患者教育内容2,选择患者教育细则2,选择患者教育内容3,选择患者教育细则3,选择患者教育内容4,选择患者教育细则4,选择患者教育内容5,选择患者教育细则5,选择达标内容";		
		if (localDatabase != null && localDatabase.db != null) {
			var store = localDatabase.db.transaction("questionair").objectStore("questionair");
			var request = store.openCursor();
			request.onsuccess = function(evt) {  
			    var cursor = evt.target.result; 			    
			    if (cursor) {
			    	var employee = cursor.value;
			    	//var jsonStr = JSON.stringify(employee);
			    	result.innerHTML = result.innerHTML + "\r\n" + employee.hospital + ","
			    	+ employee.create_time + "," 
			    	+ employee.baseinfo.question1 + "," + employee.baseinfo.question2 + ","
			    	+ employee.baseinfo.question3 + "," + employee.baseinfo.question4 + "," 
			    	+ employee.baseinfo.question5 + "," + employee.baseinfo.question6 + "," 
			    	+ employee.baseinfo.question7.a + employee.baseinfo.question7.b 
			    	+ employee.baseinfo.question7.c + employee.baseinfo.question7.d 
			    	+ employee.baseinfo.question7.e + "," + employee.baseinfo.question8 + ","
			    	+ employee.fixedplan.hardware_input + "," + employee.fixedplan.academic_conference + "," 
			    	+ employee.fixedplan.department_construction + "," + employee.fixedplan.patient_education + "," 
			    	+ employee.fixedplan.standard_content + ","
			    	+ employee.solution.hardware_input.hardware_input1.title + "," + employee.solution.hardware_input.hardware_input1.detail + ","
			    	+ employee.solution.hardware_input.hardware_input2.title + "," + employee.solution.hardware_input.hardware_input2.detail + "," 
			    	+ employee.solution.hardware_input.hardware_input3.title + "," + employee.solution.hardware_input.hardware_input3.detail + ","
			    	+ employee.solution.academic_conference.academic_conference1.title + "," + employee.solution.academic_conference.academic_conference1.detail + "," 
			    	+ employee.solution.academic_conference.academic_conference2.title + "," + employee.solution.academic_conference.academic_conference2.detail + "," 
			    	+ employee.solution.academic_conference.academic_conference3.title + "," + employee.solution.academic_conference.academic_conference3.detail + "," 
			    	+ employee.solution.academic_conference.academic_conference4.title + "," + employee.solution.academic_conference.academic_conference4.detail + "," 
			    	+ employee.solution.department_construction.department_construction1.title + "," + employee.solution.department_construction.department_construction1.detail + ","
			    	+ employee.solution.department_construction.department_construction2.title + "," + employee.solution.department_construction.department_construction2.detail + ","
			    	+ employee.solution.patient_education.patient_education1.title + "," + employee.solution.patient_education.patient_education1.detail + ","
			    	+ employee.solution.patient_education.patient_education2.title + "," + employee.solution.patient_education.patient_education2.detail + ","
			    	+ employee.solution.patient_education.patient_education3.title + "," + employee.solution.patient_education.patient_education3.detail + ","
			    	+ employee.solution.patient_education.patient_education4.title + "," + employee.solution.patient_education.patient_education4.detail + ","
			    	+ employee.solution.patient_education.patient_education5.title + "," + employee.solution.patient_education.patient_education5.detail + ","
			    	+ employee.solution.standard_content;
			        cursor.continue();			        
			    } 
			};
		}
	}catch(e){
		console.log(e);
	}
}
//删除数据库  
function deleteDB(){
    indexedDB.deleteDatabase("electronicdb2016");
}

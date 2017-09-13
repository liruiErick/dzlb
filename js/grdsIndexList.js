var db ;   //operating object of indexDB
var openRequest;
var lastCursor;
var indexedDB = window.indexedDB || window.webkitIndexDB || window.mozIndexedDB || window.msIndexedDB;
var dbName = "electronicdb2016";
var tableName = "questionair";	
	
function init(){
	openRequest = indexedDB.open(dbName);  //open the databse or new one
	openRequest.onsuccess = function (e){
		db = e.target.result;
	}
	openRequest.onerror = function(event){
		console.log("Error Open or Create Database:" + dbName);
	}
}
//window.addEventListener("DOMContentLoaded",init,false);
function getUserDataString(userdata){
	return '{'+userdata.baseinfo.question1+'}'+
		   '{'+userdata.baseinfo.question2+'}'+
		   '{'+userdata.baseinfo.question3+'}'+
		   '{'+userdata.baseinfo.question4+'}'+
		   '{'+userdata.baseinfo.question5+'}'+
		   '{'+userdata.baseinfo.question6+'}'+
		   '{'+userdata.baseinfo.question7.a+'}'+
		   '{'+userdata.baseinfo.question8+'}';
}

//获取历史纪录列表
function fetchAllList() {
	openRequest = indexedDB.open(dbName);  //open the databse or new one
	openRequest.onsuccess = function (e){
		db = e.target.result;
		var transaction = db.transaction([tableName],"readonly");
		transaction.oncomlete = function(e){
			console.log("transction complete!");
		}
		transaction.onerror = function(e){
			console.dir(event);
		};
		var objectStore = transaction.objectStore(tableName);//get the obejct objectStore
		$(".content").empty();
		var request = objectStore.openCursor();
		request.onsuccess = function(evt) {				
		    var cursor = evt.target.result; 			    
		    if (cursor) {			    	
		    	var userdata = cursor.value;
		    	var investId = '<td><a href="list-detail.html?id='+userdata.id+'">'+userdata.hospital+' '+userdata.create_time+'</a></td>';
		    	var investResult= '<td><a href="invest-detail.html?id='+userdata.id+'">查看调研结果</a></td>';
		    	//var investResult= '<td>'+getUserDataString(userdata)+'</td>';
		    	var solutionButton = '<td><a href="list-detail.html?id='+userdata.id+'">查看生成方案</a></td>';
		    	var deleteButton = '<td><a href="javascript:deleteById('+userdata.id+')">删除</a></td>';
		    	var result ='<tr id="'+userdata.id+'">'+investId+investResult+solutionButton+deleteButton+'<tr>'
		        cursor.continue();	
		        $(".content").append(result);
		    } 
		}

	}
	openRequest.onerror = function(event){
		console.log("Error Open or Create Database:" + dbName);
	}
}

//获取id
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

//显示方案详情
function showSolution(){
	var id = GetQueryString("id");
	fetchById(Number(id));
}

//显示调研结果详情
function showInvestResult(){
	var id = GetQueryString("id");
	fetchInvestResultById(Number(id));
}
	
//按id提取调研结果数据
function fetchInvestResultById(id){
	if(id === "" || isNaN(id))
		return;

	openRequest = indexedDB.open(dbName);  //open the databse or new one
	openRequest.onsuccess = function (e){
		db = e.target.result;
		var transaction = db.transaction([tableName],"readonly");
		transaction.oncomlete = function(e){
			console.log("transction complete!");
		}
		transaction.onerror = function(e){
			console.dir(event);
		};
		var objectStore = transaction.objectStore(tableName);//get the obejct objectStore
			
		var infoKey = parseInt(id);
		var getRequest = objectStore.get(infoKey);
		getRequest.onsuccess=function(e){
			var result = e.result;
			console.log(result);
		}
		var request = objectStore.get(infoKey);
		request.onsuccess=function(e){
			//console.log("successed get record!");
			var result = e.target.result; 
			if(result) {
				fillInvestResult(result);
			}	
		}
		request.onerror = function(e){
			console.dir(e);
		}
	}
}

//按id提取数据
function fetchById(id){
	if(id === "" || isNaN(id))
		return;

	openRequest = indexedDB.open(dbName);  //open the databse or new one
	openRequest.onsuccess = function (e){
		db = e.target.result;
		var transaction = db.transaction([tableName],"readonly");
		transaction.oncomlete = function(e){
			console.log("transction complete!");
		}
		transaction.onerror = function(e){
			console.dir(event);
		};
		var objectStore = transaction.objectStore(tableName);//get the obejct objectStore
			
		var infoKey = parseInt(id);
		var getRequest = objectStore.get(infoKey);
		getRequest.onsuccess=function(e){
			var result = e.result;
			console.log(result);
		}
		var request = objectStore.get(infoKey);
		request.onsuccess=function(e){
			//console.log("successed get record!");
			var result = e.target.result; 
			if(result) {
				var userdata = result.result;
				$("#content-detail").append(userdata);
			}	
		}
		request.onerror = function(e){
			console.dir(e);
		}
	}
}

//删除指定id
function deleteById(id){
	if(confirm("是否删除该历史方案")==false){
		return;
	}
	
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

function fillInvestResult(userdata){
	var qa7 = new Array();
	if(userdata.baseinfo.question7.a != "") qa7.push("A"); 
	if(userdata.baseinfo.question7.b != "") qa7.push("B"); 
	if(userdata.baseinfo.question7.c != "") qa7.push("C"); 
	if(userdata.baseinfo.question7.d != "") qa7.push("D"); 
	if(userdata.baseinfo.question7.e != "") qa7.push("E"); 

	var qa = "<tr><td>问题1</td>" +"<td>" + userdata.baseinfo.question1 +"</td></tr>" +
			 "<tr><td>问题2</td>" +"<td>" + userdata.baseinfo.question2 +"</td></tr>" +
			 "<tr><td>问题3</td>" +"<td>" + userdata.baseinfo.question3 +"</td></tr>" +
			 "<tr><td>问题4</td>" +"<td>" + userdata.baseinfo.question4 +"</td></tr>" +
			 "<tr><td>问题5</td>" +"<td>" + userdata.baseinfo.question5 +"</td></tr>" +
			 "<tr><td>问题6</td>" +"<td>" + userdata.baseinfo.question6 +"</td></tr>" +
			 "<tr><td>问题7</td>" +"<td>" + qa7.join() +"</td></tr>" +
			 "<tr><td>问题8</td>" +"<td>" + userdata.baseinfo.question8 +"</td></tr>" ;
	$(".content").append(qa);
	
	var firstround = "<tr><td>硬件投入</td><td>" + userdata.fixedplan.hardware_input+"</td></tr>"+
	"<tr><td>学术会议</td><td>" + userdata.fixedplan.academic_conference+"</td></tr>"+
	"<tr><td>患者教育</td><td>" + userdata.fixedplan.patient_education+"</td></tr>"+
	"<tr><td>科室建设</td><td>" + userdata.fixedplan.department_construction+"</td></tr>"+
	"<tr><td>达标内容</td><td>" + userdata.fixedplan.standard_content+"</td></tr>";
	$("#first-round").append(firstround);
}

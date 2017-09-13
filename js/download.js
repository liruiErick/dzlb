var localDatabase = {};
var dbName = "electronicdb2016"; //数据库名   电子量表
var tableName = "questionair";
localDatabase.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
localDatabase.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
localDatabase.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
localDatabase.db = null;
localDatabase.indexedDB.onerror = function (e) {
	console.log("Database error: " + e.target.errorCode);
};
//打开数据库
function openDatabase() {
	if(localDatabase.db !=null)
		return;
	var openRequest = localDatabase.indexedDB.open(dbName);
	openRequest.onerror = function(e) {
		alert("open failed.");
		console.log("Database error: " + e.target.errorCode);
	};
	openRequest.onsuccess = function(event) {
		localDatabase.db = openRequest.result;
	};
}

openDatabase();		


//获取id 获获取详细信息  
function fetchId() {
	var key = GetQueryString("id");
	if(key === "" || isNaN(key))
		return;
	//var transaction = localDatabase.db.transaction(["questionair"],"readonly");
	//var store = transaction.objectStore("questionair");
	try {	
		if (localDatabase != null && localDatabase.db != null) {
			var store = localDatabase.db.transaction("questionair").objectStore("questionair");
			var request = store.get(Number(key));
			
			request.onsuccess = function(evt) { 
				var result = evt.target.result; 
				if(result) {
					var userdata = result.result;
					$("#content-detail").append(userdata);
				}	
			};
		}
	}catch(e){
		console.log(e);
	}
}


//获取所有信息 列表
function fetchAllList() {
	//openDatabase();	
	try {	
		if (localDatabase != null && localDatabase.db != null) {
			var store = localDatabase.db.transaction("questionair").objectStore("questionair");
			$(".content").empty();
			var request = store.openCursor();
			request.onsuccess = function(evt) {				
			    var cursor = evt.target.result; 			    
			    if (cursor) {			    	
			    	var userdata = cursor.value;
			    	var deleteButton = '<a href="javascript:deleteById('+userdata.id+')">删除</a>';
			    	var result ='<tr><td><a href="list-detail.html?id='+userdata.id+'">'+userdata.hospital+'</a></td><td>'+userdata.create_time+'</td><td>'+deleteButton+'</td><tr>'
			        cursor.continue();	
			        $(".content").append(result);
			    } 
			};			
		}
	}catch(e){
		console.log(e);
	}
}

//获取id
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

//删除数据库  
function deleteDB(){
    indexedDB.deleteDatabase("electronicdb2016");
}

function deleteById(id){
	alert(id);
}

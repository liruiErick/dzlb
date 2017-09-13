$(document).ready(function() {	
    //给最大的盒子增加事件监听
    $(".picture").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
             if(direction == "left"){
                $(".picture .sky-carousel").each(function(){
					var isclass=$(this).hasClass("special");
					if(isclass == true){	
						var names=$(this).find(".sc-selected").next().children("img").attr("names");
						if(names == "huiyi"){
							$(".exhibition").removeClass("exhibition-active");
							$(".huiyi-button").parent("div.exhibition").addClass("exhibition-active");	
						}else if(names == "huanjiao"){
							$(".exhibition").removeClass("exhibition-active");
							$(".huanjiao-button").parent("div.exhibition").addClass("exhibition-active");
						}else if(names == "keshi"){
							$(".exhibition").removeClass("exhibition-active");
							$(".keshi-button").parent("div.exhibition").addClass("exhibition-active");
						}else if(names == "yingjian"){
							$(".exhibition").removeClass("exhibition-active");
							$(".yingjian-button").parent("div.exhibition").addClass("exhibition-active");
						}
						/*else{
							$(".exhibition").removeClass("exhibition-active");
							$(".yingjian-button").parent("div.exhibition").addClass("exhibition-active");
						}*/
					}		   
		 		});
             }else if(direction == "right"){
                $(".picture .sky-carousel").each(function(){
					var isclass=$(this).hasClass("special");
					if(isclass == true){	
						var names=$(this).find(".sc-selected").prev().children("img").attr("names");
						if(names == "huiyi"){
							$(".exhibition").removeClass("exhibition-active");
							$(".huiyi-button").parent("div.exhibition").addClass("exhibition-active");	
						}else if(names == "huanjiao"){
							$(".exhibition").removeClass("exhibition-active");
							$(".huanjiao-button").parent("div.exhibition").addClass("exhibition-active");
						}else if(names == "keshi"){
							$(".exhibition").removeClass("exhibition-active");
							$(".keshi-button").parent("div.exhibition").addClass("exhibition-active");
						}else if(names == "yingjian"){
							$(".exhibition").removeClass("exhibition-active");
							$(".yingjian-button").parent("div.exhibition").addClass("exhibition-active");
						}
						/*
						else{
							$(".exhibition").removeClass("exhibition-active");
							$(".huiyi-button").parent("div.exhibition").addClass("exhibition-active");
						}*/
					}		   
		 		});
             }else if(direction == "up"){
             	//向下滑动 进入  下一页
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
             } 
        }
    });
    $(".p3-content").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            if(direction == "up"){
             	//向下滑动 进入  下一页
				$(".containers").addClass("hide");
				$(".investigation").removeClass("hide");
				$(".first").removeClass("hide");							
             } 
        }
    });
    //第1一页
    $(".P2-1").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            if(direction == "left"){
             	//向下滑动 进入  下一页
				$(".P2-1").addClass("hide");
				$(".P2-2").removeClass("hide");						
            } 
        }
    });
    //第1二页
    $(".P2-2").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            if(direction == "left"){
             	//向下滑动 进入  下一页
				$(".P2-2").addClass("hide");
				$(".P2-3").removeClass("hide");						
            }else if(direction == "right"){
            	//向上滑动 进入  上一页
				$(".P2-2").addClass("hide");
				$(".P2-1").removeClass("hide");
            }
        }
    });
    //第1三页
    $(".P2-3").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            if(direction == "right"){
             	//向下滑动 进入  下一页
				$(".P2-3").addClass("hide");
				$(".P2-2").removeClass("hide");						
            } 
        }
    });
    
    //第2一页
    $(".P3-1").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            if(direction == "left"){
             	//向下滑动 进入  下一页
				$(".P3-1").addClass("hide");
				$(".P3-2").removeClass("hide");						
            } 
        }
    });
    //第2二页
    $(".P3-2").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            if(direction == "left"){
             	//向下滑动 进入  下一页
				$(".P3-2").addClass("hide");
				$(".P3-3").removeClass("hide");						
            }else if(direction == "right"){
            	//向上滑动 进入  上一页
				$(".P3-2").addClass("hide");
				$(".P3-1").removeClass("hide");
            }
        }
    });
    //第2三页
    $(".P3-3").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            if(direction == "left"){
             	//向下滑动 进入  下一页
				$(".P3-3").addClass("hide");
				$(".P3-4").removeClass("hide");						
            }else if(direction == "right"){
            	//向上滑动 进入  上一页
				$(".P3-3").addClass("hide");
				$(".P3-2").removeClass("hide");
            }
        }
    });
    //第2四页
    $(".P3-4").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            if(direction == "left"){
             	//向下滑动 进入  下一页
				$(".P3-4").addClass("hide");
				$(".P3-5").removeClass("hide");						
            }else if(direction == "right"){
            	//向上滑动 进入  上一页
				$(".P3-4").addClass("hide");
				$(".P3-3").removeClass("hide");
            }
        }
    });
    //第2五页
    $(".P3-5").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            if(direction == "left"){
             	//向下滑动 进入  下一页
				$(".P3-5").addClass("hide");
				$(".P3-6").removeClass("hide");						
            }else if(direction == "right"){
            	//向上滑动 进入  上一页
				$(".P3-5").addClass("hide");
				$(".P3-4").removeClass("hide");
            }
        }
    });
    //第2五页
    $(".P3-6").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
//          if(direction == "left"){
//           	//向下滑动 进入  下一页
//				$(".P3-6").addClass("hide");
//				$(".P3-7").removeClass("hide");						
//          }else if(direction == "right"){
//          	//向上滑动 进入  上一页
//				$(".P3-6").addClass("hide");
//				$(".P3-5").removeClass("hide");
//          }
            if(direction == "right"){
            	//向上滑动 进入  上一页
				$(".P3-6").addClass("hide");
				$(".P3-5").removeClass("hide");
            }
        }
    });
//  //第2七页
//  $(".P3-7").swipe({
//      swipe:function(event, direction, distance, duration, fingerCount) {
//          if(direction == "right"){
//           	//向下滑动 进入  下一页
//				$(".P3-7").addClass("hide");
//				$(".P3-6").removeClass("hide");						
//          } 
//      }
//  });
    
    //试题1向上翻页
    $("#1").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            if(direction == "down"){
             	//向上滑动 
				$(".investigation").addClass("hide");
				$(".containers").removeClass("hide");						
            }
        }
    });
     //投入方案向上翻页
    $(".scheme").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            if(direction == "down"){
             	//向上滑动 
				$(".scheme").addClass("hide");
				$(".investigation").removeClass("hide");	
				$(".picture").removeClass("hide");						
            }
        }
    });
});

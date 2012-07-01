function checkEnter(e){
 e = e || event;
 return (e.keyCode || event.which || event.charCode || 0) !== 13;
}

// function touchHandler(event)
// {
//  var touches = event.changedTouches,
//     first = touches[0],
//     type = "";

//      switch(event.type)
// {
//     case "touchstart": type = "mousedown"; break;
//     case "touchmove":  type="mousemove"; break;        
//     case "touchend":   type="mouseup"; break;
//     default: return;
// }
// var simulatedEvent = document.createEvent("MouseEvent");
// simulatedEvent.initMouseEvent(type, true, true, window, 1,
//                           first.screenX, first.screenY,
//                           first.clientX, first.clientY, false,
//                           false, false, false, 0/*left*/, null);

// first.target.dispatchEvent(simulatedEvent);
// event.preventDefault();
// }

// function init()
// {
//    document.addEventListener("touchstart", touchHandler, true);
//    document.addEventListener("touchmove", touchHandler, true);
//    document.addEventListener("touchend", touchHandler, true);
//    document.addEventListener("touchcancel", touchHandler, true);    
// }

function start() {
	var goldTop = 10;
	var goldLeft = 254;
	var silverTop = 26;
	var silverLeft = 211;
	var bronzeTop = 35;
	var bronzeLeft = 302;
	var tolerance = 15;

	var positions = $.shuffle([{pos: {top: 55, left: -70}, z: 4}, {pos: {top: 48, left: -50}, z: 3}, {pos: {top: 41, left: 0}, z: 2}, {pos: {top: 34, left: -20}, z: 1}]);

	var time_start = +new Date();

	$( "#cokeCan_Red" ).draggable({containment: "parent", delay: 100, stack: ".cokeCan"})
	                   .css("left", positions[0].pos.left)
	                   .css("top", positions[0].pos.top)
	                   .css("z-index", positions[0].z)
                       .animate({ left: '+=100px' }, 1000, function() {
                       	 positions[0].pos.left += 100;
                       });

	$( "#cokeCan_Gold" ).draggable({containment: "parent", delay: 100, stack: ".cokeCan"})
	                   .css("left", positions[1].pos.left)
	                   .css("top", positions[1].pos.top)
	                    .css("z-index", positions[1].z)
	                    .animate({ left: '+=100px' }, 2000, function() {
                       	 positions[1].pos.left += 100;
                       });
	$( "#cokeCan_Silver" ).draggable({containment: "parent", delay: 100, stack: ".cokeCan"})
	                      .css("left", positions[2].pos.left)
	                      .css("top", positions[2].pos.top)
 	                      .css("z-index", positions[2].z)
	                      .animate({ left: '+=100px' }, 2000, function() {
                       	    positions[2].pos.left += 100;
                          });

	$( "#cokeCan_Bronze" ).draggable({containment: "parent", delay: 100, stack: ".cokeCan"})
    	                  .css("left", positions[3].pos.left)
	                      .css("top", positions[3].pos.top)
					      .css("z-index", positions[3].z)
	                      .animate({ left: '+=100px' }, 1000, function() {
                       	     positions[3].pos.left += 100;
                       	     $( "#cokeCan_Bronze" ).animate({ left: bronzeLeft, top: bronzeTop}, 1000);
                          });

	$( "#droppable" ).droppable({
			drop: function( event, ui ) {
				
				var countfield = $("#CAPTCHA_Clicks");
    			countfield.val(1 + parseInt(countfield.val()));

				var goldDone = false;
				var silverDone = false;
				// var bronzeDone = false;
				var bronzeDone = true;

				$("#cokeCan_Red").css("top", positions[0].pos.top)
				                 .css("left", positions[0].pos.left)
				                 .css("z-index", positions[0].z);

				if (parseInt($("#cokeCan_Gold").css("top")) >= goldTop - tolerance && 
				    parseInt($("#cokeCan_Gold").css("top")) <= goldTop + tolerance &&
				    parseInt($("#cokeCan_Gold").css("left")) >= goldLeft - tolerance && 
					parseInt($("#cokeCan_Gold").css("left")) <= goldLeft + tolerance) {

					$("#cokeCan_Gold").css("top", goldTop)
				                      .css("left", goldLeft)
				                      .draggable("destroy");				
				    goldDone = true;
				}

				if (!goldDone)
					$("#cokeCan_Gold").css("top", positions[1].pos.top)
				                      .css("left", positions[1].pos.left)
				                      .css("z-index", positions[1].z);

				if (parseInt($("#cokeCan_Silver").css("top")) >= silverTop - tolerance && 
				    parseInt($("#cokeCan_Silver").css("top")) <= silverTop + tolerance &&
				    parseInt($("#cokeCan_Silver").css("left")) >= silverLeft - tolerance && 
					parseInt($("#cokeCan_Silver").css("left")) <= silverLeft + tolerance) {

					$("#cokeCan_Silver").css("top", silverTop)
				                        .css("left", silverLeft)
				                        .draggable("destroy");
				    silverDone = true;
				}

				if (!silverDone)
					$("#cokeCan_Silver").css("top", positions[2].pos.top)
				                        .css("left", positions[2].pos.left)
				                        .css("z-index", positions[2].z);

				// if (parseInt($("#cokeCan_Bronze").css("top")) >= bronzeTop - tolerance && 
				//     parseInt($("#cokeCan_Bronze").css("top")) <= bronzeTop + tolerance &&
				//     parseInt($("#cokeCan_Bronze").css("left")) >= bronzeLeft - tolerance && 
				// 	parseInt($("#cokeCan_Bronze").css("left")) <= bronzeLeft + tolerance) {

				// 	$("#cokeCan_Bronze").css("top", bronzeTop)
				//                         .css("left", bronzeLeft)
				//                         .draggable("destroy");
				//     bronzeDone = true;
				// }

				// if (!bronzeDone)
				// 	$("#cokeCan_Bronze").css("top", positions[3].pos.top)
				//                         .css("left", positions[3].pos.left)
				//                         .css("z-index", positions[3].z);

				if (goldDone && silverDone && bronzeDone) {
					var time_end = +new Date();
					$("#CAPTCHA_Time").val(time_end - time_start);
					$("#CAPTCHA_Form").submit();		   
				}                   
			}
		});
}

$(function() {
	$("#cokeCan_Red").hide();
	$("#cokeCan_Gold").hide();
	$("#cokeCan_Silver").hide();
	$("#cokeCan_Bronze").hide();

	(new Image()).src = 'images/ColaPodium.png';

	$("#cokeRun_CAPTCHA").click(function() {
		// init();
		$("#cokeRun_CAPTCHA").unbind('click');
		$("#cokeCan_Red").show();
		$("#cokeCan_Gold").show();
		$("#cokeCan_Silver").show();
		$("#cokeCan_Bronze").show();
		$("#cokeRun_CAPTCHA").css("cursor", "default");
		$("#cokeRun_CAPTCHA").css("background-image", "url('images/ColaPodium.png')");
		start();
	})
});

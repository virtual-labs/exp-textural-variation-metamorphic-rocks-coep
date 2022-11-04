var i=1;
var maxIndexArr=4;
var mineralCount=1;
let  SampleRandomArr = [];
function randomIntFromInterval(){ 
	do {
//	  	let num = Math.floor(Math.random() * 26 + 1);
//	  	SampleRandomArr.push(num);
		SampleRandomArr.push(i);
	  	i++;
	   	SampleRandomArr =  SampleRandomArr.filter((item, index) => {
	    return  SampleRandomArr.indexOf(item) === index;
	  });
	} while ( SampleRandomArr.length < maxIndexArr);
}

function randomIntFromIntervalPos(min, max) { 
	  return Math.floor(Math.random() * (max - min + 1) + min)
}

randomIntFromInterval();
console.log(tempMasterJson);
var htm='<div class="row">'
			+'<div class="col-sm-1">'
			+'</div>'
			+'<div class="col-sm-2">'
			+'<strong><span style="float:right;">Select metamorphic rocks</span></strong>'
			+'</div>'
			+'<div class="col-sm-7">'
			+'<select class="custom-select" id="mineral"  >'
			+'<option>------ Select metamorphic rock ------</option>'
	for(i=0;i<SampleRandomArr.length;i++){
			htm+='<option  value="'+ SampleRandomArr[i]+'">' +tempMasterJson.demo[i].dummyName+'</option>'
		}
		htm+='</select>'			
			+'</div>'
			+'</div>'
			+'<div class="col-sm-2">'
			+'</div>'
			+'<center><p id="helpTip"></p></center>'
			+'<div class="row" id="info_div"  >'
			
// $("#main-div").html(htm);
var thoery='<div class="container col-sm-12"  id="theory">'
	+'<div class="card ">'
	+'<center><p class="blink"> Select metamorphic rocks to start the simulation!!! </p></center>'
	+'<div class="card-header heading_div">'
	+'<b><center>Basics to know about metamorphic rocks</center></b>'
	+'</div>'
	+'<div class="card-body">'
	+'<p><b>MEGASCOPIC IDENTIFICATION AND DESCRIPTION OF METAMORPHIC ROCKS:</b><br>'
	+' Metamorphic Rocks are formed through the transformation of the pre-existing rocks under increased temperature and pressure'
    +'conditions. This process of transformation is known as Metamorphism. Formation of Metamorphism rock from a pre-existing is controlled'
    +'by the following parameters Temperature, Pressure, Chemically active fluid these there are known as Metamorphism agents.'
    +' Generally all these three acts together and cause Metamorphism. But sometimes, any one or two of them any dominate and play'
    +' together and cause Metamorphism. But sometimes any one or two of them may dominate and play on active role.'

	+'<ul>'
	+'<li><b>Temperature:</b> Changes take place in the temp 350-380˚C.'
	+'<li><b> Pressure:</b> Uniform pressure increase with depth direct pressure due to tectonic forces '
	+'<li><b>Chemically active fluids:</b> Liquids which acts as carrier of chemical components, volatiles of magma and hydrothermal solutions.'
	+'</ul></p>'
	+'<p> Textures of metamorphic rocks fall into two broad groups, <b>FOLIATED and NON-FOLIATED</b>. Foliation is produced in a '
	+'rock by the parallel alignment of platy minerals (e.g., muscovite, biotite, chlorite), needle-like minerals (e.g., hornblende),'
	+'or tabular minerals (e.g., feldspars).'
	+'<b>The differences in the orientation, or alignment, of crystals </b>and the size of the crystals determine the texture'
	+'of a metamorphic rock. There are two general texture groups. Foliated textures are those in which platy or leaflike minerals'
	+'such as mica or chlorite are nearly all aligned parallel to one another.'

	+'</p>'
	+'<p><b>The four basic metamorphic textures with typical rock types are:</b></p>'
	+'<ul>'
	+'<li><b>Slaty- </b>slate and phyllite; the foliation is called slaty cleavage</li>'
	+'<li><b>Schistose-</b> schist; the foliation is called schistocity</li>'
	+'<li><b>Gneissose-</b> gneiss the foliation is called gneisocity</li>'
	+'<li><b>Granoblastic-</b>granulite, some marbles and quartzite</li>'
	+'</ul>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	$("#main-div").html(htm+thoery);	
	


var copyMineralid;

$(document).ready(function() {
	 
	 $('#myresult').hide();
	 $('#myimage').hide();
	 $('#originalName').hide();

	 $('#mineral').change(function(){
		 mineralSelect();
	 });
}); 

function mineralSelect(){
		$("#helpTip").html("");
		$("#helpTip").removeClass("blink");
		$('#myresult').show();
		$('#myimage').show();
		$('#originalName').show();
		tempMasterJson.demo = masterJsonArr;
		$('#info_div').html(""); 
		var tempmineral=$('#mineral :selected').val();
		
	 var mineral=parseInt(tempmineral);
		for(i=0,j=1;i<tempMasterJson.demo.length;i++,j++){	
			 if(mineral==tempMasterJson.demo[i].mineralId){	
				 copyMineralid=i;
				 var text='<div class="col-lg-2  col-sm-12">'
					 	+'</div>'
					 	+'<div class="container col-lg-4 col-sm-12 imgLens">'
					 	+'<img id="myimage"  class="img-fluid myImage" src="'+tempMasterJson.demo[i].src+'" width="500" height="300" ><br>'
					 	+'<br>'
					 	+'<br>'
					 	+'<div class="row" id="previewPanel" >'
					 	previewPanel();
					 	text+='</div>'
						+'<br>'
					 	+'<strong><b>what is the name of above metamorphic rocks?</b></strong>'
					 	+'<br>'
					 	+'<br>'
					 	+'<select class="custom-select" id="originalName"  >'
					 	+'<option  value="">------ Select original name of metamorphic rocks ------</option>'
				for(i=0;i<tempMasterJson.demo.length;i++){	
					text+='<option  value="'+tempMasterJson.demo[i].mineralId+'">'+tempMasterJson.demo[i].textureName +'</option>'
				}
			 	text+='</select>'
				 	+'<br>'
				 	+'<br>'
				 	+'<div class=" " id="error" >'
		 			+'</div>'
					+'</div>'
				 	+'<div class="container  col-lg-4 col-sm-12 img-zoom-container">'
				 	+'<div id="myresult" class="container img-zoom-result"></div>'
				 	+'</div>'
				 	+'<div class="col-sm-1">'
		 			+'</div>'

		 		$('#info_div').html(text);
		 		imageZoom("myimage", "myresult");
		 		
			 }
		
			$('#originalName').change(function(){
					originalName();
			});
		}
		
		function previewPanel(){
				
						if("src1" in tempMasterJson.demo[copyMineralid] ){
						text+='<div class="col-lg-2" id="previewPanel1" >'
							+'<img id="preview1"  class="previewImg" src="'+tempMasterJson.demo[copyMineralid].src1+'" width="90" height="90" ><br>'
							+'</div>'
							$("#previewPanel").append(text);
						}
						if("src2" in tempMasterJson.demo[copyMineralid]){
							text+='<div class="col-lg-2" id="previewPanel2" >'
							+'<img id="preview2"  class="previewImg" src="'+tempMasterJson.demo[copyMineralid].src2+'" width="90" height="90" ><br>'
							+'</div>'
							$("#previewPanel").append(text);
						}
						if("src3" in tempMasterJson.demo[copyMineralid]){
							text+='<div class="col-lg-2" id="previewPanel3" >'
							+'<img id="preview3"  class="previewImg" src="'+tempMasterJson.demo[copyMineralid].src3+'" width="90" height="90" ><br>'
							+'</div>'
							$("#previewPanel").append(text);
						}
						if("src4" in tempMasterJson.demo[copyMineralid]){
							text+='<div class="col-lg-2" id="previewPanel4" >'
							+'<img id="preview4"  class="previewImg" src="'+tempMasterJson.demo[copyMineralid].src4+'" width="90" height="90" ><br>'
							+'</div>'
							$("#previewPanel").append(text);
						}
						if("src" in tempMasterJson.demo[copyMineralid] ){
							text+='<div class="col-lg-2" id="previewPanel5" >'
								+'<img id="preview5"  class="previewImg" src="'+tempMasterJson.demo[copyMineralid].src+'" width="90" height="90" ><br>'
								+'</div>'
								$("#previewPanel").append(text);
							}
						
							
				
		}
		$('#preview1').click(function(){
			var images = $('#preview1').attr('src');
			$('#myimage').attr("src",images);
			$('#myresult').css('background-image', 'url(' + images + ')');
		});
		$('#preview2').click(function(){
			var images = $('#preview2').attr('src');
			$('#myimage').attr("src",images);
			$('#myresult').css('background-image', 'url(' + images + ')');
		});
		$('#preview3').click(function(){
			var images = $('#preview3').attr('src');
			$('#myimage').attr("src",images);
			$('#myresult').css('background-image', 'url(' + images + ')');
		});
		$('#preview4').click(function(){
			var images = $('#preview4').attr('src');
			$('#myimage').attr("src",images);
			$('#myresult').css('background-image', 'url(' + images + ')');
		});
		$('#preview5').click(function(){
			var images = $('#preview5').attr('src');
			$('#myimage').attr("src",images);
			$('#myresult').css('background-image', 'url(' + images + ')');
		});
		
		function originalName(){
			$("#mineral").attr("disabled", true);
			for(i=0;i<tempMasterJson.demo.length;i++){
					var mineral=$('#mineral :selected').val();
					var originalName=$('#originalName :selected').text();
						 	if(tempMasterJson.demo[copyMineralid].textureName==originalName){
						 		$('#info_div').html("");

						 		var text='<div class="container col-lg-5  col-sm-12" >'
						 				+'<div class="heading_div">'
						 				+'<b><center>'+tempMasterJson.demo[copyMineralid].textureName+'</center></b>'
						 				+'</div>'
						 				+'<div class="row " >'
						 				
						 				+'<div class="container col-lg-4 imgLens " id="imgScreen" >'
						 				+'<img id="myimage"  class="img-fluid myImage myImageScreen" src="'+tempMasterJson.demo[copyMineralid].src+'"   >'
						 				+'</div>'
						 				
						 				+'<div class="container  col-lg-7 col-sm-12 img-zoom-container">'
										+'<div id="myresult" class=" container img-zoom-result img-zoom-result-screen" style="margin-top:50px;" ></div>'
									 	+'</div>'
						 				+'</div>'
						 				+'<hr class="hrStyle">'
						 				+'<div class="row " >'
						 				+'<br>'
						 				
						 				+'<div class="col-lg-12 col-sm-12 " id="answerPanel" >'
						 				+'</div>'
						 				+'</div>'
						 				
						 				+'</div>'
						 				
						 			  	+'<div class="container col-lg-6 col-sm-12  ">'
						 				+'<div class="container heading_div">'
						 				+'<b><center>IDENTIFICATIONS OF METAMORPHIC ROCKS </center></b>'
						 				+'</div>'
						 			
						 				+'<div class="container col-lg-12 col-sm-12" style=" height: 700px; overflow-y: scroll;margin:10px;">'
			 			        var option=[];	
						 		var questionLength=tempMasterJson.demo[copyMineralid].question.length;
//						 		console.log("copyMineralid "+copyMineralid+" questionLength  "+questionLength);
						 		
						 	for(var j=0;j<questionLength;j++){
//						 		console.log("question "+tempMasterJson.demo[copyMineralid].question[j].question);
				 				text+='<br><button type="button" class="btn btnStyle" id="questionNumBtn"  style="cursor: default;"><b>Question No - '+(j+1)+'</b></button><br>'
					 				+'<br><caption> <h5><b>'+tempMasterJson.demo[copyMineralid].question[j].question+'</b></h5></caption><br>'
					 				+'<b><div class="row">'
				 				
				 				option[0]=tempMasterJson.demo[copyMineralid].question[j].wrongAns1;
				 				option[1]=tempMasterJson.demo[copyMineralid].question[j].wrongAns2;
				 				option[2]=tempMasterJson.demo[copyMineralid].question[j].wrongAns3;
				 				
				 				const pos = randomIntFromIntervalPos(0, 3);

				 				text+='<div class="form-check">'
				 				var ans=tempMasterJson.demo[copyMineralid].question[j].correctAns;
				 				for(var op=0,p=0;op<4;op++){	
				 							if(pos==op){
				 								text+='<input class="form-check-input" type="radio" name="radioOption'+j+'" value="'+ans+'" id="radioOption" >'
				 									+'<b>'+ans+'</b></input><br>'
				 							}else{
				 								text+='<input class="form-check-input" type="radio" name="radioOption'+j+'" value="'+option[p]+'" id="radioOption" >'
				 									+'<b>'+option[p]+'</b></input><br>'
				 								p++;
				 							}
				 						}
				 				text+='</div></div></b>'
				 					}
						 		text+='<br><button type="button" class="btn btn-success "   id="smt" data-toggle="modal"   >Submit</button></div>'
						 		+'</div>'
						 		// add model data-target="#myModal"
						 		
						 		$('#info_div').html(text);	
						 		
						 		imageZoomquestionnairePage("myimage", "myresult");
								
						 	}
						
						 	else
						 		{
						 	    var str1='<div class="alert alert-success">'
						 	    	+'<strong>Select correct original name of metamorphic rocks name.  </strong>'
			 			  	+'</div>'
						 	    	$("#error").html(str1);
						 	}
						 	
						} 
			$("#smt").click(function(){
				smtQuestion();
			});
}

function smtQuestion(){
	$('#answerPanel').show();
	var selected=[];
	var correctAnsCount=0;
	var wrongAnsCount=0;
	var notSelected=0;
	
	$("#helpTip").html("You need to perform the task for all the available metamorphic rocks to complete the experiment. Find \"Click here to select next metamorphic rocks\" button to continue.");
	$("#helpTip").addClass("blink");
	
	var questionLength=tempMasterJson.demo[copyMineralid].question.length;
	$("input[id='radioOption']").next().css('color', '#000');
	
	for(var z=0; z <questionLength ;z++){
		selected[z]= $("input[name='radioOption"+z+"']:checked").val();		
	}

	for(var j=0,k=0;j<questionLength;j++,k++){
	  
	   if(selected[j]==tempMasterJson.demo[copyMineralid].question[j].correctAns){
		   	correctAnsCount++;
		   	$("input[name='radioOption"+j+"']:checked").css('accent-color', 'green');
		   	$("input[name='radioOption"+j+"']:checked").next().css('color', 'green');
	   }else if(selected[j]==tempMasterJson.demo[copyMineralid].question[j].wrongAns1||selected[j]==tempMasterJson.demo[copyMineralid].question[j].wrongAns2||selected[j]==tempMasterJson.demo[copyMineralid].question[j].wrongAns3)
	   {
		   	wrongAnsCount++;
		    $("input[name='radioOption"+j+"']:checked").css('accent-color', 'red');
			$("input[name='radioOption"+j+"']:checked").next().css('color', 'red');
	   }else{
		   	notSelected++;
	   }
  }
	
	if(notSelected==questionLength){
		$("#helpTip").html("");
		$("#helpTip").removeClass("blink");	
		$('#mineral :selected').attr('disabled', false);
		resultModal();
		$("#modalHeading").html("Alert");
		$("#AddResult").html('<strong>Please attempt all questions .</strong>');
		$("#ModalFooter").html('<button type="button" class="btn btn-primary"  data-dismiss="modal" >OK</button>');
	}else{
		$('#mineral :selected').attr('disabled', true);
		var answerPanel,AddResult;	
		resultModal();
		answerPanel='<button type="button" class="btn btn-success blink position"   id="selectAnotherMineral">Click here to select next metamorphic rocks</button>'
			+'<div class="summary"><strong id="correctAns" enable="true">Correct Answer :'+correctAnsCount+' </strong><br>'
			+'<strong id="wrongAns">Wrong Answer : '+wrongAnsCount+'</strong><br>'
	  		+'<strong id="notSelected">Skipped Question : '+notSelected+' </strong><br>'
		  	+'</div>'
			
			$("#modalHeading").html("Selected metamorphic rocks : " + tempMasterJson.demo[copyMineralid].originalName);
		AddResult='<p class="properties"></p>'
				  +'<p class="properties"><b>Chemical classification :</b> '+tempMasterJson.demo[copyMineralid].chemical_Classification+'</p>'
				  +'<p class="properties"><b>Colour :</b> '+tempMasterJson.demo[copyMineralid].colour+'</p>'
				  +'<p class="properties"><b>Streak :</b> '+tempMasterJson.demo[copyMineralid].streak+'</p>'
				  +'<p class="properties"><b>Luster :</b> '+tempMasterJson.demo[copyMineralid].luster+'</p>'
				  +'<p class="properties"><b>Mohs hardness :</b> '+tempMasterJson.demo[copyMineralid].mohs_Hardness+'</p>'
				  +'<p class="properties"><b>Cleavage :</b> '+tempMasterJson.demo[copyMineralid].cleavage+'</p>'
				  +'<p class="properties"><b>Diaphaneity :</b> '+tempMasterJson.demo[copyMineralid].diaphaneity+'</p>'
				  +'<p class="properties"><b>Gravity :</b> '+tempMasterJson.demo[copyMineralid].gravity+'</p>'
				  +'<p class="properties"><b>Chemical composition :</b> '+tempMasterJson.demo[copyMineralid].chemical_Composition+'</p>'
				  +'<p class="properties"><b>Special properties :</b> '+tempMasterJson.demo[copyMineralid].specialProperties+'</p>'
				 
		
		if(mineralCount!=maxIndexArr){
			 	$("#answerPanel").html(answerPanel);
//			 	$("#modalHeading").html("Summary");
			 	$("#ModalFooter").html('<button type="button" class="btn btnStyle"  data-dismiss="modal" style="padding: 5px 20px;" >OK</button>');
			 	$("#AddResult").html(AddResult);
			  	$('#info_div').html();
			}else{
				$("#helpTip").html("");
				$("#helpTip").removeClass("blink");
				$("#answerPanel").html(answerPanel);
				$("#selectAnotherMineral").hide();
//				$("#modalHeading").html("Summary");
				$("#AddResult").html("<center><strong style='color:green;'>Congratulation!!<br> You have completed the experiment successfully.</strong></center><br/>" + AddResult);				
				$("#ModalFooter").html('<button type="button" class="btn btnStyle"  data-dismiss="modal" style="padding: 5px 20px;" >OK</button><button type="button" class="btn btnStyle"  data-dismiss="modal" id="refreshPage" style="padding: 5px 20px;" >Exit</button>');
			}
		}
	$("#refreshPage").click(function(){
		location.reload(true);
	 });	
	 
		$("#selectAnotherMineral").click(function(){
			mineralCount++;
			$("#mineral").attr("disabled", false);
			$("#helpTip").html("");
			$("#helpTip").removeClass("blink");
			$("#info_div").html("");
			$("#info_div").html(thoery);
		 });	
	}
}

function resultModal(){
	var modelAnswerPanel='<!-- Model for answer panel -->'
		+' <div class="modal fade modal" id="myModal">'
		+' <div class="modal-dialog">'
		+' <div class="modal-content">'
      
		+' <!-- Modal Header -->'
		+' <div class="modal-header modal_heading_div">'
		+'  <h4 class="modal-title" id="modalHeading">Confirmation Box</h4>'
		+'  <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
		+' </div>'
        
		+'<!-- Modal body -->'
		+' <div class="modal-body" id="modalBody">'
		+'  <b style="color:red" id="AddResult"></b>'
		+' </div>'
        
		+' <!-- Modal footer -->'
		+' <div class="modal-footer" id="ModalFooter">'
		
		+'  </div>'
		+' </div>'
		+' </div>'
		+' </div>'
		$('#info_div').append(modelAnswerPanel);
}

function imageZoom(imgID, resultID) {
	  var img, lens, result, cx, cy;
	  img = document.getElementById(imgID);
	  result = document.getElementById(resultID);
	  /* create lens: */
	  lens = document.createElement("DIV");
	  lens.setAttribute("class", "img-zoom-lens");

	  /* insert lens: */
	  img.parentElement.insertBefore(lens, img);
	  /* calculate the ratio between result DIV and lens: */
	  cx = result.offsetWidth / lens.offsetWidth;
	  cy = result.offsetHeight / lens.offsetHeight;
	  /* set background properties for the result DIV: */
	  result.style.backgroundImage = "url('" + img.src + "')";
	  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
	  /*
		 * execute a function when someone moves the cursor over the image, or
		 * the lens:
		 */
	  lens.addEventListener("mousemove", moveLens);
	  img.addEventListener("mousemove", moveLens);
	  /* and also for touch screens: */
	  lens.addEventListener("touchmove", moveLens);
	  img.addEventListener("touchmove", moveLens);
	  function moveLens(e) {
	    var pos, x, y;
	    /* prevent any other actions that may occur when moving over the image: */
	    e.preventDefault();
	    /* get the cursor's x and y positions: */
	    pos = getCursorPos(e);
	    /* calculate the position of the lens: */
	    x = pos.x - (lens.offsetWidth / 2);
	    y = pos.y - (lens.offsetHeight / 2);
	    /* prevent the lens from being positioned outside the image: */
	    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
	    if (x < 0) {x = 0;}
	    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
	    if (y < 0) {y = 0;}
	    /* set the position of the lens: */
	    lens.style.left = (x+5) + "px";
	    lens.style.top = (y+5) + "px";
	    /* display what the lens "sees": */
	    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
	  }
	  function getCursorPos(e) {
	    var a, x = 0, y = 0;
	    e = e || window.event;
	    /* get the x and y positions of the image: */
	    a = img.getBoundingClientRect();
	    /* calculate the cursor's x and y coordinates, relative to the image: */
	    x = e.pageX - a.left;
	    y = e.pageY - a.top;
	    /* consider any page scrolling: */
	    x = x - window.pageXOffset;
	    y = y - window.pageYOffset;
	    return {x : x, y : y};
	  }
}

function imageZoomquestionnairePage(imgID, resultID) {
	 var img, lens, result, cx, cy;
	  img = document.getElementById(imgID);
	  result = document.getElementById(resultID);
	  /* create lens: */
	  lens = document.createElement("DIV");
	  lens.setAttribute("class", "img-zoom-lens");

	  /* insert lens: */
	  img.parentElement.insertBefore(lens, img);
	  /* calculate the ratio between result DIV and lens: */
	  cx = result.offsetWidth / lens.offsetWidth;
	  cy = result.offsetHeight / lens.offsetHeight;
	  /* set background properties for the result DIV: */
	  result.style.backgroundImage = "url('" + img.src + "')";
	  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
	  /*
		 * execute a function when someone moves the cursor over the image, or
		 * the lens:
		 */
	  lens.addEventListener("mousemove", moveLens);
	  img.addEventListener("mousemove", moveLens);
	  /* and also for touch screens: */
	  lens.addEventListener("touchmove", moveLens);
	  img.addEventListener("touchmove", moveLens);
	  function moveLens(e) {
	    var pos, x, y;
	    /* prevent any other actions that may occur when moving over the image: */
	    e.preventDefault();
	    /* get the cursor's x and y positions: */
	    pos = getCursorPos(e);
	    /* calculate the position of the lens: */
	    x = pos.x - (lens.offsetWidth / 2);
	    y = pos.y - (lens.offsetHeight / 2);
	    /* prevent the lens from being positioned outside the image: */
	    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
	    if (x < 0) {x = 0;}
	    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
	    if (y < 0) {y = 0;}
	    /* set the position of the lens: */
	    lens.style.left = (x+5) + "px";
	    lens.style.top = (y+5) + "px";
	    /* display what the lens "sees": */
	    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
	  }
	  function getCursorPos(e) {
	    var a, x = 0, y = 0;
	    e = e || window.event;
	    /* get the x and y positions of the image: */
	    a = img.getBoundingClientRect();
	    /* calculate the cursor's x and y coordinates, relative to the image: */
	    x = e.pageX - a.left;
	    y = e.pageY - a.top;
	    /* consider any page scrolling: */
	    x = x - window.pageXOffset;
	    y = y - window.pageYOffset;
	    return {x : x, y : y};
	  
	  }
}

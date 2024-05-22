function showmenu(){
	var mynav=document.getElementById("mynav");
	var hambagger=document.getElementById("ham");
	var close=document.getElementById("close");
	var image=document.getElementById("felo");
	mynav.style.display="block";
	hambagger.style.display="none";
	close.style.display="block";
}


function hidemenu(){
	var mynav=document.getElementById("mynav");
	var hambagger=document.getElementById("ham");
	var close=document.getElementById("close");
	var image=document.getElementById("felo");
	mynav.style.display="none";
	hambagger.style.display="block";
	close.style.display="none";
}





bb=document.getElementById("my_mama");
let current_position;


function moveleft(){
	current_position=parseFloat(window.getComputedStyle(bb).
	getPropertyValue("left"));
	
	if (current_position==-1500)
	{
		console.log("Alah!stillat -1500")
		bb.style.left=0
	}
	else{
		console.log("The Current Position of this Element is "+current_position);
		new_position=current_position-300;
		bb.style.left=new_position
		console.log("we have  moved the element to "+ new_position)
	}
}

function moveright(){
	current_position=parseFloat(window.getComputedStyle(bb).
	getPropertyValue("left"));
	console.log("The Current Position of this Element is "+current_position);
	
	if (current_position==0){
		console.log("Again! it is still zero")
		bb.style.left=-1500
	}
	else{
		new_position=current_position+300;
		bb.style.left=new_position
		console.log("we have  moved the element to "+new_position)
	}
	
}




bb.addEventListener("touchstart",(e)=>{
	touchStartX=e.changedTouches[0].screenX;
	
})

bb.addEventListener("touchend",(e)=>{
	touchendX=e.changedTouches[0].screenX;
	let touchdifference=touchendX-touchStartX;
	console.log("Touch Difference is:",touchdifference)
	if (touchdifference>=100){
			moveright()
	}
	if (touchdifference<=-100){
		if (current_position==-1200){
			console.log("we have reached the end.")
			bb.style.left=0;
			current_position=0;
		}
		else{
			moveleft()
		}
	}
})


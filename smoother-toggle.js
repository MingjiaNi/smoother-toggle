var toggleTrigger = document.querySelectorAll(".toggle-trigger");
var toggleTarget = getTarget(toggleTrigger);
console.log(toggleTarget);
function addEvtListen(){
	// for (i=0; i<toggleTarget.length; i++){
	// 	//Once the animation is finished, remove the class
	// 	toggleTarget[i].addEventListener("transitionend",finishToggle);
	// }

	// for (i=0;i<toggleTrigger.length;i++){
	// 	//once the element with class .toggle-trigger is clicked, add animation to it's data-toggle-target.
	// 	//If the target will show or hide depends on teh css class .toggle-isvisible.
	// 	toggleTrigger[i].addEventListener("click",startToggle);

	// }

	// for (i=0; i<toggleTarget.length; i++){
	// 	//if the target is clicked, toggle
	// 	toggleTarget[i].addEventListener("click",startToggle);
	// }
		toggleTarget[0].addEventListener("transitionend",finishToggle);
		toggleTrigger[0].addEventListener("click",startToggle);
		toggleTarget[0].addEventListener("click",startToggle);


}

function getTarget(trigger){
	var targets = [];
	for (var i = 0; i < trigger.length; i++){
		target = trigger[i].getAttribute("data-toggle-target");
		targets.push(document.getElementById(target));
	}
	return targets;
}

function startToggle() {
	if(this.getAttribute("data-toggle-target")){
		var target = document.getElementById(this.getAttribute("data-toggle-target"));
	}
	else{
		var target = this;
	}
	target.classList.add("toggle-animation");
	if(!target.classList.contains("toggle-isvisible")){
		target.classList.add("toggle-isvisible");
	}
	else{
		target.classList.remove("toggle-isvisible");
	}
}

function finishToggle(){
	this.classList.remove("toggle-animation");
}

window.onload = addEvtListen();

var toggleTrigger = document.querySelectorAll(".toggle-trigger");
var toggleTarget = getTarget(toggleTrigger);

//One the animation is finished, remove the class
toggleTarget.addEventListener("transitionend",finishToggle);
//once the element with class .toggle-trigger is clicked, add animation to it's data-toggle-target.
//If the target will show or hide depends on teh css class .toggle-isvisible.
toggleTrigger.addEventListener("click",startToggle);
//if the target is clicked, toggle
toggleTarget.addEventListener("clicked",startToggle);

function getTarget(trigger){
	var targets = [];
	for (var i = 0; i < trigger.length; i++){
		target = trigger[i].getAttribute("data-toggle-target");
		targets += document.getElementById(target);
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
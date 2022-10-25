// JavaScript code
function search_games() {
	let input = document.getElementById('searchgames').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('card');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}

const header = document.querySelector("header");
const toggle_settings = document.querySelector(".settings");

const settings_cont = document.querySelector(".settings-cont");

function open_settings() {
	settings_cont.style.display = "block";
}

function close_settings() {
	settings_cont.style.display = "none";
}
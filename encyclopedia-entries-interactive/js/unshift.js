var inp = document.getElementById('user-inp');
var addBtn = document.getElementById('add-btn');
var resetBtn = document.getElementById('reset-btn');
var volunteers = [];
var output;
var outputContainer = document.getElementById('current-volunteers');
var newVolunteer;
var l = volunteers.length;

function addVolunteer() {
  l = volunteers.length;
  // if input is empty, return
  if (!inp.value.trim()) {
    return;
  } else {
    // if there is more than one name given, separate them and add to the array one by one
    if (inp.value.match(/[,]/)) {
      newVolunteers = inp.value.split(',');
      for (var i = newVolunteers.length - 1; i >= 0; i--) {
        newVolunteer = '<li>' + newVolunteers[i].trim() + '</li>';
        volunteers.unshift(newVolunteer);
      }
      output = volunteers.join('');
    } else if (l < 1) {
      volunteers.unshift(inp.value);
      volunteers[0] = '<li>' + volunteers[0] + '</li>';
      output = volunteers[0];
    } else {
      newVolunteer = '<li>' + inp.value + '</li>';
      volunteers.unshift(newVolunteer);
      output = volunteers.join('');
    }
    // yay, another volunteer! you get a cat emoji!
    outputContainer.innerHTML = output;
  }
  // reset input field
  inp.value = '';
}

function resetList() {
  volunteers = [];
  output = null;
  newVolunteers = null;
  newVolunteer = null;
  outputContainer.innerHTML = '<p>There are currently no volunteers <span class="sad-cat"></span></p>';
}

addBtn.addEventListener('click', addVolunteer, false);
inp.addEventListener('keypress', function(event) {
  if (event.which == 13 || event.keyCode == 13) {
    addVolunteer();
  }
}, false);
resetBtn.addEventListener('click', resetList, false);

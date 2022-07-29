// Helper functions

/* returns the selected doggo */
function getSelectedDoggo() {
	return document.querySelector('.doggo.fighter.selected');
}
/* removes the selected doggo, if one exists */
function removeSelected() {
	const selected = getSelectedDoggo();
	if (selected) {
		selected.classList.remove('selected');
	}
}

// Clicking a .doggo.fighter adds the selected class to it.
// A doggo with the selected class is considered selected.
// Only one doggo can have the selected class.

document.querySelectorAll('.doggo.fighter').forEach(doggo => {
	doggo.addEventListener('click', e => {
		removeSelected();
		doggo.classList.add('selected');
	});
});

// Clicking a team's name, moves a selected doggo to that team.

document.querySelectorAll('.team > h1').forEach(teamTitle => {
	teamTitle.addEventListener('click', e => {
		// the `closest` method is a query selector that queries for the closest
		//   ancestor (parent, grandparent, etc) that satisfies the query
		// In this case, we are querying for an ancestor with the class 'team'
		const roster = teamTitle.closest('.team').querySelector('.roster');
		let traitorDog = getSelectedDoggo();
		if (traitorDog) {
			roster.append(traitorDog);
		}
	});
});

// Stretch

document.body.addEventListener('click', event => {
	const { target } = event;
	if (!target.closest('.team')) removeSelected();
});

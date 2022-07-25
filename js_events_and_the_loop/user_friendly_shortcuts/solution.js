function getSelected() {
  return document.querySelector('.doggo.fighter.selected'); // null/undefined if nothing is selected
}

function unselectAllDoggos() {
  const selected = getSelected();
  if (selected) {
    selected.classList.remove('selected');
  }
}

// function removeSelected() {
//   const selected = getSelected();
//   if (selected) {
//     selected.remove();
//   }
// }

// document.addEventListener('keydown', e => {
// 	const doggos = document.querySelectorAll('.doggo.fighter');
//   const isCtrlKeyPressed = e.ctrlKey;
//   // e.keyCode 0 -> 48, 9 -> 57;
//   const numberPressed = e.keyCode - 48;
//   const isNumberPressed = numberPressed >= 0 && numberPressed <= doggos.length - 1;

//   if (isCtrlKeyPressed && isNumberPressed) {
//     unselectAllDoggos();
//     const selected = doggos[numberPressed];
//     selected.classList.add('selected');
//   } else if (e.key === "Backspace") {
//     removeSelected();
//   }
// });

// with stretch

document.addEventListener('keydown', e => {
  
  const isCtrlKeyPressed = e.ctrlKey;
  // e.keyCode 0 -> 48, 9 -> 57;
  const numberPressed = e.keyCode - 48;
	const isNumberPressed = numberPressed >= 0 && numberPressed <= doggos.length - 1;
	const selected = getSelected();

	if (selected && isCtrlKeyPressed && e.key === 'ArrowDown') { // Ctrl + 0......... number of doggos
		if (selected.parentNode.parentNode.classList.contains('salmon')) {
			document.querySelector('.teal > .roster').append(selected);
			unselectAllDoggos();
		}
	} else if (selected && isCtrlKeyPressed && e.key === 'ArrowUp') {
		if (selected.parentNode.parentNode.classList.contains('teal')) {
			document.querySelector('.salmon > .roster').append(selected);
			unselectAllDoggos();
		}
	} else if (isCtrlKeyPressed && isNumberPressed) {
    unselectAllDoggos();
    const selected = doggos[numberPressed];
    selected.classList.add('selected');
  } else if (e.key === "Backspace") {
    removeSelected();
  }
});
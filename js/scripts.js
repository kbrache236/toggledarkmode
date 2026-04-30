// Toggle between light and dark mode via a button
// check for a saved 'darkMode' in local storage
let darkMode = localStorage.getItem('darkMode');

// load the dark-mode-toggle button element into a variable
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    // add the darkMode class to the body element
    document.body.classList.add('darkmode');
    // update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const enableLightMode = () => {
    // remove the darkMode class to the body element
    document.body.classList.remove('darkmode');
    // update darkMode in localStorage
    localStorage.setItem('darkMode', null);
}

// if user has already visited and if so, enable dark mode if needed
if(darkMode === 'enabled') {
    enableDarkMode();
}

// when someone clicks the button
darkModeToggle.addEventListener('click', () => {
    // check localStorage value
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});

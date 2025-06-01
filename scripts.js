let menu = document.getElementById('menu');
let menu_bar = document.getElementById('menu_bar');

menu_bar.addEventListener('click', function() {
     menu.classList.toggle('show-menu'); 
    } )


// Theme toggle functionality
const themeToggle = document.getElementById('checkbox');
const body = document.body;
const THEME_KEY = 'theme-preference';

// Function to apply the selected theme
function applyTheme(isDarkMode) {
    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Function to save theme preference to local storage
function saveThemePreference(isDarkMode) {
    localStorage.setItem(THEME_KEY, isDarkMode ? 'dark' : 'light');
}

// Function to load theme preference from local storage
function loadThemePreference() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark') {
        themeToggle.checked = true;
        applyTheme(true);
    } else { // Includes null (no preference saved) or 'light'
        themeToggle.checked = false;
        applyTheme(false);
    }
}

// Event listener for the toggle switch
if (themeToggle) {
    themeToggle.addEventListener('change', function() {
        const isDarkMode = this.checked;
        applyTheme(isDarkMode);
        saveThemePreference(isDarkMode);
    });
}

// Load theme preference when the page loads
document.addEventListener('DOMContentLoaded', loadThemePreference);

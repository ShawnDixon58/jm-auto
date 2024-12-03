// Get the current location's path and determine the base directory
let basePath = '';

// Check if running on GitHub Pages (i.e., if the URL contains '/jm-auto/')
console.log("hostname: ", window.location.hostname)
if (window.location.hostname === 'shawndixon58.github.io') {
  basePath = window.location.origin + '/jm-auto'; // Set base path for GitHub Pages
  console.log("GITHUB")
} else {
  basePath = window.location.origin + '/'; // Local environment (no subfolder)
}
//const basePath = window.location.origin + '/';

// Create header container
const header = document.createElement('div');
header.className = 'header';

// Create logo link element
const logoLink = document.createElement('a');
logoLink.href = basePath + 'index.html'; // Path to your index.html

// Create logo image element
const logo = document.createElement('img');
logo.className = 'logo';
logo.src = '/assets/jmauto.png';
logo.alt = 'J&M Auto Sales Logo';

// Append logo to logo link
logoLink.appendChild(logo);

// Append logo link to header
header.appendChild(logoLink);

// Create contact icons container
const contactIcons = document.createElement('div');
contactIcons.className = 'contact-icons';

// Create Facebook icon
const facebookLink = document.createElement('a');
facebookLink.href = 'https://www.facebook.com/jandmautosalespearidge/';
facebookLink.className = 'fa fa-facebook';
facebookLink.style.color = '#1e9bff';

// Create Messenger icon
const messengerLink = document.createElement('a');
messengerLink.href = 'http://m.me/jandmautosalespearidge';
messengerLink.className = 'fa fa-comment';
messengerLink.style.color = '#1e9bff';

// Create Phone icon
const phoneLink = document.createElement('a');
phoneLink.href = 'tel:4796166430';
phoneLink.className = 'fa fa-phone';
phoneLink.style.color = '#1e9bff';

// Append icons to contact icons container
contactIcons.appendChild(facebookLink);
contactIcons.appendChild(messengerLink);
contactIcons.appendChild(phoneLink);

// Append contact icons container to header
header.appendChild(contactIcons);

// Append header to the body or any other container
document.body.appendChild(header);


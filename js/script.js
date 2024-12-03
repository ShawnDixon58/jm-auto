// Load Firebase App (the core Firebase SDK)
document.write('<script src="https://www.gstatic.com/firebasejs/9.4.0/firebase-app-compat.js"></script>');
// Load Firebase Firestore (or any other Firebase service you're using)
document.write('<script src="https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore-compat.js"></script>');

// Define openTab function
function openTab(evt, tabName) {
    // Get all elements with class="tabcontent" and hide them
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Callback function to initialize Firebase after scripts have loaded
function initializeFirebase() {
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCGOW-SC--iGj863j0x97mqIHej_vOYeT4",
        authDomain: "jmauto-13009.firebaseapp.com",
        projectId: "jmauto-13009",
        storageBucket: "jmauto-13009.appspot.com",
        messagingSenderId: "457792057306",
        appId: "1:457792057306:web:b1cf2a75ddb801a9d65ae3",
        measurementId: "G-QX1T6N90R7"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Access Firestore instance
    const db = firebase.firestore();

    // Reference to the vehicles collection
    const vehiclesRef = db.collection('vehicles');

    // Get vehicle data from Firestore
    vehiclesRef.get().then((querySnapshot) => {
        const vehicleList = document.getElementById('vehicleList');
        querySnapshot.forEach((doc) => {
            const vehicleData = doc.data();
            const vehicleHtml = `
                <div class="vehicle">
                    <img src="${vehicleData.image}" alt="${vehicleData.make} ${vehicleData.model}">
                    <div class="vehicle-details">
                        <h2>${vehicleData.make} ${vehicleData.model}</h2>
                        <p>Year: ${vehicleData.year}</p>
                        <p>Price: $${vehicleData.price}</p>
                        <p>Description: ${vehicleData.description}</p>
                    </div>
                </div>
            `;
            vehicleList.innerHTML += vehicleHtml;
        });
    }).catch((error) => {
        console.error('Error getting vehicles: ', error);
    });

    // Example: Retrieve data from Firestore
    db.collection("cars").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    });

    openTab({currentTarget: document.querySelector('.tablinks')}, 'vehicles');
}

// Add event listener to ensure that initializeFirebase is called after all scripts have loaded
window.addEventListener('DOMContentLoaded', initializeFirebase);

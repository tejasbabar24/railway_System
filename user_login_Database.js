// /scripts/login.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getDatabase, get, ref } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyDRiowkh8Kx5qG8eEWZjEo7ipGYfFvtIEg",
    authDomain: "railway-system-4e116.firebaseapp.com",
    databaseURL: "https://railway-system-4e116-default-rtdb.firebaseio.com",
    projectId: "railway-system-4e116",
    storageBucket: "railway-system-4e116.appspot.com",
    messagingSenderId: "909169868428",
    appId: "1:909169868428:web:6cba415c97e0024b6c45a9",
    measurementId: "G-D91SBZS9L3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);



document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('submit_form').addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = document.getElementById('log_username').value;
        const password = document.getElementById('log_password').value;

        function readUserData() {
            const tcref = ref(db, 'user_data');
            console.log("step 1")
            get(tcref).then((snapshot) => {
                let userFound = false;

                snapshot.forEach((childSnapshot) => {
                    const childData = childSnapshot.val();
                    console.log(snapshot);

                    if ((childData.email === username || childData.phone === username) && childData.password === password) {
                        userFound = true;
                        alert("Successfully redirected");
                        window.location.href = 'User_Fine_details.html';
                        localStorage.setItem('phoneNumber', username)
                    }
                });

                if (!userFound) {
                    alert("Invalid credentials, please try again.");
                }
            }).catch((error) => {
                console.error("Error reading user data: ", error);
                alert("Error reading user data, please try again later.");
            });
        }

        readUserData();
    });
});


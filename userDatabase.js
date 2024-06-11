import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getDatabase, get, set, ref } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

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

const email = document.getElementById('email');
const phone = document.getElementById('phone');
const pass = document.getElementById('password');
const age = document.getElementById('age');

function writeUserData(email, phone, pass, age) {
    set(ref(db, 'user_data/' + phone), {
        email: email,
        phone: phone,
        password: pass,
        age: age
    }).then(() => {
        console.log("User data added successfully");
    }).catch((error) => {
        console.error("Error adding user data: ", error);
    });
}

document.getElementById('myform').addEventListener('submit', (event) => {
    event.preventDefault(); 
    writeUserData(email.value, phone.value, pass.value, age.value);
});



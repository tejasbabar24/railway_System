import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getDatabase, get, push, ref } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

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

function writeFineData(station, phone, email, fineType, amt, fineId) {
    const fineRef = ref(db, 'fine_data'); 
    push(fineRef, {
        station: station,
        phone: phone,
        email: email,
        fineType: fineType,
        amount: amt,
        fineid: fineId,
        status:"unpaid"
    }).then(() => {
        console.log("Successfully added new record.");
        window.location.reload();

    }).catch((error) => {
        console.error("Error adding record:", error);
    });
}

const form = document.getElementById('generateFineForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const stn = document.getElementById('Station').value;
    const phn = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const finetype = document.getElementById('finetype').value;
    const amt = document.getElementById('Amount').value;
    const Fid = document.getElementById('Fine').value;

    

    writeFineData(stn, phn, email, finetype, amt, Fid);
    console.log("Triggered writeFineData");

});
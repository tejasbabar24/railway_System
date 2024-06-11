import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getDatabase, get, orderByChild, ref, query, equalTo } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';


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



function readFineDetails() {
    const tcref = ref(db, 'fine_data');
    const phoneNumber = localStorage.getItem('phoneNumber');
    const phoneQuery = query(tcref, orderByChild('phone'), equalTo(phoneNumber));

    get(phoneQuery).then((snapshot) => {
        if (snapshot.exists()) {
             

            snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();
                console.log("Matching user data:", childData);
                // If you want to log only specific details, you can do so here
                console.log(`Email: ${childData.email}`);
                console.log(`Phone: ${childData.phone}`);
                console.log(`Fine Type: ${childData.fineType}`);
                console.log(`Amount: ${childData.amount}`);
                console.log(`Fine ID: ${childData.fineid}`);
                // Add other fields as needed

                // Populate the table with the data
                const row = finedetails.insertRow();
                row.insertCell().textContent = childData.fineid;
                row.insertCell().textContent = childData.fineType;
                row.insertCell().textContent = childData.station;
                row.insertCell().textContent = childData.amount;
                row.insertCell().textContent = childData.status;
            });
        } else {
            console.log("No user found with the provided phone number.");
        }
    }).catch((error) => {
        console.error("Error reading data:", error);
    });
}

readFineDetails();

const table = document.getElementById('finedetails');
            const form = document.getElementById('fineForm');
            const fineIdInput = document.getElementById('Fine');
            const phoneInput = document.getElementById('phone');
            const fineTypeInput = document.getElementById('finetype');
            const amountInput = document.getElementById('Amount');


            table.addEventListener('click', (event) => {
                const target = event.target;
                const row = target.closest('tr');
                
                if (row && row.rowIndex > 0) { // Exclude the header row
                    const cells = row.getElementsByTagName('td');
                    fineIdInput.value = cells[0].innerText;
                    const selectedValue = cells[1].innerText; // Assume this contains the fine type code
                    phoneInput.value = cells[2].innerText;
                    amountInput.value = cells[3].innerText;
                    
                    switch (selectedValue) {
                        case 'TWT':
                            fineTypeInput.value = "Travel Without Ticket";
                            break;
                        case 'NPT':
                            fineTypeInput.value = "No Platform Ticket";
                            break;
                        case 'WT':
                            fineTypeInput.value = "Wrong Ticket";
                            break;
                        case 'SPS':
                            fineTypeInput.value = "Split On Station";
                            break;
                        default:
                            fineTypeInput.value = ''; 
                            break;
                    }
                }
            });
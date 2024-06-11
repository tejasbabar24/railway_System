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

function writeTcData(id, pass, branch) {
    set(ref(db, 'tc_data/' + id), {
        id: id,
        password: pass,
        branch: branch
    });
}



// writeTcData('A10B', '12345678', 'Dadar');

const psw = document.getElementById('password');
const username = document.getElementById('username');

document.getElementById('loginform').addEventListener('submit', (event) => {
    event.preventDefault(); 

    function readTcData() {
        const tcref = ref(db, 'tc_data');

        get(tcref).then((snapshot) => {
            let userFound = false;

            snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();

                if (childData.id === username.value && childData.password === psw.value) {
                    userFound = true;
                    window.location.href = "Tc _fine_page.html";
                    alert("successfully redirected");
                    
                }
                else
                {
                    alert("failed to  redirected");
                    
                }
            });

           
        });
    }
    
    readTcData();
});

console.log("data added successfully");

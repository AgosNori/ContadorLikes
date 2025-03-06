// Importar Firebase y la base de datos
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, get, set, onValue } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAkxyR8cxg2en5oHEuwxPImycdU5OR9A5k",
    authDomain: "likesdigi-f4e96.firebaseapp.com",
    projectId: "likesdigi-f4e96",
    storageBucket: "likesdigi-f4e96.firebasestorage.app",
    messagingSenderId: "154726650120",
    appId: "1:154726650120:web:c369bc073249e293e71cbd",
    measurementId: "G-35968KSVRG"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const likeRef = ref(db, "likes");

// Seleccionar elementos HTML
const likeBtn = document.querySelector(".like-btn");
const likeCount = document.querySelector(".like-count");

// Obtener y mostrar los likes en tiempo real
onValue(likeRef, (snapshot) => {
    likeCount.textContent = snapshot.val() || 0;
});

// Evento para aumentar likes
likeBtn.addEventListener("click", async () => {
    const snapshot = await get(likeRef);
    const likes = snapshot.val() || 0;
    set(likeRef, likes + 1); // Guardar el nuevo número de likes
});

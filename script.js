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
  measurementId: "G-35968KSVRG",
  databaseURL: "https://likesdigi-f4e96-default-rtdb.firebaseio.com/" // Agrega la URL de tu base de datos en tiempo real
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const likeBtn = document.querySelector(".like-btn");
const likeCount = document.querySelector(".like-count");

const likesRef = ref(database, "likes");

// 🔹 Cargar los likes en tiempo real
onValue(likesRef, (snapshot) => {
  const data = snapshot.val();
  if (data !== null) {
    likeCount.textContent = data; // Mostrar los likes actuales
  }
});

// 🔹 Evento para aumentar likes
likeBtn.addEventListener("click", () => {
  get(likesRef).then((snapshot) => {
    let currentLikes = snapshot.val() || 0;
    set(likesRef, currentLikes + 1); // Sumar 1 like y guardar en Firebase
  });
});

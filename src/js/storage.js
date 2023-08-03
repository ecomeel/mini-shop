import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, addDoc } from "firebase/firestore/lite";

export class Storage {
    constructor() {
        this.firebaseConfig = {
            apiKey: "AIzaSyAattyuTmYybPgjxOsXHkfDM3BUAPrBPvM",
            authDomain: "mini-shop-2b17a.firebaseapp.com",
            projectId: "mini-shop-2b17a",
            storageBucket: "mini-shop-2b17a.appspot.com",
            messagingSenderId: "390472860806",
            appId: "1:390472860806:web:1c06538673385de3243d07",
        };
        this.app = initializeApp(this.firebaseConfig);
        this.db = getFirestore(this.app);
    }

    async pullProducts() {
        const querySnapshot = await getDocs(collection(this.db, "products"));
        const products = [];
        querySnapshot.forEach((doc) => {
            products.push({
                id: doc.id,
                name: doc.data().name,
                model: doc.data().model,
                price: doc.data().price,
                imgSrc: doc.data().imgSrc,
                shortDesc: doc.data().shortDesc,
                fullDesc: doc.data().fullDesc
            })
        });
        return products;
    }

    async pushBag(product) {
        try {
            const docRef = await addDoc(collection(this.db, 'bag'), product);
            // console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
}
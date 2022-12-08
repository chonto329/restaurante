import { collection, doc, setDoc, getDocs } from 'firebase/firestore/lite';
import { firestore } from './firebase';

const CrearRestaurante = async (restaurante) => {
    const nuevo = doc(collection(firestore, "/taller-2"));
    await setDoc(nuevo, restaurante);
}

const ListarRestaurantes = async () => {
    const listresta = collection(firestore, '/taller-2');
    // arreglo de documentos de la collecion de productos
    const docs = await getDocs(listresta); // llamado a la base de datos firestore
    const restaurante = [];
    docs.forEach(document => {
        restaurante.push({
            id: document.id,
            nombre: document.data().nombre,
            direccion: document.data().direccion,
            descripcion: document.data().descripcion,
            url: document.data().url
        });
    });
    return restaurante;
}

export {
    CrearRestaurante,
    ListarRestaurantes,
}
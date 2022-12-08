import React, { useState, useEffect } from 'react'
import { ListarRestaurantes } from '../crud';
import swal from 'sweetalert2';

export const BuscarRestaurante = () => {

    const [usuario, setUsers] = useState([]);
    const [buscar, setBuscar] = useState("");


    const buscador = (e) => {
        setBuscar(e.target.value);
    }

    /*let resul = [];
    if(!buscar){
        resul = usuario;
    }else{
        resul = usuario.filter((dato) => dato.nombre.toLowerCase().includes(buscar.toLocaleLowerCase()));
    }*/

    useEffect(() => {
        lisRestaurante();
    }, []);

    const lisRestaurante = async () => {

        try {
            swal.fire({ allowOutsideClick: false, text: "Cargando..." });
            swal.showLoading();
            const lista = await ListarRestaurantes();
            setUsers(lista);
            swal.close();


        } catch (error) {
            console.log(error);
            swal.close();
        }
    }

    let resul = [];
    if (!buscador) {
        resul = usuario;
    } else {
        resul = usuario.filter((dato) => dato.nombre.toLowerCase().includes(buscar.toLocaleLowerCase()));

    }

    return (
        <div className="container-fluid mt-3 mb-3 ancho">
            <h2 className='m-4 text-center'>Buscar Restaurantes</h2>
            <input className='form-control mb-3' type="text" onChange={buscador} value={buscar} name="usuario" required placeholder='Buscar' />

            <div className="row row-cols-1 row-cols-md-4 g-4">

                {
                    resul.map(r => {
                        return (
                            <div className="col" key={r.id}>
                                <div className="card card-t">
                                    <img src={r.url} className="card-img-top img-fluid col-md-8 col-sm-12 tamaño" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{r.nombre}</h5>
                                        <p className="card-text text-center">{r.direccion}</p>
                                        <p className="card-text text-center">{r.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

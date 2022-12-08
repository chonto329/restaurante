import React, { useState } from 'react'
import { listaProductos } from '../data-producto'
import swal from 'sweetalert2';
import "../crud";
import { CrearRestaurante } from '../crud';



export const NuevoRestaurante = () => {

  const [formulario, setValoresFormulario] = useState({});
  let { nombre = '', descripcion = '', direccion = '', url = '' } = formulario;

  // permite asignar los valores del formulario a la variable de estado  formValues
  const handleOnChange = (e) => {
    setValoresFormulario({ ...formulario, [e.target.name]: e.target.value });

  }

  // pinta los valores del formulario cuando presionan el boton
  const handleOnSubmit = async (e) => {
    e.preventDefault(); // evita que se recargue el formulario
    /*listaProductos.push(formulario);
    console.log(formulario);*/

    try {
      swal.fire({allowOutsideClick: false, text: "Guardando..."});
      swal.showLoading();
      await CrearRestaurante(formulario);
      swal.close();
      console.log("Restaurante Creado");

    } catch (error) {
      console.log(error);
      swal.close();
    }
    setValoresFormulario(nombre = "", descripcion = "", direccion = "", url = "");
  }

  return (

    <div className="container-fluid mt-3 ancho">



      <form onSubmit={(e) => handleOnSubmit(e)} autoComplete="off">
        <div className="mb-3">
          <label className="form-label">Nombre Restaurante</label>
          <input required type="text" name="nombre" value={nombre}
            className="form-control" onChange={(e) => { handleOnChange(e) }} />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input required type="text" name="descripcion" value={descripcion}
            className="form-control" onChange={(e) => { handleOnChange(e) }} />
        </div>
        <div className="mb-3">
          <label className="form-label">Direccion</label>
          <input required type="text" className="form-control" name='direccion'
            value={direccion} onChange={(e) => { handleOnChange(e) }} />
        </div>
        <div className="mb-3">
          <label className="form-label">Url image</label>
          <input required type="Url" className="form-control" name='url'
            value={url} onChange={(e) => { handleOnChange(e) }} />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary form-control">Guardar</button>
        </div>
      </form>
    </div>

  )
}

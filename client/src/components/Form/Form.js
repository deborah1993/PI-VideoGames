import React from "react";
import "./Form.css";
import { connect } from "react-redux";
import { addGame, getGenres } from "../../actions";
import NavBar from "../NavBar/NavBar";

export function AddGame(props) {
  React.useEffect(() => {
    props.getGenres();
  }, []);
  //tengo aca todos mis inputs con sus values
  const [input, setInput] = React.useState({
    background_image: "",
    name: "",
    description: "",
    fechaLanzamiento: "",
    rating: "",
    genre: [],
    plataformas: [],
  });
  // con esta funcion voy modificando mi estado a medida que escriben
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  // con esta funcion despacho mi addGame con los valores del form
  function handleSubmit(e) {
    e.preventDefault();
    props.addGame(input);
    setInput({
      background_image: " ",
      name: " ",
      description: " ",
      fechaLanzamiento: " ",
      rating: " ",
      genre: [],
      plataformas: [],
    });
  }
  //me traigo los inputs checkbox
  const checkboxes = document.querySelectorAll(".checkbox");

  //con esta funcion capturo los generos y los paso al input form
  function handleChangeGeneros(e) {
    let checked = [];
    checkboxes.forEach((box) => {
      if (box.checked === true) {
        checked.push(box.value);
      }
      return checked;
    });
    setInput({
      ...input,
      genre: checked,
    });
  }

  //En este estado tengo el valor del input Plataforma:
  const [plataforma, setPlataforma] = React.useState("");
  //esta funcion me setea el estado Platadorma
  function handleChangePlataforma(e) {
    setPlataforma(e.target.value);
  }

  function handleChangePlataformas(e) {
    const allPlataformas = [...input.plataformas];
    allPlataformas[e.target.id][e.target.dataset.name] = e.target.value;
  }

  const agregarPlataforma = () => {
    setInput({
      ...input,
      plataformas: [...input.plataformas, plataforma],
    });
    setPlataforma("");
  };

  const [errorF, setErrorF] = React.useState("");

  function validarFecha(e) {
    if (
      !/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(
        e.target.value
      )
    ) {
      setErrorF("formato de fecha no valido");
    } else {
      setErrorF("");
    }
    setInput({
      ...input,
      fechaLanzamiento: e.target.value,
    });
  }

  const [errorR, setErrorR] = React.useState("");

  function validarRanting(e) {
    if (e.target.value > 5 || e.target.value < 0) {
      setErrorR("El Rating debe ser entre 0-5");
    } else {
      setErrorR("");
    }
    setInput({
      ...input,
      rating: e.target.value,
    });
  }

  return (
    <div className="contenedor-pagina">
      <NavBar />
      <form className="contenedor-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="contenedor-resto">
          <div className="div-image">
            <label className="titulo">Imagen: </label>
            <input
              className="input"
              onChange={handleChange}
              type="text"
              value={input.background_image}
              name="background_image"
            ></input>
          </div>
          <div className="div-nombre">
            <label className="titulo">Nombre: </label>
            <input
              className="input"
              type="text"
              value={input.name}
              onChange={handleChange}
              name="name"
            ></input>
          </div>
          <div className="div-descripcion">
            <label className="titulo">Descripcion: </label>
            <textarea
              className="input"
              value={input.description}
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>
          <div className="div-fl">
            <label className="titulo">Fecha de Lanzamiento: </label>
            <input
              className={errorF && "rojo"}
              value={input.fechaLanzamiento}
              onChange={(e) => validarFecha(e)}
              type="text"
              name="fechaLanzamiento"
            ></input>
            {!errorF ? null : <span className="span-rojo">{errorF}</span>}
          </div>
          <div className="div-rating">
            <label className="titulo">Rating: </label>
            <input
              className={errorR && "rojo"}
              value={input.rating}
              onChange={(e) => validarRanting(e)}
              name="rating"
            ></input>
            {!errorR ? null : <span className="span-rojo">{errorR}</span>}
          </div>
          {/*inputs dinamicos para agrgar generos*/}
          <div className="div-generos">
            <label className="titulo" htmlFor="genero">
              Genero:
            </label>
            {props.genres?.map((gen, i) => (
              <div key={i}>
                <label>{gen.name}</label>
                <input
                  type="checkbox"
                  className="checkbox"
                  value={gen.id}
                  onChange={handleChangeGeneros}
                ></input>
              </div>
            ))}
          </div>
          {/*inputs dinamicos para agrgar plataformas*/}
          <div className="div-plataformas">
            <label className="titulo" htmlFor="plataforma">
              Plataformas:
            </label>
            <input
              className="input"
              type="text"
              name="plataforma"
              value={plataforma}
              onChange={handleChangePlataforma}
            />
            <input
              type="button"
              value="Agregar plataforma"
              onClick={agregarPlataforma}
            />
            {input.plataformas.map((plat, i) => (
              <div key={100 + i}>
                <label className="titulo">{`Plataforma ${i + 1}:`} </label>
                <input
                  className="input"
                  type="text"
                  key={-i}
                  name={`plataforma-${i}`}
                  value={plat}
                  onChange={handleChangePlataformas}
                ></input>
              </div>
            ))}
          </div>
          <button className="submit" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addGame: (game) => dispatch(addGame(game)),
    getGenres: () => dispatch(getGenres()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGame);

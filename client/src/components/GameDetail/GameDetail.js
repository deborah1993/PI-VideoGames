import React from "react";
import "./GameDetail.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetail } from "../../actions";
import NavBar from "../NavBar/NavBar";

function GameDetail(props) {
  const params = useParams();
  //console.log(params.id); me trae correctamente el id de params
  React.useEffect(() => {
    const id = params.id;
    props.getGameDetail(id);
  }, []);
  //este console log me muestra que me llega por props el state y la action
  //console.log(props);
  //console.log(props.gameDetail);
  return (
    //<h1>HOLA MUNDO</h1>
    <div className="background">
      <NavBar />
      <div className="contenedor-detail">
        <div className="body-card-detail">
          {props.gameDetail && (
            <img
              src={props.gameDetail.background_image}
              alt="fondo"
              className="card-header-detail"
            />
          )}
          {props.gameDetail && (
            <div className="card-body-detail">
              <h4 className="game-name-detail">{props.gameDetail.name}</h4>
              <p className="p-rating">{props.gameDetail.rating}</p>
              <p className="p-description">DESCRIPCION</p>
              <p className="p-detail">{props.gameDetail.description_raw}</p>
            </div>
          )}
          {props.gameDetail && (
            <div className="card-footer-detail">
              <h5 className="generos-detail">GENEROS:</h5>
              <ul className="ul-generos">
                {props.gameDetail.genres?.map((genre, i) => (
                  <li key={i}>{genre.name}</li>
                ))}
              </ul>
              <h5 className="plataformas-detail">PLATAFORMAS:</h5>
              <ul className="ul-platforms">
                {props.gameDetail.platforms?.map((plataforma, i) => (
                  <li key={i} className="li-platforms">
                    {plataforma.platform.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    gameDetail: state.gameDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGameDetail: (id) => dispatch(getGameDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetail);

import React from "react";
import "./Home.css";
import { connect } from "react-redux";
import { useState } from "react";
import Pagination from "../Pagination/Pagination.js";
import { getGames, getGenres } from "../../actions/index.js";
import Games from "../Games/Games";
import NavBar from "../NavBar/NavBar.js";

function Home(props) {
  // console.log(props);

  React.useEffect(() => {
    props.getGames();
    props.getGenres();
  }, []); // en este arreglo de dependencias pongo las props o estados qe queiro q updeteen mi componente
  //si le paso el arreglo de dependencias vacio solo se ejecuta cuando se monta el componente
  //console.log(props.loadedGames);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  //Obtener posts actuales para paginar
  const indexLastPost = currentPage * postsPerPage; // obtengo el indice del post max de mi pagina actual
  const indexFirstPost = indexLastPost - postsPerPage; //obtengo el indice del post min de mi pag actual
  const currentPosts = props.loadedGames?.slice(indexFirstPost, indexLastPost);

  //console.log(currentPosts); // me trae solo los 15 posts

  //Cambiar pagina
  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <div className="body-home">
      <NavBar />
      <Games posts={currentPosts} currentPage={currentPage} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={props.loadedGames.length}
        paginate={paginate}
      ></Pagination>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadedGames: state.loadedGames,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGames: () => dispatch(getGames()),
    getGenres: () => dispatch(getGenres()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

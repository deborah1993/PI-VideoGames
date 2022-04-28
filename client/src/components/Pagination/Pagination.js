import React from "react";
import "./Pagination.css";

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  //creo un arreglo con la cantidad de paginas q voy a necesitar
  const pageNumbers = [];
  //Divido la cantidad de juegos totales por la cantidad por pagina (15) y pusheo el indice a mi array
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  //renderizo una lista desordenada con los numeros como items-links de cada numero de mi arreglo de paginas
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={(e) => paginate(e, number)}
              href="home"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

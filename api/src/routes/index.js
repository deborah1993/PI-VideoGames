require("dotenv").config();
const { Router } = require("express");
const { API_KEY } = process.env;
const axios = require("axios");
const sequelize = require("../db.js");
const { Videogame, Genre } = require("../db.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogame/:id", (req, res) => {
  const { id } = req.params;
  axios
    .get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    .then((response) => res.status(200).send(response.data))
    .catch((error) => console.log(error));
});

router.get("/videogames", async (req, res) => {
  const addedGames = await Videogame.findAll();
  //console.log(addedGames);
  const { name } = req.query;
  if (name) {
    axios
      .get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
      .then((response) =>
        // console.log(response.data.results) // me trae los datos correctamente
        res.status(200).send(addedGames.concat(response.data.results))
      )
      .catch((err) => res.status(400).send(console.log(err)));
  } else {
    // https://api.rawg.io/api/games?key=df67fc3606494b4ab8e02879ed578601
    //`https://api.rawg.io/api/games?key=${API_KEY}`;
    let games = [];
    var i = 0;
    var url = `https://api.rawg.io/api/games?key=${API_KEY}`;

    function fetchAxios(arg1) {
      //caso de corte cuando i llegue a 5 xq solo necesito 100 juegos y me devuelve 20 x pagina
      if (i === 5) {
        //console.log(games); // me trae e arreglo con los juegos
        return res.status(200).send(addedGames.concat(games));
      } else if (i < 5) {
        axios.get(arg1).then((response) => {
          //voy agregando juegos a mi arreglo
          games = games.concat(response.data.results);
          // cambio mi url a next page
          arg1 = response.data.next;
          //aumento i
          i++;
          //llamo a la recursion
          return fetchAxios(arg1);
        });
      }
    }
    return fetchAxios(url);
  }
});

router.get("/genres", async (req, res) => {
  const generos = await Genre.findAll();
  if (generos.length > 0) {
    axios
      // generos.map((genero) => genero.toJSON())
      .get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
      .then((response) => res.status(200).send(response.data.results));
  } else {
    axios
      .get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
      .then((response) => {
        response.data.results.map(
          async (genero) =>
            await Genre.create({
              nombre: genero.name,
              id: genero.id,
            })
        );
        res.status(200).send(response.data.results);
      })
      .catch((err) => res.status(400).send(console.log(err)));
  }
});

router.post("/videogame", async (req, res) => {
  //console.log(req.body);
  try {
    const {
      background_image,
      name,
      description,
      fechaLanzamiento,
      rating,
      genre,
      plataformas,
    } = req.body;
    if (!name) {
      res.status(400).send(console.log("Faltan datos necesarios"));
    } else {
      const videojuego = await Videogame.create({
        background_image: background_image,
        name: name,
        description: description,
        fechaLanzamiento: fechaLanzamiento,
        rating: rating,
        genre: genre || null,
        plataformas: plataformas || null,
      });
      res.status(200).send(console.log("VideoJuego creado con exito!"));
    }
  } catch (error) {
    res.status(400).send(console.log(error));
  }
});

module.exports = router;

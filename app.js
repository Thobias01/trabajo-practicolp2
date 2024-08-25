const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { title } = require('process');

const movies = [
  { 
    title: 'Inception', 
    description: 'Un thriller alucinante de Christopher Nolan.',
    image: 'https://i.pinimg.com/564x/89/7a/70/897a706ad6a06d93fa732c548cac367c.jpg'
  },
  { 
    title: 'Rápidos y Furiosos X', 
    description: 'Dom Toretto y sus familias se enfrentan al peor enemigo imaginable, uno llegado desde el pasado con sed de venganza, dispuesto a cualquier cosa con tal de destruir todo aquello que Dom ama.',
    image: 'https://i.pinimg.com/564x/8f/28/37/8f2837e6778bc3c8309f7a0f9573b4a2.jpg' 
  },
  { 
    title: 'Spider Man ', 
    description: 'Luego de sufrir la picadura de una araña genéticamente modificada, un estudiante de secundaria tímido y torpe adquiere increíbles capacidades como arácnido. Pronto comprenderá que su misión es utilizarlas para luchar contra el mal y defender a sus vecinos.',
    image: 'https://i.pinimg.com/564x/8d/10/b5/8d10b5c81208945c2837ded766697d71.jpg' 
  },
  { 
    title: 'Rambo', 
    description: 'John Rambo es un veterano boina verde que luchó en Vietnam. Un día va a visitar a un viejo amigo del ejército pero se entera de que ha muerto. Algunos días después, la policía lo detiene por vagabundo y se enseña con él. En ese momento, John recuerda los terrores y las torturas que sufrió durante la guerra de Vietnam y reacciona violentamente.',
    image: 'https://i.pinimg.com/564x/7e/ee/7d/7eee7df2ab588c565b67db04d0d8e956.jpg' 
  },
  { 
    title: 'Deadpool', 
    description: 'Wade Wilson, tras ser sometido a un cruel experimento científico, adquiere poderes especiales que le convierten en Deadpool. Armado con sus nuevas habilidades y un retorcido sentido del humor tratará de dar caza al hombre que casi destruye su vida.',
    image: 'https://i.pinimg.com/564x/e5/a1/f4/e5a1f46df06224b572fd3ee3451244b4.jpg' 
  },
  { 
    title: 'Predator', 
    description: 'Un grupo de mercenarios es contratado por la CIA para rescatar a unos pilotos que han sido apresados por la guerrilla en la selva centroamericana.',
    image: 'https://i.pinimg.com/564x/f9/1e/62/f91e62e0c852bf4191868c09f8dc52d4.jpg' 
  },
  { 
    title: 'El aro', 
    description: 'Tras visionar una cinta de vídeo con perturbadoras imágenes recibes una llamada que anuncia tu muerte. Siete días después, la profecía se cumple.',
    image: 'https://i.pinimg.com/564x/91/f5/1d/91f51d14bc8e621ca9e1ee846f3d437e.jpg' 
  },
  { 
    title: 'After', 
    description: 'el amor de Tessa (Josephine Langford) y Hardin (Hero Fiennes Tiffin) nunca ha sido fácil. Mientras él permanece en Londres después de la boda de su madre y se hunde cada vez más en su propia oscuridad, ella regresa a Seattle. Tessa es la única capaz de entenderle y calmarle... él la necesita, pero ella ya no es la chica buena y dulce que era cuando llegó a la universidad. Deberá plantearse si lo que debe hacer ahora es salvar a Hardin y su relación con él, o si ha llegado el momento de pensar solo en ella. Si quieren que su amor sobreviva, primero tendrán que trabajar en sí mismos.',
    image: 'https://i.pinimg.com/564x/fb/f0/8a/fbf08a0985e9a26cf7f36ec5a89213d8.jpg' 
  },
  { 
    title: 'Matrix', 
    description: 'Un hacker descubre la impactante verdad sobre la realidad.',
    image: 'https://i.pinimg.com/564x/64/bb/3b/64bb3bb874ecc9e952ca077f91887c3c.jpg' 
  },
  { 
    title: 'El abogado del diablo', 
    description: 'Un joven abogado que nunca ha perdido un juicio es invitado por un poderoso despacho de abogados en Nueva York para seleccionar un jurado.',
    image: 'https://i.pinimg.com/564x/7e/a9/92/7ea99261813fb6bf93266b901e9665e8.jpg' 
  }  

];

app.use(express.static(path.join(__dirname)));

app.get('/buscar', (req, res) => {
  const query = req.query.query.toLowerCase();
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query) || movie.description.toLowerCase().includes(query)
  );
  res.json(filteredMovies);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

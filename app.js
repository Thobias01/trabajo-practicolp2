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
    title: '', 
    description: '',
    image: '' 
  },
  { 
    title: '', 
    description: '',
    image: '' 
  },
  { 
    title: '', 
    description: '',
    image: '' 
  },
  { 
    title: '', 
    description: '',
    image: '' 
  },
  { 
    title: '', 
    description: '',
    image: '' 
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

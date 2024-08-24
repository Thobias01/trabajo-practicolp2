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

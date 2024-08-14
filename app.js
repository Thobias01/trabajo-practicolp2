const express = require('express')
const app = express()
const { title } = require('process');
const port = 3000
const path = require('path');

const movies = [
  { title: 'Inception', description: 'Un thriller alucinante de Christopher Nolan.' },
  { title: 'Interestelar', description: 'Un viaje a traves del espacio, tiempo' },
  { title: 'Matrix', description: 'Un hacker descubre la impactante verdad sobre la realidad.' },
  { title: 'El abogado del diablo', description: 'Un joven abogado que nunca ha perdido un juicio es invitado por un poderoso despacho de abogados en Nueva York para seleccionar un jurado.'}
];
//Agreguen más peliculas acá

app.use('/css', express.static(path.join(__dirname, 'css')));

app.use(express.static(__dirname));

app.get('/buscar', (req, res) => {
  const query = req.query.query.toLowerCase();
  const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(query) || movie.description.toLowerCase().includes(query)
  );
  res.json(filteredMovies);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
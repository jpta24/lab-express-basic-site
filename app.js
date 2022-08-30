import express from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

//When Using import needs this to work __dirname and path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	// console.log('this is the home route')
	// res.send('<h1>This is the Home Page 🐵</h1>')
	res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res) => {
	// console.log('this is the home route')
	// res.send('<h1>This is the Home Page 🐵</h1>')
	res.sendFile(__dirname + '/views/about.html')
})

app.get('/music', (req, res) => {
	// console.log('this is the home route')
	// res.send('<h1>This is the Home Page 🐵</h1>')
	res.sendFile(__dirname + '/views/music.html')
})


app.listen(port, function () {
    console.log(`Server listening on Port: ${port}`);
})
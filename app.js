import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});

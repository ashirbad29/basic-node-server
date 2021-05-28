const express = require('express');
const PORT = 8080;

const app = express();

// middleware
app.use(express.json());

const store = [];

// routes
app.get('/', (req, res) => {
	res.send('Hello World');
});

app.post('/store', (req, res) => {
	if (Object.entries(req.body).length === 0 || !req.body.string) {
		res.status(400).send('Enter Valid String');
		return;
	}

	store.push(req.body.string);
	res.status(200).send('String Stored');
});

app.get('/getstring', (req, res) => {
	const str = store.reduce((acc, str) => {
		return (acc += str);
	});
	res.send(str);
});

app.listen(PORT, () => {
	console.log(`server is running on http://localhost:${PORT}`);
});

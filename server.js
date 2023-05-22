const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const pool = require("./db");

app.use([express.json(), express.urlencoded({ extended: true })]);

const port = process.env.PORT || 8080;

// Get all books
app.get("/books", async (req, res) => {
	try {
		// get all books
		const books = await pool.query("SELECT * FROM book");
		res.status(200).json({ message: "Books information", data: books.rows });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Get specific book
app.get("/books/:id", async (req, res) => {
	try {
		const { id } = req.params;

		// get specific book
		const book = await pool.query("SELECT * FROM book WHERE id=$1", [id]);

		res.status(200).json({ message: `Book information`, data: book.rows });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Create new book
app.post("/book", async (req, res) => {
	try {
		const id = uuidv4();
		const { name, author, description } = req.body;

		// inserting book information
		const newBook = await pool.query(
			"INSERT INTO book (id, name, author, description) VALUES ($1, $2, $3, $4) RETURNING *",
			[id, name, author, description]
		);

		res.status(200).json({ message: `Book added successfully`, data: newBook.rows });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Delete a book
app.delete("/books/:id", async (req, res) => {
	try {
		const { id } = req.params;

		await pool.query("DELETE FROM book WHERE id=$1", [id]);

		res.status(200).json({
			message: `Book deletion information`,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Update a book information
app.put("/books/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { name, author, description } = req.body;
		// update book information

		const updatedData = await pool.query(
			"UPDATE book SET name=$1, author=$2, description=$3 WHERE id=$4 RETURNING *",
			[name, author, description, id]
		);

		res.status(200).json({ message: `Book updated information`, data: updatedData.rows });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.listen(port, () => {
	console.info("Server is running...");
});

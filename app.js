import express from 'express';
import cors from 'cors';
import 'dotenv/config'

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({msg : "Hey Guys! Ayush This Side...."});
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
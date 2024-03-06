const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);



const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);



app.listen(4000, () => console.log("Server running on 4000"));


const { getAffirmation } = require('./controller');

app.get("/api/affirmation", getAffirmation);

const { getQuote } = require('./controller');
app.get("/api/quote", getQuote);

const { getImage } = require('./controller');
app.get("/api/image", getImage);
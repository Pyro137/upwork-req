import express from "express";
import dotenv from "dotenv";
import itemRoutes from "./routes/items";

dotenv.config();

const app = express();
app.use(express.json());

//routes
app.use("/items", itemRoutes);


app.get("/", (req, res) => {
    res.send("Hello, World!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
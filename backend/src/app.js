import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));


app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());




// routes import
import userRouter from "./routes/userRoutes.js"; // Import user routes
import authRouter from "./routes/authRoutes.js"; // Import authentication routes


// routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);


// Default route
app.get("/", (req, res) =>
{
    res.send("Welcome to the Portfolio application!");
});


const port = process.env.PORT || 3000;
app.listen(port, () =>
{
    console.log(`Server at http://localhost:${port}`);
});

export { app }
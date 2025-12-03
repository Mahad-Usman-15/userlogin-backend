import connectdB from "./connectdb.js";
import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import Useroutes from "./routes/auth.js"
dotenv.config();
connectdB()
const app=express()

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
// app.use(cors())
app.use(express.json());

app.use("/api/auth",Useroutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`🚀 Server running  on port ${PORT}`))

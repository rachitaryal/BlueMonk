import express from 'express'
const app_router = express.Router()

app_router.get('/', (req, res) => {
   res.json({msg: 'App is working'})
});
// router.post("/", (req, res) => {});
// router.get("/:id", (req, res) => {});
// router.put("/:id", (req, res) => {});
// router.delete("/:id", (req, res) => {});

export default app_router
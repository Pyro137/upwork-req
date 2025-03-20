import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
    try {
        const { name } = req.body;
        const item = await prisma.item.create({ data: { name } });
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/", async (_, res) => {
    try {
        const items = await prisma.item.findMany();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
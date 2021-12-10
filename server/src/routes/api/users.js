import axios from "axios";
import express, {Router} from "express";
import {PrismaClient} from '@prisma/client';

const api = Router();
api.use(express.json())

api.get("/:username", async (req, response) => {
	const {username} = req.params;
	const prisma = new PrismaClient({log: ['query', 'info', 'warn', 'error']})
	let user = await prisma.user.findUnique({where: {login: username}})
	if (!user) {
		user = {errorMessage: "Error, user not found"};
		const res = await axios.get(`https://api.github.com/users/${username}`, {
			headers: {Authorization:`token ${process.env.GITHUB_TOKEN}`}
		});
		user = res.data;
		await prisma.user.create({data: res.data});
	}
	response.json({data: {user}});
});

export default api;
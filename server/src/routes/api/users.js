import axios from "axios";
import express, {Router} from "express";
import {PrismaClient} from '@prisma/client';
import {use} from "express/lib/router";

const api = Router();
api.use(express.json())

api.get("/:username", async (req, response) => {
	const {username} = req.params;
	// Step 1 - Does User exist in our Database
	//   If True  -> Retrieve from our Database
	//   If False -> Request Github API https://api.github.com/users/$USERNAME
	//            -> Store User information in our Database
	const prisma = new PrismaClient();
	const user = await prisma.user.findUnique({where: {login: username}})
	if (user) {
		response.json({data: {user}});
	} else {
		let gitHubUser = {errorMessage:"Error, user not found"};
		await axios.get('https://api.github.com/users/' + username)
			.then(res => {
				console.log(res.data);
				gitHubUser = res.data;
			})
		await prisma.user.create({data: {login: gitHubUser.login}});
		response.json({data: {gitHubUser}});
	}
	//const result = await prisma.user.create({data: req.body})
});

export default api;
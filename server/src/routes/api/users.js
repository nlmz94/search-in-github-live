import axios from "axios";
import express, {Router} from "express";
import {PrismaClient} from '@prisma/client';

const api = Router();
api.use(express.json())

api.get("/:username", async (req, response) => {
	const {username} = req.params;
	const prisma = new PrismaClient();
	let user = await prisma.user.findUnique({where: {login: username}})
	if (!user) {
		user = {errorMessage: "Error, user not found"};
		await axios.get('https://api.github.com/users/' + username)
			.then(res => {
				console.log(res.data);
				user = res.data;
			})
		await prisma.user.create({
			data: {
				id: user.id,
				login: user.login,
				node_id: user.node_id,
				html_url: user.html_url,
				name: user.name,
				company: user.company,
				blog: user.blog,
				location: user.location,
				email: user.email,
				hireable: user.hireable ?? undefined,
				bio: user.bio,
				twitter_username: user.twitter_username,
				public_repos: user.public_repos,
				public_gists: user.public_gists,
				followers: user.followers,
				following: user.following,
				created_at: user.created_at,
				updated_at: user.updated_at
			}
		});
	}
	response.json({data: {user}});
});

export default api;
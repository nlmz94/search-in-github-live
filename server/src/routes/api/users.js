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
		await axios.get('https://api.github.com/users/' + username).then(res => {
			user = res.data;
			prisma.user.create({
				data: {
					id: res.data.id,
					login: res.data.login,
					node_id: res.data.node_id,
					html_url: res.data.html_url,
					avatar_url: res.data.avatar_url,
					name: res.data.name,
					company: res.data.company,
					blog: res.data.blog,
					location: res.data.location,
					email: res.data.email,
					hireable: res.data.hireable ?? undefined,
					bio: res.data.bio,
					twitter_username: res.data.twitter_username,
					public_repos: res.data.public_repos,
					public_gists: res.data.public_gists,
					followers: res.data.followers,
					following: res.data.following,
					created_at: res.data.created_at,
					updated_at: res.data.updated_at
				}
			});
		});
	}
	response.json({data: {user}});
});

export default api;
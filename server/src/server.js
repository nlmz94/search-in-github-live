import express from "express";
import cors from "cors";
import routes from "./routes";

export function launch(port) {
	const application = express();
	application.use(cors());
	application.use("/", routes);
	application.listen(port, () => {
		console.log(`server started at http://localhost:${port}`);
	});
}

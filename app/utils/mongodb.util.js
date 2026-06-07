const { MongoClient } = require("mongodb");

class MongoDB {
	static async connect(uri) {
		if (MongoDB.client) return MongoDB.client;
		const client = await MongoClient.connect(uri);
		MongoDB.client = client;
		return MongoDB.client;
	}
}

module.exports = MongoDB;
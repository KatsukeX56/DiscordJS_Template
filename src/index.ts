import { Client, Collection, Intents, CommandInteraction, CacheType, Message } from 'discord.js';
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
dotenv.config({path:path.resolve(__dirname, "..", ".env")});

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Loading event handlers
const eventsList = fs.readdirSync(path.resolve(__dirname, "events"));
for (const event of eventsList)
{
	require(path.resolve(__dirname, "events", event))(client);
}

// Login to Discord with your client's token
client.login(process.env.CLIENT_TOKEN);
// @ts-check

const { Client, IntentsBitField, AttachmentBuilder } = require("discord.js");
const { token, prefix, authorized } = require("./config.json");
const fs = require("fs");
const path = require("path");
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

const messages = fs.readdirSync(path.join(__dirname, "messages"))
.map(e => ({
    name: e.substring(0, e.lastIndexOf(".")),
    data: require(path.join(__dirname, "messages", e))
}));

if (messages.some(e => e.name.includes(" "))) {
    console.log("Fuck you. One of your files contains spaces.");
    process.exit(0);
}

client.on("ready", () => {
    console.log(`Hi - ${client.user?.tag}`);
    console.log(`Messages found: ${messages.map(e => e.name).join(", ")}`);
});

/**
 * @param {string} channelId 
 */
async function safeFetchChannel(channelId) {
    let channel = null;
    try {
        channel = await client.channels.fetch(channelId.match(/\d+/g)?.[0] ?? "")
    } catch (err) {}
    return channel;
}

async function fetchBuffer(url) {
    const response = await fetch(url);
    const array = await response.arrayBuffer();
    return Buffer.from(array);
}

client.on("messageCreate", async (message) => {
    if (!message.content.startsWith(prefix)) return;
    if (!authorized.channels.includes(message.channelId)) return;
    if (!authorized.users.includes(message.author.id)) return;
    const args = message.content.split(/ +/g);
    const name = args[0].replace(prefix, "");
    const msg = messages.find(e => e.name === name);
    if (!msg) return;
    /** @type {any} */
    const channel = args.at(1) ? (
        (await safeFetchChannel(args[1])) ?? message.channel
    ) : message.channel;
    for (let index = 0; index < msg.data.length; index++) {
        const data = msg.data[index];
        /** @type {import("discord.js").BaseMessageOptions} */
        const payload = {
            content: data.content ?? undefined,
            embeds: data.embeds ?? undefined,
            components: data.components ?? undefined
        };
        const attachments = (data.attachments ?? []);
        payload.files = [];
        for (let index = 0; index < attachments.length; index++) {
            const attachment = attachments[index];
            const buffer = await fetchBuffer(attachment.url);
            payload.files.push(
                new AttachmentBuilder(buffer, { name: attachment.filename })
            )
        }
        await channel.send(payload);
    }
});

client.login(token);
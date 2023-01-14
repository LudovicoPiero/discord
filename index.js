const { CommandClient } = require("eris");
const { faker } = require("@faker-js/faker");

// Stupid ass bot creation
async function init(token) {
  const stupidAssBot = new CommandClient(`Bot ${token}`, {
    intents: ["guilds"],
    maxShards: "auto",
    restMode: true,
  });
  // Register the stupid ass command
  stupidAssBot.on("ready", async () => {
    await stupidAssBot.bulkEditCommands([
      {
        name: "sex",
        description: "fuck",
        type: 1,
      },
    ]);
    console.log(
      `Paste the URL below into your browser to invite your bot!\nhttps://discord.com/oauth2/authorize?client_id=${stupidAssBot.user.id}&scope=applications.commands%20bot&permissions=3072`
    );
  });
  // Stupid ass interaction creation event
  stupidAssBot.on("interactionCreate", async (interaction) => {
    // Generate fake stuff
    const name = faker.name.fullName();
    const email = faker.internet.email(`${name}`);
    const password = faker.internet.password(20);
    const ip = faker.internet.ip();

    if (interaction?.data?.name === "sex") {
      await interaction.createMessage({
        content: `Name: ${name}
Email: ${email}
Password: ${password}
IP: ${ip}`,
      });
      //console.log('Self destructing...')
      //process.exit(0)
    }
  });
  stupidAssBot.connect();
}

const tokenFromStupidCommand = process.argv[2];
init(tokenFromStupidCommand);

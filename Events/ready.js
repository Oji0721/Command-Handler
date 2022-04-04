const chalk = require("chalk");
module.exports = async (client) => {
 
   client.user.setPresence({
        status: "online",
        activities: [
            {
                name: "TEST BOT",
                type: "LISTENING"
            }
        ]
    });
    console.log(`[API] Logged in as ${client.user.tag}.`);
}
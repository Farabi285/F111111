const fs = require("fs");
module.exports = {
  config:{
	name: "npx10",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
const media = (
    await axios.get(
      'https://i.imgur.com/FaUTATo.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("maya")==0 || body.indexOf("maiya")==0 || body.indexOf("maya")==0 || body.indexOf("মায়া")==0 || body.indexOf("🥹")==0 || body.indexOf("🥹")==0 || body.indexOf("🥹")==0 || body.indexOf("🥹")==0 || body.indexOf("🥹")==0 || body.indexOf("🥹")==0) {
		var msg = {
				body: "পৃথিবীর সবচেয়ে বড় মায়া হয় তখন যখন ছেড়ে যাওয়ার সময় চলে আসে।",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥹", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}

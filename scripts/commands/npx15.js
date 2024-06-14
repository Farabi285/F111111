const fs = require("fs");
module.exports = {
  config:{
	name: "npx15",
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
      'https://i.imgur.com/c81ZWLg.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("🤧")==0 || body.indexOf("bkup")==0) {
		var msg = {
				body: "ব্রেকআপ দুঃখজনক হতে পারে, কিন্তু কখনও কখনও চোখের জল আমাদের প্রয়োজন এমন স্বাধীনতার মূল্য দিতে হয়।”
— স্টিভ মারাবোলি",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
} 

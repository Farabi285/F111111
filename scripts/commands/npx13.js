const fs = require("fs");
module.exports = {
  config:{
	name: "npx13",
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
      'https://i.imgur.com/YRX1bek.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("🥱")==0 || body.indexOf("বসে")==0 || body.indexOf("bose")==0 || body.indexOf("bse")==0 || body.indexOf("🥱")==0 || body.indexOf("🥱")==0 || body.indexOf("🥱")==0 || body.indexOf("🥱")==0 || body.indexOf("🥱")==0 || body.indexOf("🥱")==0) {
		var msg = {
				body: "জীবনের সবচেয়ে খারাপ অংশ কারো জন্য অপেক্ষা করা, আর সবচেয়ে ভালো অংশ হলো এমন কাউকে পাওয়া যার জন্য অপেক্ষা বৃথা যায় না",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥱", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}

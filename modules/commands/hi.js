module.exports.config = {
	name: "hi",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "ManhG",
	description: "",
	commandCategory: "NDH",
	usages: "",
	cooldowns: 0,
	denpendencies: {
		"fs-extra": "",
		"request": ""
	}
};

module.exports.handleEvent = async ({
	event,
	api,
	Users
}) => {
 const moment = require('moment-timezone');
 const gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s"); 
const time = moment().tz("Asia/Ho_Chi_Minh").hour();

const getTime = time > 17 ? "tối" : time > 12 ? "chiều" : time > 9 ? "trưa" : "sáng";


	var {
		threadID,
		messageID,
		body,
		senderID
	} = event;
	const thread = global.data.threadData.get(threadID) || {};
	if (typeof thread["hi"] !== "undefined" && thread["hi"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;

	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
	//trả lời
	var msg = {
		body: `💘Hiii chào cậu ${name}💖. Chúc bạn có 1 buổi ${getTime} tốt lành\n🐔Bây giờ là ${gio}👽`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://web-api.han666.repl.co/api/gai.php')).data.data,
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["hi", "hello", "lô", "hí lô", "chào", "hăi", "hí", "hai"];
	arr.forEach(i => {
		let str = i[0].toUpperCase() + i.slice(1);
		if (body === i.toUpperCase() | body === i | str === body) return out(msg)
	});
};

module.exports.languages = {
	"vi": {
		"on": "Bật",
		"off": "Tắt",
		"successText": "hi thành công",
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "hi success!",
	}
}

module.exports.run = async function({
	api,
	event,
	Threads,
	getText
}) {
	const {
		threadID,
		messageID
	} = event;
	let data = (await Threads.getData(threadID)).data;

	if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
	else data["hi"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);

}
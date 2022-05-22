module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hung",
  description: "Kiểm tra thông tin admin bot.",
  commandCategory: "Group",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
    "https://imgur.com/j4SCKM2.jpg",
    "https://imgur.com/03UvtQb.jpg",
    "https://imgur.com/vxtN3IW.jpg",
    "https://imgur.com/e1ng2sC.jpg",
  ];
  ///bạn có thể mod lại
  var callback = () => api.sendMessage({body:`梁ADMIN BOT梁
  👀 Tên: Phan Quốc Hưng
  ❎ Tuổi: 18
  👤 Giới tính: Nam
  🙄 Sinh ngày: 21/10/2004
  💫 Chiều cao / cân nặng: 1m73 / 60kg
  💘 Mối quan hệ: có ny
  😎 Quê quán: Bình Dương
  🤔 Nơi ở: BÌnh Dương
  🌸 Cung: Thiên Bình
  👫 Gu: Lùn cute, tóc dài hoặc ngắn, biết nấu cơm ko biết thì tập, lo lắng quan tâm vậy là đủ :)))
  🌸 Tính cách: Ehe...hmm <3
  📱 Facebook: https://www.facebook.com/100049395483074/
📢 Lưu ý cho các qtv và tv trong box: 
- Vui lòng không spam khi sử dụng để tránh die bot
- Không sử dụng lệnh nhiều của lệnh đó
- Đừng chửi bot vì nó được lập trình tự động rời box
- Đừng report bot vì nó cute lắm ><
- Nếu bot ko hoạt động hay bị lỗi hay liên hệ qua sdt hoặc nhắn tin mess để được liên hệ trực tiếp với mình
=> Yêu mọi người nhiều lắm <3 hãy đồng hành cùng với bot và mình nhé <3
------------
✔Donate:
💳MB: 0334043054 
💳VIB: Đã bẻ thẻ 
📲MoMo: 0334043054 

----•Quốc Hưng•----`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };

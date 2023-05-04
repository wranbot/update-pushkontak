const fs = require("fs");
const chalk = require("chalk");
// EDIT DISINI
global.owner = ["6282393734303"]; // no own
global.packname = "© sticker by"; // nama pack sticker
global.author = "𝐑𝐚𝐧𝐳 𝐇𝐢𝐣𝐫𝐚𝐡 🇸🇦"; // nama author
global.pic = "https://telegra.ph/file/0210af4862a0263ea407d.jpg"; // url foto

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`));
  delete require.cache[file];
  require(file);
});

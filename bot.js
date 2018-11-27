const Discord = require("discord.js");
const bot = new Discord.Client();
//I wont explain this, just know it makes the bot. work
//makes use of the config file

bot.on("ready", () => {
	console.log("Bot is connected!")
bot.user.setPresence({game: {name: "Use '..help' for commands!", type: 0, url: null}})
console.log(bot.user.presence)
});

console.log("prefix set to ..");
//reminds you of what the prefix is.

bot.on("message", (msg) => {
	if(msg.author.id === "107849625997713408"){
		if (msg.content === "reset"){
			console.log("Restarting. . .")
			bot.destroy().then(() => bot.login(process.env.BOT_TOKEN))
		}
	}
	//***THIS IS A LIBRARY***:🇦 🇧 🇨 🇩 🇪 🇫 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳 🇴 🇵 🇶 🇷 🇸 🇹 🇺 🇻 🇼 🇽 🇾 🇿

	let shitRole = msg.guild.roles.find("name", "Shit Taste");
	if(msg.member.roles.has(shitRole.id)){
		msg.react("💩")
	}

let rekt = msg.guild.roles.find("name","Rekted");
if(msg.member.roles.has(rekt.id)){
	msg.react("🇷").then(() => msg.react("🇪")).then(() => msg.react("🇰")).then(() => msg.react("🇹"));
}
  //everytime a message is sent, the bot grabs it and uses it here:
	 if (!msg.content.startsWith("..")) {return;}

  //if the message does not start with the prefix, the bot stops looking at it.

  let memerRole = msg.guild.roles.find("name", "Memer");
	let remoteHolderz = msg.guild.roles.find("name", "Remote Holderz");
	let camp = msg.guild.roles.find("name", "The Camp");
let color = ('#' + Math.random().toString(16).slice(2, 8).toUpperCase());
  //specifies memerRole to be the information of the memer role in the server.
  if(!msg.member.roles.has(memerRole.id)) {
    //Checks if the person who sent the message doe NOT have the memer role.
    msg.channel.send("");
		msg.delete();
    //this sends a message to the channel that the command was sent in.
    return;
    //stops looking at the message.
  }

	let command = msg.content.split(" ")[0];
	command = command.slice("2");
	let argument = msg.content.split(" ").slice(1);
  //hard to explain in text, but it works Kappa
  //essentially it changes text in a way the command is what remains form the
  //command without the prefix.
  //and argument is an array of everything written after the initial command
  //seperated by spaces.

	if(command === "say") {
		const embed = new Discord.RichEmbed()
	.setThumbnail('http://www.gannett-cdn.com/-mm-/18bab8118c27fd590157f770e91c4711cbb26e75/c=0-0-2351-1768&r=x404&c=534x401/local/-/media/2016/03/31/USATODAY/USATODAY/635949882893727336-AP-Germany-Nazi-Grave.jpg')
	.setTitle("It is written...")
	.setDescription("\u200b")
	.addField(argument, "\u200b")
  .setColor(990000)
  msg.channel.send({embed})
	msg.delete();
};

if(command === "help"){
	list = ["@lmao-ayyy lmao","@weeb-anime prohibited","@bait-u mad","@good-well memed","@joke-is joke","@del *@user* *#*-deletes a specific number of mentioned user's messages","@name *@user* *name*-renames the mentioned user","@shook-T R I G G E R E D","@un/fabio-autocamps/uncamps fabio","@camp *@user* *reason*-camps user and PM's reason","@barbaric-Absolutely Barbaric","@meme-there is only memes","@power *message*-Sends a tts message through bot","@invite *user id*-PM's user with an invite to Rabbit Server(admin only)","@camp/uncamp *@user + reason*-camps user(admin only)","@fabio/unfabio-automatically camps fabio","@yugi-It's Kaiba tho","@isis-Gonna make them waswas","@cry-For when it's just too stupid", "@facepalm-Plz","@rip-Another Faggio","@autism-*autistic screeching*","@rev *message to be reversed*-Flips your message","@pooh-No swearing","@clear *a number*(admin only)-Deletes *some* messages","@sad-Pathetic","@rage-Angry","@spicier-Faggio", "@lenny-Plz", "@say *insert line*-Embeds are nice.", "@normie-Pepe", "@8ball *insert question*-Plz", "@choose *enter choices w/ spaces*-Plz", "@o-Give up", "@deusvult-God Wills It", "@daddy-Plz", "@kek-The Toppest", "@kappa-Plz", "@faggot-Homosexuality isn't right", "@ayy (reply with @reply)", "@pog-Pogchamp", "@spicy-Italian", "@nigga-aww shit", "@f-Press f to pay respects", "@call-for a good time", "@what-copypasta", "@fuck-Fuck this chat", "@friendly-Good friend", "@brits-British Copypasta", "@owo-waht's this", "@ree-Normies", "@doggo-Angry", "@razzledazzle-Right up the butt", "@ooh-Sparkly", "@eyebrows-Smug", "@animemes-Random anime meme", "@kmf *enter options w/ spaces*-Kill, Marry, Fuck", "@greentext-Random greentext", "@nazi-Deutchland uber alles", "@purge (admin only)-Deletes *all* messages", '@skyrim-C3P0', "@noice-noice"]
	const embed = new Discord.RichEmbed()
		.setAuthor('Commands', 'https://3c2ba678857e073c9506-9b92ffc51ccdc874f7e956dfcfbdbfba.ssl.cf5.rackcdn.com/meme-bot.png')
		.setDescription(list)
		.setColor(296632)
	msg.author.send({embed});
	msg.delete();
	};

if(command === "greentext") {
		pool = ["https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/19/enhanced/webdr05/enhanced-buzz-9331-1429917116-6.jpg","http://i.imgur.com/pyIp2v3.png","https://1.bp.blogspot.com/-yOzUQAo2Yvw/VtBXBnEIJNI/AAAAAAAAFDk/uzuZWaklCII/s1600/taco-autism-greentext.jpg","http://static.fjcdn.com/pictures/Fallout+greentext+saw+this+on+b+laughed+way+too+hard_567c4b_5118072.png", "http://i.imgur.com/sRnj8pm.jpg","http://i.imgur.com/dQwCdbv.jpg","http://2static.fjcdn.com/pictures/More_e8db27_5797785.jpg","http://i.imgur.com/LhKEs4d.jpg","http://i.imgur.com/QSyOLyu.jpg","http://i.imgur.com/xwC3r6O.png","http://2static.fjcdn.com/pictures/More_ecc411_5797785.jpg","http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/07/funniest-4chan-threads-an-american-in-paris.jpg","http://i.imgur.com/7hlFLBC.jpg","http://2static.fjcdn.com/pictures/Even_23a3ac_5797787.jpg","http://2static.fjcdn.com/pictures/Greentexts_a226d7_5797782.jpg","http://2static.fjcdn.com/pictures/Legendary+greentexts+part+2_f6851a_5689052.jpg","http://2.bp.blogspot.com/-XCkpr_n91w4/VD_GIMDZZWI/AAAAAAAAAGw/l-6d6zR0KBU/s1600/The%2BCanadian%2BWay.jpg","http://i.imgur.com/IeBxvrG.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/16/enhanced/webdr04/enhanced-buzz-18754-1429906819-51.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/16/enhanced/webdr12/enhanced-buzz-18466-1429908690-9.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/18/enhanced/webdr09/edit-13123-1429914583-31.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/18/enhanced/webdr08/edit-10913-1429914662-8.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/18/enhanced/webdr13/edit-12962-1429914558-19.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/18/enhanced/webdr13/enhanced-buzz-8023-1429914863-18.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/18/enhanced/webdr09/edit-13199-1429914607-10.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/16/enhanced/webdr12/enhanced-buzz-17803-1429907085-7.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/17/enhanced/webdr04/enhanced-buzz-4678-1429909918-11.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/18/enhanced/webdr10/enhanced-buzz-28695-1429915793-13.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/17/enhanced/webdr04/enhanced-buzz-3883-1429910787-13.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/18/enhanced/webdr01/enhanced-buzz-11580-1429915691-7.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/19/enhanced/webdr09/enhanced-buzz-31743-1429917678-15.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/19/enhanced/webdr10/enhanced-buzz-27376-1429918306-10.jpg","https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/16/enhanced/webdr14/enhanced-buzz-18947-1429908882-7.jpg", "http://i.imgur.com/iyMJUY7.png", "http://i2.kym-cdn.com/photos/images/original/000/404/482/a96.jpg", "http://static.fjcdn.com/pictures/Favourite+green+text+story+whats+your+favourite+green+text+stories_a37bd8_4795571.jpg","http://static.fjcdn.com/pictures/Green_e9a593_5404760.jpg","http://i0.kym-cdn.com/photos/images/newsfeed/000/708/133/371.jpg", "http://i2.kym-cdn.com/photos/images/original/000/570/506/950.jpg", "//i.imgur.com/nSg2oQN.jpg", "http://i3.kym-cdn.com/photos/images/original/000/139/260/630.jpg", "http://i3.kym-cdn.com/photos/images/facebook/000/708/109/95c.jpg","http://i3.kym-cdn.com/photos/images/original/001/111/108/8e5.png","http://i1.kym-cdn.com/photos/images/original/000/988/826/74e.jpg", "https://2static1.fjcdn.com/comments/Don+t+forget+the+boundless+amounts+of+unforgettable+green+text+stories+_fd304a678549d4cd7901556aa2d32786.jpg", "http://i2.kym-cdn.com/photos/images/facebook/000/912/451/8b8.jpg", "http://i0.kym-cdn.com/photos/images/newsfeed/000/408/309/70b.png", "http://i2.kym-cdn.com/photos/images/newsfeed/000/988/827/757.png", "http://i3.kym-cdn.com/photos/images/newsfeed/001/049/069/abe.jpg"]
		let story = pool[Math.floor(Math.random() * pool.length)];
		const embed = new Discord.RichEmbed()
			.setImage(story)
		  .setColor(0909090)
		msg.channel.send({embed});
		msg.delete();
	};

if (command === "8ball") {
    let question = argument.join(" ");
    if(question){
      var answers = ["yeh boi", "nah fam", "maybe, shit", "doubt it bruh", "fo' sho'", "no way in hell boi"];
      //makes an array, this probably shows you well what an array is.
      //argument array is build up like this aswell.
      let choise = answers[Math.floor(Math.random() * answers.length)];
      //picks a random string from answers array
			const embed = new Discord.RichEmbed()
				.setAuthor('8ball', 'http://appinventor.mit.edu/explore/sites/all/files/Teach/media/image_8_ball.jpg')
				.setTitle(argument)
				.setColor(0x00AE86)
				.setDescription(''+choise+'')
			msg.channel.send({embed});
			msg.delete(100)
	}else{
      msg.channel.send("Ask a question, dumbass");
			msg.delete(100)
}};

if (command === "rev"){
let arg = argument.join(" ")
msg.channel.send(""+arg+"");
let split = argument.slice(" ");
let reverse = argument.reverse();
let join = reverse.join(" ");
msg.channel.send("" +join+ "");
msg.delete();
};

if(command === "del"){
	let user = msg.mentions.users.first();
	let number = argument[1]
	msg.delete();
	const filter = message => message.author.id === user.id;;
	msg.channel.fetchMessages({ limit: number }).then(messages => {
  const filteredMessages = messages.filter(filter);
  msg.channel.bulkDelete(filteredMessages);
});
};

if(command === "isis"){
	const embed = new Discord.RichEmbed()
	.setImage("https://cdn.discordapp.com/attachments/259022782757601280/292005601452490762/uAYwuQNALnKHwklaIlk8aV9Yyu2pTo9JtQFZW-IHThQ.jpg")
	.setColor(0xae6248)
	msg.channel.send({embed});
	msg.delete();
};

if(command === "cry"){
	const embed = new Discord.RichEmbed()
		.setImage("https://imgflip.com/s/meme/Computer-Guy-Facepalm.jpg")
		.setColor(0x0c0c0)
msg.channel.send({embed});
msg.delete();
};

if(command === "facepalm"){
		const embed = new Discord.RichEmbed()
		.setImage("http://i3.kym-cdn.com/photos/images/original/000/641/518/b04.png")
		.setColor(0xae2140)
msg.channel.send({embed});
msg.delete();
	};

	if (command === "fuck"){
	msg.channel.send("That’s it, I’m done. Fuck this chat. It’s devolved into a mass of retarded copy pastes and face spam. The quality of twitch chat has been declining for a while, but this is the last straw. That’s it. I’m done. I’m uninstalling the internet, chopping off my dick and moving to fucking Antarctica, at least the bacteria there will be fucking smarter discourse.");
	msg.delete(100)
};

if(command === "pm"){
	 if (msg.member.roles.has(remoteHolderz.id)){
	mention = msg.mentions.users
	rec = argument.indexOf(mention)
	argument.splice(mention, 1)
	let message = argument.join(" ");
	msg.mentions.users.first().send(""+message+"");
msg.delete()
}else{
msg.author.send(":joy: :joy: :joy: :joy: :joy: :joy: :joy: :rage: :rage: :joy: :joy: :joy: :joy: :joy: :joy: :joy: :joy:");
msg.author.send(":joy: :joy: :joy: :joy: :joy: :joy: :rage: :rage: :rage: :joy: :joy: :joy: :joy: :joy: :joy: :joy: :joy:");
msg.author.send(":joy: :joy: :joy: :joy: :joy: :rage: :rage: :rage: :joy: :joy: :joy: :joy: :joy: :joy: :joy: :joy: :joy:");
msg.author.send(":joy: :joy: :joy: :joy: :rage: :rage: :rage: :joy: :joy: :joy: :joy: :joy: :rage: :joy: :joy: :joy: :joy:");
msg.author.send(":joy: :joy: :joy: :rage: :rage: :rage: :joy: :joy: :joy: :joy: :joy: :rage: :rage: :rage: :joy: :joy: :joy:");
msg.author.send(":joy: :joy: :joy: :joy: :rage: :rage: :rage: :joy: :joy: :joy: :rage: :rage: :rage: :rage: :rage: :joy: :joy:");
msg.author.send(":joy: :joy: :joy: :joy: :joy: :rage: :rage: :rage: :joy: :rage: :rage: :rage: :joy: :rage: :rage: :rage: :joy:");
msg.author.send(":joy: :joy: :joy: :joy: :joy: :joy: :rage: :rage: :rage: :rage: :rage: :joy: :joy: :joy: :rage: :rage: :rage:");
msg.author.send(":rage: :rage: :joy: :joy: :joy: :joy: :joy: :rage: :rage: :rage: :joy: :joy: :joy: :joy: :joy: :rage: :rage:");
msg.author.send(":rage: :rage: :rage: :joy: :joy: :joy: :rage: :rage: :rage: :rage: :rage: :joy: :joy: :joy: :joy: :joy: :joy:");
msg.author.send(":joy: :rage: :rage: :rage: :joy: :rage: :rage: :rage: :joy: :rage: :rage: :rage: :joy: :joy: :joy: :joy: :joy:");
msg.author.send(":joy: :joy: :rage: :rage: :rage: :rage: :rage: :joy: :joy: :joy: :rage: :rage: :rage: :joy: :joy: :joy: :joy:");
msg.author.send(":joy: :joy: :joy: :rage: :rage: :rage: :joy: :joy: :joy: :joy: :joy: :rage: :rage: :rage: :joy: :joy: :joy:");
msg.author.send(":joy: :joy: :joy: :joy: :rage: :joy: :joy: :joy: :joy: :joy: :rage: :rage: :rage: :joy: :joy: :joy: :joy:");
msg.author.send(":joy: :joy: :joy: :joy: :joy: :joy: :joy: :joy: :joy: :rage: :rage: :rage: :joy: :joy: :joy: :joy: :joy:");
msg.author.send(":joy: :joy: :joy: :joy: :joy: :joy: :joy: :joy: :rage: :rage: :rage: :joy: :joy: :joy: :joy: :joy: :joy:");
msg.author.send(":joy: :joy: :joy: :joy: :joy: :joy: :joy: :joy: :rage: :rage: :joy: :joy: :joy: :joy: :joy: :joy: :joy:");
msg.delete();
}};

  //good old 8ball, who doesnt know that one
  // you use it by typing "prefix8ball question"

if (command === "choose"){
		let choise = argument[Math.floor(Math.random() * argument.length)];
		var reply = ["I'm thinking " + choise + ".", "Definitely " + choise + ".", "Go with " + choise + ".","I'm thinking " + choise + ".", "Definitely " + choise + ".", "Go with " + choise + ".","I'm thinking " + choise + ".", "I don't know."];
		let choice = reply[Math.floor(Math.random() * reply.length)];
		const embed = new Discord.RichEmbed()
			.setThumbnail('http://findicons.com/files/icons/2118/nuvola/128/package_games_board.png')
			.setTitle("Choosing: " + argument + ".")
			.setDescription(''+choice+'')
			.setColor(0x00AE86)
		msg.channel.send({embed});
		msg.delete(100)
};

if(command === "kmf") {
	options = (argument);
	msg.channel.send(options)
	msg.delete(100)
	let option1 = options[Math.floor(Math.random() * argument.length)];
	var index = options.indexOf(option1);
	options.splice(index, 1);

	let option2 = options[Math.floor(Math.random() * argument.length)];
	var index2 = options.indexOf(option2);
	options.splice(index2, 1);

	let option3 = options[Math.floor(Math.random() * argument.length)];
	msg.channel.send("Kill " +option1 + " , marry " + option2 + " , fuck " + option3 +".");
};

	if(command === "doggo"){
		const embed = new Discord.RichEmbed()
			.setImage('https://cdn.discordapp.com/attachments/259022782757601280/289445918195974154/angry.jpg')
			.setColor(0x0098ae)
			msg.channel.send({embed});
		const embed2 = new Discord.RichEmbed()
		.setImage("https://cdn.discordapp.com/attachments/259022782757601280/289445916329508864/doggo.jpg")
		.setColor(0x0098ae)
		msg.channel.send({embed: embed2});
		msg.delete(100);
	};

if (command === "rage"){
	msg.channel.send("つಠ益ಠ)つ");
	msg.delete();
};

if (command === "lenny") {
	msg.channel.send("( ͡° ͜ʖ ͡°)");
  msg.delete(100);
};

	if (command === "call") {
		msg.channel.send("910-286-4738")
		msg.channel.send("^Call me for a good time! ( ͡° ͜ʖ ͡°)")
		msg.delete()
};

if(command === "nazi"){
	const embed = new Discord.RichEmbed()
		.setImage("https://cdn.discordapp.com/attachments/279269979000668160/293755235216654337/ceppuh.PNG")
		.setColor(0x00AE86)
	msg.channel.send({embed});
msg.delete();
};

//			bot.destroy().then(() => bot.login(config.token))
if(command === "clear") {
	msg.delete();
	if (msg.member.roles.has(remoteHolderz.id)){
		msg.channel.bulkDelete(argument);
	}
};

if(command === "sad"){
	const embed = new Discord.RichEmbed()
		.setImage('https://img.clipartfest.com/32daef156af6ae1c7b75255ad3275ff0_6-pathetic-pathetic_500-324.png')
		.setColor(0x00AE86)
	msg.channel.send({embed});
	msg.delete();
};

if(command === "autism"){
		const embed = new Discord.RichEmbed()
			.setImage('https://cdn.discordapp.com/attachments/259022782757601280/289418716804939787/6154279_718130aa8be273062e0dabc4b17a89ee.jpg')
			.setColor(0x00AE86)
		msg.channel.send({embed});
		msg.delete();
};

if(command === "yugi"){
	const embed = new Discord.RichEmbed()
		.setImage("https://cdn.discordapp.com/attachments/259022782757601280/292291297014710272/200.gif")
		.setColor(0x09123)
	msg.channel.send({embed});
	msg.delete();
};

if(command === "ree"){
		msg.channel.send("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
		msg.delete(100);
	};

if(command === "calc"){
		if(msg.author.id === "107849625997713408"){
			equation = argument.join(" ");
			evaluation = eval(equation);

		const embed = new Discord.RichEmbed()
			.setThumbnail('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRgxV15fjhgv31wIkUphHGwhrQPrdrsITuOxTinXqsUbPZT1Jk9')
			.setTitle(""+equation+"")
			.setDescription('='+evaluation+'')
			.setColor(0x00AE86)
		msg.channel.send({embed});
    msg.delete();
	}else{
		msg.channel.send("No you don't.");
	}};

	if(command === "owo") {
		msg.delete();
		const embed = new Discord.RichEmbed()
			.setColor(color)
			.setImage("https://pre00.deviantart.net/0b45/th/pre/f/2017/064/8/2/owo_intensifies_by_rikadoh-db197ad.png")
	msg.channel.send({embed})
	};

if (command === "what"){
		msg.channel.send("What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.")
		msg.delete(100)
	};

	if (command === "spicy") {
const embed = new Discord.RichEmbed()
.setImage("https://cdn.discordapp.com/attachments/279269979000668160/289483537957257227/spicy.jpg")
.setColor(0x05ae924)
msg.channel.send({embed});
		msg.delete(100)
	};

if(command === "power"){
	join = argument.join(" ");
  msg.channel.send(
			join,
			{ tts: true }
		);
msg.delete();
	};

	if(command === "brits") {
	msg.channel.send("What the in the name of the Queen did you just fucking say about me, you little chav? I'll have you know I graduated top of my class in the SAS, and I've been involved in numerous secret raids on Ireland, and I have over 300 confirmed kills. I am trained in gentlemanly warfare and I'm the top rooter tooter long range shooter in the entire UK armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this great planet, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, chap. As we speak I am contacting my secret network of spies across the world and your IP is being traced right now so you better prepare for the storm, banger. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the Royal Marines and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little muppet. If only you could have known what unholy retribution your little \"clever\" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn dolt. I will shit fury all over you and you will drown in it. You're fucking dead, mate.")
	msg.delete(100)
};

if(command === "friendly") {
  msg.channel.send("What's this you've said to me, my good friend? Ill have you know I graduated top of my class in conflict resolution, and Ive been involved in numerous friendly discussions, and I have over 300 confirmed friends. I am trained in polite discussions and I'm the top mediator in the entire neighborhood. You are worth more to me than just another target. I hope we will come to have a friendship never before seen on this Earth. Don't you think you might be hurting someone's feelings saying that over the internet? Think about it, my friend. As we speak I am contacting my good friends across the USA and your P.O. box is being traced right now so you better prepare for the greeting cards, friend. The greeting cards that help you with your hate. You should look forward to it, friend. I can be anywhere, anytime for you, and I can calm you in over seven hundred ways, and that's just with my chess set. Not only am I extensively trained in conflict resolution, but I have access to the entire group of my friends and I will use them to their full extent to start our new friendship. If only you could have known what kindness and love your little comment was about to bring you, maybe you would have reached out sooner. But you couldn't, you didn't, and now we get to start a new friendship, you unique person. I will give you gifts and you might have a hard time keeping up. You're finally living, friend.")
msg.delete(100)
};

  if (command === "o") {
			msg.channel.send(" ༼ つ ◕◕ ༽つ");
    msg.delete(100);
  };

if (command === "deusvult") {
	msg.channel.send("༼ つ ◕◕ ༽つ")
  msg.channel.send("DEUS VULT")
  msg.channel.send("༼ つ ◕◕ ༽つ")
  msg.delete(100);
};

if(command === "pooh"){
	const embed = new Discord.RichEmbed()
  	.setImage('http://m.imgur.com/mjHtwHv.jpg')
		.setColor(0909090)
		msg.channel.send({embed});
msg.delete()
};

if (command === "daddy") {
	const embed = new Discord.RichEmbed()
  	.setImage('https://images.washingtonpost.com/?url=https://img.washingtonpost.com/news/the-intersect/wp-content/uploads/sites/32/2016/08/daddy.gif&op=noop')
    .setColor(0909090)
  msg.channel.send({embed});
					msg.delete();
};

if (command === "spicier") {
	const embed = new Discord.RichEmbed()
		.setImage('https://cdn.discordapp.com/attachments/267425347904077824/289477529125781514/spicier.jpg')
		.setColor(0x00ae98)
	msg.channel.send({embed});
	msg.delete();
};

if (command === "meme") {
	const embed = new Discord.RichEmbed()
		.setImage('https://img.fireden.net/v/image/1445/74/1445745546010.jpg')
		.setColor(0x00ae98)
	msg.channel.send({embed});
	msg.delete();
};

if(command === "normie") {
	const embed = new Discord.RichEmbed()
		.setImage("https://ih0.redbubble.net/image.96189999.7522/flat,800x800,075,f.jpg")
		.setColor(0xae9581)
		msg.channel.send({embed});

	const embed2 = new Discord.RichEmbed()
		.setImage("https://cdn.discordapp.com/attachments/279269979000668160/289160819735003136/ree2.jpg")
		.setColor(0xae9581)
	msg.channel.send({embed: embed2});

	const embed3 = new Discord.RichEmbed()
		.setImage("https://cdn.discordapp.com/attachments/279269979000668160/289160818195693568/ree3.jpg")
		.setColor(0xae9581)
	msg.channel.send({embed: embed3});
	msg.delete();
};

if(command === "rip"){
	const embed = new Discord.RichEmbed()
		.setImage('https://cdn.discordapp.com/attachments/279269979000668160/386614184068251650/rip.png')
		.setColor(0x03592)
	msg.channel.send({embed});
	msg.delete();
};

if (command === "lmao") {
	const embed = new Discord.RichEmbed()
		.setTitle("ayyyyyyyy lmao")
		.setImage('https://cdn.discordapp.com/attachments/259022782757601280/289424906066722816/lmao.gif')
		.setColor(0x00ae649)
	msg.channel.send({embed});
msg.delete(100);
};

if(command === "kappa") {
	const embed = new Discord.RichEmbed()
		.setImage("https://images-ext-1.discordapp.net/external/anxQk5aNWYNUjdRVJI6lR3wNc0CkFTLUIZW7g6xezIg/https/cdn.discordapp.com/attachments/279269979000668160/289481362438750209/kappa.png?width=100&height=100")
		.setColor('#' + Math.random().toString(16).slice(2, 8).toUpperCase())
	msg.channel.send({embed});
	msg.delete(100)
};

if (command === "noice") {
	msg.channel.send("https://youtu.be/a8c5wmeOL9o");
	msg.delete(100)
};

if(command === "ooh"){
	const embed = new Discord.RichEmbed()
		.setImage("https://cdn.discordapp.com/attachments/279269979000668160/289481740672565250/sparkle.gif")
		.setColor(0763279)
	msg.channel.send({embed});
	msg.delete(100);
};

if(command === "eyebrows"){
	const embed = new Discord.RichEmbed()
		.setImage("https://cdn.discordapp.com/attachments/279269979000668160/289481746146394113/meme.gif")
		.setColor(0352396)
	msg.channel.send({embed});
	msg.delete(100);
};

if(command === "purge"){
	if(msg.member.roles.has(remoteHolderz.id)){
    messagecount = parseInt(argument[1]);
    msg.channel.fetchMessages({limit: messagecount})
        .then(messages => msg.channel.bulkDelete(messages));
}else{
	msg.channel.send("You have no perms faggot!")
}};

if(command === "ayy") {
  msg.channel.send(":point_right:( ͡° ͜ʖ ͡°) :point_right:")
  msg.delete(100);
};

if(command === "reply") {
	msg.channel.send(":point_left: ( ͡° ͜ʖ ͡°) :point_left:")
	msg.delete(100);
};

if(command === "igor"){
	const embed1 = new Discord.RichEmbed()
		.setImage("http://i.lv3.hbo.com/assets/images/series/the-neistat-brothers/character/casey-neistat-1920.jpg")
		.setColor(0xae9237)
		msg.channel.send({embed:embed1});

	const embed2 = new Discord.RichEmbed()
		.setImage("http://2.bp.blogspot.com/-b8q9DWe-IOw/UJB3dbMAEXI/AAAAAAAAHOc/rbhKqpPQhf4/s1600/Marty+Feldman+Young+Frankenstein.PNG")
		.setColor(0xae9237)
	msg.channel.send({embed: embed2});
	msg.delete();
};

/*if(command === "camp"){if(msg.member.roles.has(remoteHolderz.id)){
	splice = argument.splice(1)
	user = msg.mentions.users.first()
	reason = splice.join(" ")

	msg.guild.member(user).addRole(camp.id);
	msg.channel.send("Camped "+user+" for: "+reason);
	msg.guild.member(user).send("Camped for: "+reason);
	msg.delete();
}else{
	msg.delete();
	msg.author.send("How about no.")
}};

if(command === "uncamp"){
	if(msg.member.roles.has(remoteHolderz.id)){
		user = msg.mentions.users.first()
		msg.guild.member(user).removeRole(camp.id)
		msg.delete();
}else{
	msg.delete()
	msg.author.send("No perms for you.")
}};

if(command === "fabio"){
	if(msg.author.id === "259024176319430656"){
		msg.author.send("Faggio")
		msg.delete()
}else{
	msg.guild.member("259024176319430656").addRole(camp.id);
	msg.delete();
}};

if(command === "unfabio"){
	if(msg.author.id === "259024176319430656"){
		msg.author.send("you thought")
}else{
	msg.guild.member("259024176319430656").removeRole(camp.id);
	msg.delete();
}};
*/
if(command === "name") {
	user = msg.mentions.users.first()
	splice = argument.splice(user, 1)
	name = argument.join(" ")
	msg.guild.member(user).setNickname(name);
	msg.delete()
};

if(command === "barbaric"){
	const embed = new Discord.RichEmbed()
	.setImage("https://cdn.discordapp.com/attachments/259022782757601280/301014508837797889/GDBcmP4.gif")
	.setColor(0x0ae7519)
	msg.channel.send(embed)
	msg.delete();
};

if(command === "shook"){
	const embed = new Discord.RichEmbed()
	.setImage("https://media.giphy.com/media/ZEVc9uplCUJFu/giphy.gif")
	.setColor(0xae9587)
	msg.channel.send({embed})
	msg.delete()
};

if(command === "good"){
	const embed = new Discord.RichEmbed()
	.setImage("https://cdn.discordapp.com/attachments/279269979000668160/301711935504777216/goodmeme.PNG")
	.setColor(0xae6420)
	msg.channel.send({embed})
	msg.delete()
};

if(command === "joke"){
	const embed = new Discord.RichEmbed()
	.setImage("http://i.imgur.com/RQWCW6H.png")
	.setColor(0xae3534)
	msg.channel.send({embed})
	msg.delete();
};

if(command === "weeb"){
	const embed = new Discord.RichEmbed()
	.setImage("https://cdn.discordapp.com/attachments/222197033908436994/308964717127401473/image.png")
	.setColor(color)
	msg.channel.send({embed})
	msg.delete()
};

if(command === "bait"){
	const embed = new Discord.RichEmbed()
	.setImage("https://cdn.discordapp.com/attachments/222197033908436994/308964174027948032/unknown.png")
.setColor(color)
msg.channel.send({embed})
msg.delete()
};

if(command === "dab"){
msg.delete()
	const embed = new Discord.RichEmbed()
	.setColor(color)
	.setImage("https://ih1.redbubble.net/image.193615005.6278/flat,800x800,075,f.u2.jpg")
msg.channel.send({embed})
};

if(command === "trademark"){
	msg.delete()
	let message = argument.join(" ")
	msg.channel.send(message+"™")
};

if(command === "fucked"){
	msg.delete();
	const embed = new Discord.RichEmbed()
	.setImage("https://lh3.googleusercontent.com/BhcoPP_2gNijmYBQSBZFmj1zGLogB3d_jyVnjCrAzbU_OR0sPqtvNW3B73OohbI6jPxbGPkAFFJhDbWEXbK7popwmWHPQ39zueTU_RCsv2EaoyghMx0LSJ_Ab7ug3lshvNsu5SbnfWTZN68kQ-OZfnrhmPTGeWJMLT6dZJDvfbRuAc-YpnYweQEFke91Rsx5-RlqiGMuJrIin7pYTSzveVn54IpfHk-TEPHQ8hCtJ6g0LZpuyC_Dm2sxfZc5e0_R3XLxgTCz1EzjVFVLc3cB1_jnizFsxkqqNwCiDkPNzMknZgw19A2pTZq8y6ns4COFUPRwGxinftkC4MU3LmdgjPiMdj9mQcYUvw_awBzaQ6E0mBfLxsgT94wPqXPI325KiGbbLJIpCgY8Oto4lqALwqArhZEr7qA4NSST7ThmLax6vT6-fKw3G15GK_R568rILJ_JoFqK5GJSkQwpqAN7unrs7oc2UA0jx8mzET3fJ_Y4YuP015KHynUSmZBEX7t1AUbHVZN6_4n1fFtd9CCAz1Vlh3Z__49Exto0c3X4Nvfyi5WCHYCzZtHVxlOKkQ=w1919-h914")
	.setColor(color)
msg.channel.send({embed});
};

if(command === "cri"){
	msg.delete();
	const embed = new Discord.RichEmbed()
	.setImage("https://lh3.googleusercontent.com/h64uYorN5cKetcSMfHG7tzTSLBgajmag6fjkaeJTQ9K_2q2Yl6uvmOJ6VP8exobG8YyBtgHhvxJh77Q1bFz6SmhYlU9O9wc5moCjI3DpD4iUpgnToS_ywDXzAsdtLV4U52tw34RHe54D87iO23MeB2Lu-Gt-p6KjJjp9gyWibedhJJ80zdOHNMCbi9hx3rxT878wV6Bg30QPLncBc3D-QY7t9dJ9fs4kqBn_vIIsJ5v8svmnin38iqVVaWaJgs3yqSmE4XZyfGlxb1V6KJXT6mdfdZhb0y-1o5hlOd2bV_o0d8lrXyaG8F9w_t7mUAU65oy_y-8T7_I7XjOoV8gCAw6bx3Vpdk-0BNjVsSifvKiupG5PT6eDLzI1LnVDNpeN5FmbV6dCcIpP26PA6j6f-tiSd0DU0t-_2WgAbZXqJpa2AdK_QnOVgLOzPQMHwNzPK0l_Jo9R6Zi9-IjAwxQ8niw429KWUBGzXaa5cKHWlaRuq0G2A2XPfoWtCMKXOP5X8h0JC0c8IArpAtTBvKGmV37DsJU4XbAUwkxamTQVW1rgPUWvXDujjfEloAfacg=w226-h170-p-k-nu")
	.setColor(color)
msg.channel.send({embed})
};

if(command === "hue"){
	msg.delete();
	const embed = new Discord.RichEmbed()
	.setColor(color)
	.setImage("https://lh3.googleusercontent.com/mgJ5njRtyaFcVTKKfQqmMtjtbB3jcpmQX9JDP2BZofu9HWHTbY0zDZ-oN3_4Jr68o4BdTrL20dtnNnVB68JvWvZxmwHzL09b8dtv4y68EHjhlYaIKSk757OMKiSvaGebHGQF0jGMM3I3Z8hBYqjEHWesLPombughgYsw9maHn8kI0lwfY9N9WQR2KRN6M63w-XfhndtW8OT0PlU-HVCGVDsRIStWirJYNBhYKF0TXLKfdtbIrknBPWDx-MQ7E13i8WyPInvFzrD4Z_IXfmEV1KHjgT9I5OxP3wnDA3wYXDJvzQVBFfqt6tPhKO3ifizvIExSdmVr7DEqqLMQY-RJiIyTTz7s0HKGHrtQmHuxGtckGUoUfdEjwzxZTRlAKRbEGb3-hhsPL9C6GQ5pj9iwAQbRv1rlbex--hlAm_-67MTBtgo8RA4Re1GA93AYcXPV6_zuSXKwZxPIdLuQ83MW-aCRrlWcViv0xy0xobI7quz5SOdOU8BiypHszeYbEiUM_j3BVW1hYYmVVE04eCce0ojRQi9poeR5j6U9NbZUfYZtD5I8GwPjPdd3_eFDhg=w226-h170-p-k-nu")
msg.channel.send({embed})
};

if(command === "nu"){
	msg.delete();
	const embed = new Discord.RichEmbed()
	.setColor(color)
	.setImage("https://lh3.googleusercontent.com/wfdDbWCuUSCh4WZZOwpbeYUx4eiLm8xJ7QAXlBt-O8zLWxit-WwbHzwT8FBEMDr5GAxBBzV0CzhleOAoDTzDKR-X6bfJQEtpEHUC1ZjH0CqT9Q4T93-2-VbZQycGTLvgZUEkAYhC2rP6CuJi8WafkZCyPklCcl3ZDgJSdgoppMZmfmWUQ8QYey26Kw88i2fsdtMr0G5e40U90xcjAO_78GR4wc-NcegB4CMuqVhx0-s3w6dwz2S2KByAp3rd-x05zQT25eekAQR_T-Az_DnKlhLtnvU0QLj6u_mrjrwOAYVgezL3iVBxDPEze2cjnTHuAXdbuUiQiVRasYr5Vc735jpl0zmbt0sHkfaCo10c4DWGGhKLdQgBBaPKTYEgKXbPG1H7Zeb1dF3SHKK39oi5MMcsHxGTNKSC2FVI4A5Nb_SXLHNXGUPPfrOt0LW9dEmKDyWFY6eBlrlsSDkQjNx3Fjk6_REMeRq4s5KV6Agg_0tjVNA4ugZGWlwys4oB82C_jbUMVxKfqpwBdOR9lsYt3H8-qPUWcL8kB7bfm8naJ3H1PGfJj5OzLDf8arTJyw=w1919-h914")
msg.channel.send({embed})
};

if(command === "sentai"){
	if(msg.member.roles.has(remoteHolderz.id)){
		msg.delete()
		mention = msg.mentions.users
		rec = argument.indexOf(mention)
		argument.splice(mention, 1)
		choice = [Math.floor(Math.random() * 4000)];

		const embed = new Discord.RichEmbed()
			.setColor(color)
			.setImage("https://drive.google.com/drive/u/0/folders/1VgFXTWYyWbw2NKYwnD9qtLBOp4bgtzBc/file(${choice}).jpg");
		msg.mentions.users.first().send({embed});
}};

if(command === "shit"){
	msg.delete();
	const embed = new Discord.RichEmbed()
		.setColor(color)
		.setImage("https://cdn.discordapp.com/attachments/259022782757601280/373190311813578753/c76.jpg")
	msg.channel.send({embed});
};

if(command === "smart"){
	msg.channel.send("What did you just say about me you little bitch? I'll have you know I graduated top of my class my freshman year of high school and have watched every episode of Rick and Morty and I have over 300 confirmed IQ points. I am trained in mental warfare and I'm the top thinker in the entire US school system.  You are nothing to me but just another normie. I will teach you with precision the likes of which has never been seen before on this Earth, mark my words. You think you can get away with talking smart like that over the internet? Think again, fucker. As we speak, I'm contacting my secret network of MENSA members across the US and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your intelligence. You're fucking stupid, kid. I can think anything, anytime, and I can hypothesize in over seven hundred ways, and thats just with my bare brain. Not only am I extensively trained in animated cartoons, but I have access to the entire arsenal of the Rick and Morty Fan Club and I will use it to its full extent to wipe your miserable intelligence off the face of the continent you little shit. If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your uneducated tongue. But you couldn't, you didn't, and now you're paying the price you goddamn buffoon. I will spout intelligence all over you and you will drown in it. You're fucking educated kiddo.");
	msg.delete();
};

if(command === "ping"){
	msg.delete();
	msg.channel.send('Pinging...').then(sent => {
	    sent.edit(`Pong! Took ${sent.createdTimestamp - msg.createdTimestamp}ms`);
	});
};

});

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
	console.log("Restarting. . .")
	bot.destroy().then(() => bot.login(process.env.BOT_TOKEN))
});
//throws errors in the console



bot.login(process.env.BOT_TOKEN);

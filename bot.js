const Discord = require("discord.js");
const bot = new Discord.Client();
//I wont explain this, just know it makes the bot. work
const config = require("./config.json");
//makes use of the config file

bot.on("ready", () => {
	console.log("Bot is connected!")
bot.user.setPresence({game: {name: "Use '..help' for commands!", type: 0, url: null}})
console.log(bot.user.presence)
});

console.log("prefix set to " + config.prefix);
//reminds you of what the prefix is.

bot.on("message", (msg) => {
/*	if(msg.author.id === "446419931286863883"){
		if (msg.content === "reset"){
			console.log("Restarting. . .")
			bot.destroy().then(() => bot.login(config.token))
		}
	}*/
	//***THIS IS A LIBRARY***:🇦 🇧 🇨 🇩 🇪 🇫 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳 🇴 🇵 🇶 🇷 🇸 🇹 🇺 🇻 🇼 🇽 🇾 🇿

/*	let shitRole = msg.guild.roles.find("name", "Shit Taste");
	if(msg.member.roles.has(shitRole.id)){
		msg.react("💩")
	}
*/

// 	let rekt = msg.guild.roles.find("name","Rekted");

/*	if(msg.member.roles.has(rekt.id)){
		msg.react("🇷").then(() => msg.react("🇪")).then(() => msg.react("🇰")).then(() => msg.react("🇹"));
	}*/
  //everytime a message is sent, the bot grabs it and uses it here:
	 if (!msg.content.startsWith(config.prefix)) {return;}

  //if the message does not start with the prefix, the bot stops looking at it.

	let color = ('#' + Math.random().toString(16).slice(2, 8).toUpperCase());

  //specifies memerRole to be the information of the memer role in the server.
/*  if(!msg.member.roles.has(memerRole.id)) {
    //Checks if the person who sent the message doe NOT have the memer role.
    msg.channel.send("");
		if(msg.channel.type !== "dm"){ msg.delete(); }
    //this sends a message to the channel that the command was sent in.
    return;
    //stops looking at the message.
  }
*/
	let command = msg.content.split(" ")[0];
	command = command.slice(config.prefix.length);
	let argument = msg.content.split(" ").slice(1);
  //hard to explain in text, but it works Kappa
  //essentially it changes text in a way the command is what remains form the
  //command without the prefix.
  //and argument is an array of everything written after the initial command
  //seperated by spaces.



//////////////////////////////////SERVER ONLY COMMANDS/////////////////////////////////////////
	if(msg.channel.type !== "dm"){

/////////////////////////Rabbits only commands//////////////////////////
		if(msg.guild.id === "465358602216144916"){

			let remoteHolders = msg.guild.roles.find("name", "Remote Holders");
			let camp = msg.guild.roles.find("name", "The Camp");

			if(command === "camp"){
				perms = msg.member.permissions;

				if(perms.has(["ADMINISTRATOR", "KICK_MEMBERS","BAN_MEMBERS","MANAGE_CHANNELS","MANAGE_GUILD"])){
					splice = argument.splice(1)
					user = msg.mentions.users.first()
					reason = splice.join(" ")

					msg.guild.member(user).addRole(camp.id);
					msg.channel.send("Camped "+user+" for: "+reason);
					msg.guild.member(user).send("Camped for: "+reason);
					if(msg.channel.type !== "dm"){ msg.delete(); }
				}else{
					if(msg.channel.type !== "dm"){ msg.delete(); }
					msg.author.send("How about no.");
				}
			};

			if(command === "uncamp"){
				if(msg.member.roles.has(remoteHolders.id)){
					user = msg.mentions.users.first();
					msg.guild.member(user).removeRole(camp.id);
					if(msg.channel.type !== "dm"){ msg.delete(); }
				}else{
					if(msg.channel.type !== "dm"){ msg.delete(); }
					msg.author.send("No perms for you.");
				}
			};

			if(command === "fabio"){
				if(msg.author.id === "259024176319430656"){
					msg.author.send("Faggio")
					if(msg.channel.type !== "dm"){ msg.delete(); }
				}else{
					msg.guild.member("259024176319430656").addRole(camp.id);
					if(msg.channel.type !== "dm"){ msg.delete(); }
				}
			};

			if(command === "unfabio"){
				if(msg.author.id === "259024176319430656"){
					msg.author.send("you thought");
				}else{
					msg.guild.member("259024176319430656").removeRole(camp.id);
					if(msg.channel.type !== "dm"){ msg.delete(); }
				}
			};
		}
		/////////////////END OF RABBITS COMMANDS////////////////////////////////

		if(command === "getuserinfo"){
			if(msg.channel.type !== "dm"){ msg.delete(); }

			perms = msg.member.permissions;

			if(perms.has(["ADMINISTRATOR", "KICK_MEMBERS","BAN_MEMBERS","MANAGE_CHANNELS","MANAGE_GUILD"])){
				user = msg.mentions.users.first();
		//		cli = user.client.user;
				mem = msg.guild.member(user);
				let gameName = "nothing";
				let gameTime = "never";
				let stream = "nowhere";
		//		let prem = "Not a Premium User";
				//let premDate = "Never";
				if(user.presence.game !== null){
					gameName = user.presence.game.name;
					gameTime = user.presence.game.timestamps.start;
					if(user.presence.game.type === 1){
						stream = user.presence.game.url;
					}
				}

		/*		if(cli.premium){
					prem = "Premium User";
				}*/

				const embed = new Discord.RichEmbed()
					.setTitle("User Information")
					.setColor(color)
					.setDescription("Server: " + msg.guild.name)
					.setThumbnail(user.avatarURL)
					.setAuthor(user.tag, user.avatarURL)
		//			.addField("Email: ", cli.email)
					.addField("Server Name: ", mem.nickname)
					.addField("Server Standing: ", mem.highestRole.name)
					.addField("Member Since: ", mem.joinedAt)
					.addField("Discord Tag: ", user.username)
					.addField("Account Created: ", user.createdAt)
		//			.addField("Premium Staus: ", prem)
		//			.addField("Verified: ", cli.verified)
					//.addField("Premium since: ", premDate)
					.addField("User ID: ", user.id)
					.addField("Currently: ", user.presence.status)
					.addField("Currently playing: ", gameName)
					.addField("Playing Since: ", gameTime)
					.addField("Currently streaming: ", stream)
					.addField("Last Message: ", user.lastMessage)
					.setFooter("Data Retrieved at: " + msg.createdAt)
				msg.channel.send({embed});
			}
		}

		if(command === "del"){
			if(msg.channel.type !== "dm"){ msg.delete(); }

			perms = msg.member.permissions;

			if(perms.has(["ADMINISTRATOR", "KICK_MEMBERS","BAN_MEMBERS","MANAGE_CHANNELS","MANAGE_GUILD"])){
				let user = msg.mentions.users.first();
				let number = argument[1];

				const filter = message => message.author.id === user.id;
				msg.channel.fetchMessages({ limit: number }).then(messages => {
		  		const filteredMessages = messages.filter(filter);
		  		msg.channel.bulkDelete(filteredMessages);
				});
			}
		};

		if(command === "pm"){
			perms = msg.member.permissions;

			if(perms.has(["ADMINISTRATOR", "KICK_MEMBERS","BAN_MEMBERS","MANAGE_CHANNELS","MANAGE_GUILD"])){
				mention = msg.mentions.users;
				rec = argument.indexOf(mention);
				argument = argument.splice(rec, 1);
				let message = argument.join(" ");
				msg.mentions.users.first().send(""+message+"");
				if(msg.channel.type !== "dm"){ msg.delete(); }
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
				if(msg.channel.type !== "dm"){ msg.delete(); }
			}
		};

/*		if(command === "sentai"){
			if(msg.channel.type !== "dm"){ msg.delete(); }
			perms = msg.member.permissions;

			if(perms.has(["ADMINISTRATOR", "KICK_MEMBERS","BAN_MEMBERS","MANAGE_CHANNELS","MANAGE_GUILD"]) || msg.author.id === "446419931286863883"){

				mention = msg.mentions.users
				rec = argument.indexOf(mention)
				argument.splice(mention, 1)
				type = [".jpg", ".png"];
				file = type[Math.floor(Math.random() * type.length)];
				choice = [Math.floor(Math.random() * 1805)];
				msg.mentions.users.first().sendFile("/folder/file ("+ choice +").jpg");
			}
		};*/


		if(command === "name") {
			perms = msg.member.permissions;

			if(perms.has(["ADMINISTRATOR", "KICK_MEMBERS","BAN_MEMBERS","MANAGE_CHANNELS","MANAGE_GUILD"])){
				user = msg.mentions.users.first();
				splice = argument.splice(user, 1);
				name = argument.join(" ");
				msg.guild.member(user).setNickname(name);
				if(msg.channel.type !== "dm"){ msg.delete(); }
			}
		};

		if(command === "clear") {
			if(msg.channel.type !== "dm"){ msg.delete(); }
			perms = msg.member.permissions;

			if(perms.has(["ADMINISTRATOR", "KICK_MEMBERS","BAN_MEMBERS","MANAGE_CHANNELS","MANAGE_GUILD"])){
				msg.channel.bulkDelete(argument[0]);
			};
		};

		if(command === "purge"){
			perms = msg.member.permissions;

			if(perms.has(["ADMINISTRATOR", "KICK_MEMBERS","BAN_MEMBERS","MANAGE_CHANNELS","MANAGE_GUILD"])){
		    messagecount = parseInt(argument[1]);
		    msg.channel.fetchMessages({limit: messagecount})
		        .then(messages => msg.channel.bulkDelete(messages));
			}else{
				msg.channel.send("You have no perms faggot!")
			}
		};

		if(command === "ban"){
			perms = msg.member.permissions;

			if(msg.channel.type !== "dm"){
				msg.delete();
				if(perms.has(["ADMINISTRATOR", "KICK_MEMBERS","BAN_MEMBERS","MANAGE_CHANNELS","MANAGE_GUILD"])){
				 	target = msg.guild.member(msg.mentions.users.first());
					reason = argument.splice(1,argument.length).join(" ");
					target.ban(reason);
					msg.channel.send(target + " banned for: " + reason);
				}
			}
		}

		if(command === "kick"){
			perms = msg.member.permissions;

			if(msg.channel.type !== "dm"){
				msg.delete();
				if(perms.has(["ADMINISTRATOR", "KICK_MEMBERS","BAN_MEMBERS","MANAGE_CHANNELS","MANAGE_GUILD"])){
					target = msg.guild.member(msg.mentions.users.first());
					reason = argument.splice(1,argument.length).join(" ");
					target.kick(reason);
					msg.channel.send(target + " kicked for: " + reason);
				}
			}
		}

		if(command === "vote"){
			msg.delete();

			perms = msg.member.permissions;

			if(perms.has(["ADMINISTRATOR", "KICK_MEMBERS","BAN_MEMBERS","MANAGE_CHANNELS","MANAGE_GUILD"])){
				const filter = (reaction) => reaction.emoji.name === '👍'
				votes = 0;

				const embed = new Discord.RichEmbed()
					.setTitle("@everyone Vote Called!")
					.setDescription(argument.join(" "))
					.setFooter("React 👍 to vote yes.")

					msg.channel.send({embed})
					msg.guild.member('519294665502228491').lastMessage.react('👍')
						.then(() => collection = msg.guild.member("519294665502228491").lastMessage.awaitReactions(filter, { time: 120000 }))
							.then(collected => votes = collected.size - 1)
								.then(() => { if(votes >= msg.guild.memberCount/2){ msg.channel.send("Vote Passed!"); }else{ msg.channel.send("Vote did not pass."); } });
			}
		}
	};
	//////////////////////////////END OF SERVER ONLY COMMANDS///////////////////////////////////



	if(command === "help"){
		regList = ["greentext: posts a random greentext","userinfo: retrieves info about you","*vote: calls a 30 second vote and determines outcome based on vote count","*getuserinfo: retrieves info about a person you @","*name: allows admins to quickly change usernames with an @","*purge: completely clears all messages loaded on a page","*clear: deletes a set number of messages defined my admin","*pm: sends a pm to whomever the admin @s","*del: deletes messages of @'d user from a set number of retrieved messages", "8ball", "rev: reverses message", "cry", "facepalm","fuck","choose: chooses a ranbdom selection from words in message","kmf: 'kill, marry, fuck'","doggo","rage","lenny","nazi","4FCG","autism","ree","owo","what","nigga","spicy","*power: sends a tts message","brits","friendly","o","deusvult","pooh","f","normie","rip","lmao","kek","kappa","noice","faggot","ayy","shook","eyebrows","dab","weeb","bait","joke","#neko: posts a random neko image"]
		rabbitsList = ["fabio","unfabio","camp","uncamp"]
		const embed = new Discord.RichEmbed()
			.setAuthor('Command List', 'https://3c2ba678857e073c9506-9b92ffc51ccdc874f7e956dfcfbdbfba.ssl.cf5.rackcdn.com/meme-bot.png')
			.setDescription("All commands must begin with the command identifier '..'")
			.addField("Regular Commands", regList)
			.addField("Rabb.its Commands(specific to Rabb.its server)", rabbitsList)
			.setColor(color)
			.setFooter("* denotes an admin only command. # denotes commands that only work in DM.")
		msg.author.send({embed});
		if(msg.channel.type !== "dm"){ msg.delete(); }
	};

	if(command === "greentext") {
		pool = ["https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/19/enhanced/webdr05/enhanced-buzz-9331-1429917116-6.jpg","http://i.imgur.com/pyIp2v3.png","https://1.bp.blogspot.com/-yOzUQAo2Yvw/VtBXBnEIJNI/AAAAAAAAFDk/uzuZWaklCII/s1600/taco-autism-greentext.jpg","http://static.fjcdn.com/pictures/Fallout+greentext+saw+this+on+b+laughed+way+too+hard_567c4b_5118072.png", "http://i.imgur.com/sRnj8pm.jpg","http://i.imgur.com/dQwCdbv.jpg","http://2static.fjcdn.com/pictures/More_e8db27_5797785.jpg","http://i.imgur.com/LhKEs4d.jpg","http://i.imgur.com/QSyOLyu.jpg","http://i.imgur.com/xwC3r6O.png","http://2static.fjcdn.com/pictures/More_ecc411_5797785.jpg","http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/07/funniest-4chan-threads-an-american-in-paris.jpg","http://i.imgur.com/7hlFLBC.jpg","http://2static.fjcdn.com/pictures/Even_23a3ac_5797787.jpg","http://2static.fjcdn.com/pictures/Greentexts_a226d7_5797782.jpg","http://2static.fjcdn.com/pictures/Legendary+greentexts+part+2_f6851a_5689052.jpg","http://2.bp.blogspot.com/-XCkpr_n91w4/VD_GIMDZZWI/AAAAAAAAAGw/l-6d6zR0KBU/s1600/The%2BCanadian%2BWay.jpg","http://i.imgur.com/IeBxvrG.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/16/enhanced/webdr04/enhanced-buzz-18754-1429906819-51.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/16/enhanced/webdr12/enhanced-buzz-18466-1429908690-9.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/18/enhanced/webdr09/edit-13123-1429914583-31.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/18/enhanced/webdr08/edit-10913-1429914662-8.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/18/enhanced/webdr13/edit-12962-1429914558-19.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/18/enhanced/webdr13/enhanced-buzz-8023-1429914863-18.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/18/enhanced/webdr09/edit-13199-1429914607-10.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/16/enhanced/webdr12/enhanced-buzz-17803-1429907085-7.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/17/enhanced/webdr04/enhanced-buzz-4678-1429909918-11.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/18/enhanced/webdr10/enhanced-buzz-28695-1429915793-13.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/17/enhanced/webdr04/enhanced-buzz-3883-1429910787-13.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/18/enhanced/webdr01/enhanced-buzz-11580-1429915691-7.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/19/enhanced/webdr09/enhanced-buzz-31743-1429917678-15.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/19/enhanced/webdr10/enhanced-buzz-27376-1429918306-10.jpg","https://img.buzzfeed.com/buzzfeed-static/static/2015-04/24/16/enhanced/webdr14/enhanced-buzz-18947-1429908882-7.jpg", "http://i.imgur.com/iyMJUY7.png", "http://i2.kym-cdn.com/photos/images/original/000/404/482/a96.jpg", "http://static.fjcdn.com/pictures/Favourite+green+text+story+whats+your+favourite+green+text+stories_a37bd8_4795571.jpg","http://static.fjcdn.com/pictures/Green_e9a593_5404760.jpg","http://i0.kym-cdn.com/photos/images/newsfeed/000/708/133/371.jpg", "http://i2.kym-cdn.com/photos/images/original/000/570/506/950.jpg", "//i.imgur.com/nSg2oQN.jpg", "http://i3.kym-cdn.com/photos/images/original/000/139/260/630.jpg", "http://i3.kym-cdn.com/photos/images/facebook/000/708/109/95c.jpg","http://i3.kym-cdn.com/photos/images/original/001/111/108/8e5.png","http://i1.kym-cdn.com/photos/images/original/000/988/826/74e.jpg", "https://2static1.fjcdn.com/comments/Don+t+forget+the+boundless+amounts+of+unforgettable+green+text+stories+_fd304a678549d4cd7901556aa2d32786.jpg", "http://i2.kym-cdn.com/photos/images/facebook/000/912/451/8b8.jpg", "http://i0.kym-cdn.com/photos/images/newsfeed/000/408/309/70b.png", "http://i2.kym-cdn.com/photos/images/newsfeed/000/988/827/757.png", "http://i3.kym-cdn.com/photos/images/newsfeed/001/049/069/abe.jpg"]
		let story = pool[Math.floor(Math.random() * pool.length)];
		const embed = new Discord.RichEmbed()
			.setImage(story)
		  .setColor(0909090)
		msg.channel.send({embed});
		if(msg.channel.type !== "dm"){ msg.delete(); }
	};

	if(command === "8ball") {
    question = argument.join(" ");
    if(question){
    	var answers = ["yes", "no", "maybe", "unlikely", "definitely", "no way in hell"];
      //makes an array, this probably shows you well what an array is.
      //argument array is build up like this aswell.
      let choise = answers[Math.floor(Math.random() * answers.length)];
      //picks a random string from answers array
			const embed = new Discord.RichEmbed()
				.setAuthor('8ball', 'http://appinventor.mit.edu/explore/sites/all/files/Teach/media/image_8_ball.jpg')
				.setTitle(question)
				.setColor(0x00AE86)
				.setDescription(''+choise+'')
			msg.channel.send({embed});
			if(msg.channel.type !== "dm"){ msg.delete(); }
		}else{
      msg.channel.send("Ask a question, dumbass");
			if(msg.channel.type !== "dm"){ msg.delete(); }
		}
	};

	if (command === "rev"){
		arg = argument.join(" ");

		split = arg.split("");
		join = split.reverse().join("");
		const embed = new Discord.RichEmbed()
			.setTitle(""+ arg +"")
			.addField(""+ join +"", "\u200b")
			.setColor(color)
		msg.channel.send({embed});
		if(msg.channel.type !== "dm"){ msg.delete(); }
	};

if(command === "cry"){
	const embed = new Discord.RichEmbed()
		.setImage("https://imgflip.com/s/meme/Computer-Guy-Facepalm.jpg")
		.setColor(0x0c0c0)
	msg.channel.send({embed});
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "facepalm"){
		const embed = new Discord.RichEmbed()
		.setImage("http://i3.kym-cdn.com/photos/images/original/000/641/518/b04.png")
		.setColor(0xae2140)
	msg.channel.send({embed});
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if (command === "fuck"){
	msg.channel.send("That’s it, I’m done. Fuck this chat. It’s devolved into a mass of retarded copy pastes and face spam. The quality of twitch chat has been declining for a while, but this is the last straw. That’s it. I’m done. I’m uninstalling the internet, chopping off my dick and moving to fucking Antarctica, at least the bacteria there will be fucking smarter discourse.");
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if (command === "choose"){
		let choise = argument[Math.floor(Math.random() * argument.length)];
		reply = ["I'm thinking " + choise + ".", "Definitely " + choise + ".", "Go with " + choise + ".","I'm thinking " + choise + ".", "Definitely " + choise + ".", "Go with " + choise + ".","I'm thinking " + choise + ".", "I don't know."];
		let choice = reply[Math.floor(Math.random() * reply.length)];
		const embed = new Discord.RichEmbed()
			.setThumbnail('http://findicons.com/files/icons/2118/nuvola/128/package_games_board.png')
			.setTitle("Choosing: " + argument + ".")
			.setDescription(''+choice+'')
			.setColor(0x00AE86)
		msg.channel.send({embed});
		if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "kmf") {
	options = (argument);
	msg.channel.send(options);
	if(msg.channel.type !== "dm"){ msg.delete(); }
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
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if (command === "rage"){
	msg.channel.send("つಠ益ಠ)つ");
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if (command === "lenny") {
	msg.channel.send("( ͡° ͜ʖ ͡°)");
  if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "nazi"){
	const embed = new Discord.RichEmbed()
		.setImage("https://cdn.discordapp.com/attachments/279269979000668160/293755235216654337/ceppuh.PNG")
		.setColor(0x00AE86)
	msg.channel.send({embed});
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

//			bot.destroy().then(() => bot.login(config.token))

if(command === "4FCG") {
	if(msg.channel.type !== "dm"){ msg.delete(); }
	const embed = new Discord.RichEmbed()
		.setColor(color)
		.setImage("https://cdn.discordapp.com/attachments/465358602216144918/514541044780498955/gasgasgas.png")
	msg.channel.send({embed})
};

if(command === "autism"){
		const embed = new Discord.RichEmbed()
			.setImage('https://cdn.discordapp.com/attachments/259022782757601280/289418716804939787/6154279_718130aa8be273062e0dabc4b17a89ee.jpg')
			.setColor(0x00AE86)
		msg.channel.send({embed});
		if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "ree"){
		msg.channel.send("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
		if(msg.channel.type !== "dm"){ msg.delete(); }
	};

if(command === "calc"){
		if(msg.author.id === "446419931286863883"){
			equation = argument.join(" ");
			evaluation = eval(equation);

		const embed = new Discord.RichEmbed()
			.setThumbnail('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRgxV15fjhgv31wIkUphHGwhrQPrdrsITuOxTinXqsUbPZT1Jk9')
			.setTitle(""+equation+"")
			.setDescription('='+evaluation+'')
			.setColor(0x00AE86)
		msg.channel.send({embed});
    if(msg.channel.type !== "dm"){ msg.delete(); }
	}else{
		msg.channel.send("No you don't.");
	}
};

	if(command === "owo") {
		if(msg.channel.type !== "dm"){ msg.delete(); }
		const embed = new Discord.RichEmbed()
			.setColor(color)
			.setImage("https://pre00.deviantart.net/0b45/th/pre/f/2017/064/8/2/owo_intensifies_by_rikadoh-db197ad.png")
		msg.channel.send({embed})
	};

if (command === "what"){
		msg.channel.send("What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.")
		if(msg.channel.type !== "dm"){ msg.delete(); }
	};

if(command === "nigga") {
		if(msg.channel.type !== "dm"){ msg.delete(); }
		const embed = new Discord.RichEmbed()
			.setColor(color)
			.setImage("https://cdn.discordapp.com/attachments/517762119131987991/519200877479723029/shit.jpg");
		msg.channel.send({embed})
	};

	if (command === "spicy") {
		const embed = new Discord.RichEmbed()
			.setImage("https://cdn.discordapp.com/attachments/279269979000668160/289483537957257227/spicy.jpg")
			.setColor(0x05ae924)
		msg.channel.send({embed});
		if(msg.channel.type !== "dm"){ msg.delete(); }
	};

if(command === "power"){
	perms = msg.member.permissions;

	if(msg.channel.type !== "dm"){ msg.delete(); }

	if(perms.has(["ADMINISTRATOR", "KICK_MEMBERS","BAN_MEMBERS","MANAGE_CHANNELS","MANAGE_GUILD"])){
		join = argument.join(" ");
  	msg.channel.send(
				join,
				{ tts: true }
			);
	}
};

if(command === "brits") {
	msg.channel.send("What the in the name of the Queen did you just fucking say about me, you little chav? I'll have you know I graduated top of my class in the SAS, and I've been involved in numerous secret raids on Ireland, and I have over 300 confirmed kills. I am trained in gentlemanly warfare and I'm the top rooter tooter long range shooter in the entire UK armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this great planet, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, chap. As we speak I am contacting my secret network of spies across the world and your IP is being traced right now so you better prepare for the storm, banger. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the Royal Marines and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little muppet. If only you could have known what unholy retribution your little \"clever\" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn dolt. I will shit fury all over you and you will drown in it. You're fucking dead, mate.")
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "friendly") {
  msg.channel.send("What's this you've said to me, my good friend? Ill have you know I graduated top of my class in conflict resolution, and Ive been involved in numerous friendly discussions, and I have over 300 confirmed friends. I am trained in polite discussions and I'm the top mediator in the entire neighborhood. You are worth more to me than just another target. I hope we will come to have a friendship never before seen on this Earth. Don't you think you might be hurting someone's feelings saying that over the internet? Think about it, my friend. As we speak I am contacting my good friends across the USA and your P.O. box is being traced right now so you better prepare for the greeting cards, friend. The greeting cards that help you with your hate. You should look forward to it, friend. I can be anywhere, anytime for you, and I can calm you in over seven hundred ways, and that's just with my chess set. Not only am I extensively trained in conflict resolution, but I have access to the entire group of my friends and I will use them to their full extent to start our new friendship. If only you could have known what kindness and love your little comment was about to bring you, maybe you would have reached out sooner. But you couldn't, you didn't, and now we get to start a new friendship, you unique person. I will give you gifts and you might have a hard time keeping up. You're finally living, friend.")
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

  if (command === "o") {
		msg.channel.send(" ༼ つ ◕◕ ༽つ");
    if(msg.channel.type !== "dm"){ msg.delete(); }
  };

if (command === "deusvult") {
	msg.channel.send("༼ つ ◕◕ ༽つ");
  msg.channel.send("DEUS VULT");
  msg.channel.send("༼ つ ◕◕ ༽つ");
  if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "pooh"){
	const embed = new Discord.RichEmbed()
  	.setImage('http://m.imgur.com/mjHtwHv.jpg')
		.setColor(0909090)
	msg.channel.send({embed});
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if (command === "spicier") {
	const embed = new Discord.RichEmbed()
		.setImage('https://cdn.discordapp.com/attachments/267425347904077824/289477529125781514/spicier.jpg')
		.setColor(0x00ae98)
	msg.channel.send({embed});
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

 if (command === "f") {
	 if(msg.channel.type !== "dm"){ msg.delete(); }
	 const embed = new Discord.RichEmbed()
	 	.setColor(color)
		.setImage("https://cdn.discordapp.com/attachments/465358602216144918/517042211985031168/respect.jpg")
	msg.channel.send({embed})
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
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "rip"){
	const embed = new Discord.RichEmbed()
		.setImage('https://cdn.discordapp.com/attachments/279269979000668160/386614184068251650/rip.png')
		.setColor(0x03592)
	msg.channel.send({embed});
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if (command === "lmao") {
	const embed = new Discord.RichEmbed()
		.setTitle("ayyyyyyyy lmao")
		.setImage('https://cdn.discordapp.com/attachments/259022782757601280/289424906066722816/lmao.gif')
		.setColor(0x00ae649)
	msg.channel.send({embed});
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "kek") {
 	if(msg.channel.type !== "dm"){ msg.delete(); }
	const embed = new Discord.RichEmbed()
		.setColor(color)
		.setImage("https://cdn.discordapp.com/attachments/517762119131987991/519200873801580545/kek.jpg")
	msg.channel.send({embed})
};

if(command === "kappa") {
	const embed = new Discord.RichEmbed()
		.setImage("https://images-ext-1.discordapp.net/external/anxQk5aNWYNUjdRVJI6lR3wNc0CkFTLUIZW7g6xezIg/https/cdn.discordapp.com/attachments/279269979000668160/289481362438750209/kappa.png?width=100&height=100")
		.setColor(color)
	msg.channel.send({embed});
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if (command === "noice") {
	msg.channel.send("https://youtu.be/a8c5wmeOL9o");
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "eyebrows"){
	const embed = new Discord.RichEmbed()
		.setImage("https://cdn.discordapp.com/attachments/279269979000668160/289481746146394113/meme.gif")
		.setColor(0352396)
	msg.channel.send({embed});
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "faggot") {
	if(msg.channel.type !== "dm"){ msg.delete(); }
	const embed = new Discord.RichEmbed()
		.setColor(color)
		.setImage("https://cdn.discordapp.com/attachments/517762119131987991/519248824934596608/faggot.jpg");
	msg.channel.send({embed})
};

if(command === "ayy") {
  msg.channel.send(":point_right:( ͡° ͜ʖ ͡°) :point_right:")
  if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "reply") {
	msg.channel.send(":point_left: ( ͡° ͜ʖ ͡°) :point_left:")
	if(msg.channel.type !== "dm"){ msg.delete(); }
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
	if(msg.channel.type !== "dm"){ msg.delete(); }
};


if(command === "shook"){
	const embed = new Discord.RichEmbed()
		.setImage("https://media.giphy.com/media/ZEVc9uplCUJFu/giphy.gif")
		.setColor(0xae9587)
	msg.channel.send({embed});
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "good"){
	const embed = new Discord.RichEmbed()
		.setImage("https://cdn.discordapp.com/attachments/279269979000668160/301711935504777216/goodmeme.PNG")
		.setColor(0xae6420)
	msg.channel.send({embed});
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "joke"){
	const embed = new Discord.RichEmbed()
		.setImage("http://i.imgur.com/RQWCW6H.png")
		.setColor(0xae3534)
	msg.channel.send({embed});
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "weeb"){
	const embed = new Discord.RichEmbed()
		.setImage("https://cdn.discordapp.com/attachments/222197033908436994/308964717127401473/image.png")
		.setColor(color)
	msg.channel.send({embed});
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "bait"){
	const embed = new Discord.RichEmbed()
		.setImage("https://cdn.discordapp.com/attachments/222197033908436994/308964174027948032/unknown.png")
		.setColor(color)
	msg.channel.send({embed});
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "dab"){
	if(msg.channel.type !== "dm"){ msg.delete(); }
	const embed = new Discord.RichEmbed()
		.setColor(color)
		.setImage("https://ih1.redbubble.net/image.193615005.6278/flat,800x800,075,f.u2.jpg")
	msg.channel.send({embed});
};

/*if(command === "hentai"){
	if(msg.channel.type !== "dm"){
		msg.delete();
	}else{
		var type = [".jpg", ".png"];
		let file = type[Math.floor(Math.random() * type.length)];
		let choice = [Math.floor(Math.random() * 1805)];
		msg.channel.sendFile("/folder/file ("+ choice +").jpg");
	}
};*/

if(command === "shit"){
	if(msg.channel.type !== "dm"){ msg.delete(); }
	const embed = new Discord.RichEmbed()
		.setColor(color)
		.setImage("https://cdn.discordapp.com/attachments/259022782757601280/373190311813578753/c76.jpg")
	msg.channel.send({embed});
};

if(command === "neko"){
	if(msg.channel.type !== "dm"){
		msg.delete();
	}else{
		type = [".jpg", ".png"];
		file = type[Math.floor(Math.random() * type.length)];
		if(file === ".jpg"){
			choice = [Math.floor(Math.random() * 37)];
		}else{
			choice = [Math.floor(Math.random() * 11)];
		}
		msg.channel.sendFile("folder2/file ("+ choice +")"+file);
	}
};

if(command === "smart"){
	msg.channel.send("What did you just say about me you little bitch? I'll have you know I graduated top of my class my freshman year of high school and have watched every episode of Rick and Morty and I have over 300 confirmed IQ points. I am trained in mental warfare and I'm the top thinker in the entire US school system.  You are nothing to me but just another normie. I will teach you with precision the likes of which has never been seen before on this Earth, mark my words. You think you can get away with talking smart like that over the internet? Think again, fucker. As we speak, I'm contacting my secret network of MENSA members across the US and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your intelligence. You're fucking stupid, kid. I can think anything, anytime, and I can hypothesize in over seven hundred ways, and thats just with my bare brain. Not only am I extensively trained in animated cartoons, but I have access to the entire arsenal of the Rick and Morty Fan Club and I will use it to its full extent to wipe your miserable intelligence off the face of the continent you little shit. If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your uneducated tongue. But you couldn't, you didn't, and now you're paying the price you goddamn buffoon. I will spout intelligence all over you and you will drown in it. You're fucking educated kiddo.");
	if(msg.channel.type !== "dm"){ msg.delete(); }
};

if(command === "userinfo"){
	if(msg.channel.type !== "dm"){ msg.delete(); }

	user = msg.author;
//	cli = user.client.user;
	mem = msg.member;
	let gameName = "nothing";
	let gameTime = "never";
	let stream = "nowhere";
//	let prem = "Not a Premium User";
	//let premDate = "Never";
	if(user.presence.game !== null){
		gameName = user.presence.game.name;
		gameTime = user.presence.game.timestamps.start;
		if(user.presence.game.type === 1){
			stream = user.presence.game.url;
		}
	}

/*	if(cli.premium){
		prem = "Premium User";
	}*/

	const embed = new Discord.RichEmbed()
		.setTitle("User Information")
		.setColor(color)
		.setDescription("Server: " + msg.guild.name)
		.setThumbnail(user.avatarURL)
		.setAuthor(user.tag, user.avatarURL)
//		.addField("Email: ", cli.email)
		.addField("Server Name: ", mem.nickname)
		.addField("Server Standing: ", mem.highestRole.name)
		.addField("Member Since: ", mem.joinedAt)
		.addField("Discord Tag: ", user.username)
		.addField("Account Created: ", user.createdAt)
//		.addField("Premium Staus: ", prem)
//		.addField("Verified: ", cli.verified)
		//.addField("Premium since: ", premDate)
		.addField("User ID: ", user.id)
		.addField("Currently: ", user.presence.status)
		.addField("Currently playing: ", gameName)
		.addField("Playing Since: ", gameTime)
		.addField("Currently streaming: ", stream)
		.addField("Last Message: ", user.lastMessage)
		.setFooter("Data Retrieved at: " + msg.createdAt)
	msg.channel.send({embed});
}

if(command === "ping"){
	if(msg.channel.type !== "dm"){ msg.delete(); }

	msg.channel.send("Pinging...")
		.then(() => msg.guild.member("519294665502228491").lastMessage.edit("Took " + bot.ping + "ms"));
}


});

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
	console.log("Restarting. . .")
	bot.destroy().then(() => bot.login(process.env.BOT_TOKEN))
});
//throws errors in the console



bot.login(process.env.BOT_TOKEN);

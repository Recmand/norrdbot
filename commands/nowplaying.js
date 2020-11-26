module.exports = {
  name: "nowplaying",
  alias:["nowplay","np"],
  description: "Get info of now playing music",
  run: async(client, message) => {
     const serverQueue = client.queue.get(message.guild.id);
    if (!serverQueue) return message.reply("There is nothing playing.").catch(console.error);
    const song = serverQueue.songs[0]
      message.channel.send(`:arrow_forward: Now Playing: ${song.title} from ${song.channel}. Requested by <@${song.playUser}>`)
  }
};

const Discord = require("discord.js");
const { SlashCommandBuilder, SlashCommandStringOption } = Discord;

module.exports = {
	data: new SlashCommandBuilder()
		.setName("time")
		.setDescription("Convert your time to UNIX format")
		.addStringOption(
			new SlashCommandStringOption().setName("time").setDescription("Your target time").setRequired(true)
		),
	async execute(interaction, client) {
		const message = await interaction.deferReply({
			fetchReply: true,
		});

		let time = interaction.options._hoistedOptions.filter((option) => option.name === "time")[0]["value"];
		let format = interaction.options._hoistedOptions.filter((option) => option.name === "format")[0];
		time = Math.floor(Date.parse(time) / 1000);

		const reply = `\`<t:${time}>\``;
		await interaction.editReply({
			content: reply,
			ephemeral: true,
		});
	},
};

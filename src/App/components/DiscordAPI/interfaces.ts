export interface DiscordInfo {
	id: string
	username: string
	avatar: string
	discriminator: string
	public_flags: number // https://discord.com/developers/docs/resources/user#user-object-user-flags
}

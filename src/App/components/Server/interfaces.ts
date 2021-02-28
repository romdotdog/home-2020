export enum DiscordStatus {
	Online = "online",
	DoNotDisturb = "dnd",
	Idle = "idle"
}

export interface DiscordGame {
	name: string
}

export interface DiscordMember {
	id: string
	username: string
	discriminator: string
	avatar?: string // Mostly null, use avatar_url
	avatar_url: string
	status: DiscordStatus
	game?: DiscordGame
}

export interface DiscordChannel {
	id: string
	name: string
	position: number
}

export interface DiscordWidget {
	id: string
	name: string
	instant_invite: string
	channels: Array<DiscordChannel>
	members: Array<DiscordMember>
	presence_count: number
}

export interface DiscordWidgetWithAccess extends DiscordWidget {
	access: number // date, extracted from date with .getTime()
}

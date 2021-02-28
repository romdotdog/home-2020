import * as React from "react"
import styled from "styled-components"

import { DiscordMember } from "./interfaces"
import { Info } from "./Info"

interface Props {
	member: DiscordMember
	index: number
}

const Content = styled.div`
	@keyframes animateIn {
		from {
			opacity: 0;
			transform: translateX(-20%);
		}

		to {
			opacity: 1;
		}
	}

	display: flex;
	height: 2.7rem;
	margin-bottom: 0.8rem;
	animation: animateIn 1000ms calc(var(--index) * 100ms) both ease;
`

const Icon = styled.img`
	margin-right: 0.7rem;
	border-radius: 50%;
`

const Subtext = styled.span`
	width: 100%;
	font-size: 12px;
	color: #9e9e9e;
`

const Member: React.FC<Props> = ({
	member: { id, username, avatar_url, game },
	index
}) => (
	<li key={id}>
		<Content style={{ "--index": index } as any}>
			<Icon
				width="42"
				height="42"
				alt={`${username}'s profile picture`}
				src={avatar_url}
			/>
			<Info>
				{username}
				{game && (
					<Subtext>
						Playing <strong>{game.name}</strong>
					</Subtext>
				)}
			</Info>
		</Content>
	</li>
)

export default Member

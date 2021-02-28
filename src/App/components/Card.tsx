import * as React from "react"
import styled from "styled-components"
import Dwitter from "./Dwitter"

interface CardProps {
	padding?: string
}

export const Card = styled.div`
	background-color: var(--card);
	border-radius: var(--card-roundness);
	border: var(--card-border) solid 1px;
	overflow: hidden;
	${(props: CardProps) => props.padding && `padding: ${props.padding};`}
`

const BannerContainer = styled.div`
	position: relative;
	border-radius: var(--card-roundness);
	overflow: hidden;
	margin-bottom: 1rem;
`

const Center = styled.div`
	position: absolute;
	top: 50%;
	left: 47%;
	transform: translate(-50%, -50%);

	display: flex;
	align-items: center;

	.text-block {
		width: 250px !important;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}
`

const BannerImage = styled.div`
	background-image: url("https://cdn.glitch.com/151f6af7-81d8-4e6c-a735-3393cc91b34e%2Fpexels-jakub-novacek-924824.webp");
	height: 250px;
	opacity: 0.6;
`

export const Banner: React.FC = ({ children }) => {
	return (
		<BannerContainer>
			<BannerImage />
			<Dwitter />
			<Center>{children}</Center>
		</BannerContainer>
	)
}

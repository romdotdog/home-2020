import * as React from "react"
import styled from "styled-components"

interface Props {
	count: number
}

const Container = styled.div`
	display: flex;
	align-items: center;
	margin: 0.3rem 0;
	padding-left: 50px;
`

const Icon = styled.i`
	display: block;
	margin-right: 8px;
	width: 12px;
	height: 12px;
	border-radius: 50%;

	background-color: #43b581;
`

const Text = styled.span`
	color: #afafaf;
	font-size: 18px;
	font-weight: 600;
`

const CompactOnline: React.FC<Props> = ({ count }) => (
	<Container>
		<Icon />
		<Text>{count} Online...</Text>
	</Container>
)

export default CompactOnline

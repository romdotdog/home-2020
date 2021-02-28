import * as React from "react"
import styled from "styled-components"

const Grid = styled.div`
	display: grid;
	max-width: 1920px;
	height: 100%;
	grid-template-columns: 0.5fr 1.5fr;
	grid-template-rows: 1fr;
	column-gap: 1rem;
`

interface LayoutProps {
	sidebar: JSX.Element
	main: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ sidebar, main }) => (
	<Grid>
		<div style={{ gridColumn: "1/2" }}>{sidebar}</div>
		<div style={{ gridColumn: "2/3" }}>{main}</div>
	</Grid>
)

export default Layout

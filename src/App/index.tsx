import * as React from "react"
import { Banner, Card } from "./components/Card"
import Layout from "./components/Layout"
import Markdown from "./components/Markdown"
import Server from "./components/Server"

import "react-placeholder/lib/reactPlaceholder.css"
import Context from "./components/DiscordAPI/Context"
import Avatar from "./components/DiscordAPI/components/Avatar"
import Info from "./components/DiscordAPI/components/Info"

const App = () => (
	<Layout
		sidebar={
			<Card padding="1rem .5rem">
				<Server
					id="751469608615280670"
					name="rom's server"
					icon="https://cdn.discordapp.com/icons/751469608615280670/1cd9e61d3010a93a70e722e36367662c.webp?size=64"
				/>
				<Server
					id="785688056706760714"
					name="Anarchy"
					icon="https://cdn.glitch.com/151f6af7-81d8-4e6c-a735-3393cc91b34e%2Fping.png"
					compact={true}
				/>
			</Card>
		}
		main={
			<>
				<Banner>
					<Context>
						<Avatar />
						<Info />
					</Context>
				</Banner>
				<Card>
					<Markdown />
				</Card>
			</>
		}
	/>
)

export default App

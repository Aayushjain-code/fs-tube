import React from 'react'
import { NotSignedIn } from '../../components/NotSignedIn'
import "./playlist.css"

const PlaylistPage = () => {
	return (
		<main class="flex-r" >
			{/* <div class="doc-content">
				<section>

					<h5 class="component-subheading">PlaylistPage</h5>
				</section>
			</div> */}
			<NotSignedIn />
		</main>
	)
}

export default PlaylistPage

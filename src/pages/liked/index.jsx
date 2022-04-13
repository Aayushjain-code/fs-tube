import React from 'react'
import { NotSignedIn } from '../../components/NotSignedIn'
import "./liked.css"

const LikedPage = () => {
	return (
		<main class="flex-r" >
			{/* <div class="doc-content">
				<section>

					<h5 class="component-subheading">LikedPage</h5>
				</section>
			</div> */}
			<NotSignedIn />
		</main>

	)
}

export default LikedPage

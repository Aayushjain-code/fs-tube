import React from 'react'
import "./history.css"
import { NotSignedIn } from "../../components/NotSignedIn/index"
const HistoryPage = () => {
	return (
		<main class="flex-r" >
			{/* <div class="doc-content">
				<section>

					<h5 class="component-subheading">HistoryPage</h5>
				</section>
			</div> */}
			<NotSignedIn />
		</main>
	)
}

export default HistoryPage

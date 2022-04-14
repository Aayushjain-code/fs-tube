import React from "react";
import { NotSignedIn } from "../../components/notSignedIn/index.jsx";
import "./playlist.css";

const PlaylistPage = () => {
  return (
    <main className="flex-r">
      {/* <div className="doc-content">
				<section>

					<h5 className="component-subheading">PlaylistPage</h5>
				</section>
			</div> */}
      <NotSignedIn />
    </main>
  );
};

export default PlaylistPage;

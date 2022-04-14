import React from "react";
import { NotSignedIn } from "../../Components/NotSignedIn/index.jsx";
import "./liked.css";

const LikedPage = () => {
  return (
    <main className="flex-r">
      {/* <div className="doc-content">
				<section>

					<h5 className="component-subheading">LikedPage</h5>
				</section>
			</div> */}
      <NotSignedIn />
    </main>
  );
};

export default LikedPage;

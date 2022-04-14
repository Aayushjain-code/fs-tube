import React from "react";
import "./history.css";
import { NotSignedIn } from "../../components/NotSignedIn/index";
const HistoryPage = () => {
  return (
    <main className="flex-r">
      {/* <div className="doc-content">
				<section>

					<h5 className="component-subheading">HistoryPage</h5>
				</section>
			</div> */}
      <NotSignedIn />
    </main>
  );
};

export default HistoryPage;

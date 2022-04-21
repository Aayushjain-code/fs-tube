import { useEffect } from "react";
import "./history.css";
import { useHistory } from "../../context/historyContext";
import LoaderSvg from "../../assets/loader/Loader";
import HistoryCard from "./HistoryCard";
const HistoryPage = () => {
  const {
    getHistoryVideos,
    clearHistory,
    HistoryData,
    isHistoryLoading,
    HistoryError,
  } = useHistory();

  useEffect(() => {
    getHistoryVideos();
  }, []);
  return (
    <main className="flex-r">
      <section className="home">
        {HistoryData.length > 0 ? (
          <div className="position-relative">
            <button className="button btn-error" onClick={() => clearHistory()}>
              Clear All
            </button>

            <h4 className="pdl-3 pdt-3 font-semibold">
              History{" : "}
              <span>
                {HistoryData.length === 1
                  ? "1 video"
                  : `${HistoryData.length} videos`}
              </span>
            </h4>
          </div>
        ) : (
          <h4 className="pdl-3 pdt-3 font-semibold">History Empty</h4>
        )}
        <div className="main-container">
          {isHistoryLoading ? (
            <LoaderSvg />
          ) : HistoryData.length > 0 ? (
            HistoryData.map((item) => (
              <HistoryCard key={item._id} item={item} />
            ))
          ) : (
            ""
          )}
        </div>
      </section>
    </main>
  );
};

export default HistoryPage;

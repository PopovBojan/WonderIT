export default function InsightsCanvas() {
  return (
    <div className="insights-page__canvas" aria-hidden="true">
      <span className="insights-page__wordmark">NOTES</span>

      <div className="insights-page__rule insights-page__rule--left">
        <span className="insights-page__tick insights-page__at-01">01</span>
        <span className="insights-page__chip insights-page__at-read">Read</span>
        <span className="insights-page__chip insights-page__chip--aqua insights-page__at-build">
          Build
        </span>
        <span className="insights-page__tick insights-page__at-03">03</span>
        <span className="insights-page__chip insights-page__chip--coral insights-page__at-ship">
          Ship
        </span>
        <span className="insights-page__tick insights-page__at-05">05</span>
        <span className="insights-page__chip insights-page__at-learn">Learn</span>
      </div>

      <div className="insights-page__rule insights-page__rule--right">
        <span className="insights-page__tick insights-page__at-02">02</span>
        <span className="insights-page__chip insights-page__chip--aqua insights-page__at-think">
          Think
        </span>
        <span className="insights-page__tick insights-page__at-04">04</span>
        <span className="insights-page__chip insights-page__at-write">Write</span>
        <span className="insights-page__tick insights-page__at-06">06</span>
      </div>
    </div>
  );
}

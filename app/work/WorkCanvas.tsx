export default function WorkCanvas() {
  return (
    <div className="work-page__canvas" aria-hidden="true">
      <span className="work-page__wordmark">WORK</span>

      <div className="work-page__rule work-page__rule--left">
        <span className="work-page__tick work-page__at-01">01</span>
        <span className="work-page__chip work-page__at-brief">Brief</span>
        <span className="work-page__chip work-page__chip--aqua work-page__at-build">
          Build
        </span>
        <span className="work-page__tick work-page__at-03">03</span>
        <span className="work-page__chip work-page__chip--coral work-page__at-ship">
          Ship
        </span>
        <span className="work-page__tick work-page__at-05">05</span>
        <span className="work-page__chip work-page__at-review">Review</span>
      </div>

      <div className="work-page__rule work-page__rule--right">
        <span className="work-page__tick work-page__at-02">02</span>
        <span className="work-page__chip work-page__chip--aqua work-page__at-live">
          Live
        </span>
        <span className="work-page__tick work-page__at-04">04</span>
        <span className="work-page__chip work-page__at-iterate">Iterate</span>
        <span className="work-page__tick work-page__at-06">06</span>
      </div>
    </div>
  );
}

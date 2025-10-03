import './Difference.css';

export default function Difference() {
  return (
    <section className="difference-section">
         <img src="/bg.png" alt="Background" className="difference-bg" />
      <div className="difference-inner">
        <h2 className="difference-title">
          The <span className="highlight">Tred</span><br />
          Difference
        </h2>

        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <div className="step-content">
              <div className="step-heading">One team, <br/> <span>end-to-end</span></div>
              <div className="step-text">
                Design, selections, approvals, build, and handover under one roof.
              </div>
            </div>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <div className="step-content">
              <div className="step-heading">One team,<br/> <span>end-to-end</span></div>
              <div className="step-text">
                Design, selections, approvals, build, and handover under one roof.
              </div>
            </div>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <div className="step-content">
              <div className="step-heading">One team,<br/> <span>end-to-end</span></div>
              <div className="step-text">
                Design, selections, approvals, build, and handover under one roof.
              </div>
            </div>
          </div>

          <div className="step">
            <div className="step-number">04</div>
            <div className="step-content">
              <div className="step-heading">One team,<br/> <span>end-to-end</span></div>
              <div className="step-text">
                Design, selections, approvals, build, and handover under one roof.
              </div>
            </div>
          </div>
        </div>

        <button className="difference-cta">Talk to a specialist</button>
      </div>
    </section>
  );
}

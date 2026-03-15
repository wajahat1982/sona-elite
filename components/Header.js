export default function Header() {
  return (
    <>
      <div className="utilityBar">
        <div className="container utilityInner">
          <div>Headquartered in the United States</div>
          <div className="utilityLinks">
            <a href="#communities">WhatsApp</a>
            <a href="#communities">LinkedIn</a>
            <a href="#communities">Facebook</a>
            <a href="/login">Member Login</a>
          </div>
        </div>
      </div>

      <header className="siteHeader">
        <div className="container headerInner">
          <a href="/" className="brand">
            <img src="/images/sona-logo.png" alt="SONA logo" />
            <div className="brandText">
              <strong>SONA</strong>
              <span>Sargodhian Overseas Network Association</span>
            </div>
          </a>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="/chapters">Chapters</a>
            <a href="/members">Members Directory</a>
            <a href="#platform">Professional Network</a>
            <a href="/announcements">Announcements</a>
            <a href="/giving">Giving</a>
            <a href="/founders-circle">Founders Circle</a>
            <a href="/login" className="joinBtn">Join Now</a>
          </nav>
        </div>
      </header>
    </>
  );
}

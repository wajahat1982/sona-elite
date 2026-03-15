export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <div className="brandFoot">
            <img src="/images/sona-logo.png" alt="SONA crest" />
            <div>
              <h4>SONA</h4>
              <p>
                The global home of Sargodhians. A platform for connection,
                support, mentorship, service, and lifelong identity.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4>Global Chapters</h4>
          <ul>
            <li><a href="/chapters">Americas</a></li>
            <li><a href="/chapters">Europe</a></li>
            <li><a href="/chapters">Asia</a></li>
            <li><a href="/chapters">ANZ</a></li>
          </ul>
        </div>

        <div>
          <h4>Platform</h4>
          <ul>
            <li><a href="/members">Members Directory</a></li>
            <li><a href="/announcements">Announcements</a></li>
            <li><a href="/giving">Giving</a></li>
            <li><a href="/founders-circle">Founders Circle</a></li>
          </ul>
        </div>

        <div>
          <h4>Communities</h4>
          <ul>
            <li><a href="#communities">WhatsApp</a></li>
            <li><a href="#communities">LinkedIn</a></li>
            <li><a href="#communities">Facebook</a></li>
          </ul>
        </div>

        <div>
          <h4>Identity</h4>
          <ul>
            <li>Once a Sargodhian, always a Sargodhian.</li>
          </ul>
        </div>
      </div>

      <div className="container copyright">
        © SONA · Sargodhian Overseas Network Association
      </div>
    </footer>
  );
}

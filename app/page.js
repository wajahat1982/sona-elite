import PageShell from "../components/PageShell";

const tiers = [
  ["Basic","Entry level access for every Sargodhian to join the platform, reconnect, and stay informed."],
  ["Active","For members who engage in events, mentorship, chapter activity, and community participation."],
  ["Visionary","For leaders and professionals committed to helping shape the future of the Sargodhian network."],
  ["Founders Circle","Our highest recognition tier for those whose extraordinary support builds and strengthens SONA."],
];

const regions = [
  ["Americas","Headquarters of the global SONA platform and a strategic base for member engagement across North and South America.","Headquarters"],
  ["Europe","Connecting Sargodhians across the United Kingdom and Europe through structured engagement and community building.","Regional Chapter"],
  ["Asia","A strong and growing alumni presence connecting professionals, mentors, and leaders across Asia.","Regional Chapter"],
  ["ANZ","Serving Sargodhians in Australia and New Zealand with local energy and global alignment.","Regional Chapter"],
];

const leaders = [
  ["Wajahat Anjum","President","Leading platform vision, institutional buildout, and strategic execution.","/images/president.jpg"],
  ["Arshad N. Khan","General Secretary","Driving coordination, governance, and leadership continuity across the network.","/images/general-secretary.jpg"],
  ["Khurram Shehzad","Treasurer","Supporting sustainable growth, financial structure, and member confidence.","/images/treasurer.jpg"],
];

const modules = [
  ["Members Directory","Reconnect with Sargodhians across generations, professions, and geographies.","/images/members-directory.png","Explore Directory","/members"],
  ["Professional Network","Build meaningful professional relationships across a truly global Sargodhian network.","/images/professional-network.png","Connect Now","#platform"],
  ["Events and Reunions","Celebrate shared legacy through regional gatherings, reunions, and flagship SONA events.","/images/events-reunions.png","View Events","#events"],
  ["SONA Announcements","Official leadership updates, strategic initiatives, and institutional community notices.","/images/announcements-banner.png","Read Updates","/announcements"],
];

export default function HomePage() {
  return (
    <PageShell>
      <main>
        <section className="hero">
          <img className="bg" src="/images/hero-evening.png" alt="PAF College Sargodha evening campus" />
          <div className="heroOverlay" />
          <div className="container heroGrid">
            <div>
              <span className="kicker">The Global Home of Sargodhians</span>
              <h1>One Lifelong Bond.<br />One Global Sargodhian Network.</h1>
              <p>
                Across continents and across generations, SONA is the unified global platform created
                to connect every Sargodhian worldwide. It is where alumni reconnect, support one another,
                build meaningful relationships, and strengthen the lifelong brotherhood forged at PAF College Sargodha.
              </p>
              <p>
                Whether you were selected during the earliest years of the institution, during its time as the
                Pakistan Air Force Academy, or during its proud reinstatement as a traditional intermediate college,
                you remain part of a legacy that spans generations.
              </p>
              <p className="motto">Once a Sargodhian, always a Sargodhian.</p>
              <div className="heroActions">
                <a href="/login" className="joinBtn">Join Now</a>
                <a href="/members" className="ghostBtn">Explore Members Directory</a>
              </div>
            </div>

            <aside className="panel">
              <img src="/images/sona-logo.png" alt="SONA crest" style={{width:120, marginBottom:16}} />
              <h3>SONA Platform Highlights</h3>
              <ul>
                <li>Global Chapters across four regions</li>
                <li>Members Directory and Professional Network</li>
                <li>Leadership Announcements Board</li>
                <li>Events, Reunions, and Approved Charities</li>
                <li>Membership Tiers and Founders Circle</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="sectionLight" id="about">
          <div className="container">
            <h2 className="sectionTitle">SONA Membership Tiers</h2>
            <p className="sectionSubtitle">
              SONA exists to unite all Sargodhians worldwide on one enduring platform of engagement,
              support, identity, and shared purpose.
            </p>
            <div className="tierGrid">
              {tiers.map(([title, text]) => (
                <div className="card tierCard" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="/login" className="subtleBtn">{title === "Founders Circle" ? "Explore" : "Join Now"}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionDark" id="chapters">
          <div className="container">
            <h2 className="sectionTitle light">Regional Chapters</h2>
            <p className="sectionSubtitle light">
              SONA connects Sargodhians through four regional chapters across the world.
            </p>
            <div className="bannerWrap">
              <img src="/images/regional-banner.png" alt="Regional chapters map" />
            </div>
          </div>
        </section>

        <section className="sectionLight">
          <div className="container twoCol">
            <div className="card aboutCard">
              <img className="crest" src="/images/sona-logo.png" alt="SONA crest" />
              <h3>SONA</h3>
              <div className="aboutSub">Sargodhian Overseas Network Association</div>
              <div className="hrGold" />
              <div className="copy">
                A global alumni ecosystem for every individual selected to PAF College Sargodha
                across its history, including the academy era and beyond.
              </div>
            </div>

            <div>
              <h2 className="sectionTitle" style={{textAlign:"left", marginTop:0}}>Leadership Announcements</h2>
              <div className="announcementGrid">
                <div className="card announcementMain">
                  <div className="meta">Official Update</div>
                  <h3>SONA Global Platform Launch</h3>
                  <div className="copy" style={{fontSize:17}}>
                    A distinguished new digital home for Sargodhians worldwide, built to strengthen connection,
                    engagement, mentorship, and lifelong identity.
                  </div>
                  <a href="/announcements" className="subtleBtn">Read More</a>
                  <div className="hrGold" />
                  <div style={{fontSize:24, fontWeight:700, marginBottom:8}}>SONA Global Giving Initiative</div>
                  <div className="copy" style={{fontSize:15}}>
                    A platform for vetted causes, trusted support, and meaningful community impact.
                  </div>
                </div>

                <div className="card">
                  <img src="/images/announcements-banner.png" alt="SONA announcements" style={{width:"100%", height:280, objectFit:"cover"}} />
                  <div style={{padding:22}}>
                    <div style={{fontSize:24, fontWeight:700, marginBottom:8}}>Launch of Regional Chapters</div>
                    <div className="copy" style={{fontSize:15}}>
                      Americas, Europe, Asia, and ANZ operating under one unified Sargodhian platform.
                    </div>
                    <div style={{marginTop:14}}>
                      <a href="/announcements" className="subtleBtn">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionLight">
          <div className="container">
            <h2 className="sectionTitle">SONA Leadership</h2>
            <p className="sectionSubtitle">
              Stewardship, vision, and service guiding the global Sargodhian community.
            </p>

            <div className="leaderGrid">
              {leaders.map(([name, role, text, img]) => (
                <div className="card leaderCard" key={name}>
                  <img src={img} alt={name} />
                  <h3>{name}</h3>
                  <div className="role">{role}</div>
                  <p className="copy" style={{fontSize:15, marginTop:12}}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionLight">
          <div className="container">
            <h2 className="sectionTitle">Global Chapters</h2>
            <p className="sectionSubtitle">
              Four regions, one identity, and one unified global platform.
            </p>

            <div className="chapterGrid">
              {chapters.map(([title, text, mini]) => (
                <div className="card chapterCard" key={title}>
                  <div className="chapterMini">{mini}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div style={{marginTop:16}}>
                    <a href="/chapters" className="subtleBtn">Explore Chapter</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionDark" id="platform">
          <div className="container">
            <h2 className="sectionTitle light">The SONA Platform</h2>
            <div className="moduleGrid">
              {modules.map(([title, text, image, button, href]) => (
                <div className="moduleCard card" key={title}>
                  <img src={image} alt={title} />
                  <div className="moduleBody">
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <a href={href} className="ghostBtn">{button}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionLight">
          <div className="container directorySection">
            <div className="bannerWrap">
              <img src="/images/members-directory.png" alt="Members Directory" />
            </div>
            <div>
              <h2 className="sectionTitle" style={{textAlign:"left", marginTop:0}}>Members Directory</h2>
              <div className="copy">
                The SONA Members Directory allows Sargodhians to reconnect by chapter, profession,
                legacy, and geography. It is the gateway to rediscovering classmates, mentors,
                and fellow professionals across the world.
              </div>
              <div className="heroActions">
                <a href="/members" className="joinBtn">View Directory</a>
                <a href="/login" className="subtleBtn">Join Now</a>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionLight" id="events">
          <div className="container">
            <h2 className="sectionTitle">Events and Reunions</h2>
            <div className="bannerWrap">
              <img src="/images/events-reunions.png" alt="Events and Reunions" />
            </div>
          </div>
        </section>

        <section className="sectionDark">
          <div className="container">
            <h2 className="sectionTitle light">Founders Circle</h2>
            <p className="sectionSubtitle light">
              Honoring the visionaries whose extraordinary support has helped build and strengthen SONA.
            </p>
            <div className="founderGrid">
              {leaders.map(([name, role, text, img]) => (
                <div className="founderCard" key={name}>
                  <img src={img} alt={name} />
                  <h3 style={{fontSize:28, margin:"0 0 8px"}}>{name}</h3>
                  <div className="role">{role}</div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div style={{textAlign:"center", marginTop:24}}>
              <a href="/founders-circle" className="joinBtn">View Founders Circle</a>
            </div>
          </div>
        </section>

        <section className="sectionLight" id="communities">
          <div className="container">
            <h2 className="sectionTitle">Communities and Giving</h2>
            <div className="communityGrid">
              <div className="card communityCard">
                <img src="/images/linkedin-verified.png" alt="Join SONA LinkedIn and Get Verified" />
                <div className="communityBody">
                  <h3>Join SONA LinkedIn and Get Verified</h3>
                  <a href="/login" className="joinBtn">Join LinkedIn</a>
                </div>
              </div>

              <div className="card communityCard">
                <img src="/images/facebook-community.png" alt="Join the SONA Facebook Community" />
                <div className="communityBody">
                  <h3>Join the SONA Facebook Community</h3>
                  <a href="/login" className="joinBtn">Join Facebook</a>
                </div>
              </div>

              <div className="card communityCard">
                <img src="/images/sona-giving.png" alt="SONA Giving" />
                <div className="communityBody">
                  <h3>SONA Giving</h3>
                  <a href="/giving" className="joinBtn">Support Giving</a>
                </div>
              </div>

              <div className="whatsappCard">
                <h3>Join Our WhatsApp Community</h3>
                <p>
                  Stay connected in real time with Sargodhians worldwide through the official
                  SONA WhatsApp community.
                </p>
                <a href="/login" className="greenBtn">Join WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        <section className="finalCta">
          <div className="container">
            <h2 className="sectionTitle light" style={{marginTop:0}}>Join the Global Sargodhian Community</h2>
            <p>
              Become part of a growing worldwide support system built on connection, pride,
              service, mentorship, and lifelong identity.
            </p>
            <div className="heroActions" style={{justifyContent:"center"}}>
              <a href="/login" className="joinBtn">Join Now</a>
              <a href="/members" className="ghostBtn">Members Directory</a>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

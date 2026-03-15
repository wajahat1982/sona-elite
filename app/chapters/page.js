import PageShell from "../../components/PageShell";

const regions = [
  ["Americas","Headquarters and principal regional base for SONA."],
  ["Europe","Linking Sargodhians across Europe through structured engagement."],
  ["Asia","Connecting a strong and growing alumni presence across Asia."],
  ["ANZ","Serving members across Australia and New Zealand."],
];

export default function ChaptersPage() {
  return (
    <PageShell>
      <main className="sectionLight">
        <div className="container">
          <h1 className="sectionTitle">Global Chapters</h1>
          <p className="sectionSubtitle">Four regions. One enduring Sargodhian identity.</p>
          <div className="bannerWrap" style={{marginBottom:28}}>
            <img src="/images/regional-banner.png" alt="Regional chapters banner" />
          </div>
          <div className="chapterGrid">
            {chapters.map(([title, text]) => (
              <div className="card chapterCard" key={title}>
                <div className="chapterMini">Regional Chapter</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageShell>
  );
}

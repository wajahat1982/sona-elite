import PageShell from "../../components/PageShell";

export default function AnnouncementsPage() {
  return (
    <PageShell>
      <main className="sectionLight">
        <div className="container">
          <h1 className="sectionTitle">SONA Announcements</h1>
          <p className="sectionSubtitle">
            Leadership updates, institutional notices, and strategic platform developments.
          </p>
          <div className="bannerWrap">
            <img src="/images/announcements-banner.png" alt="SONA Announcements" />
          </div>
        </div>
      </main>
    </PageShell>
  );
}

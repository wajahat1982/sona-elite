import PageShell from "../../components/PageShell";

export default function GivingPage() {
  return (
    <PageShell>
      <main className="sectionLight">
        <div className="container">
          <h1 className="sectionTitle">SONA Giving</h1>
          <p className="sectionSubtitle">
            Approved causes, structured giving, and meaningful community support.
          </p>
          <div className="bannerWrap">
            <img src="/images/sona-giving.png" alt="SONA Giving" />
          </div>
        </div>
      </main>
    </PageShell>
  );
}

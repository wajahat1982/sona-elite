import PageShell from "../../components/PageShell";

export default function MembersPage() {
  return (
    <PageShell>
      <main className="sectionLight">
        <div className="container">
          <h1 className="sectionTitle">Members Directory</h1>
          <p className="sectionSubtitle">
            Searchable directory structure for Sargodhians across regions, professions, and generations.
          </p>
          <div className="bannerWrap">
            <img src="/images/members-directory.png" alt="Members Directory" />
          </div>
        </div>
      </main>
    </PageShell>
  );
}

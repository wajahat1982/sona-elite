import PageShell from "../../components/PageShell";

const founders = [
 

export default function FoundersCirclePage() {
  return (
    <PageShell>
      <main className="sectionDark">
        <div className="container">
          <h1 className="sectionTitle light">Founders Circle</h1>
          <p className="sectionSubtitle light">
            Honoring the individuals whose commitment has significantly contributed to SONA.
          </p>
          <div className="founderGrid">
            {founders.map(([name, role, text, img]) => (
              <div className="founderCard" key={name}>
                <img src={img} alt={name} />
                <h3 style={{fontSize:28, margin:"0 0 8px"}}>{name}</h3>
                <div className="role">{role}</div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageShell>
  );
}

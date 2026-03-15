import PageShell from "../../components/PageShell";

const tiers = [
  ["Basic","Entry level membership for every Sargodhian."],
  ["Active","For members participating in events and community engagement."],
  ["Visionary","For leaders shaping the future of the network."],
  ["Founders Circle","For those whose support meaningfully strengthens SONA."],
];

export default function LoginPage() {
  return (
    <PageShell>
      <main className="sectionLight">
        <div className="container">
          <h1 className="sectionTitle">Join SONA</h1>
          <p className="sectionSubtitle">
            Choose the tier that best reflects your engagement with the global Sargodhian community.
          </p>
          <div className="tierGrid">
            {tiers.map(([title, text]) => (
              <div className="card tierCard" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#" className="joinBtn">{title === "Founders Circle" ? "Request Access" : "Select Tier"}</a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageShell>
  );
}

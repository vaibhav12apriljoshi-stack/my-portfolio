import { useState } from "react";

const profileFacts = [
  { label: "Current Role", value: "INC Leader and Lok Sabha Candidate (2024)" },
  { label: "Constituency", value: "Jaipur Rural, Rajasthan" },
  { label: "Political Party", value: "Indian National Congress (INC)" },
  { label: "Age", value: "31" },
  { label: "Father's Name", value: "Babu Lal Chopra" },
  {
    label: "Voter Registration",
    value: "Amer constituency, Serial No. 1397, Part No. 106",
  },
  { label: "Self Profession", value: "Construction Contract Work" },
  { label: "Spouse Profession", value: "Dairy Income" },
];

const executiveBio = [
  "Political roots in student leadership, including role as President of Rajasthan University Student Union (RUSU).",
  "Strong public identity as a son of the soil from Rajasthan with deep local connect.",
  "Active Congress voice with grassroots engagement in Jaipur Rural and nearby regions.",
];

const manifesto = [
  {
    title: "Youth Empowerment",
    detail:
      "Focused on employment-driven development, local hiring opportunities, and practical skill development programs for youth.",
  },
  {
    title: "Farmers' Rights",
    detail:
      "Supports farmer-first reforms, fair pricing, irrigation expansion, and stronger market access for rural producers.",
  },
  {
    title: "Social Justice",
    detail:
      "Aligned with core Congress values of inclusivity, equal opportunity, and justice for all social groups.",
  },
];

const activism = [
  "Student leadership phase through NSUI and Rajasthan University public platforms.",
  "Participation in public movements, issue-based rallies, and protests including anti-Agnipath outreach.",
  "Community service involvement and direct citizen interaction drives in Jaipur Rural.",
  "High-energy public engagement during the 2024 Lok Sabha election campaign.",
];

const constituencyWork = [
  "Rural roads and local infrastructure upgrades",
  "Water access and irrigation-related civic demands",
  "Youth jobs and vocational opportunities",
  "Village-level issue tracking with citizen response model",
];

const mediaItems = [
  {
    title: "With Senior Leaders",
    note: "Photo gallery with Congress leadership including senior campaign interactions.",
    src: "/pilot.webp",
  },
  {
    title: "Jan Sabha Moments",
    note: "Public speech and rally highlights from constituency-level meetings.",
    src: "/jan.jpg",
  },
  {
    title: "Village Connect",
    note: "Direct interaction with villagers on local development and grievance points.",
    src: "/village.jpg",
  },
  {
    title: "Press and Interviews",
    note: "Press coverage and media briefing snapshots from campaign trail.",
    src: "/press.jpg",
  },
];

function App() {
  const [photoSrc, setPhotoSrc] = useState("/anil.webp");

  return (
    <>
      <section className="intro-section">
        <video className="flag-video" autoPlay muted loop playsInline>
          <source src="/vedio/flag.mp4" type="video/mp4" />
        </video>
        <div className="intro-container">
          <article className="intro-copy">
            <div className="intro-title-block" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <h1> Jaipur Ka Beta</h1>
            <p>
              <strong> Jaipur Ka Beta</strong> Born and brought up in the heart of Jaipur, Anil Chopra is deeply rooted in the culture, values, and spirit of the Pink City. Known as “Jaipur Ka Beta,” he represents the voice, aspirations, and concerns of the people with sincerity and dedication.
            </p>
            <p>
              His journey reflects a strong commitment to public service, grassroots development, and inclusive progress. With a clear vision for a better future and an unwavering connection to his city, he continues to work tirelessly for the growth and well-being of Jaipur and its people.
            </p>
            <p>Scroll down to view the full public portfolio.</p>
          </article>

          <article className="intro-visual">
            <img
              src="https://assets.rahulgandhi.in/AwaazBharatKi/map.png"
              alt="Public campaign map visual"
            />
          </article>
        </div>
      </section>

      <div className="page-shell">
        <header className="hero">
          <div className="hero-top">
            <div className="hero-copy">
              <p className="kicker">Executive Bio</p>
              <h1>Anil Chopra</h1>
              <p className="hero-sub">Leader, Indian National Congress | Jaipur Rural, Rajasthan</p>
              <div className="pill-row">
                <span>Lok Sabha 2024 Candidate</span>
                <span>RUSU Background</span>
                <span>Son of Rajasthan Soil</span>
              </div>
            </div>

            <div className="hero-media">
              <article className="media-card">
                <img src="/cong.webp" alt="Congress Party Logo" />
                <p>Indian National Congress</p>
              </article>
              <article className="media-card photo-card">
                <img
                  src={photoSrc}
                  alt="Anil Chopra Portrait"
                  onError={() => {
                    if (photoSrc !== "/anil-chopra-photo.svg") {
                      setPhotoSrc("/anil-chopra-photo.svg");
                    }
                  }}
                />
                <p>Anil Chopra</p>
              </article>
            </div>
          </div>
        </header>

        <main className="content-grid">
          <section className="card profile-card">
            <h2>Profile Snapshot</h2>
            <div className="facts-grid">
              {profileFacts.map((fact) => (
                <article className="fact-item" key={fact.label}>
                  <p>{fact.label}</p>
                  <h3>{fact.value}</h3>
                </article>
              ))}
            </div>
          </section>

          <section className="card about-card">
            <h2>Executive Bio and Identity</h2>
            <ul className="clean-list">
              {executiveBio.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="note">Update this section with official verified bio lines as needed.</p>
          </section>

          <section className="card manifesto-card">
            <h2>Vision and Mission</h2>
            <div className="manifesto-grid">
              {manifesto.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="card activism-card">
            <h2>Key Achievements and Activism</h2>
            <ul className="clean-list">
              {activism.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="card election-card">
            <h2>Electoral Journey 2024</h2>
            <p>
              During the 2024 Lok Sabha cycle, the campaign focused on people-centric outreach in Jaipur
              Rural through public meetings, constituency travel, and direct issue collection from ground
              workers and residents.
            </p>
            <div className="election-record">
              <img src="/election-stats.svg" alt="Election statistics overview for 2024" />
              <ul className="clean-list">
                <li>Official Vote Share: Add exact percentage from final ECI result.</li>
                <li>Booth-Level Performance: Add top and weak booth clusters with counts.</li>
                <li>Total Votes Secured: Add final validated vote count.</li>
                <li>Campaign Statistics: Add number of Jan Sabhas, padyatras, and village meetings.</li>
              </ul>
            </div>
            <p>
              Add official vote-share numbers, booth-level performance, and campaign statistics here for a
              complete election record.
            </p>
          </section>

          <section className="card gallery-card">
            <h2>Media and Gallery</h2>
            <div className="gallery-grid">
              {mediaItems.map((item) => (
                <article className="gallery-item" key={item.title}>
                  <img
                    className="gallery-thumb"
                    src={item.src}
                    alt={item.title}
                    onError={(event) => {
                      event.currentTarget.src = "/anil-chopra-photo.svg";
                    }}
                  />
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
            <p className="note">You can replace gallery placeholders with high-resolution images and video links.</p>
          </section>

          <section className="card constituency-card">
            <h2>Constituency Work: Jaipur Rural and Rajasthan</h2>
            <ul className="clean-list">
              {constituencyWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="card citizen-card">
            <h2>Citizen Corner</h2>
            <p>Submit your grievance, development request, or suggestion for Team Anil Chopra.</p>
            <form className="citizen-form">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Village / Area" />
              <input type="tel" placeholder="Phone Number" />
              <textarea rows="4" placeholder="Write your grievance or suggestion..." />
              <button type="button">Submit Request</button>
            </form>
          </section>

          <section className="card connect-card">
            <h2>Connect With Team Anil Chopra</h2>
            <p>
              For constituency support, public meetings, media coordination, or organizational outreach,
              contact the official team.
            </p>
            <div className="contact-box">
              <p>Office: Jaipur Rural, Rajasthan</p>
              <p>Email: team.anilchopra@example.com</p>
              <p>Helpline: +91-00000-00000</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

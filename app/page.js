"use client";
import { useState } from "react";

/* ================== JOBS ================== */

const jobs = [
  { title: "Ares – Partner Program ($1K Weekly)", link: "https://docs.google.com/forms/d/e/1FAIpQLSeo_k1SaUs_YHeehUzylxU0I1ECHylOoPWFzyDBM5xOGJkOMw/viewform?pli=1&pli=1" },
  { title: "Towns – Creator Program ($5,000 Pool | $3 per 1k views)", link: "https://whop.com/joined/townsapp/content-rewards-AyKjteRGZf1jTq/app/" },
  { title: "Gondor – Hiring", link: "https://app.dover.com/apply/Gondor/cab840eb-1e3d-4392-905c-230a2a4966fe" },
  { title: "WheelX – Ambassador Program", link: "https://docs.google.com/forms/d/e/1FAIpQLScLNb9kFJ8F7AY7oY89DV62GPcBwpyn9-hI7MPAuqQLmNWhQw/viewform" },
  { title: "Kreo – Ambassador ($300/month)", link: "https://kreo.typeform.com/ambassadors" },
  { title: "SpeculateX – Ambassador ($100/month)", link: "https://docs.google.com/forms/d/e/1FAIpQLSdURBdEF8N4hvVBQazwC_6DlkRgCCJrPmdY9dgoM8zN-LhAcQ/viewform" },
  { title: "dFusionAI – Ambassador ($300/month)", link: "https://docs.google.com/forms/d/e/1FAIpQLSdyvwETfMsnM2BG-cIa2uxhrL76w1XOMPXbHiWTQDvcsAYcLg/viewform" },
  { title: "FinnaHQ – Content Creator ($4,000 | Ending Soon)", link: "https://superteam.fun/earn/r/P8563XY" },
  { title: "Soon SVM – Content Creator ($2,210 | Ending Soon)", link: "https://docs.google.com/forms/d/e/1FAIpQLSfdWMspQXlrhHoX-a_xqaVOqe20S26fzRXbPkMC2MUSdsbW3Q/viewform" },
  { title: "Tether – Tech Content Writer ($70k–$91k | Remote)", link: "https://web3.career/content-writer-jobs" },
  { title: "Chainlink Labs – Content Writer ($72k–$93k | Remote)", link: "https://web3.career/content-writer-jobs" },
  { title: "Aurora Labs – SMM Content Writer ($54k–$100k | Remote)", link: "https://web3.career/content-writer-jobs" },
  { title: "Avara – Senior Content Writer ($48k–$90k | Remote)", link: "https://web3.career/content-writer-jobs" },
  { title: "Teneo – CMO / Growth ($60k–$120k | Remote)", link: "https://cryptojobslist.com/content" },
  { title: "Sentient – Community Manager (China)", link: "https://linkedin.com/jobs/view/4371497598/" },
  { title: "Kalshi – Creator Partnerships ($110k–$180k/year)", link: "https://linkedin.com/jobs/view/4371087960/" },
  { title: "Sahara AI – Community Manager", link: "https://linkedin.com/jobs/view/4338011962/" },
  { title: "PolyMarket – Affiliate Marketing Manager", link: "https://linkedin.com/jobs/view/4360027265/" },
  { title: "Coinbase – Twitter Content Creator ($140k–$164k/year)", link: "https://linkedin.com/jobs/view/4369281541/" },
  { title: "PolyCool – X Shitposter ($10–$100/hour)", link: "https://polycoolapp.com/hiring" }
];

/* ================== DEAL SITES ================== */

const jobWebsites = [
  { title: "LinkedIn – Web3 Jobs Worldwide", link: "https://linkedin.com/jobs/web3-job-jobs-worldwide" },
  { title: "FindWeb3 – Crypto Jobs", link: "https://findweb3.com/jobs" },
  { title: "Web3 Career", link: "https://web3.career" },
  { title: "Cryptocurrency Jobs", link: "https://cryptocurrencyjobs.co" },
  { title: "Remote3 – Web3 Remote Jobs", link: "https://remote3.co" },
  { title: "CryptoJobsList", link: "https://cryptojobslist.com" },
  { title: "RemoteOK – Web3 Jobs", link: "https://remoteok.com/remote-web3-jobs" },
  { title: "Wellfound – Startup & Web3 Jobs", link: "https://wellfound.com/jobs" },
  { title: "BuiltIn – Web3 Jobs", link: "https://builtin.com/jobs/web3" }
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{
      background: "#0f172a",
      color: "#fff",
      minHeight: "100vh",
      padding: "50px",
      fontFamily: "Arial"
    }}>

      <h1 style={{ textAlign: "center", fontSize: "42px", marginBottom: "20px" }}>
        Web3 Career Hub 🚀
      </h1>

      <p style={{ textAlign: "center", marginBottom: "50px", color: "#94a3b8" }}>
        Find high-paying Web3 opportunities & verified deal platforms
      </p>

      {/* REQUIREMENTS */}
      <div style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "40px"
      }}>
        <h2>Ready To Go</h2>
        <ul>
          <li>✔ Proper CV (clean, ATS friendly)</li>
          <li>✔ Strong LinkedIn profile</li>
          <li>✔ Solid English communication</li>
          <li>✔ Real proof of work / experience</li>
        </ul>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search jobs (Ambassador, Writer, Remote...)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "14px",
          marginBottom: "40px",
          borderRadius: "10px",
          border: "none",
          fontSize: "16px"
        }}
      />

      {/* JOB LIST */}
      {filteredJobs.map((job, index) => (
        <div key={index} style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "14px",
          marginBottom: "20px",
          transition: "0.3s",
        }}>
          <h3>{job.title}</h3>
          <a href={job.link} target="_blank" style={{
            color: "#60a5fa",
            textDecoration: "none",
            fontWeight: "bold"
          }}>
            Apply Now →
          </a>
        </div>
      ))}

      {/* DEAL SITES */}
      <div style={{ marginTop: "70px" }}>
        <h2>SITES WHERE YOU GET DEALS</h2>
        {jobWebsites.map((site, index) => (
          <div key={index} style={{ marginTop: "12px" }}>
            <a href={site.link} target="_blank" style={{
              color: "#38bdf8",
              textDecoration: "none"
            }}>
              {site.title}
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
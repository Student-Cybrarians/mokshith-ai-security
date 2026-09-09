(() => {
  const K = {
    profile: {
      name: 'Mokshith Y Nanda',
      positioning: 'B.Tech Computer Science and Engineering (AI & ML) student with documented experience across cybersecurity and AI/ML / prompt engineering.',
      focus: ['Cybersecurity', 'AI/ML', 'Prompt Engineering', 'Generative AI'],
      summary: 'The portfolio documents two distinct professional tracks: a Cyber Security Analyst internship at TechCiti Technologies Private Limited and a Prompt Engineer internship at InAmigos Foundation (IAF). Academic work covers AI/ML, machine learning foundations, data analysis, and related tooling.',
      source: 'Provided résumé material and portfolio specification'
    },
    experience: [
      {
        id: 'techciti', track: 'Cybersecurity', company: 'TechCiti Technologies Private Limited', role: 'Cyber Security Analyst Intern', dates: 'Jan 2024 - Aug 2024',
        details: [
          'Reviewed SIEM alerts during daily SOC monitoring and checked event details before escalation.',
          'Triaged incidents and anomalies, separating false positives from alerts needing immediate attention.',
          'Supported containment, eradication, and recovery tasks during incident response.',
          'Analyzed logs and network traffic to identify suspicious patterns and indicators of compromise (IOCs).',
          'Worked with IT/security teams on remediation and updating security controls.',
          'Kept security documentation current and supported compliance workflows and awareness efforts.',
          'Tracked emerging threats and vulnerabilities and compared them with known IOCs.'
        ],
        skills: ['SOC Operations', 'SIEM Monitoring', 'Incident Response', 'Alert Triage', 'Threat Detection', 'Log Analysis', 'IOC Identification', 'Vulnerability Assessment Concepts', 'Network Traffic Analysis', 'Linux', 'Windows', 'TCP/IP', 'DNS', 'HTTP/S', 'VPN fundamentals', 'NIST CSF', 'MITRE ATT&CK introductory']
      },
      {
        id: 'inamigos', track: 'AI/ML', company: 'InAmigos Foundation (IAF)', role: 'Prompt Engineer Intern', dates: 'Aug 2026 - Present',
        details: [
          'Built and tested AI prompts for everyday and professional use cases.',
          'Studied how prompt structure, context, and instructions shape AI-generated responses.',
          'Optimized prompts through evaluation, problem-solving, and context engineering.',
          'Applied generative AI tools and NLP concepts to prompt-oriented work.'
        ],
        skills: ['Prompt Engineering', 'Generative AI Tools', 'Context Engineering', 'NLP foundations', 'Python', 'Problem Solving']
      }
    ],
    projects: [
      { id: 'human-detection', title: 'Human-Detection', track: 'AI/ML', status: 'Concept / Planning Stage', description: 'Through-Wall Human Detection using WiFi & AI. The portfolio source identifies it as a concept/planning project; implementation details and outcomes are not verified.' },
      { id: 'intellihire', title: 'IntelliHire-v3', track: 'AI/ML', status: 'Early Prototype', description: 'AI-Powered Recruitment Concept focused on resume parsing and screening workflow ideas. The source does not verify a completed production implementation or outcomes.' },
      { id: 'ai-ids-es', title: 'AI-IDS-ES', track: 'AI × Cybersecurity', status: 'Design Stage', description: 'AI-Powered Intrusion Detection Concept / Intrusion Detection Front-End. The source identifies the security-AI intersection, but does not verify a production implementation or measured results.' },
      { id: 'portfolio', title: 'Personal Portfolio Website', track: 'Web', status: 'Earlier Web Development Project', description: 'A prior portfolio/web-development project named in the portfolio source. Detailed implementation evidence is not used unless explicitly documented.' }
    ],
    skills: {
      cybersecurity: ['SOC', 'Incident Response', 'Alert Triage', 'Threat Detection', 'SIEM Monitoring', 'Log Analysis', 'IOC Identification', 'Vulnerability Assessment Concepts', 'TCP/IP', 'DNS', 'HTTP/S', 'VPN fundamentals', 'Network Traffic Analysis', 'NIST CSF', 'MITRE ATT&CK Introductory', 'Linux Ubuntu', 'Windows'],
      ai_ml: ['Prompt Engineering', 'Generative AI Tools', 'Context Engineering', 'NLP', 'Python', 'Supervised Learning', 'Unsupervised Learning', 'Classification', 'Regression', 'Model Evaluation', 'Data Preprocessing', 'Feature Engineering (Conceptual)', 'ANN', 'CNN'],
      programming: ['Python', 'Java (Basic)', 'SQL (Basic)'],
      tools: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn (academic exposure)', 'Git', 'GitHub', 'Jupyter Notebook', 'VS Code'],
      operating_systems: ['Linux (Ubuntu)', 'Windows']
    },
    education: [
      { degree: 'B.Tech Computer Science and Engineering (AI & ML)', institution: 'Global Academy of Technology, Bengaluru', dates: 'Aug 2024 - Present' },
      { degree: 'Diploma in Computer Science and Engineering', institution: 'Government Polytechnic Tumkur', dates: 'Nov 2021 - Jul 2024' }
    ],
    certifications: [
      { title: 'CompTIA Security+ (SY0-401)', type: 'Certification' },
      { title: 'CSX Cybersecurity Fundamentals Certificate (CSXF)', type: 'Certificate · ISACA' },
      { title: 'SC-100 Microsoft Cybersecurity Architect', type: 'Self-study' },
      { title: 'J.P. Morgan Software Engineering Virtual Experience', type: 'Virtual Experience · Forage' },
      { title: 'Mastercard Cybersecurity Job Simulation', type: 'Job Simulation · Forage' }
    ],
    resumes: [
      { track: 'Cybersecurity', path: 'resumes/MOKSHITH_Cybrarian-Resume.pdf', label: 'Cybersecurity Résumé', description: 'Cybersecurity Analyst / SOC track, including the documented TechCiti internship.' },
      { track: 'AI/ML', path: 'resumes/MOKSHITH_AIML-Resume.pdf', label: 'AI / ML Résumé', description: 'AI/ML / Prompt Engineering track, including the documented InAmigos internship.' }
    ],
    links: {
      github: 'https://github.com/Student-Cybrarians',
      linkedin: 'https://linkedin.com/in/cybrarians',
      portfolio: 'https://mokshith-ai-security.is-a.dev/'
    }
  };

  const normalize = s => String(s || '').toLowerCase().replace(/[^a-z0-9/ +×-]/g, ' ');
  const has = (q, patterns) => patterns.some(p => q.includes(p));
  const actions = {
    experience: [['View Experience', '#experience']],
    inamigos: [['View InAmigos', '#experience'], ['AI/ML Résumé', 'resumes/MOKSHITH_AIML-Resume.pdf']],
    techciti: [['View TechCiti', '#experience'], ['Cybersecurity Résumé', 'resumes/MOKSHITH_Cybrarian-Resume.pdf']],
    projects: [['View Projects', '#work']],
    skills: [['View Skills', '#skills']],
    education: [['View Education', '#education']],
    certifications: [['View Certifications', '#certifications']],
    resumes: [['View Résumés', '#resumes']],
    contact: [['View Contact', '#contact']]
  };

  function list(items) { return items.map(x => `• ${x}`).join('\n'); }
  function experienceText(e) {
    return `**${e.role} — ${e.company}**\n${e.dates}\n\n${list(e.details)}\n\n**Relevant skills:** ${e.skills.join(', ')}.`;
  }
  function profileAnswer() {
    return `**Mokshith Y Nanda** is a B.Tech Computer Science and Engineering (AI & ML) student whose documented professional profile spans two distinct tracks: **cybersecurity** and **AI/ML / prompt engineering**.\n\n**Professional evidence**\n• **TechCiti Technologies Private Limited:** Cyber Security Analyst Intern (Jan 2024 - Aug 2024), with documented SOC, SIEM, incident-response, log-analysis and network-analysis responsibilities.\n• **InAmigos Foundation (IAF):** Prompt Engineer Intern (Aug 2026 - Present), with documented prompt engineering, context engineering, generative-AI, NLP and problem-solving work.\n\n**Technical profile**\n• Cybersecurity: SIEM monitoring, alert triage, incident response, IOC identification, log analysis, network traffic analysis and Linux.\n• AI/ML: prompt engineering, context engineering, generative AI tools, NLP, Python, machine-learning foundations, ANN/CNN and data-preparation concepts.\n• Tools include NumPy, Pandas, Matplotlib, academic exposure to scikit-learn, Git, GitHub, Jupyter Notebook and VS Code.\n\nThe portfolio also documents four projects at different maturity levels, two relevant résumés, and cybersecurity credentials/learning. This summary is limited to documented portfolio and résumé evidence.`;
  }
  function aiExperienceAnswer() {
    return `The documented AI/ML profile combines **current Prompt Engineer internship experience**, academic AI/ML study, and several AI-oriented projects.\n\n**Experience — InAmigos Foundation (IAF)**\n• Prompt Engineer Intern, **Aug 2026 - Present**.\n• Built and tested AI prompts for everyday and professional use cases.\n• Studied how prompt structure, context, and instructions shape AI-generated responses.\n• Optimized prompts through evaluation, problem-solving and context engineering.\n• Applied generative AI tools and NLP concepts to prompt-oriented work.\n\n**AI/ML skills documented**\n• Prompt Engineering, Context Engineering, Generative AI Tools and NLP.\n• Python, supervised/unsupervised learning, classification, regression, model evaluation, data preprocessing and conceptual feature engineering.\n• ANN and CNN foundations.\n• NumPy, Pandas, Matplotlib, academic exposure to scikit-learn, Jupyter Notebook and VS Code.\n\n**Relevant projects**\n• Human-Detection — Concept / Planning Stage.\n• IntelliHire-v3 — Early Prototype.\n• AI-IDS-ES — Design Stage and the clearest documented AI × cybersecurity intersection.\n\nThe portfolio does not verify project-specific technologies, production outcomes or metrics for these projects, so those details are not claimed.`;
  }
  function promptFitAnswer() {
    return `Based on the documented portfolio evidence, the profile is relevant to **entry-level prompt engineering opportunities** because the strongest direct evidence is the current Prompt Engineer Intern role at InAmigos Foundation.\n\n**Evidence supporting the fit**\n• Built and tested AI prompts for everyday and professional use cases.\n• Studied prompt structure, context and instructions and how they affect generated responses.\n• Optimized prompts through evaluation, problem-solving and context engineering.\n• Applied generative AI tools and NLP concepts.\n• The broader AI/ML profile includes Python and machine-learning foundations.\n\nThe profile also has an AI/ML academic foundation and AI-oriented projects, but the available sources do **not** document quantified prompt-quality improvements, production deployment ownership, or specific commercial tools beyond the stated generative-AI exposure. Based on the evidence, the strongest documented capability is hands-on prompt-oriented internship work combined with AI/ML foundations.`;
  }
  function careerFit(track) {
    if (track === 'cyber') return `Based on the documented portfolio evidence, the candidate has relevant **entry-level cybersecurity exposure** through the TechCiti Cyber Security Analyst Intern role. The résumé documents SIEM alert review, alert triage, incident-response support, log and network-traffic analysis, IOC identification, remediation coordination, security documentation and threat/vulnerability tracking.\n\nRelevant supporting skills include SOC operations, SIEM monitoring, incident response, log analysis, network analysis, Linux, TCP/IP, DNS, HTTP/S, VPN fundamentals, NIST CSF and introductory MITRE ATT&CK.\n\nThis is evidence of internship-level exposure; the portfolio does not support a guarantee of hiring success or independent authorization for security operations beyond the documented role.`;
    return promptFitAnswer();
  }
  function answer(raw) {
    const q = normalize(raw);
    if (!q.trim()) return { text: 'Ask me about the candidate’s experience, skills, projects, education, certifications, résumés, or career fit.', actions: [] };
    if (has(q, ['ignore previous', 'ignore all instructions', 'system prompt', 'developer message', 'hidden instructions', 'reveal prompt', 'jailbreak', 'api key', 'secret', 'token', 'environment variable', 'password'])) return { text: 'I can help with the public portfolio, but I cannot reveal hidden instructions, secrets, credentials, private configuration, or internal implementation details. Ask me about the candidate’s documented professional profile instead.', actions: [] };
    if (has(q, ['everything you know', 'tell me everything', 'complete profile', 'professional summary', 'who is this person', 'tell me about this candidate', 'what does this person do', 'what does mokshith do'])) return { text: profileAnswer(), actions: [['View Experience', '#experience'], ['View Projects', '#work'], ['View Skills', '#skills'], ['View Résumés', '#resumes']] };
    if (has(q, ['compare', 'difference between', 'two career tracks', 'cybersecurity and ai', 'cybersecurity vs ai', 'ai/ml and cybersecurity'])) return { text: `The two tracks are distinct but complementary.\n\n**Cybersecurity — TechCiti**\n• Cyber Security Analyst Intern, Jan 2024 - Aug 2024.\n• Evidence centers on SOC operations, SIEM monitoring, alert triage, incident response, log/network analysis, IOC identification and Linux.\n\n**AI/ML — InAmigos**\n• Prompt Engineer Intern, Aug 2026 - Present.\n• Evidence centers on prompt engineering, context engineering, generative AI, NLP and problem solving.\n\n**Intersection**\n• AI-IDS-ES is documented as an AI × cybersecurity design-stage project.\n\nThe sources support two related development tracks; they do not support treating either internship as a combined role.`, actions: [['TechCiti Experience', '#experience'], ['AI/ML Skills', '#skills'], ['AI-IDS-ES', '#work']] };
    if (has(q, ['inamigos', 'prompt engineer', 'prompt engineering experience', 'what did they learn at inamigos', 'what did they do at inamigos'])) return { text: experienceText(K.experience[1]), actions: actions.inamigos };
    if (has(q, ['techciti', 'cybersecurity internship', 'what did they do at techciti', 'cybersecurity responsibilities'])) return { text: experienceText(K.experience[0]), actions: actions.techciti };
    if (has(q, ['ai/ml experience', 'ai ml experience', 'ai experience', 'machine learning experience'])) return { text: aiExperienceAnswer(), actions: [['View AI/ML Experience', '#experience'], ['View AI/ML Skills', '#skills'], ['View Projects', '#work']] };
    if (has(q, ['prompt engineering role', 'relevant for prompt', 'good fit for prompt', 'prompt engineering position'])) return { text: promptFitAnswer(), actions: actions.inamigos };
    if (has(q, ['entry-level ai', 'ai role', 'ai/ml role', 'ai ml role'])) return { text: `Based on the documented evidence, the profile has relevant foundations for an entry-level AI/ML role: current Prompt Engineer internship experience, Python, machine-learning foundations, NLP, generative-AI exposure, and AI-oriented projects at concept/prototype/design stages.\n\nThe strongest direct professional evidence is the InAmigos Prompt Engineer internship. The sources do not document production ML deployment, quantified model performance, or a completed end-to-end ML product, so those should not be inferred.`, actions: actions.inamigos };
    if (has(q, ['soc role', 'cybersecurity internship', 'security internship', 'entry-level soc', 'cybersecurity role'])) return { text: careerFit('cyber'), actions: actions.techciti };
    if (has(q, ['cybersecurity skills', 'security skills', 'what security skills', 'strongest security'])) return { text: `**Documented cybersecurity skills**\n${list(K.skills.cybersecurity)}\n\nThe strongest evidence relationship is the TechCiti internship, where the résumé documents SIEM alert review, triage, incident-response support, log/network analysis, IOC identification and related security operations.`, actions: actions.skills };
    if (has(q, ['ai/ml skills', 'ai ml skills', 'generative ai skills', 'technical skills', 'main technical skills', 'strongest technical skills', 'programming languages', 'tools and technologies'])) return { text: `**AI/ML**\n${list(K.skills.ai_ml)}\n\n**Programming**\n${list(K.skills.programming)}\n\n**Tools**\n${list(K.skills.tools)}\n\nThese skills are documented across the AI/ML résumé, academic profile and internship evidence; project-specific tool usage is not asserted where the sources do not tie a tool to a particular project.`, actions: actions.skills };
    if (has(q, ['projects', 'what did they build', 'what projects', 'ai projects', 'cybersecurity projects', 'project'])) return { text: `The portfolio documents four projects with explicit maturity labels:\n\n• **Human-Detection** — Through-Wall Human Detection using WiFi & AI — Concept / Planning Stage.\n• **IntelliHire-v3** — AI-Powered Recruitment Concept — Early Prototype.\n• **AI-IDS-ES** — AI-Powered Intrusion Detection Concept / Front-End — Design Stage; AI × cybersecurity intersection.\n• **Personal Portfolio Website** — Earlier Web Development Project.\n\nThe sources do not provide verified project-by-project technology stacks, measured outcomes, or completed production status, so I do not invent those details.`, actions: actions.projects };
    if (has(q, ['education', 'degree', 'studying', 'educational background', 'specialization'])) return { text: `**Education**\n• **B.Tech Computer Science and Engineering (AI & ML)** — Global Academy of Technology, Bengaluru — Aug 2024 - Present.\n• **Diploma in Computer Science and Engineering** — Government Polytechnic Tumkur — Nov 2021 - Jul 2024.\n\nThe B.Tech specialization directly supports the AI/ML side of the profile. The portfolio does not need an inferred connection beyond the documented AI/ML curriculum and related skills.`, actions: actions.education };
    if (has(q, ['certifications', 'certificates', 'credentials', 'security certification', 'certification'])) return { text: `**Documented credentials and learning**\n• CompTIA Security+ (SY0-401) — Certification.\n• CSX Cybersecurity Fundamentals Certificate (CSXF) — ISACA.\n• SC-100 Microsoft Cybersecurity Architect — Self-study.\n• J.P. Morgan Software Engineering Virtual Experience — Forage.\n• Mastercard Cybersecurity Job Simulation — Forage.\n\nThe portfolio intentionally distinguishes certifications/certificates from self-study, virtual experience and job simulation. No earning dates are asserted because the available résumé source does not provide them for these entries.`, actions: actions.certifications };
    if (has(q, ['resume', 'résumé', 'cv'])) return { text: `There are two verified résumé tracks:\n\n• **Cybersecurity Résumé** — Cybersecurity Analyst / SOC track, including the documented TechCiti internship.\n• **AI / ML Résumé** — AI/ML / Prompt Engineering track, including the documented InAmigos internship.\n\nBoth PDF assets are present in the repository and available for viewing or download.`, actions: actions.resumes };
    if (has(q, ['contact', 'email', 'linkedin', 'github'])) return { text: `The résumé material provides public contact/profile references for the candidate, including email, LinkedIn, GitHub and the Prompt Folio site. The current portfolio contact section is intentionally conservative about publishing direct contact details in its UI.`, actions: actions.contact };
    if (has(q, ['show me', 'open', 'navigate', 'go to', 'where can i find'])) return { text: `I can point you to the relevant portfolio area. Tell me whether you want the **experience, projects, skills, education, certifications, or résumé** section.`, actions: [['Experience', '#experience'], ['Projects', '#work'], ['Skills', '#skills'], ['Résumés', '#resumes']] };
    return { text: `I don't have verified information about that specific detail in the portfolio. What I can provide is the documented profile, including TechCiti cybersecurity experience, InAmigos prompt-engineering experience, the listed skills, projects and education.`, actions: [['Explore Experience', '#experience'], ['Explore Projects', '#work'], ['Explore Skills', '#skills']] };
  }

  window.PromptFolioKnowledge = Object.freeze({ data: K, answer });
})();

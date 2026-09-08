const DATA={
 projects:[
  {title:'Human-Detection',track:'ai',status:'Concept / Planning',description:'AI/ML project named in the project specification; detailed implementation evidence is not yet present in the repository.',tech:'Status only; technology verification required.'},
  {title:'IntelliHire-v3',track:'ai',status:'Early Prototype',description:'AI/ML project identified by the architecture specification. Detailed outcomes remain unverified.',tech:'Technology verification required.'},
  {title:'AI-IDS-ES',track:'intersection',status:'Design Stage',description:'An AI × cybersecurity project explicitly identified as the intersection of the two tracks.',tech:'Detailed technology stack requires source verification.'},
  {title:'Personal Portfolio Website',track:'all',status:'Earlier Web Project',description:'A prior portfolio/web-development project named by the architecture specification.',tech:'Detailed implementation evidence requires source verification.'}
 ],
 skills:[
  {title:'SOC Operations',area:'Cybersecurity',evidence:'TechCiti internship — verified focus area.'},
  {title:'SIEM Monitoring',area:'Cybersecurity',evidence:'TechCiti internship — verified focus area.'},
  {title:'Incident Response',area:'Cybersecurity',evidence:'TechCiti internship — verified focus area.'},
  {title:'Log Analysis',area:'Cybersecurity',evidence:'TechCiti internship — verified focus area.'},
  {title:'Linux',area:'Cybersecurity',evidence:'TechCiti internship — verified focus area.'},
  {title:'Prompt Engineering',area:'AI / ML',evidence:'InAmigos internship — verified focus area.'},
  {title:'Context Engineering',area:'AI / ML',evidence:'InAmigos internship — verified focus area.'},
  {title:'Generative AI',area:'AI / ML',evidence:'InAmigos internship — verified focus area.'},
  {title:'Natural Language Processing',area:'AI / ML',evidence:'InAmigos internship — verified focus area.'},
  {title:'Python',area:'AI / ML',evidence:'Listed as an AI/ML focus area in the product specification; detailed source evidence should be attached before making stronger claims.'}
 ],
 certs:[
  {title:'CompTIA Security+ (SY0-401)',type:'Certification',note:'Listed in the project specification; credential source should be attached before publication.'},
  {title:'CSX Cybersecurity Fundamentals (CSXF)',type:'Certificate · ISACA',note:'Listed in the project specification; credential source should be attached before publication.'},
  {title:'SC-100 Microsoft Cybersecurity Architect',type:'Self-study',note:'Explicitly classified as self-study; not presented as a professional certification.'},
  {title:'J.P. Morgan Software Engineering Virtual Experience',type:'Virtual Experience · Forage',note:'Presented as a virtual experience, not a professional certification.'},
  {title:'Mastercard Cybersecurity Job Simulation',type:'Job Simulation · Forage',note:'Presented as a job simulation, not a professional certification.'}
 ]
};
const suggestions=['What cybersecurity experience do you have?','What did you do at TechCiti?','What AI/ML projects have you built?','What did you do at InAmigos?','What are your strongest technical skills?','Show me the cybersecurity résumé.'];
const $=s=>document.querySelector(s);
function render(){
 $('#suggestions').innerHTML=suggestions.map(q=>`<button class="suggestion" type="button">${q}</button>`).join('');
 $('#projectGrid').innerHTML=DATA.projects.map(p=>`<article class="project-card" data-track="${p.track}"><div class="meta"><span>${p.track==='security'?'Cybersecurity':p.track==='ai'?'AI / ML':p.track==='intersection'?'AI × Security':'Portfolio'}</span><span class="status">${p.status}</span></div><h3>${p.title}</h3><p>${p.description}</p><div class="evidence">${p.tech}</div></article>`).join('');
 $('#skillGrid').innerHTML=DATA.skills.map(s=>`<article class="skill-card"><div class="meta"><span>${s.area}</span></div><h3>${s.title}</h3><p>${s.evidence}</p></article>`).join('');
 $('#certGrid').innerHTML=DATA.certs.map(c=>`<article class="cert-card"><div class="meta"><span>${c.type}</span></div><h3>${c.title}</h3><p>${c.note}</p></article>`).join('');
}
function answer(raw){const q=raw.toLowerCase();
 if(/resume|résumé|cv/.test(q)) return `I can identify two required résumé tracks: a Cybersecurity résumé tied to TechCiti and an AI/ML résumé tied to InAmigos. The actual PDF assets are not present in the current repository, so I won't invent download links.`;
 if(/techciti|cyber.*experience|siem|soc|security/.test(q)) return `The verified cybersecurity track is a Cyber Security Analyst Intern role at TechCiti Technologies Private Limited. The project specification identifies Security Operations, SIEM Monitoring, Incident Response, Log Analysis, Network Analysis, and Linux as relevant areas.`;
 if(/inamigos|prompt|ai\/ml|ai ml|generative|context/.test(q)) return `The verified AI/ML track is a Prompt Engineer Intern role at InAmigos Foundation (IAF). Verified focus areas include Prompt Engineering, Context Engineering, Generative AI, NLP foundations, Python, and problem solving.`;
 if(/project|built|work/.test(q)) return `The repository specification names Human-Detection (Concept / Planning), IntelliHire-v3 (Early Prototype), AI-IDS-ES (Design Stage), and a Personal Portfolio Website. Detailed outcomes and technology stacks are intentionally not guessed.`;
 if(/skill|strongest|know/.test(q)) return `The verified skill model includes SOC Operations, SIEM Monitoring, Incident Response, Log Analysis, Linux, Prompt Engineering, Context Engineering, Generative AI, and NLP foundations. Python is listed as an AI/ML focus area, with stronger evidence still required.`;
 if(/cert/.test(q)) return `The specification lists CompTIA Security+, CSX Cybersecurity Fundamentals, SC-100 self-study, a J.P. Morgan Software Engineering virtual experience, and a Mastercard Cybersecurity job simulation. The UI distinguishes credentials from self-study and simulations.`;
 if(/education|degree|college|university/.test(q)) return `I don't have verified education information in the current repository source. I won't invent a degree, institution, or dates.`;
 return `I don't have verified information about that yet. You can explore the Experience or Work sections for the available details.`;
}
function addMessage(text,kind='assistant'){const el=document.createElement('div');el.className=`message ${kind}`;el.innerHTML=`<span class="message-label">${kind==='user'?'You':'Portfolio AI'}</span><p></p>`;el.querySelector('p').textContent=text;$('#chatLog').appendChild(el);$('#chatLog').scrollTop=$('#chatLog').scrollHeight;}
function ask(q){if(!q.trim())return;addMessage(q,'user');setTimeout(()=>addMessage(answer(q)),180)}
document.addEventListener('click',e=>{if(e.target.matches('.suggestion')){const q=e.target.textContent;$('#heroInput').value=q;ask(q);location.hash='ask'}if(e.target.matches('.filter')){document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));e.target.classList.add('active');const f=e.target.dataset.filter;document.querySelectorAll('.project-card').forEach(c=>c.hidden=!(f==='all'||c.dataset.track===f||(f==='ai'&&c.dataset.track==='intersection')))}});
$('#heroAsk').addEventListener('submit',e=>{e.preventDefault();const q=$('#heroInput').value;ask(q);location.hash='ask'});
$('#chatForm').addEventListener('submit',e=>{e.preventDefault();const q=$('#chatInput').value;$('#chatInput').value='';ask(q)});
const menu=$('.sidebar');$('#menuToggle').addEventListener('click',()=>{menu.classList.toggle('open');$('#menuToggle').setAttribute('aria-expanded',menu.classList.contains('open'))});$('#menuClose').addEventListener('click',()=>menu.classList.remove('open'));document.querySelectorAll('.sidebar a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
render();
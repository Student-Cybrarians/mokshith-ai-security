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
  {title:'Network Analysis',area:'Cybersecurity',evidence:'TechCiti internship — verified focus area.'},
  {title:'Linux',area:'Cybersecurity',evidence:'TechCiti internship — verified focus area.'},
  {title:'Prompt Engineering',area:'AI / ML',evidence:'InAmigos internship — verified focus area.'},
  {title:'Context Engineering',area:'AI / ML',evidence:'InAmigos internship — verified focus area.'},
  {title:'Generative AI',area:'AI / ML',evidence:'InAmigos internship — verified focus area.'},
  {title:'Natural Language Processing',area:'AI / ML',evidence:'InAmigos internship — verified focus area.'},
  {title:'Python',area:'AI / ML',evidence:'InAmigos internship — verified focus area; stronger project/tool evidence remains source-gated.'},
  {title:'Problem Solving',area:'AI / ML',evidence:'InAmigos internship — verified focus area.'}
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
const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function render(){
 $('#suggestions').replaceChildren(...suggestions.map(q=>{const b=document.createElement('button');b.className='suggestion';b.type='button';b.textContent=q;return b;}));
 $('#projectGrid').innerHTML=DATA.projects.map(p=>`<article class="project-card" data-track="${escapeHtml(p.track)}"><div class="meta"><span>${escapeHtml(p.track==='security'?'Cybersecurity':p.track==='ai'?'AI / ML':p.track==='intersection'?'AI × Security':'Portfolio')}</span><span class="status">${escapeHtml(p.status)}</span></div><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.description)}</p><details><summary>Evidence & status</summary><div class="evidence">${escapeHtml(p.tech)}</div></details></article>`).join('');
 $('#skillGrid').innerHTML=DATA.skills.map(s=>`<article class="skill-card"><div class="meta"><span>${escapeHtml(s.area)}</span></div><h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(s.evidence)}</p></article>`).join('');
 $('#certGrid').innerHTML=DATA.certs.map(c=>`<article class="cert-card"><div class="meta"><span>${escapeHtml(c.type)}</span></div><h3>${escapeHtml(c.title)}</h3><p>${escapeHtml(c.note)}</p></article>`).join('');
}
function answer(raw){const q=raw.toLowerCase();
 if(/resume|résumé|cv/.test(q)) return {text:`I can identify two résumé tracks: Cybersecurity, tied to TechCiti, and AI/ML, tied to InAmigos. The actual PDF assets are not present in the current repository, so I won't invent download links.`,actions:[['View résumé section','#resumes']]};
 if(/techciti|cyber.*experience|siem|soc|security/.test(q)) return {text:`The verified cybersecurity track is a Cyber Security Analyst Intern role at TechCiti Technologies Private Limited. Verified focus areas include Security Operations, SIEM Monitoring, Incident Response, Log Analysis, Network Analysis, and Linux.`,actions:[['View TechCiti experience','#experience'],['View security skills','#skills']]};
 if(/inamigos|prompt|ai\/ml|ai ml|generative|context/.test(q)) return {text:`The verified AI/ML track is a Prompt Engineer Intern role at InAmigos Foundation (IAF). Verified focus areas include Prompt Engineering, Context Engineering, Generative AI, NLP foundations, Python, and problem solving.`,actions:[['View InAmigos experience','#experience'],['View AI/ML skills','#skills']]};
 if(/project|built|work/.test(q)) return {text:`The repository specification names Human-Detection (Concept / Planning), IntelliHire-v3 (Early Prototype), AI-IDS-ES (Design Stage), and a Personal Portfolio Website. Detailed outcomes and technology stacks are intentionally not guessed.`,actions:[['Explore projects','#work']]};
 if(/skill|strongest|know/.test(q)) return {text:`The verified skill model includes SOC Operations, SIEM Monitoring, Incident Response, Log Analysis, Network Analysis, Linux, Prompt Engineering, Context Engineering, Generative AI, NLP foundations, Python, and problem solving.`,actions:[['Explore skills','#skills']]};
 if(/cert/.test(q)) return {text:`The specification lists CompTIA Security+, CSX Cybersecurity Fundamentals, SC-100 self-study, a J.P. Morgan Software Engineering virtual experience, and a Mastercard Cybersecurity job simulation. The UI distinguishes credentials from self-study and simulations.`,actions:[['Review credentials','#certifications']]};
 if(/education|degree|college|university/.test(q)) return {text:`I don't have verified education information in the current repository source. I won't invent a degree, institution, or dates.`,actions:[['View education status','#education']]};
 if(/contact|email|linkedin|github/.test(q)) return {text:`Public contact links have not been supplied in the current repository source. I won't invent an email, GitHub, or LinkedIn URL.`,actions:[['View contact status','#contact']]};
 return {text:`I don't have verified information about that yet. You can explore the Projects or Experience sections for the available details.`,actions:[['Explore projects','#work'],['Explore experience','#experience']]};
}
function addMessage(text,kind='assistant',actions=[]){const el=document.createElement('div');el.className=`message ${kind}`;const label=document.createElement('span');label.className='message-label';label.textContent=kind==='user'?'You':'Portfolio AI';const p=document.createElement('p');p.textContent=text;el.append(label,p);if(actions.length){const nav=document.createElement('div');nav.className='message-actions';actions.forEach(([labelText,href])=>{const a=document.createElement('a');a.href=href;a.className='message-action';a.textContent=labelText;nav.append(a);});el.append(nav);}$('#chatLog').appendChild(el);$('#chatLog').scrollTop=$('#chatLog').scrollHeight;}
function addTyping(){const el=document.createElement('div');el.className='message assistant typing';el.id='typingIndicator';const label=document.createElement('span');label.className='message-label';label.textContent='Portfolio AI';const p=document.createElement('p');p.textContent='Checking the verified portfolio data…';el.append(label,p);$('#chatLog').appendChild(el);$('#chatLog').scrollTop=$('#chatLog').scrollHeight;}
function ask(q){const clean=q.trim().slice(0,600);if(!clean)return;addMessage(clean,'user');addTyping();window.setTimeout(()=>{$('#typingIndicator')?.remove();const result=answer(clean);addMessage(result.text,'assistant',result.actions);},180)}
const menu=$('.sidebar'),menuToggle=$('#menuToggle'),menuClose=$('#menuClose');
function closeMenu(){menu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}
document.addEventListener('click',e=>{
 if(e.target.matches('.suggestion')){const q=e.target.textContent;$('#heroInput').value=q;ask(q);location.hash='ask';return;}
 if(e.target.matches('.filter')){document.querySelectorAll('.filter').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});e.target.classList.add('active');e.target.setAttribute('aria-pressed','true');const f=e.target.dataset.filter;document.querySelectorAll('.project-card').forEach(c=>c.hidden=!(f==='all'||c.dataset.track===f||(f==='ai'&&c.dataset.track==='intersection')))}
});
$('#heroAsk').addEventListener('submit',e=>{e.preventDefault();const q=$('#heroInput').value;ask(q);location.hash='ask'});
$('#chatForm').addEventListener('submit',e=>{e.preventDefault();const q=$('#chatInput').value;$('#chatInput').value='';ask(q)});
$('#clearChat').addEventListener('click',()=>{$('#chatLog').replaceChildren();addMessage('Conversation cleared. I answer from verified portfolio data. Ask about experience, projects, skills, certifications, or résumé availability.');$('#chatInput').focus();});
menuToggle.addEventListener('click',()=>{const open=!menu.classList.contains('open');menu.classList.toggle('open',open);menuToggle.setAttribute('aria-expanded',String(open));if(open)menuClose.focus();});
menuClose.addEventListener('click',closeMenu);
document.querySelectorAll('.sidebar a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open')){closeMenu();menuToggle.focus();}});
document.querySelectorAll('.filter').forEach(b=>b.setAttribute('aria-pressed',b.classList.contains('active')?'true':'false'));
render();

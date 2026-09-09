const DATA = window.PromptFolioKnowledge.data;
const answerQuestion = window.PromptFolioKnowledge.answer;

const suggestions = [
  'What did you do at InAmigos?',
  'Tell me about this candidate’s AI/ML experience.',
  'What makes this candidate relevant for a prompt engineering role?',
  'What did they do at TechCiti?',
  'Compare their cybersecurity and AI/ML experience.',
  'Tell me everything you know about this candidate.'
];

const $ = selector => document.querySelector(selector);

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function render() {
  $('#suggestions').replaceChildren(...suggestions.map(question => {
    const button = document.createElement('button'); button.className = 'suggestion'; button.type = 'button'; button.textContent = question; return button;
  }));

  $('#projectGrid').replaceChildren(...DATA.projects.map(project => {
    const article = document.createElement('article'); article.className = 'project-card';
    article.dataset.track = project.track === 'AI × Cybersecurity' ? 'intersection' : project.track === 'AI/ML' ? 'ai' : 'all';
    const meta = document.createElement('div'); meta.className = 'meta';
    const track = document.createElement('span'); track.textContent = project.track;
    const status = document.createElement('span'); status.className = 'status'; status.textContent = project.status; meta.append(track, status);
    const heading = document.createElement('h3'); heading.textContent = project.title;
    const p = document.createElement('p'); p.textContent = project.description;
    article.append(meta, heading, p); return article;
  }));

  const skillGroups = [
    ['Cybersecurity', DATA.skills.cybersecurity], ['AI / ML', DATA.skills.ai_ml], ['Programming', DATA.skills.programming], ['Tools', DATA.skills.tools], ['Operating Systems', DATA.skills.operating_systems]
  ];
  $('#skillGrid').replaceChildren(...skillGroups.flatMap(([area, skills]) => skills.map(skill => {
    const article = document.createElement('article'); article.className = 'skill-card';
    const meta = document.createElement('div'); meta.className = 'meta'; const label = document.createElement('span'); label.textContent = area; meta.append(label);
    const heading = document.createElement('h3'); heading.textContent = skill;
    const p = document.createElement('p'); p.textContent = area === 'Cybersecurity' ? 'Documented through the TechCiti cybersecurity résumé and internship evidence.' : area === 'AI / ML' ? 'Documented through AI/ML résumé, academic profile, and InAmigos evidence.' : 'Documented technical knowledge in the résumé material.';
    article.append(meta, heading, p); return article;
  })));

  $('#educationGrid').replaceChildren(...DATA.education.map(item => {
    const article = document.createElement('article'); article.className = 'cert-card';
    const meta = document.createElement('div'); meta.className = 'meta'; const date = document.createElement('span'); date.textContent = item.dates; meta.append(date);
    const heading = document.createElement('h3'); heading.textContent = item.degree; const p = document.createElement('p'); p.textContent = item.institution;
    article.append(meta, heading, p); return article;
  }));

  $('#certGrid').replaceChildren(...DATA.certifications.map(certification => {
    const article = document.createElement('article'); article.className = 'cert-card';
    const meta = document.createElement('div'); meta.className = 'meta'; const type = document.createElement('span'); type.textContent = certification.type; meta.append(type);
    const heading = document.createElement('h3'); heading.textContent = certification.title; const p = document.createElement('p');
    p.textContent = certification.type === 'Self-study' ? 'Explicitly classified as self-study, not a professional certification.' : certification.type.includes('Simulation') || certification.type.includes('Experience') ? 'Presented as practical learning experience, not a professional certification.' : 'Documented credential in the résumé material.';
    article.append(meta, heading, p); return article;
  }));
}

function renderAnswerText(container, text) {
  const fragment = document.createDocumentFragment(); let list = null; let paragraph = [];
  const flushParagraph = () => { if (!paragraph.length) return; const p = document.createElement('p'); p.textContent = paragraph.join(' ').replace(/\*\*/g, ''); fragment.appendChild(p); paragraph = []; };
  const flushList = () => { if (!list) return; fragment.appendChild(list); list = null; };
  String(text).split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) { flushParagraph(); flushList(); return; }
    if (trimmed.startsWith('• ')) { flushParagraph(); if (!list) list = document.createElement('ul'); const li = document.createElement('li'); li.textContent = trimmed.slice(2).replace(/\*\*/g, ''); list.appendChild(li); return; }
    paragraph.push(trimmed);
  });
  flushParagraph(); flushList(); container.appendChild(fragment);
}

function addMessage(text, kind = 'assistant', actionLinks = []) {
  const element = document.createElement('div'); element.className = `message ${kind}`;
  const label = document.createElement('span'); label.className = 'message-label'; label.textContent = kind === 'user' ? 'You' : 'Portfolio AI'; element.appendChild(label);
  if (kind === 'assistant') { const content = document.createElement('div'); content.className = 'message-content'; renderAnswerText(content, text); element.appendChild(content); }
  else { const p = document.createElement('p'); p.textContent = text; element.appendChild(p); }
  if (actionLinks.length) {
    const navigation = document.createElement('div'); navigation.className = 'message-actions';
    actionLinks.forEach(([labelText, href]) => { const link = document.createElement('a'); link.href = href; link.className = 'message-action'; link.textContent = labelText; navigation.appendChild(link); });
    element.appendChild(navigation);
  }
  $('#chatLog').appendChild(element); $('#chatLog').scrollTop = $('#chatLog').scrollHeight;
}

function addTyping() {
  const element = document.createElement('div'); element.className = 'message assistant typing'; element.id = 'typingIndicator';
  const label = document.createElement('span'); label.className = 'message-label'; label.textContent = 'Portfolio AI'; const p = document.createElement('p'); p.textContent = 'Checking verified portfolio evidence…'; element.append(label, p);
  $('#chatLog').appendChild(element); $('#chatLog').scrollTop = $('#chatLog').scrollHeight;
}

function ask(question) {
  const clean = question.trim().slice(0, 600); if (!clean) return; addMessage(clean, 'user'); addTyping();
  window.setTimeout(() => { $('#typingIndicator')?.remove(); const result = answerQuestion(clean); addMessage(result.text, 'assistant', result.actions); }, 180);
}

const menu = $('.sidebar'), menuToggle = $('#menuToggle'), menuClose = $('#menuClose');
function closeMenu() { menu.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }

document.addEventListener('click', event => {
  if (event.target.matches('.suggestion')) { const question = event.target.textContent; $('#heroInput').value = question; ask(question); location.hash = 'ask'; return; }
  if (event.target.matches('.filter')) {
    document.querySelectorAll('.filter').forEach(button => { button.classList.remove('active'); button.setAttribute('aria-pressed', 'false'); });
    event.target.classList.add('active'); event.target.setAttribute('aria-pressed', 'true'); const filter = event.target.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => { card.hidden = !(filter === 'all' || card.dataset.track === filter || (filter === 'ai' && card.dataset.track === 'intersection')); });
  }
});

$('#heroAsk').addEventListener('submit', event => { event.preventDefault(); const question = $('#heroInput').value; ask(question); location.hash = 'ask'; });
$('#chatForm').addEventListener('submit', event => { event.preventDefault(); const question = $('#chatInput').value; $('#chatInput').value = ''; ask(question); });
$('#clearChat').addEventListener('click', () => { $('#chatLog').replaceChildren(); addMessage('Conversation cleared. Ask about the candidate’s experience, skills, projects, education, certifications, résumé tracks, or career fit.'); $('#chatInput').focus(); });
menuToggle.addEventListener('click', () => { const open = !menu.classList.contains('open'); menu.classList.toggle('open', open); menuToggle.setAttribute('aria-expanded', String(open)); if (open) menuClose.focus(); });
menuClose.addEventListener('click', closeMenu);
document.querySelectorAll('.sidebar a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); menuToggle.focus(); } });
document.querySelectorAll('.filter').forEach(button => button.setAttribute('aria-pressed', button.classList.contains('active') ? 'true' : 'false'));
render();

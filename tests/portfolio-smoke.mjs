import { readFileSync, existsSync } from 'node:fs';
import { strict as assert } from 'node:assert';

const html = readFileSync('index.html', 'utf8');
const app = readFileSync('app.js', 'utf8');

for (const section of ['overview', 'experience', 'work', 'skills', 'education', 'certifications', 'resumes', 'about', 'ask', 'contact']) {
  assert.match(html, new RegExp(`id="${section}"`), `missing #${section}`);
}

assert.match(html, /TechCiti Technologies Private Limited/);
assert.match(html, /Cyber Security Analyst Intern/);
assert.match(html, /InAmigos Foundation \(IAF\)/);
assert.match(html, /Prompt Engineer Intern/);
assert.match(html, /PDF asset required/);
assert.doesNotMatch(html, /href=["'][^"']*\.pdf["']/i, 'must not claim a PDF URL while assets are absent');
assert.match(app, /escapeHtml/);
assert.match(app, /textContent=text/);
assert.match(app, /I don't have verified information/);
assert.match(app, /TechCiti/);
assert.match(app, /InAmigos/);
assert.match(app, /AI-IDS-ES/);
assert.ok(existsSync('CNAME'));
assert.equal(readFileSync('CNAME', 'utf8').trim(), 'mokshith-ai-security.is-a.dev');
console.log('Prompt Folio smoke checks passed.');

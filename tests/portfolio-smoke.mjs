import { readFileSync, existsSync } from 'node:fs';
import { strict as assert } from 'node:assert';

const html = readFileSync('index.html', 'utf8');
const app = readFileSync('app.js', 'utf8');
const css = readFileSync('styles.css', 'utf8');

for (const section of ['overview', 'experience', 'work', 'skills', 'education', 'certifications', 'resumes', 'about', 'ask', 'contact']) {
  assert.match(html, new RegExp(`id="${section}"`), `missing #${section}`);
}

assert.match(html, /^<!doctype html>/i);
assert.match(html, /<html lang="en">/);
assert.match(html, /class="skip" href="#main"/);
assert.match(html, /<main id="main">/);
assert.match(html, /aria-label="Primary navigation"/);
assert.match(html, /aria-live="polite"/);
assert.match(html, /label for="heroInput"/);
assert.match(html, /label for="chatInput"/);
assert.match(html, /id="clearChat"/);
assert.match(html, /maxlength="600"/);

assert.match(html, /TechCiti Technologies Private Limited/);
assert.match(html, /Cyber Security Analyst Intern/);
assert.match(html, /InAmigos Foundation \(IAF\)/);
assert.match(html, /Prompt Engineer Intern/);
assert.match(html, /PDF asset required/);
assert.doesNotMatch(html, /href=["'][^"']*\.pdf["']/i, 'must not claim a PDF URL while assets are absent');
assert.match(html, /rel="canonical"/);
assert.match(html, /og:title/);

assert.match(app, /escapeHtml/);
assert.match(app, /textContent=text/);
assert.match(app, /slice\(0,600\)/);
assert.match(app, /I don't have verified information/);
assert.match(app, /TechCiti/);
assert.match(app, /InAmigos/);
assert.match(app, /AI-IDS-ES/);
assert.match(app, /clearChat/);
assert.doesNotMatch(app, /innerHTML\s*=\s*[^\n]*raw/);

assert.match(css, /:focus-visible/);
assert.match(css, /prefers-reduced-motion:reduce/);
assert.match(css, /max-width:600px/);
assert.match(css, /max-width:900px/);

assert.ok(existsSync('CNAME'));
assert.equal(readFileSync('CNAME', 'utf8').trim(), 'mokshith-ai-security.is-a.dev');
console.log('Prompt Folio accessibility/security/responsive smoke checks passed.');

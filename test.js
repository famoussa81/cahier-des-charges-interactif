// ==========================================
// SNG — Agent de Review & Test Automatisé
// Exécute: node test.js
// ==========================================

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');
let errors = [];
let warnings = [];
let passed = 0;
let failed = 0;

function check(cond, msg) {
  if (cond) { passed++; console.log('  ✅', msg); }
  else { failed++; errors.push(msg); console.log('  ❌', msg); }
}

function warn(msg) { warnings.push(msg); console.log('  ⚠️', msg); }

console.log('\n🔍 SNG — Agent de Review & Test Automatisé\n');
console.log('='.repeat(50));

console.log('\n📁 1. VÉRIFICATION DU FICHIER');
check(fs.existsSync(FILE), 'index.html existe');
const html = fs.readFileSync(FILE, 'utf8');
check(html.length > 10000, 'Taille fichier > 10 Ko (' + html.length + ' octets)');

console.log('\n🏗️  2. STRUCTURE HTML');
check(html.includes('<!DOCTYPE html>'), 'Doctype');
check(html.includes('<meta charset="UTF-8">'), 'Charset');
check(html.includes('<meta name="viewport"'), 'Viewport');
check(html.includes('<title>'), 'Title');
check(html.includes('<body>') && html.includes('</body>'), 'Body');
check(html.includes('<noscript>'), 'Noscript');

console.log('\n🎨 3. STYLES CSS');
check(html.includes('<style>'), 'Balise style');
check(html.includes(':root{'), 'Variables CSS');
check(html.includes('@media'), 'Media queries');
check(html.includes('.bn{'), 'Classe .bn (bottom nav)');

console.log('\n📄 4. ÉLÉMENTS HTML');
['iN','iE','sc','bottomNav','btnBack','btnNext','stepLabel','logoTop','mo','eA'].forEach(function(id) {
  check(html.includes('id="' + id + '"') || html.includes("id='" + id + "'"), '#' + id + ' présent');
});

console.log('\n🐛 5. BUGS $(document)');
var dc = (html.match(/\$\(document/g) || []).length;
check(dc === 0, 'Aucun $(document) (' + dc + ' trouvés)');
var ddc = (html.match(/\$\$\(document/g) || []).length;
check(ddc === 0, 'Aucun $$(document) (' + ddc + ' trouvés)');

console.log('\n⚙️  6. FONCTIONS JS');
['gS','s0','s1','s2','s3','s4','sA','sv','ldD','bEv','hD','rQ','fv','rF','iU','hF','gP','sM','oM','cl','uN','updateBottomNav','validateStep1','restoreAnswers','esc'].forEach(function(fn) {
  check(html.includes('function ' + fn + '('), 'function ' + fn + '()');
});

console.log('\n🔒 7. SÉCURITÉ');
check(html.includes('function esc('), 'Fonction esc() anti-XSS');
check(html.includes('textContent=s'), 'Utilise textContent');

console.log('\n💾 8. SAUVEGARDE');
check(html.includes('localStorage.getItem'), 'localStorage.getItem');
check(html.includes('localStorage.setItem'), 'localStorage.setItem');

console.log('\n✨ 9. NOUVELLES FONCTIONNALITÉS');
check(html.includes('validateStep1'), 'Validation avant Suivante');
check(html.includes('scrollTop'), 'Auto-scroll');
check(html.includes('restoreAnswers'), 'Restauration réponses');
check(html.includes('logoTop'), 'Logo cliquable');

console.log('\n' + '='.repeat(50));
console.log('\n📊 RÉSULTATS: ' + passed + ' ✅, ' + failed + ' ❌, ' + warnings.length + ' ⚠️');
if (failed > 0) {
  console.log('\n❌ ÉCHECS:');
  errors.forEach(function(e) { console.log('  • ' + e); });
}
console.log('\n' + (failed === 0 ? '✅ TOUT EST OK !' : '🔴 PROBLÈMES'))
console.log('\n📝 Tests manuels navigateur:');
console.log('  1. Ouvrir index.html');
console.log('  2. Cliquer un type de site');
console.log('  3. Remplir prénom/email + questions');
console.log('  4. Boutons Retour/Suivant toujours visibles en bas');
console.log('  5. Upload fichier');
console.log('  6. Récap → Envoyer → Modal PRD');
console.log('  7. Config pro → personnaliser');
console.log('  8. F5 → réponses restaurées');
console.log('  9. Mobile : redimensionner');


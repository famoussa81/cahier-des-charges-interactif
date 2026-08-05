# SNG — Revue & Audit Qualité (Agent de Review)

> *Regard extérieur sur **Cahier des Charges Interactif v3.0***
> Objectif : détecter anomalies, incohérences, régressions et axes d'amélioration.
> Généré le 30 juillet 2026 — Agent de Review SNG

> ⚠️ **OBSOLÈTE — document d'archive.** Cette grille date de la **v3.0** (EmailJS, panneau ⚙️, exports PRD) : elle teste des fonctionnalités qui **n'existent plus** dans le code actuel. Le questionnaire est passé en **v3.2** :
> - **Envoi multi-canal** : Web3Forms (clé configurable, pièces jointes fiables) + FormSubmit (zéro config) + **dossier HTML avec images embarquées**, joint automatiquement à chaque email et téléchargeable par le client.
> - **Validation réelle des champs obligatoires** à chaque étape (`validateStep`) — les badges « Obligatoire » ne sont plus décoratifs.
> - **Copie du brief pour le client** : 📋 / ⬇️ .txt / 📄 dossier.
> - **esc() durci** (échappe aussi `"` et `'` — failles A-01/A-02 corrigées), **CFG** centralisé (email/brand/web3formsKey — A-04/A-05 corrigées), **honeypot** anti-spam, **persistance des fichiers** sous quota localStorage (A-06/A-08 traités).
> - Les 18 vérifications logiques (validation, dossier, envoi multi-canal, honeypot) sont couvertes par un harness de test automatisé.

---

## 📋 Comment utiliser cette grille

1. Ouvre `index.html` dans un navigateur
2. Ouvre la console (F12 → Console)
3. Exécute `test.js` dans la console (copie-colle ou import)
4. Coche chaque test ci-dessous au fur et à mesure
5. Rapporte les anomalies dans la section prévue

---

## 1. PARCOURS CLIENT COMPLET

| # | Test | Résultat attendu | Statut |
|---|------|------------------|--------|
| 1.1 | Ouvrir `index.html` dans Chrome | Page affichée, pas d'erreur console | ⬜ |
| 1.2 | Ouvrir `index.html` dans Firefox | Même rendu, pas d'erreur console | ⬜ |
| 1.3 | Ouvrir `index.html` dans Edge | Même rendu, pas d'erreur console | ⬜ |
| 1.4 | Responsive : redimensionner à 375px | Mise en page adaptée, pas de débordement | ⬜ |
| 1.5 | Responsive : redimensionner à 1024px | Mise en page adaptée | ⬜ |
| 1.6 | Test mobile via outils développeur (iPhone SE) | Tout est lisible, pas de chevauchement | ⬜ |
| 1.7 | Désactiver JS → message ou fallback | Message affiché (balise `<noscript>`) | ⬜ |
| 1.8 | Console : 0 erreur rouge au chargement | Aucune erreur JS | ⬜ |

## 2. ÉTAPE 1 — CHOIX DU TYPE DE SITE

| # | Test | Résultat attendu | Statut |
|---|------|------------------|--------|
| 2.1 | 6 choix affichés | Vitrine, E-commerce, Portfolio, RDV, Blog, Landing | ⬜ |
| 2.2 | Cliquer "Site vitrine" → étape 2 avec questions vitrine | Bonne transition | ⬜ |
| 2.3 | Cliquer "Boutique en ligne" → étape 2 avec questions e-commerce | Bonne transition | ⬜ |
| 2.4 | Cliquer "Portfolio" → étape 2 avec questions portfolio | Bonne transition | ⬜ |
| 2.5 | Cliquer "Site avec RDV" → étape 2 avec questions RDV | Bonne transition | ⬜ |
| 2.6 | Cliquer "Blog" → étape 2 avec questions blog | Bonne transition | ⬜ |
| 2.7 | Cliquer "Landing page" → étape 2 avec questions landing | Bonne transition | ⬜ |
| 2.8 | Barre de progression à 25% après choix | `width: 25%` | ⬜ |
| 2.9 | Dot #1 devient "fait" (vert) après choix | Classe `.d` ajoutée | ⬜ |

## 3. ÉTAPE 2 — QUESTIONS PAR TYPE

| # | Test | Résultat attendu | Statut |
|---|------|------------------|--------|
| 3.1 | Bouton "Retour" → étape 1 | Retour fonctionnel | ⬜ |
| 3.2 | Bouton "Suivante" → étape 3 | Passage fonctionnel | ⬜ |
| 3.3 | Questions obligatoires marquées "Obligatoire" | Badge rouge `.b-r` | ⬜ |
| 3.4 | Questions optionnelles marquées "Optionnel" | Badge bleu `.b-o` | ⬜ |
| 3.5 | Remplir un champ texte → valeur persiste en revenant | localStorage restore | ⬜ |
| 3.6 | Questions conditionnelles (ex: URL si "Oui" site existant) | Apparition/disparition | ⬜ |
| 3.7 | Cocher "Oui" pour site existant → champ URL apparaît | Champ visible | ⬜ |
| 3.8 | Décocher → champ URL disparaît et se vide | Champ vidé + masqué | ⬜ |
| 3.9 | Checkboxes → sélection multiple | Plusieurs valeurs possibles | ⬜ |
| 3.10 | Radios → sélection unique | Une seule valeur possible | ⬜ |

## 4. ÉTAPE 3 — OBJECTIFS & BUDGET + FICHIERS

| # | Test | Résultat attendu | Statut |
|---|------|------------------|--------|
| 4.1 | Section "Objectifs & budget" affichée | Rendu correct | ⬜ |
| 4.2 | Bouton "Retour" → étape 2 | Retour fonctionnel | ⬜ |
| 4.3 | Bouton "Récap" → étape 4 | Passage fonctionnel | ⬜ |
| 4.4 | Zone upload : clic → sélecteur fichiers | Dialogue systčme | ⬜ |
| 4.5 | Glisser-déposer PNG → s'affiche dans la liste | Apparition dans `.fl` | ⬜ |
| 4.6 | Glisser-déposer fichier >5 Mo → message d'erreur | Toast ">5Mo" | ⬜ |
| 4.7 | Bouton ✕ pour supprimer un fichier uploadé | Suppression + mise à jour | ⬜ |
| 4.8 | Fichier persiste après navigation Retour → Suivante | localStorage intact | ⬜ |
| 4.9 | Upload multiple (sélectionner 3 fichiers) | Les 3 apparaissent | ⬜ |
| 4.10 | Upload d'un fichier non image/PDF (ex: .exe) | Accepté ? (pas de filtre côté JS) | ⬜ |

## 5. ÉTAPE 4 — RÉCAP

| # | Test | Résultat attendu | Statut |
|---|------|------------------|--------|
| 5.1 | Toutes les sections affichées (Projet, Infos, Questions, Objectifs) | Rendu complet | ⬜ |
| 5.2 | Les réponses remplies sont visibles | Valeurs correctes | ⬜ |
| 5.3 | Les champs non remplis affichent "-" | Tirets présents | ⬜ |
| 5.4 | Les fichiers uploadés sont listés | Noms visibles | ⬜ |
| 5.5 | Bouton "Retour" → étape 3 | Retour fonctionnel | ⬜ |
| 5.6 | Bouton "Envoyer" présent avec nom de marque | Texte "Envoyer à SNG" | ⬜ |

## 6. ENVOI & FINALISATION

| # | Test | Résultat attendu | Statut |
|---|------|------------------|--------|
| 6.1 | Cliquer "Envoyer" sans nom → toast "Nom vide" | ✅ | ⬜ |
| 6.2 | Cliquer "Envoyer" sans email → toast "Email vide" | ✅ | ⬜ |
| 6.3 | Cliquer "Envoyer" avec email invalide → toast "Email invalide" | ✅ | ⬜ |
| 6.4 | Cliquer "Envoyer" sans type choisi → toast "Choisis un type" | ✅ | ⬜ |
| 6.5 | Remplir nom + email valide + type → envoi déclenché | Appel emailJS ou mailto | ⬜ |
| 6.6 | Fallback mailto : client mail avec PRD pré-rempli | Fenêtre/onglet mail | ⬜ |
| 6.7 | Modale de confirmation affichée | Visible avec PRD | ⬜ |
| 6.8 | PRD visible dans le textarea de la modale | Contenu complet | ⬜ |
| 6.9 | Bouton 📋 Copier → presse-papier | Clipboard API | ⬜ |
| 6.10 | Bouton ⬇️ .txt → télécharge PRD.txt | Blob download | ⬜ |
| 6.11 | Bouton 📄 PRD PDF → nouvel onglet formaté | Onglet avec PRD | ⬜ |
| 6.12 | Onglet PDF → Ctrl+P → sauvegarde PDF | Impression OK | ⬜ |
| 6.13 | Étape 5 : message "Merci !" + boutons PRD / Nouveau | ✅ | ⬜ |
| 6.14 | Bouton "Nouveau" → reset + retour étape 1 | localStorage effacé, reload | ⬜ |

## 7. CONFIGURATION PRO

| # | Test | Résultat attendu | Statut |
|---|------|------------------|--------|
| 7.1 | Cliquer ⚙️ → panneau déplié | Classe `.o` ajoutée | ⬜ |
| 7.2 | Re-cliquer → panneau replié | Classe `.o` retirée | ⬜ |
| 7.3 | Modifier email → 💾 Enregistrer → toast "Sauvegarde OK" | ✅ | ⬜ |
| 7.4 | Modifier nom marque → Enregistrer → nom change dans boutons | ✅ | ⬜ |
| 7.5 | Modifier couleur hex → Enregistrer → couleur primaire change | CSS variable `--primary` | ⬜ |
| 7.6 | Actualiser la page → valeurs persistent | localStorage | ⬜ |

## 8. SAUVEGARDE & REPRISE DE SESSION

| # | Test | Résultat attendu | Statut |
|---|------|------------------|--------|
| 8.1 | Remplir questions → F5 → réponses restaurées | localStorage `sng_q` | ⬜ |
| 8.2 | Étape en cours restaurée après F5 | `S.step` restore | ⬜ |
| 8.3 | Fichiers uploadés persistent après F5 | Data URLs en localStorage (⚠️ 5MB limite) | ⬜ |
| 8.4 | Changer d'avis à l'étape 2, revenir à l'étape 1, changer de type → les réponses du nouvel affichage sont vides | Reset cohérent | ⬜ |

## 9. SÉCURITÉ & ROBUSTESSE

| # | Test | Résultat attendu | Statut |
|---|------|------------------|--------|
| 9.1 | Injecter `<script>alert(1)</script>` dans un champ → pas exécuté | innerHTML vs textContent | ⬜ |
| 9.2 | localStorage vidé → l'app fonctionne quand même | Valeurs par défaut | ⬜ |
| 9.3 | Navigateur sans localStorage → pas de crash | try/catch | ⬜ |
| 9.4 | Double-clic rapide "Envoyer" → pas d'envoi en double | Désact. bouton | ⬜ |
| 9.5 | Vider le nom après l'avoir rempli → revalidation au clic Envoyer | ✅ | ⬜ |

## 10. QUALITÉ DE CODE

| # | Test | Résultat | Statut |
|---|------|----------|--------|
| 10.1 | Taille fichier < 50 Ko | ~32 Ko | ✅ |
| 10.2 | Pas de dépendances externes bloquantes | EmailJS CDN (⚠️ si hors ligne) | ⬜ |
| 10.3 | Temps chargement < 1s sur fibre | ✅ | ⬜ |
| 10.4 | DOMContentLoaded avant JS | Aucun listener | ⬜ |
| 10.5 | Variables globales en conflit potentiel | `$`, `N`, `S`, etc. | ⬜ |

---

## 🐛 Anomalies détectées dans le code source

| ID | Sévérité | Description | Ligne | Correctif |
|----|----------|-------------|-------|-----------|
| A-01 | ⚠️ **Moyen** | **XSS potentiel dans le récap** : `s3()` insère `q.q` et `v` directement en innerHTML via template literals. Si un client écrit `<script>` dans un champ, il sera exécuté dans la page. | `s3()` (construction HTML) | Utiliser `textContent` ou échapper les caractères `<`, `>`, `&` avec une fonction `escHtml()` |
| A-02 | ⚠️ **Moyen** | **XSS potentiel dans PRD HTML** : `gP()` construit une page HTML avec `c.replace(/</g,'&lt;')` pour les `<>` mais n'échappe pas les `&` correctement ni tous les contextes HTML. | `gP()` | Utiliser une fonction d'échappement HTML complète |
| A-03 | ℹ️ **Faible** | **Upload de tout type de fichier** : `iU()` accepte `image/*,.pdf` dans le `accept` du sélecteur, mais le drag & drop n'a AUCUN filtre — n'importe quel fichier passe (`hF()` ne vérifie que la taille). | `hF()`, `iU()` | Ajouter `accepts` à l'écouteur drop : vérifier `f.type` commence par `image/` ou est `application/pdf` |
| A-04 | ℹ️ **Faible** | **EmailJS init key exposée** : `emailjs.init('i9fH7Q2dCo0YEQEIX')` visible en clair dans le source. C'est une clé publique (c'est OK pour EmailJS) mais mieux vaudrait la masquer via un service worker ou une config. | `sM()` | Déplacer dans une variable de config en haut du fichier (cosmétique) |
| A-05 | ⚠️ **Moyen** | **Clé EmailJS hardcodée** : `service_8rykruc` et `template_evoea79` visibles. Si quelqu'un les utilise ailleurs, les quotas de l'utilisateur seront consommés. | `sM()` | Déplacer en config + commentaire expliquant comment changer |
| A-06 | ⚠️ **Moyen** | **Boucle synchrone des FileReaders** : `hF()` lance un `FileReader.readAsDataURL()` pour chaque fichier dans une boucle `forEach`. Avec 10 fichiers de 5 Mo, lecture séquentielle synchrone lourde. Pas critique mais peut geler le navigateur. | `hF()` | Utiliser Promise.all avec FileReader en promesse |
| A-07 | ℹ️ **Faible** | **Pas de `document.addEventListener('DOMContentLoaded')`** : le script s'exécute immédiatement. Les éléments DOM sont après le script (balises fermantes en bas), donc ça marche, mais c'est une fragilité si le HTML change d'ordre. | (dernier bloc) | Ajouter un `DOMContentLoaded` listener |
| A-08 | ℹ️ **Info** | **Espace insécable avant `?`** : `"Qu est-ce que...?"` et `"Ou etes-vous ?"` — l'apostrophe et les accents ne passent pas dans les chaînes non échappées. Le rendu peut être étrange sur certains navigateurs. | `TQ` (vitrine, rdv) | Utiliser des vrais caractères `'`, `é`, `è` |

---

## 📊 Bilan

| Catégorie | Tests | ✅ OK | ❌ KO | ⬜ Non testé | Notes |
|-----------|-------|-------|-------|-------------|-------|
| Parcours client | 8 | — | — | 8 | |
| Choix type | 9 | — | — | 9 | |
| Questions | 10 | — | — | 10 | |
| Objectifs & fichiers | 10 | — | — | 10 | |
| Récap | 6 | — | — | 6 | |
| Envoi & finalisation | 14 | — | — | 14 | |
| Configuration pro | 6 | — | — | 6 | |
| Sauvegarde | 4 | — | — | 4 | |
| Sécurité & robustesse | 5 | — | — | 5 | |
| Qualité de code | 5 | — | — | 5 | |
| **Total** | **77** | **0** | **0** | **77** | |

---

## 🚀 Recommandations immédiates

1. **🔴 Corriger la faille XSS** dans `s3()` (A-01) — remplacer l'interpolation innerHTML par échappement HTML
2. **🔴 Ajouter une fonction `escHtml()`** réutilisable pour TOUTES les insertions dynamiques dans le DOM
3. **🟡 Filtrer les types de fichiers** dans le drag & drop (A-03) — sinon un client peut déposer n'importe quoi
4. **🟡 Isoler les clés EmailJS** dans des variables claires en haut du fichier (A-04, A-05)
5. **🟢 Documenter le fonctionnement de EmailJS** dans README (les 3 infos : public key, service ID, template ID)
6. **🟢 Ajouter un `<noscript>`** pour les visiteurs sans JavaScript

---

*Grille générée par l'Agent de Review SNG — Juillet 2026*

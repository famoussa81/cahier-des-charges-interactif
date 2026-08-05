# SNG — Cahier des Charges Interactif v3.2

Un questionnaire interactif professionnel pour collecter les besoins de tes clients web — un seul fichier HTML, sans serveur, sans abonnement.

## 🚀 Utilisation

1. **Ouvre `index.html`** dans un navigateur pour le personnaliser (email, marque, clé Web3Forms — voir §Configuration).
2. **Héberge-le** gratuitement (GitHub Pages, Netlify…) et envoie le **LIEN** à ton client. Évite d'envoyer le fichier `.html` brut par email : certains clients ne savent pas l'ouvrir et les messageries bloquent les pièces jointes HTML.
3. Le client remplit le questionnaire, upload son logo / photos / PDF → **tout arrive dans ta boîte email**.

## ✉️ Comment tu reçois les réponses (IMPORTANT)

Deux canaux d'envoi, essayés dans l'ordre :

1. **Web3Forms (recommandé pour recevoir les images)** — gratuit, ~250 envois/mois, pièces jointes fiables.
   - Va sur [web3forms.com](https://web3forms.com) → « Get Access Key » (gratuit, ~2 min)
   - Colle la clé dans `CFG.web3formsKey` (en haut de `index.html`)
2. **FormSubmit (zéro configuration)** — fonctionne sans rien installer ; ton email dans `CFG.email` suffit.
   - ⚠️ Le **texte arrive toujours**, mais les **images en pièce jointe ne sont PAS garanties** sur son plan gratuit (c'est pour ça que tu ne les recevais pas). C'est précisément le point que Web3Forms corrige.
   - Tes soumissions restent consultables sur [dashboard.formsubmit.co](https://dashboard.formsubmit.co)

**Filet de sécurité anti-perte** : même si l'envoi automatique échoue, le client peut **télécharger son dossier HTML** (toutes les réponses + les images embarquées) et te l'envoyer par email. Le dossier est aussi automatiquement **joint à chaque email envoyé** (fichier `dossier-client.html`). Rien n'est jamais perdu.

## ⚙️ Configuration (bloc `CFG` en haut de `index.html`)

| Variable | Rôle |
|----------|------|
| `email` | Email(s) où arrivent les cahiers des charges (séparés par des virgules si plusieurs) |
| `brand` | Nom de ta marque affiché dans l'interface et dans le PRD |
| `web3formsKey` | Ta clé Web3Forms (vide = mode FormSubmit) — **recommandé de la renseigner** |

## 📁 Fonctionnalités

- **Wizard 5 étapes** : Type de site → Questions → Objectifs & fichiers → Récap → Envoi
- **6 types de projets** avec questions adaptées : Vitrine, E-commerce, Portfolio, RDV, Blog, Landing page
- **Questions conditionnelles** (ex : URL de l'ancien site si « Oui, je le garde »)
- **Upload** logo / photos / PDF : drag & drop, compression auto des images, limite 10 Mo
- **Champs obligatoires réellement vérifiés** à chaque étape (badges « Obligatoire » + surlignage rouge + blocage de la navigation)
- **Sauvegarde automatique** des réponses (le client peut revenir plus tard, F5 inclus)
- **Récap complet** avant envoi + **PRD** (texte structuré client / type / réponses / fichiers)
- **Le client garde une copie** : 📋 Copier le brief · ⬇️ .txt · 📄 Dossier HTML avec images
- **Anti-spam** : honeypot invisible + captcha FormSubmit
- **Responsive** : mobile + desktop, breakpoints 380 / 600 / 768 / 1024 px
- **100 % gratuit** : pas de serveur, pas d'abonnement

## 📁 Structure

```
cahier-des-charges-interactif/
├── index.html       ← Le questionnaire complet (fichier unique)
├── README.md        ← Ce fichier
└── REVIEW.md        ← Ancien rapport d'audit (v3.0, obsolète)
```

## 🛠 Personnalisation des questions

Modifie les tableaux JavaScript `UQ` (questions universelles), `TQ` (questions par type de projet) et `BQ` (objectifs & budget). Un champ est obligatoire avec `r:true`, optionnel sinon.

## 📜 Licence d'utilisation

Outil interne / professionnel. Envoi de données via Web3Forms et/ou FormSubmit : préviens ton client que ses réponses (et fichiers) transitent par ces services tiers.

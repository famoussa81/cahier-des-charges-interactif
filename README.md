# SNG — Cahier des Charges Interactif v3.0

Un questionnaire interactif professionnel pour collecter les besoins de tes clients web — directement depuis le navigateur, sans serveur.

## 📋 Fonctionnalités

- **Wizard 5 étapes** : Type de site → Besoins → Objectifs → Récap → Envoi
- **6 types de projets** : Vitrine, E-commerce, Portfolio, RDV, Blog, Landing page
- **Questions intelligentes** : S&apos;adaptent au type de projet choisi
- **Upload de fichiers** : Logo, photos, charte graphique (drag & drop)
- **Récap complet** avant envoi
- **Export PRD** : PDF (impression navigateur) + TXT téléchargeable
- **Email automatique** via EmailJS + fallback mailto
- **Configuration intégrée** : Ton email, ta marque, ta couleur
- **Sauvegarde automatique** : Le client peut revenir plus tard
- **Responsive** : Mobile + Desktop
- **100% gratuit** : Pas de serveur, pas d&apos;abonnement

## 🚀 Utilisation

1. Ouvre **index.html** dans un navigateur
2. Scrolle en bas → clique sur **⚙️ Configuration pro**
3. Rentre ton email (où arriveront les PRD clients) et ta marque
4. Clique **💾 Enregistrer**
5. Envoie le fichier index.html à tes clients (ou héberge-le sur GitHub Pages, Netlify, etc.)

## ⚙️ Configuration Email (optionnel)

Par défaut, le formulaire ouvre le client mail du client avec le PRD pré-rempli (mailto). Pour un envoi automatique :

1. Va sur [EmailJS.com](https://www.emailjs.com) → crée un compte gratuit
2. Crée un template avec les variables : `{{from_name}}`, `{{from_email}}`, `{{reponses}}`, `{{date}}`
3. Remplace les clés dans le code source (variables `CFG.emailjs`)
4. Configure ton email dans le panneau ⚙️ du questionnaire

## 📁 Structure

```
cahier-des-charges-interactif/
├── index.html       ← Le questionnaire complet (fichier unique)
└── README.md        ← Ce fichier
```

## 🛠 Personnalisation

- **Couleur** : Panneau ⚙️ en bas de page
- **Marque** : Panneau ⚙️ en bas de page  
- **Questions** : Modifie les tableaux `UQ`, `TQ`, `BQ` dans le JavaScript
- **Email de réception** : Panneau ⚙️

Fait avec ❤️ par **SNG**

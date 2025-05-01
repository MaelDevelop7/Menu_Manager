# 🧾 Menu Manager

> Une application web progressive (PWA) pour gérer, planifier et aimer des recettes – développée comme cadeau d’anniversaire pour ma mère, et comme projet personnel pour enrichir mon portfolio développeur.

---

## 🚀 Objectif

Créer une application moderne, responsive et intuitive pour gérer ses recettes préférées, les planifier facilement, et y accéder depuis n’importe quel appareil.

---

## 🛠️ Stack technique

- ⚛️ **React** (avec Vite ou Create React App)
- 🔥 **Firebase** (Auth + Firestore)
- 🎨 **TailwindCSS**
- 📆 **React Big Calendar** (ou tableau personnalisé)
- 💾 **GitHub Pages** pour le déploiement
- 💻 **Git & GitHub** pour le versioning

---

## 📦 Fonctionnalités

### 🔹 Version 1.0 — MVP

- Ajouter / Supprimer des recettes (titre, ingrédients, étapes, image).
- Bouton **"J’aime"** pour ajouter aux **favoris**.
- **Calendrier simple** pour planifier les recettes dans la semaine.
- Design **responsive** (mobile-first).
- Déploiement initial sur **GitHub Pages**.
- Gestion propre du projet avec **branches Git** par fonctionnalité.

### 🔹 Version 1.5 — Version connectée

- Authentification Firebase (Email/Password ou Google).
- Base de données Firebase :
  - `recettes` : titre, description, étapes, image, auteur.
  - `favoris` : UID utilisateur + ID recette.
  - `planification` : UID + recette + date.
- Affichage personnalisé selon l’utilisateur connecté :
  - Mes recettes
  - Mes favoris
  - Mon planning de repas

---

## 🧱 Structure du projet
```bash
src/
  components/
  pages/
  hooks/
  services/      # Firebase interactions
  styles/
  utils/
```

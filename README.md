# epolia-doc

Repository dédié à la documentation technique du projet Epolia.

Cette documentation sert de point central pour les informations utiles au développement, à l’architecture et à la maintenance du projet. Elle est volontairement initialisée avec une structure simple afin d’être enrichie progressivement.

## Prérequis

- Node.js 20 ou supérieur
- npm

## Installation

```bash
npm install
```

## Lancer la documentation en local

```bash
npm start
```

La documentation est ensuite disponible sur l’URL affichée par Docusaurus, généralement `http://localhost:3000/epolia-doc/`.

## Générer le build de production

```bash
npm run build
```

Le site statique est généré dans le dossier `build/`.

## Ajouter de la documentation

Les pages se trouvent dans le dossier `docs/`.

Pour ajouter une page dans une section existante :

1. Créer un fichier Markdown ou MDX dans le dossier de la section, par exemple `docs/backend/authentification.md`.
2. Ajouter un titre et un contenu concis.
3. Référencer la page dans `sidebars.ts` si elle doit apparaître dans la navigation.

Pour créer une nouvelle section :

1. Créer un nouveau dossier dans `docs/`, avec un nom simple et sans accents.
2. Ajouter une page `index.md` comme point d’entrée.
3. Ajouter cette page dans `sidebars.ts`.

## Scripts utiles

- `npm start` : lance le serveur de développement.
- `npm run build` : génère le build de production.
- `npm run serve` : sert localement le build généré.
- `npm run typecheck` : vérifie les types TypeScript.

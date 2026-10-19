# 02-react-cafe

A café feedback widget built with React, TypeScript, and Vite.

Choose **Good**, **Neutral**, or **Bad** to leave feedback. After the first vote,
the app displays the counts, total votes, rounded positive percentage, and a
**Reset** button. Reset clears all votes and restores **No feedback yet**.
Votes are held in React state and reset when the page reloads.

## Local development

```sh
npm install
npm run dev
```

## Checks and production build

```sh
npm run lint
npm run format:check
npm run build
npm run preview
```

## Components

Each component has its own folder in `src/components` with a `.tsx` file and a
matching `.module.css` file: `App`, `CafeInfo`, `VoteOptions`, `VoteStats`, and
`Notification`. Shared `Votes` and `VoteType` definitions are in
`src/types/votes.ts`.

Component styles come from the assignment's
[react-cafe-styles repository](https://github.com/goitacademy/react-cafe-styles).
Global browser defaults are normalized with `modern-normalize`.

## Submission

The assignment requires a GitHub repository named `02-react-cafe` and a Vercel
production URL. Import that repository into Vercel as a Vite project, using
`npm run build` as the build command and `dist` as the output directory.
Check voting and reset on the deployed page before submitting both links.
The assignment asks you to wait five minutes after the last repository update
before submitting to the LMS.

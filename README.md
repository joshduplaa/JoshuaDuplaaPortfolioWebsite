# Joshua Duplaa Portfolio Website

Source for my personal portfolio site, live at **https://joshuaduplaaswe.web.app**.

## Pages
- **Home**: introduction, resume download, and work experience.
- **Projects**: personal and course projects with links to code and live demos.
- **Contact**: email, LinkedIn, GitHub, and other ways to reach me.

## Tech Stack
- [Next.js](https://nextjs.org/) (App Router) with React and TypeScript
- [MUI](https://mui.com/) for components and dark/light theming
- [tsParticles](https://particles.js.org/) for the animated background
- [Firebase Hosting](https://firebase.google.com/docs/hosting) for deployment

## Running Locally
Requires Node.js 18 or newer.

```sh
git clone https://github.com/joshduplaa/JoshuaDuplaaPortfolioWebsite.git
cd JoshuaDuplaaPortfolioWebsite/pw-client
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploying
The site is a static export (`output: "export"` in `next.config.ts`): `npm run build` writes plain HTML, CSS and JS to `pw-client/out/`, which Firebase Hosting serves directly. No server or Cloud Function is involved.

```sh
cd pw-client
firebase deploy --only hosting   # runs npm run build first
```

To preview the production build locally, run `npm run build` and serve the `out/` folder with any static file server, for example `npx serve out`.

## Contact
- **LinkedIn**: [joshua-duplaa](https://www.linkedin.com/in/joshua-duplaa-487502178/)
- **Email**: joshuaduplaa@outlook.com

# Abdullah Sher Muhammad — GitHub Pages edition

This is the complete source for the public, static edition of the website. It includes the pages, styles, executive illustration assets, and a GitHub Actions workflow that builds and publishes the site. The separate ChatGPT Sites edition remains untouched.

## Before uploading: connect lead forms

GitHub Pages cannot run the original `/api/assessment` endpoint or Cloudflare D1 database. This edition sends the assessment, contact, and review request forms to a Formspree form instead. You must create your own form before the deployment workflow will publish. This prevents a site with broken lead collection from going live.

1. Sign in to [Formspree](https://formspree.io/) and create a form under an account you control. Set its notification email and complete any verification it requests.
2. Copy its endpoint, which looks like `https://formspree.io/f/your-form-id`.
3. In your new GitHub repository, open **Settings → Secrets and variables → Actions → Variables → New repository variable**. Name it `NEXT_PUBLIC_LEAD_FORM_ENDPOINT` and paste the full endpoint as the value. This URL is included in public browser code; do not enter an API key or private token.
4. After publication, send one test enquiry through the website and confirm it arrives in your Formspree dashboard or email. A successful build cannot verify delivery to your account.

Formspree receives the submitted lead details. Review its privacy terms and update the site's privacy page if you choose another form provider. The historical submissions in the original Cloudflare database are **not** included in this source ZIP.

## Upload to GitHub

**Extract the ZIP first.** Upload its contents with their folders intact, including the hidden `.github/workflows/deploy.yml` file. Do not upload the ZIP as a single repository file.

For the simplest setup, create an empty repository named exactly `YOUR-USERNAME.github.io`, where `YOUR-USERNAME` is your GitHub username. That makes the site live at the root of `https://YOUR-USERNAME.github.io/`, so internal links and images work before and after connecting your domain. A differently named project repository would need a Next.js `basePath` until a custom domain is active.

From the extracted project directory, you can push with Git:

```bash
git init
git branch -M main
git add .
git commit -m "Add personal website for GitHub Pages"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

Or add the extracted folder as a repository in GitHub Desktop and publish it under that exact repository name. The archive contains no `node_modules` or previous Git history.

In the GitHub repository, choose **Settings → Pages → Build and deployment → Source: GitHub Actions**. After you add the form endpoint variable and push the project, open the **Actions** tab and wait for **Deploy website to GitHub Pages** to finish. The workflow installs dependencies, makes a static build in `out/`, then publishes it. No `out/` folder should be committed.

## Connect your Namecheap domain

Add your domain under **GitHub repository → Settings → Pages → Custom domain** before changing DNS. Then, in **Namecheap → Domain List → Manage → Advanced DNS**, create these records (replace `YOUR-USERNAME`):

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `YOUR-USERNAME.github.io` |

Remove conflicting parking or redirect records for `@` and `www`. Once DNS is verified and GitHub makes the option available, enable **Enforce HTTPS** in Pages settings. DNS and certificate issuance can take up to 24 hours.

## Edit and test locally

Use Node.js 22.13 or later and pnpm. For a local form test, create an untracked `.env.local` file containing your own endpoint:

```text
NEXT_PUBLIC_LEAD_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

Then run:

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```

The site uses Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, custom CSS, and Lucide icons. The production build is a static export with prebuilt service and industry routes. GitHub Pages is public; it does not preserve the owner-only access of the original ChatGPT Sites version.

Official guides: [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports), [GitHub Pages Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [Namecheap DNS](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/).

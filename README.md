# brandonhorst.me

A static personal website. All published files live in `public/`; there is no build step or framework. To preview locally, run `python3 -m http.server 8000 --directory public` and open http://localhost:8000.

## Publishing

The GitHub Actions workflow publishes `public/` to GitHub Pages on pushes to `main` (or via manual dispatch). Before the first deployment, set the repository's **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. Branches and pull requests do not deploy until merged into `main`.

Once the Pages site works at its `github.io` URL, set `brandonhorst.me` as the custom domain under **Settings → Pages**. Follow [GitHub's apex-domain DNS instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) for the root domain, and enable **Enforce HTTPS** once the certificate is ready. Change only website DNS records; leave email-related records alone. Do not repoint the domain until the new deployment has been checked. With GitHub Actions publishing, a `CNAME` file is not needed; the custom domain is set in Pages settings.

The social icons are Font Awesome Free brand icons, licensed under [CC BY 4.0](https://fontawesome.com/license/free).

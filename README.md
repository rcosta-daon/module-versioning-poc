# Module versioning POC

NX is a tool used to configure mono repos, it is already part of our frontend mono repo, and this proof of concept demonstrates how we can leverage it further to deploy and maintain different versions of screens that are dynamic loaded.

## Bootstrap

Create the first release locally.

```sh
npx nx release --first-release --skip-publish
git push --follow-tags
```

## Useful commands

Create a new app.

```sh
npx nx g @nx/react:app apps/project
```

Create a new library.

```sh
npx nx g @nx/react:library libs/project
```

Remove project from workspace

```sh
npx nx g @nx/workspace:remove @module-versioning-poc/project
```

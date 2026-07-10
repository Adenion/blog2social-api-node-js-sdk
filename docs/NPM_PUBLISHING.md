# Publishing the Blog2Social Node.js SDK to npm

This guide explains how to publish the Node.js SDK as an npm package.

## Package Name

Recommended package name:

```bash
@adenion/blog2social-api-node-sdk
```

## 1. Login to npm

```bash
npm login
```

For an organization package, make sure the `adenion` organization exists on npm and your npm user has publish rights.

## 2. Install Dependencies

```bash
npm install
```

## 3. Build the Package

```bash
npm run build
```

## 4. Test the Package Locally

Create a package archive:

```bash
npm pack
```

Then install the generated `.tgz` file in a test project:

```bash
npm install /path/to/adenion-blog2social-api-node-sdk-1.0.0.tgz
```

## 5. Publish the First Version

For scoped public packages, use:

```bash
npm publish --access public
```

## 6. Create New Versions

Patch release:

```bash
npm version patch
npm publish --access public
```

Minor release:

```bash
npm version minor
npm publish --access public
```

Major release:

```bash
npm version major
npm publish --access public
```

`npm version` updates `package.json`, creates a Git commit and creates a Git tag.

Push the commit and tag to GitHub:

```bash
git push origin main --tags
```

## 7. Install from npm

After publishing, users can install the SDK with:

```bash
npm install @adenion/blog2social-api-node-sdk
```

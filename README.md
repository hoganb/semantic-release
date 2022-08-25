# @hoganb/semantic-release
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

semantic-release automates the whole package release workflow including:
- Determining the next semantic version number based upon conventional commits
- Generating the release notes
- Publishing the package to public npm registry 

## Notes
Branch protection to push directly to `main` branch **disabled** in order for the *semantic-release* bot to update package version (in both `package-lock.json` and `package.json`) and `CHANGELOG.md` files on release.

## Q&A
Q. How does it determine the next version number and generate release notes?

- A. It uses formalized commit messages. e.g. fix: for patch version, feat: for minor version, and BREAKING_CHANGE: for the major version

Q. How does it publish the package?

A. It internally run command of npm publish using npm token
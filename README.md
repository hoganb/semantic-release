# @hoganb/semantic-release
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

semantic-release automates the whole package release workflow including:
- Determining the next semantic version number based upon conventional commits
- Generating the release notes
- Publishing the package to public npm registry 

## Notes
Branch protection to push directly to `main` branch **disabled** in order for the *semantic-release* bot to update package version (in both `package-lock.json` and `package.json`) and `CHANGELOG.md` files on release.
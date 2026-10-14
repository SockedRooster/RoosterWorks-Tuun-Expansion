# TuunExpansion v1.0.4 developer source

**Promised Worlds is required.**

This source package matches the v1.0.4 source-map repair test. It contains the complete installable GameData tree, original four 2K maps, repaired 2K/4K maps, input seam strips, generated repair patches, a portable compositor/rebuild tool and validation/packaging tool. No external dependencies or personal absolute paths are required by the supplied rebuild scripts.

The four orbital joins were repaired on Ixia, Skab, Arktane and Lukas. Appearance still awaits in-game acceptance. Lukas tree flicker remains deferred. See GameData/TuunExpansion/RELEASE_NOTES.md. This source handoff does not promote the test to a confirmed stable release.

## Contents and rebuild

- GameData/TuunExpansion: authoritative playable configs/assets, byte-identical to the v1.0.4 test payload.
- Source/Maps: original, generated, composited and exported color-map assets. Generated patch images are retained so rebuilding does not require another image-generation request.
- Tools/rebuild-color-maps.cjs: feather patch strips into the original sources, rebuild wrapped 4K exports, update GameData color maps. Requires Node.js and sharp 0.35.5.
- Tools/package-runtime.py: validate local configs/asset paths and create a runtime-only ZIP. Requires Python 3 standard library.
- Source/RepairPrompt.txt: the imagegen prompt used to create each repair patch.
- SHA256SUMS.json: checksums of supplied source files.

From the repository root:

```sh
npm install
npm run rebuild-maps
python Tools/package-runtime.py
```

The runtime packager can run without rebuilding maps or installing Node dependencies; checked-in GameData is ready to package. Changing source assets requires rebuilding before packaging. Verify appearance in KSP after any edits. Existing heightmaps and biome maps are authoritative assets; this package does not include a fully procedural regeneration pipeline for every historical planet texture.

For Git: repository name TuunExpansion, branch main. Suggested release tag v1.0.4 after accepting this test. No remote is configured or published by this task. Dependencies retain their licenses/authorship; no new project license is assigned here.


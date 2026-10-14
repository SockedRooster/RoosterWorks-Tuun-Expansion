# RoosterWorks Tuun Expansion — v1.0.4

**Stable release · In-game tested by the maintainer**

TuunExpansion adds 16 planets and moons to the **Promised Worlds** Tuun system in Kerbal Space Program. It is an expansion, **not** a standalone planet pack.

**Worlds:** Hurr, Verda, Rem, Aven, Flot, Tavool, Tom, Lukas, Raga, Vez, Dot, Arktane, Skab, Kol, Bub, and Ixia. Tuun, Puf, and other upstream bodies come from Promised Worlds.

## Requirements

- **Required:** Promised Worlds, Kopernicus, ModuleManager
- **For detailed terrain and scatters:** Parallax Continued, Parallax Stock Scatter Textures
- **Recommended for full visuals:** Scatterer, Environmental Visual Enhancements (EVE)
- **Optional:** Community Resource Pack (CRP) for additional resource distributions

Install mutually compatible versions of these mods. Third-party dependencies are not included.

## Installation

1. Close KSP and back up your saves.
2. Install Promised Worlds and required dependencies.
3. Remove any older `GameData/TuunExpansion` folder.
4. Extract the [v1.0.4 release ZIP](https://github.com/SockedRooster/RoosterWorks-Tuun-Expansion/releases/tag/v1.0.4) into the KSP directory, merging its `GameData` folder with the existing one.
5. Launch KSP. Some scaled-space caches may regenerate.

## v1.0.4 changes

- Repaired orbital longitude color-map joins for **Ixia, Skab, Arktane, and Lukas**.
- Rebuilt corrected orbital color maps at **4096 × 2048**.
- Preserved the accepted v1.0.0 terrain, biome, science, and gameplay baseline.

**Known limitation:** Lukas pine/oak tree flicker remains unresolved. High-resolution terrain and dense scatters may increase GPU workload; some old landed vessels may need repositioning after terrain changes inherited from earlier versions.

## Source and development

`GameData/TuunExpansion` is the playable mod. `Source/Maps` preserves original and repaired map assets; `Tools/rebuild-color-maps.cjs` rebuilds repaired maps (Node.js + sharp 0.35.5); `Tools/package-runtime.py` validates local config references and builds an installable ZIP (Python 3).

```sh
npm install
npm run rebuild-maps
python Tools/package-runtime.py
```

Rebuilding maps is optional for players. See [release notes](GameData/TuunExpansion/RELEASE_NOTES.md).

## License and credits

Original TuunExpansion contributions: **MIT**, see [LICENSE](LICENSE). Promised Worlds, Kopernicus, ModuleManager, Parallax, Scatterer, EVE, CRP, and their assets remain under their respective licenses and authorship. This repository does not relicense third-party material.

# TuunExpansion v1.0.4 source-map test

**Promised Worlds is required. TuunExpansion is an expansion for Promised Worlds, not a standalone planet pack.**

Adds/configures 16 planets and moons around the Promised Worlds Tuun system: Hurr, Verda, Rem, Aven, Flot, Tavool, Tom, Lukas, Raga, Vez, Dot, Arktane, Skab, Kol, Bub and Ixia. Tuun, Puf and the other upstream bodies remain supplied by Promised Worlds.

## Dependencies

- Required: Promised Worlds, Kopernicus and ModuleManager, with the dependencies required by their compatible installed releases.
- Required for the included detailed terrain and scatter presentation: Parallax Continued and Parallax Stock Scatter Textures. External stock rock/tree models and textures are referenced, not bundled here.
- Recommended for the complete atmosphere/cloud presentation: Scatterer and Environmental Visual Enhancements (EVE). The cloud configs also reference detail/particle assets supplied by Promised Worlds.
- Optional: Community Resource Pack (CRP) for Water, MetallicOre and Bub's Minerals/RareMetals/Substrate distributions. Stock Ore works without CRP. Resource harvesting requires suitable parts from your installed mods.

Dependencies are not bundled. Use versions compatible with your KSP installation and each other. Exact dependency versions and a universal compatibility matrix have not been established by this package audit.

## Installation

1. Close KSP and back up your save.
2. Install Promised Worlds and the dependencies above.
3. When updating, replace the old GameData/TuunExpansion folder with GameData/TuunExpansion from this ZIP. Keep a single copy of the mod; do not nest GameData folders.
4. Restart KSP. First loading may regenerate Bub/Ixia scaled-space caches.

The release carries forward all accepted test changes. All 16 orbital/map-view color textures are 4096x2048; solid-body ground albedo tiles are 1024 square. Lukas/Tavool cloud maps are 4096x2048. The last resolution pass resampled existing patterns; it did not invent new geographic detail.

## Known issue

Lukas pine/oak tree flicker remains unresolved and is deferred. Tree settings are preserved from the earlier pre-regression baseline. No claim that this release fixes tree flicker.

Dry below-zero basins on oceanless worlds are intentional where retained. Bub and Ixia were raised during testing; old landed vessels from earlier builds may need fresh placement. Dense scatter and 4K textures increase graphics memory/workload.

## Validation and credits

User accepted the latest visuals. Static package checks cover config structure, local asset references, image readability, body/resource/science/biome coverage and ZIP integrity. Dependency assets and live KSP/ModuleManager results were not re-tested by the packaging script. See Documentation/FINAL_AUDIT_v1.0.4 source-map test.json and RELEASE_NOTES.md.

Promised Worlds supplies the underlying system and referenced cloud detail assets. Kopernicus, ModuleManager, Parallax Continued, Parallax Stock Scatter Textures, Scatterer, EVE and CRP supply their respective functionality/assets. These dependencies retain their own licenses and authorship. Newly generated surface albedos used the built-in imagegen tool; prompts and historical records are included. This preparation does not assign a new license or change the provenance of pre-existing project assets.

Latest source-map repair details in RELEASE_NOTES.md.

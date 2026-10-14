# v0.20.29 package audit and release test

Ixia texture and scatter accepted and unchanged. Terrain offset raised from -4300 to +200 m, lifting all terrain by 4500 m. Highlands alone receive feathered spherical relief (roughly 20/10/5 km wavelengths), up to about 3 km modification, without hard clipping. Heightmap exported at 16 bits. Basins, plains and poles keep their normalized height patterns. New cache path Ixia_v02029.bin requests a fresh scaled mesh. Predicted minimum +200 m. Fresh vessel placement required after uplift; old landed vessels can be underground.

Resource audit: all 16 configured bodies have Ore/Water/MetallicOre coverage, 51 unique overrides total. CRP resources gated; all abundance/presence bounds valid. Tavool has zero crustal deposits because it has no solid surface. Resource files are byte-identical to v0.20.28. No claim of coverage for every optional mod resource or harvesting chain. Upstream Tuun/Puf and stock bodies are supplied by dependencies and not owned by this package.

Science audit: all configured bodies have valid relevant science multipliers and altitude thresholds. Nine bodies gain custom stock experiment results, with exact biome IDs and appropriate landed/splashed/flying/orbital situations. Verda's malformed inline results converted to multiline without rewriting their text. No stock experiment definitions, situation masks, rewards or caps changed.

Biome audit: all 15 solid-body maps resolve to declared colors and all declared biomes have pixels. Verda's absent TwilightBasins restored to the lowest quarter of the existing TerminatorRidges map region; terrain/material unchanged. Existing biome IDs and multipliers preserved. Detailed per-body results in PACKAGE_AUDIT_v0.20.29.json.

Static audit passes, but installed ModuleManager results, scanner concentrations, actual science collection and terrain/scaled-space consistency still require the next in-game test. Before release: verify Ixia basins/poles/highlands, representative orbital and surface science, Lukas water science and CRP/stock resource scans in a disposable save. Lukas tree flicker remains a known deferred issue. No handoff bundle requested.

Schema references: https://kopernicuswiki.org/Syntax/Properties/ScienceValues and https://kopernicuswiki.github.io/main/Properties/Biome.html

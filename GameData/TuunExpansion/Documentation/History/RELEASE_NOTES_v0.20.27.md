# v0.20.27 Bub altitude correction

Bub's VertexHeightMap offset changes from -2100 to +200 m: a uniform +2300 m uplift. Deformity remains 5200 m. Heightmap pixels, crater/ridge layout, slopes, textures, scatter, resources and other bodies are unchanged. Predicted heightmap elevations are +200 to +5400 m. This supersedes v0.20.26's decision to preserve the old terrain offset after the user's altitude feedback.

New cache path TuunExpansion/Cache/Bub_v02027.bin forces Kopernicus to generate a scaled mesh for the revised terrain instead of using Bub.bin. The old bundled cache is retained but unreferenced by Bub. Initial loading may take longer. Replace the TuunExpansion folder in GameData with this full build, keeping dependencies. Test with a fresh vessel/position; previously landed vessels may be beneath the raised terrain.

Static checks verify a uniform uplift and unchanged heightmap, materials, scatter and resources. In-game altitude, surface/scaled-space consistency and vessel placement require testing. No handoff bundle.

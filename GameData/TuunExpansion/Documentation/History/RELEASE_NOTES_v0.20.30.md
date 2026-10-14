# v0.20.30 texture resolution test

The ten remaining 2048x1024 global color maps are now 4096x2048: Arktane, Bub, Dot, Ixia, Kol, Lukas, Raga, Skab, Tom and Vez. These are the active space/map-view textures referenced by each body's OnDemand configuration. Existing six 4K global maps unchanged.

Lukas and Tavool cloud maps upgraded from 1024x512 to 4096x2048, preserving RGBA cloud coverage. Lukas ground albedo textures already were 1024x1024 and remain unchanged. Its four detail normal maps and influence/occlusion/displacement maps now also are 1024x1024; normal vectors renormalized after resizing.

This is a resolution pass using bicubic filtering, not newly authored high-frequency detail. Existing geography and cloud patterns preserved; no changes to terrain, biome classifications, science, resources or scatter. Global/cloud filtering wraps longitude. Image modes preserved. Exact upgraded asset list and round-trip differences in TEXTURE_RESOLUTION_AUDIT_v0.20.30.json.

Higher-resolution textures use more graphics memory. Replace TuunExpansion in GameData with this full build, keep dependencies and restart KSP. Check orbital/map colors, cloud coverage and Lukas ground shading. Carry forward the v0.20.29 Ixia terrain/science/resource release tests; they still require acceptance. Lukas tree flicker remains deferred. No handoff bundle.

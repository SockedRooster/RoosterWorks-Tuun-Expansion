# v1.0.4 source color-map repair TEST

**Promised Worlds is required.**

Ixia, Skab, Arktane and Lukas: reconstruct the discontinuous source-map longitude region using imagegen edits, preserving the original map outside the 192-pixel band on either side of the join (18.75% of source longitude). Feather repaired strips into unmodified source pixels. Repaired 2048x1024 sources rebuilt as wrapped 4096x2048 exports. Crater/basin/coast details within the repaired region change; biome classification and physical terrain do not.

Based on accepted v1.0.0 gameplay content. Restores original release heightmaps and terrain-shaped orbital meshes rather than retaining the earlier seam-height/spherical-mesh diagnostics. Neutral orbital normals retained to avoid inherited template shading. Surface tiles, heightmap/biome data, scatter, clouds, resources and science unchanged from v1.0.0. Original release cache references retained because geometry matches that release.

Install by replacing TuunExpansion and restarting KSP. Test four orbital views and globe rotations through the repaired longitude region. Visual source checks and archive checks passed; removal of the reported runtime band still requires in-game confirmation. Lukas tree flicker deferred. This is a test, not a promoted release.

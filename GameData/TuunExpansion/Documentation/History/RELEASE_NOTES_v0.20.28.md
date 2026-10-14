# v0.20.28 Ixia texture and scatter test

Ixia is the body interpreted from the user's Ilixia request; no separate Ilixia body exists in this package.

New 1024-square muted violet-gray frosted regolith texture, wrapped detail normal, neutral influence, full occlusion brightness and zero displacement. All four ground material tiers use the new tile. Detail bump reduced from 1.16 to 0.65. Existing terrain geometry, heightmap, global color map, atmosphere, biomes, cache and resources are unchanged.

IxiaRocks uses accepted Skab/Kol density settings: spawnChance 1, populationMultiplier 16, scales 0.20 to 1.00, cutoff 0.15, normal deviance 0.35, render caps 4320/12000/28800. Rocks share the new ground texture/normal with neutral tint. Original seed 907, slab meshes, 300 m range and 75/150 m LOD transitions preserved. Appearance, actual coverage and performance require in-game testing.

Bub v0.20.27 altitude correction accepted by the user and preserved. All other body files unchanged. Replace the TuunExpansion folder under GameData with this full build while retaining dependencies. No handoff bundle.

Texture generated with the built-in imagegen tool; full prompt saved alongside the new texture assets.

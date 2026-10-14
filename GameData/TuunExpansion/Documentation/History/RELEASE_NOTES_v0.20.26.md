# v0.20.26 Bub surface test

New 1024-square dusty warm-gray regolith albedo and wrapped detail normal, shared by ground and rocks. Neutral influence, full occlusion brightness, zero displacement. Bub terrain geometry, heightmap, global maps, body config and cache unchanged.

BubRocks now uses the accepted Skab/Kol density settings. BubBoulders adds independently seeded, occasional larger Dres rocks with three mesh tiers and a 900 m draw range. Positions are reproducibly random. Collision level 2 requests boulder collision under the installed Parallax collision settings. Actual density, scale, collisions and performance require in-game testing.

Adds CRP-gated Minerals, RareMetals and Substrate crust distributions. Existing Ore, Water and MetallicOre preserved. These are scanner/harvester resources; visual rocks are not separate mineable parts. Compatible harvesting equipment is required.

Skab and Kol accepted by the user. All other bodies preserved byte-for-byte. Install the TuunExpansion folder over the previous test install under GameData, retaining dependencies. No handoff bundle requested.

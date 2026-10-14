# TuunExpansion resource audit — v0.20.23

All 15 configured solid worlds now have explicit Ore, Water and MetallicOre distributions. Tavool has zero surface deposits. Values below are design ranges in percent, not guaranteed scan results. CRP resources are conditional on CommunityResourcePack; harvesting also requires suitable parts.

| Body | Ore min–max % | Water chance; min–max % | MetallicOre chance; min–max % |
|---|---:|---:|---:|
| Arktane | 1.2–5.5 | 100%; 1.5–8 | 85%; 0.4–3.6 |
| Aven | 1.2–6.2 | 100%; 1.5–8.0 | 70%; 0.3–2.8 |
| Bub | 0.8–4.5 | 35%; 0.05–0.8 | 85%; 0.4–3.8 |
| Dot | 0.6–3 | 18%; 0.02–0.35 | 90%; 0.6–4.5 |
| Flot | 2.5–9.0 | 25%; 0.05–0.7 | 100%; 1.8–7.5 |
| Hurr | 1.0–5.5 | 18%; 0.05–0.35 | 82%; 0.4–3.2 |
| Ixia | 0.8–4.8 | 100%; 1.8–8 | 80%; 0.3–3 |
| Kol | 0.7–4.2 | 100%; 2–9 | 65%; 0.15–1.8 |
| Lukas | 1–5.8 | 100%; 2–9 | 75%; 0.3–2.8 |
| Raga | 1.8–7.0 | 55%; 0.1–2.0 | 100%; 1.0–5.5 |
| Rem | 0.6–3.4 | 62%; 0.2–2.0 | 58%; 0.15–1.8 |
| Skab | 1.5–6.5 | 45%; 0.1–1.2 | 100%; 1–5.5 |
| Tavool | 0–0 | 0%; 0–0 | 0%; 0–0 |
| Tom | 1.0–6.0 | 38%; 0.08–1.1 | 90%; 0.5–4.2 |
| Verda | 1.5–9 | 100%; 0.2–4.5 | 85%; 0.4–3.8 |
| Vez | 0.8–4.5 | 90%; 0.8–5 | 75%; 0.25–2.5 |

Changes: added 24 definitions across Bub/Lukas/Dot/Vez/Arktane/Skab/Kol/Ixia; normalized two Verda nodes without changing their numeric settings; set Tavool crustal distributions to zero. Other existing balances retained.

This pass covers the three resources already supported by this expansion. It does not add atmospheric/oceanic harvesting, new resource definitions, converters, or full Kerbalism/MKS/Rational Resources compatibility. External mods may override these distributions. The installed ModuleManager result and in-game scans must be checked.

Resource data depends on save seed, biome and resource settings; non-100 presence chance can yield no deposit. Planetary definitions override global defaults, so previous lack of explicit coverage did not necessarily mean a world was resource-free. See the maintainer documentation: https://github.com/KSPModStewards/SCANsat/wiki/Stock-Resource-Scanning

For validation, use a disposable test save with the intended mod stack; orbital and surface resource scans remain necessary. Preserve the main save and its scan state. No save cache was edited by this build.

from pathlib import Path
import re,zipfile,hashlib
root=Path(__file__).resolve().parent.parent
game=root/'GameData';assert (game/'TuunExpansion').is_dir()
for f in game.rglob('*.cfg'):
    text=re.sub(r'//[^\r\n]*','',f.read_text(encoding='utf-8-sig'));depth=0
    for c in text:
        depth+=(c=='{')-(c=='}');assert depth>=0,f
    assert depth==0,f
    for a in re.findall(r'=\s*(TuunExpansion/[^\s{}]+)',text):
        if a.lower().endswith(('.png','.dds','.mu')):assert (game/a).is_file(),a
archive=root/'TuunExpansion_v1.0.4_GameData.zip'
assert not archive.exists(),'Move the existing runtime ZIP before repackaging.'
files=[f for f in game.rglob('*') if f.is_file()]
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED) as z:
    for f in files:z.write(f,f.relative_to(root).as_posix())
with zipfile.ZipFile(archive) as z:
    assert z.testzip() is None
    for f in files:assert hashlib.sha256(z.read(f.relative_to(root).as_posix())).digest()==hashlib.sha256(f.read_bytes()).digest()
print('Verified runtime ZIP:',archive.name,'files:',len(files))

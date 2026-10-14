const fs=require('fs');
const path=require('path');
const sharp=require('sharp');
const dir=path.join(__dirname,'../Source/Maps');
(async()=>{
 const sources=JSON.parse(fs.readFileSync(path.join(dir,'generated-patches.json'),'utf8'));
 for(const b of ['Ixia','Skab','Arktane','Lukas']){
  const original=await sharp(path.join(dir,b+'_Color_Original.png')).removeAlpha().raw().toBuffer();
  const patch=await sharp(path.join(dir,sources[b])).resize(384,1024,{fit:'fill'}).removeAlpha().raw().toBuffer();
  const out=Buffer.from(original);
  // Composite only the seam-strip repair, tapering into preserved source pixels.
  for(let y=0;y<1024;y++)for(let x=0;x<384;x++){
   const distance=Math.min(x,383-x);
   const t=Math.min(1,distance/48);const weight=t*t*(3-2*t);
   const ox=x<192?1856+x:x-192;
   for(let c=0;c<3;c++){
    const i=(y*2048+ox)*3+c,j=(y*384+x)*3+c;
    out[i]=Math.round(original[i]*(1-weight)+patch[j]*weight);
   }
  }
  const source=path.join(dir,b+'_Color_Repaired_2K.png');
  await sharp(out,{raw:{width:2048,height:1024,channels:3}}).png().toFile(source);
  const left=await sharp(source).extract({left:2040,top:0,width:8,height:1024}).toBuffer();
  const right=await sharp(source).extract({left:0,top:0,width:8,height:1024}).toBuffer();
  const canvas=await sharp({create:{width:2064,height:1024,channels:3,background:'black'}}).composite([{input:left,left:0,top:0},{input:source,left:8,top:0},{input:right,left:2056,top:0}]).png().toBuffer();
  await sharp(canvas).resize(4128,2048).extract({left:16,top:0,width:4096,height:2048}).png().toFile(path.join(dir,b+'_Color_Repaired_4K.png'));
  const joined=Buffer.alloc(384*1024*3);
  for(let y=0;y<1024;y++)for(let x=0;x<384;x++){
   const ox=x<192?1856+x:x-192;
   out.copy(joined,(y*384+x)*3,(y*2048+ox)*3,(y*2048+ox)*3+3);
  }
  await sharp(joined,{raw:{width:384,height:1024,channels:3}}).png().toFile(path.join(dir,b+'_Join_Repaired.png'));
 }
 for(const b of ['Ixia','Skab','Arktane','Lukas']) fs.copyFileSync(path.join(dir,b+'_Color_Repaired_4K.png'),path.join(__dirname,'../GameData/TuunExpansion/PluginData',b+'_Color.png')); console.log('Source repairs rebuilt and staged into GameData.');
})();

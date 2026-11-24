(()=>{var bl="wedding-lang";function vf(){let i=null,e=null;try{i=(location.search.match(/[?&]lang=(ko|en)\b/)||[])[1]||null}catch{}if(i)return i;try{e=localStorage.getItem(bl)}catch{}return e==="ko"||e==="en"?e:(navigator.languages&&navigator.languages[0]||navigator.language||"").toLowerCase().indexOf("ko")===0?"ko":"en"}var yf=window.VILLAGE_LANG==="ko"||window.VILLAGE_LANG==="en"?window.VILLAGE_LANG:vf(),Dn=yf==="ko",C=(i,e)=>Dn?i:e;function wl(i){let e=!1;try{localStorage.setItem(bl,i),e=localStorage.getItem(bl)===i}catch{}let t=new URL(location.href);e?t.searchParams.delete("lang"):t.searchParams.set("lang",i),t.href===location.href?location.reload():location.replace(t.href)}var $i=i=>i!==null&&typeof i=="object"&&!Array.isArray(i),_f=new Set(["banner"]);function Sl(i,e){if(!(!$i(i)||!$i(e)))for(let t of Object.keys(e)){let n=e[t],r=i[t];if(n!=null&&!(r===void 0&&!_f.has(t)))if(Array.isArray(n)){if(!Array.isArray(r))continue;n.some($i)?n.forEach((s,a)=>{$i(s)&&$i(r[a])&&Sl(r[a],s)}):r.length&&(i[t]=n.slice())}else $i(n)?$i(r)&&Sl(r,n):r!==""&&(i[t]=n)}}var Ls=window.WEDDING,In=window.WEDDING_EN,Iu,Du,xf=!!Ls&&(((Iu=Ls.groom)==null?void 0:Iu.name)!=="\uAE40\uC2E0\uB791"||((Du=Ls.bride)==null?void 0:Du.name)!=="\uAE40\uC2E0\uBD80"),Fu,Uu,Mf=!((Fu=In==null?void 0:In.groom)!=null&&Fu.name)||!((Uu=In==null?void 0:In.bride)!=null&&Uu.name)||In.groom.name==="Groom Kim"||In.bride.name==="Bride Kim";!Dn&&Ls&&In&&!(xf&&Mf)&&Sl(Ls,In);function Ef(i){let e=1779033703^i.length;for(let n=0;n<i.length;n++)e=Math.imul(e^i.charCodeAt(n),3432918353),e=e<<13|e>>>19;let t=e>>>0;return()=>{t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}var bf='"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "Android Emoji", sans-serif',Nu=[["#9CD3F2","#E6F5FF"],["#FFB88C","#FFE7C9"],["#F7C4D0","#FFF3F6"],["#2B2D5C","#6D5C9E"],["#C7E8F7","#FFECD8"]],Tl=["#8FB8DE","#F4B8C0","#F7D58B","#A8D08D","#C9B3E6","#F9C59E","#E88A98","#7FC8C2"],Al=["#5A3A2A","#3A2A24","#7A5238","#1E1A22","#C98A5B"],Sf={wedding:[{kind:"park",sky:0,who:"wedding",props:["\u{1F338}","\u{1F490}"]},{kind:"room",sky:2,who:"bride",props:["\u{1F490}","\u2728"]},{kind:"park",sky:4,who:"wedding",props:["\u{1F49E}"]},{kind:"park",sky:2,who:"wedding",props:["\u{1F338}","\u{1F338}","\u{1F338}"]},{kind:"room",sky:2,who:"bride",props:["\u{1F457}","\u2728"]},{kind:"room",sky:0,who:"groom",props:["\u{1F3A9}","\u{1F942}"]},{kind:"park",sky:0,who:"wedding",props:["\u{1F497}"]},{kind:"hills",sky:1,who:"wedding",props:["\u{1F33B}"]},{kind:"room",sky:2,who:"wedding",props:["\u{1F48D}","\u2728"]},{kind:"park",sky:0,who:"wedding",props:["\u{1F337}","\u{1F337}"]},{kind:"room",sky:2,who:"bride",props:["\u{1F54A}\uFE0F"]},{kind:"park",sky:4,who:"wedding",props:["\u{1F388}","\u{1F388}"]},{kind:"park",sky:1,who:"wedding",props:["\u{1F389}","\u{1F38A}"]},{kind:"hills",sky:1,who:"wedding",props:["\u{1F492}","\u{1F338}"]}],childhood:[{kind:"room",sky:4,who:"baby",props:["\u{1F382}","\u{1F388}"]},{kind:"park",sky:0,who:"kid",props:["\u{1F68C}","\u{1F33B}"]},{kind:"park",sky:0,who:"kid-balloon",props:["\u{1F333}"]},{kind:"room",sky:4,who:"kid",props:["\u{1F601}","\u{1F9B7}"]},{kind:"park",sky:0,who:"kid",props:["\u{1F6B2}"]},{kind:"sea",sky:0,who:"kid",props:["\u{1F3D6}\uFE0F","\u{1FAA3}"]},{kind:"room",sky:1,who:"kidparent",props:["\u{1F9F6}","\u{1F4FA}"]},{kind:"city",sky:4,who:"kidparent",props:["\u{1F3EB}","\u{1F392}"]},{kind:"sea",sky:0,who:"kid",props:["\u{1F3CA}","\u2600\uFE0F"]},{kind:"snow",sky:4,who:"kid",props:["\u26C4","\u2744\uFE0F"]}],dating:[{kind:"cafe",sky:4,who:"couple",props:["\u2615","\u{1F370}"]},{kind:"city",sky:3,who:"couple",props:["\u{1F3AC}","\u{1F37F}"]},{kind:"park",sky:0,who:"couple",props:["\u{1F6B2}","\u{1F309}"]},{kind:"snow",sky:4,who:"couple",props:["\u2744\uFE0F","\u2603\uFE0F"]},{kind:"city",sky:3,who:"couple",props:["\u{1F3EE}","\u{1F362}"]},{kind:"park",sky:2,who:"couple",props:["\u{1F338}","\u{1F338}"]},{kind:"room",sky:3,who:"couple",props:["\u{1F382}","\u{1F56F}\uFE0F"]},{kind:"park",sky:1,who:"couple",props:["\u{1F3A1}"]},{kind:"city",sky:3,who:"couple",props:["\u{1F319}","\u2B50"]},{kind:"room",sky:1,who:"couple",props:["\u{1F35D}","\u{1F957}"]},{kind:"room",sky:3,who:"couple",props:["\u{1F384}","\u{1F381}"]},{kind:"park",sky:3,who:"propose",props:["\u2728","\u{1F386}"]}],travel:[{kind:"sea",sky:0,who:"couple",props:["\u{1F334}","\u{1F34A}"]},{kind:"city",sky:3,who:"couple",props:["\u{1F5FC}","\u{1F35C}"]},{kind:"city",sky:1,who:"couple",props:["\u{1F5FC}","\u{1F950}"]},{kind:"mountain",sky:0,who:"couple",props:["\u{1F3D4}\uFE0F","\u{1F6A1}"]},{kind:"city",sky:3,who:"couple",props:["\u{1F3EE}","\u{1F364}"]},{kind:"sea",sky:1,who:"couple",props:["\u{1F3C4}","\u{1F30A}"]},{kind:"hills",sky:0,who:"couple",props:["\u{1F682}","\u{1F9F3}"]},{kind:"hills",sky:4,who:"couple",props:["\u2708\uFE0F","\u{1F5FA}\uFE0F"]}],family:[{kind:"room",sky:4,who:"family",n:4,props:["\u{1F3E1}"]},{kind:"park",sky:0,who:"family",n:4,props:["\u{1F333}"]},{kind:"room",sky:1,who:"family",n:6,props:["\u{1F37D}\uFE0F","\u{1F942}"]},{kind:"park",sky:2,who:"family",n:3,props:["\u{1F337}"]},{kind:"park",sky:0,who:"couple",props:["\u{1F436}","\u{1F9B4}"]},{kind:"park",sky:4,who:"family",n:7,props:["\u{1F4F8}","\u{1F389}"]}]},Ou=["park","hills","room","sea","city"],Bu=["couple","wedding","kid","family"];function jn(i,e,t,n,r,s){s=Math.min(s,n/2,r/2),i.beginPath(),i.moveTo(e+s,t),i.arcTo(e+n,t,e+n,t+r,s),i.arcTo(e+n,t+r,e,t+r,s),i.arcTo(e,t+r,e,t,s),i.arcTo(e,t,e+n,t,s),i.closePath()}function ot(i,e,t,n,r){i.fillStyle=r,i.beginPath(),i.arc(e,t,n,0,Math.PI*2),i.fill()}function qn(i,e,t,n,r,s=1){i.save(),i.globalAlpha=s,i.font=`${r}px ${bf}`,i.textAlign="center",i.textBaseline="middle",i.fillText(e,t,n),i.restore()}function wf(i,e,t,n,r,s){let[a,o]=Nu[r]||Nu[0],l=r===3,c=n==="room"||n==="cafe",h=t*(n==="sea"?.56:.62);if(c){let f=i.createLinearGradient(0,0,0,t);f.addColorStop(0,n==="cafe"?"#E7C6A4":l?"#4B3F57":"#FFF4E8"),f.addColorStop(1,n==="cafe"?"#C99B74":l?"#3A3046":"#FBE3D2"),i.fillStyle=f,i.fillRect(0,0,e,t);let v=e*.56,m=t*.12,y=e*.32,g=t*.32;i.fillStyle="#FFFFFF",jn(i,v-8,m-8,y+16,g+16,10),i.fill();let _=i.createLinearGradient(0,m,0,m+g);if(_.addColorStop(0,a),_.addColorStop(1,o),i.fillStyle=_,i.fillRect(v,m,y,g),i.fillStyle="#FFFFFF",i.fillRect(v+y/2-3,m,6,g),i.fillRect(v,m+g/2-3,y,6),l)for(let T=0;T<12;T++)ot(i,v+s()*y,m+s()*g*.7,1.5+s()*1.5,"#FFF8C9");else ot(i,v+y*.72,m+g*.3,y*.1,"#FFE28A");i.fillStyle=n==="cafe"?"rgba(255,255,255,.35)":"rgba(244,184,192,.8)",jn(i,v-22,m-14,26,g+28,12),i.fill(),jn(i,v+y-4,m-14,26,g+28,12),i.fill();let E=t*.72;i.fillStyle=n==="cafe"?"#8F6B4E":"#E6C39A",i.fillRect(0,E,e,t-E),i.fillStyle="rgba(120,80,50,.15)";for(let T=0;T<7;T++)i.fillRect(0,E+T*((t-E)/7),e,2);if(n==="cafe"){for(let T=0;T<9;T++)ot(i,e*.08+T*e*.105,t*.07+Math.sin(T*1.3)*10,5,"#FFF1B8");i.fillStyle="rgba(255,255,255,.5)",jn(i,e*.06,t*.22,e*.36,8,4),i.fill(),qn(i,"\u{1FAB4}",e*.12,t*.2,e*.08),qn(i,"\u{1F4DA}",e*.32,t*.2,e*.07),i.fillStyle="#B98A66",i.beginPath(),i.ellipse(e*.5,t*.86,e*.3,t*.06,0,0,Math.PI*2),i.fill()}else i.fillStyle="rgba(255,255,255,.7)",jn(i,e*.1,t*.16,e*.2,t*.17,8),i.fill(),qn(i,l?"\u{1F319}":"\u{1F5BC}\uFE0F",e*.2,t*.25,e*.08),qn(i,"\u{1FAB4}",e*.1,t*.7,e*.11);return{horizon:t*.74,indoor:!0}}let u=i.createLinearGradient(0,0,0,h);if(u.addColorStop(0,a),u.addColorStop(1,o),i.fillStyle=u,i.fillRect(0,0,e,h+2),l){for(let f=0;f<40;f++)ot(i,s()*e,s()*h*.85,.8+s()*1.6,"rgba(255,248,210,.9)");ot(i,e*.78,t*.14,e*.07,"#FFF3C4")}else{let f=e*(.15+s()*.7),v=t*(.1+s()*.12),m=i.createRadialGradient(f,v,0,f,v,e*.28);m.addColorStop(0,"rgba(255,245,200,.9)"),m.addColorStop(1,"rgba(255,245,200,0)"),i.fillStyle=m,i.fillRect(0,0,e,h),ot(i,f,v,e*.06,r===1?"#FFD27A":"#FFF0A8");for(let y=0;y<3;y++){let g=s()*e,_=t*(.08+s()*.25),E=e*(.05+s()*.04);i.fillStyle="rgba(255,255,255,.85)";for(let T=0;T<4;T++)i.beginPath(),i.arc(g+T*E*.9-E*1.3,_+T%2*E*.3,E*(.7+T%3*.2),0,7),i.fill()}}if(n==="sea"){let f=i.createLinearGradient(0,h,0,t*.8);f.addColorStop(0,l?"#2F4F7A":"#5FB8E6"),f.addColorStop(1,l?"#243F63":"#8AD3F2"),i.fillStyle=f,i.fillRect(0,h,e,t*.8-h),i.strokeStyle="rgba(255,255,255,.55)",i.lineWidth=3,i.lineCap="round";for(let v=0;v<7;v++){let m=h+14+v*22+s()*8,y=s()*e;i.beginPath(),i.moveTo(y,m),i.lineTo(y+30+s()*50,m),i.stroke()}return i.fillStyle="#F6E3B8",i.beginPath(),i.moveTo(0,t*.8),i.quadraticCurveTo(e*.5,t*.74,e,t*.82),i.lineTo(e,t),i.lineTo(0,t),i.fill(),{horizon:t*.86}}if(n==="mountain")for(let f=0;f<4;f++){let v=e*(f*.33-.1)+s()*30,m=e*.45,y=t*(.28+s()*.1);i.fillStyle=f%2?"#8FA7C7":"#A9BFDC",i.beginPath(),i.moveTo(v-m/2,h),i.lineTo(v,h-y),i.lineTo(v+m/2,h),i.fill(),i.fillStyle="#FFFFFF",i.beginPath(),i.moveTo(v-m*.14,h-y*.68),i.lineTo(v,h-y),i.lineTo(v+m*.14,h-y*.68),i.lineTo(v+m*.05,h-y*.62),i.lineTo(v-m*.06,h-y*.64),i.fill()}if(n==="city"){for(let f=-10;f<e;f+=0){let v=40+s()*70,m=t*(.12+s()*.3);i.fillStyle=l?["#3B3550","#2E2A42","#46405D"][Math.floor(s()*3)]:["#D9D0E6","#CFC6DD","#E4DCEF"][Math.floor(s()*3)],i.fillRect(f,h-m,v,m+4),i.fillStyle=l?"#FFE9A8":"rgba(255,255,255,.7)";for(let y=h-m+10;y<h-12;y+=16)for(let g=f+7;g<f+v-10;g+=14)s()>.35&&i.fillRect(g,y,7,9);f+=v+6}i.fillStyle=l?"#4A4458":"#CFC3B6",i.fillRect(0,h,e,t-h),i.fillStyle="rgba(255,255,255,.5)";for(let f=10;f<e;f+=60)i.fillRect(f,h+(t-h)*.5,30,4);return{horizon:t*.86}}let d=n==="snow",p=d?["#F4F7FB","#EAF0F7","#FFFFFF"]:l?["#3F6B4A","#355C40","#4A7A55"]:["#9ED08A","#86C174","#B2DB9C"];i.fillStyle=p[0],i.fillRect(0,h,e,t-h);for(let f=0;f<3;f++)i.fillStyle=p[(f+1)%3],i.beginPath(),i.ellipse(e*(.2+f*.35)+s()*40,h+10+f*6,e*(.45+s()*.2),t*(.08+s()*.05),0,Math.PI,Math.PI*2),i.fill();for(let f=0;f<4;f++){let v=s()<.5?e*(.04+s()*.2):e*(.76+s()*.2),m=h+4+s()*10,y=e*(.05+s()*.03);i.fillStyle="#A47A5C",i.fillRect(v-y*.12,m-y*1.4,y*.24,y*1.4);let g=d?["#FFFFFF","#EEF3F8"]:n==="park"&&r===2?["#F9C9D2","#FCDCE3"]:["#7DB86C","#9ED08A"];ot(i,v,m-y*1.6,y*.75,g[0]),ot(i,v-y*.5,m-y*1.25,y*.55,g[1]),ot(i,v+y*.5,m-y*1.25,y*.55,g[1])}if(d)for(let f=0;f<60;f++)ot(i,s()*e,s()*t,1.5+s()*2.5,"rgba(255,255,255,.9)");else if(!l)for(let f=0;f<18;f++)ot(i,s()*e,h+16+s()*(t-h-30),3+s()*3,["#FFFFFF","#F4B8C0","#F7D58B","#FFB7A5"][f%4]);return{horizon:t*.88}}function Qt(i,e,t,n,r={}){let s="#FFE0C7",a=r.hair||Al[0],o=r.suit?"#2F2B33":r.dress?"#FFFFFF":r.outfit||Tl[0],l=t-2.95*n;if(i.lineCap="round",i.fillStyle="rgba(0,0,0,.12)",i.beginPath(),i.ellipse(e,t+n*.1,n*1.1,n*.22,0,0,Math.PI*2),i.fill(),r.veil&&(i.fillStyle="rgba(255,255,255,.7)",i.beginPath(),i.ellipse(e,l+n*.9,n*1.25,n*1.9,0,0,Math.PI*2),i.fill()),(r.long||r.dress)&&(i.fillStyle=a,jn(i,e-n*1.02,l-n*.4,n*2.04,n*1.9,n*.5),i.fill()),!r.dress){i.strokeStyle=r.suit?"#2F2B33":"#6B5B53",i.lineWidth=n*.36;for(let h of[-1,1])i.beginPath(),i.moveTo(e+h*n*.28,t-n*1),i.lineTo(e+h*n*.28,t-n*.15),i.stroke();i.fillStyle="#4A3B38";for(let h of[-1,1])i.beginPath(),i.ellipse(e+h*n*.3,t-n*.05,n*.26,n*.14,0,0,Math.PI*2),i.fill()}r.dress&&(i.fillStyle="#FFFFFF",i.beginPath(),i.moveTo(e-n*.5,t-n*1.5),i.lineTo(e+n*.5,t-n*1.5),i.quadraticCurveTo(e+n*1.3,t-n*.4,e+n*1.25,t),i.lineTo(e-n*1.25,t),i.quadraticCurveTo(e-n*1.3,t-n*.4,e-n*.5,t-n*1.5),i.fill(),i.fillStyle="#F4B8C0",jn(i,e-n*.55,t-n*1.55,n*1.1,n*.14,n*.07),i.fill()),i.fillStyle=o,jn(i,e-n*.65,t-n*2.05,n*1.3,n*1.25,n*.5),i.fill(),r.suit&&(i.fillStyle="#FFFFFF",i.beginPath(),i.moveTo(e-n*.2,t-n*2),i.lineTo(e+n*.2,t-n*2),i.lineTo(e,t-n*1.45),i.fill(),i.fillStyle="#1E1A22",i.beginPath(),i.moveTo(e,t-n*1.92),i.lineTo(e-n*.18,t-n*2.02),i.lineTo(e-n*.18,t-n*1.82),i.fill(),i.beginPath(),i.moveTo(e,t-n*1.92),i.lineTo(e+n*.18,t-n*2.02),i.lineTo(e+n*.18,t-n*1.82),i.fill(),ot(i,e-n*.42,t-n*1.85,n*.1,"#F4B8C0")),i.strokeStyle=r.dress?s:o,i.lineWidth=n*.3;let c=(h,u)=>{i.beginPath(),i.moveTo(e+h*n*.6,t-n*1.85),u?i.lineTo(e+h*n*1,t-n*2.7):i.lineTo(e+h*n*.82,t-n*1.1),i.stroke(),ot(i,u?e+h*n*1:e+h*n*.82,u?t-n*2.72:t-n*1.08,n*.17,s)};if(c(-1,r.waveL),c(1,r.wave),r.bouquet&&(i.fillStyle="#9CC08A",jn(i,e-n*.08,t-n*1.25,n*.16,n*.4,n*.05),i.fill(),["#F4B8C0","#FFFFFF","#F7D58B","#E88A98","#FFE3EA","#F4B8C0"].forEach((h,u)=>ot(i,e+Math.cos(u*1.05)*n*.22,t-n*1.35+Math.sin(u*1.05)*n*.18,n*.16,h)),ot(i,e,t-n*1.33,n*.16,"#E88A98")),ot(i,e,l,n,s),i.fillStyle=a,i.beginPath(),i.arc(e,l-n*.05,n*1.04,Math.PI*1.02,Math.PI*1.98),i.quadraticCurveTo(e+n*.5,l-n*.05,e+n*.25,l+n*.25),i.quadraticCurveTo(e-n*.2,l-n*.2,e-n*.6,l+n*.1),i.quadraticCurveTo(e-n*1,l-n*.05,e-n*1.04,l-n*.05),i.fill(),r.crown)for(let h=0;h<5;h++)ot(i,e-n*.6+h*n*.3,l-n*.98+Math.abs(h-2)*n*.1,n*.09,h%2?"#F4B8C0":"#FFFFFF");r.hat&&qn(i,r.hat,e,l-n*1,n*1.3);for(let h of[-1,1])ot(i,e+h*n*.33,l+n*.05,n*.12,"#2B2220"),ot(i,e+h*n*.33+n*.04,l,n*.04,"#FFFFFF"),ot(i,e+h*n*.6,l+n*.32,n*.15,"rgba(255,150,150,.55)");if(r.glasses){i.strokeStyle="#4A3B38",i.lineWidth=n*.06;for(let h of[-1,1])i.beginPath(),i.arc(e+h*n*.33,l+n*.05,n*.22,0,Math.PI*2),i.stroke()}i.strokeStyle="#2B2220",i.lineWidth=n*.07,i.beginPath(),i.arc(e,l+n*.4,n*.16,.15,Math.PI-.15),i.stroke(),r.balloon&&(i.strokeStyle="#B8A59B",i.lineWidth=1.5,i.beginPath(),i.moveTo(e+n*.82,t-n*1.08),i.lineTo(e+n*1.3,t-n*3.9),i.stroke(),ot(i,e+n*1.3,t-n*4.4,n*.55,r.balloon),ot(i,e+n*1.15,t-n*4.55,n*.14,"rgba(255,255,255,.6)"))}function Tf(i,e,t,n,r,s=2){let a=e/2,o=e*.085,l=()=>Tl[Math.floor(r()*Tl.length)],c=()=>Al[Math.floor(r()*Al.length)];if(n==="wedding")Qt(i,a-o*1.35,t,o,{suit:!0,hair:"#3A2A24",wave:r()<.4}),Qt(i,a+o*1.35,t,o,{dress:!0,veil:!0,crown:!0,bouquet:!0,hair:"#5A3A2A"});else if(n==="bride")Qt(i,a,t,o*1.15,{dress:!0,veil:!0,crown:!0,bouquet:!0,hair:"#5A3A2A",wave:r()<.5});else if(n==="groom")Qt(i,a,t,o*1.15,{suit:!0,hair:"#3A2A24",wave:!0});else if(n==="propose")Qt(i,a-o*1.3,t,o,{suit:!1,outfit:"#8FB8DE",hair:"#3A2A24",wave:!0}),Qt(i,a+o*1.3,t,o,{outfit:"#F4B8C0",hair:"#5A3A2A",long:!0,waveL:!0}),qn(i,"\u{1F48D}",a-o*.3,t-o*2.9,o*1.1);else if(n==="couple")Qt(i,a-o*1.3,t,o,{outfit:l(),hair:c(),wave:r()<.5}),Qt(i,a+o*1.3,t,o,{outfit:l(),hair:c(),long:!0,waveL:r()<.5});else if(n==="kid"||n==="kid-balloon")Qt(i,a,t,o*.75,{outfit:l(),hair:c(),long:r()<.5,wave:!0,balloon:n==="kid-balloon"?"#E88A98":null});else if(n==="baby")Qt(i,a,t,o*.6,{outfit:"#FFF3EA",hair:"#5A3A2A",hat:"\u{1F380}"});else if(n==="kidparent")Qt(i,a-o*.9,t,o,{outfit:l(),hair:c(),long:!0}),Qt(i,a+o*1,t,o*.7,{outfit:l(),hair:c(),wave:!0});else if(n==="family"){let h=Math.min(7,Math.max(3,s)),u=Math.min(o*2.1,e*.9/h);for(let d=0;d<h;d++){let p=a+(d-(h-1)/2)*u,f=d===0||h>4&&d===h-1,v=!f&&d>h-3&&h>3&&d%2===1;Qt(i,p,t,o*(v?.7:f?.95:1),{outfit:l(),hair:f?"#C8C2C0":c(),long:d%2===1,glasses:f,wave:d===h-1})}}}function zu(i,e,t=840){let n=i.id||"wedding",r=Sf[n],s=Ef(`${n}:${e}`),a=r&&r[e]||{kind:Ou[Math.floor(s()*Ou.length)],sky:Math.floor(s()*5),who:Bu[Math.floor(s()*Bu.length)],props:["\u2728"]},o=[1,4/3,3/4][e%3],l=Math.round(o>=1?t:t*o),c=Math.round(o>=1?t/o:t),h=document.createElement("canvas");h.width=l,h.height=c;let u=h.getContext("2d"),p=wf(u,l,c,a.kind,a.sky,s).horizon,f=a.props[0];f&&qn(u,f,l*(s()<.5?.15:.85),p-l*.36,l*.21,.95),Tf(u,l,p-6,a.who,s,a.n),a.props.slice(1).forEach((m,y)=>qn(u,m,l*(.12+y*.7+s()*.1),p-l*.06+s()*10,l*.12));for(let m=0;m<10;m++)ot(u,s()*l,s()*c*.6,1.2+s()*2,"rgba(255,255,255,.75)");if(n==="wedding"||n==="dating")for(let m=0;m<5;m++)qn(u,["\u{1F497}","\u2728","\u{1F338}"][m%3],s()*l,s()*c*.5,l*.035,.8);let v=u.createRadialGradient(l/2,c/2,l*.35,l/2,c/2,l*.85);return v.addColorStop(0,"rgba(0,0,0,0)"),v.addColorStop(1,"rgba(60,30,20,.22)"),u.fillStyle=v,u.fillRect(0,0,l,c),n==="childhood"&&(u.fillStyle="rgba(150,105,40,.2)",u.fillRect(0,0,l,c),u.strokeStyle="#FFFDF8",u.lineWidth=l*.035,u.strokeRect(0,0,l,c)),h}var Hu=C(["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]),Gu=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function $n(){return new Date(window.WEDDING.date)}var vi=i=>{try{return new Date(i.toLocaleString("en-US",{timeZone:"Asia/Seoul"}))}catch{return new Date(i.getTime()+(i.getTimezoneOffset()+540)*6e4)}},Cr=null,Cl=0;function Vu(){Cr=null;let i=location.hash.slice(1),e=i.match(/(?:^|&)now=([^&]+)/);if(e){let t=decodeURIComponent(e[1]),n=new Date(/[+Z]/.test(t.slice(10))?t:t+(t.length<=16?":00":"")+"+09:00");if(!isNaN(n)){Cr=n.getTime(),Cl=Date.now();return}}/(?:^|&)demo(?:&|$)/.test(i)&&(Cr=$n().getTime()-35*6e4,Cl=Date.now())}Vu();addEventListener("hashchange",Vu);function _i(){return Cr?new Date(Cr+(Date.now()-Cl)):new Date}var Wu=()=>!!Cr;function Zi(){let i=vi($n()),e=vi(_i()),t=Math.round((new Date(i.getFullYear(),i.getMonth(),i.getDate())-new Date(e.getFullYear(),e.getMonth(),e.getDate()))/864e5);return t>0?"before":t===0?"today":"after"}function wa(){let i=window.WEDDING.schedule||[],e=vi($n()),t=vi(_i()),n=t.toDateString()===e.toDateString(),r=t.getHours()*60+t.getMinutes(),s=l=>{let[c,h]=String(l.time).split(":").map(Number);return c*60+(h||0)},a=-1,o=!1;return n&&i.length&&(i.forEach((l,c)=>{let h=s(l),u=i[c+1]?s(i[c+1]):h+90;r>=h&&r<u&&(a=c)}),o=r>=s(i[i.length-1])+90),{sameDay:n,idx:a,item:i[a]||null,next:i[a+1]||null,done:o}}function $t(i=$n()){let e=vi(i),t=e.getHours(),n=e.getMinutes(),r=t%12===0?12:t%12;return{date:C(`${e.getFullYear()}\uB144 ${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C ${Hu[e.getDay()]}\uC694\uC77C`,`${Hu[e.getDay()]}, ${Gu[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`),time:C(`${t<12?"\uC624\uC804":"\uC624\uD6C4"} ${r}\uC2DC${n?" "+n+"\uBD84":""}`,`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`),k:e}}function xi(){let i=$t().k,e=vi(_i()),t=new Date(i.getFullYear(),i.getMonth(),i.getDate()),n=new Date(e.getFullYear(),e.getMonth(),e.getDate()),r=Math.round((t-n)/864e5);return r>0?`D-${r}`:r===0?C("D-DAY","D-Day"):`D+${-r}`}function Ll(i){let e=vi(new Date(i));if(isNaN(e))return"";let t=vi(_i());return e.toDateString()===t.toDateString()?C("\uC624\uB298","Today"):C(`${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C`,`${Gu[e.getMonth()]} ${e.getDate()}`)}function wt(i=10){var e;try{(e=navigator.vibrate)==null||e.call(navigator,i)}catch{}}var Ps="wedding-letters-v2",Pl="wedding-letters-remote",Ta=()=>window.WEDDING||{},yi=()=>!!Ta().lettersSheet,Af=()=>String(Ta().lettersSite||"main"),Xu=i=>{try{let e=JSON.parse(localStorage.getItem(i)||"[]");return Array.isArray(e)?e:[]}catch{return[]}},Lr=(i,e)=>{try{localStorage.setItem(i,JSON.stringify(e))}catch{}},Rf=()=>crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{let e=Math.random()*16|0;return(i==="x"?e:e&3|8).toString(16)});function Is(){return Xu(Ps)}var Sa=null;function ku(){if(Sa)return Sa;let i=Date.now();return Sa=(Ta().letters||[]).map((e,t)=>{var n;return{id:`seed-${t}`,name:e.name,side:e.side||"",message:e.message,time:e.time||new Date(i-((n=e.daysAgo)!=null?n:t)*864e5-t*37%23*6e4).toISOString(),seed:!0}}),Sa}var ut={list:yi()?Xu(Pl):[],at:0,loading:null,error:null,ok:!1},Aa=()=>({remote:yi(),loading:!!ut.loading,error:ut.error,loaded:ut.ok,at:ut.at}),Cf=()=>{try{dispatchEvent(new CustomEvent("wedding:letters"))}catch{}};async function Il(i,e,t){let n=new URL(Ta().lettersSheet);n.searchParams.set("site",Af()),Object.entries(e||{}).forEach(([a,o])=>n.searchParams.set(a,o));let r=typeof AbortController=="function"?new AbortController:null,s=setTimeout(()=>r==null?void 0:r.abort(),15e3);try{let o=await(await fetch(n.toString(),{method:i,redirect:"follow",signal:r==null?void 0:r.signal,...t?{body:JSON.stringify(t),headers:{"Content-Type":"text/plain;charset=utf-8"}}:{}})).json();if(!o||o.ok!==!0)throw new Error((o==null?void 0:o.error)||"bad response");return o}finally{clearTimeout(s)}}async function Lf(){let i=Is();if(i.some(e=>e.pending)){for(let e of i)if(e.pending)try{await Il("POST",{},{id:e.id,name:e.name,side:e.side,message:e.message,time:e.time}),delete e.pending}catch{break}Lr(Ps,i)}}function Ds({force:i=!1}={}){return yi()?ut.loading?ut.loading:!i&&ut.ok&&Date.now()-ut.at<1e4?Promise.resolve(Yi()):(ut.loading=(async()=>{try{await Lf();let e=await Il("GET",{action:"list",t:Date.now()});ut.list=(e.letters||[]).filter(s=>s&&s.message).map(s=>({id:String(s.id||""),name:String(s.name||""),side:String(s.side||""),message:String(s.message||""),time:s.time||""})),ut.at=Date.now(),ut.ok=!0,ut.error=null,Lr(Pl,ut.list.slice(0,300));let t=new Set(ut.list.map(s=>s.id)),n=Is(),r=!1;n.forEach(s=>{s.pending&&t.has(s.id)&&(delete s.pending,r=!0)}),r&&Lr(Ps,n)}catch(e){ut.error=(e==null?void 0:e.message)||String(e)}finally{ut.loading=null,Cf()}return Yi()})(),ut.loading):Promise.resolve(Yi())}function Yi(){let i=Is().map(s=>({...s,mine:!0}));if(!yi())return[...i,...ku()];let e=new Set(i.map(s=>s.id).filter(Boolean)),t=new Set(ut.list.map(s=>s.id)),n=ut.list.map(s=>e.has(s.id)?{...s,mine:!0}:s);return[...i.filter(s=>!t.has(s.id)),...n,...ku()]}async function ju(i){let e={id:Rf(),name:i.name,side:i.side||"",message:i.message,time:i.time||new Date().toISOString()},t=Is();if(t.unshift(yi()?{...e,pending:!0}:e),Lr(Ps,t.slice(0,100)),!yi())return{ok:!0,letter:e,sent:!1};try{await Il("POST",{},e);let n=Is(),r=n.find(s=>s.id===e.id);return r&&(delete r.pending,Lr(Ps,n)),ut.list.unshift(e),Lr(Pl,ut.list.slice(0,300)),{ok:!0,letter:e,sent:!0}}catch(n){return{ok:!1,letter:e,sent:!1,error:(n==null?void 0:n.message)||String(n)}}}function Pr(){var t;let i=window.WEDDING;return(((t=i.museum)==null?void 0:t.themes)||[]).map(n=>{var s;let r;return Array.isArray(n.photos)&&n.photos.length?r=n.photos.map((a,o)=>{var l;return typeof a=="string"?{src:a,caption:((l=n.captions)==null?void 0:l[o])||""}:a}):i.demoPhotos||n.demo?r=Array.from({length:n.count||((s=n.captions)==null?void 0:s.length)||0},(a,o)=>{var l;return{src:`demo:${n.id}:${o}`,caption:((l=n.captions)==null?void 0:l[o])||""}}):r=Array.from({length:n.count||0},(a,o)=>{var l;return{src:`${n.folder}/${o+1}.${n.ext||"jpg"}`,caption:((l=n.captions)==null?void 0:l[o])||""}}),r.forEach((a,o)=>{a.idx=o,a.theme=n}),{...n,photos:r}})}var Rl=new Map,Pf=i=>typeof(i==null?void 0:i.src)=="string"&&i.src.startsWith("demo:");function Ji(i,e="full"){if(!Pf(i))return i.src;let t=`${i.src}:${e}`;if(!Rl.has(t)){let n=zu(i.theme,i.idx,e==="thumb"?360:840);Rl.set(t,n.toDataURL("image/jpeg",e==="thumb"?.8:.86))}return Rl.get(t)}function Ki(i,e,t,n=600,r=600,s=C("\uC0AC\uC9C4\uC744 \uB123\uC5B4\uC8FC\uC138\uC694","Add a photo here")){let a=document.createElement("canvas");a.width=n,a.height=r;let o=a.getContext("2d"),l=o.createLinearGradient(0,0,n,r);return l.addColorStop(0,"#FFFDF8"),l.addColorStop(1,i.color||"#F4B8C0"),o.fillStyle=l,o.fillRect(0,0,n,r),o.textAlign="center",o.textBaseline="middle",o.font=`${n*.2}px serif`,o.fillText(i.emoji||"\u{1F4F7}",n/2,r*.38),o.fillStyle="#7C6A66",o.font=`700 ${n*.075}px "Gowun Batang"`,o.fillText(`${i.title} #${e+1}`,n/2,r*.62),o.font=`${n*.04}px "Gowun Dodum"`,o.globalAlpha=.7,o.fillText(s,n/2,r*.73),o.fillText(t,n/2,r*.8),a}var qu="wedding-sound",qe=null,Fr=null,Mi=null,Ul=null,Ur=!1,Fs=null,Qi=0,Ra=0,Dl=523.25,Ir=587.33,Fn=659.25,Yn=783.99,Dr=880,Fl=1046.5,If=1174.7,$u=[Fn,Yn,Dr,Yn,Fn,Ir,Dl,0,Ir,Fn,Yn,Fn,Ir,Dl,0,0,Fn,Yn,Dr,Fl,Dr,Yn,Fn,0,Ir,Fn,If,Fl,Dr,Yn,0,0,Fl,Dr,Yn,Dr,Yn,Fn,Ir,0,Fn,Yn,Fn,Ir,Dl,0,0,0],Yu=[130.81,110,87.31,98],Df=.3;function Ff(){if(qe)return qe;let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;qe=new i,Fr=qe.createGain(),Fr.gain.value=.9,Fr.connect(qe.destination),Mi=qe.createGain(),Mi.gain.value=.12,Mi.connect(Fr),Ul=qe.createBuffer(1,qe.sampleRate,qe.sampleRate);let e=Ul.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1;return qe}function Ct(i,e,t,{type:n="sine",gain:r=.2,dest:s=Fr,slide:a=0}={}){let o=qe.createOscillator(),l=qe.createGain();o.type=n,o.frequency.setValueAtTime(i,e),a&&o.frequency.exponentialRampToValueAtTime(a,e+t),l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(r,e+.012),l.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(l),l.connect(s),o.start(e),o.stop(e+t+.05)}function Ca(i,e,{gain:t=.2,type:n="lowpass",freq:r=2e3}={}){let s=qe.createBufferSource(),a=qe.createBiquadFilter(),o=qe.createGain();s.buffer=Ul,a.type=n,a.frequency.value=r,o.gain.setValueAtTime(t,i),o.gain.exponentialRampToValueAtTime(1e-4,i+e),s.connect(a),a.connect(o),o.connect(Fr),s.start(i),s.stop(i+e+.02)}function Uf(){if(!(!qe||!Ur))for(;Qi<qe.currentTime+.4;){let i=$u[Ra%$u.length];i&&(Ct(i,Qi,1.1,{type:"sine",gain:.5,dest:Mi}),Ct(i*2,Qi,.5,{type:"triangle",gain:.1,dest:Mi})),Ra%4===0&&Ct(Yu[Math.floor(Ra/4)%Yu.length],Qi,1.15,{type:"triangle",gain:.16,dest:Mi}),Qi+=Df,Ra++}}var lt={get enabled(){return Ur},saved(){try{return localStorage.getItem(qu)==="1"}catch{return!1}},setEnabled(i){if(i&&!Ff())return!1;Ur=i;try{localStorage.setItem(qu,i?"1":"0")}catch{}return i?(qe.resume().catch(()=>{}),Fs||(Qi=qe.currentTime+.1,Fs=setInterval(Uf,120))):(Fs&&(clearInterval(Fs),Fs=null),qe==null||qe.suspend().catch(()=>{})),Ur},sfx(i){if(!Ur||!qe)return;let e=qe.currentTime;switch(i){case"chime":Ct(880,e,.25,{gain:.14}),Ct(1318.5,e+.09,.32,{gain:.12});break;case"coin":Ct(1760,e,.1,{type:"square",gain:.05}),Ct(2217,e+.07,.28,{type:"square",gain:.05}),Ca(e+.3,.3,{gain:.07,freq:1400});break;case"shutter":Ca(e,.05,{gain:.3,type:"highpass",freq:3e3}),Ca(e+.07,.04,{gain:.18,type:"highpass",freq:2500});break;case"paper":Ca(e,.16,{gain:.12,type:"bandpass",freq:900}),Ct(1047,e+.1,.3,{gain:.08});break;case"jump":Ct(320,e,.18,{type:"triangle",gain:.12,slide:760});break;case"heart":Ct(1047,e,.18,{gain:.07}),Ct(1318.5,e+.05,.22,{gain:.06});break;case"ok":Ct(659,e,.14,{gain:.12}),Ct(830.6,e+.11,.3,{gain:.12});break;case"no":Ct(330,e,.2,{type:"triangle",gain:.1}),Ct(262,e+.16,.34,{type:"triangle",gain:.1});break;case"pop":Ct(600,e,.08,{type:"triangle",gain:.1,slide:900});break;case"tada":[523.25,659.25,783.99,1046.5].forEach((t,n)=>Ct(t,e+n*.09,.4,{gain:.12}));break}},duck(i){Mi&&qe&&Mi.gain.setTargetAtTime(i?.04:.12,qe.currentTime,.12)}};document.addEventListener("visibilitychange",()=>{!qe||!Ur||(document.hidden?qe.suspend().catch(()=>{}):(qe.resume().catch(()=>{}),Qi=qe.currentTime+.1))});var Pe=window.WEDDING,Yt=i=>document.querySelector(i),pe=i=>String(i!=null?i:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ns=[],Nl=0;function nr(i){Ns.push(i);try{history.pushState({wv:Ns.length},"")}catch{}}function Or(i){let e=Ns.lastIndexOf(i);e<0||(Ns.splice(e,1),Nl++,history.back())}addEventListener("popstate",()=>{var i;if(Nl>0){Nl--;return}(i=Ns.pop())==null||i()});var tr=null,Qu=null,kl=()=>Yt("#modal");function Ol(){let i=kl();!i.classList.contains("open")||i.classList.contains("closing")||(i.classList.add("closing"),lt.duck(!1),tr&&(tr(),tr=null),Qu=setTimeout(()=>{i.classList.remove("open","closing"),i.querySelector(".sheet").style.transform=""},220))}function Gl(i,e,t){let n=kl();tr&&(tr(),tr=null);let r=n.classList.contains("open")&&!n.classList.contains("closing");clearTimeout(Qu),n.classList.remove("closing"),n.querySelector(".sheet").style.transform="",Yt("#modal-title").textContent=i;let s=Yt("#modal-body");s.innerHTML=e,s.scrollTop=0,n.classList.add("open"),lt.duck(!0),r||nr(Ol),t&&(tr=t(s)||null)}function en(){let i=kl();!i.classList.contains("open")||i.classList.contains("closing")||(Ol(),Or(Ol))}var Zn=()=>Yt("#modal").classList.contains("open")||Yt("#lightbox").classList.contains("open"),Un=(i,e)=>Gl(i,e.html,e.mount),Zu;function et(i,e=2400){let t=Yt("#toast");t.textContent=i,t.classList.add("show"),clearTimeout(Zu),Zu=setTimeout(()=>t.classList.remove("show"),e)}var Bl=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function Br(i=["\u{1F338}","\u{1F497}","\u2728","\u{1F389}","\u{1F490}"]){if(!Bl())for(let e=0;e<28;e++){let t=document.createElement("div");t.className="confetti",t.textContent=i[e%i.length],t.style.left=Math.random()*100+"%",t.style.animationDuration=2+Math.random()*2+"s",t.style.animationDelay=Math.random()*.6+"s",(Yt("#phone")||document.body).appendChild(t),setTimeout(()=>t.remove(),5e3)}}async function ed(i,e=C("\uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694","Copied")){let t=!1;try{await navigator.clipboard.writeText(i),t=!0}catch{let n=document.createElement("textarea");n.value=i,n.readOnly=!0,n.style.cssText="position:fixed;top:0;left:0;opacity:0;-webkit-user-select:text;user-select:text",document.body.appendChild(n),n.focus(),n.select();try{n.setSelectionRange(0,i.length),t=document.execCommand("copy")}catch{t=!1}n.remove()}return wt(10),et(t?`\u{1F4CB} ${e}`:C("\uBCF5\uC0AC\uAC00 \uC548 \uB3FC\uC694. \uAE00\uC790\uB97C \uAE38\uAC8C \uB20C\uB7EC \uBCF5\uC0AC\uD574 \uC8FC\uC138\uC694","Couldn't copy. Press and hold the text to copy it")),t}function td(i){i.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",t=>{e.tagName!=="BUTTON"&&t.target.closest("button")||ed(e.dataset.copy,e.dataset.msg)}))}function Nf(){let{k:i}=$t(),e=i.getFullYear(),t=i.getMonth(),n=i.getDate(),r=new Date(e,t,1).getDay(),s=new Date(e,t+1,0).getDate(),a=`<table class="cal"><tr>${C(["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]).map((o,l)=>`<th class="${l===0?"sun":""}">${o}</th>`).join("")}</tr><tr>`;for(let o=0;o<r;o++)a+="<td></td>";for(let o=1;o<=s;o++){let l=(r+o-1)%7;a+=`<td class="${l===0?"sun":""} ${o===n?"day":""}">${o===n?`<span>${o}</span>`:o}</td>`,l===6&&o!==s&&(a+="</tr><tr>")}return a+"</tr></table>"}function Ju(i){return C(`${pe(i.father)} \xB7 ${pe(i.mother)}<span class="muted">\uC758 ${pe(i.relation)}</span> <b>${pe(i.name)}</b>`,`<b>${pe(i.name)}</b><span class="muted">, ${pe(i.relation)} of</span> <span style="white-space:nowrap">${pe(i.father)}</span> &amp; <span style="white-space:nowrap">${pe(i.mother)}</span>`)}function Vl({hero:i=!0}={}){let{date:e,time:t,k:n}=$t();return{html:`
    ${i?`<div class="inv-hero">
      <div class="en">WEDDING INVITATION</div>
      <div class="names">${pe(Pe.groom.name)} <span style="color:var(--rose)">\u2665</span> ${pe(Pe.bride.name)}</div>
      <div class="muted">${C(`${e} ${t}<br>${pe(Pe.venue.name)} ${pe(Pe.venue.hall)}`,`${e} \xB7 ${t}<br>${pe(Pe.venue.name)}, ${pe(Pe.venue.hall)}`)}</div>
    </div>`:""}
    <div class="ornament">\u273F \u273F \u273F</div>
    <p class="inv-greet">${pe(Pe.greeting)}</p>
    <div class="divider"></div>
    <div class="parents">${Ju(Pe.groom)}<br>${Ju(Pe.bride)}</div>
    <div class="card">
      <div class="center serif" style="font-size:17px;margin-bottom:8px">${C(`${n.getFullYear()}. ${n.getMonth()+1}`,n.toLocaleDateString("en-US",{month:"long",year:"numeric"}))}</div>
      ${Nf()}
      <div class="countdown cd"></div>
    </div>
    <div class="btns">
      <button class="btn pink b-ics">${C("\u{1F4C5} \uCE98\uB9B0\uB354\uC5D0 \uCD94\uAC00","\u{1F4C5} Add to calendar")}</button>
      <a class="btn b-gcal" target="_blank" rel="noopener" href="${pe(Bf())}">${C("\u{1F4C6} \uAD6C\uAE00 \uCE98\uB9B0\uB354","\u{1F4C6} Google Calendar")}</a>
      <button class="btn b-dir">${C("\u{1F5FA}\uFE0F \uC624\uC2DC\uB294 \uAE38","\u{1F5FA}\uFE0F Directions")}</button>
      <button class="btn b-share">${C("\u{1F517} \uACF5\uC720\uD558\uAE30","\u{1F517} Share")}</button>
    </div>`,mount:a=>{let o=a.querySelector(".cd"),l=()=>{let h=$n()-_i();if(h<=0){let v=Math.floor(-h/864e5);o.innerHTML=`<div style="min-width:auto;padding:8px 18px"><b>${Zi()==="after"&&v>=1?C(`\uACB0\uD63C\uD55C \uC9C0 ${v}\uC77C\uC9F8\uC608\uC694 \u{1F495}`,`${v} ${v===1?"day":"days"} since the wedding \u{1F495}`):C("\uC624\uB298 \uACB0\uD63C\uD569\uB2C8\uB2E4 \u{1F48D}","We're getting married today \u{1F48D}")}</b></div>`;return}let u=Math.floor(h/864e5),d=Math.floor(h/36e5)%24,p=Math.floor(h/6e4)%60,f=Math.floor(h/1e3)%60;o.innerHTML=[[u,"DAYS"],[d,"HOUR"],[p,"MIN"],[f,"SEC"]].map(([v,m])=>`<div><b>${v}</b><small>${m}</small></div>`).join("")};l();let c=Zi()==="after"?null:setInterval(l,1e3);return a.querySelector(".b-ics").onclick=Of,a.querySelector(".b-dir").onclick=zr,a.querySelector(".b-share").onclick=Wl,()=>clearInterval(c)}}}function Pa(){Un(C("\uCCAD\uCCA9\uC7A5","Invitation"),Vl())}function Of(){let i=$n(),e=new Date(i.getTime()+2*36e5),t=s=>s.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),n=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//wedding//KO","BEGIN:VEVENT",`UID:${t(i)}@wedding`,`DTSTAMP:${t(new Date)}`,`DTSTART:${t(i)}`,`DTEND:${t(e)}`,`SUMMARY:${C(`${Pe.groom.name} \u2665 ${Pe.bride.name} \uACB0\uD63C\uC2DD`,`${Pe.groom.name} \u2665 ${Pe.bride.name} wedding`)}`,`LOCATION:${C(`${Pe.venue.name} ${Pe.venue.hall}`,`${Pe.venue.name}, ${Pe.venue.hall}`)}, ${Pe.venue.address}`,"END:VEVENT","END:VCALENDAR"].join(`\r
`),r=document.createElement("a");r.href=URL.createObjectURL(new Blob([n],{type:"text/calendar"})),r.download="wedding.ics",r.click(),et(C("\u{1F4C5} \uCE98\uB9B0\uB354 \uD30C\uC77C\uC744 \uC5F4\uC5B4 \uC800\uC7A5\uD574 \uC8FC\uC138\uC694","\u{1F4C5} Open the calendar file to save it"))}function Bf(){let i=$n(),e=new Date(i.getTime()+2*36e5),t=r=>r.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"");return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:"TEMPLATE",text:C(`${Pe.groom.name} \u2665 ${Pe.bride.name} \uACB0\uD63C\uC2DD`,`${Pe.groom.name} \u2665 ${Pe.bride.name} wedding`),dates:`${t(i)}/${t(e)}`,location:`${C(`${Pe.venue.name} ${Pe.venue.hall}`,`${Pe.venue.name}, ${Pe.venue.hall}`)}, ${Pe.venue.address}`})}`}async function Wl(){let i={title:C(`${Pe.groom.name} \u2665 ${Pe.bride.name} \uACB0\uD63C\uD569\uB2C8\uB2E4`,`${Pe.groom.name} \u2665 ${Pe.bride.name} are getting married`),text:C("\uC800\uD76C \uACB0\uD63C\uC2DD\uC5D0 \uCD08\uB300\uD569\uB2C8\uB2E4 \u{1F48C}","You're invited to our wedding \u{1F48C}"),url:location.href};if(navigator.share)try{await navigator.share(i);return}catch(e){if((e==null?void 0:e.name)==="AbortError")return}ed(location.href,C("\uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694","Link copied"))}function Xl(){let i=Pe.venue,e=(n,r)=>r&&r.length?`<div class="card"><b>${n}</b><div class="muted" style="margin-top:6px;line-height:1.7">${r.map(pe).join("<br>")}</div></div>`:"";return{html:`
    <div class="card center">
      <div class="serif" style="font-size:20px;font-weight:700">${pe(i.name)}</div>
      <div class="muted" style="margin:4px 0 10px">${pe(i.hall)}</div>
      <div>${pe(i.address)}</div>
      <div class="btns" style="justify-content:center">
        <button class="btn small" data-copy="${pe(i.address)}" data-msg="${C("\uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694","Address copied")}">${C("\u{1F4CB} \uC8FC\uC18C \uBCF5\uC0AC","\u{1F4CB} Copy address")}</button>
        ${i.tel?`<a class="btn small" href="tel:${pe(i.tel)}">${C("\u{1F4DE} \uC804\uD654","\u{1F4DE} Call")}</a>`:""}
      </div>
    </div>
    <div class="btns">
      ${i.naverMap?`<a class="btn" target="_blank" rel="noopener" href="${pe(i.naverMap)}">${C("\u{1F7E2} \uB124\uC774\uBC84 \uC9C0\uB3C4","\u{1F7E2} Naver Map")}</a>`:""}
      ${i.kakaoMap?`<a class="btn" target="_blank" rel="noopener" href="${pe(i.kakaoMap)}">${C("\u{1F7E1} \uCE74\uCE74\uC624\uB9F5","\u{1F7E1} Kakao Map")}</a>`:""}
      ${i.tmap?`<a class="btn" target="_blank" rel="noopener" href="${pe(i.tmap)}">${C("\u{1F535} \uD2F0\uB9F5","\u{1F535} T map")}</a>`:""}
    </div>
    ${e(C("\u{1F687} \uC9C0\uD558\uCCA0","\u{1F687} Subway"),i.subway)}
    ${e(C("\u{1F68C} \uBC84\uC2A4","\u{1F68C} Bus"),i.bus)}
    ${e(C("\u{1F697} \uC790\uAC00\uC6A9","\u{1F697} By car"),i.car?[i.car]:[])}
    ${e(C("\u{1F17F}\uFE0F \uC8FC\uCC28","\u{1F17F}\uFE0F Parking"),i.parking?[i.parking]:[])}`,mount:td}}function zr(){Un(C("\uC624\uC2DC\uB294 \uAE38","Directions"),Xl())}function jl(){var t,n;let i=(r,s)=>`
    <details class="acc">
      <summary>${r}</summary>
      ${(s||[]).map(a=>`
        <div class="acc-row" data-copy="${pe(`${a.bank} ${a.number} ${a.name}`)}" data-msg="${C("\uACC4\uC88C\uBC88\uD638\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694","Account number copied")}">
          <div class="info"><small>${pe(a.role)}</small><br><b>${pe(a.name)}</b> \xB7 ${pe(a.bank)}<br>${pe(a.number)}</div>
          <button class="btn small" data-copy="${pe(`${a.bank} ${a.number} ${a.name}`)}" data-msg="${C("\uACC4\uC88C\uBC88\uD638\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694","Account number copied")}">${C("\uBCF5\uC0AC","Copy")}</button>
        </div>`).join("")}
    </details>`;return{html:`
    <p class="muted center" style="line-height:1.8">${C("\uCC38\uC11D\uC774 \uC5B4\uB824\uC6B0\uC2E0 \uBD84\uB4E4\uC744 \uC704\uD574 \uAE30\uC7AC\uD588\uC2B5\uB2C8\uB2E4.<br>\uB108\uADF8\uB7EC\uC6B4 \uB9C8\uC74C\uC73C\uB85C \uC591\uD574 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.","We've listed these for guests who can't join us in person.<br>Thank you for understanding.")}</p>
    ${i(C("\u{1F499} \uC2E0\uB791\uCE21 \uACC4\uC88C\uBC88\uD638","\u{1F499} Groom's side accounts"),(t=Pe.accounts)==null?void 0:t.groom)}
    ${i(C("\u{1F497} \uC2E0\uBD80\uCE21 \uACC4\uC88C\uBC88\uD638","\u{1F497} Bride's side accounts"),(n=Pe.accounts)==null?void 0:n.bride)}`,mount:td}}function Bs(){Un(C("\uB9C8\uC74C \uC804\uD558\uC2E4 \uACF3","Gift accounts"),jl())}function ql(){let i=Pe.schedule||[],e=n=>{let r=wa(),s=r.sameDay?r.done?C("\uC624\uB298 \uC608\uC2DD\uC774 \uBAA8\uB450 \uB05D\uB0AC\uC5B4\uC694. \uC640\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4 \u{1F64F}","Today's ceremony is over. Thank you for coming \u{1F64F}"):r.item?C("\uC9C0\uAE08 \uC9C4\uD589 \uC911\uC778 \uC21C\uC11C\uAC00 \uBD84\uD64D\uC0C9\uC73C\uB85C \uD45C\uC2DC\uB3FC\uC694","The part happening now is shown in pink"):C("\uACE7 \uC2DC\uC791\uD574\uC694. \uC21C\uC11C\uAC00 \uC2DC\uC791\uB418\uBA74 \uBD84\uD64D\uC0C9\uC73C\uB85C \uD45C\uC2DC\uB3FC\uC694","Starting soon. Each part turns pink when it begins"):$t().date;n.innerHTML=`
      <p class="muted">${s}</p>
      <div class="timeline">
        ${i.map((a,o)=>`<div class="tl-item ${o===r.idx?"now":""}"><div class="t">${pe(a.time)} \xB7 ${pe(a.title)}</div>${a.desc?`<div class="d">${pe(a.desc)}</div>`:""}</div>`).join("")}
      </div>`};return{html:'<div class="sched-box"></div>',mount:n=>{let r=n.querySelector(".sched-box")||n;e(r);let s=setInterval(()=>e(r),6e4);return()=>clearInterval(s)}}}function Ia(){Un(C("\uC624\uB298\uC758 \uC2DD\uC21C","Today's schedule"),ql())}function $l(){let i=Pe.quiz||[];return{html:'<div class="quiz-box"></div>',mount:t=>{let n=t.querySelector(".quiz-box")||t,r=0,s=0,a=null,o=!0,l=()=>{if(!o)return;if(r>=i.length){let h=s===i.length;n.innerHTML=`
          <div class="center" style="padding:20px 0">
            <div style="font-size:60px">${h?"\u{1F3C6}":s>=i.length/2?"\u{1F970}":"\u{1F331}"}</div>
            <div class="quiz-q">${C(`${i.length}\uBB38\uC81C \uC911 <b style="color:var(--rose-deep)">${s}\uAC1C</b> \uB9DE\uD614\uC5B4\uC694!`,`You got <b style="color:var(--rose-deep)">${s} of ${i.length}</b> right`)}</div>
            <p class="muted">${h?C("\uC800\uD76C\uB97C \uC815\uB9D0 \uC798 \uC544\uC2DC\uB294\uAD70\uC694! \u{1F495}","You really know us well! \u{1F495}"):C("\uC774\uC81C \uC800\uD76C\uB97C \uC870\uAE08 \uB354 \uC54C\uAC8C \uB418\uC168\uC8E0? \u{1F60A}","Now you know us a little better, right? \u{1F60A}")}</p>
            <button class="btn pink q-again" style="margin-top:14px">${C("\uB2E4\uC2DC \uD480\uAE30","Try again")}</button>
          </div>`,n.querySelector(".q-again").onclick=()=>{r=0,s=0,l()},h&&Br();return}let c=i[r];n.innerHTML=`
        <div class="progress-dots">${i.map((h,u)=>`<i class="${u<=r?"on":""}"></i>`).join("")}</div>
        <div class="quiz-q">Q${r+1}. ${pe(c.q)}</div>
        ${c.options.map((h,u)=>`<button class="quiz-opt" data-k="${u}">${pe(h)}</button>`).join("")}
        <p class="muted center q-cmt" style="min-height:24px"></p>`,n.querySelectorAll(".quiz-opt").forEach(h=>h.onclick=()=>{let u=+h.dataset.k;n.querySelectorAll(".quiz-opt").forEach(d=>d.disabled=!0),n.querySelectorAll(".quiz-opt")[c.answer].classList.add("right"),u===c.answer?(s++,lt.sfx("ok")):(h.classList.add("wrong"),lt.sfx("no")),n.querySelector(".q-cmt").textContent=(u===c.answer?C("\u2B55 \uC815\uB2F5! ","\u2B55 That's right. "):C("\u274C \uC544\uC26C\uC6CC\uC694! ","\u274C Not quite. "))+(c.comment||""),a=setTimeout(()=>{r++,l()},1700)})};return l(),()=>{o=!1,clearTimeout(a)}}}}function Da(){Un(C("\uC2E0\uB791\uC2E0\uBD80 \uD034\uC988","Couple quiz"),$l())}function Yl({greeting:i=!0}={}){let e=(s,a)=>a?`
    <div class="acc-row" style="border-top:1px dashed var(--line)">
      <div class="info">${s}</div>
      <a class="btn small" href="tel:${pe(a)}">\u{1F4DE}</a>
      <a class="btn small" href="sms:${pe(a)}">\u{1F4AC}</a>
    </div>`:"",t=Pe.groom,n=Pe.bride;return{html:`
    <div class="inv-hero">
      <div style="font-size:44px">\u{1F935}\u200D\u2642\uFE0F\u{1F470}\u200D\u2640\uFE0F</div>
      <div class="names">${C('"\uC640\uC8FC\uC154\uC11C \uAC10\uC0AC\uD574\uC694!"','"Thank you for coming!"')}</div>
    </div>
    ${i?`<p class="inv-greet">${pe(Pe.greeting)}</p>`:""}
    <details class="acc"><summary>${C("\u{1F4DE} \uC5F0\uB77D\uD558\uAE30","\u{1F4DE} Contact")}</summary>
      ${e(C(`\uC2E0\uB791 <b>${pe(t.name)}</b>`,`Groom <b>${pe(t.name)}</b>`),t.phone)}
      ${e(C(`\uC2E0\uB791 \uC544\uBC84\uC9C0 ${pe(t.father)}`,`Groom's father ${pe(t.father)}`),t.fatherPhone)}
      ${e(C(`\uC2E0\uB791 \uC5B4\uBA38\uB2C8 ${pe(t.mother)}`,`Groom's mother ${pe(t.mother)}`),t.motherPhone)}
      ${e(C(`\uC2E0\uBD80 <b>${pe(n.name)}</b>`,`Bride <b>${pe(n.name)}</b>`),n.phone)}
      ${e(C(`\uC2E0\uBD80 \uC544\uBC84\uC9C0 ${pe(n.father)}`,`Bride's father ${pe(n.father)}`),n.fatherPhone)}
      ${e(C(`\uC2E0\uBD80 \uC5B4\uBA38\uB2C8 ${pe(n.mother)}`,`Bride's mother ${pe(n.mother)}`),n.motherPhone)}
    </details>`}}function Fa(){Un(C("\uC2E0\uB791 \xB7 \uC2E0\uBD80","The couple"),Yl())}var nd=i=>i.side==="\uC2E0\uBD80\uCE21"?"bride":"groom",id=i=>i==="\uC2E0\uB791\uCE21"?C(i,"Groom's side"):i==="\uC2E0\uBD80\uCE21"?C(i,"Bride's side"):i,zf=(i,e)=>`
  <button type="button" class="env ${nd(i)}${i.mine?" mine":""}${i.pending?" pending":""}" data-i="${e}" aria-label="${C(`${pe(i.name)}\uC758 \uD3B8\uC9C0 \uC5F4\uAE30`,`Open ${pe(i.name)}'s letter`)}">
    <span class="flap" aria-hidden="true"></span>
    <span class="seal" aria-hidden="true">${i.pending?"\u23F3":i.mine?"\u270D\uFE0F":"\u{1F48C}"}</span>
    <b class="env-name">${pe(i.name)}</b>
    <small class="env-meta">${i.pending?C("\uBCF4\uB0B4\uB294 \uC911","Sending"):`${pe(id(i.side||""))}${i.side?" \xB7 ":""}${Ll(i.time)}`}</small>
  </button>`;function Zl(i,{onBack:e}={}){let t=yi();return{html:`
    <p class="muted" style="line-height:1.7">${C("\uB450 \uC0AC\uB78C\uC5D0\uAC8C \uCD95\uD558\uC758 \uD55C\uB9C8\uB514\uB97C \uB0A8\uACA8\uC8FC\uC138\uC694.","Leave a few words for the couple.")}<br>${t?C("\uD3B8\uC9C0\uB294 \uC2E0\uB791\uC2E0\uBD80\uC5D0\uAC8C \uBC14\uB85C \uC804\uD574\uC9C0\uACE0, \uD3B8\uC9C0\uD568\uC5D0\uC11C \uD568\uAED8 \uBCFC \uC218 \uC788\uC5B4\uC694 \u{1F48C}","Your letter goes straight to the couple, and everyone can read it in the mailbox \u{1F48C}"):C("\uD3B8\uC9C0\uB294 \uBD09\uD22C\uC5D0 \uB2F4\uACA8 \uD3B8\uC9C0\uD568\uC5D0 \uBCF4\uAD00\uB3FC\uC694 \u{1F48C}","Your letter is sealed in an envelope and kept in the mailbox \u{1F48C}")}</p>
    <form class="letter-form" autocomplete="off">
      <input class="field l-name" maxlength="20" placeholder="${C("\uC774\uB984","Name")}" aria-label="${C("\uC774\uB984","Name")}" />
      <div class="seg l-side"><button type="button" data-v="\uC2E0\uB791\uCE21" class="on">${C("\u{1F935} \uC2E0\uB791\uCE21","\u{1F935} Groom's side")}</button><button type="button" data-v="\uC2E0\uBD80\uCE21">${C("\u{1F470} \uC2E0\uBD80\uCE21","\u{1F470} Bride's side")}</button></div>
      <textarea class="field l-msg" maxlength="300" placeholder="${C("\uCD95\uD558 \uBA54\uC2DC\uC9C0\uB97C \uC801\uC5B4\uC8FC\uC138\uC694 (300\uC790 \uC774\uB0B4)","Write your message (up to 300 characters)")}" aria-label="${C("\uBA54\uC2DC\uC9C0","Message")}"></textarea>
      <button class="btn pink l-send" type="submit" style="width:100%;margin-top:10px;padding:14px">${C("\u2709\uFE0F \uD3B8\uC9C0 \uBCF4\uB0B4\uAE30","\u2709\uFE0F Send letter")}</button>
    </form>
    <div class="divider"></div>
    <div class="env-head"><b>${C("\u{1F48C} \uB3C4\uCC29\uD55C \uD3B8\uC9C0","\u{1F48C} Letters received")}</b><span class="muted l-count"></span></div>
    <p class="muted" style="font-size:12.5px;margin:0 0 10px">${C("\uBD09\uD22C\uB97C \uB204\uB974\uBA74 \uD3B8\uC9C0\uC9C0\uAC00 \uD3BC\uCCD0\uC838\uC694 \xB7 \u270D\uFE0F \uB294 \uB0B4\uAC00 \uC4F4 \uD3B8\uC9C0","Tap an envelope to open the letter \xB7 \u270D\uFE0F marks your letters")}</p>
    <p class="muted l-status" role="status" hidden></p>
    <div class="env-grid l-list"></div>`,mount:s=>{let a="\uC2E0\uB791\uCE21";s.querySelectorAll(".l-side button").forEach(m=>m.onclick=()=>{s.querySelectorAll(".l-side button").forEach(y=>y.classList.remove("on")),m.classList.add("on"),a=m.dataset.v});let o=s.querySelector(".l-list"),l=s.querySelector(".l-count"),c=s.querySelector(".l-status"),h=e||(()=>zs(i)),u=()=>{if(!t){c.hidden=!0;return}let m=Aa();c.hidden=!1,m.loading&&!m.loaded?c.textContent=C("\uD3B8\uC9C0\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\u2026","Loading letters\u2026"):m.error&&!m.loaded?(c.innerHTML=C('\uC9C0\uAE08\uC740 \uD3B8\uC9C0\uB97C \uBD88\uB7EC\uC62C \uC218 \uC5C6\uC5B4\uC694. <button type="button" class="linklike l-retry">\uB2E4\uC2DC \uC2DC\uB3C4</button>',`Can't load letters right now. <button type="button" class="linklike l-retry">Try again</button>`),c.querySelector(".l-retry").onclick=()=>{Ds({force:!0}),u()}):m.error?c.textContent=C("\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBC1B\uC544 \uC628 \uD3B8\uC9C0\uC608\uC694 (\uC9C0\uAE08\uC740 \uC5F0\uACB0\uC774 \uC5B4\uB824\uC6CC\uC694)","These are the last letters loaded (can't connect right now)"):c.hidden=!0},d=()=>{let m=Yi();l.textContent=m.length?C(`${m.length}\uD1B5`,`${m.length} ${m.length===1?"letter":"letters"}`):"",o.innerHTML=m.length?m.slice(0,60).map(zf).join(""):`<p class="muted">${t&&Aa().loading&&!Aa().loaded?"":C("\uC544\uC9C1 \uD3B8\uC9C0\uAC00 \uC5C6\uC5B4\uC694. \uCCAB \uD3B8\uC9C0\uB97C \uB0A8\uACA8\uC8FC\uC138\uC694!","No letters yet. Be the first to write one")}</p>`,o.querySelectorAll(".env").forEach(y=>y.onclick=()=>{wt(8),y.classList.add("open"),setTimeout(()=>rd(m,+y.dataset.i,h),Bl()?0:260)}),u()};d();let p=()=>d();t&&(addEventListener("wedding:letters",p),Ds(),u());let f=s.querySelector(".letter-form"),v=s.querySelector(".l-send");return f.onsubmit=async m=>{var T;m.preventDefault();let y=s.querySelector(".l-name").value.trim(),g=s.querySelector(".l-msg").value.trim();if(!y||!g){et(C("\uC774\uB984\uACFC \uBA54\uC2DC\uC9C0\uB97C \uC801\uC5B4\uC8FC\uC138\uC694","Please write your name and a message"));return}let _=v.textContent;v.disabled=!0,t&&(v.textContent=C("\uBCF4\uB0B4\uB294 \uC911\u2026","Sending\u2026"));let E=await ju({name:y,side:a,message:g,time:new Date().toISOString()});v.textContent=_,v.disabled=!1,s.isConnected&&(s.querySelector(".l-msg").value="",E.ok?et(t?C("\u{1F48C} \uD3B8\uC9C0\uAC00 \uB450 \uC0AC\uB78C\uC5D0\uAC8C \uC804\uD574\uC84C\uC5B4\uC694. \uAC10\uC0AC\uD569\uB2C8\uB2E4!","\u{1F48C} Your letter reached the couple. Thank you"):C("\u{1F48C} \uD3B8\uC9C0\uAC00 \uD3B8\uC9C0\uD568\uC5D0 \uB4E4\uC5B4\uAC14\uC5B4\uC694. \uAC10\uC0AC\uD569\uB2C8\uB2E4!","\u{1F48C} Your letter is in the mailbox. Thank you")):et(C("\u{1F48C} \uD3B8\uC9C0\uB97C \uD734\uB300\uD3F0\uC5D0 \uBCF4\uAD00\uD588\uC5B4\uC694. \uC5F0\uACB0\uB418\uBA74 \uC790\uB3D9\uC73C\uB85C \uC804\uD574\uB4DC\uB9B4\uAC8C\uC694","\u{1F48C} Your letter is saved on your phone. We'll send it when you're back online"),3600),Br(["\u{1F48C}","\u{1F497}","\u2728"]),wt(20),lt.sfx("paper"),i==null||i(E.letter),d(),(T=o.querySelector(".env"))==null||T.scrollIntoView({behavior:Bl()?"auto":"smooth",block:"center"}))},()=>removeEventListener("wedding:letters",p)}}}function zs(i){Un(C("\uCD95\uD558 \uD3B8\uC9C0\uD568","Mailbox"),Zl(i))}function Hf(i,e,t){let n=i[e];return{html:`
    <article class="paper ${nd(n)}" aria-label="${C(`${pe(n.name)}\uC758 \uD3B8\uC9C0`,`${pe(n.name)}'s letter`)}">
      <div class="paper-top"><span class="paper-stamp">${n.mine?"\u270D\uFE0F":"\u{1F48C}"}</span><span>To. ${pe(Pe.groom.name)} &amp; ${pe(Pe.bride.name)}</span></div>
      <p class="paper-msg">${pe(n.message)}</p>
      <div class="paper-from">From. <b>${pe(n.name)}</b><small>${pe(id(n.side||""))}${n.side?" \xB7 ":""}${Ll(n.time)}</small></div>
    </article>
    <div class="paper-nav">
      <button class="btn small p-prev" ${e<=0?"disabled":""}>${C("\u2039 \uC774\uC804","\u2039 Previous")}</button>
      <span class="muted">${e+1} / ${i.length}</span>
      <button class="btn small p-next" ${e>=i.length-1?"disabled":""}>${C("\uB2E4\uC74C \u203A","Next \u203A")}</button>
    </div>
    <button class="btn p-back" style="width:100%;margin-top:10px">${C("\u2709\uFE0F \uD3B8\uC9C0\uD568\uC73C\uB85C","\u2709\uFE0F Back to mailbox")}</button>`,mount:a=>{let o=u=>{i[e+u]&&(wt(6),rd(i,e+u,t))};a.querySelector(".p-prev").onclick=()=>o(-1),a.querySelector(".p-next").onclick=()=>o(1),a.querySelector(".p-back").onclick=t;let l=a.querySelector(".paper"),c=0,h=0;l.addEventListener("pointerdown",u=>{c=u.clientX,h=u.clientY}),l.addEventListener("pointerup",u=>{let d=u.clientX-c,p=u.clientY-h;Math.abs(d)>70&&Math.abs(d)>Math.abs(p)*1.5&&o(d<0?1:-1)})}}}function rd(i,e,t=en){Un(C("\u{1F48C} \uD3B8\uC9C0","\u{1F48C} Letter"),Hf(i,e,t))}function kf(i){return{html:`
    <p class="muted">${C("\uC6D0\uD558\uB294 \uACF3\uC744 \uB204\uB974\uBA74 \uBC14\uB85C \uBCFC \uC218 \uC788\uC5B4\uC694","Tap a place to go straight there")}</p>
    <div class="menu-grid">
      ${i.map((n,r)=>`<button class="menu-item" data-i="${r}"><span class="e">${n.emoji}</span>${pe(n.label)}</button>`).join("")}
    </div>`,mount:n=>{n.querySelectorAll(".menu-item").forEach(r=>r.onclick=()=>{wt(8),i[+r.dataset.i].go()})}}}function sd(i){Un(C("\uBC14\uB85C\uAC00\uAE30","Shortcuts"),kf(i))}function Jl(i,e=-1){return{html:(e>=0?[i[e]]:i).map(s=>`
    <div class="album-theme">
      <h3>${s.emoji} ${pe(s.title)} <span class="muted" style="font-size:13px">${C(`${s.photos.length}\uC7A5`,`${s.photos.length} ${s.photos.length===1?"photo":"photos"}`)}</span></h3>
      <div class="muted" style="font-size:13px">${pe(s.subtitle||"")}</div>
      <div class="album-grid">
        ${s.photos.map((a,o)=>`<button type="button" data-t="${i.indexOf(s)}" data-i="${o}" aria-label="${pe(a.caption||s.title+" "+(o+1))}"><img loading="lazy" src="${pe(Ji(a,"thumb"))}" alt="" /></button>`).join("")}
      </div>
    </div>`).join(""),mount:s=>{s.querySelectorAll(".album-grid img").forEach(a=>{a.onerror=()=>{let o=a.parentElement,l=i[+o.dataset.t];a.onerror=null,a.src=Ki(l,+o.dataset.i,l.photos[+o.dataset.i].src,300,300).toDataURL()}}),s.querySelectorAll(".album-grid button").forEach(a=>a.onclick=()=>Kl(i,+a.dataset.t,+a.dataset.i))}}}function Hr(i,e=-1){Un(e>=0?C(`${i[e].title} \uC568\uBC94`,`${i[e].title} album`):C("\uC804\uCCB4 \uC568\uBC94","Full album"),Jl(i,e))}var xn={themes:null,ti:0,i:0},Ue={s:1,x:0,y:0},kr=()=>Yt("#lightbox"),Os=()=>Yt("#lightbox img");function er(i){let e=Os();e.style.transition=i?"transform .25s ease":"none",e.style.transform=`translate(${Ue.x}px, ${Ue.y}px) scale(${Ue.s})`}function Nr(i=!1){Ue.s=1,Ue.x=Ue.y=0,er(i)}function La(){let i=Os(),e=kr(),t=Math.max(0,(i.offsetWidth*Ue.s-e.clientWidth)/2),n=Math.max(0,(i.offsetHeight*Ue.s-e.clientHeight)/2);Ue.x=Math.max(-t,Math.min(t,Ue.x)),Ue.y=Math.max(-n,Math.min(n,Ue.y))}function Kl(i,e,t){xn={themes:i,ti:e,i:t};let n=kr();n.classList.contains("open")||(n.classList.add("open"),nr(zl)),ad()}function zl(){kr().classList.remove("open"),Nr()}function Hl(){kr().classList.contains("open")&&(zl(),Or(zl))}function ad(){let i=xn.themes[xn.ti],e=i.photos[xn.i],t=Os();Nr(),t.onerror=()=>{t.onerror=null,t.src=Ki(i,xn.i,e.src,800,800).toDataURL()},t.src=Ji(e),t.alt=e.caption||`${i.title} ${xn.i+1}`,Yt("#lightbox .cap").innerHTML=`${pe(e.caption||`${i.emoji} ${i.title}`)}<small>${xn.i+1} / ${i.photos.length}</small>`}function Us(i){let e=xn.themes[xn.ti].photos.length;xn.i=(xn.i+i+e)%e,wt(6),ad()}function Gf(){let i=kr(),e=new Map,t=null,n=0,r=()=>{let a=Os().getBoundingClientRect();return{x:a.left+a.width/2-Ue.x,y:a.top+a.height/2-Ue.y}};i.addEventListener("pointerdown",a=>{if(!a.target.closest("button")){try{i.setPointerCapture(a.pointerId)}catch{}if(e.set(a.pointerId,{x:a.clientX,y:a.clientY}),e.size===1)t={type:"one",sx:a.clientX,sy:a.clientY,ox:Ue.x,oy:Ue.y,moved:!1};else if(e.size===2){let[o,l]=[...e.values()],c=r(),h=(o.x+l.x)/2,u=(o.y+l.y)/2;t={type:"pinch",d:Math.hypot(o.x-l.x,o.y-l.y)||1,s:Ue.s,c,px:(h-c.x-Ue.x)/Ue.s,py:(u-c.y-Ue.y)/Ue.s}}}}),i.addEventListener("pointermove",a=>{if(!(!e.has(a.pointerId)||!t)){if(e.set(a.pointerId,{x:a.clientX,y:a.clientY}),t.type==="pinch"&&e.size>=2){let[o,l]=[...e.values()];Ue.s=Math.max(1,Math.min(4,t.s*Math.hypot(o.x-l.x,o.y-l.y)/t.d)),Ue.x=(o.x+l.x)/2-t.c.x-Ue.s*t.px,Ue.y=(o.y+l.y)/2-t.c.y-Ue.s*t.py,er(!1)}else if(t.type==="one"){let o=a.clientX-t.sx,l=a.clientY-t.sy;if(Math.hypot(o,l)>8&&(t.moved=!0),Ue.s>1){Ue.x=t.ox+o,Ue.y=t.oy+l,er(!1);return}let c=Os();c.style.transition="none",c.style.transform=Math.abs(o)>Math.abs(l)?`translateX(${o}px)`:`translateY(${Math.max(0,l)}px) scale(${1-Math.min(.15,Math.max(0,l)/1500)})`}}});let s=a=>{if(!e.has(a.pointerId)||(e.delete(a.pointerId),!t))return;if(t.type==="pinch"){if(e.size===1){let[h]=[...e.values()];t={type:"one",sx:h.x,sy:h.y,ox:Ue.x,oy:Ue.y,moved:!0}}else e.size===0&&(t=null,Ue.s<1.05?Nr(!0):(La(),er(!0)));return}if(e.size>0)return;let o=a.clientX-t.sx,l=a.clientY-t.sy,c=t.moved;if(t=null,a.type==="pointercancel"){Ue.s>1?(La(),er(!0)):Nr(!0);return}if(!c){let h=performance.now();if(h-n<320)if(n=0,Ue.s>1)Nr(!0);else{let u=r();Ue.s=2.5,Ue.x=-(a.clientX-u.x)*1.5,Ue.y=-(a.clientY-u.y)*1.5,La(),er(!0)}else n=h;return}if(Ue.s>1){La(),er(!0);return}Math.abs(o)>60&&Math.abs(o)>Math.abs(l)?Us(o<0?1:-1):l>110&&l>Math.abs(o)?Hl():Nr(!0)};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s)}function Vf(){let i=Yt("#modal .sheet"),e=Yt("#modal .sheet-top"),t=null;e.addEventListener("pointerdown",r=>{if(!r.target.closest("button")){t={id:r.pointerId,y:r.clientY,t:performance.now()};try{e.setPointerCapture(r.pointerId)}catch{}i.style.transition="none"}}),e.addEventListener("pointermove",r=>{!t||r.pointerId!==t.id||(i.style.transform=`translateY(${Math.max(0,r.clientY-t.y)}px)`)});let n=r=>{if(!t||r.pointerId!==t.id)return;let s=r.clientY-t.y,a=s>40&&performance.now()-t.t<250;t=null,i.style.transition="",r.type==="pointerup"&&(s>100||a)?en():i.style.transform=""};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n)}var od="wedding-bigfont",Ua=()=>document.documentElement.classList.contains("big");function Ku(i){document.documentElement.classList.toggle("big",i);try{localStorage.setItem(od,i?"1":"0")}catch{}document.querySelectorAll(".fs-toggle").forEach(e=>{e.textContent=i?C("\uAC00-","A-"):C("\uAC00+","A+"),e.setAttribute("aria-label",i?C("\uAE00\uC790 \uC791\uAC8C","Smaller text"):C("\uAE00\uC790 \uD06C\uAC8C","Larger text"))})}function ld(){try{localStorage.getItem(od)==="1"&&Ku(!0)}catch{}document.addEventListener("click",e=>{e.target.closest(".fs-toggle")&&(wt(6),Ku(!Ua()))}),Yt("#modal-close").onclick=en,Yt("#modal .backdrop").onclick=en;let i=kr();i.querySelector(".lb-close").onclick=Hl,i.querySelector(".prev").onclick=()=>Us(-1),i.querySelector(".next").onclick=()=>Us(1),Gf(),Vf(),addEventListener("keydown",e=>{i.classList.contains("open")?(e.key==="ArrowRight"&&Us(1),e.key==="ArrowLeft"&&Us(-1),e.key==="Escape"&&Hl()):e.key==="Escape"&&en()})}var Bc="160";var nl=1,Wf=2,ni=3,Ii=0,Ht=1,Mr=2;var Gp=2;var lr=100;var zc=204,Hc=205;var Vp=0,Xf=1,jf=2,Li=0,qf=1,$f=2,Yf=3,Zf=4,Jf=5,Kf=6;var Wp=300,ds=301,ps=302,kc=303,Gc=304,il=306,Di=1e3,ii=1001,Vc=1002,Lt=1003,cd=1004;var ec=1005;var Sn=1006,Qf=1007;var xo=1008;var ur=1009;var zh=1012,Xp=1013,Ai=1014,Ri=1015,ta=1016,jp=1017,qp=1018,dr=1020;var hn=1023;var pr=1026,ms=1027;var $p=1029;var Yp=1031,Zp=1033,tc=33776,nc=33777,ic=33778,rc=33779,hd=35840,ud=35841,dd=35842,pd=35843,Jp=36196,md=37492,fd=37496,gd=37808,vd=37809,yd=37810,_d=37811,xd=37812,Md=37813,Ed=37814,bd=37815,Sd=37816,wd=37817,Td=37818,Ad=37819,Rd=37820,Cd=37821,sc=36492,Ld=36494,Pd=36495;var Id=36284,Dd=36285,Fd=36286;var Mo=2300,Eo=2301,ac=2302,Ud=2400,Nd=2401,Od=2402;var Kp=3e3,mr=3001;var On="",pt="srgb",ai="srgb-linear",Hh="display-p3",rl="display-p3-linear",bo="linear",tt="srgb",So="rec709",wo="p3";var Gr=7680;var Wc=35044;var Bd="300 es",Xc=1035,fs=2e3,To=2001,Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _o=Math.PI/180,jc=180/Math.PI;function si(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Bt[255&i]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[255&e]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[63&t|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[255&n]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function eg(i,e){return(i%e+e)%e}function oc(i,e,t){return(1-t)*i+t*e}function zd(i){return(i&i-1)==0&&i!==0}function qc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var ue=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ne=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],v=r[0],m=r[3],y=r[6],g=r[1],_=r[4],E=r[7],T=r[2],w=r[5],A=r[8];return s[0]=a*v+o*g+l*T,s[3]=a*m+o*_+l*w,s[6]=a*y+o*E+l*A,s[1]=c*v+h*g+u*T,s[4]=c*m+h*_+u*w,s[7]=c*y+h*E+u*A,s[2]=d*v+p*g+f*T,s[5]=d*m+p*_+f*w,s[8]=d*y+p*E+f*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return e[0]=u*v,e[1]=(r*c-h*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(lc.makeScale(e,t)),this}rotate(e){return this.premultiply(lc.makeRotation(-e)),this}translate(e,t){return this.premultiply(lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lc=new Ne;function Qp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tg(){let i=Ao("canvas");return i.style.display="block",i}var Hd={};function Zs(i){i in Hd||(Hd[i]=!0,console.warn(i))}var kd=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gd=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Na={[ai]:{transfer:bo,primaries:So,toReference:i=>i,fromReference:i=>i},[pt]:{transfer:tt,primaries:So,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[rl]:{transfer:bo,primaries:wo,toReference:i=>i.applyMatrix3(Gd),fromReference:i=>i.applyMatrix3(kd)},[Hh]:{transfer:tt,primaries:wo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gd),fromReference:i=>i.applyMatrix3(kd).convertLinearToSRGB()}},ng=new Set([ai,rl]),Ke={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ng.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Na[e].toReference;return(0,Na[t].fromReference)(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Na[i].primaries},getTransfer:function(i){return i===On?bo:Na[i].transfer}};function hs(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function cc(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var Vr,Ro=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vr===void 0&&(Vr=Ao("canvas")),Vr.width=e.width,Vr.height=e.height;let n=Vr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Ao("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*hs(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*hs(t[n]/255)):t[n]=hs(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ig=0,Co=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=si(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(hc(r[a].image)):s.push(hc(r[a]))}else s=hc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function hc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ro.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rg=0,rn=class i extends Fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=si(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===mr?pt:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Di:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Di:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pt?mr:Kp}set encoding(e){Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mr?pt:On}};rn.DEFAULT_IMAGE=null,rn.DEFAULT_MAPPING=Wp,rn.DEFAULT_ANISOTROPY=1;var gt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],v=l[2],m=l[6],y=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,E=(p+1)/2,T=(y+1)/2,w=(h+d)/4,A=(u+v)/4,V=(f+m)/4;return _>E&&_>T?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=w/n,s=A/n):E>T?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=w/r,s=V/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=A/s,r=V/s),this.set(n,r,s,t),this}let g=Math.sqrt((m-f)*(m-f)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-f)/g,this.y=(u-v)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$c=class extends Fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(Zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===mr?pt:On),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new rn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Co(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends $c{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Lo=class extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yc=class extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var un=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],d=s[a+0],p=s[a+1],f=s[a+2],v=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=v);if(u!==v||l!==d||c!==p||h!==f){let m=1-o,y=l*d+c*p+h*f+u*v,g=y>=0?1:-1,_=1-y*y;if(_>Number.EPSILON){let T=Math.sqrt(_),w=Math.atan2(T,y*g);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}let E=o*g;if(l=l*m+d*E,c=c*m+p*E,h=h*m+f*E,u=u*m+v*E,m===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),d=l(n/2),p=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uc=new S,Vd=new un,An=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oa.copy(n.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Ba.subVectors(this.max,Hs),Wr.subVectors(e.a,Hs),Xr.subVectors(e.b,Hs),jr.subVectors(e.c,Hs),Ei.subVectors(Xr,Wr),bi.subVectors(jr,Xr),ir.subVectors(Wr,jr);let t=[0,-Ei.z,Ei.y,0,-bi.z,bi.y,0,-ir.z,ir.y,Ei.z,0,-Ei.x,bi.z,0,-bi.x,ir.z,0,-ir.x,-Ei.y,Ei.x,0,-bi.y,bi.x,0,-ir.y,ir.x,0];return!!dc(t,Wr,Xr,jr,Ba)&&(t=[1,0,0,0,1,0,0,0,1],!!dc(t,Wr,Xr,jr,Ba)&&(za.crossVectors(Ei,bi),t=[za.x,za.y,za.z],dc(t,Wr,Xr,jr,Ba)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Mn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Jn=[new S,new S,new S,new S,new S,new S,new S,new S],Mn=new S,Oa=new An,Wr=new S,Xr=new S,jr=new S,Ei=new S,bi=new S,ir=new S,Hs=new S,Ba=new S,za=new S,rr=new S;function dc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){rr.fromArray(i,s);let o=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),h=n.dot(rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var sg=new An,ks=new S,pc=new S,Rn=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):sg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);let t=ks.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(ks,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(pc)),this.expandByPoint(ks.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new S,mc=new S,Ha=new S,Si=new S,fc=new S,ka=new S,gc=new S,fr=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){mc.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(mc);let s=.5*e.distanceTo(t),a=-this.direction.dot(Ha),o=Si.dot(this.direction),l=-Si.dot(Ha),c=Si.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(mc).addScaledVector(Ha,d),p}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);let n=Kn.dot(this.direction),r=Kn.dot(Kn)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>r?null:((o>n||n!=n)&&(n=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,r,s){fc.subVectors(t,e),ka.subVectors(n,e),gc.crossVectors(fc,ka);let a,o=this.direction.dot(gc);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Si.subVectors(this.origin,e);let l=a*this.direction.dot(ka.crossVectors(Si,ka));if(l<0)return null;let c=a*this.direction.dot(fc.cross(Si));if(c<0||l+c>o)return null;let h=-a*Si.dot(gc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class i{constructor(e,t,n,r,s,a,o,l,c,h,u,d,p,f,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,d,p,f,v,m)}set(e,t,n,r,s,a,o,l,c,h,u,d,p,f,v,m){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=r,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=u,y[14]=d,y[3]=p,y[7]=f,y[11]=v,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),a=1/qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,v=c*u;t[0]=d+v*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ag,e,og)}lookAt(e,t,n){let r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),wi.crossVectors(n,tn),wi.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),wi.crossVectors(n,tn)),wi.normalize(),Ga.crossVectors(tn,wi),r[0]=wi.x,r[4]=Ga.x,r[8]=tn.x,r[1]=wi.y,r[5]=Ga.y,r[9]=tn.y,r[2]=wi.z,r[6]=Ga.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],v=n[6],m=n[10],y=n[14],g=n[3],_=n[7],E=n[11],T=n[15],w=r[0],A=r[4],V=r[8],k=r[12],z=r[1],K=r[5],I=r[9],Y=r[13],J=r[2],le=r[6],X=r[10],O=r[14],D=r[3],N=r[7],F=r[11],W=r[15];return s[0]=a*w+o*z+l*J+c*D,s[4]=a*A+o*K+l*le+c*N,s[8]=a*V+o*I+l*X+c*F,s[12]=a*k+o*Y+l*O+c*W,s[1]=h*w+u*z+d*J+p*D,s[5]=h*A+u*K+d*le+p*N,s[9]=h*V+u*I+d*X+p*F,s[13]=h*k+u*Y+d*O+p*W,s[2]=f*w+v*z+m*J+y*D,s[6]=f*A+v*K+m*le+y*N,s[10]=f*V+v*I+m*X+y*F,s[14]=f*k+v*Y+m*O+y*W,s[3]=g*w+_*z+E*J+T*D,s[7]=g*A+_*K+E*le+T*N,s[11]=g*V+_*I+E*X+T*F,s[15]=g*k+_*Y+E*O+T*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-r*c*u-s*o*d+n*c*d+r*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],v=e[13],m=e[14],y=e[15],g=u*m*c-v*d*c+v*l*p-o*m*p-u*l*y+o*d*y,_=f*d*c-h*m*c-f*l*p+a*m*p+h*l*y-a*d*y,E=h*v*c-f*u*c+f*o*p-a*v*p-h*o*y+a*u*y,T=f*u*l-h*v*l-f*o*d+a*v*d+h*o*m-a*u*m,w=t*g+n*_+r*E+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return e[0]=g*A,e[1]=(v*d*s-u*m*s-v*r*p+n*m*p+u*r*y-n*d*y)*A,e[2]=(o*m*s-v*l*s+v*r*c-n*m*c-o*r*y+n*l*y)*A,e[3]=(u*l*s-o*d*s-u*r*c+n*d*c+o*r*p-n*l*p)*A,e[4]=_*A,e[5]=(h*m*s-f*d*s+f*r*p-t*m*p-h*r*y+t*d*y)*A,e[6]=(f*l*s-a*m*s-f*r*c+t*m*c+a*r*y-t*l*y)*A,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*p+t*l*p)*A,e[8]=E*A,e[9]=(f*u*s-h*v*s-f*n*p+t*v*p+h*n*y-t*u*y)*A,e[10]=(a*v*s-f*o*s+f*n*c-t*v*c-a*n*y+t*o*y)*A,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*A,e[12]=T*A,e[13]=(h*v*r-f*u*r+f*n*d-t*v*d-h*n*m+t*u*m)*A,e[14]=(f*o*r-a*v*r-f*n*l+t*v*l+a*n*m-t*o*m)*A,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,v=a*h,m=a*u,y=o*u,g=l*c,_=l*h,E=l*u,T=n.x,w=n.y,A=n.z;return r[0]=(1-(v+y))*T,r[1]=(p+E)*T,r[2]=(f-_)*T,r[3]=0,r[4]=(p-E)*w,r[5]=(1-(d+y))*w,r[6]=(m+g)*w,r[7]=0,r[8]=(f+_)*A,r[9]=(m-g)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=qr.set(r[0],r[1],r[2]).length(),a=qr.set(r[4],r[5],r[6]).length(),o=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],En.copy(this);let l=1/s,c=1/a,h=1/o;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=c,En.elements[5]*=c,En.elements[6]*=c,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,t.setFromRotationMatrix(En),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),p,f;if(o===fs)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==To)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(a-s),d=(t+e)*c,p=(n+r)*h,f,v;if(o===fs)f=(a+s)*u,v=-2*u;else{if(o!==To)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,v=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},qr=new S,En=new Le,ag=new S(0,0,0),og=new S(1,1,1),wi=new S,Ga=new S,tn=new S,Wd=new Le,Xd=new un,gs=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gs.DEFAULT_ORDER="XYZ";var na=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},lg=0,jd=new S,$r=new un,Qn=new Le,Va=new S,Gs=new S,cg=new S,hg=new un,qd=new S(1,0,0),$d=new S(0,1,0),Yd=new S(0,0,1),ug={type:"added"},dg={type:"removed"},At=class i extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new S,t=new gs,n=new un,r=new S(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ne}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(qd,e)}rotateY(e){return this.rotateOnAxis($d,e)}rotateZ(e){return this.rotateOnAxis(Yd,e)}translateOnAxis(e,t){return jd.copy(e).applyQuaternion(this.quaternion),this.position.add(jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qd,e)}translateY(e){return this.translateOnAxis($d,e)}translateZ(e){return this.translateOnAxis(Yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Va.copy(e):Va.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Gs,Va,this.up):Qn.lookAt(Va,Gs,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(Qn),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ug)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dg)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,hg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++){let o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=r,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};At.DEFAULT_UP=new S(0,1,0),At.DEFAULT_MATRIX_AUTO_UPDATE=!0,At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new S,ei=new S,vc=new S,ti=new S,Yr=new S,Zr=new S,Zd=new S,yc=new S,_c=new S,xc=new S,Wa=!1,Ci=class i{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){bn.subVectors(r,t),ei.subVectors(n,t),vc.subVectors(e,t);let a=bn.dot(bn),o=bn.dot(ei),l=bn.dot(vc),c=ei.dot(ei),h=ei.dot(vc),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ti)!==null&&ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,n,r,s,a,o,l){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),ei.subVectors(e,t),bn.cross(ei).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),.5*bn.cross(ei).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Yr.subVectors(r,n),Zr.subVectors(s,n),yc.subVectors(e,n);let l=Yr.dot(yc),c=Zr.dot(yc);if(l<=0&&c<=0)return t.copy(n);_c.subVectors(e,r);let h=Yr.dot(_c),u=Zr.dot(_c);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Yr,a);xc.subVectors(e,s);let p=Yr.dot(xc),f=Zr.dot(xc);if(f>=0&&p<=f)return t.copy(s);let v=p*c-l*f;if(v<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Zr,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return Zd.subVectors(s,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(Zd,o);let y=1/(m+v+d);return a=v*y,o=d*y,t.copy(n).addScaledVector(Yr,a).addScaledVector(Zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Mc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ke.workingColorSpace){if(e=eg(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Mc(a,s,e+1/3),this.g=Mc(a,s,e),this.b=Mc(a,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=em[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=cc(e.r),this.g=cc(e.g),this.b=cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return Ke.fromWorkingColorSpace(zt.copy(this),e),65536*Math.round(Pt(255*zt.r,0,255))+256*Math.round(Pt(255*zt.g,0,255))+Math.round(Pt(255*zt.b,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(zt.copy(this),t);let n=zt.r,r=zt.g,s=zt.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=pt){Ke.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,r=zt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Xa);let n=oc(Ti.h,Xa.h,t),r=oc(Ti.s,Xa.s,t),s=oc(Ti.l,Xa.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new we;we.NAMES=em;var pg=0,Bn=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=si(),this.name="",this.type="Material",this.blending=1,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Hc,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==Ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Hc&&(n.blendDst=this.blendDst),this.blendEquation!==lr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$e=class extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yy=mg();function mg(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,r[l]=24,r[256|l]=24):(n[l]=31744,n[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var ft=new S,ja=new ue,vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wc&&(e.usage=this.usage),e}};var Po=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Io=class extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ce=class extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var fg=0,cn=new Le,Ec=new At,Jr=new S,nn=new An,Vs=new An,Tt=new S,Ze=class i extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qp(e)?Io:Po)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Ec.lookAt(e),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ce(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new S,1/0);if(e){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(nn.min,Vs.min),nn.expandByPoint(Tt),Tt.addVectors(nn.max,Vs.max),nn.expandByPoint(Tt)):(nn.expandByPoint(Vs.min),nn.expandByPoint(Vs.max))}nn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(Jr.fromBufferAttribute(e,c),Tt.add(Jr)),r=Math.max(r,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let z=0;z<o;z++)c[z]=new S,h[z]=new S;let u=new S,d=new S,p=new S,f=new ue,v=new ue,m=new ue,y=new S,g=new S;function _(z,K,I){u.fromArray(r,3*z),d.fromArray(r,3*K),p.fromArray(r,3*I),f.fromArray(a,2*z),v.fromArray(a,2*K),m.fromArray(a,2*I),d.sub(u),p.sub(u),v.sub(f),m.sub(f);let Y=1/(v.x*m.y-m.x*v.y);isFinite(Y)&&(y.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(Y),g.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(Y),c[z].add(y),c[K].add(y),c[I].add(y),h[z].add(g),h[K].add(g),h[I].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let z=0,K=E.length;z<K;++z){let I=E[z],Y=I.start;for(let J=Y,le=Y+I.count;J<le;J+=3)_(n[J+0],n[J+1],n[J+2])}let T=new S,w=new S,A=new S,V=new S;function k(z){A.fromArray(s,3*z),V.copy(A);let K=c[z];T.copy(K),T.sub(A.multiplyScalar(A.dot(K))).normalize(),w.crossVectors(V,K);let I=w.dot(h[z])<0?-1:1;l[4*z]=T.x,l[4*z+1]=T.y,l[4*z+2]=T.z,l[4*z+3]=I}for(let z=0,K=E.length;z<K;++z){let I=E[z],Y=I.start;for(let J=Y,le=Y+I.count;J<le;J+=3)k(n[J+0]),k(n[J+1]),k(n[J+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new S,s=new S,a=new S,o=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let v=0,m=l.length;v<m;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let y=0;y<h;y++)d[f++]=c[p++]}return new vt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jd=new Le,sr=new fr,qa=new Rn,Kd=new S,Kr=new S,Qr=new S,es=new S,bc=new S,$a=new S,Ya=new ue,Za=new ue,Ja=new ue,Qd=new S,ep=new S,tp=new S,Ka=new S,Qa=new S,ge=class extends At{constructor(e=new Ze,t=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){$a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(bc.fromBufferAttribute(u,e),a?$a.addScaledVector(bc,h):$a.addScaledVector(bc.sub(t),h))}t.add($a)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),sr.copy(e.ray).recast(e.near),qa.containsPoint(sr.origin)===!1&&(sr.intersectSphere(qa,Kd)===null||sr.origin.distanceToSquared(Kd)>(e.far-e.near)**2))return;Jd.copy(s).invert(),sr.copy(e.ray).applyMatrix4(Jd),n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,sr)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],y=a[m.materialIndex];for(let g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));g<_;g+=3)r=eo(this,y,e,n,c,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);f<v;f+=3)r=eo(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],y=a[m.materialIndex];for(let g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));g<_;g+=3)r=eo(this,y,e,n,c,h,u,g,g+1,g+2),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);f<v;f+=3)r=eo(this,a,e,n,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function eo(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Kr),i.getVertexPosition(l,Qr),i.getVertexPosition(c,es);let h=function(u,d,p,f,v,m,y,g){let _;if(_=d.side===Ht?f.intersectTriangle(y,m,v,!0,g):f.intersectTriangle(v,m,y,d.side===Ii,g),_===null)return null;Qa.copy(g),Qa.applyMatrix4(u.matrixWorld);let E=p.ray.origin.distanceTo(Qa);return E<p.near||E>p.far?null:{distance:E,point:Qa.clone(),object:u}}(i,e,t,n,Kr,Qr,es,Ka);if(h){r&&(Ya.fromBufferAttribute(r,o),Za.fromBufferAttribute(r,l),Ja.fromBufferAttribute(r,c),h.uv=Ci.getInterpolation(Ka,Kr,Qr,es,Ya,Za,Ja,new ue)),s&&(Ya.fromBufferAttribute(s,o),Za.fromBufferAttribute(s,l),Ja.fromBufferAttribute(s,c),h.uv1=Ci.getInterpolation(Ka,Kr,Qr,es,Ya,Za,Ja,new ue),h.uv2=h.uv1),a&&(Qd.fromBufferAttribute(a,o),ep.fromBufferAttribute(a,l),tp.fromBufferAttribute(a,c),h.normal=Ci.getInterpolation(Ka,Kr,Qr,es,Qd,ep,tp,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new S,materialIndex:0};Ci.getNormal(Kr,Qr,es,u.normal),h.face=u}return h}var Ee=class i extends Ze{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(v,m,y,g,_,E,T,w,A,V,k){let z=E/A,K=T/V,I=E/2,Y=T/2,J=w/2,le=A+1,X=V+1,O=0,D=0,N=new S;for(let F=0;F<X;F++){let W=F*K-Y;for(let ae=0;ae<le;ae++){let M=ae*z-I;N[v]=M*g,N[m]=W*_,N[y]=J,c.push(N.x,N.y,N.z),N[v]=0,N[m]=0,N[y]=w>0?1:-1,h.push(N.x,N.y,N.z),u.push(ae/A),u.push(1-F/V),O+=1}}for(let F=0;F<V;F++)for(let W=0;W<A;W++){let ae=d+W+le*F,M=d+W+le*(F+1),x=d+(W+1)+le*(F+1),R=d+(W+1)+le*F;l.push(ae,M,R),l.push(M,x,R),D+=6}o.addGroup(p,D,k),p+=D,d+=O}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,r,a,2),f("x","z","y",1,-1,e,n,-t,r,a,3),f("x","y","z",1,-1,e,t,n,r,s,4),f("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Vt(i){let e={};for(let t=0;t<i.length;t++){let n=vs(i[t]);for(let r in n)e[r]=n[r]}return e}function tm(i){return i.getRenderTarget()===null?i.outputColorSpace:Ke.workingColorSpace}var gg={clone:vs,merge:Vt},Cn=class extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ia=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=fs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wt=class extends ia{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*jc*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*_o*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*jc*Math.atan(Math.tan(.5*_o*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*_o*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ts=-90,Zc=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Wt(ts,1,e,t);r.layers=this.layers,this.add(r);let s=new Wt(ts,1,e,t);s.layers=this.layers,this.add(s);let a=new Wt(ts,1,e,t);a.layers=this.layers,this.add(a);let o=new Wt(ts,1,e,t);o.layers=this.layers,this.add(o);let l=new Wt(ts,1,e,t);l.layers=this.layers,this.add(l);let c=new Wt(ts,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===fs)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==To)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Do=class extends rn{constructor(e,t,n,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:ds,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jc=class extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===mr?pt:On),this.texture=new Do(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ee(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:0});s.uniforms.tEquirect.value=t;let a=new ge(r,s),o=t.minFilter;return t.minFilter===xo&&(t.minFilter=Sn),new Zc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Sc=new S,vg=new S,yg=new Ne,wn=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Sc.subVectors(n,t).cross(vg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Sc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yg.getNormalMatrix(e),r=this.coplanarPoint(Sc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ar=new Rn,to=new S,ys=class{constructor(e=new wn,t=new wn,n=new wn,r=new wn,s=new wn,a=new wn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],f=r[9],v=r[10],m=r[11],y=r[12],g=r[13],_=r[14],E=r[15];if(n[0].setComponents(l-s,d-c,m-p,E-y).normalize(),n[1].setComponents(l+s,d+c,m+p,E+y).normalize(),n[2].setComponents(l+a,d+h,m+f,E+g).normalize(),n[3].setComponents(l-a,d-h,m-f,E-g).normalize(),n[4].setComponents(l-o,d-u,m-v,E-_).normalize(),t===fs)n[5].setComponents(l+o,d+u,m+v,E+_).normalize();else{if(t!==To)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,v,_).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(to.x=r.normal.x>0?e.max.x:e.min.x,to.y=r.normal.y>0?e.max.y:e.min.y,to.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nm(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function _g(i,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(r){return r.isInterleavedBufferAttribute&&(r=r.data),n.get(r)},remove:function(r){r.isInterleavedBufferAttribute&&(r=r.data);let s=n.get(r);s&&(i.deleteBuffer(s.buffer),n.delete(r))},update:function(r,s){if(r.isGLBufferAttribute){let o=n.get(r);return void((!o||o.version<r.version)&&n.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version}))}r.isInterleavedBufferAttribute&&(r=r.data);let a=n.get(r);if(a===void 0)n.set(r,function(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer(),p;if(i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=i.HALF_FLOAT}else p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);p=i.UNSIGNED_BYTE}return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}(r,s));else if(a.version<r.version){if(a.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,o),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let p=0,f=d.length;p<f;p++){let v=d[p];t?i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count):i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h.subarray(v.start,v.start+v.count))}l.clearUpdateRanges()}u.count!==-1&&(t?i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()})(a.buffer,r,s),a.version=r.version}}}}var nt=class i extends Ze{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],v=[],m=[];for(let y=0;y<h;y++){let g=y*d-a;for(let _=0;_<c;_++){let E=_*u-s;f.push(E,-g,0),v.push(0,0,1),m.push(_/o),m.push(1-y/l)}}for(let y=0;y<l;y++)for(let g=0;g<o;g++){let _=g+c*y,E=g+c*(y+1),T=g+1+c*(y+1),w=g+1+c*y;p.push(_,E,w),p.push(E,T,w)}this.setIndex(p),this.setAttribute("position",new Ce(f,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ie={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},de={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Nn={basic:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new we(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Vt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Vt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new we(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Vt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Vt([de.points,de.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Vt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Vt([de.common,de.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Vt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Vt([de.sprite,de.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Vt([de.common,de.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Vt([de.lights,de.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Nn.physical={uniforms:Vt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};var no={r:0,b:0,g:0};function xg(i,e,t,n,r,s,a){let o=new we(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(v,m){v.getRGB(no,tm(i)),n.buffers.color.setClear(no.r,no.g,no.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(v,m=1){o.set(v),h=m,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,f(o,h)},render:function(v,m){let y=!1,g=m.isScene===!0?m.background:null;g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g===null?f(o,h):g&&g.isColor&&(f(g,1),y=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===il)?(c===void 0&&(c=new ge(new Ee(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:vs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(g.colorSpace)!==tt,u===g&&d===g.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=g,d=g.version,p=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new ge(new nt(2,2),new Cn({name:"BackgroundMaterial",uniforms:vs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(g.colorSpace)!==tt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),u===g&&d===g.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=g,d=g.version,p=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}}}function Mg(i,e,t,n){let r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null),c=l,h=!1;function u(T){return n.isWebGL2?i.bindVertexArray(T):s.bindVertexArrayOES(T)}function d(T){return n.isWebGL2?i.deleteVertexArray(T):s.deleteVertexArrayOES(T)}function p(T){let w=[],A=[],V=[];for(let k=0;k<r;k++)w[k]=0,A[k]=0,V[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:A,attributeDivisors:V,object:T,attributes:{},index:null}}function f(){let T=c.newAttributes;for(let w=0,A=T.length;w<A;w++)T[w]=0}function v(T){m(T,0)}function m(T,w){let A=c.newAttributes,V=c.enabledAttributes,k=c.attributeDivisors;A[T]=1,V[T]===0&&(i.enableVertexAttribArray(T),V[T]=1),k[T]!==w&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,w),k[T]=w)}function y(){let T=c.newAttributes,w=c.enabledAttributes;for(let A=0,V=w.length;A<V;A++)w[A]!==T[A]&&(i.disableVertexAttribArray(A),w[A]=0)}function g(T,w,A,V,k,z,K){K===!0?i.vertexAttribIPointer(T,w,A,k,z):i.vertexAttribPointer(T,w,A,V,k,z)}function _(){E(),h=!0,c!==l&&(c=l,u(c.object))}function E(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(T,w,A,V,k){let z=!1;if(a){let K=function(I,Y,J){let le=J.wireframe===!0,X=o[I.id];X===void 0&&(X={},o[I.id]=X);let O=X[Y.id];O===void 0&&(O={},X[Y.id]=O);let D=O[le];return D===void 0&&(D=p(n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()),O[le]=D),D}(V,A,w);c!==K&&(c=K,u(c.object)),z=function(I,Y,J,le){let X=c.attributes,O=Y.attributes,D=0,N=J.getAttributes();for(let F in N)if(N[F].location>=0){let W=X[F],ae=O[F];if(ae===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),W===void 0||W.attribute!==ae||ae&&W.data!==ae.data)return!0;D++}return c.attributesNum!==D||c.index!==le}(T,V,A,k),z&&function(I,Y,J,le){let X={},O=Y.attributes,D=0,N=J.getAttributes();for(let F in N)if(N[F].location>=0){let W=O[F];W===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(W=I.instanceColor));let ae={};ae.attribute=W,W&&W.data&&(ae.data=W.data),X[F]=ae,D++}c.attributes=X,c.attributesNum=D,c.index=le}(T,V,A,k)}else{let K=w.wireframe===!0;c.geometry===V.id&&c.program===A.id&&c.wireframe===K||(c.geometry=V.id,c.program=A.id,c.wireframe=K,z=!0)}k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,function(K,I,Y,J){if(n.isWebGL2===!1&&(K.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let le=J.attributes,X=Y.getAttributes(),O=I.defaultAttributeValues;for(let D in X){let N=X[D];if(N.location>=0){let F=le[D];if(F===void 0&&(D==="instanceMatrix"&&K.instanceMatrix&&(F=K.instanceMatrix),D==="instanceColor"&&K.instanceColor&&(F=K.instanceColor)),F!==void 0){let W=F.normalized,ae=F.itemSize,M=t.get(F);if(M===void 0)continue;let x=M.buffer,R=M.type,B=M.bytesPerElement,P=n.isWebGL2===!0&&(R===i.INT||R===i.UNSIGNED_INT||F.gpuType===Xp);if(F.isInterleavedBufferAttribute){let G=F.data,U=G.stride,H=F.offset;if(G.isInstancedInterleavedBuffer){for(let j=0;j<N.locationSize;j++)m(N.location+j,G.meshPerAttribute);K.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let j=0;j<N.locationSize;j++)v(N.location+j);i.bindBuffer(i.ARRAY_BUFFER,x);for(let j=0;j<N.locationSize;j++)g(N.location+j,ae/N.locationSize,R,W,U*B,(H+ae/N.locationSize*j)*B,P)}else{if(F.isInstancedBufferAttribute){for(let G=0;G<N.locationSize;G++)m(N.location+G,F.meshPerAttribute);K.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let G=0;G<N.locationSize;G++)v(N.location+G);i.bindBuffer(i.ARRAY_BUFFER,x);for(let G=0;G<N.locationSize;G++)g(N.location+G,ae/N.locationSize,R,W,ae*B,ae/N.locationSize*G*B,P)}}else if(O!==void 0){let W=O[D];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(N.location,W);break;case 3:i.vertexAttrib3fv(N.location,W);break;case 4:i.vertexAttrib4fv(N.location,W);break;default:i.vertexAttrib1fv(N.location,W)}}}}y()}(T,w,A,V),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))},reset:_,resetDefaultState:E,dispose:function(){_();for(let T in o){let w=o[T];for(let A in w){let V=w[A];for(let k in V)d(V[k].object),delete V[k];delete w[A]}delete o[T]}},releaseStatesOfGeometry:function(T){if(o[T.id]===void 0)return;let w=o[T.id];for(let A in w){let V=w[A];for(let k in V)d(V[k].object),delete V[k];delete w[A]}delete o[T.id]},releaseStatesOfProgram:function(T){for(let w in o){let A=o[w];if(A[T.id]===void 0)continue;let V=A[T.id];for(let k in V)d(V[k].object),delete V[k];delete A[T.id]}},initAttributes:f,enableAttribute:v,disableUnusedAttributes:y}}function Eg(i,e,t,n){let r=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){i.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(r)c=i,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let u=0;u<l;u++)h+=o[u];t.update(h,s,1)}}}function bg(i,e,t){let n;function r(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=u>0,_=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:v,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:_,floatVertexTextures:g&&_,maxSamples:s?i.getParameter(i.MAX_SAMPLES):0}}function Sg(i){let e=this,t=null,n=0,r=!1,s=!1,a=new wn,o=new Ne,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,v=null;if(f!==0){if(v=l.value,p!==!0||v===null){let m=d+4*f,y=u.matrixWorldInverse;o.getNormalMatrix(y),(v===null||v.length<m)&&(v=new Float32Array(m));for(let g=0,_=d;g!==f;++g,_+=4)a.copy(h[g]).applyMatrix4(y,o),a.normal.toArray(v,_),v[_+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,v=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!v)s?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}();else{let y=s?0:n,g=4*y,_=m.clippingState||null;l.value=_,_=c(p,u,g,d);for(let E=0;E!==g;++E)_[E]=t[E];m.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}}}function wg(i){let e=new WeakMap;function t(r,s){return s===kc?r.mapping=ds:s===Gc&&(r.mapping=ps),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===kc||s===Gc){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Jc(a.height/2);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Fo=class extends ia{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},np=[.125,.215,.35,.446,.526,.582],Ws=20,wc=new Fo,ip=new we,Tc=null,Ac=0,Rc=0,or=(1+Math.sqrt(5))/2,ns=1/or,rp=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,or,ns),new S(0,or,-ns),new S(ns,0,or),new S(-ns,0,or),new S(or,ns,0),new S(-or,ns,0)],Uo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Tc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc,Ac,Rc),e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:ta,format:hn,colorSpace:ai,depthBuffer:!1},r=sp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sp(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,u=a-4+1+np.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=np[d-a+4-1]:d===0&&(f=0),c.push(f);let v=1/(p-2),m=-v,y=1+v,g=[m,m,y,m,y,y,m,m,y,y,m,y],_=6,E=6,T=3,w=2,A=1,V=new Float32Array(T*E*_),k=new Float32Array(w*E*_),z=new Float32Array(A*E*_);for(let I=0;I<_;I++){let Y=I%3*2/3-1,J=I>2?0:-1,le=[Y,J,0,Y+2/3,J,0,Y+2/3,J+1,0,Y,J,0,Y+2/3,J+1,0,Y,J+1,0];V.set(le,T*E*I),k.set(g,w*E*I);let X=[I,I,I,I,I,I];z.set(X,A*E*I)}let K=new Ze;K.setAttribute("position",new vt(V,T)),K.setAttribute("uv",new vt(k,w)),K.setAttribute("faceIndex",new vt(z,A)),o.push(K),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array(Ws),h=new S(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return r}_compileMaterial(e){let t=new ge(this._lodPlanes[0],e);this._renderer.compile(t,wc)}_sceneToCubeUV(e,t,n,r){let s=new Wt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(ip),l.toneMapping=Li,l.autoClear=!1;let u=new $e({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),d=new ge(new Ee,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(ip),p=!0);for(let v=0;v<6;v++){let m=v%3;m===0?(s.up.set(0,a[v],0),s.lookAt(o[v],0,0)):m===1?(s.up.set(0,0,a[v]),s.lookAt(0,o[v],0)):(s.up.set(0,a[v],0),s.lookAt(0,0,o[v]));let y=this._cubeSize;io(r,m*y,v>2?y:0,y,y),l.setRenderTarget(r),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ds||e.mapping===ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ap());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new ge(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;io(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,wc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rp[(r-1)%rp.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new ge(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,v=isFinite(s)?1+Math.floor(3*f):Ws;v>Ws&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let m=[],y=0;for(let E=0;E<Ws;++E){let T=E/f,w=Math.exp(-T*T/2);m.push(w),E===0?y+=w:E<v&&(y+=2*w)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-n;let _=this._sizeLods[r];io(t,3*_*(r>g-4?r-g+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(h,wc)}};function sp(i,e,t){let n=new oi(i,e,t);return n.texture.mapping=il,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ap(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function op(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tg(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===kc||s===Gc,o=s===ds||s===ps;if(a||o){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let l=e.get(r);return t===null&&(t=new Uo(i)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),e.set(r,l),l.texture}if(e.has(r))return e.get(r).texture;{let l=r.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0,u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u}(l)){t===null&&(t=new Uo(i));let c=a?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,c),r.addEventListener("dispose",n),c.texture}return null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Ag(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Rg(i,e,t,n){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let v=h.array;d=h.version;for(let m=0,y=v.length;m<y;m+=3){let g=v[m+0],_=v[m+1],E=v[m+2];c.push(g,_,_,E,E,g)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let m=0,y=v.length/3-1;m<y;m+=3){let g=m+0,_=m+1,E=m+2;c.push(g,_,_,E,E,g)}}}let p=new(Qp(c)?Io:Po)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],i.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],i.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Cg(i,e,t,n){let r=n.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){i.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(r)u=i,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(l[d]/o,c[d]);else{u.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,s,1)}}}function Lg(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Pg(i,e){return i[0]-e[0]}function Ig(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Dg(i,e,t){let n={},r=new Float32Array(8),s=new WeakMap,a=new gt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0,f=s.get(c);if(f===void 0||f.count!==p){let Y=function(){K.dispose(),s.delete(c),c.removeEventListener("dispose",Y)};f!==void 0&&f.texture.dispose();let y=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],w=c.morphAttributes.color||[],A=0;y===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let V=c.attributes.position.count*A,k=1;V>e.maxTextureSize&&(k=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);let z=new Float32Array(V*k*4*p),K=new Lo(z,V,k,p);K.type=Ri,K.needsUpdate=!0;let I=4*A;for(let J=0;J<p;J++){let le=E[J],X=T[J],O=w[J],D=V*k*4*J;for(let N=0;N<le.count;N++){let F=N*I;y===!0&&(a.fromBufferAttribute(le,N),z[D+F+0]=a.x,z[D+F+1]=a.y,z[D+F+2]=a.z,z[D+F+3]=0),g===!0&&(a.fromBufferAttribute(X,N),z[D+F+4]=a.x,z[D+F+5]=a.y,z[D+F+6]=a.z,z[D+F+7]=0),_===!0&&(a.fromBufferAttribute(O,N),z[D+F+8]=a.x,z[D+F+9]=a.y,z[D+F+10]=a.z,z[D+F+11]=O.itemSize===4?a.w:1)}}f={count:p,texture:K,size:new ue(V,k)},s.set(c,f),c.addEventListener("dispose",Y)}let v=0;for(let y=0;y<u.length;y++)v+=u[y];let m=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(i,"morphTargetBaseInfluence",m),h.getUniforms().setValue(i,"morphTargetInfluences",u),h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{let d=u===void 0?0:u.length,p=n[c.id];if(p===void 0||p.length!==d){p=[];for(let g=0;g<d;g++)p[g]=[g,0];n[c.id]=p}for(let g=0;g<d;g++){let _=p[g];_[0]=g,_[1]=u[g]}p.sort(Ig);for(let g=0;g<8;g++)g<d&&p[g][1]?(o[g][0]=p[g][0],o[g][1]=p[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(Pg);let f=c.morphAttributes.position,v=c.morphAttributes.normal,m=0;for(let g=0;g<8;g++){let _=o[g],E=_[0],T=_[1];E!==Number.MAX_SAFE_INTEGER&&T?(f&&c.getAttribute("morphTarget"+g)!==f[E]&&c.setAttribute("morphTarget"+g,f[E]),v&&c.getAttribute("morphNormal"+g)!==v[E]&&c.setAttribute("morphNormal"+g,v[E]),r[g]=T,m+=T):(f&&c.hasAttribute("morphTarget"+g)===!0&&c.deleteAttribute("morphTarget"+g),v&&c.hasAttribute("morphNormal"+g)===!0&&c.deleteAttribute("morphNormal"+g),r[g]=0)}let y=c.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}}}function Fg(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var No=class extends rn{constructor(e,t,n,r,s,a,o,l,c,h){if((h=h!==void 0?h:pr)!==pr&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pr&&(n=Ai),n===void 0&&h===ms&&(n=dr),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},im=new rn,rm=new No(1,1);rm.compareFunction=515;var sm=new Lo,am=new Yc,om=new Do,lp=[],cp=[],hp=new Float32Array(16),up=new Float32Array(9),dp=new Float32Array(4);function xs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=lp[r];if(s===void 0&&(s=new Float32Array(r),lp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sl(i,e){let t=cp[e];t===void 0&&(t=new Int32Array(e),cp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ug(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ng(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function Og(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function Bg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function zg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;dp.set(n),i.uniformMatrix2fv(this.addr,!1,dp),Et(t,n)}}function Hg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;up.set(n),i.uniformMatrix3fv(this.addr,!1,up),Et(t,n)}}function kg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;hp.set(n),i.uniformMatrix4fv(this.addr,!1,hp),Et(t,n)}}function Gg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function Wg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function jg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function Yg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function Zg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s=this.type===i.SAMPLER_2D_SHADOW?rm:im;t.setTexture2D(e||s,r)}function Jg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||am,r)}function Kg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||om,r)}function Qg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||sm,r)}function e0(i,e){i.uniform1fv(this.addr,e)}function t0(i,e){let t=xs(e,this.size,2);i.uniform2fv(this.addr,t)}function n0(i,e){let t=xs(e,this.size,3);i.uniform3fv(this.addr,t)}function i0(i,e){let t=xs(e,this.size,4);i.uniform4fv(this.addr,t)}function r0(i,e){let t=xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function s0(i,e){let t=xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function a0(i,e){let t=xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function o0(i,e){i.uniform1iv(this.addr,e)}function l0(i,e){i.uniform2iv(this.addr,e)}function c0(i,e){i.uniform3iv(this.addr,e)}function h0(i,e){i.uniform4iv(this.addr,e)}function u0(i,e){i.uniform1uiv(this.addr,e)}function d0(i,e){i.uniform2uiv(this.addr,e)}function p0(i,e){i.uniform3uiv(this.addr,e)}function m0(i,e){i.uniform4uiv(this.addr,e)}function f0(i,e,t){let n=this.cache,r=e.length,s=sl(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||im,s[a])}function g0(i,e,t){let n=this.cache,r=e.length,s=sl(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||am,s[a])}function v0(i,e,t){let n=this.cache,r=e.length,s=sl(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||om,s[a])}function y0(i,e,t){let n=this.cache,r=e.length,s=sl(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||sm,s[a])}var Kc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(r){switch(r){case 5126:return Ug;case 35664:return Ng;case 35665:return Og;case 35666:return Bg;case 35674:return zg;case 35675:return Hg;case 35676:return kg;case 5124:case 35670:return Gg;case 35667:case 35671:return Vg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return jg;case 36294:return qg;case 36295:return $g;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Qg}}(t.type)}},Qc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(r){switch(r){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return r0;case 35675:return s0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return y0}}(t.type)}},eh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Cc=/(\w+)(\])?(\[|\.)?/g;function pp(i,e){i.seq.push(e),i.map[e.id]=e}function _0(i,e,t){let n=i.name,r=n.length;for(Cc.lastIndex=0;;){let s=Cc.exec(n),a=Cc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){pp(t,c===void 0?new Kc(o,i,e):new Qc(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new eh(o),pp(t,h)),t=h}}}var us=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);_0(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function mp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var x0=37297,M0=0;function fp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)}(i.getShaderSource(e),a)}return r}function E0(i,e){let t=function(n){let r=Ke.getPrimaries(Ke.workingColorSpace),s=Ke.getPrimaries(n),a;switch(r===s?a="":r===wo&&s===So?a="LinearDisplayP3ToLinearSRGB":r===So&&s===wo&&(a="LinearSRGBToLinearDisplayP3"),n){case ai:case rl:return[a,"LinearTransferOETF"];case pt:case Hh:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}}(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function b0(i,e){let t;switch(e){case qf:t="Linear";break;case $f:t="Reinhard";break;case Yf:t="OptimizedCineon";break;case Zf:t="ACESFilmic";break;case Kf:t="AgX";break;case Jf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function is(i){return i!==""}function gp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var S0=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(i){return i.replace(S0,T0)}var w0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function T0(i,e){let t=Ie[e];if(t===void 0){let n=w0.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return th(t)}var A0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yp(i){return i.replace(A0,R0)}function R0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _p(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C0(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(I){let Y="SHADOWMAP_TYPE_BASIC";return I.shadowMapType===nl?Y="SHADOWMAP_TYPE_PCF":I.shadowMapType===Wf?Y="SHADOWMAP_TYPE_PCF_SOFT":I.shadowMapType===ni&&(Y="SHADOWMAP_TYPE_VSM"),Y}(t),c=function(I){let Y="ENVMAP_TYPE_CUBE";if(I.envMap)switch(I.envMapMode){case ds:case ps:Y="ENVMAP_TYPE_CUBE";break;case il:Y="ENVMAP_TYPE_CUBE_UV"}return Y}(t),h=function(I){let Y="ENVMAP_MODE_REFLECTION";return I.envMap&&I.envMapMode===ps&&(Y="ENVMAP_MODE_REFRACTION"),Y}(t),u=function(I){let Y="ENVMAP_BLENDING_NONE";if(I.envMap)switch(I.combine){case Vp:Y="ENVMAP_BLENDING_MULTIPLY";break;case Xf:Y="ENVMAP_BLENDING_MIX";break;case jf:Y="ENVMAP_BLENDING_ADD"}return Y}(t),d=function(I){let Y=I.envMapCubeUVHeight;if(Y===null)return null;let J=Math.log2(Y)-2,le=1/Y;return{texelWidth:1/(3*Math.max(Math.pow(2,J),112)),texelHeight:le,maxMip:J}}(t),p=t.isWebGL2?"":function(I){return[I.extensionDerivatives||I.envMapCubeUVHeight||I.bumpMap||I.normalMapTangentSpace||I.clearcoatNormalMap||I.flatShading||I.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(I.extensionFragDepth||I.logarithmicDepthBuffer)&&I.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",I.extensionDrawBuffers&&I.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(I.extensionShaderTextureLOD||I.envMap||I.transmission)&&I.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(is).join(`
`)}(t),f=function(I){return[I.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(is).join(`
`)}(t),v=function(I){let Y=[];for(let J in I){let le=I[J];le!==!1&&Y.push("#define "+J+" "+le)}return Y.join(`
`)}(s),m=r.createProgram(),y,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(is).join(`
`),y.length>0&&(y+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(is).join(`
`),g.length>0&&(g+=`
`)):(y=[_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),g=[p,_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Li?b0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,E0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),a=th(a),a=gp(a,t),a=vp(a,t),o=th(o),o=gp(o,t),o=vp(o,t),a=yp(a),o=yp(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=_+y+a,T=_+g+o,w=mp(r,r.VERTEX_SHADER,E),A=mp(r,r.FRAGMENT_SHADER,T);function V(I){if(i.debug.checkShaderErrors){let Y=r.getProgramInfoLog(m).trim(),J=r.getShaderInfoLog(w).trim(),le=r.getShaderInfoLog(A).trim(),X=!0,O=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,w,A);else{let D=fp(r,w,"vertex"),N=fp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+D+`
`+N)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):J!==""&&le!==""||(O=!1);O&&(I.diagnostics={runnable:X,programLog:Y,vertexShader:{log:J,prefix:y},fragmentShader:{log:le,prefix:g}})}r.deleteShader(w),r.deleteShader(A),k=new us(r,m),z=function(Y,J){let le={},X=Y.getProgramParameter(J,Y.ACTIVE_ATTRIBUTES);for(let O=0;O<X;O++){let D=Y.getActiveAttrib(J,O),N=D.name,F=1;D.type===Y.FLOAT_MAT2&&(F=2),D.type===Y.FLOAT_MAT3&&(F=3),D.type===Y.FLOAT_MAT4&&(F=4),le[N]={type:D.type,location:Y.getAttribLocation(J,N),locationSize:F}}return le}(r,m)}let k,z;r.attachShader(m,w),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return k===void 0&&V(this),k},this.getAttributes=function(){return z===void 0&&V(this),z};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=r.getProgramParameter(m,x0)),K},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}var L0=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ih(e),t.set(e,n)),n}},ih=class{constructor(e){this.id=L0++,this.code=e,this.usedTimes=0}};function P0(i,e,t,n,r,s,a){let o=new na,l=new nh,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return m===0?"uv":`uv${m}`}return{getParameters:function(m,y,g,_,E){let T=_.fog,w=E.geometry,A=m.isMeshStandardMaterial?_.environment:null,V=(m.isMeshStandardMaterial?t:e).get(m.envMap||A),k=V&&V.mapping===il?V.image.height:null,z=f[m.type];m.precision!==null&&(p=r.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let K=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,I=K!==void 0?K.length:0,Y,J,le,X,O=0;if(w.morphAttributes.position!==void 0&&(O=1),w.morphAttributes.normal!==void 0&&(O=2),w.morphAttributes.color!==void 0&&(O=3),z){let Nt=Nn[z];Y=Nt.vertexShader,J=Nt.fragmentShader}else Y=m.vertexShader,J=m.fragmentShader,l.update(m),le=l.getVertexShaderID(m),X=l.getFragmentShaderID(m);let D=i.getRenderTarget(),N=E.isInstancedMesh===!0,F=E.isBatchedMesh===!0,W=!!m.map,ae=!!m.matcap,M=!!V,x=!!m.aoMap,R=!!m.lightMap,B=!!m.bumpMap,P=!!m.normalMap,G=!!m.displacementMap,U=!!m.emissiveMap,H=!!m.metalnessMap,j=!!m.roughnessMap,$=m.anisotropy>0,ne=m.clearcoat>0,b=m.iridescence>0,se=m.sheen>0,Z=m.transmission>0,Q=$&&!!m.anisotropyMap,ce=ne&&!!m.clearcoatMap,me=ne&&!!m.clearcoatNormalMap,ve=ne&&!!m.clearcoatRoughnessMap,ye=b&&!!m.iridescenceMap,Re=b&&!!m.iridescenceThicknessMap,_e=se&&!!m.sheenColorMap,Me=se&&!!m.sheenRoughnessMap,De=!!m.specularMap,St=!!m.specularColorMap,be=!!m.specularIntensityMap,Ge=Z&&!!m.transmissionMap,Be=Z&&!!m.thicknessMap,ya=!!m.gradientMap,Ar=!!m.alphaMap,_a=m.alphaTest>0,an=!!m.alphaHash,Kt=!!m.extensions,Rr=!!w.attributes.uv1,te=!!w.attributes.uv2,xa=!!w.attributes.uv3,As=Li;return m.toneMapped&&(D!==null&&D.isXRRenderTarget!==!0||(As=i.toneMapping)),{isWebGL2:h,shaderID:z,shaderType:m.type,shaderName:m.name,vertexShader:Y,fragmentShader:J,defines:m.defines,customVertexShaderID:le,customFragmentShaderID:X,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:F,instancing:N,instancingColor:N&&E.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:D===null?i.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ai,map:W,matcap:ae,envMap:M,envMapMode:M&&V.mapping,envMapCubeUVHeight:k,aoMap:x,lightMap:R,bumpMap:B,normalMap:P,displacementMap:d&&G,emissiveMap:U,normalMapObjectSpace:P&&m.normalMapType===1,normalMapTangentSpace:P&&m.normalMapType===0,metalnessMap:H,roughnessMap:j,anisotropy:$,anisotropyMap:Q,clearcoat:ne,clearcoatMap:ce,clearcoatNormalMap:me,clearcoatRoughnessMap:ve,iridescence:b,iridescenceMap:ye,iridescenceThicknessMap:Re,sheen:se,sheenColorMap:_e,sheenRoughnessMap:Me,specularMap:De,specularColorMap:St,specularIntensityMap:be,transmission:Z,transmissionMap:Ge,thicknessMap:Be,gradientMap:ya,opaque:m.transparent===!1&&m.blending===1,alphaMap:Ar,alphaTest:_a,alphaHash:an,combine:m.combine,mapUv:W&&v(m.map.channel),aoMapUv:x&&v(m.aoMap.channel),lightMapUv:R&&v(m.lightMap.channel),bumpMapUv:B&&v(m.bumpMap.channel),normalMapUv:P&&v(m.normalMap.channel),displacementMapUv:G&&v(m.displacementMap.channel),emissiveMapUv:U&&v(m.emissiveMap.channel),metalnessMapUv:H&&v(m.metalnessMap.channel),roughnessMapUv:j&&v(m.roughnessMap.channel),anisotropyMapUv:Q&&v(m.anisotropyMap.channel),clearcoatMapUv:ce&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:me&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(m.sheenRoughnessMap.channel),specularMapUv:De&&v(m.specularMap.channel),specularColorMapUv:St&&v(m.specularColorMap.channel),specularIntensityMapUv:be&&v(m.specularIntensityMap.channel),transmissionMapUv:Ge&&v(m.transmissionMap.channel),thicknessMapUv:Be&&v(m.thicknessMap.channel),alphaMapUv:Ar&&v(m.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(P||$),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,vertexUv1s:Rr,vertexUv2s:te,vertexUv3s:xa,pointsUvs:E.isPoints===!0&&!!w.attributes.uv&&(W||Ar),fog:!!T,useFog:m.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:E.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:O,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&g.length>0,shadowMapType:i.shadowMap.type,toneMapping:As,useLegacyLights:i._useLegacyLights,decodeVideoTexture:W&&m.map.isVideoTexture===!0&&Ke.getTransfer(m.map.colorSpace)===tt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===Ht,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:Kt&&m.extensions.derivatives===!0,extensionFragDepth:Kt&&m.extensions.fragDepth===!0,extensionDrawBuffers:Kt&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:Kt&&m.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Kt&&m.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)y.push(g),y.push(m.defines[g]);return m.isRawShaderMaterial===!1&&(function(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapCubeUVHeight),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.morphAttributeCount),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)}(y,m),function(g,_){o.disableAll(),_.isWebGL2&&o.enable(0),_.supportsVertexTextures&&o.enable(1),_.instancing&&o.enable(2),_.instancingColor&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),g.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),g.push(o.mask)}(y,m),y.push(i.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()},getUniforms:function(m){let y=f[m.type],g;if(y){let _=Nn[y];g=gg.clone(_.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,y){let g;for(let _=0,E=c.length;_<E;_++){let T=c[_];if(T.cacheKey===y){g=T,++g.usedTimes;break}}return g===void 0&&(g=new C0(i,y,m,s),c.push(g)),g},releaseProgram:function(m){if(--m.usedTimes==0){let y=c.indexOf(m);c[y]=c[c.length-1],c.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:c,dispose:function(){l.dispose()}}}function I0(){let i=new WeakMap;return{get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function D0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mp(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,l,c,h,u){let d=i[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},i[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=i.length;a<o;a++){let l=i[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||D0),n.length>1&&n.sort(o||xp),r.length>1&&r.sort(o||xp)}}}function F0(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new Mp,i.set(e,[r])):t>=n.length?(r=new Mp,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function U0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new we};break;case"SpotLight":t={position:new S,direction:new S,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new S,halfWidth:new S,halfHeight:new S}}return i[e.id]=t,t}}}var N0=0;function O0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function B0(i,e){let t=new U0,n=function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new S);let s=new S,a=new Le,o=new Le;return{setup:function(l,c){let h=0,u=0,d=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let p=0,f=0,v=0,m=0,y=0,g=0,_=0,E=0,T=0,w=0,A=0;l.sort(O0);let V=c===!0?Math.PI:1;for(let z=0,K=l.length;z<K;z++){let I=l[z],Y=I.color,J=I.intensity,le=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=Y.r*J*V,u+=Y.g*J*V,d+=Y.b*J*V;else if(I.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(I.sh.coefficients[O],J);A++}else if(I.isDirectionalLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*V),I.castShadow){let D=I.shadow,N=n.get(I);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,r.directionalShadow[p]=N,r.directionalShadowMap[p]=X,r.directionalShadowMatrix[p]=I.shadow.matrix,g++}r.directional[p]=O,p++}else if(I.isSpotLight){let O=t.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(Y).multiplyScalar(J*V),O.distance=le,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,r.spot[v]=O;let D=I.shadow;if(I.map&&(r.spotLightMap[T]=I.map,T++,D.updateMatrices(I),I.castShadow&&w++),r.spotLightMatrix[v]=D.matrix,I.castShadow){let N=n.get(I);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,r.spotShadow[v]=N,r.spotShadowMap[v]=X,E++}v++}else if(I.isRectAreaLight){let O=t.get(I);O.color.copy(Y).multiplyScalar(J),O.halfWidth.set(.5*I.width,0,0),O.halfHeight.set(0,.5*I.height,0),r.rectArea[m]=O,m++}else if(I.isPointLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*V),O.distance=I.distance,O.decay=I.decay,I.castShadow){let D=I.shadow,N=n.get(I);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,N.shadowCameraNear=D.camera.near,N.shadowCameraFar=D.camera.far,r.pointShadow[f]=N,r.pointShadowMap[f]=X,r.pointShadowMatrix[f]=I.shadow.matrix,_++}r.point[f]=O,f++}else if(I.isHemisphereLight){let O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(J*V),O.groundColor.copy(I.groundColor).multiplyScalar(J*V),r.hemi[y]=O,y++}}m>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=u,r.ambient[2]=d;let k=r.hash;k.directionalLength===p&&k.pointLength===f&&k.spotLength===v&&k.rectAreaLength===m&&k.hemiLength===y&&k.numDirectionalShadows===g&&k.numPointShadows===_&&k.numSpotShadows===E&&k.numSpotMaps===T&&k.numLightProbes===A||(r.directional.length=p,r.spot.length=v,r.rectArea.length=m,r.point.length=f,r.hemi.length=y,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=g,r.pointShadowMatrix.length=_,r.spotLightMatrix.length=E+T-w,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=A,k.directionalLength=p,k.pointLength=f,k.spotLength=v,k.rectAreaLength=m,k.hemiLength=y,k.numDirectionalShadows=g,k.numPointShadows=_,k.numSpotShadows=E,k.numSpotMaps=T,k.numLightProbes=A,r.version=N0++)},setupView:function(l,c){let h=0,u=0,d=0,p=0,f=0,v=c.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){let g=l[m];if(g.isDirectionalLight){let _=r.directional[h];_.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(v),h++}else if(g.isSpotLight){let _=r.spot[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(v),d++}else if(g.isRectAreaLight){let _=r.rectArea[p];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),o.identity(),a.copy(g.matrixWorld),a.premultiply(v),o.extractRotation(a),_.halfWidth.set(.5*g.width,0,0),_.halfHeight.set(0,.5*g.height,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(g.isPointLight){let _=r.point[u];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),u++}else if(g.isHemisphereLight){let _=r.hemi[f];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(v),f++}}},state:r}}function Ep(i,e){let t=new B0(i,e),n=[],r=[];return{init:function(){n.length=0,r.length=0},state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){r.push(s)}}}function z0(i,e){let t=new WeakMap;return{get:function(n,r=0){let s=t.get(n),a;return s===void 0?(a=new Ep(i,e),t.set(n,[a])):r>=s.length?(a=new Ep(i,e),s.push(a)):a=s[r],a},dispose:function(){t=new WeakMap}}}var rh=class extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sh=class extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function H0(i,e,t){let n=new ys,r=new ue,s=new ue,a=new gt,o=new rh({depthPacking:3201}),l=new sh,c={},h=t.maxTextureSize,u={[Ii]:Ht,[Ht]:Ii,2:2},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Ze;f.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ge(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let y=this.type;function g(w,A){let V=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new oi(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,V,d,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,V,p,v,null)}function _(w,A,V,k){let z=null,K=V.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(K!==void 0)z=K;else if(z=V.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let I=z.uuid,Y=A.uuid,J=c[I];J===void 0&&(J={},c[I]=J);let le=J[Y];le===void 0&&(le=z.clone(),J[Y]=le,A.addEventListener("dispose",T)),z=le}return z.visible=A.visible,z.wireframe=A.wireframe,z.side=k===ni?A.shadowSide!==null?A.shadowSide:A.side:A.shadowSide!==null?A.shadowSide:u[A.side],z.alphaMap=A.alphaMap,z.alphaTest=A.alphaTest,z.map=A.map,z.clipShadows=A.clipShadows,z.clippingPlanes=A.clippingPlanes,z.clipIntersection=A.clipIntersection,z.displacementMap=A.displacementMap,z.displacementScale=A.displacementScale,z.displacementBias=A.displacementBias,z.wireframeLinewidth=A.wireframeLinewidth,z.linewidth=A.linewidth,V.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(i.properties.get(z).light=V),z}function E(w,A,V,k,z){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&z===ni)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld);let I=e.update(w),Y=w.material;if(Array.isArray(Y)){let J=I.groups;for(let le=0,X=J.length;le<X;le++){let O=J[le],D=Y[O.materialIndex];if(D&&D.visible){let N=_(w,D,k,z);w.onBeforeShadow(i,w,A,V,I,N,O),i.renderBufferDirect(V,null,I,N,w,O),w.onAfterShadow(i,w,A,V,I,N,O)}}}else if(Y.visible){let J=_(w,Y,k,z);w.onBeforeShadow(i,w,A,V,I,J,null),i.renderBufferDirect(V,null,I,J,w,null),w.onAfterShadow(i,w,A,V,I,J,null)}}let K=w.children;for(let I=0,Y=K.length;I<Y;I++)E(K[I],A,V,k,z)}function T(w){w.target.removeEventListener("dispose",T);for(let A in c){let V=c[A],k=w.target.uuid;k in V&&(V[k].dispose(),delete V[k])}}this.render=function(w,A,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let k=i.getRenderTarget(),z=i.getActiveCubeFace(),K=i.getActiveMipmapLevel(),I=i.state;I.setBlending(0),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let Y=y!==ni&&this.type===ni,J=y===ni&&this.type!==ni;for(let le=0,X=w.length;le<X;le++){let O=w[le],D=O.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);let N=D.getFrameExtents();if(r.multiply(N),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/N.x),r.x=s.x*N.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/N.y),r.y=s.y*N.y,D.mapSize.y=s.y)),D.map===null||Y===!0||J===!0){let W=this.type!==ni?{minFilter:Lt,magFilter:Lt}:{};D.map!==null&&D.map.dispose(),D.map=new oi(r.x,r.y,W),D.map.texture.name=O.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let F=D.getViewportCount();for(let W=0;W<F;W++){let ae=D.getViewport(W);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),I.viewport(a),D.updateMatrices(O,W),n=D.getFrustum(),E(A,V,D.camera,O,this.type)}D.isPointLightShadow!==!0&&this.type===ni&&g(D,V),D.needsUpdate=!1}y=this.type,m.needsUpdate=!1,i.setRenderTarget(k,z,K)}}function k0(i,e,t){let n=t.isWebGL2,r=new function(){let b=!1,se=new gt,Z=null,Q=new gt(0,0,0,0);return{setMask:function(ce){Z===ce||b||(i.colorMask(ce,ce,ce,ce),Z=ce)},setLocked:function(ce){b=ce},setClear:function(ce,me,ve,ye,Re){Re===!0&&(ce*=ye,me*=ye,ve*=ye),se.set(ce,me,ve,ye),Q.equals(se)===!1&&(i.clearColor(ce,me,ve,ye),Q.copy(se))},reset:function(){b=!1,Z=null,Q.set(-1,0,0,0)}}},s=new function(){let b=!1,se=null,Z=null,Q=null;return{setTest:function(ce){ce?B(i.DEPTH_TEST):P(i.DEPTH_TEST)},setMask:function(ce){se===ce||b||(i.depthMask(ce),se=ce)},setFunc:function(ce){if(Z!==ce){switch(ce){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}Z=ce}},setLocked:function(ce){b=ce},setClear:function(ce){Q!==ce&&(i.clearDepth(ce),Q=ce)},reset:function(){b=!1,se=null,Z=null,Q=null}}},a=new function(){let b=!1,se=null,Z=null,Q=null,ce=null,me=null,ve=null,ye=null,Re=null;return{setTest:function(_e){b||(_e?B(i.STENCIL_TEST):P(i.STENCIL_TEST))},setMask:function(_e){se===_e||b||(i.stencilMask(_e),se=_e)},setFunc:function(_e,Me,De){Z===_e&&Q===Me&&ce===De||(i.stencilFunc(_e,Me,De),Z=_e,Q=Me,ce=De)},setOp:function(_e,Me,De){me===_e&&ve===Me&&ye===De||(i.stencilOp(_e,Me,De),me=_e,ve=Me,ye=De)},setLocked:function(_e){b=_e},setClear:function(_e){Re!==_e&&(i.clearStencil(_e),Re=_e)},reset:function(){b=!1,se=null,Z=null,Q=null,ce=null,me=null,ve=null,ye=null,Re=null}}},o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],p=null,f=!1,v=null,m=null,y=null,g=null,_=null,E=null,T=null,w=new we(0,0,0),A=0,V=!1,k=null,z=null,K=null,I=null,Y=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),le=!1,X=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(O)[1]),le=X>=1):O.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),le=X>=2);let D=null,N={},F=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),ae=new gt().fromArray(F),M=new gt().fromArray(W);function x(b,se,Z,Q){let ce=new Uint8Array(4),me=i.createTexture();i.bindTexture(b,me),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<Z;ve++)!n||b!==i.TEXTURE_3D&&b!==i.TEXTURE_2D_ARRAY?i.texImage2D(se+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage3D(se,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,ce);return me}let R={};function B(b){c[b]!==!0&&(i.enable(b),c[b]=!0)}function P(b){c[b]!==!1&&(i.disable(b),c[b]=!1)}R[i.TEXTURE_2D]=x(i.TEXTURE_2D,i.TEXTURE_2D,1),R[i.TEXTURE_CUBE_MAP]=x(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(R[i.TEXTURE_2D_ARRAY]=x(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),R[i.TEXTURE_3D]=x(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),B(i.DEPTH_TEST),s.setFunc(3),j(!1),$(1),B(i.CULL_FACE),H(0);let G={[lr]:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};if(n)G[103]=i.MIN,G[104]=i.MAX;else{let b=e.get("EXT_blend_minmax");b!==null&&(G[103]=b.MIN_EXT,G[104]=b.MAX_EXT)}let U={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,[zc]:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,[Hc]:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function H(b,se,Z,Q,ce,me,ve,ye,Re,_e){if(b!==0){if(f===!1&&(B(i.BLEND),f=!0),b===5)ce=ce||se,me=me||Z,ve=ve||Q,se===m&&ce===_||(i.blendEquationSeparate(G[se],G[ce]),m=se,_=ce),Z===y&&Q===g&&me===E&&ve===T||(i.blendFuncSeparate(U[Z],U[Q],U[me],U[ve]),y=Z,g=Q,E=me,T=ve),ye.equals(w)!==!1&&Re===A||(i.blendColor(ye.r,ye.g,ye.b,Re),w.copy(ye),A=Re),v=b,V=!1;else if(b!==v||_e!==V){if(m===lr&&_===lr||(i.blendEquation(i.FUNC_ADD),m=lr,_=lr),_e)switch(b){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}y=null,g=null,E=null,T=null,w.set(0,0,0),A=0,v=b,V=_e}}else f===!0&&(P(i.BLEND),f=!1)}function j(b){k!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),k=b)}function $(b){b!==0?(B(i.CULL_FACE),b!==z&&(b===1?i.cullFace(i.BACK):b===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):P(i.CULL_FACE),z=b}function ne(b,se,Z){b?(B(i.POLYGON_OFFSET_FILL),I===se&&Y===Z||(i.polygonOffset(se,Z),I=se,Y=Z)):P(i.POLYGON_OFFSET_FILL)}return{buffers:{color:r,depth:s,stencil:a},enable:B,disable:P,bindFramebuffer:function(b,se){return h[b]!==se&&(i.bindFramebuffer(b,se),h[b]=se,n&&(b===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=se),b===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=se)),!0)},drawBuffers:function(b,se){let Z=d,Q=!1;if(b)if(Z=u.get(se),Z===void 0&&(Z=[],u.set(se,Z)),b.isWebGLMultipleRenderTargets){let ce=b.texture;if(Z.length!==ce.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let me=0,ve=ce.length;me<ve;me++)Z[me]=i.COLOR_ATTACHMENT0+me;Z.length=ce.length,Q=!0}}else Z[0]!==i.COLOR_ATTACHMENT0&&(Z[0]=i.COLOR_ATTACHMENT0,Q=!0);else Z[0]!==i.BACK&&(Z[0]=i.BACK,Q=!0);Q&&(t.isWebGL2?i.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))},useProgram:function(b){return p!==b&&(i.useProgram(b),p=b,!0)},setBlending:H,setMaterial:function(b,se){b.side===2?P(i.CULL_FACE):B(i.CULL_FACE);let Z=b.side===Ht;se&&(Z=!Z),j(Z),b.blending===1&&b.transparent===!1?H(0):H(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),s.setFunc(b.depthFunc),s.setTest(b.depthTest),s.setMask(b.depthWrite),r.setMask(b.colorWrite);let Q=b.stencilWrite;a.setTest(Q),Q&&(a.setMask(b.stencilWriteMask),a.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),a.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),ne(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?B(i.SAMPLE_ALPHA_TO_COVERAGE):P(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:j,setCullFace:$,setLineWidth:function(b){b!==K&&(le&&i.lineWidth(b),K=b)},setPolygonOffset:ne,setScissorTest:function(b){b?B(i.SCISSOR_TEST):P(i.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=i.TEXTURE0+J-1),D!==b&&(i.activeTexture(b),D=b)},bindTexture:function(b,se,Z){Z===void 0&&(Z=D===null?i.TEXTURE0+J-1:D);let Q=N[Z];Q===void 0&&(Q={type:void 0,texture:void 0},N[Z]=Q),Q.type===b&&Q.texture===se||(D!==Z&&(i.activeTexture(Z),D=Z),i.bindTexture(b,se||R[b]),Q.type=b,Q.texture=se)},unbindTexture:function(){let b=N[D];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},updateUBOMapping:function(b,se){let Z=l.get(se);Z===void 0&&(Z=new WeakMap,l.set(se,Z));let Q=Z.get(b);Q===void 0&&(Q=i.getUniformBlockIndex(se,b.name),Z.set(b,Q))},uniformBlockBinding:function(b,se){let Z=l.get(se).get(b);o.get(se)!==Z&&(i.uniformBlockBinding(se,Z,b.__bindingPointIndex),o.set(se,Z))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},scissor:function(b){ae.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),ae.copy(b))},viewport:function(b){M.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),M.copy(b))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},D=null,N={},h={},u=new WeakMap,d=[],p=null,f=!1,v=null,m=null,y=null,g=null,_=null,E=null,T=null,w=new we(0,0,0),A=0,V=!1,k=null,z=null,K=null,I=null,Y=null,ae.set(0,0,i.canvas.width,i.canvas.height),M.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}}}function G0(i,e,t,n,r,s,a){let o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator!="undefined"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(M,x){return p?new OffscreenCanvas(M,x):Ao("canvas")}function v(M,x,R,B){let P=1;if((M.width>B||M.height>B)&&(P=B/Math.max(M.width,M.height)),P<1||x===!0){if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){let G=x?qc:Math.floor,U=G(P*M.width),H=G(P*M.height);u===void 0&&(u=f(U,H));let j=R?f(U,H):u;return j.width=U,j.height=H,j.getContext("2d").drawImage(M,0,0,U,H),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+U+"x"+H+")."),j}return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M}return M}function m(M){return zd(M.width)&&zd(M.height)}function y(M,x){return M.generateMipmaps&&x&&M.minFilter!==Lt&&M.minFilter!==Sn}function g(M){i.generateMipmap(M)}function _(M,x,R,B,P=!1){if(o===!1)return x;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let G=x;if(x===i.RED&&(R===i.FLOAT&&(G=i.R32F),R===i.HALF_FLOAT&&(G=i.R16F),R===i.UNSIGNED_BYTE&&(G=i.R8)),x===i.RED_INTEGER&&(R===i.UNSIGNED_BYTE&&(G=i.R8UI),R===i.UNSIGNED_SHORT&&(G=i.R16UI),R===i.UNSIGNED_INT&&(G=i.R32UI),R===i.BYTE&&(G=i.R8I),R===i.SHORT&&(G=i.R16I),R===i.INT&&(G=i.R32I)),x===i.RG&&(R===i.FLOAT&&(G=i.RG32F),R===i.HALF_FLOAT&&(G=i.RG16F),R===i.UNSIGNED_BYTE&&(G=i.RG8)),x===i.RGBA){let U=P?bo:Ke.getTransfer(B);R===i.FLOAT&&(G=i.RGBA32F),R===i.HALF_FLOAT&&(G=i.RGBA16F),R===i.UNSIGNED_BYTE&&(G=U===tt?i.SRGB8_ALPHA8:i.RGBA8),R===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),R===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return G!==i.R16F&&G!==i.R32F&&G!==i.RG16F&&G!==i.RG32F&&G!==i.RGBA16F&&G!==i.RGBA32F||e.get("EXT_color_buffer_float"),G}function E(M,x,R){return y(M,R)===!0||M.isFramebufferTexture&&M.minFilter!==Lt&&M.minFilter!==Sn?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function T(M){return M===Lt||M===cd||M===ec?i.NEAREST:i.LINEAR}function w(M){let x=M.target;x.removeEventListener("dispose",w),function(R){let B=n.get(R);if(B.__webglInit===void 0)return;let P=R.source,G=d.get(P);if(G){let U=G[B.__cacheKey];U.usedTimes--,U.usedTimes===0&&V(R),Object.keys(G).length===0&&d.delete(P)}n.remove(R)}(x),x.isVideoTexture&&h.delete(x)}function A(M){let x=M.target;x.removeEventListener("dispose",A),function(R){let B=R.texture,P=n.get(R),G=n.get(B);if(G.__webglTexture!==void 0&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(P.__webglFramebuffer[U]))for(let H=0;H<P.__webglFramebuffer[U].length;H++)i.deleteFramebuffer(P.__webglFramebuffer[U][H]);else i.deleteFramebuffer(P.__webglFramebuffer[U]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[U])}else{if(Array.isArray(P.__webglFramebuffer))for(let U=0;U<P.__webglFramebuffer.length;U++)i.deleteFramebuffer(P.__webglFramebuffer[U]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let U=0;U<P.__webglColorRenderbuffer.length;U++)P.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[U]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let U=0,H=B.length;U<H;U++){let j=n.get(B[U]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(B[U])}n.remove(B),n.remove(R)}(x)}function V(M){let x=n.get(M);i.deleteTexture(x.__webglTexture);let R=M.source;delete d.get(R)[x.__cacheKey],a.memory.textures--}let k=0;function z(M,x){let R=n.get(M);if(M.isVideoTexture&&function(B){let P=a.render.frame;h.get(B)!==P&&(h.set(B,P),B.update())}(M),M.isRenderTargetTexture===!1&&M.version>0&&R.__version!==M.version){let B=M.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(B.complete!==!1)return void X(R,M,x);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,R.__webglTexture,i.TEXTURE0+x)}let K={[Di]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[Vc]:i.MIRRORED_REPEAT},I={[Lt]:i.NEAREST,[cd]:i.NEAREST_MIPMAP_NEAREST,[ec]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Qf]:i.LINEAR_MIPMAP_NEAREST,[xo]:i.LINEAR_MIPMAP_LINEAR},Y={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function J(M,x,R){if(R?(i.texParameteri(M,i.TEXTURE_WRAP_S,K[x.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,K[x.wrapT]),M!==i.TEXTURE_3D&&M!==i.TEXTURE_2D_ARRAY||i.texParameteri(M,i.TEXTURE_WRAP_R,K[x.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,I[x.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,I[x.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),M!==i.TEXTURE_3D&&M!==i.TEXTURE_2D_ARRAY||i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),x.wrapS===ii&&x.wrapT===ii||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,T(x.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==Lt&&x.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Y[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let B=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Lt||x.minFilter!==ec&&x.minFilter!==xo||x.type===Ri&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===ta&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(M,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function le(M,x){let R=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",w));let B=x.source,P=d.get(B);P===void 0&&(P={},d.set(B,P));let G=function(U){let H=[];return H.push(U.wrapS),H.push(U.wrapT),H.push(U.wrapR||0),H.push(U.magFilter),H.push(U.minFilter),H.push(U.anisotropy),H.push(U.internalFormat),H.push(U.format),H.push(U.type),H.push(U.generateMipmaps),H.push(U.premultiplyAlpha),H.push(U.flipY),H.push(U.unpackAlignment),H.push(U.colorSpace),H.join()}(x);if(G!==M.__cacheKey){P[G]===void 0&&(P[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,R=!0),P[G].usedTimes++;let U=P[M.__cacheKey];U!==void 0&&(P[M.__cacheKey].usedTimes--,U.usedTimes===0&&V(x)),M.__cacheKey=G,M.__webglTexture=P[G].texture}return R}function X(M,x,R){let B=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(B=i.TEXTURE_3D);let P=le(M,x),G=x.source;t.bindTexture(B,M.__webglTexture,i.TEXTURE0+R);let U=n.get(G);if(G.version!==U.__version||P===!0){t.activeTexture(i.TEXTURE0+R);let H=Ke.getPrimaries(Ke.workingColorSpace),j=x.colorSpace===On?null:Ke.getPrimaries(x.colorSpace),$=x.colorSpace===On||H===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ne=function(Me){return!o&&(Me.wrapS!==ii||Me.wrapT!==ii||Me.minFilter!==Lt&&Me.minFilter!==Sn)}(x)&&m(x.image)===!1,b=v(x.image,ne,!1,r.maxTextureSize);b=ae(x,b);let se=m(b)||o,Z=s.convert(x.format,x.colorSpace),Q,ce=s.convert(x.type),me=_(x.internalFormat,Z,ce,x.colorSpace,x.isVideoTexture);J(B,x,se);let ve=x.mipmaps,ye=o&&x.isVideoTexture!==!0&&me!==Jp,Re=U.__version===void 0||P===!0,_e=E(x,b,se);if(x.isDepthTexture)me=i.DEPTH_COMPONENT,o?me=x.type===Ri?i.DEPTH_COMPONENT32F:x.type===Ai?i.DEPTH_COMPONENT24:x.type===dr?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT16:x.type===Ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===pr&&me===i.DEPTH_COMPONENT&&x.type!==zh&&x.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ai,ce=s.convert(x.type)),x.format===ms&&me===i.DEPTH_COMPONENT&&(me=i.DEPTH_STENCIL,x.type!==dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=dr,ce=s.convert(x.type))),Re&&(ye?t.texStorage2D(i.TEXTURE_2D,1,me,b.width,b.height):t.texImage2D(i.TEXTURE_2D,0,me,b.width,b.height,0,Z,ce,null));else if(x.isDataTexture)if(ve.length>0&&se){ye&&Re&&t.texStorage2D(i.TEXTURE_2D,_e,me,ve[0].width,ve[0].height);for(let Me=0,De=ve.length;Me<De;Me++)Q=ve[Me],ye?t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Q.width,Q.height,Z,ce,Q.data):t.texImage2D(i.TEXTURE_2D,Me,me,Q.width,Q.height,0,Z,ce,Q.data);x.generateMipmaps=!1}else ye?(Re&&t.texStorage2D(i.TEXTURE_2D,_e,me,b.width,b.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,Z,ce,b.data)):t.texImage2D(i.TEXTURE_2D,0,me,b.width,b.height,0,Z,ce,b.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ye&&Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,me,ve[0].width,ve[0].height,b.depth);for(let Me=0,De=ve.length;Me<De;Me++)Q=ve[Me],x.format!==hn?Z!==null?ye?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Q.width,Q.height,b.depth,Z,Q.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,me,Q.width,Q.height,b.depth,0,Q.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Q.width,Q.height,b.depth,Z,ce,Q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,me,Q.width,Q.height,b.depth,0,Z,ce,Q.data)}else{ye&&Re&&t.texStorage2D(i.TEXTURE_2D,_e,me,ve[0].width,ve[0].height);for(let Me=0,De=ve.length;Me<De;Me++)Q=ve[Me],x.format!==hn?Z!==null?ye?t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,Q.width,Q.height,Z,Q.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,me,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Q.width,Q.height,Z,ce,Q.data):t.texImage2D(i.TEXTURE_2D,Me,me,Q.width,Q.height,0,Z,ce,Q.data)}else if(x.isDataArrayTexture)ye?(Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,me,b.width,b.height,b.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,b.width,b.height,b.depth,Z,ce,b.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,b.width,b.height,b.depth,0,Z,ce,b.data);else if(x.isData3DTexture)ye?(Re&&t.texStorage3D(i.TEXTURE_3D,_e,me,b.width,b.height,b.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,b.width,b.height,b.depth,Z,ce,b.data)):t.texImage3D(i.TEXTURE_3D,0,me,b.width,b.height,b.depth,0,Z,ce,b.data);else if(x.isFramebufferTexture){if(Re)if(ye)t.texStorage2D(i.TEXTURE_2D,_e,me,b.width,b.height);else{let Me=b.width,De=b.height;for(let St=0;St<_e;St++)t.texImage2D(i.TEXTURE_2D,St,me,Me,De,0,Z,ce,null),Me>>=1,De>>=1}}else if(ve.length>0&&se){ye&&Re&&t.texStorage2D(i.TEXTURE_2D,_e,me,ve[0].width,ve[0].height);for(let Me=0,De=ve.length;Me<De;Me++)Q=ve[Me],ye?t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Z,ce,Q):t.texImage2D(i.TEXTURE_2D,Me,me,Z,ce,Q);x.generateMipmaps=!1}else ye?(Re&&t.texStorage2D(i.TEXTURE_2D,_e,me,b.width,b.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z,ce,b)):t.texImage2D(i.TEXTURE_2D,0,me,Z,ce,b);y(x,se)&&g(B),U.__version=G.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function O(M,x,R,B,P,G){let U=s.convert(R.format,R.colorSpace),H=s.convert(R.type),j=_(R.internalFormat,U,H,R.colorSpace);if(!n.get(x).__hasExternalTextures){let $=Math.max(1,x.width>>G),ne=Math.max(1,x.height>>G);P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?t.texImage3D(P,G,j,$,ne,x.depth,0,U,H,null):t.texImage2D(P,G,j,$,ne,0,U,H,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),W(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,P,n.get(R).__webglTexture,0,F(x)):(P===i.TEXTURE_2D||P>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,P,n.get(R).__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function D(M,x,R){if(i.bindRenderbuffer(i.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let B=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(R||W(x)){let P=x.depthTexture;P&&P.isDepthTexture&&(P.type===Ri?B=i.DEPTH_COMPONENT32F:P.type===Ai&&(B=i.DEPTH_COMPONENT24));let G=F(x);W(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G,B,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,G,B,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,B,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){let B=F(x);R&&W(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,B,i.DEPTH24_STENCIL8,x.width,x.height):W(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{let B=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let P=0;P<B.length;P++){let G=B[P],U=s.convert(G.format,G.colorSpace),H=s.convert(G.type),j=_(G.internalFormat,U,H,G.colorSpace),$=F(x);R&&W(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,j,x.width,x.height):W(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function N(M){let x=n.get(M),R=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");(function(B,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,B),!P.depthTexture||!P.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(P.depthTexture).__webglTexture&&P.depthTexture.image.width===P.width&&P.depthTexture.image.height===P.height||(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),z(P.depthTexture,0);let G=n.get(P.depthTexture).__webglTexture,U=F(P);if(P.depthTexture.format===pr)W(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else{if(P.depthTexture.format!==ms)throw new Error("Unknown depthTexture format");W(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0)}})(x.__webglFramebuffer,M)}else if(R){x.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[B]),x.__webglDepthbuffer[B]=i.createRenderbuffer(),D(x.__webglDepthbuffer[B],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),D(x.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function F(M){return Math.min(r.maxSamples,M.samples)}function W(M){let x=n.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ae(M,x){let R=M.colorSpace,B=M.format,P=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Xc||R!==ai&&R!==On&&(Ke.getTransfer(R)===tt?o===!1?e.has("EXT_sRGB")===!0&&B===hn?(M.format=Xc,M.minFilter=Sn,M.generateMipmaps=!1):x=Ro.sRGBToLinear(x):B===hn&&P===ur||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),x}this.allocateTextureUnit=function(){let M=k;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),k+=1,M},this.resetTextureUnits=function(){k=0},this.setTexture2D=z,this.setTexture2DArray=function(M,x){let R=n.get(M);M.version>0&&R.__version!==M.version?X(R,M,x):t.bindTexture(i.TEXTURE_2D_ARRAY,R.__webglTexture,i.TEXTURE0+x)},this.setTexture3D=function(M,x){let R=n.get(M);M.version>0&&R.__version!==M.version?X(R,M,x):t.bindTexture(i.TEXTURE_3D,R.__webglTexture,i.TEXTURE0+x)},this.setTextureCube=function(M,x){let R=n.get(M);M.version>0&&R.__version!==M.version?function(B,P,G){if(P.image.length!==6)return;let U=le(B,P),H=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+G);let j=n.get(H);if(H.version!==j.__version||U===!0){t.activeTexture(i.TEXTURE0+G);let $=Ke.getPrimaries(Ke.workingColorSpace),ne=P.colorSpace===On?null:Ke.getPrimaries(P.colorSpace),b=P.colorSpace===On||$===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,b);let se=P.isCompressedTexture||P.image[0].isCompressedTexture,Z=P.image[0]&&P.image[0].isDataTexture,Q=[];for(let be=0;be<6;be++)Q[be]=se||Z?Z?P.image[be].image:P.image[be]:v(P.image[be],!1,!0,r.maxCubemapSize),Q[be]=ae(P,Q[be]);let ce=Q[0],me=m(ce)||o,ve=s.convert(P.format,P.colorSpace),ye=s.convert(P.type),Re=_(P.internalFormat,ve,ye,P.colorSpace),_e=o&&P.isVideoTexture!==!0,Me=j.__version===void 0||U===!0,De,St=E(P,ce,me);if(J(i.TEXTURE_CUBE_MAP,P,me),se){_e&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,St,Re,ce.width,ce.height);for(let be=0;be<6;be++){De=Q[be].mipmaps;for(let Ge=0;Ge<De.length;Ge++){let Be=De[Ge];P.format!==hn?ve!==null?_e?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ge,0,0,Be.width,Be.height,ve,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ge,Re,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ge,0,0,Be.width,Be.height,ve,ye,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ge,Re,Be.width,Be.height,0,ve,ye,Be.data)}}}else{De=P.mipmaps,_e&&Me&&(De.length>0&&St++,t.texStorage2D(i.TEXTURE_CUBE_MAP,St,Re,Q[0].width,Q[0].height));for(let be=0;be<6;be++)if(Z){_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Q[be].width,Q[be].height,ve,ye,Q[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Re,Q[be].width,Q[be].height,0,ve,ye,Q[be].data);for(let Ge=0;Ge<De.length;Ge++){let Be=De[Ge].image[be].image;_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ge+1,0,0,Be.width,Be.height,ve,ye,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ge+1,Re,Be.width,Be.height,0,ve,ye,Be.data)}}else{_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ve,ye,Q[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Re,ve,ye,Q[be]);for(let Ge=0;Ge<De.length;Ge++){let Be=De[Ge];_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ge+1,0,0,ve,ye,Be.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ge+1,Re,ve,ye,Be.image[be])}}}y(P,me)&&g(i.TEXTURE_CUBE_MAP),j.__version=H.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}(R,M,x):t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+x)},this.rebindTextures=function(M,x,R){let B=n.get(M);x!==void 0&&O(B.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),R!==void 0&&N(M)},this.setupRenderTarget=function(M){let x=M.texture,R=n.get(M),B=n.get(x);M.addEventListener("dispose",A),M.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=x.version,a.memory.textures++);let P=M.isWebGLCubeRenderTarget===!0,G=M.isWebGLMultipleRenderTargets===!0,U=m(M)||o;if(P){R.__webglFramebuffer=[];for(let H=0;H<6;H++)if(o&&x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer[H]=[];for(let j=0;j<x.mipmaps.length;j++)R.__webglFramebuffer[H][j]=i.createFramebuffer()}else R.__webglFramebuffer[H]=i.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer=[];for(let H=0;H<x.mipmaps.length;H++)R.__webglFramebuffer[H]=i.createFramebuffer()}else R.__webglFramebuffer=i.createFramebuffer();if(G)if(r.drawBuffers){let H=M.texture;for(let j=0,$=H.length;j<$;j++){let ne=n.get(H[j]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&W(M)===!1){let H=G?x:[x];R.__webglMultisampledFramebuffer=i.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let j=0;j<H.length;j++){let $=H[j];R.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,R.__webglColorRenderbuffer[j]);let ne=s.convert($.format,$.colorSpace),b=s.convert($.type),se=_($.internalFormat,ne,b,$.colorSpace,M.isXRRenderTarget===!0),Z=F(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,se,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,R.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(R.__webglDepthRenderbuffer=i.createRenderbuffer(),D(R.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(P){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),J(i.TEXTURE_CUBE_MAP,x,U);for(let H=0;H<6;H++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)O(R.__webglFramebuffer[H][j],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,j);else O(R.__webglFramebuffer[H],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);y(x,U)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(G){let H=M.texture;for(let j=0,$=H.length;j<$;j++){let ne=H[j],b=n.get(ne);t.bindTexture(i.TEXTURE_2D,b.__webglTexture),J(i.TEXTURE_2D,ne,U),O(R.__webglFramebuffer,M,ne,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,0),y(ne,U)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let H=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?H=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(H,B.__webglTexture),J(H,x,U),o&&x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)O(R.__webglFramebuffer[j],M,x,i.COLOR_ATTACHMENT0,H,j);else O(R.__webglFramebuffer,M,x,i.COLOR_ATTACHMENT0,H,0);y(x,U)&&g(H),t.unbindTexture()}M.depthBuffer&&N(M)},this.updateRenderTargetMipmap=function(M){let x=m(M)||o,R=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let B=0,P=R.length;B<P;B++){let G=R[B];if(y(G,x)){let U=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,H=n.get(G).__webglTexture;t.bindTexture(U,H),g(U),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(M){if(o&&M.samples>0&&W(M)===!1){let x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],R=M.width,B=M.height,P=i.COLOR_BUFFER_BIT,G=[],U=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=n.get(M),j=M.isWebGLMultipleRenderTargets===!0;if(j)for(let $=0;$<x.length;$++)t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,H.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,H.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,H.__webglFramebuffer);for(let $=0;$<x.length;$++){G.push(i.COLOR_ATTACHMENT0+$),M.depthBuffer&&G.push(U);let ne=H.__ignoreDepthValues!==void 0&&H.__ignoreDepthValues;if(ne===!1&&(M.depthBuffer&&(P|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(P|=i.STENCIL_BUFFER_BIT)),j&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,H.__webglColorRenderbuffer[$]),ne===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[U]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[U])),j){let b=n.get(x[$]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,b,0)}i.blitFramebuffer(0,0,R,B,0,0,R,B,P,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,G)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let $=0;$<x.length;$++){t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,H.__webglColorRenderbuffer[$]);let ne=n.get(x[$]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,H.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,H.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=O,this.useMultisampledRTT=W}function V0(i,e,t){let n=t.isWebGL2;return{convert:function(r,s=""){let a,o=Ke.getTransfer(s);if(r===ur)return i.UNSIGNED_BYTE;if(r===jp)return i.UNSIGNED_SHORT_4_4_4_4;if(r===qp)return i.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return i.BYTE;if(r===1011)return i.SHORT;if(r===zh)return i.UNSIGNED_SHORT;if(r===Xp)return i.INT;if(r===Ai)return i.UNSIGNED_INT;if(r===Ri)return i.FLOAT;if(r===ta)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return i.ALPHA;if(r===hn)return i.RGBA;if(r===1024)return i.LUMINANCE;if(r===1025)return i.LUMINANCE_ALPHA;if(r===pr)return i.DEPTH_COMPONENT;if(r===ms)return i.DEPTH_STENCIL;if(r===Xc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===1028)return i.RED;if(r===$p)return i.RED_INTEGER;if(r===1030)return i.RG;if(r===Yp)return i.RG_INTEGER;if(r===Zp)return i.RGBA_INTEGER;if(r===tc||r===nc||r===ic||r===rc)if(o===tt){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(r===tc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(r===tc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ic)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===rc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(r===hd||r===ud||r===dd||r===pd){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(r===hd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ud)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(r===Jp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===md||r===fd){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(r===md)return o===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===fd)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(r===gd||r===vd||r===yd||r===_d||r===xd||r===Md||r===Ed||r===bd||r===Sd||r===wd||r===Td||r===Ad||r===Rd||r===Cd){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(r===gd)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vd)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yd)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_d)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xd)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Md)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ed)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bd)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sd)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wd)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Td)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ad)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rd)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cd)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(r===sc||r===Ld||r===Pd){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(r===sc)return o===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ld)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(r===36283||r===Id||r===Dd||r===Fd){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(r===sc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Id)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return r===dr?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}}}var ah=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Se=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},W0={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),y=this._getHandJoint(c,v);m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=m.radius),y.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},oh=class extends Fi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,v=t.getContextAttributes(),m=null,y=null,g=[],_=[],E=new ue,T=null,w=new Wt;w.layers.enable(1),w.viewport=new gt;let A=new Wt;A.layers.enable(2),A.viewport=new gt;let V=[w,A],k=new ah;k.layers.enable(1),k.layers.enable(2);let z=null,K=null;function I(F){let W=_.indexOf(F.inputSource);if(W===-1)return;let ae=g[W];ae!==void 0&&(ae.update(F.inputSource,F.frame,c||a),ae.dispatchEvent({type:F.type,data:F.inputSource}))}function Y(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",J);for(let F=0;F<g.length;F++){let W=_[F];W!==null&&(_[F]=null,g[F].disconnect(W))}z=null,K=null,e.setRenderTarget(m),p=null,d=null,u=null,r=null,y=null,N.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}function J(F){for(let W=0;W<F.removed.length;W++){let ae=F.removed[W],M=_.indexOf(ae);M>=0&&(_[M]=null,g[M].disconnect(ae))}for(let W=0;W<F.added.length;W++){let ae=F.added[W],M=_.indexOf(ae);if(M===-1){for(let R=0;R<g.length;R++){if(R>=_.length){_.push(ae),M=R;break}if(_[R]===null){_[R]=ae,M=R;break}}if(M===-1)break}let x=g[M];x&&x.connect(ae)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let W=g[F];return W===void 0&&(W=new Js,g[F]=W),W.getTargetRaySpace()},this.getControllerGrip=function(F){let W=g[F];return W===void 0&&(W=new Js,g[F]=W),W.getGripSpace()},this.getHand=function(F){let W=g[F];return W===void 0&&(W=new Js,g[F]=W),W.getHandSpace()},this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let W={antialias:r.renderState.layers!==void 0||v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new oi(p.framebufferWidth,p.framebufferHeight,{format:hn,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let W=null,ae=null,M=null;v.depth&&(M=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=v.stencil?ms:pr,ae=v.stencil?dr:Ai);let x={colorFormat:t.RGBA8,depthFormat:M,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(x),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new oi(d.textureWidth,d.textureHeight,{format:hn,type:ur,depthTexture:new No(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),N.setContext(r),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};let le=new S,X=new S;function O(F,W){W===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(W.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;k.near=A.near=w.near=F.near,k.far=A.far=w.far=F.far,z===k.near&&K===k.far||(r.updateRenderState({depthNear:k.near,depthFar:k.far}),z=k.near,K=k.far);let W=F.parent,ae=k.cameras;O(k,W);for(let M=0;M<ae.length;M++)O(ae[M],W);ae.length===2?function(M,x,R){le.setFromMatrixPosition(x.matrixWorld),X.setFromMatrixPosition(R.matrixWorld);let B=le.distanceTo(X),P=x.projectionMatrix.elements,G=R.projectionMatrix.elements,U=P[14]/(P[10]-1),H=P[14]/(P[10]+1),j=(P[9]+1)/P[5],$=(P[9]-1)/P[5],ne=(P[8]-1)/P[0],b=(G[8]+1)/G[0],se=U*ne,Z=U*b,Q=B/(-ne+b),ce=Q*-ne;x.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(ce),M.translateZ(Q),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert();let me=U+Q,ve=H+Q,ye=se-ce,Re=Z+(B-ce),_e=j*H/ve*me,Me=$*H/ve*me;M.projectionMatrix.makePerspective(ye,Re,_e,Me,me,ve),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}(k,w,A):k.projectionMatrix.copy(w.projectionMatrix),function(M,x,R){R===null?M.matrix.copy(x.matrixWorld):(M.matrix.copy(R.matrixWorld),M.matrix.invert(),M.matrix.multiply(x.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(x.projectionMatrix),M.projectionMatrixInverse.copy(x.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=2*jc*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)}(F,k,W)},this.getCamera=function(){return k},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)};let D=null,N=new nm;N.setAnimationLoop(function(F,W){if(h=W.getViewerPose(c||a),f=W,h!==null){let ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let M=!1;ae.length!==k.cameras.length&&(k.cameras.length=0,M=!0);for(let x=0;x<ae.length;x++){let R=ae[x],B=null;if(p!==null)B=p.getViewport(R);else{let G=u.getViewSubImage(d,R);B=G.viewport,x===0&&(e.setRenderTargetTextures(y,G.colorTexture,d.ignoreDepthValues?void 0:G.depthStencilTexture),e.setRenderTarget(y))}let P=V[x];P===void 0&&(P=new Wt,P.layers.enable(x),P.viewport=new gt,V[x]=P),P.matrix.fromArray(R.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(R.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(B.x,B.y,B.width,B.height),x===0&&(k.matrix.copy(P.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),M===!0&&k.cameras.push(P)}}for(let ae=0;ae<g.length;ae++){let M=_[ae],x=g[ae];M!==null&&x!==void 0&&x.update(M,W,c||a)}D&&D(F,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),f=null}),this.setAnimationLoop=function(F){D=F},this.dispose=function(){}}};function X0(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Ht&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Ht&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap){r.lightMap.value=s.lightMap;let o=i._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,r.lightMapTransform)}s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,tm(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(r,s)):s.isMeshPhongMaterial?(n(r,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(r,s)):s.isMeshStandardMaterial?(n(r,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(r,s),s.isMeshPhysicalMaterial&&function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ht&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(r,s,l)):s.isMeshMatcapMaterial?(n(r,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far}(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(r,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(r,s)):s.isPointsMaterial?function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function j0(i,e,t,n){let r={},s={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,d,p,f){let v=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let y=f[m];if(typeof v=="number"||typeof v=="boolean"){if(y!==v)return f[m]=v,!0}else if(y.equals(v)===!1)return y.copy(v),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&(function(m){let y=m.uniforms,g=0,_=16;for(let T=0,w=y.length;T<w;T++){let A=Array.isArray(y[T])?y[T]:[y[T]];for(let V=0,k=A.length;V<k;V++){let z=A[V],K=Array.isArray(z.value)?z.value:[z.value];for(let I=0,Y=K.length;I<Y;I++){let J=c(K[I]),le=g%_;le!==0&&_-le<J.boundary&&(g+=_-le),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=g,g+=J.storage}}}let E=g%_;E>0&&(g+=_-E),m.__size=g,m.__cache={}}(u),p=function(m){let y=function(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();m.__bindingPointIndex=y;let g=i.createBuffer(),_=m.__size,E=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,_,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,g),g}(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let v=e.render.frame;s[u.id]!==v&&(function(m){let y=r[m.id],g=m.uniforms,_=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,T=g.length;E<T;E++){let w=Array.isArray(g[E])?g[E]:[g[E]];for(let A=0,V=w.length;A<V;A++){let k=w[A];if(l(k,E,A,_)===!0){let z=k.__offset,K=Array.isArray(k.value)?k.value:[k.value],I=0;for(let Y=0;Y<K.length;Y++){let J=K[Y],le=c(J);typeof J=="number"||typeof J=="boolean"?(k.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,z+I,k.__data)):J.isMatrix3?(k.__data[0]=J.elements[0],k.__data[1]=J.elements[1],k.__data[2]=J.elements[2],k.__data[3]=0,k.__data[4]=J.elements[3],k.__data[5]=J.elements[4],k.__data[6]=J.elements[5],k.__data[7]=0,k.__data[8]=J.elements[6],k.__data[9]=J.elements[7],k.__data[10]=J.elements[8],k.__data[11]=0):(J.toArray(k.__data,I),I+=le.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}(u),s[u.id]=v)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);a=[],r={},s={}}}}var ra=class{constructor(e={}){let{canvas:t=tg(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=n!==null?n.getContextAttributes().alpha:a;let p=new Uint32Array(4),f=new Int32Array(4),v=null,m=null,y=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;let _=this,E=!1,T=0,w=0,A=null,V=-1,k=null,z=new gt,K=new gt,I=null,Y=new we(0),J=0,le=t.width,X=t.height,O=1,D=null,N=null,F=new gt(0,0,le,X),W=new gt(0,0,le,X),ae=!1,M=new ys,x=!1,R=!1,B=null,P=new Le,G=new ue,U=new S,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function j(){return A===null?O:1}let $,ne,b,se,Z,Q,ce,me,ve,ye,Re,_e,Me,De,St,be,Ge,Be,ya,Ar,_a,an,Kt,Rr,te=n;function xa(L,ee){for(let ie=0;ie<L.length;ie++){let he=L[ie],re=t.getContext(he,ee);if(re!==null)return re}return null}try{let L={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",gu,!1),t.addEventListener("webglcontextrestored",vu,!1),t.addEventListener("webglcontextcreationerror",yu,!1),te===null){let ee=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&ee.shift(),te=xa(ee,L),te===null)throw xa(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&te instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}function As(){$=new Ag(te),ne=new bg(te,$,e),$.init(ne),an=new V0(te,$,ne),b=new k0(te,$,ne),se=new Lg(te),Z=new I0,Q=new G0(te,$,b,Z,ne,an,se),ce=new wg(_),me=new Tg(_),ve=new _g(te,ne),Kt=new Mg(te,$,ve,ne),ye=new Rg(te,ve,se,Kt),Re=new Fg(te,ye,ve,se),ya=new Dg(te,ne,Q),be=new Sg(Z),_e=new P0(_,ce,me,$,ne,Kt,be),Me=new X0(_,Z),De=new F0,St=new z0($,ne),Be=new xg(_,ce,me,b,Re,d,l),Ge=new H0(_,Re,ne),Rr=new j0(te,se,ne,b),Ar=new Eg(te,$,se,ne),_a=new Cg(te,$,se,ne),se.programs=_e.programs,_.capabilities=ne,_.extensions=$,_.properties=Z,_.renderLists=De,_.shadowMap=Ge,_.state=b,_.info=se}As();let Nt=new oh(_,te);function gu(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function vu(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let L=se.autoReset,ee=Ge.enabled,ie=Ge.autoUpdate,he=Ge.needsUpdate,re=Ge.type;As(),se.autoReset=L,Ge.enabled=ee,Ge.autoUpdate=ie,Ge.needsUpdate=he,Ge.type=re}function yu(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function _u(L){let ee=L.target;ee.removeEventListener("dispose",_u),function(ie){(function(he){let re=Z.get(he).programs;re!==void 0&&(re.forEach(function(fe){_e.releaseProgram(fe)}),he.isShaderMaterial&&_e.releaseShaderCache(he))})(ie),Z.remove(ie)}(ee)}function xu(L,ee,ie){L.transparent===!0&&L.side===2&&L.forceSinglePass===!1?(L.side=Ht,L.needsUpdate=!0,Ea(L,ee,ie),L.side=Ii,L.needsUpdate=!0,Ea(L,ee,ie),L.side=2):Ea(L,ee,ie)}this.xr=Nt,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){let L=$.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=$.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(L){L!==void 0&&(O=L,this.setSize(le,X,!1))},this.getSize=function(L){return L.set(le,X)},this.setSize=function(L,ee,ie=!0){Nt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(le=L,X=ee,t.width=Math.floor(L*O),t.height=Math.floor(ee*O),ie===!0&&(t.style.width=L+"px",t.style.height=ee+"px"),this.setViewport(0,0,L,ee))},this.getDrawingBufferSize=function(L){return L.set(le*O,X*O).floor()},this.setDrawingBufferSize=function(L,ee,ie){le=L,X=ee,O=ie,t.width=Math.floor(L*ie),t.height=Math.floor(ee*ie),this.setViewport(0,0,L,ee)},this.getCurrentViewport=function(L){return L.copy(z)},this.getViewport=function(L){return L.copy(F)},this.setViewport=function(L,ee,ie,he){L.isVector4?F.set(L.x,L.y,L.z,L.w):F.set(L,ee,ie,he),b.viewport(z.copy(F).multiplyScalar(O).floor())},this.getScissor=function(L){return L.copy(W)},this.setScissor=function(L,ee,ie,he){L.isVector4?W.set(L.x,L.y,L.z,L.w):W.set(L,ee,ie,he),b.scissor(K.copy(W).multiplyScalar(O).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(L){b.setScissorTest(ae=L)},this.setOpaqueSort=function(L){D=L},this.setTransparentSort=function(L){N=L},this.getClearColor=function(L){return L.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(L=!0,ee=!0,ie=!0){let he=0;if(L){let re=!1;if(A!==null){let fe=A.texture.format;re=fe===Zp||fe===Yp||fe===$p}if(re){let fe=A.texture.type,Te=fe===ur||fe===Ai||fe===zh||fe===dr||fe===jp||fe===qp,Ae=Be.getClearColor(),Fe=Be.getClearAlpha(),Oe=Ae.r,ze=Ae.g,He=Ae.b;Te?(p[0]=Oe,p[1]=ze,p[2]=He,p[3]=Fe,te.clearBufferuiv(te.COLOR,0,p)):(f[0]=Oe,f[1]=ze,f[2]=He,f[3]=Fe,te.clearBufferiv(te.COLOR,0,f))}else he|=te.COLOR_BUFFER_BIT}ee&&(he|=te.DEPTH_BUFFER_BIT),ie&&(he|=te.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",gu,!1),t.removeEventListener("webglcontextrestored",vu,!1),t.removeEventListener("webglcontextcreationerror",yu,!1),De.dispose(),St.dispose(),Z.dispose(),ce.dispose(),me.dispose(),Re.dispose(),Kt.dispose(),Rr.dispose(),_e.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Mu),Nt.removeEventListener("sessionend",Eu),B&&(B.dispose(),B=null),Wi.stop()},this.renderBufferDirect=function(L,ee,ie,he,re,fe){ee===null&&(ee=H);let Te=re.isMesh&&re.matrixWorld.determinant()<0,Ae=function(xt,on,qt,ke,Ve){on.isScene!==!0&&(on=H),Q.resetTextureUnits();let Rs=on.fog,_l=ke.isMeshStandardMaterial?on.environment:null,lf=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ai,ba=(ke.isMeshStandardMaterial?me:ce).get(ke.envMap||_l),cf=ke.vertexColors===!0&&!!qt.attributes.color&&qt.attributes.color.itemSize===4,hf=!!qt.attributes.tangent&&(!!ke.normalMap||ke.anisotropy>0),uf=!!qt.morphAttributes.position,df=!!qt.morphAttributes.normal,pf=!!qt.morphAttributes.color,Ru=Li;ke.toneMapped&&(A!==null&&A.isXRRenderTarget!==!0||(Ru=_.toneMapping));let Cu=qt.morphAttributes.position||qt.morphAttributes.normal||qt.morphAttributes.color,mf=Cu!==void 0?Cu.length:0,Xe=Z.get(ke),ff=m.state.lights;if(x===!0&&(R===!0||xt!==k)){let ln=xt===k&&ke.id===V;be.setState(ke,xt,ln)}let yn=!1;ke.version===Xe.__version?Xe.needsLights&&Xe.lightsStateVersion!==ff.state.version||Xe.outputColorSpace!==lf||Ve.isBatchedMesh&&Xe.batching===!1?yn=!0:Ve.isBatchedMesh||Xe.batching!==!0?Ve.isInstancedMesh&&Xe.instancing===!1?yn=!0:Ve.isInstancedMesh||Xe.instancing!==!0?Ve.isSkinnedMesh&&Xe.skinning===!1?yn=!0:Ve.isSkinnedMesh||Xe.skinning!==!0?Ve.isInstancedMesh&&Xe.instancingColor===!0&&Ve.instanceColor===null||Ve.isInstancedMesh&&Xe.instancingColor===!1&&Ve.instanceColor!==null||Xe.envMap!==ba||ke.fog===!0&&Xe.fog!==Rs?yn=!0:Xe.numClippingPlanes===void 0||Xe.numClippingPlanes===be.numPlanes&&Xe.numIntersection===be.numIntersection?(Xe.vertexAlphas!==cf||Xe.vertexTangents!==hf||Xe.morphTargets!==uf||Xe.morphNormals!==df||Xe.morphColors!==pf||Xe.toneMapping!==Ru||ne.isWebGL2===!0&&Xe.morphTargetsCount!==mf)&&(yn=!0):yn=!0:yn=!0:yn=!0:yn=!0:(yn=!0,Xe.__version=ke.version);let ji=Xe.currentProgram;yn===!0&&(ji=Ea(ke,on,Ve));let Lu=!1,Cs=!1,xl=!1,Ot=ji.getUniforms(),qi=Xe.uniforms;if(b.useProgram(ji.program)&&(Lu=!0,Cs=!0,xl=!0),ke.id!==V&&(V=ke.id,Cs=!0),Lu||k!==xt){Ot.setValue(te,"projectionMatrix",xt.projectionMatrix),Ot.setValue(te,"viewMatrix",xt.matrixWorldInverse);let ln=Ot.map.cameraPosition;ln!==void 0&&ln.setValue(te,U.setFromMatrixPosition(xt.matrixWorld)),ne.logarithmicDepthBuffer&&Ot.setValue(te,"logDepthBufFC",2/(Math.log(xt.far+1)/Math.LN2)),(ke.isMeshPhongMaterial||ke.isMeshToonMaterial||ke.isMeshLambertMaterial||ke.isMeshBasicMaterial||ke.isMeshStandardMaterial||ke.isShaderMaterial)&&Ot.setValue(te,"isOrthographic",xt.isOrthographicCamera===!0),k!==xt&&(k=xt,Cs=!0,xl=!0)}if(Ve.isSkinnedMesh){Ot.setOptional(te,Ve,"bindMatrix"),Ot.setOptional(te,Ve,"bindMatrixInverse");let ln=Ve.skeleton;ln&&(ne.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),Ot.setValue(te,"boneTexture",ln.boneTexture,Q)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Ve.isBatchedMesh&&(Ot.setOptional(te,Ve,"batchingTexture"),Ot.setValue(te,"batchingTexture",Ve._matricesTexture,Q));let Ml=qt.morphAttributes;(Ml.position!==void 0||Ml.normal!==void 0||Ml.color!==void 0&&ne.isWebGL2===!0)&&ya.update(Ve,qt,ji),(Cs||Xe.receiveShadow!==Ve.receiveShadow)&&(Xe.receiveShadow=Ve.receiveShadow,Ot.setValue(te,"receiveShadow",Ve.receiveShadow)),ke.isMeshGouraudMaterial&&ke.envMap!==null&&(qi.envMap.value=ba,qi.flipEnvMap.value=ba.isCubeTexture&&ba.isRenderTargetTexture===!1?-1:1),Cs&&(Ot.setValue(te,"toneMappingExposure",_.toneMappingExposure),Xe.needsLights&&(_n=xl,(Pn=qi).ambientLightColor.needsUpdate=_n,Pn.lightProbe.needsUpdate=_n,Pn.directionalLights.needsUpdate=_n,Pn.directionalLightShadows.needsUpdate=_n,Pn.pointLights.needsUpdate=_n,Pn.pointLightShadows.needsUpdate=_n,Pn.spotLights.needsUpdate=_n,Pn.spotLightShadows.needsUpdate=_n,Pn.rectAreaLights.needsUpdate=_n,Pn.hemisphereLights.needsUpdate=_n),Rs&&ke.fog===!0&&Me.refreshFogUniforms(qi,Rs),Me.refreshMaterialUniforms(qi,ke,O,X,B),us.upload(te,Tu(Xe),qi,Q));var Pn,_n;if(ke.isShaderMaterial&&ke.uniformsNeedUpdate===!0&&(us.upload(te,Tu(Xe),qi,Q),ke.uniformsNeedUpdate=!1),ke.isSpriteMaterial&&Ot.setValue(te,"center",Ve.center),Ot.setValue(te,"modelViewMatrix",Ve.modelViewMatrix),Ot.setValue(te,"normalMatrix",Ve.normalMatrix),Ot.setValue(te,"modelMatrix",Ve.matrixWorld),ke.isShaderMaterial||ke.isRawShaderMaterial){let ln=ke.uniformsGroups;for(let El=0,gf=ln.length;El<gf;El++)if(ne.isWebGL2){let Pu=ln[El];Rr.update(Pu,ji),Rr.bind(Pu,ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ji}(L,ee,ie,he,re);b.setMaterial(he,Te);let Fe=ie.index,Oe=1;if(he.wireframe===!0){if(Fe=ye.getWireframeAttribute(ie),Fe===void 0)return;Oe=2}let ze=ie.drawRange,He=ie.attributes.position,st=ze.start*Oe,vn=(ze.start+ze.count)*Oe;fe!==null&&(st=Math.max(st,fe.start*Oe),vn=Math.min(vn,(fe.start+fe.count)*Oe)),Fe!==null?(st=Math.max(st,0),vn=Math.min(vn,Fe.count)):He!=null&&(st=Math.max(st,0),vn=Math.min(vn,He.count));let Xn=vn-st;if(Xn<0||Xn===1/0)return;let Xi;Kt.setup(re,he,Ae,ie,Fe);let at=Ar;if(Fe!==null&&(Xi=ve.get(Fe),at=_a,at.setIndex(Xi)),re.isMesh)he.wireframe===!0?(b.setLineWidth(he.wireframeLinewidth*j()),at.setMode(te.LINES)):at.setMode(te.TRIANGLES);else if(re.isLine){let xt=he.linewidth;xt===void 0&&(xt=1),b.setLineWidth(xt*j()),re.isLineSegments?at.setMode(te.LINES):re.isLineLoop?at.setMode(te.LINE_LOOP):at.setMode(te.LINE_STRIP)}else re.isPoints?at.setMode(te.POINTS):re.isSprite&&at.setMode(te.TRIANGLES);if(re.isBatchedMesh)at.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else if(re.isInstancedMesh)at.renderInstances(st,Xn,re.count);else if(ie.isInstancedBufferGeometry){let xt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,on=Math.min(ie.instanceCount,xt);at.renderInstances(st,Xn,on)}else at.render(st,Xn)},this.compile=function(L,ee,ie=null){ie===null&&(ie=L),m=St.get(ie),m.init(),g.push(m),ie.traverseVisible(function(re){re.isLight&&re.layers.test(ee.layers)&&(m.pushLight(re),re.castShadow&&m.pushShadow(re))}),L!==ie&&L.traverseVisible(function(re){re.isLight&&re.layers.test(ee.layers)&&(m.pushLight(re),re.castShadow&&m.pushShadow(re))}),m.setupLights(_._useLegacyLights);let he=new Set;return L.traverse(function(re){let fe=re.material;if(fe)if(Array.isArray(fe))for(let Te=0;Te<fe.length;Te++){let Ae=fe[Te];xu(Ae,ie,re),he.add(Ae)}else xu(fe,ie,re),he.add(fe)}),g.pop(),m=null,he},this.compileAsync=function(L,ee,ie=null){let he=this.compile(L,ee,ie);return new Promise(re=>{function fe(){he.forEach(function(Te){Z.get(Te).currentProgram.isReady()&&he.delete(Te)}),he.size!==0?setTimeout(fe,10):re(L)}$.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let yl=null;function Mu(){Wi.stop()}function Eu(){Wi.start()}let Wi=new nm;function bu(L,ee,ie,he){if(L.visible===!1)return;if(L.layers.test(ee.layers)){if(L.isGroup)ie=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(ee);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||M.intersectsSprite(L)){he&&U.setFromMatrixPosition(L.matrixWorld).applyMatrix4(P);let fe=Re.update(L),Te=L.material;Te.visible&&v.push(L,fe,Te,ie,U.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||M.intersectsObject(L))){let fe=Re.update(L),Te=L.material;if(he&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),U.copy(L.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),U.copy(fe.boundingSphere.center)),U.applyMatrix4(L.matrixWorld).applyMatrix4(P)),Array.isArray(Te)){let Ae=fe.groups;for(let Fe=0,Oe=Ae.length;Fe<Oe;Fe++){let ze=Ae[Fe],He=Te[ze.materialIndex];He&&He.visible&&v.push(L,fe,He,ie,U.z,ze)}}else Te.visible&&v.push(L,fe,Te,ie,U.z,null)}}let re=L.children;for(let fe=0,Te=re.length;fe<Te;fe++)bu(re[fe],ee,ie,he)}function Su(L,ee,ie,he){let re=L.opaque,fe=L.transmissive,Te=L.transparent;m.setupLightsView(ie),x===!0&&be.setGlobalState(_.clippingPlanes,ie),fe.length>0&&function(Ae,Fe,Oe,ze){if((Oe.isScene===!0?Oe.overrideMaterial:null)!==null)return;let st=ne.isWebGL2;B===null&&(B=new oi(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?ta:ur,minFilter:xo,samples:st?4:0})),_.getDrawingBufferSize(G),st?B.setSize(G.x,G.y):B.setSize(qc(G.x),qc(G.y));let vn=_.getRenderTarget();_.setRenderTarget(B),_.getClearColor(Y),J=_.getClearAlpha(),J<1&&_.setClearColor(16777215,.5),_.clear();let Xn=_.toneMapping;_.toneMapping=Li,Ma(Ae,Oe,ze),Q.updateMultisampleRenderTarget(B),Q.updateRenderTargetMipmap(B);let Xi=!1;for(let at=0,xt=Fe.length;at<xt;at++){let on=Fe[at],qt=on.object,ke=on.geometry,Ve=on.material,Rs=on.group;if(Ve.side===2&&qt.layers.test(ze.layers)){let _l=Ve.side;Ve.side=Ht,Ve.needsUpdate=!0,wu(qt,Oe,ze,ke,Ve,Rs),Ve.side=_l,Ve.needsUpdate=!0,Xi=!0}}Xi===!0&&(Q.updateMultisampleRenderTarget(B),Q.updateRenderTargetMipmap(B)),_.setRenderTarget(vn),_.setClearColor(Y,J),_.toneMapping=Xn}(re,fe,ee,ie),he&&b.viewport(z.copy(he)),re.length>0&&Ma(re,ee,ie),fe.length>0&&Ma(fe,ee,ie),Te.length>0&&Ma(Te,ee,ie),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Ma(L,ee,ie){let he=ee.isScene===!0?ee.overrideMaterial:null;for(let re=0,fe=L.length;re<fe;re++){let Te=L[re],Ae=Te.object,Fe=Te.geometry,Oe=he===null?Te.material:he,ze=Te.group;Ae.layers.test(ie.layers)&&wu(Ae,ee,ie,Fe,Oe,ze)}}function wu(L,ee,ie,he,re,fe){L.onBeforeRender(_,ee,ie,he,re,fe),L.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),re.onBeforeRender(_,ee,ie,he,L,fe),re.transparent===!0&&re.side===2&&re.forceSinglePass===!1?(re.side=Ht,re.needsUpdate=!0,_.renderBufferDirect(ie,ee,he,re,L,fe),re.side=Ii,re.needsUpdate=!0,_.renderBufferDirect(ie,ee,he,re,L,fe),re.side=2):_.renderBufferDirect(ie,ee,he,re,L,fe),L.onAfterRender(_,ee,ie,he,re,fe)}function Ea(L,ee,ie){ee.isScene!==!0&&(ee=H);let he=Z.get(L),re=m.state.lights,fe=m.state.shadowsArray,Te=re.state.version,Ae=_e.getParameters(L,re.state,fe,ee,ie),Fe=_e.getProgramCacheKey(Ae),Oe=he.programs;he.environment=L.isMeshStandardMaterial?ee.environment:null,he.fog=ee.fog,he.envMap=(L.isMeshStandardMaterial?me:ce).get(L.envMap||he.environment),Oe===void 0&&(L.addEventListener("dispose",_u),Oe=new Map,he.programs=Oe);let ze=Oe.get(Fe);if(ze!==void 0){if(he.currentProgram===ze&&he.lightsStateVersion===Te)return Au(L,Ae),ze}else Ae.uniforms=_e.getUniforms(L),L.onBuild(ie,Ae,_),L.onBeforeCompile(Ae,_),ze=_e.acquireProgram(Ae,Fe),Oe.set(Fe,ze),he.uniforms=Ae.uniforms;let He=he.uniforms;return(L.isShaderMaterial||L.isRawShaderMaterial)&&L.clipping!==!0||(He.clippingPlanes=be.uniform),Au(L,Ae),he.needsLights=function(st){return st.isMeshLambertMaterial||st.isMeshToonMaterial||st.isMeshPhongMaterial||st.isMeshStandardMaterial||st.isShadowMaterial||st.isShaderMaterial&&st.lights===!0}(L),he.lightsStateVersion=Te,he.needsLights&&(He.ambientLightColor.value=re.state.ambient,He.lightProbe.value=re.state.probe,He.directionalLights.value=re.state.directional,He.directionalLightShadows.value=re.state.directionalShadow,He.spotLights.value=re.state.spot,He.spotLightShadows.value=re.state.spotShadow,He.rectAreaLights.value=re.state.rectArea,He.ltc_1.value=re.state.rectAreaLTC1,He.ltc_2.value=re.state.rectAreaLTC2,He.pointLights.value=re.state.point,He.pointLightShadows.value=re.state.pointShadow,He.hemisphereLights.value=re.state.hemi,He.directionalShadowMap.value=re.state.directionalShadowMap,He.directionalShadowMatrix.value=re.state.directionalShadowMatrix,He.spotShadowMap.value=re.state.spotShadowMap,He.spotLightMatrix.value=re.state.spotLightMatrix,He.spotLightMap.value=re.state.spotLightMap,He.pointShadowMap.value=re.state.pointShadowMap,He.pointShadowMatrix.value=re.state.pointShadowMatrix),he.currentProgram=ze,he.uniformsList=null,ze}function Tu(L){if(L.uniformsList===null){let ee=L.currentProgram.getUniforms();L.uniformsList=us.seqWithValue(ee.seq,L.uniforms)}return L.uniformsList}function Au(L,ee){let ie=Z.get(L);ie.outputColorSpace=ee.outputColorSpace,ie.batching=ee.batching,ie.instancing=ee.instancing,ie.instancingColor=ee.instancingColor,ie.skinning=ee.skinning,ie.morphTargets=ee.morphTargets,ie.morphNormals=ee.morphNormals,ie.morphColors=ee.morphColors,ie.morphTargetsCount=ee.morphTargetsCount,ie.numClippingPlanes=ee.numClippingPlanes,ie.numIntersection=ee.numClipIntersection,ie.vertexAlphas=ee.vertexAlphas,ie.vertexTangents=ee.vertexTangents,ie.toneMapping=ee.toneMapping}Wi.setAnimationLoop(function(L){yl&&yl(L)}),typeof self!="undefined"&&Wi.setContext(self),this.setAnimationLoop=function(L){yl=L,Nt.setAnimationLoop(L),L===null?Wi.stop():Wi.start()},Nt.addEventListener("sessionstart",Mu),Nt.addEventListener("sessionend",Eu),this.render=function(L,ee){if(ee!==void 0&&ee.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(E===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(ee),ee=Nt.getCamera()),L.isScene===!0&&L.onBeforeRender(_,L,ee,A),m=St.get(L,g.length),m.init(),g.push(m),P.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),M.setFromProjectionMatrix(P),R=this.localClippingEnabled,x=be.init(this.clippingPlanes,R),v=De.get(L,y.length),v.init(),y.push(v),bu(L,ee,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(D,N),this.info.render.frame++,x===!0&&be.beginShadows();let ie=m.state.shadowsArray;if(Ge.render(ie,L,ee),x===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Be.render(v,L),m.setupLights(_._useLegacyLights),ee.isArrayCamera){let he=ee.cameras;for(let re=0,fe=he.length;re<fe;re++){let Te=he[re];Su(v,L,Te,Te.viewport)}}else Su(v,L,ee);A!==null&&(Q.updateMultisampleRenderTarget(A),Q.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(_,L,ee),Kt.resetDefaultState(),V=-1,k=null,g.pop(),m=g.length>0?g[g.length-1]:null,y.pop(),v=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,ee,ie){Z.get(L.texture).__webglTexture=ee,Z.get(L.depthTexture).__webglTexture=ie;let he=Z.get(L);he.__hasExternalTextures=!0,he.__hasExternalTextures&&(he.__autoAllocateDepthBuffer=ie===void 0,he.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,ee){let ie=Z.get(L);ie.__webglFramebuffer=ee,ie.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(L,ee=0,ie=0){A=L,T=ee,w=ie;let he=!0,re=null,fe=!1,Te=!1;if(L){let Ae=Z.get(L);Ae.__useDefaultFramebuffer!==void 0?(b.bindFramebuffer(te.FRAMEBUFFER,null),he=!1):Ae.__webglFramebuffer===void 0?Q.setupRenderTarget(L):Ae.__hasExternalTextures&&Q.rebindTextures(L,Z.get(L.texture).__webglTexture,Z.get(L.depthTexture).__webglTexture);let Fe=L.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Te=!0);let Oe=Z.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(re=Array.isArray(Oe[ee])?Oe[ee][ie]:Oe[ee],fe=!0):re=ne.isWebGL2&&L.samples>0&&Q.useMultisampledRTT(L)===!1?Z.get(L).__webglMultisampledFramebuffer:Array.isArray(Oe)?Oe[ie]:Oe,z.copy(L.viewport),K.copy(L.scissor),I=L.scissorTest}else z.copy(F).multiplyScalar(O).floor(),K.copy(W).multiplyScalar(O).floor(),I=ae;if(b.bindFramebuffer(te.FRAMEBUFFER,re)&&ne.drawBuffers&&he&&b.drawBuffers(L,re),b.viewport(z),b.scissor(K),b.setScissorTest(I),fe){let Ae=Z.get(L.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae.__webglTexture,ie)}else if(Te){let Ae=Z.get(L.texture),Fe=ee||0;te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,Ae.__webglTexture,ie||0,Fe)}V=-1},this.readRenderTargetPixels=function(L,ee,ie,he,re,fe,Te){if(!L||!L.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Z.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){b.bindFramebuffer(te.FRAMEBUFFER,Ae);try{let Fe=L.texture,Oe=Fe.format,ze=Fe.type;if(Oe!==hn&&an.convert(Oe)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let He=ze===ta&&($.has("EXT_color_buffer_half_float")||ne.isWebGL2&&$.has("EXT_color_buffer_float"));if(!(ze===ur||an.convert(ze)===te.getParameter(te.IMPLEMENTATION_COLOR_READ_TYPE)||ze===Ri&&(ne.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float"))||He))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");ee>=0&&ee<=L.width-he&&ie>=0&&ie<=L.height-re&&te.readPixels(ee,ie,he,re,an.convert(Oe),an.convert(ze),fe)}finally{let Fe=A!==null?Z.get(A).__webglFramebuffer:null;b.bindFramebuffer(te.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(L,ee,ie=0){let he=Math.pow(2,-ie),re=Math.floor(ee.image.width*he),fe=Math.floor(ee.image.height*he);Q.setTexture2D(ee,0),te.copyTexSubImage2D(te.TEXTURE_2D,ie,0,0,L.x,L.y,re,fe),b.unbindTexture()},this.copyTextureToTexture=function(L,ee,ie,he=0){let re=ee.image.width,fe=ee.image.height,Te=an.convert(ie.format),Ae=an.convert(ie.type);Q.setTexture2D(ie,0),te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,ie.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,ie.unpackAlignment),ee.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,he,L.x,L.y,re,fe,Te,Ae,ee.image.data):ee.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,he,L.x,L.y,ee.mipmaps[0].width,ee.mipmaps[0].height,Te,ee.mipmaps[0].data):te.texSubImage2D(te.TEXTURE_2D,he,L.x,L.y,Te,Ae,ee.image),he===0&&ie.generateMipmaps&&te.generateMipmap(te.TEXTURE_2D),b.unbindTexture()},this.copyTextureToTexture3D=function(L,ee,ie,he,re=0){if(_.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let fe=L.max.x-L.min.x+1,Te=L.max.y-L.min.y+1,Ae=L.max.z-L.min.z+1,Fe=an.convert(he.format),Oe=an.convert(he.type),ze;if(he.isData3DTexture)Q.setTexture3D(he,0),ze=te.TEXTURE_3D;else{if(!he.isDataArrayTexture&&!he.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");Q.setTexture2DArray(he,0),ze=te.TEXTURE_2D_ARRAY}te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,he.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,he.unpackAlignment);let He=te.getParameter(te.UNPACK_ROW_LENGTH),st=te.getParameter(te.UNPACK_IMAGE_HEIGHT),vn=te.getParameter(te.UNPACK_SKIP_PIXELS),Xn=te.getParameter(te.UNPACK_SKIP_ROWS),Xi=te.getParameter(te.UNPACK_SKIP_IMAGES),at=ie.isCompressedTexture?ie.mipmaps[re]:ie.image;te.pixelStorei(te.UNPACK_ROW_LENGTH,at.width),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,at.height),te.pixelStorei(te.UNPACK_SKIP_PIXELS,L.min.x),te.pixelStorei(te.UNPACK_SKIP_ROWS,L.min.y),te.pixelStorei(te.UNPACK_SKIP_IMAGES,L.min.z),ie.isDataTexture||ie.isData3DTexture?te.texSubImage3D(ze,re,ee.x,ee.y,ee.z,fe,Te,Ae,Fe,Oe,at.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D(ze,re,ee.x,ee.y,ee.z,fe,Te,Ae,Fe,at.data)):te.texSubImage3D(ze,re,ee.x,ee.y,ee.z,fe,Te,Ae,Fe,Oe,at),te.pixelStorei(te.UNPACK_ROW_LENGTH,He),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,st),te.pixelStorei(te.UNPACK_SKIP_PIXELS,vn),te.pixelStorei(te.UNPACK_SKIP_ROWS,Xn),te.pixelStorei(te.UNPACK_SKIP_IMAGES,Xi),re===0&&he.generateMipmaps&&te.generateMipmap(ze),b.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Q.setTextureCube(L,0):L.isData3DTexture?Q.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Q.setTexture2DArray(L,0):Q.setTexture2D(L,0),b.unbindTexture()},this.resetState=function(){T=0,w=0,A=null,b.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Hh?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===rl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pt?mr:Kp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mr?pt:ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},lh=class extends ra{};lh.prototype.isWebGL1Renderer=!0;var Oo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bo=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ch=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gt=new S,zo=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},li=class extends Bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rs,Xs=new S,ss=new S,as=new S,os=new ue,js=new ue,lm=new Le,ro=new S,qs=new S,so=new S,bp=new ue,Lc=new ue,Sp=new ue,Ui=class extends At{constructor(e=new li){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new Ze;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ch(t,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new zo(n,3,0,!1)),rs.setAttribute("uv",new zo(n,2,3,!1))}this.geometry=rs,this.material=e,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),lm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-as.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;ao(ro.set(-.5,-.5,0),as,a,ss,r,s),ao(qs.set(.5,-.5,0),as,a,ss,r,s),ao(so.set(.5,.5,0),as,a,ss,r,s),bp.set(0,0),Lc.set(1,0),Sp.set(1,1);let o=e.ray.intersectTriangle(ro,qs,so,!1,Xs);if(o===null&&(ao(qs.set(-.5,.5,0),as,a,ss,r,s),Lc.set(0,1),o=e.ray.intersectTriangle(ro,so,qs,!1,Xs),o===null))return;let l=e.ray.origin.distanceTo(Xs);l<e.near||l>e.far||t.push({distance:l,point:Xs.clone(),uv:Ci.getInterpolation(Xs,ro,qs,so,bp,Lc,Sp,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ao(i,e,t,n,r,s){os.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(js.x=s*os.x-r*os.y,js.y=r*os.x+s*os.y):js.copy(os),i.copy(e),i.x+=js.x,i.y+=js.y,i.applyMatrix4(lm)}var _y=new S,xy=new S;var My=new S,Ey=new gt,by=new gt,Sy=new S,wy=new Le,Ty=new S,Ay=new Rn,Ry=new Le,Cy=new fr;var Ho=class extends rn{constructor(e=null,t=1,n=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ly=new Le,Py=new Le;var ko=class extends vt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ls=new Le,wp=new Le,oo=[],Tp=new An,q0=new Le,$s=new ge,Ys=new Rn,gr=class extends ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ko(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,q0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new An),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Tp.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(Tp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Ys.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let n=this.matrixWorld,r=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),e.ray.intersectsSphere(Ys)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ls),wp.multiplyMatrices(n,ls),$s.matrixWorld=wp,$s.raycast(e,oo);for(let a=0,o=oo.length;a<o;a++){let l=oo[a];l.instanceId=s,l.object=this,t.push(l)}oo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ko(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var hh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,r=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];r.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var Iy=new Le,Dy=new Le,Fy=new Le,Uy=new Le,Ny=new ys,Oy=new An,By=new Rn,zy=new S,Hy=new hh,ky=new ge;var sa=class extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ap=new S,Rp=new S,Cp=new Le,Pc=new fr,lo=new Rn,Go=class extends At{constructor(e=new Ze,t=new sa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ap.fromBufferAttribute(t,r-1),Rp.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ap.distanceTo(Rp);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),lo.radius+=s,e.ray.intersectsSphere(lo)===!1)return;Cp.copy(r).invert(),Pc.copy(e.ray).applyMatrix4(Cp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new S,h=new S,u=new S,d=new S,p=this.isLineSegments?2:1,f=n.index,v=n.attributes.position;if(f!==null)for(let m=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count)-1;m<y;m+=p){let g=f.getX(m),_=f.getX(m+1);if(c.fromBufferAttribute(v,g),h.fromBufferAttribute(v,_),Pc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}else for(let m=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count)-1;m<y;m+=p){if(c.fromBufferAttribute(v,m),h.fromBufferAttribute(v,m+1),Pc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let g=e.ray.origin.distanceTo(d);g<e.near||g>e.far||t.push({distance:g,point:u.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Gy=new S,Vy=new S;var Ni=class extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lp=new Le,uh=new fr,co=new Rn,ho=new S,vr=class extends At{constructor(e=new Ze,t=new Ni){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),co.radius+=s,e.ray.intersectsSphere(co)===!1)return;Lp.copy(r).invert(),uh.copy(e.ray).applyMatrix4(Lp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);ho.fromBufferAttribute(h,p),Pp(ho,p,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)ho.fromBufferAttribute(h,u),Pp(ho,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pp(i,e,t,n,r,s,a){let o=uh.distanceSqToPoint(i);if(o<t){let l=new S;uh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Vo=class extends rn{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=n[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ue:new S);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,r=[],s=[],a=[],o=new S,l=new Le;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new S)}s[0]=new S,a[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Pt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Pt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},aa=class extends dn{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new ue,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},dh=class extends aa{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gh(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var uo=new S,Ic=new Gh,Dc=new Gh,Fc=new Gh,ph=class extends dn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new S){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(uo.subVectors(r[0],r[1]).add(r[0]),o=uo);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(uo.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=uo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);v<1e-4&&(v=1),f<1e-4&&(f=v),m<1e-4&&(m=v),Ic.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,v,m),Dc.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,v,m),Fc.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,v,m)}else this.curveType==="catmullrom"&&(Ic.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Dc.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Fc.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(Ic.calc(h),Dc.calc(h),Fc.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new S().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ip(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function Ks(i,e,t,n){return function(r,s){let a=1-r;return a*a*s}(i,e)+function(r,s){return 2*(1-r)*r*s}(i,t)+function(r,s){return r*r*s}(i,n)}function Qs(i,e,t,n,r){return function(s,a){let o=1-s;return o*o*o*a}(i,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(i,t)+function(s,a){return 3*(1-s)*s*s*a}(i,n)+function(s,a){return s*s*s*a}(i,r)}var Wo=class extends dn{constructor(e=new ue,t=new ue,n=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ue){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Qs(e,r.x,s.x,a.x,o.x),Qs(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mh=class extends dn{constructor(e=new S,t=new S,n=new S,r=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new S){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Qs(e,r.x,s.x,a.x,o.x),Qs(e,r.y,s.y,a.y,o.y),Qs(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xo=class extends dn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fh=class extends dn{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends dn{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ks(e,r.x,s.x,a.x),Ks(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends dn{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ks(e,r.x,s.x,a.x),Ks(e,r.y,s.y,a.y),Ks(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ip(o,l.x,c.x,h.x,u.x),Ip(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ue().fromArray(r))}return this}},Yo=Object.freeze({__proto__:null,ArcCurve:dh,CatmullRomCurve3:ph,CubicBezierCurve:Wo,CubicBezierCurve3:mh,EllipseCurve:aa,LineCurve:Xo,LineCurve3:fh,QuadraticBezierCurve:jo,QuadraticBezierCurve3:qo,SplineCurve:$o}),gh=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Yo[r.type]().fromJSON(r))}return this}},oa=class extends gh{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Xo(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new jo(this.currentPoint.clone(),new ue(e,t),new ue(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new Wo(this.currentPoint.clone(),new ue(e,t),new ue(n,r),new ue(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new $o(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){let c=new aa(e,t,n,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Zo=class i extends Ze{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Pt(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new S,d=new ue,p=new S,f=new S,v=new S,m=0,y=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,y=e[g+1].y-e[g].y,p.x=1*y,p.y=-m,p.z=0*y,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[g+1].x-e[g].x,y=e[g+1].y-e[g].y,p.x=1*y,p.y=-m,p.z=0*y,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(f)}for(let g=0;g<=t;g++){let _=n+g*h*r,E=Math.sin(_),T=Math.cos(_);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*E,u.y=e[w].y,u.z=e[w].x*T,a.push(u.x,u.y,u.z),d.x=g/t,d.y=w/(e.length-1),o.push(d.x,d.y);let A=l[3*w+0]*E,V=l[3*w+1],k=l[3*w+0]*T;c.push(A,V,k)}}for(let g=0;g<t;g++)for(let _=0;_<e.length-1;_++){let E=_+g*e.length,T=E,w=E+e.length,A=E+e.length+1,V=E+1;s.push(T,w,V),s.push(A,V,w)}this.setIndex(s),this.setAttribute("position",new Ce(a,3)),this.setAttribute("uv",new Ce(o,2)),this.setAttribute("normal",new Ce(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},yr=class i extends Zo{constructor(e=1,t=1,n=4,r=8){let s=new oa;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Zt=class i extends Ze{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new S,h=new ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},je=class i extends Ze{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,v=[],m=n/2,y=0;function g(_){let E=f,T=new ue,w=new S,A=0,V=_===!0?e:t,k=_===!0?1:-1;for(let K=1;K<=r;K++)u.push(0,m*k,0),d.push(0,k,0),p.push(.5,.5),f++;let z=f;for(let K=0;K<=r;K++){let I=K/r*l+o,Y=Math.cos(I),J=Math.sin(I);w.x=V*J,w.y=m*k,w.z=V*Y,u.push(w.x,w.y,w.z),d.push(0,k,0),T.x=.5*Y+.5,T.y=.5*J*k+.5,p.push(T.x,T.y),f++}for(let K=0;K<r;K++){let I=E+K,Y=z+K;_===!0?h.push(Y,Y+1,I):h.push(Y+1,Y,I),A+=3}c.addGroup(y,A,_===!0?1:2),y+=A}(function(){let _=new S,E=new S,T=0,w=(t-e)/n;for(let A=0;A<=s;A++){let V=[],k=A/s,z=k*(t-e)+e;for(let K=0;K<=r;K++){let I=K/r,Y=I*l+o,J=Math.sin(Y),le=Math.cos(Y);E.x=z*J,E.y=-k*n+m,E.z=z*le,u.push(E.x,E.y,E.z),_.set(J,w,le).normalize(),d.push(_.x,_.y,_.z),p.push(I,1-k),V.push(f++)}v.push(V)}for(let A=0;A<r;A++)for(let V=0;V<s;V++){let k=v[V][A],z=v[V+1][A],K=v[V+1][A+1],I=v[V][A+1];h.push(k,z,I),h.push(z,K,I),T+=6}c.addGroup(y,T,0),y+=T})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zn=class i extends je{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_r=class i extends Ze{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(d,p,f,v){let m=v+1,y=[];for(let g=0;g<=m;g++){y[g]=[];let _=d.clone().lerp(f,g/m),E=p.clone().lerp(f,g/m),T=m-g;for(let w=0;w<=T;w++)y[g][w]=w===0&&g===m?_:_.clone().lerp(E,w/T)}for(let g=0;g<m;g++)for(let _=0;_<2*(m-g)-1;_++){let E=Math.floor(_/2);_%2==0?(l(y[g][E+1]),l(y[g+1][E]),l(y[g][E])):(l(y[g][E+1]),l(y[g+1][E+1]),l(y[g+1][E]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,v){v<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=v/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new S,f=new S,v=new S;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],v),o(p,f,v,d)})(r),function(d){let p=new S;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z}(n),function(){let d=new S;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let v=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(v,1-m)}var p;(function(){let f=new S,v=new S,m=new S,y=new S,g=new ue,_=new ue,E=new ue;for(let T=0,w=0;T<s.length;T+=9,w+=6){f.set(s[T+0],s[T+1],s[T+2]),v.set(s[T+3],s[T+4],s[T+5]),m.set(s[T+6],s[T+7],s[T+8]),g.set(a[w+0],a[w+1]),_.set(a[w+2],a[w+3]),E.set(a[w+4],a[w+5]),y.copy(f).add(v).add(m).divideScalar(3);let A=u(y);h(g,w+0,f,A),h(_,w+2,v,A),h(E,w+4,m,A)}})(),function(){for(let f=0;f<a.length;f+=6){let v=a[f+0],m=a[f+2],y=a[f+4],g=Math.max(v,m,y),_=Math.min(v,m,y);g>.9&&_<.1&&(v<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),y<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new Ce(s,3)),this.setAttribute("normal",new Ce(s.slice(),3)),this.setAttribute("uv",new Ce(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},vh=class i extends _r{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},po=new S,mo=new S,Uc=new S,fo=new Ci,yh=class extends Ze{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(_o*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:v,b:m,c:y}=fo;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),y.fromBufferAttribute(o,c[2]),fo.getNormal(Uc),u[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let _=(g+1)%3,E=u[g],T=u[_],w=fo[h[g]],A=fo[h[_]],V=`${E}_${T}`,k=`${T}_${E}`;k in d&&d[k]?(Uc.dot(d[k].normal)<=s&&(p.push(w.x,w.y,w.z),p.push(A.x,A.y,A.z)),d[k]=null):V in d||(d[V]={index0:c[g],index1:c[_],normal:Uc.clone()})}}for(let f in d)if(d[f]){let{index0:v,index1:m}=d[f];po.fromBufferAttribute(o,v),mo.fromBufferAttribute(o,m),p.push(po.x,po.y,po.z),p.push(mo.x,mo.y,mo.z)}this.setAttribute("position",new Ce(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ci=class extends oa{constructor(e){super(e),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new oa().fromJSON(r))}return this}},$0=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Dp(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=function(f,v,m,y){let g=[],_,E,T,w,A;for(_=0,E=v.length;_<E;_++)T=v[_]*y,w=_<E-1?v[_+1]*y:f.length,A=Dp(f,T,w,y,!1),A===A.next&&(A.steiner=!0),g.push(nv(A));for(g.sort(Q0),_=0;_<g.length;_++)m=ev(g[_],m);return m}(i,e,s,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let f=t;f<r;f+=t)u=i[f],d=i[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return la(s,a,t,o,l,p,0),a};function Dp(i,e,t,n,r){let s,a;if(r===function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u}(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Fp(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Fp(s,i[s],i[s+1],a);return a&&al(a,a.next)&&(ha(a),a=a.next),a}function xr(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!al(n,n.next)&&ct(n.prev,n,n.next)!==0)n=n.next;else{if(ha(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function la(i,e,t,n,r,s,a){if(!i)return;!a&&s&&function(h,u,d,p){let f=h;do f.z===0&&(f.z=_h(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(v){let m,y,g,_,E,T,w,A,V=1;do{for(y=v,v=null,E=null,T=0;y;){for(T++,g=y,w=0,m=0;m<V&&(w++,g=g.nextZ,g);m++);for(A=V;w>0||A>0&&g;)w!==0&&(A===0||!g||y.z<=g.z)?(_=y,y=y.nextZ,w--):(_=g,g=g.nextZ,A--),E?E.nextZ=_:v=_,_.prevZ=E,E=_;y=g}E.nextZ=null,V*=2}while(T>1)}(f)}(i,n,r,s);let o,l,c=i;for(;i.prev!==i.next;)if(o=i.prev,l=i.next,s?Z0(i,n,r,s):Y0(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),ha(i),i=l.next,c=l.next;else if((i=l)===c){a?a===1?la(i=J0(xr(i),e,t),e,t,n,r,s,2):a===2&&K0(i,e,t,n,r,s):la(xr(i),e,t,n,r,s,1);break}}function Y0(i){let e=i.prev,t=i,n=i.next;if(ct(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&cs(r,o,s,l,a,c,f.x,f.y)&&ct(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Z0(i,e,t,n){let r=i.prev,s=i,a=i.next;if(ct(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,y=_h(p,f,e,t,n),g=_h(v,m,e,t,n),_=i.prevZ,E=i.nextZ;for(;_&&_.z>=y&&E&&E.z<=g;){if(_.x>=p&&_.x<=v&&_.y>=f&&_.y<=m&&_!==r&&_!==a&&cs(o,h,l,u,c,d,_.x,_.y)&&ct(_.prev,_,_.next)>=0||(_=_.prevZ,E.x>=p&&E.x<=v&&E.y>=f&&E.y<=m&&E!==r&&E!==a&&cs(o,h,l,u,c,d,E.x,E.y)&&ct(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;_&&_.z>=y;){if(_.x>=p&&_.x<=v&&_.y>=f&&_.y<=m&&_!==r&&_!==a&&cs(o,h,l,u,c,d,_.x,_.y)&&ct(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;E&&E.z<=g;){if(E.x>=p&&E.x<=v&&E.y>=f&&E.y<=m&&E!==r&&E!==a&&cs(o,h,l,u,c,d,E.x,E.y)&&ct(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function J0(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!al(r,s)&&cm(r,n,n.next,s)&&ca(r,s)&&ca(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ha(n),ha(n.next),n=i=s),n=n.next}while(n!==i);return xr(n)}function K0(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&iv(a,o)){let l=hm(a,o);return a=xr(a,a.next),l=xr(l,l.next),la(a,e,t,n,r,s,0),void la(l,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function Q0(i,e){return i.x-e.x}function ev(i,e){let t=function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,v=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&cs(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),ca(o,r)&&(f<v||f===v&&(o.x>a.x||o.x===a.x&&tv(a,o)))&&(a=o,v=f)),o=o.next;while(o!==u);return a}(i,e);if(!t)return e;let n=hm(t,i);return xr(n,n.next),xr(t,t.next)}function tv(i,e){return ct(i.prev,i,e.prev)<0&&ct(e.next,i,i.next)<0}function _h(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function nv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function cs(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function iv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&cm(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1}(i,e)&&(ca(i,e)&&ca(e,i)&&function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s}(i,e)&&(ct(i.prev,i,e.prev)||ct(i,e.prev,e))||al(i,e)&&ct(i.prev,i,i.next)>0&&ct(e.prev,e,e.next)>0)}function ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function al(i,e){return i.x===e.x&&i.y===e.y}function cm(i,e,t,n){let r=vo(ct(i,e,t)),s=vo(ct(i,e,n)),a=vo(ct(t,n,i)),o=vo(ct(t,n,e));return r!==s&&a!==o||!(r!==0||!go(i,t,e))||!(s!==0||!go(i,n,e))||!(a!==0||!go(t,i,n))||!(o!==0||!go(t,e,n))}function go(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function vo(i){return i>0?1:i<0?-1:0}function ca(i,e){return ct(i.prev,i,i.next)<0?ct(i,e,i.next)>=0&&ct(i,i.prev,e)>=0:ct(i,e,i.prev)<0||ct(i,i.next,e)<0}function hm(i,e){let t=new xh(i.i,i.x,i.y),n=new xh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Fp(i,e,t,n){let r=new xh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ha(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Pi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Up(e),Np(n,e);let a=e.length;t.forEach(Up);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Np(n,t[l]);let o=$0(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Up(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Np(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Oi=class i extends Ze{constructor(e=new ci([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:rv,_,E,T,w,A,V=!1;y&&(_=y.getSpacedPoints(h),V=!0,d=!1,E=y.computeFrenetFrames(h,!1),T=new S,w=new S,A=new S),d||(m=0,p=0,f=0,v=0);let k=o.extractPoints(c),z=k.shape,K=k.holes;if(!Pi.isClockWise(z)){z=z.reverse();for(let U=0,H=K.length;U<H;U++){let j=K[U];Pi.isClockWise(j)&&(K[U]=j.reverse())}}let I=Pi.triangulateShape(z,K),Y=z;for(let U=0,H=K.length;U<H;U++){let j=K[U];z=z.concat(j)}function J(U,H,j){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(H,j)}let le=z.length,X=I.length;function O(U,H,j){let $,ne,b,se=U.x-H.x,Z=U.y-H.y,Q=j.x-U.x,ce=j.y-U.y,me=se*se+Z*Z,ve=se*ce-Z*Q;if(Math.abs(ve)>Number.EPSILON){let ye=Math.sqrt(me),Re=Math.sqrt(Q*Q+ce*ce),_e=H.x-Z/ye,Me=H.y+se/ye,De=((j.x-ce/Re-_e)*ce-(j.y+Q/Re-Me)*Q)/(se*ce-Z*Q);$=_e+se*De-U.x,ne=Me+Z*De-U.y;let St=$*$+ne*ne;if(St<=2)return new ue($,ne);b=Math.sqrt(St/2)}else{let ye=!1;se>Number.EPSILON?Q>Number.EPSILON&&(ye=!0):se<-Number.EPSILON?Q<-Number.EPSILON&&(ye=!0):Math.sign(Z)===Math.sign(ce)&&(ye=!0),ye?($=-Z,ne=se,b=Math.sqrt(me)):($=se,ne=Z,b=Math.sqrt(me/2))}return new ue($/b,ne/b)}let D=[];for(let U=0,H=Y.length,j=H-1,$=U+1;U<H;U++,j++,$++)j===H&&(j=0),$===H&&($=0),D[U]=O(Y[U],Y[j],Y[$]);let N=[],F,W=D.concat();for(let U=0,H=K.length;U<H;U++){let j=K[U];F=[];for(let $=0,ne=j.length,b=ne-1,se=$+1;$<ne;$++,b++,se++)b===ne&&(b=0),se===ne&&(se=0),F[$]=O(j[$],j[b],j[se]);N.push(F),W=W.concat(F)}for(let U=0;U<m;U++){let H=U/m,j=p*Math.cos(H*Math.PI/2),$=f*Math.sin(H*Math.PI/2)+v;for(let ne=0,b=Y.length;ne<b;ne++){let se=J(Y[ne],D[ne],$);x(se.x,se.y,-j)}for(let ne=0,b=K.length;ne<b;ne++){let se=K[ne];F=N[ne];for(let Z=0,Q=se.length;Z<Q;Z++){let ce=J(se[Z],F[Z],$);x(ce.x,ce.y,-j)}}}let ae=f+v;for(let U=0;U<le;U++){let H=d?J(z[U],W[U],ae):z[U];V?(w.copy(E.normals[0]).multiplyScalar(H.x),T.copy(E.binormals[0]).multiplyScalar(H.y),A.copy(_[0]).add(w).add(T),x(A.x,A.y,A.z)):x(H.x,H.y,0)}for(let U=1;U<=h;U++)for(let H=0;H<le;H++){let j=d?J(z[H],W[H],ae):z[H];V?(w.copy(E.normals[U]).multiplyScalar(j.x),T.copy(E.binormals[U]).multiplyScalar(j.y),A.copy(_[U]).add(w).add(T),x(A.x,A.y,A.z)):x(j.x,j.y,u/h*U)}for(let U=m-1;U>=0;U--){let H=U/m,j=p*Math.cos(H*Math.PI/2),$=f*Math.sin(H*Math.PI/2)+v;for(let ne=0,b=Y.length;ne<b;ne++){let se=J(Y[ne],D[ne],$);x(se.x,se.y,u+j)}for(let ne=0,b=K.length;ne<b;ne++){let se=K[ne];F=N[ne];for(let Z=0,Q=se.length;Z<Q;Z++){let ce=J(se[Z],F[Z],$);V?x(ce.x,ce.y+_[h-1].y,_[h-1].x+j):x(ce.x,ce.y,u+j)}}}function M(U,H){let j=U.length;for(;--j>=0;){let $=j,ne=j-1;ne<0&&(ne=U.length-1);for(let b=0,se=h+2*m;b<se;b++){let Z=le*b,Q=le*(b+1);B(H+$+Z,H+ne+Z,H+ne+Q,H+$+Q)}}}function x(U,H,j){l.push(U),l.push(H),l.push(j)}function R(U,H,j){P(U),P(H),P(j);let $=r.length/3,ne=g.generateTopUV(n,r,$-3,$-2,$-1);G(ne[0]),G(ne[1]),G(ne[2])}function B(U,H,j,$){P(U),P(H),P($),P(H),P(j),P($);let ne=r.length/3,b=g.generateSideWallUV(n,r,ne-6,ne-3,ne-2,ne-1);G(b[0]),G(b[1]),G(b[3]),G(b[1]),G(b[2]),G(b[3])}function P(U){r.push(l[3*U+0]),r.push(l[3*U+1]),r.push(l[3*U+2])}function G(U){s.push(U.x),s.push(U.y)}(function(){let U=r.length/3;if(d){let H=0,j=le*H;for(let $=0;$<X;$++){let ne=I[$];R(ne[2]+j,ne[1]+j,ne[0]+j)}H=h+2*m,j=le*H;for(let $=0;$<X;$++){let ne=I[$];R(ne[0]+j,ne[1]+j,ne[2]+j)}}else{for(let H=0;H<X;H++){let j=I[H];R(j[2],j[1],j[0])}for(let H=0;H<X;H++){let j=I[H];R(j[0]+le*h,j[1]+le*h,j[2]+le*h)}}n.addGroup(U,r.length/3-U,0)})(),function(){let U=r.length/3,H=0;M(Y,H),H+=Y.length;for(let j=0,$=K.length;j<$;j++){let ne=K[j];M(ne,H),H+=ne.length}n.addGroup(U,r.length/3-U,1)}()}this.setAttribute("position",new Ce(r,3)),this.setAttribute("uv",new Ce(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Yo[r.type]().fromJSON(r)),new i(n,e.options)}},rv={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*r],h=e[3*r+1];return[new ue(s,a),new ue(o,l),new ue(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],v=e[3*s],m=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ue(a,1-l),new ue(c,1-u),new ue(d,1-f),new ue(v,1-y)]:[new ue(o,1-l),new ue(h,1-u),new ue(p,1-f),new ue(m,1-y)]}},Xt=class i extends _r{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Mh=class i extends _r{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},hi=class i extends Ze{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new S,f=new ue;for(let v=0;v<=r;v++){for(let m=0;m<=n;m++){let y=s+m/n*a;p.x=u*Math.cos(y),p.y=u*Math.sin(y),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let v=0;v<r;v++){let m=v*(n+1);for(let y=0;y<n;y++){let g=y+m,_=g,E=g+n+1,T=g+n+2,w=g+1;o.push(_,E,w),o.push(E,T,w)}}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Eh=class i extends Ze{constructor(e=new ci([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Pi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,y=f.length;m<y;m++){let g=f[m];Pi.isClockWise(g)===!0&&(f[m]=g.reverse())}let v=Pi.triangulateShape(p,f);for(let m=0,y=f.length;m<y;m++){let g=f[m];p=p.concat(g)}for(let m=0,y=p.length;m<y;m++){let g=p[m];r.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let m=0,y=v.length;m<y;m++){let g=v[m],_=g[0]+u,E=g[1]+u,T=g[2]+u;n.push(_,E,T),l+=3}}this.setIndex(n),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(s,3)),this.setAttribute("uv",new Ce(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},Je=class i extends Ze{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new S,d=new S,p=[],f=[],v=[],m=[];for(let y=0;y<=n;y++){let g=[],_=y/n,E=0;y===0&&a===0?E=.5/t:y===n&&l===Math.PI&&(E=-.5/t);for(let T=0;T<=t;T++){let w=T/t;u.x=-e*Math.cos(r+w*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+w*s)*Math.sin(a+_*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(w+E,1-_),g.push(c++)}h.push(g)}for(let y=0;y<n;y++)for(let g=0;g<t;g++){let _=h[y][g+1],E=h[y][g],T=h[y+1][g],w=h[y+1][g+1];(y!==0||a>0)&&p.push(_,E,w),(y!==n-1||l<Math.PI)&&p.push(E,T,w)}this.setIndex(p),this.setAttribute("position",new Ce(f,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},bh=class i extends _r{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Hn=class i extends Ze{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new S,u=new S,d=new S;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){let v=f/r*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){let v=(r+1)*p+f-1,m=(r+1)*(p-1)+f-1,y=(r+1)*(p-1)+f,g=(r+1)*p+f;a.push(v,m,g),a.push(m,y,g)}this.setIndex(a),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Sh=class i extends Ze{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new S,d=new S,p=new S,f=new S,v=new S,m=new S,y=new S;for(let _=0;_<=n;++_){let E=_/n*s*Math.PI*2;g(E,s,a,e,p),g(E+.01,s,a,e,f),m.subVectors(f,p),y.addVectors(f,p),v.crossVectors(m,y),y.crossVectors(v,m),v.normalize(),y.normalize();for(let T=0;T<=r;++T){let w=T/r*Math.PI*2,A=-t*Math.cos(w),V=t*Math.sin(w);u.x=p.x+(A*y.x+V*v.x),u.y=p.y+(A*y.y+V*v.y),u.z=p.z+(A*y.z+V*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(_/n),h.push(T/r)}}for(let _=1;_<=n;_++)for(let E=1;E<=r;E++){let T=(r+1)*(_-1)+(E-1),w=(r+1)*_+(E-1),A=(r+1)*_+E,V=(r+1)*(_-1)+E;o.push(T,w,V),o.push(w,A,V)}function g(_,E,T,w,A){let V=Math.cos(_),k=Math.sin(_),z=T/E*_,K=Math.cos(z);A.x=w*(2+K)*.5*V,A.y=w*(2+K)*k*.5,A.z=w*Math.sin(z)*.5}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},wh=class i extends Ze{constructor(e=new qo(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new S,l=new S,c=new ue,h=new S,u=[],d=[],p=[],f=[];function v(m){h=e.getPointAt(m/t,h);let y=a.normals[m],g=a.binormals[m];for(let _=0;_<=r;_++){let E=_/r*Math.PI*2,T=Math.sin(E),w=-Math.cos(E);l.x=w*y.x+T*g.x,l.y=w*y.y+T*g.y,l.z=w*y.z+T*g.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)v(m);v(s===!1?t:0),function(){for(let m=0;m<=t;m++)for(let y=0;y<=r;y++)c.x=m/t,c.y=y/r,p.push(c.x,c.y)}(),function(){for(let m=1;m<=t;m++)for(let y=1;y<=r;y++){let g=(r+1)*(m-1)+(y-1),_=(r+1)*m+(y-1),E=(r+1)*m+y,T=(r+1)*(m-1)+y;f.push(g,_,T),f.push(_,E,T)}}()})(),this.setIndex(f),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Yo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Th=class extends Ze{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new S,s=new S;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let v=0;v<3;v++){let m=o.getX(p+v),y=o.getX(p+(v+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,y),Op(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Op(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ce(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Op(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var Wy=Object.freeze({__proto__:null,BoxGeometry:Ee,CapsuleGeometry:yr,CircleGeometry:Zt,ConeGeometry:zn,CylinderGeometry:je,DodecahedronGeometry:vh,EdgesGeometry:yh,ExtrudeGeometry:Oi,IcosahedronGeometry:Xt,LatheGeometry:Zo,OctahedronGeometry:Mh,PlaneGeometry:nt,PolyhedronGeometry:_r,RingGeometry:hi,ShapeGeometry:Eh,SphereGeometry:Je,TetrahedronGeometry:bh,TorusGeometry:Hn,TorusKnotGeometry:Sh,TubeGeometry:wh,WireframeGeometry:Th});var Rt=class extends Bn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new we(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function yo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function sv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var _s=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ah=class extends _s{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ud,endingEnd:Ud}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nd:s=e,o=2*t-n;break;case Od:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nd:a=e,l=2*n-t;break;case Od:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),v=f*f,m=v*f,y=-d*m+2*d*v-d*f,g=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*f+1,_=(-1-p)*m+(1.5+p)*v+.5*f,E=p*m-p*v;for(let T=0;T!==o;++T)s[T]=y*a[h+T]+g*a[c+T]+_*a[l+T]+E*a[u+T];return s}},Rh=class extends _s{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Ch=class extends _s{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Tn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yo(t,this.TimeBufferType),this.values=yo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yo(e.times,Array),values:yo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ah(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case Eo:t=this.InterpolantFactoryMethodLinear;break;case ac:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&sv(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ac,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Tn.prototype.TimeBufferType=Float32Array,Tn.prototype.ValueBufferType=Float32Array,Tn.prototype.DefaultInterpolation=Eo;var cr=class extends Tn{};cr.prototype.ValueTypeName="bool",cr.prototype.ValueBufferType=Array,cr.prototype.DefaultInterpolation=Mo,cr.prototype.InterpolantFactoryMethodLinear=void 0,cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Lh=class extends Tn{};Lh.prototype.ValueTypeName="color";var Ph=class extends Tn{};Ph.prototype.ValueTypeName="number";var Ih=class extends _s{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)un.slerpFlat(s,0,a,c-o,a,c,l);return s}},ea=class extends Tn{InterpolantFactoryMethodLinear(e){return new Ih(this.times,this.values,this.getValueSize(),e)}};ea.prototype.ValueTypeName="quaternion",ea.prototype.DefaultInterpolation=Eo,ea.prototype.InterpolantFactoryMethodSmooth=void 0;var hr=class extends Tn{};hr.prototype.ValueTypeName="string",hr.prototype.ValueBufferType=Array,hr.prototype.DefaultInterpolation=Mo,hr.prototype.InterpolantFactoryMethodLinear=void 0,hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Dh=class extends Tn{};Dh.prototype.ValueTypeName="vector";var Fh=class{constructor(e,t,n){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},av=new Fh,Uh=class{constructor(e){this.manager=e!==void 0?e:av,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Uh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jo=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ko=class extends Jo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Nc=new Le,Bp=new S,zp=new S,Nh=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Bp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bp),zp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zp),t.updateMatrixWorld(),Nc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Xy=new Le,jy=new S,qy=new S;var Oh=class extends Nh{constructor(){super(new Fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qo=class extends Jo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Oh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var $y=new Le,Yy=new Le,Zy=new Le;var el=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Hp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Hp(){return(typeof performance=="undefined"?Date:performance).now()}var Jy=new S,Ky=new un,Qy=new S,e_=new S;var t_=new S,n_=new un,i_=new S,r_=new S;var Vh="\\[\\]\\.:\\/",ov=new RegExp("["+Vh+"]","g"),Oc="[^"+Vh+"]",lv="[^"+Vh.replace("\\.","")+"]",cv=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Oc)+/(WCOD+)?/.source.replace("WCOD",lv)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc)+"$"),hv=["material","materials","bones","map"],rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ov,"")}static parseTrackName(e){let t=cv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);hv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=class{constructor(i,e,t){let n=t||rt.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray],rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var s_=new Float32Array(1);var tl=class{constructor(e,t,n=0,r=1/0){this.ray=new fr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Bh(e,this,n,t),n.sort(kp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Bh(e[r],this,n,t);return n.sort(kp),n}};function kp(i,e){return i.distance-e.distance}function Bh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let r=i.children;for(let s=0,a=r.length;s<a;s++)Bh(r[s],e,t,!0)}}var a_=new ue;var o_=new S,l_=new S;var c_=new S;var h_=new S,u_=new Le,d_=new Le;var p_=new S,m_=new we,f_=new we;var g_=new S,v_=new S,y_=new S;var __=new S,x_=new ia;var M_=new An;var E_=new S;typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);var kn=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),Xh=(()=>{try{return matchMedia("(prefers-reduced-motion: reduce)").matches||localStorage.getItem("wedding-lite")==="1"}catch{return!1}})(),zi=(()=>{let i=new Uint8Array([150,150,150,255,215,215,215,255,255,255,255,255]),e=new Ho(i,3,1,hn);return e.minFilter=e.magFilter=Lt,e.needsUpdate=!0,e})(),Wh=new Map;function mt(i,e={}){let t=i+JSON.stringify(e);if(!e.unique&&Wh.has(t))return Wh.get(t);let n=new Rt({color:i,gradientMap:zi,...e});return delete n.unique,e.unique||Wh.set(t,n),n}function oe(i,e,t=0,n=0,r=0,s){let a=new ge(i,typeof e=="string"||typeof e=="number"?mt(e,s):e);return a.position.set(t,n,r),a.castShadow=!0,a.receiveShadow=!0,a}function Jt(i,{w:e=512,h:t=256,bg:n="#FFFDF8",color:r="#4A3B38",font:s="Gowun Batang",size:a=56,radius:o=40,border:l=null,sub:c=null,subSize:h=30}={}){let u=document.createElement("canvas");u.width=e,u.height=t;let d=u.getContext("2d");n&&(d.fillStyle=n,Bi(d,0,0,e,t,o),d.fill(),l&&(d.lineWidth=10,d.strokeStyle=l,Bi(d,5,5,e-10,t-10,o-4),d.stroke())),d.fillStyle=r,d.textAlign="center",d.textBaseline="middle";let p=Array.isArray(i)?i:[i],f=p.length*a*1.25+(c?h*1.5:0),v=t/2-f/2+a*.62;d.font=`700 ${a}px "${s}", serif`;for(let m of p)d.fillText(m,e/2,v),v+=a*1.25;return c&&(d.font=`${h}px "Gowun Dodum", sans-serif`,d.globalAlpha=.7,d.fillText(c,e/2,v+h*.2)),u}function Bi(i,e,t,n,r,s){i.beginPath(),i.moveTo(e+s,t),i.arcTo(e+n,t,e+n,t+r,s),i.arcTo(e+n,t+r,e,t+r,s),i.arcTo(e,t+r,e,t,s),i.arcTo(e,t,e+n,t,s),i.closePath()}function bt(i){let e=new Vo(i);return e.colorSpace=pt,e.anisotropy=4,e}function ol(i,{scale:e=4.2,bg:t="rgba(255,253,248,.95)",color:n="#4A3B38"}={}){let r=document.createElement("canvas");r.width=512,r.height=128;let s=r.getContext("2d"),a=54;for(s.font=`700 ${a}px "Gowun Dodum", sans-serif`;s.measureText(i).width>430&&a>32;)a-=2,s.font=`700 ${a}px "Gowun Dodum", sans-serif`;let o=Math.min(490,s.measureText(i).width+70);s.fillStyle=t,s.shadowColor="rgba(120,80,60,.25)",s.shadowBlur=12,s.shadowOffsetY=4,Bi(s,(512-o)/2,18,o,86,43),s.fill(),s.shadowColor="transparent",s.fillStyle=n,s.textAlign="center",s.textBaseline="middle",s.fillText(i,256,63);let l=new Ui(new li({map:bt(r),depthWrite:!1,transparent:!0}));return l.scale.set(e,e/4,1),l.renderOrder=10,l}var xe=(i,e)=>i+Math.random()*(e-i),uv=(i,e,t)=>i+(e-i)*t,ui=(i,e,t,n)=>uv(i,e,1-Math.exp(-t*n)),um=(i,e,t)=>Math.max(e,Math.min(t,i));var dm=[[0,34,0,10,3.2],[0,-2,0,-19,2.6],[5,1,20,-5.5,2.6],[-6,3,-12,2,2.4],[-6,0,-18,-10,2.4],[6,7,10,9,2.2],[-2,20,-10,19,2.2]],Gn={x:0,z:4,r:7.5},It={day:{top:"#7EC8EE",mid:"#CDEBFA",horizon:"#FFE6D2",fog:"#FFE6D2",sun:"#FFEBD0",sunI:2.4,hemi:"#FFF6EA",ground:"#C6DDB0",hemiI:1.9,lamps:!1,stars:!1},dusk:{top:"#6A7FC4",mid:"#F6A77A",horizon:"#FFD39B",fog:"#FFD39B",sun:"#FFB07A",sunI:2,hemi:"#FFD3B0",ground:"#B8A890",hemiI:1.6,lamps:!0,stars:!1},night:{top:"#0F1B3D",mid:"#2A3A6B",horizon:"#5A4A7A",fog:"#5A4A7A",sun:"#B8C8FF",sunI:1.1,hemi:"#8FA3D8",ground:"#3E4A5F",hemiI:1.25,lamps:!0,stars:!0}};function dv(i,e,t,n,r,s){let a=r-t,o=s-n,l=Math.max(0,Math.min(1,((i-t)*a+(e-n)*o)/(a*a+o*o)));return Math.hypot(i-(t+a*l),e-(n+o*l))}function pv(i,e,t=.6){return Math.hypot(i-Gn.x,e-Gn.z)<Gn.r+t?!0:dm.some(n=>dv(i,e,n[0],n[1],n[2],n[3])<n[4]/2+t)}function mv(){let i=new Je(400,32,16),e=new Cn({side:Ht,depthWrite:!1,fog:!1,uniforms:{top:{value:new we(It.day.top)},mid:{value:new we(It.day.mid)},horizon:{value:new we(It.day.horizon)},sunDir:{value:new S(.5,.45,-.75).normalize()},sunK:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 top; uniform vec3 mid; uniform vec3 horizon; uniform vec3 sunDir; uniform float sunK; varying vec3 vDir;
      void main(){
        float h = clamp(vDir.y, -0.2, 1.0);
        vec3 c = mix(horizon, mid, smoothstep(-0.02, 0.18, h));
        c = mix(c, top, smoothstep(0.18, 0.75, h));
        float s = max(dot(normalize(vDir), sunDir), 0.0);
        c += (vec3(1.0, 0.86, 0.6) * pow(s, 40.0) * 0.55 + vec3(1.0, 0.95, 0.8) * pow(s, 400.0) * 1.2) * sunK;
        gl_FragColor = vec4(c, 1.0);
      }`}),t=new ge(i,e);t.renderOrder=-1;let n=320,r=new Float32Array(n*3);for(let o=0;o<n;o++){let l=xe(0,Math.PI*2),c=xe(.06,1),h=380,u=h*Math.sqrt(1-c*c);r.set([Math.cos(l)*u,h*c,Math.sin(l)*u],o*3)}let s=new Ze;s.setAttribute("position",new vt(r,3));let a=new vr(s,new Ni({color:"#FFF8D6",size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.9,depthWrite:!1}));return a.visible=!1,a.renderOrder=-1,t.add(a),t.userData.setPalette=o=>{e.uniforms.top.value.set(o.top),e.uniforms.mid.value.set(o.mid),e.uniforms.horizon.value.set(o.horizon),e.uniforms.sunK.value=o.stars?.15:1,a.visible=!!o.stars},t}function fv(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#A9D18E",e.fillRect(0,0,256,256);let t=["#9DC883","#B4D899","#A2CC87","#BEDDA3"];for(let r=0;r<1400;r++)e.fillStyle=t[r%t.length],e.globalAlpha=.5,e.beginPath(),e.arc(Math.random()*256,Math.random()*256,Math.random()*3+1,0,7),e.fill();let n=bt(i);return n.wrapS=n.wrapT=Di,n.repeat.set(60,60),n}function gv(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");e.fillStyle="#F1E4CF",e.fillRect(0,0,128,128);for(let n=0;n<18;n++)e.fillStyle=["#E8D8BF","#F6ECDC","#EADCC6"][n%3],e.beginPath(),e.ellipse(Math.random()*128,Math.random()*128,10+Math.random()*12,8+Math.random()*8,Math.random()*3,0,7),e.fill();let t=bt(i);return t.wrapS=t.wrapT=Di,t}var vv=new je(.22,.32,2,8),pm=new Xt(1.3,1);function jh(i,e,{kind:t="green",s:n=1}={}){let r=new Se;r.add(oe(vv,"#A47A5C",0,1,0));let s=t==="blossom"?["#F9C9D2","#F6B5C2","#FCDCE3"]:["#8CC47A","#9ED08A","#7DB86C"];return[[0,2.6,0,1.2],[.8,2.2,.2,.85],[-.75,2.3,-.2,.9],[.1,3.3,-.1,.8]].forEach(([o,l,c,h],u)=>{let d=oe(pm,s[u%3],o,l,c);d.scale.setScalar(h),r.add(d)}),r.position.set(i,0,e),r.scale.setScalar(n),r.rotation.y=Math.random()*6,r}function yv(i,e,t=1,n="#8CC47A"){let r=new Se;return[[0,.45,0,.6],[.5,.35,.1,.45],[-.45,.35,-.05,.45]].forEach(([s,a,o,l])=>{let c=oe(pm,n,s,a,o);c.scale.setScalar(l),r.add(c)}),r.position.set(i,0,e),r.scale.setScalar(t),r}function _v(i,e){let t=new Se;t.add(oe(new je(.08,.12,2.8,8),"#6E5A50",0,1.4,0)),t.add(oe(new je(.22,.22,.1,8),"#6E5A50",0,.05,0));let n=new ge(new Je(.28,12,10),new $e({color:"#FFF1C9"}));return n.position.y=3,t.add(n),t.add(oe(new zn(.34,.26,8),"#6E5A50",0,3.3,0)),t.position.set(i,0,e),t}var qh;function xv(i,e){if(!qh){let s=document.createElement("canvas");s.width=s.height=128;let a=s.getContext("2d"),o=a.createRadialGradient(64,64,4,64,64,64);o.addColorStop(0,"rgba(255,236,170,.95)"),o.addColorStop(.35,"rgba(255,220,140,.45)"),o.addColorStop(1,"rgba(255,200,120,0)"),a.fillStyle=o,a.fillRect(0,0,128,128),qh=bt(s)}let t=new Se,n=new Ui(new li({map:qh,blending:Gp,depthWrite:!1,transparent:!0,opacity:.9}));n.position.set(0,3,0),n.scale.set(3.6,3.6,1);let r=new ge(new Zt(2.6,24),new $e({color:"#FFE4A8",transparent:!0,opacity:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return r.rotation.x=-Math.PI/2,r.position.y=.04,t.add(n,r),t.position.set(i,0,e),t}function Mv(i,e,t=0){let n=new Se,r="#D9A877";for(let s=0;s<3;s++)n.add(oe(new Ee(1.8,.08,.16),r,0,.5,-.2+s*.2));for(let s=0;s<2;s++){let a=oe(new Ee(1.8,.14,.06),r,0,.75+s*.2,-.32);n.add(a)}for(let s of[-.75,.75])n.add(oe(new Ee(.08,.5,.5),"#8C6B55",s,.25,0)),n.add(oe(new Ee(.08,.6,.06),"#8C6B55",s,.8,-.32));return n.position.set(i,0,e),n.rotation.y=t,n}function Ev(i,e,t=3.2){let n=new Se,r=["#F4B8C0","#FFFFFF","#F7D58B","#F9C59E","#E88A98"],s=[];for(let a=0;a<5;a++){let o=a/5*Math.PI*2,l=Math.cos(o)*.35,c=Math.sin(o)*.35,h=t+a%2*.35,u=oe(new Je(.34,14,12),r[a],l,h,c);u.scale.y=1.18;let d=new Go(new Ze().setFromPoints([new S(0,.4,0),new S(l,h-.4,c)]),new sa({color:"#B8A59B"}));n.add(u,d),s.push({b:u,base:h,off:Math.random()*6})}return n.add(oe(new Je(.12,8,6),"#C9637A",0,.4,0)),n.add(oe(new je(.2,.25,.4,10),"#FFF3EA",0,.2,0)),n.position.set(i,0,e),n.userData.update=a=>s.forEach(o=>{o.b.position.y=o.base+Math.sin(a*1.4+o.off)*.12,o.b.rotation.z=Math.sin(a+o.off)*.08}),n}function bv(i,e){let t=kn?500:900,n=new zn(.07,.4,3),r=new gr(n,mt("#8DC175"),t),s=new Xt(.11,0),a=kn?260:480,o=new gr(s,new Rt({color:"#fff"}),a),l=new Le,c=new un,h=new S,u=new S,d=new gs,p=()=>{for(let v=0;v<20;v++){let m=Math.random()*Math.PI*2,y=Math.sqrt(Math.random())*38,g=Math.cos(m)*y,_=Math.sin(m)*y;if(!pv(g,_)&&!e(g,_))return[g,_]}return[60,60]};for(let v=0;v<t;v++){let[m,y]=p();d.set(xe(-.2,.2),xe(0,6),xe(-.2,.2)),c.setFromEuler(d);let g=xe(.7,1.4);l.compose(u.set(m,.18*g,y),c,h.set(g,g,g)),r.setMatrixAt(v,l)}let f=["#FFFFFF","#F4B8C0","#F7D58B","#FFB7A5","#E7C6F2","#FFE3EA"].map(v=>new we(v));for(let v=0;v<a;v++){let[m,y]=p();l.compose(u.set(m,.14,y),c.identity(),h.setScalar(xe(.8,1.3))),o.setMatrixAt(v,l),o.setColorAt(v,f[v%f.length])}r.receiveShadow=!0,i.add(r,o)}function Sv(i){let e=[],t=new Se;i.add(t);let n=new Je(1,12,10),r=new Rt({color:"#FFFFFF",emissive:"#FFF4EA",emissiveIntensity:.35});for(let a=0;a<14;a++){let o=new Se,l=4+Math.floor(Math.random()*3);for(let u=0;u<l;u++){let d=new ge(n,r);d.position.set(u*2.2-l,Math.random()*1.2,Math.random()*1.5),d.scale.setScalar(xe(1.6,2.8)),o.add(d)}let c=Math.random()*Math.PI*2,h=xe(70,150);o.position.set(Math.cos(c)*h,xe(28,50),Math.sin(c)*h-30),o.scale.set(1.3,.8,1),t.add(o),e.push({g:o,speed:xe(.4,1)})}return{group:t,update:a=>{t.visible&&e.forEach(o=>{o.g.position.x+=o.speed*a,o.g.position.x>170&&(o.g.position.x=-170)})}}}function wv(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d");return e.fillStyle="#FFFFFF",e.beginPath(),e.ellipse(32,32,26,15,.6,0,7),e.fill(),bt(i)}function Tv(i){let e=Xh?0:kn?160:300;if(!e)return{group:new Se,update(){},setCount(){}};let t=new Float32Array(e*3),n=[],r=new Float32Array(e*3),s=["#F9C9D2","#FFFFFF","#FCDCE3","#F7D58B"].map(c=>new we(c));for(let c=0;c<e;c++){t[c*3]=xe(-30,30),t[c*3+1]=xe(0,9),t[c*3+2]=xe(-30,30),n.push([xe(.3,.9),xe(.4,1.1),xe(0,6)]);let h=s[c%s.length];r.set([h.r,h.g,h.b],c*3)}let a=new Ze;a.setAttribute("position",new vt(t,3)),a.setAttribute("color",new vt(r,3));let o=new vr(a,new Ni({size:.28,map:wv(),transparent:!0,depthWrite:!1,vertexColors:!0,alphaTest:.1}));o.frustumCulled=!1,i.add(o);let l=e;return{group:o,setCount(c){l=Math.max(0,Math.min(e,c)),a.setDrawRange(0,l)},update(c,h,u){if(o.visible){for(let d=0;d<l;d++){let p=n[d];t[d*3]+=(Math.sin(h*p[0]+p[2])*.6+.35)*c,t[d*3+1]-=p[1]*c,t[d*3+2]+=Math.cos(h*p[0]*.7+p[2])*.4*c,t[d*3+1]<0&&(t[d*3]=u.x+xe(-28,28),t[d*3+1]=xe(6,9),t[d*3+2]=u.z+xe(-28,20))}a.attributes.position.needsUpdate=!0}}}}function Av(i){let e=new Se;i.add(e);let t=[],n=new Zt(.16,10),r=["#F7D58B","#F4B8C0","#FFFFFF","#BFE3F5"];for(let a=0;a<(Xh?0:8);a++){let o=new Se,l=new $e({color:r[a%4],side:Mr}),c=new ge(n,l),h=new ge(n,l);c.position.x=-.14,h.position.x=.14;let u=new Se,d=new Se;u.add(c),d.add(h),o.add(u,d),e.add(o),t.push({g:o,lw:u,rw:d,cx:xe(-25,25),cz:xe(-25,25),r:xe(2,5),sp:xe(.3,.7),off:xe(0,6)})}return{group:e,update:(a,o)=>{e.visible&&t.forEach(l=>{let c=o*l.sp+l.off;l.g.position.set(l.cx+Math.cos(c)*l.r,1.2+Math.sin(o*2+l.off)*.5,l.cz+Math.sin(c*1.3)*l.r),l.g.rotation.y=-c;let h=Math.sin(o*18+l.off)*1.1;l.lw.rotation.y=h,l.rw.rotation.y=-h})}}}var $h=new Map;function mm(i="\u{1F497}"){if($h.has(i))return $h.get(i);let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");t.font="52px serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,32,36);let n=bt(e);return $h.set(i,n),n}var Es=[];function bs(i,e,t=10,n="\u{1F497}"){let r=mm(n);for(let s=0;s<t&&!(Es.length>90);s++){let a=new Ui(new li({map:r,transparent:!0,depthWrite:!1}));a.position.copy(e).add(new S(xe(-.4,.4),xe(0,.5),xe(-.4,.4))),a.scale.setScalar(xe(.35,.6)),i.add(a),Es.push({sp:a,v:new S(xe(-1,1),xe(2,3.5),xe(-1,1)),life:1.4+Math.random()*.4,scene:i})}}function fm(i,e,t,n="\u{1FA99}",r=.7,s){let a=new Ui(new li({map:mm(n),transparent:!0,depthWrite:!1}));a.position.copy(e),a.scale.setScalar(.5),i.add(a);let o=9,l=new S((t.x-e.x)/r,(t.y-e.y+.5*o*r*r)/r,(t.z-e.z)/r);Es.push({sp:a,v:l,life:r,scene:i,g:o,onLand:s})}function gm(i){var e;for(let t=Es.length-1;t>=0;t--){let n=Es[t];n.life-=i,n.v.y-=(n.g||1.2)*i,n.sp.position.addScaledVector(n.v,i),n.g||(n.sp.material.opacity=Math.min(1,n.life)),n.life<=0&&(n.scene.remove(n.sp),n.sp.material.dispose(),Es.splice(t,1),(e=n.onLand)==null||e.call(n,n.sp.position))}}function vm(i,e){let t=new Se;i.add(t);let n=mv();i.add(n);let r=new ge(new Zt(160,64),new Rt({map:fv(),gradientMap:zi}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,t.add(r);let s=gv(),a=new Rt({map:s,gradientMap:zi,polygonOffset:!0,polygonOffsetFactor:-1});for(let[y,g,_,E,T]of dm){let w=Math.hypot(_-y,E-g),A=new nt(T,w),V=A.attributes.uv;for(let z=0;z<V.count;z++)V.setXY(z,V.getX(z)*T/3,V.getY(z)*w/3);let k=new ge(A,a);k.rotation.x=-Math.PI/2,k.rotation.z=Math.atan2(_-y,E-g)+Math.PI,k.position.set((y+_)/2,.02,(g+E)/2),k.receiveShadow=!0,t.add(k);for(let[z,K]of[[y,g],[_,E]]){let I=new ge(new Zt(T/2,20),a);I.rotation.x=-Math.PI/2,I.position.set(z,.021,K),I.receiveShadow=!0,t.add(I)}}let o=new ge(new Zt(Gn.r,48),a);o.rotation.x=-Math.PI/2,o.position.set(Gn.x,.025,Gn.z),o.receiveShadow=!0,t.add(o);let l=new ge(new hi(Gn.r-.35,Gn.r,48),mt("#E6D2B5"));l.rotation.x=-Math.PI/2,l.position.set(Gn.x,.03,Gn.z),t.add(l);let c=[];for(let y=0;y<46;y++){let g=y/46*Math.PI*2+xe(-.04,.04),_=xe(41,46),E=Math.cos(g)*_,T=Math.sin(g)*_;Math.abs(E)<4&&T>30||t.add(jh(E,T,{kind:y%4===0?"blossom":"green",s:xe(1.1,1.6)}))}for(let y=0;y<30;y++){let g=Math.random()*Math.PI*2,_=xe(50,75);t.add(jh(Math.cos(g)*_,Math.sin(g)*_,{kind:y%3===0?"blossom":"green",s:xe(1.4,2.2)}))}for(let y=0;y<8;y++){let g=oe(new Je(1,20,12),y%2?"#9CCB84":"#AED596",xe(-120,120),-xe(8,14),-xe(90,130));g.scale.set(xe(25,45),xe(18,26),xe(20,30)),t.add(g)}[[-9,27,"blossom"],[14.5,31,"blossom"],[-24,22,"green"],[30,4,"green"],[-28,-20,"blossom"],[33,-20,"green"],[-8,-28,"green"],[8,-29,"blossom"],[-15,12,"blossom"],[16,14,"green"],[-22,-2,"green"],[11,-22,"green"],[-12,-24,"blossom"]].forEach(([y,g,_])=>{t.add(jh(y,g,{kind:_,s:xe(1,1.3)})),c.push({x:y,z:g,r:.7})}),[[-5,28],[12.5,27.5],[-14,8],[13,3],[-3,-21],[3,-21],[-26,12],[26,10],[-20,-18],[28,-8]].forEach(([y,g],_)=>{t.add(yv(y,g,xe(.9,1.3),_%3===0?"#A7D08F":"#8CC47A")),c.push({x:y,z:g,r:.9})});let u=new Se;u.visible=!1,t.add(u),[[-2.3,30],[2.3,24],[-2.3,18],[2.3,12],[7.5,-1],[14,-3.5],[-8.6,5.5],[-12,-5],[-8,9],[8,12]].forEach(([y,g])=>{t.add(_v(y,g)),u.add(xv(y,g)),c.push({x:y,z:g,r:.3})}),[[-6.3,8.8,2.4],[6.3,8.8,-2.4],[-6.8,-.5,1.2],[6.8,-1,-1.2]].forEach(([y,g,_])=>{let E=Mv(y,g,_);t.add(E),c.push({x:y,z:g,r:.9})});let d=[];[[-2.5,33],[2.5,33],[-3.2,-17],[3.2,-17],[15.5,-7],[24.5,-7]].forEach(([y,g])=>{let _=Ev(y,g);t.add(_),d.push(_.userData.update),c.push({x:y,z:g,r:.4})}),bv(t,e);let p=Sv(t),f=Tv(t),v=Av(t),m="day";return{group:t,sky:n,colliders:c,get time(){return m},setTime(y){m=It[y]?y:"day";let g=It[m];return n.userData.setPalette(g),u.visible=g.lamps,g},setLite(y){f.setCount(y>=2?0:y===1?80:300),f.group.visible=y<2,p.group.visible=v.group.visible=y<2},update(y,g,_){p.update(y),f.update(y,g,_),v.update(y,g),d.forEach(E=>E(g))}}}function ua({type:i="guest",outfit:e="#8FB8DE",hair:t="#5A3A2A",skin:n="#FFE0C7",longHair:r=!1}={}){let s=new Se,a=new Se;s.add(a);let o=i==="bride",l=i==="groom",c=l?"#2F2B33":o?"#FFFFFF":e,h=l?"#2F2B33":o?"#FFFFFF":"#6B5B53",u=new yr(.1,.28,4,8),d=new Je(.13,12,8),p=[];for(let O of[-1,1]){let D=new Se;D.position.set(.14*O,.56,0);let N=oe(u,h,0,-.26,0),F=oe(d,o?"#F4E3D7":"#4A3B38",0,-.47,.04);F.scale.set(1,.6,1.35),D.add(N,F),a.add(D),p.push(D)}let f=oe(new yr(.3,.3,6,14),c,0,.86,0);if(f.scale.set(1,1,.85),a.add(f),l){let O=oe(new zn(.13,.36,3),"#FFFFFF",0,.98,.2);O.rotation.set(Math.PI+.25,0,0),O.scale.z=.3;let D=new Se,N=oe(new Je(.04,8,6),"#1E1A22",0,0,0),F=new zn(.06,.12,4),W=oe(F,"#1E1A22",-.07,0,0);W.rotation.z=-Math.PI/2;let ae=oe(F,"#1E1A22",.07,0,0);ae.rotation.z=Math.PI/2,D.add(N,W,ae),D.position.set(0,1.1,.26);let M=oe(new Je(.05,8,6),"#F4B8C0",-.17,1.02,.22);a.add(O,D,M)}if(o){let O=oe(new je(.28,.78,.95,24,1,!0),"#FFFFFF",0,.47,0,{side:Mr}),D=oe(new Hn(.76,.05,6,30),"#FFF3F5",0,.03,0);D.rotation.x=Math.PI/2;let N=oe(new Hn(.3,.035,6,24),"#F4B8C0",0,.88,0);N.rotation.x=Math.PI/2,a.add(O,D,N),p.forEach(F=>F.visible=!1)}let v=new yr(.075,.3,4,8),m=new Je(.085,10,8),y=[];for(let O of[-1,1]){let D=new Se;D.position.set(.36*O,1.08,0);let N=oe(v,o?n:c,.02*O,-.2,0),F=oe(m,n,.03*O,-.42,0);D.add(N,F),D.rotation.z=.12*O,a.add(D),y.push(D)}if(o){let O=new Se,D=["#F4B8C0","#FFFFFF","#F7D58B","#E88A98","#FFE3EA"];for(let N=0;N<7;N++){let F=N/7*Math.PI*2;O.add(oe(new Je(.075,8,6),D[N%D.length],Math.cos(F)*.09,.03,Math.sin(F)*.09))}O.add(oe(new Je(.08,8,6),"#E88A98",0,.07,0)),O.add(oe(new zn(.07,.22,8),"#9CC08A",0,-.13,0)),O.position.set(0,.7,.36),a.add(O),y[0].rotation.set(-.9,0,.5),y[1].rotation.set(-.9,0,-.5)}let g=new Se;g.position.y=1.5,a.add(g);let _=oe(new Je(.42,24,18),n,0,0,0);g.add(_);let E=mt(t),T=new ge(new Je(.45,24,16,0,Math.PI*2,0,Math.PI*.52),E);T.rotation.x=-.35,T.position.set(0,.03,-.03),T.castShadow=!0,g.add(T);let w=new ge(new Je(.2,12,8),E);if(w.scale.set(1.5,.55,.8),w.position.set(.1,.26,.27),w.rotation.z=-.3,g.add(w),r||o){let O=new ge(new Je(.42,16,12),E);O.scale.set(1.05,1.25,.7),O.position.set(0,-.22,-.18),g.add(O)}if(o){let O=new ge(new Je(.55,20,14,0,Math.PI*2,0,Math.PI*.62),new Rt({color:"#FFFFFF",transparent:!0,opacity:.55,side:Mr,depthWrite:!1}));O.scale.set(1,1.6,1),O.position.set(0,-.35,-.12),O.rotation.x=-.25,g.add(O);let D=new Se;for(let N=0;N<9;N++){let F=Math.PI*.15+N/8*Math.PI*.7;D.add(oe(new Je(.055,8,6),N%2?"#F4B8C0":"#FFFFFF",Math.cos(F)*.4,.22,-Math.sin(F)*.06+.02))}D.rotation.x=-.5,g.add(D)}let A=new Je(.05,10,8),V=new $e({color:"#2B2220"}),k=[];for(let O of[-1,1]){let D=new ge(A,V);D.position.set(.14*O,.02,.38),D.scale.set(1,1.3,.6),g.add(D),k.push(D);let N=new ge(new Je(.016,6,4),new $e({color:"#fff"}));N.position.set(.14*O+.018,.05,.415),g.add(N);let F=new ge(new Zt(.07,14),new $e({color:"#FFB3B3",transparent:!0,opacity:.7}));F.position.set(.24*O,-.09,.345),F.rotation.y=.55*O,g.add(F)}let z=new ge(new Hn(.045,.012,6,12,Math.PI),V);z.position.set(0,-.1,.39),z.rotation.z=Math.PI,g.add(z),s.traverse(O=>{O.isMesh&&O.material!==V&&(O.castShadow=!0)});let K=0,I=2+Math.random()*3,Y=0,J=0,le=y[1].rotation.clone(),X={root:s,body:a,head:g,arms:y,legs:p,type:i};return X.animate=(O,D=0,N=0)=>{let F=Math.min(1,D);K+=O*(4+7*F);let W=Math.sin(K)*.75*F;if(o||(p[0].rotation.x=W,p[1].rotation.x=-W,y[0].rotation.x=-W*.8,y[1].rotation.x=W*.8),a.position.y=Math.abs(Math.sin(K))*.07*F+Math.sin(N*2)*.012,a.rotation.z=Math.sin(K)*.04*F,g.rotation.z=Math.sin(N*1.3)*.04,i==="guest"){J=F<.05?J+O:0;let M=J>4?Math.sin(N*.8)*.45:0;g.rotation.y+=(M-g.rotation.y)*Math.min(1,O*4)}I-=O;let ae=I<.12?.15:1;if(k.forEach(M=>M.scale.y=1.3*ae),I<0&&(I=2+Math.random()*3),Y>0){Y-=O;let M=y[1];M.rotation.z=-2.5+Math.sin(N*14)*.35,M.rotation.x=0,Y<=0&&M.rotation.copy(le)}},X.wave=(O=1.6)=>{Y=O},X}var Er={x:20,z:-8.4,r:1.7},it={x:8.2,z:25.5,r:1.8},Rv=C(["\uC640\uC8FC\uC154\uC11C \uC815\uB9D0 \uAC10\uC0AC\uD574\uC694 \u{1F490}","\uC2DD\uC0AC \uAF2D \uD558\uACE0 \uAC00\uC138\uC694!","\uBD84\uC218\uC5D0 \uB3D9\uC804 \uB358\uC838 \uBCF4\uC168\uC5B4\uC694?","\uC0AC\uC9C4\uAD00\uB3C4 \uB4E4\uB7EC \uC8FC\uC138\uC694 \u{1F5BC}\uFE0F","\uD3B8\uC9C0 \uB0A8\uACA8 \uC8FC\uC2DC\uBA74 \uAF2D \uC77D\uC744\uAC8C\uC694 \u{1F48C}","\uC624\uB298 \uC815\uB9D0 \uD589\uBCF5\uD574\uC694 \u{1F970}"],["Thanks so much for coming \u{1F490}","Please stay for the meal!","Tried the wishing fountain?","Visit the photo gallery too \u{1F5BC}\uFE0F","We'll read every letter \u{1F48C}","We're so happy today \u{1F970}"]);function ym(i){var le;let e=window.WEDDING,t=new Se;i.add(t);let n=[],r=[],s=[],a=[];function o(X,O,D,N,F,W,ae,M=3.4){let x=ol(`${D} ${O}`);x.position.set(F,M,W),t.add(x);let R={id:X,text:O,emoji:D,action:N,pos:new S(F,0,W),r:ae,label:x,baseY:M,off:Math.random()*6};return s.push(R),R}let l=(X,O,D)=>new ge(new nt(O,D),new $e({map:bt(X),transparent:!0})),{k:c}=$t(),h=C(e.date.slice(0,10).replace(/-/g,". "),c.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}));{let X=new Se,O="#B98A66",D=oe(new Ee(.1,3,.1),O,-.8,1.45,.1);D.rotation.z=.12;let N=oe(new Ee(.1,3,.1),O,.8,1.45,.1);N.rotation.z=-.12;let F=oe(new Ee(.1,3,.1),O,0,1.4,-.45);F.rotation.x=-.3;let W=oe(new Ee(1.9,.08,.25),O,0,.75,.2),ae=oe(new Ee(1.9,2.5,.06),"#FFFDF8",0,2.05,.2);ae.rotation.x=-.08;let M=Jt(["Wedding","Invitation"],{w:512,h:680,size:64,bg:"#FFFDF8",border:"#E2B865",radius:24,color:"#C9637A",sub:`${e.groom.name} \u2665 ${e.bride.name}`,subSize:40}),x=M.getContext("2d");x.fillStyle="#7C6A66",x.font='30px "Gowun Dodum"',x.textAlign="center",x.fillText(h,256,590),x.font="80px serif",x.fillText("\u{1F48C}",256,130);let R=l(M,1.75,2.33);R.position.set(0,2.05,.235),R.rotation.x=-.08,X.add(D,N,F,W,ae,R),X.position.set(-4.8,0,24),X.rotation.y=.35,t.add(X),n.push({x:-4.8,z:24,r:1}),o("invitation",C("\uCCAD\uCCA9\uC7A5","Invitation"),"\u{1F48C}",C("\uCCAD\uCCA9\uC7A5 \uBCF4\uAE30","Open invitation"),-4.8,24,3,3.8)}{let X=new Se,O="#E4605A";X.add(oe(new je(.2,.25,.5,10),"#8C6B55",0,.25,0));let D=oe(new Ee(1,1.3,.8),O,0,1.15,0),N=oe(new je(.4,.4,1,20,1,!1,0,Math.PI),O,0,1.8,0);N.rotation.z=Math.PI/2;let F=oe(new Ee(.6,.06,.05),"#4A2B28",0,1.55,.41),W=l(Jt(C("\uD3B8\uC9C0\uD568","Mailbox"),{w:256,h:128,size:58,bg:"#FFFDF8",radius:24,color:"#C9637A"}),.7,.35);W.position.set(0,1.1,.41);let ae=[];for(let M=0;M<3;M++){let x=oe(new Ee(.4,.28,.02),M===1?"#FFF3EA":"#FFFFFF",0,2.4,0);X.add(x),ae.push({l:x,off:M*2.1})}X.add(D,N,F,W),X.position.set(4.8,0,23),X.rotation.y=-.4,t.add(X),a.push(M=>ae.forEach(({l:x,off:R})=>{let B=(M*.35+R/6.3)%1;x.position.set(Math.sin(B*6+R)*.5,2+B*1.6,Math.cos(B*5)*.3),x.rotation.set(B*3,B*5+R,.3),x.visible=B<.95})),n.push({x:4.8,z:23,r:.8}),o("mailbox",C("\uD3B8\uC9C0\uD568","Mailbox"),"\u2709\uFE0F",C("\uCD95\uD558 \uD3B8\uC9C0 \uC4F0\uAE30","Write a letter"),4.8,23,2.8,4.1)}let u=new Se;t.add(u);let d=[];{u.add(oe(new je(it.r+.3,it.r+.4,.18,28),"#B98A66",it.x,.09,it.z)),u.add(oe(new je(it.r+.05,it.r+.05,.22,28),"#7A5A44",it.x,.1,it.z));let X=oe(new je(.05,.06,1.1,6),"#A47A5C",it.x,.55,it.z+it.r+.5),O=l(Jt(C("\uD3B8\uC9C0 \uAF43\uBC2D","Letter garden"),{w:360,h:110,size:50,bg:"#FFFDF8",radius:26,color:"#C9637A"}),1.3,.4);O.position.set(it.x,1.15,it.z+it.r+.55);let D=O.clone();D.rotation.y=Math.PI,D.position.z-=.02,u.add(X,O,D),n.push({x:it.x,z:it.z,r:it.r+.5})}let p=new je(.03,.03,.5,6),f=new Xt(.16,0),v=new Je(.06,8,6),m=X=>{let O=7;for(let D of String(X))O=O*31+D.charCodeAt(0)>>>0;return O};function y(X,O){if(d.length>=60)return null;let D=m(`${X.name}|${X.time||""}|${d.length}`),N=D%360/360*Math.PI*2,F=.25+(D>>9)%100/100*(it.r-.55),W=it.x+Math.cos(N)*F,ae=it.z+Math.sin(N)*F,M=new Se;if(M.add(oe(p,"#8DC175",0,.45,0)),M.add(oe(f,X.side==="\uC2E0\uBD80\uCE21"?"#F4B8C0":"#8FB8DE",0,.75,0)),M.add(oe(v,"#F7D58B",0,.75,.13)),d.length<24){let x=String(X.name||"").slice(0,C(8,12)),R=ol(x,{scale:1.5,bg:"rgba(255,253,248,.85)"});R.position.y=1.12,M.add(R)}if(M.position.set(W,0,ae),M.rotation.y=N,u.add(M),d.push(M),O){let x=0;M.scale.setScalar(.01),a.push((R,B)=>{if(x>=1)return;x=Math.min(1,x+B/.7);let P=1-Math.pow(1-x,3);M.scale.setScalar(P)})}return new S(W,0,ae)}{let X=new Se;X.add(oe(new je(.1,.12,3.2,8),"#A47A5C",0,1.6,0)),[[C("\uC624\uC2DC\uB294 \uAE38","Directions"),"#FFFDF8",.4],[C("\uC608\uC2DD\uC7A5 \u2192","Venue \u2192"),"#F4B8C0",-.5],[C("\uC8FC\uCC28 \uC548\uB0B4","Parking"),"#F7D58B",.9]].forEach(([D,N,F],W)=>{let ae=new Se,M=oe(new Ee(1.5,.42,.08),N,.55,0,0),x=oe(new je(.21,.21,.08,3),N,1.35,0,0);x.rotation.x=Math.PI/2,x.rotation.y=Math.PI/2;let R=l(Jt(D,{w:384,h:110,size:56,bg:null}),1.4,.4);R.position.set(.55,0,.05);let B=R.clone();B.rotation.y=Math.PI,B.position.z=-.05,ae.add(M,x,R,B),ae.position.y=2.8-W*.55,ae.rotation.y=F,X.add(ae)}),X.position.set(-3.6,0,13.5),t.add(X),n.push({x:-3.6,z:13.5,r:.4}),o("directions",C("\uC624\uC2DC\uB294 \uAE38","Directions"),"\u{1F5FA}\uFE0F",C("\uC624\uC2DC\uB294 \uAE38 \uBCF4\uAE30","See directions"),-3.6,13.5,2.6,3.9)}{let X=new Se,O=(D,N,F,W,ae,M)=>{let x=new Se;x.add(oe(new Ee(D,D,D),N,0,D/2,0)),x.add(oe(new Ee(D*1.02,D*1.02,D*.16),F,0,D/2,0)),x.add(oe(new Ee(D*.16,D*1.02,D*1.02),F,0,D/2,0));let R=new Hn(D*.18,D*.06,8,16),B=oe(R,F,-D*.15,D+D*.12,0);B.rotation.set(0,Math.PI/2,.6);let P=oe(R,F,D*.15,D+D*.12,0);return P.rotation.set(0,Math.PI/2,-.6),x.add(B,P),x.position.set(W,0,ae),x.rotation.y=M,x};X.add(O(1.5,"#F4B8C0","#FFFFFF",0,0,.3)),X.add(O(.7,"#F7D58B","#E88A98",1.2,.6,-.4)),X.add(O(.55,"#BFE3F5","#FFFFFF",-1,.8,.6)),X.position.set(-13.5,0,2),t.add(X),n.push({x:-13.5,z:2,r:1.5}),o("gift",C("\uB9C8\uC74C \uC804\uD558\uC2E4 \uACF3","Gift accounts"),"\u{1F381}",C("\uACC4\uC88C\uBC88\uD638 \uBCF4\uAE30","See accounts"),-13.5,2,3,3.3)}{let X=new Se,O="#B98A66";for(let W of[-.75,.75])X.add(oe(new Ee(.1,2.8,.1),O,W,1.4,0));X.add(oe(new Ee(1.8,2.1,.1),O,0,1.9,0));let D=document.createElement("canvas");D.width=480,D.height=560;let N=D.getContext("2d");N.fillStyle="#5E7D6A",N.fillRect(0,0,480,560),N.fillStyle="#FFF8E7",N.textAlign="center",N.font='700 50px "Gowun Batang"',N.fillText(C("\uC624\uB298\uC758 \uC2DD\uC21C","Today's schedule"),240,70),N.font='30px "Gowun Dodum"',(e.schedule||[]).slice(0,6).forEach((W,ae)=>{if(N.textAlign="left",N.fillStyle="#F7D58B",N.fillText(W.time,40,150+ae*70),N.fillStyle="#FFF8E7",!Dn){let M=N.measureText(W.title).width;M>310&&(N.font=`${Math.max(20,Math.floor(30*310/M))}px "Gowun Dodum"`)}N.fillText(W.title,150,150+ae*70),N.font='30px "Gowun Dodum"'});let F=l(D,1.62,1.9);F.position.set(0,1.9,.06),X.add(F),X.position.set(11,0,9.8),X.rotation.y=-.5,t.add(X),n.push({x:11,z:9.8,r:1}),o("schedule",C("\uC624\uB298\uC758 \uC2DD\uC21C","Today's schedule"),"\u{1F570}\uFE0F",C("\uC2DD\uC21C \uBCF4\uAE30","See schedule"),11,9.8,2.8,3.6)}{let X=new Se;X.add(oe(new Ee(2.4,1.1,1),"#FFF3EA",0,.55,0)),X.add(oe(new Ee(2.5,.1,1.1),"#E2B865",0,1.12,0));for(let N of[-1.1,1.1])X.add(oe(new je(.06,.06,2.4,8),"#FFFFFF",N,2.2,-.4));let O=8;for(let N=0;N<O;N++){let F=oe(new je(1.7,1.7,.5,3,1,!1,Math.PI/2+N/O*Math.PI,Math.PI/O),N%2?"#FFFFFF":"#F4B8C0",0,3.3,-.4);F.rotation.x=Math.PI/2,F.scale.set(1,1,.5),X.add(F)}let D=l(Jt("?",{w:256,h:256,size:190,bg:"#F7D58B",radius:128,color:"#FFFFFF"}),.9,.9);D.position.set(0,.6,.51),X.add(D),X.position.set(-19.5,0,-11.5),X.rotation.y=.6,t.add(X),n.push({x:-19.5,z:-11.5,r:1.5}),o("quiz",C("\uC2E0\uB791\uC2E0\uBD80 \uD034\uC988","Couple quiz"),"\u2753",C("\uD034\uC988 \uD480\uAE30","Take the quiz"),-19.5,-11.5,3.2,4.4)}let g;{let X=new Se,O="#F3E9DA";X.add(oe(new je(2.9,3.1,.6,32),O,0,.3,0));let D=new ge(new Zt(2.6,32),new Rt({color:"#8FD3F0",transparent:!0,opacity:.85}));D.rotation.x=-Math.PI/2,D.position.y=.58,X.add(D),X.add(oe(new je(.3,.4,1.6,12),O,0,1.2,0)),X.add(oe(new je(1.2,.5,.35,24),O,0,2,0));let N=new ge(new Zt(1.05,24),D.material);N.rotation.x=-Math.PI/2,N.position.y=2.17,X.add(N);let F=new ci;F.moveTo(0,-.35),F.bezierCurveTo(-.6,.05,-.35,.5,0,.25),F.bezierCurveTo(.35,.5,.6,.05,0,-.35);let W=oe(new Oi(F,{depth:.15,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2}),"#F4B8C0",0,2.75,-.07);X.add(W);let ae=90,M=new Float32Array(ae*3),x=[];for(let H=0;H<ae;H++)x.push([Math.random()*Math.PI*2,Math.random()]);let R=new Ze;R.setAttribute("position",new vt(M,3));let B=new vr(R,new Ni({color:"#E8F7FF",size:.12,transparent:!0,opacity:.9}));X.add(B);let P=new gr(new je(.09,.09,.02,12),mt("#E2B865"),40);P.count=0,X.add(P);let G=new ge(new hi(.2,.32,28),new $e({color:"#FFFFFF",transparent:!0,opacity:0,depthWrite:!1}));G.rotation.x=-Math.PI/2,G.position.y=.6,X.add(G);let U=0;X.position.set(0,0,4),t.add(X),a.push((H,j)=>{W.rotation.y=H*.8;for(let $=0;$<ae;$++){let[ne,b]=x[$],se=(H*.6+b)%1,Z=.3+se*1.3;M[$*3]=Math.cos(ne)*Z,M[$*3+2]=Math.sin(ne)*Z,M[$*3+1]=2.2+Math.sin(se*Math.PI)*.8-se*1.5}if(R.attributes.position.needsUpdate=!0,U>0){U-=j/.7;let $=1-Math.max(0,U);G.scale.setScalar(1+$*6),G.material.opacity=Math.max(0,U)}}),n.push({x:0,z:4,r:3.2}),o("fountain",C("\uC18C\uC6D0 \uBD84\uC218","Wishing fountain"),"\u{1FA99}",C("\uB3D9\uC804 \uB358\uC9C0\uAE30","Toss a coin"),0,4,4.2,4.3),g={toss(H,j,$){fm(H,j,new S(0,2.25,4),"\u{1FA99}",.75,()=>{U=1,$==null||$()})},setCoins(H){H=Math.max(0,Math.min(40,H|0));let j=new Le;for(let $=0;$<H;$++){let ne=$*2.39996,b=.55+$*.37%1*1.85;j.makeRotationY(ne),j.setPosition(Math.cos(ne)*b,.6,Math.sin(ne)*b),P.setMatrixAt($,j)}P.count=H,P.instanceMatrix.needsUpdate=!0}}}{let X=new Se,O=oe(new Ee(1.6,.03,14.5),"#FFFFFF",0,.04,-11),D=oe(new Ee(.1,.035,14.5),"#F4B8C0",-.8,.045,-11),N=D.clone();N.position.x=.8,X.add(O,D,N);let F=(B,P,G)=>{let U=new Se;if(U.add(oe(new Ee(.62,.08,.6),"#FFFFFF",0,.5,0)),U.add(oe(new Ee(.62,.6,.07),"#FFFFFF",0,.85,.28)),U.add(oe(new Ee(.56,.48,.05),"#F3E9DA",0,.24,-.26)),U.add(oe(new Ee(.56,.48,.05),"#F3E9DA",0,.24,.26)),G){let H=oe(new Je(.12,8,6),"#F4B8C0",B>0?-.32:.32,.95,.3);H.scale.set(.5,1,1.3),U.add(H)}return U.position.set(B,0,P),U};for(let B of[-6.8,-8.8,-10.8,-12.8])for(let P of[-1,1])for(let G=0;G<3;G++)X.add(F(P*(1.7+G*.95),B,G===0));r.push({minX:1.3,maxX:4.4,minZ:-13.3,maxZ:-6.3},{minX:-4.4,maxX:-1.3,minZ:-13.3,maxZ:-6.3}),X.add(oe(new je(3.2,3.3,.16,36),"#FFFDF8",0,.08,-19.5));let W=mt("#FFFFFF");for(let B of[-1,1])X.add(oe(new je(.14,.16,3.2,10),W,B*2.2,1.6,-19.5));let ae=oe(new Hn(2.2,.14,10,40,Math.PI),W,0,3.2,-19.5);X.add(ae);let M=["#F4B8C0","#FFFFFF","#F9C59E","#E88A98","#FFE3EA","#F7D58B"],x=new Xt(.2,1);for(let B=0;B<44;B++){let P=B/43*Math.PI,G=2.2+xe(-.12,.12),U=oe(x,M[B%M.length],Math.cos(P)*G,3.2+Math.sin(P)*G,-19.5+xe(-.2,.2));if(U.scale.setScalar(xe(.8,1.5)),X.add(U),B%3===0){let H=oe(x,"#9CC08A",U.position.x*1.05,U.position.y+xe(-.2,.1),U.position.z+.1);H.scale.set(.9,.5,.9),X.add(H)}}for(let B=0;B<16;B++){let P=B<8?-1:1,G=oe(x,M[B%M.length],P*2.2+xe(-.2,.2),xe(.3,1.8),-19.5+xe(-.25,.25));G.scale.setScalar(xe(.9,1.4)),X.add(G)}let R=new Rt({color:"#FFE3EA",transparent:!0,opacity:.75,side:Mr});for(let B of[-1,1]){let P=new ge(new nt(1.1,3.6,1,8),R),G=P.geometry.attributes.position;for(let U=0;U<G.count;U++)G.setZ(U,Math.sin(G.getY(U)*3+G.getX(U)*4)*.08);P.position.set(B*2.6,2.4,-19.4),P.rotation.z=B*.1,X.add(P)}for(let B=0;B<9;B++){let P=-6+B*1.5,G=oe(new Xt(.9,1),"#8CC47A",P,.8,-22.3);G.scale.set(1,1.1,.8),X.add(G),X.add(oe(new Xt(.18,0),M[B%M.length],P+.3,1.4,-21.6))}t.add(X),n.push({x:-2.2,z:-19.5,r:.45},{x:2.2,z:-19.5,r:.45}),r.push({minX:-7,maxX:7,minZ:-23.5,maxZ:-21.5})}let _=ua({type:"groom",hair:"#3A2A24"});_.root.position.set(-.75,.16,-19.6);let E=ua({type:"bride",hair:"#5A3A2A"});E.root.position.set(.75,.16,-19.6),_.root.rotation.y=.15,E.root.rotation.y=-.15,t.add(_.root,E.root),n.push({x:0,z:-19.6,r:1.4});let T=o("couple",C("\uC2E0\uB791 \xB7 \uC2E0\uBD80","The couple"),"\u{1F490}",C("\uC778\uC0AC \uB098\uB204\uAE30","Say hello"),0,-18.6,3.4,3.2);T.npcs=[_,E];let w=Array.isArray(e.coupleLines)&&e.coupleLines.length?e.coupleLines:Rv,A=new Map,V=4,k=Math.floor(Math.random()*w.length),z=null,K=0;function I(X,O){let D=Math.hypot(O.x,O.z+19.6);for(let N of[_,E]){let F=D<7?um(Math.atan2(O.x-N.root.position.x,O.z-N.root.position.z)-N.root.rotation.y,-.9,.9):0;N.head.rotation.y+=(F-N.head.rotation.y)*Math.min(1,X*4)}if(V-=X,D<4.5&&V<=0&&!z){let N=w[k++%w.length];if(!A.has(N)){let F=ol(N,{scale:4});F.position.set(0,4.05,-19.3),F.visible=!1,t.add(F),A.set(N,F)}z=A.get(N),z.visible=!0,K=2.8,(Math.random()<.5?_:E).wave(1.6),V=8+xe(0,5)}z&&(K-=X,K<=0&&(z.visible=!1,z=null))}{let X=new Se,O="#E2B865",D=3.2,N=2.4,F=.16,W=.9;X.add(oe(new Ee(D+F,F,F),O,0,W+N,0)),X.add(oe(new Ee(D+F,F,F),O,0,W,0));for(let R of[-1,1])X.add(oe(new Ee(F,N,F),O,R*D/2,W+N/2,0)),X.add(oe(new Ee(F,W,F),O,R*D/2,W/2,0));let ae=l(Jt("PHOTO ZONE",{w:512,h:110,size:60,bg:"#FFFDF8",radius:55,color:"#C9637A"}),2,.43);ae.position.set(0,W+N+.4,.05),X.add(ae);let M=["#F4B8C0","#FFFFFF","#F9C59E","#E88A98"];for(let R=0;R<18;R++){let B=oe(new Xt(.16,1),M[R%4],-D/2+xe(-.15,.3),W+xe(0,1.1),xe(-.1,.15));X.add(B)}X.position.set(-11,0,19),X.rotation.y=.5,t.add(X);let x=.5;for(let R of[-1,1])n.push({x:-11+Math.cos(x)*R*D/2,z:19-Math.sin(x)*R*D/2,r:.3});o("photozone",C("\uD3EC\uD1A0\uC874","Photo zone"),"\u{1F4F8}",C("\uAE30\uB150\uC0AC\uC9C4 \uCC0D\uAE30","Take a photo"),-11,19,3,4.6)}let Y=(X,O,D)=>{let N=new Se;for(let M of[-.4,.4]){let x=oe(new je(.04,.04,2,6),"#B98A66",M,1,0);x.rotation.z=-M*.2,N.add(x)}let F=["#FFFFFF","#F4B8C0","#F7D58B","#FFE3EA"],W=new Xt(.17,1);for(let M=0;M<28;M++){let x=M/28*Math.PI*2;N.add(oe(W,F[M%4],Math.cos(x)*.62,2.3+Math.sin(x)*.62,0))}let ae=l(Jt(D.split(""),{w:96,h:420,size:C(64,40),bg:"#FFFFFF",radius:10,color:"#C9637A",font:"Gowun Batang"}),.22,.95);ae.position.set(.25,1.65,.12),N.add(ae),N.position.set(X,0,O),N.rotation.y=X<0?.4:-.4,t.add(N),n.push({x:X,z:O,r:.6})};Y(-3.4,32,C("\uCD95\uACB0\uD63C","CONGRATS")),Y(3.4,32,C("\uCD95\uACB0\uD63C","CONGRATS")),Y(15.2,-9,C("\uCD95\uACB0\uD63C","CONGRATS")),Cv(t,n,r,a),o("museum",((le=e.museum)==null?void 0:le.title)||C("\uCD94\uC5B5 \uC0AC\uC9C4\uAD00","Photo gallery"),"\u{1F5BC}\uFE0F",C("\uC0AC\uC9C4\uAD00 \uC785\uC7A5","Enter the gallery"),Er.x,Er.z,2.6,8.4);function J(X,O,D){a.forEach(N=>N(O,X)),s.forEach(N=>{N.label.position.y=N.baseY+Math.sin(O*2+N.off)*.12}),[_,E].forEach(N=>N.animate(X,0,O)),D&&I(X,D)}return{group:t,colliders:n,boxes:r,interactables:s,update:J,npcs:[_,E],plantFlower:y,flowerCount:()=>d.length,fountain:g,bed:it}}function Cv(i,e,t,n){var V,k;let r=window.WEDDING,s=new Se,a=20,o=-10.2,l="#FFF6EA",c="#FFFDF8",h="#E9B4A8";s.add(oe(new Ee(15,.4,13),"#F1E4CF",a,.2,-15.5));for(let z=0;z<3;z++)s.add(oe(new Ee(6-z*.6,.13,.45),"#F1E4CF",a,.065+z*.13,-8.3-z*.45));s.add(oe(new Ee(13,5.8,10),l,a,3.3,-15.3));let u=new je(.34,.38,5.4,16),d=new Ee(.9,.25,.9);[14,16.2,18.3,21.7,23.8,26].forEach(z=>{s.add(oe(u,c,z,3.1,-9.4)),s.add(oe(d,c,z,5.9,-9.4)),s.add(oe(d,c,z,.52,-9.4))}),s.add(oe(new Ee(14.2,.6,11.8),c,a,6.3,-14.9));let p=new ci;p.moveTo(-7.4,0),p.lineTo(7.4,0),p.lineTo(0,2.4),p.closePath();let f=oe(new Oi(p,{depth:11.8,bevelEnabled:!1}),h,a,6.6,-20.8);s.add(f);let v=oe(new Oi((()=>{let z=new ci;return z.moveTo(-6.6,.25),z.lineTo(6.6,.25),z.lineTo(0,2.05),z.closePath(),z})(),{depth:.05,bevelEnabled:!1}),c,a,6.6,-8.98);s.add(v);let m=new ci;m.moveTo(0,-.35),m.bezierCurveTo(-.6,.05,-.35,.5,0,.25),m.bezierCurveTo(.35,.5,.6,.05,0,-.35);let y=oe(new Oi(m,{depth:.1,bevelEnabled:!1}),"#E88A98",a,7.5,-8.9);y.scale.setScalar(.9),s.add(y);let g=new ge(new nt(6,.9),new $e({map:bt(Jt(((V=r.museum)==null?void 0:V.title)||C("\uCD94\uC5B5 \uC0AC\uC9C4\uAD00","Photo gallery"),{w:1024,h:150,size:80,bg:"#FFFDF8",border:"#E2B865",radius:75,color:"#C9637A"})),transparent:!0}));g.position.set(a,5.3,o+.02),s.add(g),s.add(oe(new Ee(2.9,3.7,.2),"#E2B865",a,2.25,o));let _=oe(new Ee(2.5,3.4,.22),"#9C6B4E",a,2.1,o+.02);s.add(_);let E=new ge(new nt(2.1,1.1),new $e({color:"#FFF1C9",transparent:!0,opacity:.9}));E.position.set(a,3,o+.15),s.add(E);let T=oe(new Je(.08,8,6),"#E2B865",a+.9,1.9,o+.15);s.add(T);let w=((k=r.museum)==null?void 0:k.themes)||[];[15.2,17.2,22.8,24.8].forEach((z,K)=>{var X,O;let I=w[K%Math.max(1,w.length)],Y=Dn?(X=I==null?void 0:I.title)==null?void 0:X.slice(0,4):(O=I==null?void 0:I.title)==null?void 0:O.split(" ").reduce((D,N)=>N.length>D.length?N:D,""),J=Jt(I?[I.emoji]:["\u2665"],{w:128,h:320,size:70,bg:(I==null?void 0:I.color)||"#F4B8C0",radius:16,color:"#fff",sub:Y,subSize:22}),le=new ge(new nt(.8,2),new $e({map:bt(J),transparent:!0}));le.position.set(z,3.2,o+.03),s.add(le)});let A=(z,K)=>{s.add(oe(new je(.35,.28,.6,12),"#E9B4A8",z,.3,K));let I=oe(new Xt(.5,1),"#8CC47A",z,.95,K);s.add(I);for(let Y=0;Y<4;Y++)s.add(oe(new Xt(.12,0),["#F4B8C0","#FFFFFF","#F7D58B"][Y%3],z+xe(-.35,.35),1.1+xe(0,.3),K+.3));e.push({x:z,z:K,r:.5})};A(16.5,-7.8),A(23.5,-7.8);for(let z of[13.45,26.55])for(let K of[-12.5,-15.5,-18.5]){let I=new ge(new nt(1.6,2.2),new $e({color:"#CDE9F5"}));I.position.set(z+(z<a?-.02:.02),3.4,K),I.rotation.y=z<a?-Math.PI/2:Math.PI/2,s.add(I)}i.add(s),n.push(z=>{y.position.y=7.5+Math.sin(z*2)*.06,E.material.opacity=.75+Math.sin(z*3)*.2}),t.push({minX:12.3,maxX:27.7,minZ:-22.2,maxZ:-9})}var _m=new S(1e3,0,0),kt=-3.2,Yh=3,xm=3.5,Mm=2.7,Zh=2.7,Lv=kn?768:1024,Pv=16,Iv=34,ll=null;function Dv(){let i=document.createElement("canvas");i.width=256,i.height=256;let e=i.getContext("2d"),t=["#E7C9A3","#E1C09A","#EBD0AD","#DDBB94"];for(let r=0;r<8;r++)e.fillStyle=t[r%4],e.fillRect(0,r*32,256,32),e.fillStyle="rgba(150,110,80,.18)",e.fillRect(0,r*32,256,2),e.fillRect(r*97%256,r*32,2,32);let n=bt(i);return n.wrapS=n.wrapT=Di,n}function Em(i,e=.6){return new we(i).lerp(new we("#FFFFFF"),e)}function bm(i){var M;let e=window.WEDDING,t=new Se;t.position.copy(_m),t.visible=!1,i.add(t);let n=Pr(),r=[],s=[],a=[],o=2;n.forEach((x,R)=>{let B=o,P=B+1.6,G=x.photos.map((H,j)=>({...H,x:B+4.4+j*xm})),U=B+4.4+Math.max(0,x.photos.length-1)*xm+2.2;a.push({theme:x,ti:R,x0:B,x1:U,headerX:P}),s.push({theme:x,ti:R,x:P}),G.forEach(H=>r.push({...H,ti:R})),o=U+1.2});let l=o+3.5,c=-9,h=l-c,u=(c+l)/2,d=Dv();d.repeat.set(h/4,14/4);let p=new ge(new nt(h,16),new Rt({map:d,gradientMap:zi}));p.rotation.x=-Math.PI/2,p.position.set(u,0,4.6),t.add(p);let f=mt("#FFF6EA"),v=new ge(new Ee(h,9,.4),f);v.position.set(u,4.5,kt-.2),t.add(v);for(let x of[c,l]){let R=new ge(new Ee(.4,9,16),f);R.position.set(x,4.5,4.6),t.add(R)}let m=new ge(new nt(h,16),mt("#FFFDF8"));m.rotation.x=Math.PI/2,m.position.set(u,8.6,4.6),t.add(m);let y=new ge(new Ee(h,.18,.12),mt("#E2B865"));y.position.set(u,5.5,kt+.06),t.add(y);let g=new ge(new Ee(h,.3,.1),mt("#C9A27E"));g.position.set(u,.15,kt+.05),t.add(g);let _=-6.2,E=new ge(new Ee(2.9,3.9,.12),mt("#E2B865"));E.position.set(_,1.95,kt+.06);let T=new ge(new Ee(2.5,3.6,.1),mt("#9C6B4E"));T.position.set(_,1.8,kt+.14);let w=new ge(new nt(1.8,.5),new $e({map:bt(Jt(C("\u{1F6AA} \uB098\uAC00\uB294 \uBB38","\u{1F6AA} Exit"),{w:360,h:100,size:46,bg:"#FFFDF8",radius:50,color:"#4A3B38"})),transparent:!0}));w.position.set(_,4.3,kt+.08),t.add(E,T,w);let A=document.createElement("canvas");A.width=900,A.height=700;{let x=A.getContext("2d");x.fillStyle="#FFFDF8",Bi(x,0,0,900,700,40),x.fill(),x.strokeStyle="#E2B865",x.lineWidth=8,Bi(x,20,20,860,660,30),x.stroke(),x.textAlign="center",x.fillStyle="#E88A98",x.font='28px "Gowun Dodum"',x.fillText("P H O T O   M U S E U M",450,110),x.fillStyle="#4A3B38",x.font='700 72px "Gowun Batang"',x.fillText(((M=e.museum)==null?void 0:M.title)||C("\uC6B0\uB9AC\uC758 \uCD94\uC5B5 \uC0AC\uC9C4\uAD00","Our photo gallery"),450,210),x.font='36px "Gowun Batang"',x.fillStyle="#7C6A66",x.fillText(`${e.groom.name} \u2665 ${e.bride.name}`,450,280),x.font='30px "Gowun Dodum"',n.forEach((R,B)=>x.fillText(C(`${R.emoji}  ${R.title} \xB7 ${R.photos.length}\uC7A5`,`${R.emoji}  ${R.title} \xB7 ${R.photos.length} ${R.photos.length===1?"photo":"photos"}`),450,370+B*52)),x.fillStyle="#C9637A",x.font='28px "Gowun Dodum"',x.fillText(C("\u2192 \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC5B4\uAC00\uBA70 \uAD00\uB78C\uD574 \uC8FC\uC138\uC694","\u2192 Walk to the right to see the photos"),450,650)}let V=new ge(new nt(4.2,3.27),new $e({map:bt(A)}));V.position.set(-1.6,3,kt+.05),t.add(V);let k=new Ee(.9,.12,.35),z=new $e({color:"#FFF1C9"});a.forEach(x=>{let R=x.theme,B=x.x1-x.x0,P=Em(R.color,.55),G=new ge(new nt(B,1.4),new Rt({color:P,gradientMap:zi}));G.position.set((x.x0+x.x1)/2,.7,kt+.02),t.add(G);let U=new ge(new nt(B,.5),G.material);U.position.set((x.x0+x.x1)/2,6,kt+.02),t.add(U);let H=new ge(new nt(B-.6,3.2),new Rt({color:Em(R.color,.3),gradientMap:zi}));H.rotation.x=-Math.PI/2,H.position.set((x.x0+x.x1)/2,.01,.4),t.add(H);let j=document.createElement("canvas");j.width=560,j.height=800;let $=j.getContext("2d");$.fillStyle=R.color,Bi($,0,0,560,800,36),$.fill(),$.fillStyle="rgba(255,255,255,.9)",Bi($,24,24,512,752,26),$.fill(),$.textAlign="center",$.textBaseline="middle",$.font="150px serif",$.fillText(R.emoji||"\u{1F4F7}",280,190),$.fillStyle="#4A3B38",$.font='700 64px "Gowun Batang"',$.fillText(R.title,280,360),$.fillStyle="#7C6A66",$.font='30px "Gowun Dodum"',Fv($,R.subtitle||"",280,450,440,44),$.fillStyle="#C9637A",$.font='28px "Gowun Dodum"',$.fillText(C(`\uC0AC\uC9C4 ${R.photos.length}\uC7A5`,`${R.photos.length} ${R.photos.length===1?"photo":"photos"}`),280,700);let ne=new ge(new nt(2.3,3.29),new $e({map:bt(j)}));ne.position.set(x.headerX,3,kt+.05),t.add(ne);let b=Jt([`${R.emoji} ${R.title}`],{w:640,h:140,size:64,bg:R.color,radius:30,color:"#FFFFFF"}),se=new ge(new nt(3.2,.7),new $e({map:bt(b),transparent:!0}));if(se.position.set(x.headerX+.4,6.9,kt+.1),t.add(se),x.x1-x.x0>9){let Z=(x.x0+x.x1)/2,Q=new ge(new Ee(2.4,.2,.7),mt("#B98A66"));Q.position.set(Z,.55,4.3);let ce=new ge(new Ee(.15,.5,.6),mt("#8C6B55"));ce.position.set(Z-1,.25,4.3);let me=ce.clone();me.position.x=Z+1,t.add(Q,ce,me)}});let K=new nt(1,1),I=new Ee(1,1,.12),Y=[mt("#E2B865"),mt("#FFFFFF"),mt("#B98A66")],J=new $e({color:"#F3E9DA"});r.forEach((x,R)=>{let B=new ge(I,Y[x.ti%Y.length]),P=new ge(K,J);B.position.set(x.x,Yh,kt+.07),P.position.set(x.x,Yh,kt+.135),t.add(B,P);let G=new ge(k,z);G.position.set(x.x,4.9,kt+.25),t.add(G),x.frame=B,x.photo=P,x.state="idle",le(x,2.2,2.2)});function le(x,R,B){x.photo.scale.set(R,B,1),x.frame.scale.set(R+.26,B+.26,1)}function X(x){if(x.placard){x.placard.visible=!0;return}let R=`${String(x.idx+1).padStart(2,"0")}${x.caption?" \xB7 "+x.caption:""}`,B=C(22,40),P=R.length>B?R.slice(0,B-1)+"\u2026":R,G=34;if(!Dn){ll=ll||document.createElement("canvas").getContext("2d"),ll.font='700 34px "Gowun Dodum", serif';let $=ll.measureText(P).width;$>470&&(G=Math.max(24,Math.floor(34*470/$)))}let U=Jt(P,{w:512,h:90,size:G,bg:"#FFFDF8",radius:12,color:"#4A3B38",font:"Gowun Dodum"}),H=new ge(new nt(1.8,.32),new $e({map:bt(U),transparent:!0})),j=Yh-x.photo.scale.y/2-.45;H.position.set(x.x,j,kt+.06),t.add(H),x.placard=H}function O(x){var R;x.photo.material!==J&&((R=x.photo.material.map)==null||R.dispose(),x.photo.material.dispose()),x.photo.material=J,x.state="idle",x.placard&&(x.placard.visible=!1),le(x,2.2,2.2)}let D=0;function N(x){x.state="loading",D++;let R=new Image;R.decoding="async";let B=setTimeout(()=>{x.state==="loading"&&(R.onload=R.onerror=null,F(x,Ki(x.theme,x.idx,x.src),1,!1))},8e3);R.onload=()=>{clearTimeout(B);let P=Math.min(1,Lv/Math.max(R.width,R.height)),G=document.createElement("canvas");G.width=Math.round(R.width*P),G.height=Math.round(R.height*P);let U=G.getContext("2d");U.drawImage(R,0,0,G.width,G.height);try{U.getImageData(0,0,1,1),F(x,G,R.width/R.height,!0)}catch{let j=Math.round(600/(R.width/R.height));F(x,Ki(x.theme,x.idx,C("(\uD30C\uC77C\uB85C \uC5F4\uC5C8\uC744 \uB54C\uB9CC \uBCF4\uC774\uB294 \uC548\uB0B4)","(shown only when opened as a file)"),600,j,C("\u{1F50D} \uD06C\uAC8C \uBCF4\uAE30\uB97C \uB20C\uB7EC \uD655\uC778\uD558\uC138\uC694","\u{1F50D} Tap 'View larger' to see it")),R.width/R.height,!0)}},R.onerror=()=>{clearTimeout(B),F(x,Ki(x.theme,x.idx,x.src),1,!1)},R.src=Ji(x)}function F(x,R,B,P){D--,x.state="done",x.ok=P,x.photo.material!==J&&x.photo.material.dispose(),x.photo.material=new $e({map:bt(R)});let G=Mm,U=Mm/B;U>Zh&&(U=Zh,G=Zh*B),le(x,G,U),X(x)}let W=_m,ae=new S(W.x+_,0,1.2);return{group:t,themes:n,sections:a,entries:r,spawn:ae,themeStart(x){let R=a[x];return new S(W.x+R.headerX+1.2,0,1.2)},clamp(x){x.x=Math.min(W.x+l-.8,Math.max(W.x+c+.8,x.x)),x.z=Math.min(W.z+3.2,Math.max(W.z+kt+1,x.z))},currentTheme(x){let R=x.x-W.x,B=a.find(P=>R>=P.x0-.6&&R<=P.x1+.6);return B?B.ti:-1},nearest(x){let R=x.x-W.x;if(Math.abs(R-_)<1.8)return{type:"exit",emoji:"\u{1F6AA}",action:C("\uBC16\uC73C\uB85C \uB098\uAC00\uAE30","Go outside")};if(Math.abs(R- -1.6)<2)return{type:"welcome",emoji:"\u{1F4DA}",action:C("\uC804\uCCB4 \uC568\uBC94 \uBCF4\uAE30","See full album")};let B=s.find(U=>Math.abs(R-U.x)<1.3);if(B)return{type:"header",ti:B.ti,emoji:B.theme.emoji||"\u{1F4DA}",action:C(`${B.theme.title} \uC568\uBC94`,`${B.theme.title} album`)};let P=null,G=1.75;for(let U of r){let H=Math.abs(R-U.x);H<G&&(G=H,P=U)}return P?{type:"photo",entry:P,ti:P.ti,idx:P.idx,emoji:"\u{1F50D}",action:C("\uD06C\uAC8C \uBCF4\uAE30","View larger")}:null},update(x,R,B){let P=B.x-W.x;for(let G of r){let U=Math.abs(P-G.x);G.state==="idle"&&U<Pv&&D<3?N(G):G.state==="done"&&U>Iv&&O(G)}}}}function Fv(i,e,t,n,r,s){let a=e.split(" "),o="",l=n;for(let c of a){let h=o?o+" "+c:c;i.measureText(h).width>r&&o?(i.fillText(o,t,l),o=c,l+=s):o=h}o&&i.fillText(o,t,l)}var Wn=window.WEDDING,Dt=i=>document.querySelector(i),Uv=Dt("#phone"),_t={w:1,h:1,left:0,top:0},Pm=()=>_t.w/_t.h<.8,Nv=i=>new Promise(e=>setTimeout(e,i)),dt,yt,fn,jt,fa,fi,ht,Ft,mn,br,Im=[],Dm=[],Vn=!1,pn=null,Sm=-2,Sr=1,eu=!1,ws=0,pa=0,wm=0;function au(){let i=Math.min(devicePixelRatio||1,kn?1.75:1.5);return ws>=1&&(i=Math.min(i,1.25)),ws>=2&&(i=1),document.body.classList.contains("wide")&&(i=Math.min(i,1)),i}function Ov(){try{let i=dt.getContext(),e=i.getExtension("WEBGL_debug_renderer_info"),t=e?String(i.getParameter(e.UNMASKED_RENDERER_WEBGL)):"";return/Intel|Iris|UHD|HD Graphics|SwiftShader|llvmpipe|Mali-|Adreno \(TM\) [1-5]|PowerVR/i.test(t)}catch{return!1}}var wr={outfit:"#8FB8DE",hair:"#5A3A2A",longHair:!1},Gi="day",gn=null,ml=new el,Bv=new S(16,34,14),q={pos:new S(0,0,31),vel:new S,yaw:Math.PI,y:0,vy:0,mode:"out",busy:!1,doorCooldown:0,target:null,pending:null,targetT:0,moveT:0,stuckT:0,swoopT:0,posing:null},Ln=new Set,Ss={x:0,y:0},{date:Tm}=$t(),Hi={x:-11,z:19,ang:.5},zv=["invitation","mailbox","directions","gift","schedule","quiz","fountain","couple","photozone","museum"],Fm=i=>{try{dispatchEvent(new CustomEvent("wv:visit",{detail:i}))}catch{}};async function Um({character:i,onProgress:e=()=>{}}={}){var s;i&&(wr={...wr,...i}),await Promise.race([Promise.all(['700 40px "Gowun Batang"','40px "Gowun Batang"','40px "Gowun Dodum"'].map(a=>document.fonts.load(a))),new Promise(a=>setTimeout(a,3e3))]),e(35),zm();let t=kn&&(navigator.deviceMemory&&navigator.deviceMemory<=2||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4);dt=new ra({antialias:!t,powerPreference:"high-performance"}),Sr=au(),dt.setPixelRatio(Sr),dt.shadowMap.enabled=!0,dt.shadowMap.type=nl,dt.outputColorSpace=pt,Dt("#app").appendChild(dt.domElement),dt.domElement.addEventListener("webglcontextlost",a=>{a.preventDefault(),eu=!0,et(C("\uD654\uBA74\uC744 \uB2E4\uC2DC \uADF8\uB9AC\uB294 \uC911\u2026","Redrawing the screen\u2026"))}),dt.domElement.addEventListener("webglcontextrestored",()=>{eu=!1,dt.setPixelRatio(Sr),dt.setSize(_t.w,_t.h),Ts()}),yt=new Bo,yt.fog=new Oo(It.day.fog,50,150),fn=new Wt(60,1,.1,900),fa=new Ko(It.day.hemi,It.day.ground,It.day.hemiI),yt.add(fa),jt=new Qo(It.day.sun,It.day.sunI),jt.castShadow=!0;let n=kn?1024:1536;if(jt.shadow.mapSize.set(n,n),Object.assign(jt.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:90}),jt.shadow.bias=-5e-4,jt.shadow.normalBias=.03,yt.add(jt,jt.target),ht=ym(yt),fi=vm(yt,(a,o)=>ht.colliders.some(l=>Math.hypot(a-l.x,o-l.z)<l.r+.8)||ht.boxes.some(l=>a>l.minX-.8&&a<l.maxX+.8&&o>l.minZ-.8&&o<l.maxZ+.8)),e(65),Ft=bm(yt),e(85),Im=[...fi.colliders,...ht.colliders],Dm=ht.boxes,Am(!1),addEventListener("wedding:letters",()=>Am(!1)),ht.fountain.setCoins(km()),br=new ge(new hi(.32,.48,24),new $e({color:"#E88A98",transparent:!0,opacity:0,depthWrite:!1})),br.rotation.x=-Math.PI/2,br.position.y=.05,yt.add(br),Bm(),Vv(),Zv(),Dt("#btn-shot").onclick=()=>dl(!1),(s=Dt("#btn-tour"))==null||s.addEventListener("click",()=>mi(C("\uD22C\uC5B4\uB97C \uBA48\uCDC4\uC5B4\uC694. \uB9C8\uC74C\uB300\uB85C \uB458\uB7EC\uBCF4\uC138\uC694","Tour stopped. Look around as you like"))),addEventListener("resize",ga),document.addEventListener("visibilitychange",()=>{document.hidden||ml.getDelta()}),ga(),ul(Gv()),(t||Ov())&&Vm(1),Ts(),Wm(),Wn.demoPhotos){let a=Ft.themes.flatMap(c=>c.photos),o=window.requestIdleCallback||(c=>setTimeout(c,120)),l=()=>{let c=a.shift();if(c){try{Ji(c)}catch{}o(l)}};o(l)}return/debug/.test(location.hash)&&(window.__wv={goTo:a=>lu(ht.interactables.find(o=>o.id===a)),takePhoto:dl,enterMuseum:gl,exitMuseum:vl,cycleTime:nu,startTour:Lm,stopTour:mi,applyTime:ul,state:q,props:ht,flowerCount:()=>ht.flowerCount()}),{themes:Ft.themes,start:Hv,setCharacter:kv,enterMuseum:()=>gl(),letterSent:Om,takePhoto:dl,resize:()=>{ga(),Ts()},startTour:Lm,stopTour:mi,isTouring:()=>!!gn,setTime:ul,getTime:()=>Gi,cycleTime:nu}}function Hv({hint:i=!0}={}){Vn=!0,q.swoopT=1.8,ma=pl=0,lt.saved()&&lt.setEnabled(!0),i&&setTimeout(()=>et(C("\u{1F446} \uD654\uBA74\uC744 \uB04C\uBA74 \uAC77\uACE0, \uC774\uB984\uD45C\uB97C \uB204\uB974\uBA74 \uCC3E\uC544\uAC00\uC694","\u{1F446} Drag to walk, tap a name tag to go there"),4200),900);let e=Gi==="night"?C("\u{1F319} \uBC24\uC5D0 \uC640\uC8FC\uC168\uB124\uC694. \uAC00\uB85C\uB4F1\uC744 \uCF1C \uB450\uC5C8\uC5B4\uC694","\u{1F319} You came at night. We left the streetlights on"):Gi==="dusk"?C("\u{1F307} \uB178\uC744 \uC9C0\uB294 \uB9C8\uC744\uC774\uC5D0\uC694. \uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694","\u{1F307} The sun is setting over the village. Take your time"):null;e&&setTimeout(()=>et(e,3600),5600)}function kv(i){wr={...wr,...i},mn&&Bm()}var tu=new Set,Nm=i=>i.id||`${i.name}|${i.time||""}`;function Am(i){Yi().forEach(e=>{let t=Nm(e);tu.has(t)||(tu.add(t),ht.plantFlower(e,i))})}function Om(i){i&&tu.add(Nm(i));let e=ht.plantFlower(i||{name:C("\uD558\uAC1D","Guest"),side:"\uC2E0\uB791\uCE21"},!0);bs(yt,new S(q.pos.x,2.2+q.y,q.pos.z),10,"\u{1F48C}"),e&&q.mode==="out"&&!gn&&(q.target=new S(it.x-it.r-1,0,it.z+.6),q.pending=null,q.targetT=12,q.moveT=0,setTimeout(()=>et(C(`\u{1F337} ${(i==null?void 0:i.name)||"\uD558\uAC1D"}\uB2D8\uC758 \uAF43\uC774 \uD3B8\uC9C0 \uAF43\uBC2D\uC5D0 \uD53C\uC5C8\uC5B4\uC694`,`\u{1F337} ${(i==null?void 0:i.name)||"Guest"}'s flower bloomed in the letter garden`),3200),500))}function Bm(){mn&&yt.remove(mn.root),mn=ua({outfit:wr.outfit,hair:wr.hair,longHair:!!wr.longHair}),yt.add(mn.root)}function Gv(){let i=location.hash;if(/night/.test(i))return"night";if(/sunset|dusk/.test(i))return"dusk";if(/day|morning/.test(i))return"day";try{let t=localStorage.getItem("wedding-time");if(It[t])return t}catch{}if(Wn.skyMode&&It[Wn.skyMode])return Wn.skyMode;let e=new Date(_i().toLocaleString("en-US",{timeZone:"Asia/Seoul"})).getHours();return e>=6&&e<16?"day":e<19?"dusk":"night"}function ou(i){yt.fog.color.set(i.fog),jt.color.set(i.sun),jt.intensity=i.sunI,fa.color.set(i.hemi),fa.groundColor.set(i.ground),fa.intensity=i.hemiI}function ul(i){Gi=It[i]?i:"day";let e=fi.setTime(Gi);return q.mode==="out"&&ou(e),Gi}function nu(){let i=["day","dusk","night"],e=i[(i.indexOf(Gi)+1)%i.length];ul(e);try{localStorage.setItem("wedding-time",e)}catch{}return et(e==="night"?C("\u{1F319} \uBC24 \uB9C8\uC744\uC774\uC5D0\uC694. \uAC00\uB85C\uB4F1\uC774 \uCF1C\uC84C\uC5B4\uC694","\u{1F319} Night in the village. The streetlights are on"):e==="dusk"?C("\u{1F307} \uB178\uC744\uC774 \uC9C0\uACE0 \uC788\uC5B4\uC694","\u{1F307} The sun is setting"):C("\u2600\uFE0F \uB2E4\uC2DC \uD658\uD55C \uB0AE\uC774\uC5D0\uC694","\u2600\uFE0F Back to bright daylight")),e}function zm(){let i=Uv.getBoundingClientRect();_t.w=Math.max(1,i.width),_t.h=Math.max(1,i.height),_t.left=i.left,_t.top=i.top}function ga(){zm(),fn.aspect=_t.w/_t.h,fn.fov=Pm()?q.mode==="museum"?55:64:50,fn.updateProjectionMatrix(),Sr=au(),dt.setPixelRatio(Sr),dt.setSize(_t.w,_t.h)}function Vv(){addEventListener("keydown",a=>{Zn()||/INPUT|TEXTAREA/.test(a.target.tagName)||document.body.classList.contains("reading")||(Ln.add(a.code),/Key[WASD]|Arrow/.test(a.code)&&(document.body.classList.add("moved"),mi()),a.code==="Space"&&(Rm(),a.preventDefault()),(a.code==="KeyE"||a.code==="Enter")&&ru(),a.code==="KeyH"&&Cm(),a.code==="KeyN"&&nu())}),addEventListener("keyup",a=>Ln.delete(a.code)),addEventListener("blur",()=>Ln.clear());let i=dt.domElement,e=Dt("#joy"),t=e.querySelector(".knob"),n=48,r=null;i.addEventListener("pointerdown",a=>{if(!(r||!Vn)){r={id:a.pointerId,sx:a.clientX,sy:a.clientY,ax:a.clientX,ay:a.clientY,drag:!1,t:performance.now()};try{i.setPointerCapture(a.pointerId)}catch{}}}),i.addEventListener("pointermove",a=>{if(!r||a.pointerId!==r.id)return;if(!r.drag){if(Math.hypot(a.clientX-r.sx,a.clientY-r.sy)<10)return;r.drag=!0,q.target=null,q.pending=null,mi(),e.classList.add("active"),document.body.classList.add("moved")}let o=a.clientX-r.ax,l=a.clientY-r.ay,c=Math.hypot(o,l);c>n&&(r.ax=a.clientX-o/c*n,r.ay=a.clientY-l/c*n,o=a.clientX-r.ax,l=a.clientY-r.ay),Ss.x=o/n,Ss.y=l/n,e.style.left=`${r.ax-_t.left}px`,e.style.top=`${r.ay-_t.top}px`,t.style.transform=`translate(${o}px, ${l}px)`});let s=a=>{if(!r||a.pointerId!==r.id)return;let o=!r.drag&&performance.now()-r.t<450&&a.type==="pointerup";r=null,Ss.x=Ss.y=0,e.classList.remove("active"),e.style.left=e.style.top="",t.style.transform="",o&&Xv(a.clientX,a.clientY)};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),Jh(Dt("#btn-action"),()=>ru()),Jh(Dt("#btn-jump"),()=>Rm()),Jh(Dt("#btn-heart"),()=>Cm())}function Jh(i,e){let t=0;i.addEventListener("pointerdown",n=>{n.pointerType==="mouse"&&n.button!==0||(t=performance.now(),n.preventDefault(),e())}),i.addEventListener("click",()=>{performance.now()-t>500&&e()})}function lu(i){let e=q.pos.x-i.pos.x,t=q.pos.z-i.pos.z,n=Math.hypot(e,t)||1,r=Math.max(.5,i.r-.6);q.target=new S(i.pos.x+e/n*r,0,i.pos.z+t/n*r),q.pending=i,q.targetT=16,q.moveT=0,q.stuckT=0}function iu(i){br.position.set(i.x,.05,i.z),pa=1}var Kh=new tl,Wv=new wn(new S(0,1,0),0);function Xv(i,e){if(Zn()||q.busy)return;mi();let t=new ue((i-_t.left)/_t.w*2-1,-((e-_t.top)/_t.h)*2+1);if(Kh.setFromCamera(t,fn),q.mode==="out"){let r=Kh.intersectObjects(ht.interactables.map(s=>s.label))[0];if(r){let s=ht.interactables.find(a=>a.label===r.object);lu(s),iu(s.pos),wt(8);return}}let n=new S;Kh.ray.intersectPlane(Wv,n)&&(q.target=n,q.pending=null,q.targetT=8,q.moveT=0,q.stuckT=0,iu(n))}var Hm="wedding-coins",km=()=>{try{return+localStorage.getItem(Hm)||0}catch{return 0}};function jv(i){if(i===1)return C("\u{1FA99} \uCCAB \uB3D9\uC804\uC774\uC5D0\uC694. \uC18C\uC6D0\uC740 \uB9C8\uC74C\uC18D\uC73C\uB85C\uB9CC \u{1F92B}","\u{1FA99} Your first coin. Keep the wish to yourself \u{1F92B}");if(i===7)return C("\u{1FA99} \uC77C\uACF1 \uBC88\uC9F8\u2026 \uC18C\uC6D0 \uBD80\uC790\uC2DC\uB124\uC694 \u{1F606}","\u{1FA99} Coin number seven\u2026 so many wishes \u{1F606}");if(i>=10)return C("\u{1FA99} \uBD84\uC218\uAC00 \uBD80\uC790\uAC00 \uB410\uC5B4\uC694 \u{1F4B0} \uB450 \uBD84\uC758 \uD589\uBCF5\uC744 \uBE4C\uC5C8\uC5B4\uC694","\u{1FA99} The fountain is getting rich \u{1F4B0} You wished the couple happiness");let e=C(["\uB450 \uBD84\uC758 \uD589\uBCF5\uC744 \uBE4C\uC5C8\uC5B4\uC694","\uD3C9\uC0DD \uC6C3\uC74C \uAC00\uB4DD\uD558\uAE38 \uBE4C\uC5C8\uC5B4\uC694","\uAC74\uAC15\uD558\uACE0 \uD589\uBCF5\uD558\uAE38 \uBE4C\uC5C8\uC5B4\uC694","\uC624\uB298\uCC98\uB7FC \uB298 \uB530\uC2A4\uD558\uAE38 \uBE4C\uC5C8\uC5B4\uC694"],["You wished the couple happiness","You wished them a lifetime of laughter","You wished them health and happiness","You wished them days as warm as today"]),t=e[Math.floor(Math.random()*e.length)];return C(`\u{1FA99} \uD401\uB2F9! ${t}`,`\u{1FA99} Plop \u2014 ${t}`)}var Qh={invitation:Pa,directions:zr,gift:Bs,schedule:Ia,quiz:Da,mailbox:()=>zs(Om),couple:i=>{i.npcs.forEach(e=>e.wave(2)),bs(yt,new S(0,2.6,-19.3),14),setTimeout(()=>{!Zn()&&q.mode==="out"&&Fa()},700)},fountain:()=>{mn.wave(.8),wt(30),ht.fountain.toss(yt,new S(q.pos.x,1.4+q.y,q.pos.z),()=>{let i=km()+1;try{localStorage.setItem(Hm,String(i))}catch{}ht.fountain.setCoins(i),bs(yt,new S(0,2.6,4),6,"\u2728"),lt.sfx("coin"),et(jv(i))})},photozone:()=>dl(!0),museum:()=>gl()};function qv(){let i=q.pos;if(q.mode==="museum")return Ft.nearest(i);let e=null,t=1/0;for(let n of ht.interactables){let r=Math.hypot(i.x-n.pos.x,i.z-n.pos.z);r<n.r&&r<t&&(t=r,e=n)}return e}function ru(i=pn){var e;if(!(q.busy||Zn())){if(!i){mn.wave(1.4);return}if(wt(15),lt.sfx("pop"),q.mode==="museum"){i.type==="exit"?vl():i.type==="welcome"?Hr(Ft.themes):i.type==="header"?Hr(Ft.themes,i.ti):i.type==="photo"&&Kl(Ft.themes,i.ti,i.idx);return}q.yaw=Math.atan2(i.pos.x-q.pos.x,i.pos.z-q.pos.z),Fm(i.id),(e=Qh[i.id])==null||e.call(Qh,i)}}function $v(){var t,n,r;let i=Dt("#btn-action"),e=pn?(pn.id||pn.type)+((r=(n=(t=pn.entry)==null?void 0:t.src)!=null?n:pn.ti)!=null?r:""):"";i.dataset.key!==e&&(e&&!i.dataset.key&&(wt(8),lt.sfx("chime")),i.dataset.key=e,i.classList.toggle("ready",!!pn),i.querySelector(".em").textContent=pn?pn.emoji:"\u{1F44B}",i.querySelector(".lb").textContent=pn?pn.action:C("\uC778\uC0AC\uD558\uAE30","Say hi"))}function Rm(){q.y<=.001&&!Zn()&&!q.busy&&(q.vy=6.5,lt.sfx("jump"))}function Cm(){bs(yt,new S(q.pos.x,2.2+q.y,q.pos.z),8),mn.wave(1),lt.sfx("heart"),q.mode==="out"&&Math.hypot(q.pos.x,q.pos.z+19.6)<6&&ht.npcs.forEach(i=>i.wave(1.5))}function Lm(){!Vn||q.mode!=="out"||q.busy||(gn={i:0,waitT:.4},document.body.classList.add("touring"),et(C("\u{1F6B6} \uC790\uB3D9 \uD22C\uC5B4 \uC2DC\uC791! \uD654\uBA74\uC744 \uB04C\uBA74 \uC5B8\uC81C\uB4E0 \uBA48\uCDB0\uC694","\u{1F6B6} Auto tour started. Drag the screen to stop anytime"),3200))}function mi(i){gn&&(gn=null,document.body.classList.remove("touring"),q.pending&&(q.target=null,q.pending=null),i&&et(i))}function Yv(){let i=zv[gn.i++];if(!i){mi(),et(C("\u{1F389} \uD22C\uC5B4 \uB05D! \uC774\uC81C \uB9C8\uC74C\uB300\uB85C \uB458\uB7EC\uBCF4\uC138\uC694","\u{1F389} Tour finished. Now look around as you like"),3600),Br(),lt.sfx("tada");return}let e=ht.interactables.find(t=>t.id===i);e&&(lu(e),iu(e.pos),gn.waitT=i==="fountain"?2.4:i==="couple"?1.2:.9)}var fl=i=>new Promise(e=>{Dt("#fade").classList.toggle("on",i),setTimeout(e,460)});function Zv(){let i=Dt("#museum-bar");i.innerHTML="",Ft.themes.forEach((t,n)=>{let r=document.createElement("button");r.className="chip",r.dataset.ti=n,r.textContent=`${t.emoji} ${t.title}`,r.onclick=()=>{q.pos.copy(Ft.themeStart(n)),q.target=null,wt(8),Ts()},i.appendChild(r)});let e=document.createElement("button");e.className="chip",e.textContent=C("\u{1F4DA} \uC804\uCCB4 \uC568\uBC94","\u{1F4DA} Full album"),e.onclick=()=>Hr(Ft.themes),i.append(e),Dt("#btn-exit").onclick=()=>vl()}var su=()=>vl(!0);async function gl(i=-1){if(q.mode==="museum"||q.busy)return;let e=!!gn;mi(),Fm("museum"),q.busy=!0,await fl(!0),q.mode="museum",fi.group.visible=ht.group.visible=!1,Ft.group.visible=!0,jt.castShadow=!1,ou(It.day),q.pos.copy(i>=0?Ft.themeStart(i):Ft.spawn),q.vel.set(0,0,0),q.target=null,q.yaw=Math.PI/2,document.body.classList.add("in-museum"),ga(),Ts(),nr(su),await fl(!1),q.busy=!1,et(e?C("\u{1F3C1} \uD22C\uC5B4\uC758 \uB9C8\uC9C0\uB9C9, \uC0AC\uC9C4\uAD00\uC774\uC5D0\uC694. \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC73C\uBA70 \uAD6C\uACBD\uD558\uC138\uC694","\u{1F3C1} Last stop of the tour: the photo gallery. Walk to the right to look around"):C("\u{1F449} \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC73C\uBA70 \uC0AC\uC9C4\uC744 \uAD6C\uACBD\uD558\uC138\uC694","\u{1F449} Walk to the right to see the photos"),e?4200:2400)}async function vl(i=!1){if(q.mode==="museum"){if(q.busy){i&&nr(su);return}i||Or(su),q.busy=!0,await fl(!0),q.mode="out",fi.group.visible=ht.group.visible=!0,Ft.group.visible=!1,jt.castShadow=dt.shadowMap.enabled,ou(It[Gi]),q.pos.set(Er.x,0,Er.z+2.4),q.vel.set(0,0,0),q.target=null,q.yaw=0,q.doorCooldown=1.5,document.body.classList.remove("in-museum"),ga(),Ts(),await fl(!1),q.busy=!1}}function Jv(i){let e=i.width,t=i.height,n=Math.round(e*.05),r=Math.round(e*.22),s=document.createElement("canvas");s.width=e+n*2,s.height=t+n+r;let a=s.getContext("2d");a.fillStyle="#FFFDF8",a.fillRect(0,0,s.width,s.height),a.drawImage(i,n,n),a.fillStyle="#C9637A",a.textAlign="center",a.font=`700 ${Math.round(r*.3)}px "Gowun Batang", serif`,a.fillText(`${Wn.groom.name} \u2665 ${Wn.bride.name}`,s.width/2,t+n+r*.45),a.fillStyle="#7C6A66",a.font=`${Math.round(r*.15)}px "Gowun Dodum", sans-serif`,a.fillText(C(`${Tm} \xB7 \uC6B0\uB9AC\uC758 \uC791\uC740 \uACB0\uD63C \uB9C8\uC744\uC5D0\uC11C`,`${Tm} \xB7 in our little wedding village`),s.width/2,t+n+r*.74);let o=document.createElement("canvas");o.width=Math.round(s.width*1.12),o.height=Math.round(s.height*1.1);let l=o.getContext("2d");l.fillStyle="#F6E9DD",l.fillRect(0,0,o.width,o.height),l.save(),l.translate(o.width/2,o.height/2),l.rotate(-.03),l.shadowColor="rgba(80,40,30,.3)",l.shadowBlur=e*.05,l.shadowOffsetY=e*.02,l.drawImage(s,-s.width/2,-s.height/2),l.restore(),l.fillStyle="rgba(255,236,170,.8)";for(let[c,h,u]of[[o.width*.09,o.height*.055,-.5],[o.width*.91,o.height*.055,.5]])l.save(),l.translate(c,h),l.rotate(u),l.fillRect(-e*.11,-e*.03,e*.22,e*.06),l.restore();return o}async function dl(i=!1){if(q.busy||Zn())return;let e=null;q.busy=!0;try{if(i){mi(),q.target=null,q.pending=null;let s=Math.sin(Hi.ang),a=Math.cos(Hi.ang),o=Math.cos(Hi.ang),l=-Math.sin(Hi.ang),c=Hi.x+s*.9,h=Hi.z+a*.9;q.pos.set(c,0,h),q.vel.set(0,0,0),q.yaw=Hi.ang,q.y=0,q.vy=0;let[u,d]=ht.npcs,p=[u,d].map(v=>({c:v,p:v.root.position.clone(),r:v.root.rotation.y}));u.root.position.set(c-o*1.15,0,h-l*1.15),d.root.position.set(c+o*1.15,0,h+l*1.15),u.root.rotation.y=d.root.rotation.y=Hi.ang,e=()=>p.forEach(v=>{v.c.root.position.copy(v.p),v.c.root.rotation.y=v.r}),q.posing={x:c,z:h,nx:s,nz:a},mn.wave(3),u.wave(3),d.wave(3);let f=Dt("#count");for(let v of["3","2","1"])f.textContent=v,f.classList.remove("show"),f.offsetWidth,f.classList.add("show"),lt.sfx("pop"),wt(8),await Nv(680);f.classList.remove("show"),f.textContent="",bs(yt,new S(c,2.4,h),10)}dt.render(yt,fn);let t=Jv(dt.domElement),n=t.toDataURL("image/jpeg",.9);lt.sfx("shutter"),wt(25),Dt("#fade").style.background="#fff",Dt("#fade").classList.add("on"),setTimeout(()=>{Dt("#fade").classList.remove("on"),setTimeout(()=>Dt("#fade").style.background="",450)},120),e==null||e(),e=null,q.posing=null;let r=/KAKAOTALK|Instagram|FBAN|FBAV|Line\//i.test(navigator.userAgent);Gl(C("\uAE30\uB150\uC0AC\uC9C4","Souvenir photo"),`
      <img src="${n}" style="width:100%;border-radius:14px;box-shadow:var(--shadow);-webkit-touch-callout:default" alt="${C("\uAE30\uB150\uC0AC\uC9C4","Souvenir photo")}" />
      <p class="muted center">${r?C("\uC0AC\uC9C4\uC744 <b>\uAE38\uAC8C \uB20C\uB7EC</b> \uC800\uC7A5\uD574 \uC8FC\uC138\uC694","<b>Press and hold</b> the photo to save it"):C("\uC0AC\uC9C4\uC744 <b>\uAE38\uAC8C \uB20C\uB7EC</b> \uC800\uC7A5\uD558\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694","<b>Press and hold</b> the photo to save it, or use the buttons below")}</p>
      <div class="btns">
        <button class="btn pink ph-share">${C("\u{1F4E4} \uACF5\uC720\uD558\uAE30","\u{1F4E4} Share")}</button>
        <button class="btn ph-save">${C("\u{1F4BE} \uC800\uC7A5\uD558\uAE30","\u{1F4BE} Save")}</button>
      </div>`,s=>{let a=null,o=null;t.toBlob(c=>{c&&(a=new File([c],"wedding-village-photo.jpg",{type:"image/jpeg"}),o=URL.createObjectURL(c))},"image/jpeg",.9);let l=()=>{if(r){et(C("\uC0AC\uC9C4\uC744 \uAE38\uAC8C \uB20C\uB7EC \uC800\uC7A5\uD574 \uC8FC\uC138\uC694","Press and hold the photo to save it"));return}let c=document.createElement("a");c.href=o||n,c.download="wedding-village-photo.jpg",document.body.appendChild(c),c.click(),c.remove(),et(C("\u{1F4BE} \uC0AC\uC9C4\uC744 \uC800\uC7A5\uD588\uC5B4\uC694","\u{1F4BE} Photo saved"))};return s.querySelector(".ph-save").onclick=l,s.querySelector(".ph-share").onclick=async()=>{var c;if(a&&((c=navigator.canShare)!=null&&c.call(navigator,{files:[a]})))try{await navigator.share({files:[a],title:C(`${Wn.groom.name} \u2665 ${Wn.bride.name} \uACB0\uD63C \uB9C8\uC744`,`${Wn.groom.name} \u2665 ${Wn.bride.name} wedding village`)});return}catch(h){if((h==null?void 0:h.name)==="AbortError")return}l()},()=>{o&&URL.revokeObjectURL(o)}})}finally{e==null||e(),q.posing=null,q.busy=!1}}var ki=.45;function Kv(i){if(q.mode==="museum"){Ft.clamp(i);return}for(let t of Im){let n=i.x-t.x,r=i.z-t.z,s=Math.hypot(n,r),a=t.r+ki;s<a&&s>1e-4&&(i.x=t.x+n/s*a,i.z=t.z+r/s*a)}for(let t of Dm){let n=Math.max(t.minX,Math.min(i.x,t.maxX)),r=Math.max(t.minZ,Math.min(i.z,t.maxZ)),s=i.x-n,a=i.z-r,o=Math.hypot(s,a);if(o>=ki)continue;if(o>1e-4){i.x=n+s/o*ki,i.z=r+a/o*ki;continue}let l=[[i.x-t.minX,"x",t.minX-ki],[t.maxX-i.x,"x",t.maxX+ki],[i.z-t.minZ,"z",t.minZ-ki],[t.maxZ-i.z,"z",t.maxZ+ki]].sort((c,h)=>c[0]-h[0])[0];i[l[1]]=l[2]}let e=Math.hypot(i.x,i.z);e>39&&(i.x*=39/e,i.z*=39/e)}var da=new S;function Qv(i){let e=0,t=0;if(!Zn()&&!q.busy&&((Ln.has("KeyW")||Ln.has("ArrowUp"))&&(t-=1),(Ln.has("KeyS")||Ln.has("ArrowDown"))&&(t+=1),(Ln.has("KeyA")||Ln.has("ArrowLeft"))&&(e-=1),(Ln.has("KeyD")||Ln.has("ArrowRight"))&&(e+=1),e+=Ss.x,t+=Ss.y,(e||t)&&(q.target=null,q.pending=null),q.target)){da.subVectors(q.target,q.pos),da.y=0;let a=da.length();q.targetT-=i,q.moveT+=i;let o=Math.hypot(q.vel.x,q.vel.z),l=q.pending,c;if(l){let h=Math.hypot(q.pos.x-l.pos.x,q.pos.z-l.pos.z);c=h<l.r-.2||h<l.r&&o<.6&&q.moveT>.5}else c=a<.35;if(q.stuckT=q.moveT>.5&&o<.5?q.stuckT+i:0,c||q.targetT<0||q.stuckT>.7){let h=l&&Math.hypot(q.pos.x-l.pos.x,q.pos.z-l.pos.z)<l.r;q.target=null,q.pending=null,q.stuckT=0,l&&(c||h)?ru(l):!c&&!gn&&et(C("\uADF8\uCABD\uC740 \uB9C9\uD600 \uC788\uC5B4\uC694","That way is blocked"))}else e=da.x/a,t=da.z/a}let n=Math.hypot(e,t);n>1&&(e/=n,t/=n);let r=q.mode==="museum"?5.2:6.4;q.vel.x=ui(q.vel.x,e*r,10,i),q.vel.z=ui(q.vel.z,t*r,10,i),q.pos.x+=q.vel.x*i,q.pos.z+=q.vel.z*i,Kv(q.pos);let s=Math.hypot(q.vel.x,q.vel.z);if(s>.3){let a=Math.atan2(q.vel.x,q.vel.z)-q.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),q.yaw+=a*Math.min(1,i*12)}return q.vy-=20*i,q.y=Math.max(0,q.y+q.vy*i),q.y===0&&(q.vy=0),mn.root.position.set(q.pos.x,q.y,q.pos.z),mn.root.rotation.y=q.yaw,s/r}var di=new S,pi=new S,cl=new S,hl=new S;function Gm(i,e,t=0){let n=q.pos,r=Pm();if(q.posing){let s=q.posing;i.set(s.x+s.nx*4.4,1.7,s.z+s.nz*4.4),e.set(s.x,1.25,s.z)}else if(Vn)q.mode==="museum"?(i.set(n.x,r?4.1:3.6,r?9.6:8.4),e.set(n.x,r?2.45:2.7,-3.2)):r?(i.set(n.x,14.5,n.z+14.5),e.set(n.x,.6,n.z-3.5)):(i.set(n.x,10.5,n.z+13.5),e.set(n.x,1.2,n.z-1.5));else{let s=t*.08;i.set(Math.sin(s)*26,12+Math.sin(t*.3)*1.2,4+Math.cos(s)*26),e.set(0,2,-2)}}function Ts(){Gm(di,pi,ml.elapsedTime),fn.position.copy(di),fn.lookAt(pi)}function ey(i,e){Gm(cl,hl,e);let t=q.swoopT>0?2.4:5,n=q.swoopT>0?2.8:6;q.swoopT>0&&(q.swoopT-=i),di.x=ui(di.x,cl.x,t,i),di.y=ui(di.y,cl.y,t,i),di.z=ui(di.z,cl.z,t,i),pi.x=ui(pi.x,hl.x,n,i),pi.y=ui(pi.y,hl.y,n,i),pi.z=ui(pi.z,hl.z,n,i),fn.position.copy(di),fn.lookAt(pi),fi.sky.position.copy(fn.position)}var ma=0,pl=0,ty=0;function Vm(i){ws=i,Sr=au(),dt.setPixelRatio(Sr),dt.setSize(_t.w,_t.h),i>=1&&fi.setLite(1),i>=2&&dt.shadowMap.enabled&&(dt.shadowMap.enabled=!1,jt.castShadow=!1,yt.traverse(e=>{e.material&&(e.material.needsUpdate=!0)})),i>=3&&fi.setLite(2)}function ny(i){if(!Vn||(ma+=i,pl++,ma<2.5))return;let e=ma/pl;ma=pl=0,e>1/32&&ws<3?Vm(ws+1):ws>=3&&e>1/18&&++ty===2&&et(C('\u{1F4D6} \uD734\uB300\uD3F0\uC774 \uD798\uB4E4\uC5B4\uD558\uBA74 \u2630 \uBA54\uB274\uC758 "\uAE00\uB85C \uBCF4\uAE30"\uB85C \uD3B8\uD558\uAC8C \uBCF4\uC138\uC694','\u{1F4D6} If your phone is struggling, try "Text view" next to the \u2630 menu'),4800)}function Wm(){var n;if(requestAnimationFrame(Wm),wm++,!Vn&&wm%2)return;let i=Math.min(ml.getDelta(),.05),e=ml.elapsedTime;if(eu||document.hidden||Zn()||document.body.classList.contains("reading"))return;ny(i);let t=Vn?Qv(i):0;if(mn.animate(i,t,e),q.mode==="out"){fi.update(i,e,q.pos),ht.update(i,e,q.pos),jt.position.copy(q.pos).add(Bv),jt.target.position.copy(q.pos);for(let r of ht.interactables){let s=Math.hypot(q.pos.x-r.pos.x,q.pos.z-r.pos.z);r.label.material.opacity=Math.max(.3,Math.min(1,1.6-s/22))}q.doorCooldown-=i,Vn&&q.doorCooldown<0&&!q.busy&&q.vel.z<-1&&Math.hypot(q.pos.x-Er.x,q.pos.z-Er.z)<1.1&&gl(),gn&&Vn&&!q.busy&&!q.target&&(gn.waitT-=i,gn.waitT<=0&&Yv())}else{Ft.update(i,e,q.pos);let r=Ft.currentTheme(q.pos);r!==Sm&&(Sm=r,document.querySelectorAll("#museum-bar .chip[data-ti]").forEach(s=>s.classList.toggle("on",+s.dataset.ti===r)),(n=document.querySelector("#museum-bar .chip.on"))==null||n.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}))}if(gm(i),pa>0){pa-=i*1.3;let r=1-Math.max(0,pa);br.scale.setScalar(1+r*.9),br.material.opacity=Math.max(0,pa)}pn=Vn&&!q.posing?qv():null,$v(),ey(i,e),dt.render(yt,fn)}var gi=window.WEDDING,Xm=i=>document.querySelector(i),va=[],hu=null,jm=()=>document.body.classList.contains("reading"),ry=[["invitation",C("\u{1F48C} \uCCAD\uCCA9\uC7A5","\u{1F48C} Invitation")],["directions",C("\u{1F5FA}\uFE0F \uC624\uC2DC\uB294 \uAE38","\u{1F5FA}\uFE0F Directions")],["schedule",C("\u{1F570}\uFE0F \uC2DD\uC21C","\u{1F570}\uFE0F Schedule")],["album",C("\u{1F5BC}\uFE0F \uC568\uBC94","\u{1F5BC}\uFE0F Album")],["mailbox",C("\u2709\uFE0F \uD3B8\uC9C0","\u2709\uFE0F Letters")],["accounts",C("\u{1F381} \uB9C8\uC74C","\u{1F381} Gifts")],["quiz",C("\u2753 \uD034\uC988","\u2753 Quiz")],["couple",C("\u{1F4DE} \uC5F0\uB77D","\u{1F4DE} Contact")]];function Vi(i,e,t,n,r=""){return`
    <section class="tv-sec" data-sec="${i}" aria-labelledby="tv-h-${i}">
      <h2 class="tv-h" id="tv-h-${i}"><span aria-hidden="true">${e}</span>${t}</h2>
      ${r?`<p class="muted tv-sub">${r}</p>`:""}
      <div class="tv-body" data-mount="${i}">${n.html}</div>
    </section>`}function qm({canPlay:i=!1,onPlay:e,onClose:t,onSent:n,section:r}={}){var u;if(jm()){r&&cu(r);return}let s=Xm("#textview"),a=Pr(),{date:o,time:l}=$t(),c={invitation:Vl({hero:!1}),directions:Xl(),schedule:ql(),album:Jl(a),mailbox:Zl(n,{onBack:en}),accounts:jl(),quiz:$l(),couple:Yl({greeting:!1})},h=i?`<button class="btn-primary tv-play">${C("\u{1F3E1} 3D \uB9C8\uC744\uC5D0\uC11C \uAD6C\uACBD\uD558\uAE30","\u{1F3E1} Explore the 3D village")}</button>`:"";if(s.innerHTML=`
    <div class="tv-top">
      <button class="tv-back" ${i?"":"hidden"} aria-label="${C("3D \uB9C8\uC744\uB85C \uB3CC\uC544\uAC00\uAE30","Back to the 3D village")}">${C("\u{1F3E1} \uB9C8\uC744\uB85C","\u{1F3E1} Village")}</button>
      <div class="tv-chips" role="navigation" aria-label="${C("\uAE00\uB85C \uBCF4\uAE30 \uCC28\uB840","Text view sections")}">
        ${ry.map(([d,p])=>`<button class="chip" data-go="${d}">${p}</button>`).join("")}
      </div>
      <button class="fs-toggle tv-fs" aria-label="${Ua()?C("\uAE00\uC790 \uC791\uAC8C","Smaller text"):C("\uAE00\uC790 \uD06C\uAC8C","Larger text")}">${Ua()?C("\uAC00-","A-"):C("\uAC00+","A+")}</button>
    </div>
    <div class="tv-inner">
      <header class="tv-hero">
        <div class="en">WEDDING INVITATION</div>
        <div class="tv-names">${pe(gi.groom.name)} <span class="heart">\u2665</span> ${pe(gi.bride.name)}</div>
        <div class="muted">${C(`${o} ${l}<br>${pe(gi.venue.name)} ${pe(gi.venue.hall)}`,`${o} \xB7 ${l}<br>${pe(gi.venue.name)}, ${pe(gi.venue.hall)}`)}</div>
        <div class="intro-dday">${Zi()==="today"?C("\uC624\uB298\uC774\uC5D0\uC694 \u{1F389}","It's today \u{1F389}"):xi()}</div>
        ${h}
        <p class="muted tv-hint">${i?C("\uAC8C\uC784\uC774 \uC5B4\uB824\uC6B0\uC2DC\uBA74 \uADF8\uB300\uB85C \uC544\uB798\uB85C \uB0B4\uB824\uC11C \uC77D\uC5B4 \uC8FC\uC138\uC694","If the game is hard to use, just scroll down to read"):C("\uC544\uB798\uB85C \uB0B4\uB9AC\uBA74\uC11C \uCC9C\uCC9C\uD788 \uC77D\uC5B4 \uC8FC\uC138\uC694","Scroll down and take your time reading")}</p>
      </header>
      ${Vi("invitation","\u{1F48C}",C("\uCCAD\uCCA9\uC7A5","Invitation"),c.invitation)}
      ${Vi("directions","\u{1F5FA}\uFE0F",C("\uC624\uC2DC\uB294 \uAE38","Directions"),c.directions)}
      ${Vi("schedule","\u{1F570}\uFE0F",C("\uC624\uB298\uC758 \uC2DD\uC21C","Today's schedule"),c.schedule)}
      ${Vi("album","\u{1F5BC}\uFE0F",((u=gi.museum)==null?void 0:u.title)||C("\uCD94\uC5B5 \uC0AC\uC9C4\uAD00","Photo gallery"),c.album,C("\uC0AC\uC9C4\uC744 \uB204\uB974\uBA74 \uD06C\uAC8C \uBCFC \uC218 \uC788\uC5B4\uC694","Tap a photo to see it larger"))}
      ${Vi("mailbox","\u2709\uFE0F",C("\uCD95\uD558 \uD3B8\uC9C0\uD568","Mailbox"),c.mailbox)}
      ${Vi("accounts","\u{1F381}",C("\uB9C8\uC74C \uC804\uD558\uC2E4 \uACF3","Gift accounts"),c.accounts)}
      ${Vi("quiz","\u2753",C("\uC2E0\uB791\uC2E0\uBD80 \uD034\uC988","Couple quiz"),c.quiz,C("\uAE30\uB2E4\uB9AC\uC2DC\uB294 \uB3D9\uC548 \uAC00\uBCCD\uAC8C \uD480\uC5B4 \uBCF4\uC138\uC694","Something fun while you wait"))}
      ${Vi("couple","\u{1F4DE}",C("\uC2E0\uB791 \xB7 \uC2E0\uBD80\uC5D0\uAC8C \uC5F0\uB77D","Contact the couple"),c.couple)}
      <footer class="tv-foot">
        <div class="btns" style="justify-content:center">
          <button class="btn tv-share">${C("\u{1F517} \uCCAD\uCCA9\uC7A5 \uACF5\uC720\uD558\uAE30","\u{1F517} Share the invitation")}</button>
          ${i?`<button class="btn pink tv-play">${C("\u{1F3E1} \uB9C8\uC744\uB85C \uB4E4\uC5B4\uAC00\uAE30","\u{1F3E1} Enter the village")}</button>`:""}
        </div>
        <p style="margin-top:18px">${pe(gi.groom.name)} \u2665 ${pe(gi.bride.name)} \xB7 ${C("\uC791\uC740 \uACB0\uD63C \uB9C8\uC744","A little wedding village")}</p>
      </footer>
    </div>`,va=[],Object.entries(c).forEach(([d,p])=>{var m;let f=s.querySelector(`[data-mount="${d}"]`),v=(m=p.mount)==null?void 0:m.call(p,f);typeof v=="function"&&va.push(v)}),s.querySelectorAll("[data-go]").forEach(d=>d.onclick=()=>cu(d.dataset.go)),s.querySelectorAll(".tv-back, .tv-play").forEach(d=>d.onclick=()=>{e==null||e(),sy()}),s.querySelectorAll(".tv-share").forEach(d=>d.onclick=Wl),"IntersectionObserver"in window){let d=[...s.querySelectorAll("[data-go]")],p=new IntersectionObserver(f=>f.forEach(v=>{var m;v.isIntersecting&&(d.forEach(y=>y.classList.toggle("on",y.dataset.go===v.target.dataset.sec)),(m=d.find(y=>y.classList.contains("on")))==null||m.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"}))}),{root:s,rootMargin:"-35% 0px -55% 0px"});s.querySelectorAll(".tv-sec").forEach(f=>p.observe(f)),va.push(()=>p.disconnect())}hu={onClose:t},document.body.classList.add("reading"),s.scrollTop=0,nr(uu),r&&setTimeout(()=>cu(r,!1),60)}function cu(i,e=!0){var t;(t=Xm("#textview").querySelector(`[data-sec="${i}"]`))==null||t.scrollIntoView({behavior:e?"smooth":"auto",block:"start"})}function uu(){var e;document.body.classList.remove("reading"),va.forEach(t=>t()),va=[];let i=hu;hu=null,(e=i==null?void 0:i.onClose)==null||e.call(i)}function sy(){jm()&&(uu(),Or(uu))}var Ut=window.WEDDING,We=i=>document.querySelector(i),ay=C([[10,"\uB9C8\uC744\uC744 \uC9D3\uB294 \uC911\u2026 \u{1F3E1}"],[35,"\uAF43\uC744 \uC2EC\uB294 \uC911\u2026 \u{1F337}"],[65,"\uC758\uC790\uB97C \uB193\uB294 \uC911\u2026 \u{1FA91}"],[85,"\uC0AC\uC9C4\uC744 \uAC70\uB294 \uC911\u2026 \u{1F5BC}\uFE0F"]],[[10,"Building the village\u2026 \u{1F3E1}"],[35,"Planting flowers\u2026 \u{1F337}"],[65,"Setting out chairs\u2026 \u{1FA91}"],[85,"Hanging photos\u2026 \u{1F5BC}\uFE0F"]]),du=i=>{We("#loadbar").style.width=i+"%";let e=We("#btn-enter");if(e.disabled){let t=ay.filter(([n])=>i>=n).pop();t&&(e.textContent=t[1])}};["gesturestart","gesturechange"].forEach(i=>document.addEventListener(i,e=>e.preventDefault()));if(window.visualViewport){let i=window.visualViewport,e=()=>document.documentElement.style.setProperty("--kb",`${Math.max(0,Math.round(innerHeight-i.height-i.offsetTop))}px`);i.addEventListener("resize",e),i.addEventListener("scroll",e)}var{date:$m,time:Ym}=$t(),pu=`${Ut.groom.name} \u2665 ${Ut.bride.name}`;We("#i-groom").textContent=Ut.groom.name;We("#i-bride").textContent=Ut.bride.name;We("#i-date").innerHTML=C(`${$m} ${Ym}<br>${Ut.venue.name} ${Ut.venue.hall}`,`${$m} \xB7 ${Ym}<br>${Ut.venue.name}, ${Ut.venue.hall}`);We("#i-dday").textContent=xi();We("#h-names").textContent=pu;We("#h-dday").textContent=xi();document.title=C(`${pu} \uACB0\uD63C\uD569\uB2C8\uB2E4`,`${pu} are getting married`);var Jm;(Jm=We("#btn-lang"))==null||Jm.addEventListener("click",()=>wl(Dn?"en":"ko"));var mu=Zi();if(mu==="today"){We("#i-dday").textContent=C("\uC624\uB298\uC774\uC5D0\uC694 \u{1F389}","It's today \u{1F389}"),We("#h-dday").textContent=C("\uC624\uB298 \u{1F389}","Today \u{1F389}");let i=We("#today");i.hidden=!1;let e=()=>{var n,r,s,a,o,l,c,h;let t=wa();i.querySelector(".t-now").textContent=t.done?C("\u{1F64F} \uC624\uB298 \uC608\uC2DD\uC774 \uBAA8\uB450 \uB05D\uB0AC\uC5B4\uC694. \uAC10\uC0AC\uD569\uB2C8\uB2E4","\u{1F64F} Today's ceremony is over. Thank you"):t.item?C(`\u{1F570}\uFE0F \uC9C0\uAE08: ${t.item.time} ${t.item.title}`,`\u{1F570}\uFE0F Now: ${t.item.time} ${t.item.title}`):C(`\u{1F570}\uFE0F \uACE7 \uC2DC\uC791\uD574\uC694 \xB7 \uCCAB \uC21C\uC11C ${((r=(n=Ut.schedule)==null?void 0:n[0])==null?void 0:r.time)||""} ${((a=(s=Ut.schedule)==null?void 0:s[0])==null?void 0:a.title)||""}`,`\u{1F570}\uFE0F Starting soon \xB7 First: ${((l=(o=Ut.schedule)==null?void 0:o[0])==null?void 0:l.time)||""} ${((h=(c=Ut.schedule)==null?void 0:c[0])==null?void 0:h.title)||""}`)};e(),setInterval(e,6e4),i.querySelector(".t-dir").onclick=zr,i.querySelector(".t-acc").onclick=Bs}else mu==="after"&&(We("#i-dday").textContent=`${xi()} \u{1F495}`);Wu()&&(We("#demo-badge").hidden=!1);Ds();var Ye=null,Qm=["#8FB8DE","#F4B8C0","#F7D58B","#A8D08D","#C9B3E6","#F9C59E","#E88A98","#7FC8C2"],ef=["#5A3A2A","#3A2A24","#7A5238","#1E1A22","#C98A5B"],tf="wedding-character",Zm=i=>i[Math.floor(Math.random()*i.length)],fu=()=>({outfit:Zm(Qm),hair:Zm(ef),longHair:Math.random()<.5}),sn=null;try{sn=JSON.parse(localStorage.getItem(tf)||"null")}catch{}(!sn||!Qm.includes(sn.outfit)||!ef.includes(sn.hair))&&(sn=fu());var nf=()=>{try{localStorage.setItem(tf,JSON.stringify(sn))}catch{}};function rf(i){let e=We("#avatar");e.style.setProperty("--outfit",sn.outfit),e.style.setProperty("--hair",sn.hair),e.classList.toggle("long",!!sn.longHair),i&&(e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop"))}function sf(){let i=fu();i.outfit===sn.outfit&&(i=fu()),sn=i,nf(),rf(!0),Ye==null||Ye.setCharacter(sn),wt(12),lt.sfx("pop"),document.body.classList.contains("playing")&&et(C("\u{1F3B2} \uC0C8 \uCE90\uB9AD\uD130\uB85C \uBC14\uB00C\uC5C8\uC5B4\uC694","\u{1F3B2} You have a new character"))}nf();rf(!1);We("#btn-reroll").onclick=sf;du(10);ld();var af="wedding-visited",Tr=new Set;try{Tr=new Set(JSON.parse(localStorage.getItem(af)||"[]"))}catch{}function of(){document.querySelectorAll("#visits li").forEach(n=>n.classList.toggle("done",Tr.has(n.dataset.id)));let i=Tr.size,e=document.querySelectorAll("#visits li").length,t=We("#visit-count");t&&(t.textContent=i?`${i}/${e}`:"")}addEventListener("wv:visit",i=>{if(!Tr.has(i.detail)){Tr.add(i.detail);try{localStorage.setItem(af,JSON.stringify([...Tr]))}catch{}of(),Tr.size===document.querySelectorAll("#visits li").length&&setTimeout(()=>{et(C("\u{1F3C5} \uB9C8\uC744\uC758 \uBAA8\uB4E0 \uACF3\uC744 \uB458\uB7EC\uBD24\uC5B4\uC694!","\u{1F3C5} You've visited every spot in the village"),3600),Br()},800)}});of();var Km;(Km=We("#btn-wide"))==null||Km.addEventListener("click",()=>{let i=document.body.classList.toggle("wide");We("#btn-wide").textContent=i?C("\u{1F4F1} \uD734\uB300\uD3F0 \uBCF4\uAE30","\u{1F4F1} Phone view"):C("\u{1F5A5} \uB113\uAC8C \uBCF4\uAE30","\u{1F5A5} Wide view"),Ye==null||Ye.resize()});function oy(){var i;try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");return t?((i=t.getExtension("WEBGL_lose_context"))==null||i.loseContext(),!0):!1}catch{return!1}}async function ly(){var d;let i=setTimeout(()=>{let p=We("#btn-enter");p.disabled&&(p.disabled=!1,p.textContent=C("\u{1F4D6} \uCCAD\uCCA9\uC7A5 \uAE00\uB85C \uBCF4\uAE30","\u{1F4D6} Read the invitation"),p.onclick=()=>a(),We("#intro-help").textContent=C("\uB9C8\uC744\uC774 \uB2A6\uAC8C \uC5F4\uB9AC\uACE0 \uC788\uC5B4\uC694. \uBA3C\uC800 \uAE00\uB85C \uBCF4\uAE30\uB85C \uC77D\uC5B4 \uC8FC\uC138\uC694","The village is slow to load. Read the text view for now"))},9e3);if(oy())try{Ye=await Um({character:sn,onProgress:du})}catch(p){console.error("Could not load the 3D village; switching to the text view",p),Ye=null,We("#app").innerHTML=""}clearTimeout(i),Ye||document.body.classList.add("no3d"),du(100);let e=!1,t=We("#bgm"),n=We("#btn-sound"),r=()=>{n.textContent=(Ut.bgm?!t.paused:lt.enabled)?"\u{1F50A}":"\u{1F507}"};function s(){e||!Ye||(e=!0,document.body.classList.add("playing"),We("#intro").classList.add("hide"),Ut.bgm&&t.play().then(r).catch(()=>{}),Ye.start({hint:!0}),r(),!Ut.bgm&&!lt.saved()&&setTimeout(()=>et(C("\u{1F50A} \uC624\uB978\uCABD \uC704 \uBC84\uD2BC\uC73C\uB85C \uC624\uB974\uACE8 \uC18C\uB9AC\uB97C \uCF24 \uC218 \uC788\uC5B4\uC694","\u{1F50A} Tap the top-right button to turn on the music box"),3400),9500))}function a(p){We("#intro").classList.add("hide"),qm({canPlay:!!Ye,onPlay:s,onSent:Ye==null?void 0:Ye.letterSent,onClose:()=>{e||We("#intro").classList.remove("hide")},section:p})}let o=Ye?Ye.themes:Pr(),l=[{emoji:"\u{1F48C}",label:C("\uCCAD\uCCA9\uC7A5","Invitation"),go:Pa},{emoji:"\u{1F5FA}\uFE0F",label:C("\uC624\uC2DC\uB294 \uAE38","Directions"),go:zr},{emoji:"\u2709\uFE0F",label:C("\uCD95\uD558 \uD3B8\uC9C0","Letters"),go:()=>zs(Ye==null?void 0:Ye.letterSent)},Ye?{emoji:"\u{1F5BC}\uFE0F",label:C("\uCD94\uC5B5 \uC0AC\uC9C4\uAD00","Photo gallery"),go:()=>{en(),Ye.enterMuseum()}}:{emoji:"\u{1F4DA}",label:C("\uC804\uCCB4 \uC568\uBC94","Full album"),go:()=>Hr(o)},{emoji:"\u{1F381}",label:C("\uB9C8\uC74C \uC804\uD558\uC2E4 \uACF3","Gift accounts"),go:Bs},{emoji:"\u{1F570}\uFE0F",label:C("\uC624\uB298\uC758 \uC2DD\uC21C","Today's schedule"),go:Ia},{emoji:"\u2753",label:C("\uC2E0\uB791\uC2E0\uBD80 \uD034\uC988","Couple quiz"),go:Da},{emoji:"\u{1F490}",label:C("\uC2E0\uB791\xB7\uC2E0\uBD80 \uC778\uC0AC","Meet the couple"),go:Fa},...Ye?[{emoji:"\u{1F6B6}",label:C("\uC790\uB3D9 \uD22C\uC5B4","Auto tour"),go:()=>{en(),Ye.startTour()}},{emoji:"\u{1F319}",label:C("\uB0AE \xB7 \uBC24 \uBC14\uAFB8\uAE30","Day \xB7 night"),go:()=>{en(),Ye.cycleTime()}},{emoji:"\u{1F3B2}",label:C("\uCE90\uB9AD\uD130 \uBC14\uAFB8\uAE30","New character"),go:()=>{en(),sf()}}]:[],{emoji:"\u{1F310}",label:C("English","\uD55C\uAD6D\uC5B4"),go:c}];if(mu==="today"){let p=[C("\uC624\uB298\uC758 \uC2DD\uC21C","Today's schedule"),C("\uC624\uC2DC\uB294 \uAE38","Directions"),C("\uB9C8\uC74C \uC804\uD558\uC2E4 \uACF3","Gift accounts")];l.sort((f,v)=>(p.indexOf(f.label)+1||99)-(p.indexOf(v.label)+1||99))}function c(){let p=!1,f=()=>{p||(p=!0,wl(Dn?"en":"ko"))};addEventListener("popstate",f,{once:!0}),en(),setTimeout(f,500)}let h=()=>sd(l);We("#btn-menu").onclick=h,We("#btn-text-hud").onclick=()=>a(),(d=We("#btn-desk-text"))==null||d.addEventListener("click",()=>a()),Ut.bgm?(t.src=Ut.bgm,n.hidden=!1,n.onclick=()=>{t.paused?t.play().then(r).catch(()=>{}):(t.pause(),r())}):Ye&&(n.hidden=!1,r(),n.onclick=()=>{let p=lt.setEnabled(!lt.enabled);r(),et(p?C("\u{1F50A} \uC624\uB974\uACE8 \uBC30\uACBD\uC74C\uC744 \uCF30\uC5B4\uC694","\u{1F50A} Music box on"):C("\u{1F507} \uC18C\uB9AC\uB97C \uAED0\uC5B4\uC694","\u{1F507} Sound off"))});let u=We("#btn-enter");u.disabled=!1,u.textContent=Ye?C("\uB9C8\uC744\uC5D0 \uC785\uC7A5\uD558\uAE30 \u{1F490}","Enter the village \u{1F490}"):C("\u{1F4D6} \uCCAD\uCCA9\uC7A5 \uAE00\uB85C \uBCF4\uAE30","\u{1F4D6} Read the invitation"),u.onclick=()=>Ye?s():a(),We("#btn-text").onclick=()=>a(),We("#btn-tour-start").onclick=()=>{if(!Ye){a();return}s(),setTimeout(()=>Ye.startTour(),1400)}}ly();})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */

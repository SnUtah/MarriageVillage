(()=>{function Nm(i){let e=1779033703^i.length;for(let n=0;n<i.length;n++)e=Math.imul(e^i.charCodeAt(n),3432918353),e=e<<13|e>>>19;let t=e>>>0;return()=>{t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}var Om='"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "Android Emoji", sans-serif',hu=[["#9CD3F2","#E6F5FF"],["#FFB88C","#FFE7C9"],["#F7C4D0","#FFF3F6"],["#2B2D5C","#6D5C9E"],["#C7E8F7","#FFECD8"]],ll=["#8FB8DE","#F4B8C0","#F7D58B","#A8D08D","#C9B3E6","#F9C59E","#E88A98","#7FC8C2"],cl=["#5A3A2A","#3A2A24","#7A5238","#1E1A22","#C98A5B"],Bm={wedding:[{kind:"park",sky:0,who:"wedding",props:["\u{1F338}","\u{1F490}"]},{kind:"room",sky:2,who:"bride",props:["\u{1F490}","\u2728"]},{kind:"park",sky:4,who:"wedding",props:["\u{1F49E}"]},{kind:"park",sky:2,who:"wedding",props:["\u{1F338}","\u{1F338}","\u{1F338}"]},{kind:"room",sky:2,who:"bride",props:["\u{1F457}","\u2728"]},{kind:"room",sky:0,who:"groom",props:["\u{1F3A9}","\u{1F942}"]},{kind:"park",sky:0,who:"wedding",props:["\u{1F497}"]},{kind:"hills",sky:1,who:"wedding",props:["\u{1F33B}"]},{kind:"room",sky:2,who:"wedding",props:["\u{1F48D}","\u2728"]},{kind:"park",sky:0,who:"wedding",props:["\u{1F337}","\u{1F337}"]},{kind:"room",sky:2,who:"bride",props:["\u{1F54A}\uFE0F"]},{kind:"park",sky:4,who:"wedding",props:["\u{1F388}","\u{1F388}"]},{kind:"park",sky:1,who:"wedding",props:["\u{1F389}","\u{1F38A}"]},{kind:"hills",sky:1,who:"wedding",props:["\u{1F492}","\u{1F338}"]}],childhood:[{kind:"room",sky:4,who:"baby",props:["\u{1F382}","\u{1F388}"]},{kind:"park",sky:0,who:"kid",props:["\u{1F68C}","\u{1F33B}"]},{kind:"park",sky:0,who:"kid-balloon",props:["\u{1F333}"]},{kind:"room",sky:4,who:"kid",props:["\u{1F601}","\u{1F9B7}"]},{kind:"park",sky:0,who:"kid",props:["\u{1F6B2}"]},{kind:"sea",sky:0,who:"kid",props:["\u{1F3D6}\uFE0F","\u{1FAA3}"]},{kind:"room",sky:1,who:"kidparent",props:["\u{1F9F6}","\u{1F4FA}"]},{kind:"city",sky:4,who:"kidparent",props:["\u{1F3EB}","\u{1F392}"]},{kind:"sea",sky:0,who:"kid",props:["\u{1F3CA}","\u2600\uFE0F"]},{kind:"snow",sky:4,who:"kid",props:["\u26C4","\u2744\uFE0F"]}],dating:[{kind:"cafe",sky:4,who:"couple",props:["\u2615","\u{1F370}"]},{kind:"city",sky:3,who:"couple",props:["\u{1F3AC}","\u{1F37F}"]},{kind:"park",sky:0,who:"couple",props:["\u{1F6B2}","\u{1F309}"]},{kind:"snow",sky:4,who:"couple",props:["\u2744\uFE0F","\u2603\uFE0F"]},{kind:"city",sky:3,who:"couple",props:["\u{1F3EE}","\u{1F362}"]},{kind:"park",sky:2,who:"couple",props:["\u{1F338}","\u{1F338}"]},{kind:"room",sky:3,who:"couple",props:["\u{1F382}","\u{1F56F}\uFE0F"]},{kind:"park",sky:1,who:"couple",props:["\u{1F3A1}"]},{kind:"city",sky:3,who:"couple",props:["\u{1F319}","\u2B50"]},{kind:"room",sky:1,who:"couple",props:["\u{1F35D}","\u{1F957}"]},{kind:"room",sky:3,who:"couple",props:["\u{1F384}","\u{1F381}"]},{kind:"park",sky:3,who:"propose",props:["\u2728","\u{1F386}"]}],travel:[{kind:"sea",sky:0,who:"couple",props:["\u{1F334}","\u{1F34A}"]},{kind:"city",sky:3,who:"couple",props:["\u{1F5FC}","\u{1F35C}"]},{kind:"city",sky:1,who:"couple",props:["\u{1F5FC}","\u{1F950}"]},{kind:"mountain",sky:0,who:"couple",props:["\u{1F3D4}\uFE0F","\u{1F6A1}"]},{kind:"city",sky:3,who:"couple",props:["\u{1F3EE}","\u{1F364}"]},{kind:"sea",sky:1,who:"couple",props:["\u{1F3C4}","\u{1F30A}"]},{kind:"hills",sky:0,who:"couple",props:["\u{1F682}","\u{1F9F3}"]},{kind:"hills",sky:4,who:"couple",props:["\u2708\uFE0F","\u{1F5FA}\uFE0F"]}],family:[{kind:"room",sky:4,who:"family",n:4,props:["\u{1F3E1}"]},{kind:"park",sky:0,who:"family",n:4,props:["\u{1F333}"]},{kind:"room",sky:1,who:"family",n:6,props:["\u{1F37D}\uFE0F","\u{1F942}"]},{kind:"park",sky:2,who:"family",n:3,props:["\u{1F337}"]},{kind:"park",sky:0,who:"couple",props:["\u{1F436}","\u{1F9B4}"]},{kind:"park",sky:4,who:"family",n:7,props:["\u{1F4F8}","\u{1F389}"]}]},uu=["park","hills","room","sea","city"],du=["couple","wedding","kid","family"];function kn(i,e,t,n,r,s){s=Math.min(s,n/2,r/2),i.beginPath(),i.moveTo(e+s,t),i.arcTo(e+n,t,e+n,t+r,s),i.arcTo(e+n,t+r,e,t+r,s),i.arcTo(e,t+r,e,t,s),i.arcTo(e,t,e+n,t,s),i.closePath()}function at(i,e,t,n,r){i.fillStyle=r,i.beginPath(),i.arc(e,t,n,0,Math.PI*2),i.fill()}function Gn(i,e,t,n,r,s=1){i.save(),i.globalAlpha=s,i.font=`${r}px ${Om}`,i.textAlign="center",i.textBaseline="middle",i.fillText(e,t,n),i.restore()}function zm(i,e,t,n,r,s){let[a,o]=hu[r]||hu[0],l=r===3,c=n==="room"||n==="cafe",h=t*(n==="sea"?.56:.62);if(c){let f=i.createLinearGradient(0,0,0,t);f.addColorStop(0,n==="cafe"?"#E7C6A4":l?"#4B3F57":"#FFF4E8"),f.addColorStop(1,n==="cafe"?"#C99B74":l?"#3A3046":"#FBE3D2"),i.fillStyle=f,i.fillRect(0,0,e,t);let v=e*.56,m=t*.12,_=e*.32,g=t*.32;i.fillStyle="#FFFFFF",kn(i,v-8,m-8,_+16,g+16,10),i.fill();let y=i.createLinearGradient(0,m,0,m+g);if(y.addColorStop(0,a),y.addColorStop(1,o),i.fillStyle=y,i.fillRect(v,m,_,g),i.fillStyle="#FFFFFF",i.fillRect(v+_/2-3,m,6,g),i.fillRect(v,m+g/2-3,_,6),l)for(let A=0;A<12;A++)at(i,v+s()*_,m+s()*g*.7,1.5+s()*1.5,"#FFF8C9");else at(i,v+_*.72,m+g*.3,_*.1,"#FFE28A");i.fillStyle=n==="cafe"?"rgba(255,255,255,.35)":"rgba(244,184,192,.8)",kn(i,v-22,m-14,26,g+28,12),i.fill(),kn(i,v+_-4,m-14,26,g+28,12),i.fill();let E=t*.72;i.fillStyle=n==="cafe"?"#8F6B4E":"#E6C39A",i.fillRect(0,E,e,t-E),i.fillStyle="rgba(120,80,50,.15)";for(let A=0;A<7;A++)i.fillRect(0,E+A*((t-E)/7),e,2);if(n==="cafe"){for(let A=0;A<9;A++)at(i,e*.08+A*e*.105,t*.07+Math.sin(A*1.3)*10,5,"#FFF1B8");i.fillStyle="rgba(255,255,255,.5)",kn(i,e*.06,t*.22,e*.36,8,4),i.fill(),Gn(i,"\u{1FAB4}",e*.12,t*.2,e*.08),Gn(i,"\u{1F4DA}",e*.32,t*.2,e*.07),i.fillStyle="#B98A66",i.beginPath(),i.ellipse(e*.5,t*.86,e*.3,t*.06,0,0,Math.PI*2),i.fill()}else i.fillStyle="rgba(255,255,255,.7)",kn(i,e*.1,t*.16,e*.2,t*.17,8),i.fill(),Gn(i,l?"\u{1F319}":"\u{1F5BC}\uFE0F",e*.2,t*.25,e*.08),Gn(i,"\u{1FAB4}",e*.1,t*.7,e*.11);return{horizon:t*.74,indoor:!0}}let d=i.createLinearGradient(0,0,0,h);if(d.addColorStop(0,a),d.addColorStop(1,o),i.fillStyle=d,i.fillRect(0,0,e,h+2),l){for(let f=0;f<40;f++)at(i,s()*e,s()*h*.85,.8+s()*1.6,"rgba(255,248,210,.9)");at(i,e*.78,t*.14,e*.07,"#FFF3C4")}else{let f=e*(.15+s()*.7),v=t*(.1+s()*.12),m=i.createRadialGradient(f,v,0,f,v,e*.28);m.addColorStop(0,"rgba(255,245,200,.9)"),m.addColorStop(1,"rgba(255,245,200,0)"),i.fillStyle=m,i.fillRect(0,0,e,h),at(i,f,v,e*.06,r===1?"#FFD27A":"#FFF0A8");for(let _=0;_<3;_++){let g=s()*e,y=t*(.08+s()*.25),E=e*(.05+s()*.04);i.fillStyle="rgba(255,255,255,.85)";for(let A=0;A<4;A++)i.beginPath(),i.arc(g+A*E*.9-E*1.3,y+A%2*E*.3,E*(.7+A%3*.2),0,7),i.fill()}}if(n==="sea"){let f=i.createLinearGradient(0,h,0,t*.8);f.addColorStop(0,l?"#2F4F7A":"#5FB8E6"),f.addColorStop(1,l?"#243F63":"#8AD3F2"),i.fillStyle=f,i.fillRect(0,h,e,t*.8-h),i.strokeStyle="rgba(255,255,255,.55)",i.lineWidth=3,i.lineCap="round";for(let v=0;v<7;v++){let m=h+14+v*22+s()*8,_=s()*e;i.beginPath(),i.moveTo(_,m),i.lineTo(_+30+s()*50,m),i.stroke()}return i.fillStyle="#F6E3B8",i.beginPath(),i.moveTo(0,t*.8),i.quadraticCurveTo(e*.5,t*.74,e,t*.82),i.lineTo(e,t),i.lineTo(0,t),i.fill(),{horizon:t*.86}}if(n==="mountain")for(let f=0;f<4;f++){let v=e*(f*.33-.1)+s()*30,m=e*.45,_=t*(.28+s()*.1);i.fillStyle=f%2?"#8FA7C7":"#A9BFDC",i.beginPath(),i.moveTo(v-m/2,h),i.lineTo(v,h-_),i.lineTo(v+m/2,h),i.fill(),i.fillStyle="#FFFFFF",i.beginPath(),i.moveTo(v-m*.14,h-_*.68),i.lineTo(v,h-_),i.lineTo(v+m*.14,h-_*.68),i.lineTo(v+m*.05,h-_*.62),i.lineTo(v-m*.06,h-_*.64),i.fill()}if(n==="city"){for(let f=-10;f<e;f+=0){let v=40+s()*70,m=t*(.12+s()*.3);i.fillStyle=l?["#3B3550","#2E2A42","#46405D"][Math.floor(s()*3)]:["#D9D0E6","#CFC6DD","#E4DCEF"][Math.floor(s()*3)],i.fillRect(f,h-m,v,m+4),i.fillStyle=l?"#FFE9A8":"rgba(255,255,255,.7)";for(let _=h-m+10;_<h-12;_+=16)for(let g=f+7;g<f+v-10;g+=14)s()>.35&&i.fillRect(g,_,7,9);f+=v+6}i.fillStyle=l?"#4A4458":"#CFC3B6",i.fillRect(0,h,e,t-h),i.fillStyle="rgba(255,255,255,.5)";for(let f=10;f<e;f+=60)i.fillRect(f,h+(t-h)*.5,30,4);return{horizon:t*.86}}let u=n==="snow",p=u?["#F4F7FB","#EAF0F7","#FFFFFF"]:l?["#3F6B4A","#355C40","#4A7A55"]:["#9ED08A","#86C174","#B2DB9C"];i.fillStyle=p[0],i.fillRect(0,h,e,t-h);for(let f=0;f<3;f++)i.fillStyle=p[(f+1)%3],i.beginPath(),i.ellipse(e*(.2+f*.35)+s()*40,h+10+f*6,e*(.45+s()*.2),t*(.08+s()*.05),0,Math.PI,Math.PI*2),i.fill();for(let f=0;f<4;f++){let v=s()<.5?e*(.04+s()*.2):e*(.76+s()*.2),m=h+4+s()*10,_=e*(.05+s()*.03);i.fillStyle="#A47A5C",i.fillRect(v-_*.12,m-_*1.4,_*.24,_*1.4);let g=u?["#FFFFFF","#EEF3F8"]:n==="park"&&r===2?["#F9C9D2","#FCDCE3"]:["#7DB86C","#9ED08A"];at(i,v,m-_*1.6,_*.75,g[0]),at(i,v-_*.5,m-_*1.25,_*.55,g[1]),at(i,v+_*.5,m-_*1.25,_*.55,g[1])}if(u)for(let f=0;f<60;f++)at(i,s()*e,s()*t,1.5+s()*2.5,"rgba(255,255,255,.9)");else if(!l)for(let f=0;f<18;f++)at(i,s()*e,h+16+s()*(t-h-30),3+s()*3,["#FFFFFF","#F4B8C0","#F7D58B","#FFB7A5"][f%4]);return{horizon:t*.88}}function Zt(i,e,t,n,r={}){let s="#FFE0C7",a=r.hair||cl[0],o=r.suit?"#2F2B33":r.dress?"#FFFFFF":r.outfit||ll[0],l=t-2.95*n;if(i.lineCap="round",i.fillStyle="rgba(0,0,0,.12)",i.beginPath(),i.ellipse(e,t+n*.1,n*1.1,n*.22,0,0,Math.PI*2),i.fill(),r.veil&&(i.fillStyle="rgba(255,255,255,.7)",i.beginPath(),i.ellipse(e,l+n*.9,n*1.25,n*1.9,0,0,Math.PI*2),i.fill()),(r.long||r.dress)&&(i.fillStyle=a,kn(i,e-n*1.02,l-n*.4,n*2.04,n*1.9,n*.5),i.fill()),!r.dress){i.strokeStyle=r.suit?"#2F2B33":"#6B5B53",i.lineWidth=n*.36;for(let h of[-1,1])i.beginPath(),i.moveTo(e+h*n*.28,t-n*1),i.lineTo(e+h*n*.28,t-n*.15),i.stroke();i.fillStyle="#4A3B38";for(let h of[-1,1])i.beginPath(),i.ellipse(e+h*n*.3,t-n*.05,n*.26,n*.14,0,0,Math.PI*2),i.fill()}r.dress&&(i.fillStyle="#FFFFFF",i.beginPath(),i.moveTo(e-n*.5,t-n*1.5),i.lineTo(e+n*.5,t-n*1.5),i.quadraticCurveTo(e+n*1.3,t-n*.4,e+n*1.25,t),i.lineTo(e-n*1.25,t),i.quadraticCurveTo(e-n*1.3,t-n*.4,e-n*.5,t-n*1.5),i.fill(),i.fillStyle="#F4B8C0",kn(i,e-n*.55,t-n*1.55,n*1.1,n*.14,n*.07),i.fill()),i.fillStyle=o,kn(i,e-n*.65,t-n*2.05,n*1.3,n*1.25,n*.5),i.fill(),r.suit&&(i.fillStyle="#FFFFFF",i.beginPath(),i.moveTo(e-n*.2,t-n*2),i.lineTo(e+n*.2,t-n*2),i.lineTo(e,t-n*1.45),i.fill(),i.fillStyle="#1E1A22",i.beginPath(),i.moveTo(e,t-n*1.92),i.lineTo(e-n*.18,t-n*2.02),i.lineTo(e-n*.18,t-n*1.82),i.fill(),i.beginPath(),i.moveTo(e,t-n*1.92),i.lineTo(e+n*.18,t-n*2.02),i.lineTo(e+n*.18,t-n*1.82),i.fill(),at(i,e-n*.42,t-n*1.85,n*.1,"#F4B8C0")),i.strokeStyle=r.dress?s:o,i.lineWidth=n*.3;let c=(h,d)=>{i.beginPath(),i.moveTo(e+h*n*.6,t-n*1.85),d?i.lineTo(e+h*n*1,t-n*2.7):i.lineTo(e+h*n*.82,t-n*1.1),i.stroke(),at(i,d?e+h*n*1:e+h*n*.82,d?t-n*2.72:t-n*1.08,n*.17,s)};if(c(-1,r.waveL),c(1,r.wave),r.bouquet&&(i.fillStyle="#9CC08A",kn(i,e-n*.08,t-n*1.25,n*.16,n*.4,n*.05),i.fill(),["#F4B8C0","#FFFFFF","#F7D58B","#E88A98","#FFE3EA","#F4B8C0"].forEach((h,d)=>at(i,e+Math.cos(d*1.05)*n*.22,t-n*1.35+Math.sin(d*1.05)*n*.18,n*.16,h)),at(i,e,t-n*1.33,n*.16,"#E88A98")),at(i,e,l,n,s),i.fillStyle=a,i.beginPath(),i.arc(e,l-n*.05,n*1.04,Math.PI*1.02,Math.PI*1.98),i.quadraticCurveTo(e+n*.5,l-n*.05,e+n*.25,l+n*.25),i.quadraticCurveTo(e-n*.2,l-n*.2,e-n*.6,l+n*.1),i.quadraticCurveTo(e-n*1,l-n*.05,e-n*1.04,l-n*.05),i.fill(),r.crown)for(let h=0;h<5;h++)at(i,e-n*.6+h*n*.3,l-n*.98+Math.abs(h-2)*n*.1,n*.09,h%2?"#F4B8C0":"#FFFFFF");r.hat&&Gn(i,r.hat,e,l-n*1,n*1.3);for(let h of[-1,1])at(i,e+h*n*.33,l+n*.05,n*.12,"#2B2220"),at(i,e+h*n*.33+n*.04,l,n*.04,"#FFFFFF"),at(i,e+h*n*.6,l+n*.32,n*.15,"rgba(255,150,150,.55)");if(r.glasses){i.strokeStyle="#4A3B38",i.lineWidth=n*.06;for(let h of[-1,1])i.beginPath(),i.arc(e+h*n*.33,l+n*.05,n*.22,0,Math.PI*2),i.stroke()}i.strokeStyle="#2B2220",i.lineWidth=n*.07,i.beginPath(),i.arc(e,l+n*.4,n*.16,.15,Math.PI-.15),i.stroke(),r.balloon&&(i.strokeStyle="#B8A59B",i.lineWidth=1.5,i.beginPath(),i.moveTo(e+n*.82,t-n*1.08),i.lineTo(e+n*1.3,t-n*3.9),i.stroke(),at(i,e+n*1.3,t-n*4.4,n*.55,r.balloon),at(i,e+n*1.15,t-n*4.55,n*.14,"rgba(255,255,255,.6)"))}function Hm(i,e,t,n,r,s=2){let a=e/2,o=e*.085,l=()=>ll[Math.floor(r()*ll.length)],c=()=>cl[Math.floor(r()*cl.length)];if(n==="wedding")Zt(i,a-o*1.35,t,o,{suit:!0,hair:"#3A2A24",wave:r()<.4}),Zt(i,a+o*1.35,t,o,{dress:!0,veil:!0,crown:!0,bouquet:!0,hair:"#5A3A2A"});else if(n==="bride")Zt(i,a,t,o*1.15,{dress:!0,veil:!0,crown:!0,bouquet:!0,hair:"#5A3A2A",wave:r()<.5});else if(n==="groom")Zt(i,a,t,o*1.15,{suit:!0,hair:"#3A2A24",wave:!0});else if(n==="propose")Zt(i,a-o*1.3,t,o,{suit:!1,outfit:"#8FB8DE",hair:"#3A2A24",wave:!0}),Zt(i,a+o*1.3,t,o,{outfit:"#F4B8C0",hair:"#5A3A2A",long:!0,waveL:!0}),Gn(i,"\u{1F48D}",a-o*.3,t-o*2.9,o*1.1);else if(n==="couple")Zt(i,a-o*1.3,t,o,{outfit:l(),hair:c(),wave:r()<.5}),Zt(i,a+o*1.3,t,o,{outfit:l(),hair:c(),long:!0,waveL:r()<.5});else if(n==="kid"||n==="kid-balloon")Zt(i,a,t,o*.75,{outfit:l(),hair:c(),long:r()<.5,wave:!0,balloon:n==="kid-balloon"?"#E88A98":null});else if(n==="baby")Zt(i,a,t,o*.6,{outfit:"#FFF3EA",hair:"#5A3A2A",hat:"\u{1F380}"});else if(n==="kidparent")Zt(i,a-o*.9,t,o,{outfit:l(),hair:c(),long:!0}),Zt(i,a+o*1,t,o*.7,{outfit:l(),hair:c(),wave:!0});else if(n==="family"){let h=Math.min(7,Math.max(3,s)),d=Math.min(o*2.1,e*.9/h);for(let u=0;u<h;u++){let p=a+(u-(h-1)/2)*d,f=u===0||h>4&&u===h-1,v=!f&&u>h-3&&h>3&&u%2===1;Zt(i,p,t,o*(v?.7:f?.95:1),{outfit:l(),hair:f?"#C8C2C0":c(),long:u%2===1,glasses:f,wave:u===h-1})}}}function pu(i,e,t=840){let n=i.id||"wedding",r=Bm[n],s=Nm(`${n}:${e}`),a=r&&r[e]||{kind:uu[Math.floor(s()*uu.length)],sky:Math.floor(s()*5),who:du[Math.floor(s()*du.length)],props:["\u2728"]},o=[1,4/3,3/4][e%3],l=Math.round(o>=1?t:t*o),c=Math.round(o>=1?t/o:t),h=document.createElement("canvas");h.width=l,h.height=c;let d=h.getContext("2d"),p=zm(d,l,c,a.kind,a.sky,s).horizon,f=a.props[0];f&&Gn(d,f,l*(s()<.5?.15:.85),p-l*.36,l*.21,.95),Hm(d,l,p-6,a.who,s,a.n),a.props.slice(1).forEach((m,_)=>Gn(d,m,l*(.12+_*.7+s()*.1),p-l*.06+s()*10,l*.12));for(let m=0;m<10;m++)at(d,s()*l,s()*c*.6,1.2+s()*2,"rgba(255,255,255,.75)");if(n==="wedding"||n==="dating")for(let m=0;m<5;m++)Gn(d,["\u{1F497}","\u2728","\u{1F338}"][m%3],s()*l,s()*c*.5,l*.035,.8);let v=d.createRadialGradient(l/2,c/2,l*.35,l/2,c/2,l*.85);return v.addColorStop(0,"rgba(0,0,0,0)"),v.addColorStop(1,"rgba(60,30,20,.22)"),d.fillStyle=v,d.fillRect(0,0,l,c),n==="childhood"&&(d.fillStyle="rgba(150,105,40,.2)",d.fillRect(0,0,l,c),d.strokeStyle="#FFFDF8",d.lineWidth=l*.035,d.strokeRect(0,0,l,c)),h}var km=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"];function Vn(){return new Date(window.WEDDING.date)}var ui=i=>{try{return new Date(i.toLocaleString("en-US",{timeZone:"Asia/Seoul"}))}catch{return new Date(i.getTime()+(i.getTimezoneOffset()+540)*6e4)}},Er=null,ul=0;function mu(){Er=null;let i=location.hash.slice(1),e=i.match(/(?:^|&)now=([^&]+)/);if(e){let t=decodeURIComponent(e[1]),n=new Date(/[+Z]/.test(t.slice(10))?t:t+(t.length<=16?":00":"")+"+09:00");if(!isNaN(n)){Er=n.getTime(),ul=Date.now();return}}/(?:^|&)demo(?:&|$)/.test(i)&&(Er=Vn().getTime()-35*6e4,ul=Date.now())}mu();addEventListener("hashchange",mu);function di(){return Er?new Date(Er+(Date.now()-ul)):new Date}var fu=()=>!!Er;function Gi(){let i=ui(Vn()),e=ui(di()),t=Math.round((new Date(i.getFullYear(),i.getMonth(),i.getDate())-new Date(e.getFullYear(),e.getMonth(),e.getDate()))/864e5);return t>0?"before":t===0?"today":"after"}function da(){let i=window.WEDDING.schedule||[],e=ui(Vn()),t=ui(di()),n=t.toDateString()===e.toDateString(),r=t.getHours()*60+t.getMinutes(),s=l=>{let[c,h]=String(l.time).split(":").map(Number);return c*60+(h||0)},a=-1,o=!1;return n&&i.length&&(i.forEach((l,c)=>{let h=s(l),d=i[c+1]?s(i[c+1]):h+90;r>=h&&r<d&&(a=c)}),o=r>=s(i[i.length-1])+90),{sameDay:n,idx:a,item:i[a]||null,next:i[a+1]||null,done:o}}function Xt(i=Vn()){let e=ui(i),t=e.getHours(),n=e.getMinutes(),r=t<12?"\uC624\uC804":"\uC624\uD6C4",s=t%12===0?12:t%12;return{date:`${e.getFullYear()}\uB144 ${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C ${km[e.getDay()]}\uC694\uC77C`,time:`${r} ${s}\uC2DC${n?" "+n+"\uBD84":""}`,k:e}}function pi(){let i=Xt().k,e=ui(di()),t=new Date(i.getFullYear(),i.getMonth(),i.getDate()),n=new Date(e.getFullYear(),e.getMonth(),e.getDate()),r=Math.round((t-n)/864e5);return r>0?`D-${r}`:r===0?"D-DAY":`D+${-r}`}function dl(i){let e=ui(new Date(i));if(isNaN(e))return"";let t=ui(di());return e.toDateString()===t.toDateString()?"\uC624\uB298":`${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C`}function bt(i=10){var e;try{(e=navigator.vibrate)==null||e.call(navigator,i)}catch{}}var gu="wedding-letters-v2";function vu(){try{let i=JSON.parse(localStorage.getItem(gu)||"[]");return Array.isArray(i)?i:[]}catch{return[]}}function Gm(){let i=Date.now();return(window.WEDDING.letters||[]).map((e,t)=>{var n;return{name:e.name,side:e.side||"",message:e.message,time:e.time||new Date(i-((n=e.daysAgo)!=null?n:t)*864e5-t*37%23*6e4).toISOString(),seed:!0}})}function pa(){return[...vu().map(e=>({...e,mine:!0})),...Gm()]}function yu(i){let e=vu();e.unshift(i);try{localStorage.setItem(gu,JSON.stringify(e.slice(0,100)))}catch{}return e}function br(){var t;let i=window.WEDDING;return(((t=i.museum)==null?void 0:t.themes)||[]).map(n=>{var s;let r;return Array.isArray(n.photos)&&n.photos.length?r=n.photos.map((a,o)=>{var l;return typeof a=="string"?{src:a,caption:((l=n.captions)==null?void 0:l[o])||""}:a}):i.demoPhotos||n.demo?r=Array.from({length:n.count||((s=n.captions)==null?void 0:s.length)||0},(a,o)=>{var l;return{src:`demo:${n.id}:${o}`,caption:((l=n.captions)==null?void 0:l[o])||""}}):r=Array.from({length:n.count||0},(a,o)=>{var l;return{src:`${n.folder}/${o+1}.${n.ext||"jpg"}`,caption:((l=n.captions)==null?void 0:l[o])||""}}),r.forEach((a,o)=>{a.idx=o,a.theme=n}),{...n,photos:r}})}var hl=new Map,Vm=i=>typeof(i==null?void 0:i.src)=="string"&&i.src.startsWith("demo:");function Vi(i,e="full"){if(!Vm(i))return i.src;let t=`${i.src}:${e}`;if(!hl.has(t)){let n=pu(i.theme,i.idx,e==="thumb"?360:840);hl.set(t,n.toDataURL("image/jpeg",e==="thumb"?.8:.86))}return hl.get(t)}function Wi(i,e,t,n=600,r=600,s="\uC0AC\uC9C4\uC744 \uB123\uC5B4\uC8FC\uC138\uC694"){let a=document.createElement("canvas");a.width=n,a.height=r;let o=a.getContext("2d"),l=o.createLinearGradient(0,0,n,r);return l.addColorStop(0,"#FFFDF8"),l.addColorStop(1,i.color||"#F4B8C0"),o.fillStyle=l,o.fillRect(0,0,n,r),o.textAlign="center",o.textBaseline="middle",o.font=`${n*.2}px serif`,o.fillText(i.emoji||"\u{1F4F7}",n/2,r*.38),o.fillStyle="#7C6A66",o.font=`700 ${n*.075}px "Gowun Batang"`,o.fillText(`${i.title} #${e+1}`,n/2,r*.62),o.font=`${n*.04}px "Gowun Dodum"`,o.globalAlpha=.7,o.fillText(s,n/2,r*.73),o.fillText(t,n/2,r*.8),a}var _u="wedding-sound",Xe=null,Tr=null,mi=null,fl=null,Ar=!1,Es=null,Xi=0,ma=0,pl=523.25,Sr=587.33,Ln=659.25,Wn=783.99,wr=880,ml=1046.5,Wm=1174.7,xu=[Ln,Wn,wr,Wn,Ln,Sr,pl,0,Sr,Ln,Wn,Ln,Sr,pl,0,0,Ln,Wn,wr,ml,wr,Wn,Ln,0,Sr,Ln,Wm,ml,wr,Wn,0,0,ml,wr,Wn,wr,Wn,Ln,Sr,0,Ln,Wn,Ln,Sr,pl,0,0,0],Mu=[130.81,110,87.31,98],Xm=.3;function jm(){if(Xe)return Xe;let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;Xe=new i,Tr=Xe.createGain(),Tr.gain.value=.9,Tr.connect(Xe.destination),mi=Xe.createGain(),mi.gain.value=.12,mi.connect(Tr),fl=Xe.createBuffer(1,Xe.sampleRate,Xe.sampleRate);let e=fl.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1;return Xe}function At(i,e,t,{type:n="sine",gain:r=.2,dest:s=Tr,slide:a=0}={}){let o=Xe.createOscillator(),l=Xe.createGain();o.type=n,o.frequency.setValueAtTime(i,e),a&&o.frequency.exponentialRampToValueAtTime(a,e+t),l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(r,e+.012),l.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(l),l.connect(s),o.start(e),o.stop(e+t+.05)}function fa(i,e,{gain:t=.2,type:n="lowpass",freq:r=2e3}={}){let s=Xe.createBufferSource(),a=Xe.createBiquadFilter(),o=Xe.createGain();s.buffer=fl,a.type=n,a.frequency.value=r,o.gain.setValueAtTime(t,i),o.gain.exponentialRampToValueAtTime(1e-4,i+e),s.connect(a),a.connect(o),o.connect(Tr),s.start(i),s.stop(i+e+.02)}function qm(){if(!(!Xe||!Ar))for(;Xi<Xe.currentTime+.4;){let i=xu[ma%xu.length];i&&(At(i,Xi,1.1,{type:"sine",gain:.5,dest:mi}),At(i*2,Xi,.5,{type:"triangle",gain:.1,dest:mi})),ma%4===0&&At(Mu[Math.floor(ma/4)%Mu.length],Xi,1.15,{type:"triangle",gain:.16,dest:mi}),Xi+=Xm,ma++}}var ot={get enabled(){return Ar},saved(){try{return localStorage.getItem(_u)==="1"}catch{return!1}},setEnabled(i){if(i&&!jm())return!1;Ar=i;try{localStorage.setItem(_u,i?"1":"0")}catch{}return i?(Xe.resume().catch(()=>{}),Es||(Xi=Xe.currentTime+.1,Es=setInterval(qm,120))):(Es&&(clearInterval(Es),Es=null),Xe==null||Xe.suspend().catch(()=>{})),Ar},sfx(i){if(!Ar||!Xe)return;let e=Xe.currentTime;switch(i){case"chime":At(880,e,.25,{gain:.14}),At(1318.5,e+.09,.32,{gain:.12});break;case"coin":At(1760,e,.1,{type:"square",gain:.05}),At(2217,e+.07,.28,{type:"square",gain:.05}),fa(e+.3,.3,{gain:.07,freq:1400});break;case"shutter":fa(e,.05,{gain:.3,type:"highpass",freq:3e3}),fa(e+.07,.04,{gain:.18,type:"highpass",freq:2500});break;case"paper":fa(e,.16,{gain:.12,type:"bandpass",freq:900}),At(1047,e+.1,.3,{gain:.08});break;case"jump":At(320,e,.18,{type:"triangle",gain:.12,slide:760});break;case"heart":At(1047,e,.18,{gain:.07}),At(1318.5,e+.05,.22,{gain:.06});break;case"ok":At(659,e,.14,{gain:.12}),At(830.6,e+.11,.3,{gain:.12});break;case"no":At(330,e,.2,{type:"triangle",gain:.1}),At(262,e+.16,.34,{type:"triangle",gain:.1});break;case"pop":At(600,e,.08,{type:"triangle",gain:.1,slide:900});break;case"tada":[523.25,659.25,783.99,1046.5].forEach((t,n)=>At(t,e+n*.09,.4,{gain:.12}));break}},duck(i){mi&&Xe&&mi.gain.setTargetAtTime(i?.04:.12,Xe.currentTime,.12)}};document.addEventListener("visibilitychange",()=>{!Xe||!Ar||(document.hidden?Xe.suspend().catch(()=>{}):(Xe.resume().catch(()=>{}),Xi=Xe.currentTime+.1))});var Ye=window.WEDDING,jt=i=>document.querySelector(i),ye=i=>String(i!=null?i:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ss=[],gl=0;function Yi(i){Ss.push(i);try{history.pushState({wv:Ss.length},"")}catch{}}function Cr(i){let e=Ss.lastIndexOf(i);e<0||(Ss.splice(e,1),gl++,history.back())}addEventListener("popstate",()=>{var i;if(gl>0){gl--;return}(i=Ss.pop())==null||i()});var qi=null,wu=null,Ml=()=>jt("#modal");function vl(){let i=Ml();!i.classList.contains("open")||i.classList.contains("closing")||(i.classList.add("closing"),ot.duck(!1),qi&&(qi(),qi=null),wu=setTimeout(()=>{i.classList.remove("open","closing"),i.querySelector(".sheet").style.transform=""},220))}function El(i,e,t){let n=Ml();qi&&(qi(),qi=null);let r=n.classList.contains("open")&&!n.classList.contains("closing");clearTimeout(wu),n.classList.remove("closing"),n.querySelector(".sheet").style.transform="",jt("#modal-title").textContent=i;let s=jt("#modal-body");s.innerHTML=e,s.scrollTop=0,n.classList.add("open"),ot.duck(!0),r||Yi(vl),t&&(qi=t(s)||null)}function an(){let i=Ml();!i.classList.contains("open")||i.classList.contains("closing")||(vl(),Cr(vl))}var Xn=()=>jt("#modal").classList.contains("open")||jt("#lightbox").classList.contains("open"),Pn=(i,e)=>El(i,e.html,e.mount),Eu;function nt(i,e=2400){let t=jt("#toast");t.textContent=i,t.classList.add("show"),clearTimeout(Eu),Eu=setTimeout(()=>t.classList.remove("show"),e)}var yl=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function Lr(i=["\u{1F338}","\u{1F497}","\u2728","\u{1F389}","\u{1F490}"]){if(!yl())for(let e=0;e<28;e++){let t=document.createElement("div");t.className="confetti",t.textContent=i[e%i.length],t.style.left=Math.random()*100+"%",t.style.animationDuration=2+Math.random()*2+"s",t.style.animationDelay=Math.random()*.6+"s",(jt("#phone")||document.body).appendChild(t),setTimeout(()=>t.remove(),5e3)}}async function Tu(i,e="\uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694"){let t=!1;try{await navigator.clipboard.writeText(i),t=!0}catch{let n=document.createElement("textarea");n.value=i,n.readOnly=!0,n.style.cssText="position:fixed;top:0;left:0;opacity:0;-webkit-user-select:text;user-select:text",document.body.appendChild(n),n.focus(),n.select();try{n.setSelectionRange(0,i.length),t=document.execCommand("copy")}catch{t=!1}n.remove()}return bt(10),nt(t?`\u{1F4CB} ${e}`:"\uBCF5\uC0AC\uAC00 \uC548 \uB3FC\uC694. \uAE00\uC790\uB97C \uAE38\uAC8C \uB20C\uB7EC \uBCF5\uC0AC\uD574 \uC8FC\uC138\uC694"),t}function Au(i){i.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",t=>{e.tagName!=="BUTTON"&&t.target.closest("button")||Tu(e.dataset.copy,e.dataset.msg)}))}function Ym(){let{k:i}=Xt(),e=i.getFullYear(),t=i.getMonth(),n=i.getDate(),r=new Date(e,t,1).getDay(),s=new Date(e,t+1,0).getDate(),a=`<table class="cal"><tr>${["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"].map((o,l)=>`<th class="${l===0?"sun":""}">${o}</th>`).join("")}</tr><tr>`;for(let o=0;o<r;o++)a+="<td></td>";for(let o=1;o<=s;o++){let l=(r+o-1)%7;a+=`<td class="${l===0?"sun":""} ${o===n?"day":""}">${o===n?`<span>${o}</span>`:o}</td>`,l===6&&o!==s&&(a+="</tr><tr>")}return a+"</tr></table>"}function bu(i){return`${ye(i.father)} \xB7 ${ye(i.mother)}<span class="muted">\uC758 ${ye(i.relation)}</span> <b>${ye(i.name)}</b>`}function bl({hero:i=!0}={}){let{date:e,time:t,k:n}=Xt();return{html:`
    ${i?`<div class="inv-hero">
      <div class="en">WEDDING INVITATION</div>
      <div class="names">${ye(Ye.groom.name)} <span style="color:var(--rose)">\u2665</span> ${ye(Ye.bride.name)}</div>
      <div class="muted">${e} ${t}<br>${ye(Ye.venue.name)} ${ye(Ye.venue.hall)}</div>
    </div>`:""}
    <div class="ornament">\u273F \u273F \u273F</div>
    <p class="inv-greet">${ye(Ye.greeting)}</p>
    <div class="divider"></div>
    <div class="parents">${bu(Ye.groom)}<br>${bu(Ye.bride)}</div>
    <div class="card">
      <div class="center serif" style="font-size:17px;margin-bottom:8px">${n.getFullYear()}. ${n.getMonth()+1}</div>
      ${Ym()}
      <div class="countdown cd"></div>
    </div>
    <div class="btns">
      <button class="btn pink b-ics">\u{1F4C5} \uCE98\uB9B0\uB354\uC5D0 \uCD94\uAC00</button>
      <a class="btn b-gcal" target="_blank" rel="noopener" href="${ye(Zm())}">\u{1F4C6} \uAD6C\uAE00 \uCE98\uB9B0\uB354</a>
      <button class="btn b-dir">\u{1F5FA}\uFE0F \uC624\uC2DC\uB294 \uAE38</button>
      <button class="btn b-share">\u{1F517} \uACF5\uC720\uD558\uAE30</button>
    </div>`,mount:a=>{let o=a.querySelector(".cd"),l=()=>{let h=Vn()-di();if(h<=0){let v=Math.floor(-h/864e5);o.innerHTML=`<div style="min-width:auto;padding:8px 18px"><b>${Gi()==="after"&&v>=1?`\uACB0\uD63C\uD55C \uC9C0 ${v}\uC77C\uC9F8\uC608\uC694 \u{1F495}`:"\uC624\uB298 \uACB0\uD63C\uD569\uB2C8\uB2E4 \u{1F48D}"}</b></div>`;return}let d=Math.floor(h/864e5),u=Math.floor(h/36e5)%24,p=Math.floor(h/6e4)%60,f=Math.floor(h/1e3)%60;o.innerHTML=[[d,"DAYS"],[u,"HOUR"],[p,"MIN"],[f,"SEC"]].map(([v,m])=>`<div><b>${v}</b><small>${m}</small></div>`).join("")};l();let c=Gi()==="after"?null:setInterval(l,1e3);return a.querySelector(".b-ics").onclick=$m,a.querySelector(".b-dir").onclick=Pr,a.querySelector(".b-share").onclick=Sl,()=>clearInterval(c)}}}function va(){Pn("\uCCAD\uCCA9\uC7A5",bl())}function $m(){let i=Vn(),e=new Date(i.getTime()+2*36e5),t=s=>s.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),n=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//wedding//KO","BEGIN:VEVENT",`UID:${t(i)}@wedding`,`DTSTAMP:${t(new Date)}`,`DTSTART:${t(i)}`,`DTEND:${t(e)}`,`SUMMARY:${Ye.groom.name} \u2665 ${Ye.bride.name} \uACB0\uD63C\uC2DD`,`LOCATION:${Ye.venue.name} ${Ye.venue.hall}, ${Ye.venue.address}`,"END:VEVENT","END:VCALENDAR"].join(`\r
`),r=document.createElement("a");r.href=URL.createObjectURL(new Blob([n],{type:"text/calendar"})),r.download="wedding.ics",r.click(),nt("\u{1F4C5} \uCE98\uB9B0\uB354 \uD30C\uC77C\uC744 \uC5F4\uC5B4 \uC800\uC7A5\uD574 \uC8FC\uC138\uC694")}function Zm(){let i=Vn(),e=new Date(i.getTime()+2*36e5),t=r=>r.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"");return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:"TEMPLATE",text:`${Ye.groom.name} \u2665 ${Ye.bride.name} \uACB0\uD63C\uC2DD`,dates:`${t(i)}/${t(e)}`,location:`${Ye.venue.name} ${Ye.venue.hall}, ${Ye.venue.address}`})}`}async function Sl(){let i={title:`${Ye.groom.name} \u2665 ${Ye.bride.name} \uACB0\uD63C\uD569\uB2C8\uB2E4`,text:"\uC800\uD76C \uACB0\uD63C\uC2DD\uC5D0 \uCD08\uB300\uD569\uB2C8\uB2E4 \u{1F48C}",url:location.href};if(navigator.share)try{await navigator.share(i);return}catch(e){if((e==null?void 0:e.name)==="AbortError")return}Tu(location.href,"\uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694")}function wl(){let i=Ye.venue,e=(n,r)=>r&&r.length?`<div class="card"><b>${n}</b><div class="muted" style="margin-top:6px;line-height:1.7">${r.map(ye).join("<br>")}</div></div>`:"";return{html:`
    <div class="card center">
      <div class="serif" style="font-size:20px;font-weight:700">${ye(i.name)}</div>
      <div class="muted" style="margin:4px 0 10px">${ye(i.hall)}</div>
      <div>${ye(i.address)}</div>
      <div class="btns" style="justify-content:center">
        <button class="btn small" data-copy="${ye(i.address)}" data-msg="\uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694">\u{1F4CB} \uC8FC\uC18C \uBCF5\uC0AC</button>
        ${i.tel?`<a class="btn small" href="tel:${ye(i.tel)}">\u{1F4DE} \uC804\uD654</a>`:""}
      </div>
    </div>
    <div class="btns">
      ${i.naverMap?`<a class="btn" target="_blank" rel="noopener" href="${ye(i.naverMap)}">\u{1F7E2} \uB124\uC774\uBC84 \uC9C0\uB3C4</a>`:""}
      ${i.kakaoMap?`<a class="btn" target="_blank" rel="noopener" href="${ye(i.kakaoMap)}">\u{1F7E1} \uCE74\uCE74\uC624\uB9F5</a>`:""}
      ${i.tmap?`<a class="btn" target="_blank" rel="noopener" href="${ye(i.tmap)}">\u{1F535} \uD2F0\uB9F5</a>`:""}
    </div>
    ${e("\u{1F687} \uC9C0\uD558\uCCA0",i.subway)}
    ${e("\u{1F68C} \uBC84\uC2A4",i.bus)}
    ${e("\u{1F697} \uC790\uAC00\uC6A9",i.car?[i.car]:[])}
    ${e("\u{1F17F}\uFE0F \uC8FC\uCC28",i.parking?[i.parking]:[])}`,mount:Au}}function Pr(){Pn("\uC624\uC2DC\uB294 \uAE38",wl())}function Tl(){var t,n;let i=(r,s)=>`
    <details class="acc">
      <summary>${r}</summary>
      ${(s||[]).map(a=>`
        <div class="acc-row" data-copy="${ye(`${a.bank} ${a.number} ${a.name}`)}" data-msg="\uACC4\uC88C\uBC88\uD638\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694">
          <div class="info"><small>${ye(a.role)}</small><br><b>${ye(a.name)}</b> \xB7 ${ye(a.bank)}<br>${ye(a.number)}</div>
          <button class="btn small" data-copy="${ye(`${a.bank} ${a.number} ${a.name}`)}" data-msg="\uACC4\uC88C\uBC88\uD638\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694">\uBCF5\uC0AC</button>
        </div>`).join("")}
    </details>`;return{html:`
    <p class="muted center" style="line-height:1.8">\uCC38\uC11D\uC774 \uC5B4\uB824\uC6B0\uC2E0 \uBD84\uB4E4\uC744 \uC704\uD574 \uAE30\uC7AC\uD588\uC2B5\uB2C8\uB2E4.<br>\uB108\uADF8\uB7EC\uC6B4 \uB9C8\uC74C\uC73C\uB85C \uC591\uD574 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.</p>
    ${i("\u{1F499} \uC2E0\uB791\uCE21 \uACC4\uC88C\uBC88\uD638",(t=Ye.accounts)==null?void 0:t.groom)}
    ${i("\u{1F497} \uC2E0\uBD80\uCE21 \uACC4\uC88C\uBC88\uD638",(n=Ye.accounts)==null?void 0:n.bride)}`,mount:Au}}function Ts(){Pn("\uB9C8\uC74C \uC804\uD558\uC2E4 \uACF3",Tl())}function Al(){let i=Ye.schedule||[],e=n=>{let r=da(),s=r.sameDay?r.done?"\uC624\uB298 \uC608\uC2DD\uC774 \uBAA8\uB450 \uB05D\uB0AC\uC5B4\uC694. \uC640\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4 \u{1F64F}":r.item?"\uC9C0\uAE08 \uC9C4\uD589 \uC911\uC778 \uC21C\uC11C\uAC00 \uBD84\uD64D\uC0C9\uC73C\uB85C \uD45C\uC2DC\uB3FC\uC694":"\uACE7 \uC2DC\uC791\uD574\uC694. \uC21C\uC11C\uAC00 \uC2DC\uC791\uB418\uBA74 \uBD84\uD64D\uC0C9\uC73C\uB85C \uD45C\uC2DC\uB3FC\uC694":Xt().date;n.innerHTML=`
      <p class="muted">${s}</p>
      <div class="timeline">
        ${i.map((a,o)=>`<div class="tl-item ${o===r.idx?"now":""}"><div class="t">${ye(a.time)} \xB7 ${ye(a.title)}</div>${a.desc?`<div class="d">${ye(a.desc)}</div>`:""}</div>`).join("")}
      </div>`};return{html:'<div class="sched-box"></div>',mount:n=>{let r=n.querySelector(".sched-box")||n;e(r);let s=setInterval(()=>e(r),6e4);return()=>clearInterval(s)}}}function ya(){Pn("\uC624\uB298\uC758 \uC2DD\uC21C",Al())}function Rl(){let i=Ye.quiz||[];return{html:'<div class="quiz-box"></div>',mount:t=>{let n=t.querySelector(".quiz-box")||t,r=0,s=0,a=null,o=!0,l=()=>{if(!o)return;if(r>=i.length){let h=s===i.length;n.innerHTML=`
          <div class="center" style="padding:20px 0">
            <div style="font-size:60px">${h?"\u{1F3C6}":s>=i.length/2?"\u{1F970}":"\u{1F331}"}</div>
            <div class="quiz-q">${i.length}\uBB38\uC81C \uC911 <b style="color:var(--rose-deep)">${s}\uAC1C</b> \uB9DE\uD614\uC5B4\uC694!</div>
            <p class="muted">${h?"\uC800\uD76C\uB97C \uC815\uB9D0 \uC798 \uC544\uC2DC\uB294\uAD70\uC694! \u{1F495}":"\uC774\uC81C \uC800\uD76C\uB97C \uC870\uAE08 \uB354 \uC54C\uAC8C \uB418\uC168\uC8E0? \u{1F60A}"}</p>
            <button class="btn pink q-again" style="margin-top:14px">\uB2E4\uC2DC \uD480\uAE30</button>
          </div>`,n.querySelector(".q-again").onclick=()=>{r=0,s=0,l()},h&&Lr();return}let c=i[r];n.innerHTML=`
        <div class="progress-dots">${i.map((h,d)=>`<i class="${d<=r?"on":""}"></i>`).join("")}</div>
        <div class="quiz-q">Q${r+1}. ${ye(c.q)}</div>
        ${c.options.map((h,d)=>`<button class="quiz-opt" data-k="${d}">${ye(h)}</button>`).join("")}
        <p class="muted center q-cmt" style="min-height:24px"></p>`,n.querySelectorAll(".quiz-opt").forEach(h=>h.onclick=()=>{let d=+h.dataset.k;n.querySelectorAll(".quiz-opt").forEach(u=>u.disabled=!0),n.querySelectorAll(".quiz-opt")[c.answer].classList.add("right"),d===c.answer?(s++,ot.sfx("ok")):(h.classList.add("wrong"),ot.sfx("no")),n.querySelector(".q-cmt").textContent=(d===c.answer?"\u2B55 \uC815\uB2F5! ":"\u274C \uC544\uC26C\uC6CC\uC694! ")+(c.comment||""),a=setTimeout(()=>{r++,l()},1700)})};return l(),()=>{o=!1,clearTimeout(a)}}}}function _a(){Pn("\uC2E0\uB791\uC2E0\uBD80 \uD034\uC988",Rl())}function Cl({greeting:i=!0}={}){let e=(s,a)=>a?`
    <div class="acc-row" style="border-top:1px dashed var(--line)">
      <div class="info">${s}</div>
      <a class="btn small" href="tel:${ye(a)}">\u{1F4DE}</a>
      <a class="btn small" href="sms:${ye(a)}">\u{1F4AC}</a>
    </div>`:"",t=Ye.groom,n=Ye.bride;return{html:`
    <div class="inv-hero">
      <div style="font-size:44px">\u{1F935}\u200D\u2642\uFE0F\u{1F470}\u200D\u2640\uFE0F</div>
      <div class="names">"\uC640\uC8FC\uC154\uC11C \uAC10\uC0AC\uD574\uC694!"</div>
    </div>
    ${i?`<p class="inv-greet">${ye(Ye.greeting)}</p>`:""}
    <details class="acc"><summary>\u{1F4DE} \uC5F0\uB77D\uD558\uAE30</summary>
      ${e(`\uC2E0\uB791 <b>${ye(t.name)}</b>`,t.phone)}
      ${e(`\uC2E0\uB791 \uC544\uBC84\uC9C0 ${ye(t.father)}`,t.fatherPhone)}
      ${e(`\uC2E0\uB791 \uC5B4\uBA38\uB2C8 ${ye(t.mother)}`,t.motherPhone)}
      ${e(`\uC2E0\uBD80 <b>${ye(n.name)}</b>`,n.phone)}
      ${e(`\uC2E0\uBD80 \uC544\uBC84\uC9C0 ${ye(n.father)}`,n.fatherPhone)}
      ${e(`\uC2E0\uBD80 \uC5B4\uBA38\uB2C8 ${ye(n.mother)}`,n.motherPhone)}
    </details>`}}function xa(){Pn("\uC2E0\uB791 \xB7 \uC2E0\uBD80",Cl())}var Ru=i=>i.side==="\uC2E0\uBD80\uCE21"?"bride":"groom",Jm=(i,e)=>`
  <button type="button" class="env ${Ru(i)}${i.mine?" mine":""}" data-i="${e}" aria-label="${ye(i.name)}\uC758 \uD3B8\uC9C0 \uC5F4\uAE30">
    <span class="flap" aria-hidden="true"></span>
    <span class="seal" aria-hidden="true">${i.mine?"\u270D\uFE0F":"\u{1F48C}"}</span>
    <b class="env-name">${ye(i.name)}</b>
    <small class="env-meta">${ye(i.side||"")}${i.side?" \xB7 ":""}${dl(i.time)}</small>
  </button>`;function Ll(i,{onBack:e}={}){return{html:`
    <p class="muted" style="line-height:1.7">\uB450 \uC0AC\uB78C\uC5D0\uAC8C \uCD95\uD558\uC758 \uD55C\uB9C8\uB514\uB97C \uB0A8\uACA8\uC8FC\uC138\uC694.<br>\uD3B8\uC9C0\uB294 \uBD09\uD22C\uC5D0 \uB2F4\uACA8 \uD3B8\uC9C0\uD568\uC5D0 \uBCF4\uAD00\uB3FC\uC694 \u{1F48C}</p>
    <form class="letter-form" autocomplete="off">
      <input class="field l-name" maxlength="20" placeholder="\uC774\uB984" aria-label="\uC774\uB984" />
      <div class="seg l-side"><button type="button" data-v="\uC2E0\uB791\uCE21" class="on">\u{1F935} \uC2E0\uB791\uCE21</button><button type="button" data-v="\uC2E0\uBD80\uCE21">\u{1F470} \uC2E0\uBD80\uCE21</button></div>
      <textarea class="field l-msg" maxlength="300" placeholder="\uCD95\uD558 \uBA54\uC2DC\uC9C0\uB97C \uC801\uC5B4\uC8FC\uC138\uC694 (300\uC790 \uC774\uB0B4)" aria-label="\uBA54\uC2DC\uC9C0"></textarea>
      <button class="btn pink l-send" type="submit" style="width:100%;margin-top:10px;padding:14px">\u2709\uFE0F \uD3B8\uC9C0 \uBCF4\uB0B4\uAE30</button>
    </form>
    <div class="divider"></div>
    <div class="env-head"><b>\u{1F48C} \uB3C4\uCC29\uD55C \uD3B8\uC9C0</b><span class="muted l-count"></span></div>
    <p class="muted" style="font-size:12.5px;margin:0 0 10px">\uBD09\uD22C\uB97C \uB204\uB974\uBA74 \uD3B8\uC9C0\uC9C0\uAC00 \uD3BC\uCCD0\uC838\uC694 \xB7 \u270D\uFE0F \uB294 \uB0B4\uAC00 \uC4F4 \uD3B8\uC9C0</p>
    <div class="env-grid l-list"></div>`,mount:r=>{let s="\uC2E0\uB791\uCE21";r.querySelectorAll(".l-side button").forEach(u=>u.onclick=()=>{r.querySelectorAll(".l-side button").forEach(p=>p.classList.remove("on")),u.classList.add("on"),s=u.dataset.v});let a=r.querySelector(".l-list"),o=r.querySelector(".l-count"),l=e||(()=>As(i)),c=()=>{let u=pa();o.textContent=u.length?`${u.length}\uD1B5`:"",a.innerHTML=u.length?u.slice(0,60).map(Jm).join(""):'<p class="muted">\uC544\uC9C1 \uD3B8\uC9C0\uAC00 \uC5C6\uC5B4\uC694. \uCCAB \uD3B8\uC9C0\uB97C \uB0A8\uACA8\uC8FC\uC138\uC694!</p>',a.querySelectorAll(".env").forEach(p=>p.onclick=()=>{bt(8),p.classList.add("open"),setTimeout(()=>Cu(u,+p.dataset.i,l),yl()?0:260)})};c();let h=r.querySelector(".letter-form"),d=r.querySelector(".l-send");h.onsubmit=u=>{var v;u.preventDefault();let p=r.querySelector(".l-name").value.trim(),f=r.querySelector(".l-msg").value.trim();if(!p||!f){nt("\uC774\uB984\uACFC \uBA54\uC2DC\uC9C0\uB97C \uC801\uC5B4\uC8FC\uC138\uC694");return}d.disabled=!0,yu({name:p,side:s,message:f,time:new Date().toISOString()}),r.querySelector(".l-msg").value="",nt("\u{1F48C} \uD3B8\uC9C0\uAC00 \uD3B8\uC9C0\uD568\uC5D0 \uB4E4\uC5B4\uAC14\uC5B4\uC694. \uAC10\uC0AC\uD569\uB2C8\uB2E4!"),Lr(["\u{1F48C}","\u{1F497}","\u2728"]),bt(20),ot.sfx("paper"),i==null||i({name:p,side:s,message:f}),c(),d.disabled=!1,(v=a.querySelector(".env"))==null||v.scrollIntoView({behavior:yl()?"auto":"smooth",block:"center"})}}}}function As(i){Pn("\uCD95\uD558 \uD3B8\uC9C0\uD568",Ll(i))}function Km(i,e,t){let n=i[e];return{html:`
    <article class="paper ${Ru(n)}" aria-label="${ye(n.name)}\uC758 \uD3B8\uC9C0">
      <div class="paper-top"><span class="paper-stamp">${n.mine?"\u270D\uFE0F":"\u{1F48C}"}</span><span>To. ${ye(Ye.groom.name)} &amp; ${ye(Ye.bride.name)}</span></div>
      <p class="paper-msg">${ye(n.message)}</p>
      <div class="paper-from">From. <b>${ye(n.name)}</b><small>${ye(n.side||"")}${n.side?" \xB7 ":""}${dl(n.time)}</small></div>
    </article>
    <div class="paper-nav">
      <button class="btn small p-prev" ${e<=0?"disabled":""}>\u2039 \uC774\uC804</button>
      <span class="muted">${e+1} / ${i.length}</span>
      <button class="btn small p-next" ${e>=i.length-1?"disabled":""}>\uB2E4\uC74C \u203A</button>
    </div>
    <button class="btn p-back" style="width:100%;margin-top:10px">\u2709\uFE0F \uD3B8\uC9C0\uD568\uC73C\uB85C</button>`,mount:a=>{let o=d=>{i[e+d]&&(bt(6),Cu(i,e+d,t))};a.querySelector(".p-prev").onclick=()=>o(-1),a.querySelector(".p-next").onclick=()=>o(1),a.querySelector(".p-back").onclick=t;let l=a.querySelector(".paper"),c=0,h=0;l.addEventListener("pointerdown",d=>{c=d.clientX,h=d.clientY}),l.addEventListener("pointerup",d=>{let u=d.clientX-c,p=d.clientY-h;Math.abs(u)>70&&Math.abs(u)>Math.abs(p)*1.5&&o(u<0?1:-1)})}}}function Cu(i,e,t=an){Pn("\u{1F48C} \uD3B8\uC9C0",Km(i,e,t))}function Qm(i){return{html:`
    <p class="muted">\uC6D0\uD558\uB294 \uACF3\uC744 \uB204\uB974\uBA74 \uBC14\uB85C \uBCFC \uC218 \uC788\uC5B4\uC694</p>
    <div class="menu-grid">
      ${i.map((n,r)=>`<button class="menu-item" data-i="${r}"><span class="e">${n.emoji}</span>${ye(n.label)}</button>`).join("")}
    </div>`,mount:n=>{n.querySelectorAll(".menu-item").forEach(r=>r.onclick=()=>{bt(8),i[+r.dataset.i].go()})}}}function Lu(i){Pn("\uBC14\uB85C\uAC00\uAE30",Qm(i))}function Pl(i,e=-1){return{html:(e>=0?[i[e]]:i).map(s=>`
    <div class="album-theme">
      <h3>${s.emoji} ${ye(s.title)} <span class="muted" style="font-size:13px">${s.photos.length}\uC7A5</span></h3>
      <div class="muted" style="font-size:13px">${ye(s.subtitle||"")}</div>
      <div class="album-grid">
        ${s.photos.map((a,o)=>`<button type="button" data-t="${i.indexOf(s)}" data-i="${o}" aria-label="${ye(a.caption||s.title+" "+(o+1))}"><img loading="lazy" src="${ye(Vi(a,"thumb"))}" alt="" /></button>`).join("")}
      </div>
    </div>`).join(""),mount:s=>{s.querySelectorAll(".album-grid img").forEach(a=>{a.onerror=()=>{let o=a.parentElement,l=i[+o.dataset.t];a.onerror=null,a.src=Wi(l,+o.dataset.i,l.photos[+o.dataset.i].src,300,300).toDataURL()}}),s.querySelectorAll(".album-grid button").forEach(a=>a.onclick=()=>Il(i,+a.dataset.t,+a.dataset.i))}}}function Ir(i,e=-1){Pn(e>=0?`${i[e].title} \uC568\uBC94`:"\uC804\uCCB4 \uC568\uBC94",Pl(i,e))}var yn={themes:null,ti:0,i:0},De={s:1,x:0,y:0},Dr=()=>jt("#lightbox"),ws=()=>jt("#lightbox img");function ji(i){let e=ws();e.style.transition=i?"transform .25s ease":"none",e.style.transform=`translate(${De.x}px, ${De.y}px) scale(${De.s})`}function Rr(i=!1){De.s=1,De.x=De.y=0,ji(i)}function ga(){let i=ws(),e=Dr(),t=Math.max(0,(i.offsetWidth*De.s-e.clientWidth)/2),n=Math.max(0,(i.offsetHeight*De.s-e.clientHeight)/2);De.x=Math.max(-t,Math.min(t,De.x)),De.y=Math.max(-n,Math.min(n,De.y))}function Il(i,e,t){yn={themes:i,ti:e,i:t};let n=Dr();n.classList.contains("open")||(n.classList.add("open"),Yi(_l)),Pu()}function _l(){Dr().classList.remove("open"),Rr()}function xl(){Dr().classList.contains("open")&&(_l(),Cr(_l))}function Pu(){let i=yn.themes[yn.ti],e=i.photos[yn.i],t=ws();Rr(),t.onerror=()=>{t.onerror=null,t.src=Wi(i,yn.i,e.src,800,800).toDataURL()},t.src=Vi(e),t.alt=e.caption||`${i.title} ${yn.i+1}`,jt("#lightbox .cap").innerHTML=`${ye(e.caption||`${i.emoji} ${i.title}`)}<small>${yn.i+1} / ${i.photos.length}</small>`}function bs(i){let e=yn.themes[yn.ti].photos.length;yn.i=(yn.i+i+e)%e,bt(6),Pu()}function ef(){let i=Dr(),e=new Map,t=null,n=0,r=()=>{let a=ws().getBoundingClientRect();return{x:a.left+a.width/2-De.x,y:a.top+a.height/2-De.y}};i.addEventListener("pointerdown",a=>{if(!a.target.closest("button")){try{i.setPointerCapture(a.pointerId)}catch{}if(e.set(a.pointerId,{x:a.clientX,y:a.clientY}),e.size===1)t={type:"one",sx:a.clientX,sy:a.clientY,ox:De.x,oy:De.y,moved:!1};else if(e.size===2){let[o,l]=[...e.values()],c=r(),h=(o.x+l.x)/2,d=(o.y+l.y)/2;t={type:"pinch",d:Math.hypot(o.x-l.x,o.y-l.y)||1,s:De.s,c,px:(h-c.x-De.x)/De.s,py:(d-c.y-De.y)/De.s}}}}),i.addEventListener("pointermove",a=>{if(!(!e.has(a.pointerId)||!t)){if(e.set(a.pointerId,{x:a.clientX,y:a.clientY}),t.type==="pinch"&&e.size>=2){let[o,l]=[...e.values()];De.s=Math.max(1,Math.min(4,t.s*Math.hypot(o.x-l.x,o.y-l.y)/t.d)),De.x=(o.x+l.x)/2-t.c.x-De.s*t.px,De.y=(o.y+l.y)/2-t.c.y-De.s*t.py,ji(!1)}else if(t.type==="one"){let o=a.clientX-t.sx,l=a.clientY-t.sy;if(Math.hypot(o,l)>8&&(t.moved=!0),De.s>1){De.x=t.ox+o,De.y=t.oy+l,ji(!1);return}let c=ws();c.style.transition="none",c.style.transform=Math.abs(o)>Math.abs(l)?`translateX(${o}px)`:`translateY(${Math.max(0,l)}px) scale(${1-Math.min(.15,Math.max(0,l)/1500)})`}}});let s=a=>{if(!e.has(a.pointerId)||(e.delete(a.pointerId),!t))return;if(t.type==="pinch"){if(e.size===1){let[h]=[...e.values()];t={type:"one",sx:h.x,sy:h.y,ox:De.x,oy:De.y,moved:!0}}else e.size===0&&(t=null,De.s<1.05?Rr(!0):(ga(),ji(!0)));return}if(e.size>0)return;let o=a.clientX-t.sx,l=a.clientY-t.sy,c=t.moved;if(t=null,a.type==="pointercancel"){De.s>1?(ga(),ji(!0)):Rr(!0);return}if(!c){let h=performance.now();if(h-n<320)if(n=0,De.s>1)Rr(!0);else{let d=r();De.s=2.5,De.x=-(a.clientX-d.x)*1.5,De.y=-(a.clientY-d.y)*1.5,ga(),ji(!0)}else n=h;return}if(De.s>1){ga(),ji(!0);return}Math.abs(o)>60&&Math.abs(o)>Math.abs(l)?bs(o<0?1:-1):l>110&&l>Math.abs(o)?xl():Rr(!0)};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s)}function tf(){let i=jt("#modal .sheet"),e=jt("#modal .sheet-top"),t=null;e.addEventListener("pointerdown",r=>{if(!r.target.closest("button")){t={id:r.pointerId,y:r.clientY,t:performance.now()};try{e.setPointerCapture(r.pointerId)}catch{}i.style.transition="none"}}),e.addEventListener("pointermove",r=>{!t||r.pointerId!==t.id||(i.style.transform=`translateY(${Math.max(0,r.clientY-t.y)}px)`)});let n=r=>{if(!t||r.pointerId!==t.id)return;let s=r.clientY-t.y,a=s>40&&performance.now()-t.t<250;t=null,i.style.transition="",r.type==="pointerup"&&(s>100||a)?an():i.style.transform=""};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n)}var Iu="wedding-bigfont",Ma=()=>document.documentElement.classList.contains("big");function Su(i){document.documentElement.classList.toggle("big",i);try{localStorage.setItem(Iu,i?"1":"0")}catch{}document.querySelectorAll(".fs-toggle").forEach(e=>{e.textContent=i?"\uAC00-":"\uAC00+",e.setAttribute("aria-label",i?"\uAE00\uC790 \uC791\uAC8C":"\uAE00\uC790 \uD06C\uAC8C")})}function Du(){try{localStorage.getItem(Iu)==="1"&&Su(!0)}catch{}document.addEventListener("click",e=>{e.target.closest(".fs-toggle")&&(bt(6),Su(!Ma()))}),jt("#modal-close").onclick=an,jt("#modal .backdrop").onclick=an;let i=Dr();i.querySelector(".lb-close").onclick=xl,i.querySelector(".prev").onclick=()=>bs(-1),i.querySelector(".next").onclick=()=>bs(1),ef(),tf(),addEventListener("keydown",e=>{i.classList.contains("open")?(e.key==="ArrowRight"&&bs(1),e.key==="ArrowLeft"&&bs(-1),e.key==="Escape"&&xl()):e.key==="Escape"&&an()})}var yc="160";var Go=1,nf=2,Jn=3,wi=0,Ot=1,pr=2;var pp=2;var er=100;var _c=204,xc=205;var mp=0,rf=1,sf=2,bi=0,af=1,of=2,lf=3,cf=4,hf=5,uf=6;var fp=300,rs=301,ss=302,Mc=303,Ec=304,Vo=306,Ti=1e3,Kn=1001,bc=1002,Rt=1003,Fu=1004;var Fl=1005;var En=1006,df=1007;var so=1008;var ir=1009;var _h=1012,gp=1013,xi=1014,Mi=1015,Vs=1016,vp=1017,yp=1018,rr=1020;var ln=1023;var sr=1026,as=1027;var _p=1029;var xp=1031,Mp=1033,Ul=33776,Nl=33777,Ol=33778,Bl=33779,Uu=35840,Nu=35841,Ou=35842,Bu=35843,Ep=36196,zu=37492,Hu=37496,ku=37808,Gu=37809,Vu=37810,Wu=37811,Xu=37812,ju=37813,qu=37814,Yu=37815,$u=37816,Zu=37817,Ju=37818,Ku=37819,Qu=37820,ed=37821,zl=36492,td=36494,nd=36495;var id=36284,rd=36285,sd=36286;var ao=2300,oo=2301,Hl=2302,ad=2400,od=2401,ld=2402;var bp=3e3,ar=3001;var Dn="",ut="srgb",ti="srgb-linear",xh="display-p3",Wo="display-p3-linear",lo="linear",Qe="srgb",co="rec709",ho="p3";var Fr=7680;var Sc=35044;var cd="300 es",wc=1035,os=2e3,uo=2001,Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ro=Math.PI/180,Tc=180/Math.PI;function ei(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Ut[255&i]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[255&e]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[63&t|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[255&n]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function pf(i,e){return(i%e+e)%e}function kl(i,e,t){return(1-t)*i+t*e}function hd(i){return(i&i-1)==0&&i!==0}function Ac(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var he=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],f=n[8],v=r[0],m=r[3],_=r[6],g=r[1],y=r[4],E=r[7],A=r[2],w=r[5],T=r[8];return s[0]=a*v+o*g+l*A,s[3]=a*m+o*y+l*w,s[6]=a*_+o*E+l*T,s[1]=c*v+h*g+d*A,s[4]=c*m+h*y+d*w,s[7]=c*_+h*E+d*T,s[2]=u*v+p*g+f*A,s[5]=u*m+p*y+f*w,s[8]=u*_+p*E+f*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,f=t*d+n*u+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return e[0]=d*v,e[1]=(r*c-h*n)*v,e[2]=(o*n-r*a)*v,e[3]=u*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gl.makeScale(e,t)),this}rotate(e){return this.premultiply(Gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gl=new Fe;function Sp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mf(){let i=po("canvas");return i.style.display="block",i}var ud={};function Bs(i){i in ud||(ud[i]=!0,console.warn(i))}var dd=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pd=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ea={[ti]:{transfer:lo,primaries:co,toReference:i=>i,fromReference:i=>i},[ut]:{transfer:Qe,primaries:co,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Wo]:{transfer:lo,primaries:ho,toReference:i=>i.applyMatrix3(pd),fromReference:i=>i.applyMatrix3(dd)},[xh]:{transfer:Qe,primaries:ho,toReference:i=>i.convertSRGBToLinear().applyMatrix3(pd),fromReference:i=>i.applyMatrix3(dd).convertLinearToSRGB()}},ff=new Set([ti,Wo]),Je={enabled:!0,_workingColorSpace:ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ff.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ea[e].toReference;return(0,Ea[t].fromReference)(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ea[i].primaries},getTransfer:function(i){return i===Dn?lo:Ea[i].transfer}};function ns(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Vl(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var Ur,mo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ur===void 0&&(Ur=po("canvas")),Ur.width=e.width,Ur.height=e.height;let n=Ur.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=po("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*ns(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*ns(t[n]/255)):t[n]=ns(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gf=0,fo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Wl(r[a].image)):s.push(Wl(r[a]))}else s=Wl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Wl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vf=0,Qt=class i extends Ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=ei(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ar?ut:Dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?ar:bp}set encoding(e){Bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ar?ut:Dn}};Qt.DEFAULT_IMAGE=null,Qt.DEFAULT_MAPPING=fp,Qt.DEFAULT_ANISOTROPY=1;var mt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],f=l[9],v=l[2],m=l[6],_=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,E=(p+1)/2,A=(_+1)/2,w=(h+u)/4,T=(d+v)/4,G=(f+m)/4;return y>E&&y>A?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=w/n,s=T/n):E>A?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=w/r,s=G/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=T/s,r=G/s),this.set(n,r,s,t),this}let g=Math.sqrt((m-f)*(m-f)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(g)<.001&&(g=1),this.x=(m-f)/g,this.y=(d-v)/g,this.z=(u-h)/g,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rc=class extends Ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(Bs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ar?ut:Dn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Qt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends Rc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},go=class extends Qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cc=class extends Qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3],u=s[a+0],p=s[a+1],f=s[a+2],v=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=v);if(d!==v||l!==u||c!==p||h!==f){let m=1-o,_=l*u+c*p+h*f+d*v,g=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){let A=Math.sqrt(y),w=Math.atan2(A,_*g);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}let E=o*g;if(l=l*m+u*E,c=c*m+p*E,h=h*m+f*E,d=d*m+v*E,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[a],u=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*d+l*p-c*u,e[t+1]=l*f+h*u+c*d-o*p,e[t+2]=c*f+h*p+o*u-l*d,e[t+3]=h*f-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),d=o(s/2),u=l(n/2),p=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"YZX":this._x=u*h*d+c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d-u*p*f;break;case"XZY":this._x=u*h*d-c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(md.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xl.copy(this).projectOnVector(e),this.sub(Xl)}reflect(e){return this.sub(Xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xl=new S,md=new cn,wn=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(s,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),Sa.subVectors(this.max,Rs),Nr.subVectors(e.a,Rs),Or.subVectors(e.b,Rs),Br.subVectors(e.c,Rs),fi.subVectors(Or,Nr),gi.subVectors(Br,Or),$i.subVectors(Nr,Br);let t=[0,-fi.z,fi.y,0,-gi.z,gi.y,0,-$i.z,$i.y,fi.z,0,-fi.x,gi.z,0,-gi.x,$i.z,0,-$i.x,-fi.y,fi.x,0,-gi.y,gi.x,0,-$i.y,$i.x,0];return!!jl(t,Nr,Or,Br,Sa)&&(t=[1,0,0,0,1,0,0,0,1],!!jl(t,Nr,Or,Br,Sa)&&(wa.crossVectors(fi,gi),t=[wa.x,wa.y,wa.z],jl(t,Nr,Or,Br,Sa)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(_n).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},jn=[new S,new S,new S,new S,new S,new S,new S,new S],_n=new S,ba=new wn,Nr=new S,Or=new S,Br=new S,fi=new S,gi=new S,$i=new S,Rs=new S,Sa=new S,wa=new S,Zi=new S;function jl(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Zi.fromArray(i,s);let o=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var yf=new wn,Cs=new S,ql=new S,Tn=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):yf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);let t=Cs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(Cs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(ql)),this.expandByPoint(Cs.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},qn=new S,Yl=new S,Ta=new S,vi=new S,$l=new S,Aa=new S,Zl=new S,or=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Yl.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(Yl);let s=.5*e.distanceTo(t),a=-this.direction.dot(Ta),o=vi.dot(this.direction),l=-vi.dot(Ta),c=vi.lengthSq(),h=Math.abs(1-a*a),d,u,p,f;if(h>0)if(d=a*l-o,u=a*o-l,f=s*h,d>=0)if(u>=-f)if(u<=f){let v=1/h;d*=v,u*=v,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-f?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=f?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Yl).addScaledVector(Ta,u),p}intersectSphere(e,t){qn.subVectors(e.center,this.origin);let n=qn.dot(this.direction),r=qn.dot(qn)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>r?null:((o>n||n!=n)&&(n=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,r,s){$l.subVectors(t,e),Aa.subVectors(n,e),Zl.crossVectors($l,Aa);let a,o=this.direction.dot(Zl);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}vi.subVectors(this.origin,e);let l=a*this.direction.dot(Aa.crossVectors(vi,Aa));if(l<0)return null;let c=a*this.direction.dot($l.cross(vi));if(c<0||l+c>o)return null;let h=-a*vi.dot(Zl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class i{constructor(e,t,n,r,s,a,o,l,c,h,d,u,p,f,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,d,u,p,f,v,m)}set(e,t,n,r,s,a,o,l,c,h,d,u,p,f,v,m){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=u,_[3]=p,_[7]=f,_[11]=v,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),a=1/zr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,f=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,f=c*h,v=c*d;t[0]=u+v*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,f=c*h,v=c*d;t[0]=u-v*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,f=o*h,v=o*d;t[0]=l*h,t[4]=f*c-p,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+f,t[10]=u-v*d}else if(e.order==="XZY"){let u=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=a*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_f,e,xf)}lookAt(e,t,n){let r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),yi.crossVectors(n,Jt),yi.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),yi.crossVectors(n,Jt)),yi.normalize(),Ra.crossVectors(Jt,yi),r[0]=yi.x,r[4]=Ra.x,r[8]=Jt.x,r[1]=yi.y,r[5]=Ra.y,r[9]=Jt.y,r[2]=yi.z,r[6]=Ra.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],f=n[2],v=n[6],m=n[10],_=n[14],g=n[3],y=n[7],E=n[11],A=n[15],w=r[0],T=r[4],G=r[8],H=r[12],O=r[1],J=r[5],P=r[9],q=r[13],Z=r[2],oe=r[6],W=r[10],N=r[14],I=r[3],U=r[7],D=r[11],V=r[15];return s[0]=a*w+o*O+l*Z+c*I,s[4]=a*T+o*J+l*oe+c*U,s[8]=a*G+o*P+l*W+c*D,s[12]=a*H+o*q+l*N+c*V,s[1]=h*w+d*O+u*Z+p*I,s[5]=h*T+d*J+u*oe+p*U,s[9]=h*G+d*P+u*W+p*D,s[13]=h*H+d*q+u*N+p*V,s[2]=f*w+v*O+m*Z+_*I,s[6]=f*T+v*J+m*oe+_*U,s[10]=f*G+v*P+m*W+_*D,s[14]=f*H+v*q+m*N+_*V,s[3]=g*w+y*O+E*Z+A*I,s[7]=g*T+y*J+E*oe+A*U,s[11]=g*G+y*P+E*W+A*D,s[15]=g*H+y*q+E*N+A*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*l*d-r*c*d-s*o*u+n*c*u+r*o*p-n*l*p)+e[7]*(+t*l*p-t*c*u+s*a*u-r*a*p+r*c*h-s*l*h)+e[11]*(+t*c*d-t*o*p-s*a*d+n*a*p+s*o*h-n*c*h)+e[15]*(-r*o*h-t*l*d+t*o*u+r*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],v=e[13],m=e[14],_=e[15],g=d*m*c-v*u*c+v*l*p-o*m*p-d*l*_+o*u*_,y=f*u*c-h*m*c-f*l*p+a*m*p+h*l*_-a*u*_,E=h*v*c-f*d*c+f*o*p-a*v*p-h*o*_+a*d*_,A=f*d*l-h*v*l-f*o*u+a*v*u+h*o*m-a*d*m,w=t*g+n*y+r*E+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return e[0]=g*T,e[1]=(v*u*s-d*m*s-v*r*p+n*m*p+d*r*_-n*u*_)*T,e[2]=(o*m*s-v*l*s+v*r*c-n*m*c-o*r*_+n*l*_)*T,e[3]=(d*l*s-o*u*s-d*r*c+n*u*c+o*r*p-n*l*p)*T,e[4]=y*T,e[5]=(h*m*s-f*u*s+f*r*p-t*m*p-h*r*_+t*u*_)*T,e[6]=(f*l*s-a*m*s-f*r*c+t*m*c+a*r*_-t*l*_)*T,e[7]=(a*u*s-h*l*s+h*r*c-t*u*c-a*r*p+t*l*p)*T,e[8]=E*T,e[9]=(f*d*s-h*v*s-f*n*p+t*v*p+h*n*_-t*d*_)*T,e[10]=(a*v*s-f*o*s+f*n*c-t*v*c-a*n*_+t*o*_)*T,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*p-t*o*p)*T,e[12]=A*T,e[13]=(h*v*r-f*d*r+f*n*u-t*v*u-h*n*m+t*d*m)*T,e[14]=(f*o*r-a*v*r-f*n*l+t*v*l+a*n*m-t*o*m)*T,e[15]=(a*d*r-h*o*r+h*n*l-t*d*l-a*n*u+t*o*u)*T,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,f=s*d,v=a*h,m=a*d,_=o*d,g=l*c,y=l*h,E=l*d,A=n.x,w=n.y,T=n.z;return r[0]=(1-(v+_))*A,r[1]=(p+E)*A,r[2]=(f-y)*A,r[3]=0,r[4]=(p-E)*w,r[5]=(1-(u+_))*w,r[6]=(m+g)*w,r[7]=0,r[8]=(f+y)*T,r[9]=(m-g)*T,r[10]=(1-(u+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=zr.set(r[0],r[1],r[2]).length(),a=zr.set(r[4],r[5],r[6]).length(),o=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);let l=1/s,c=1/a,h=1/o;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=c,xn.elements[5]*=c,xn.elements[6]*=c,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),u=(n+r)/(n-r),p,f;if(o===os)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==uo)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-r),d=1/(a-s),u=(t+e)*c,p=(n+r)*h,f,v;if(o===os)f=(a+s)*d,v=-2*d;else{if(o!==uo)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*d,v=-1*d}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zr=new S,xn=new Ce,_f=new S(0,0,0),xf=new S(1,1,1),yi=new S,Ra=new S,Jt=new S,fd=new Ce,gd=new cn,ls=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gd.setFromEuler(this),this.setFromQuaternion(gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ls.DEFAULT_ORDER="XYZ";var Ws=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Mf=0,vd=new S,Hr=new cn,Yn=new Ce,Ca=new S,Ls=new S,Ef=new S,bf=new cn,yd=new S(1,0,0),_d=new S(0,1,0),xd=new S(0,0,1),Sf={type:"added"},wf={type:"removed"},wt=class i extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new S,t=new ls,n=new cn,r=new S(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Fe}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(yd,e)}rotateY(e){return this.rotateOnAxis(_d,e)}rotateZ(e){return this.rotateOnAxis(xd,e)}translateOnAxis(e,t){return vd.copy(e).applyQuaternion(this.quaternion),this.position.add(vd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yd,e)}translateY(e){return this.translateOnAxis(_d,e)}translateZ(e){return this.translateOnAxis(xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ls,Ca,this.up):Yn.lookAt(Ca,Ls,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(Yn),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,Ef),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++){let o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=r,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};wt.DEFAULT_UP=new S(0,1,0),wt.DEFAULT_MATRIX_AUTO_UPDATE=!0,wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=new S,$n=new S,Jl=new S,Zn=new S,kr=new S,Gr=new S,Md=new S,Kl=new S,Ql=new S,ec=new S,La=!1,Ei=class i{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Mn.subVectors(e,t),r.cross(Mn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Mn.subVectors(r,t),$n.subVectors(n,t),Jl.subVectors(e,t);let a=Mn.dot(Mn),o=Mn.dot($n),l=Mn.dot(Jl),c=$n.dot($n),h=$n.dot(Jl),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,f=(a*h-o*l)*u;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zn)!==null&&Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,t,n,r,s,a,o,l){return La===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),La=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static isFrontFacing(e,t,n,r){return Mn.subVectors(n,t),$n.subVectors(e,t),Mn.cross($n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),.5*Mn.cross($n).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return La===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),La=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;kr.subVectors(r,n),Gr.subVectors(s,n),Kl.subVectors(e,n);let l=kr.dot(Kl),c=Gr.dot(Kl);if(l<=0&&c<=0)return t.copy(n);Ql.subVectors(e,r);let h=kr.dot(Ql),d=Gr.dot(Ql);if(h>=0&&d<=h)return t.copy(r);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(kr,a);ec.subVectors(e,s);let p=kr.dot(ec),f=Gr.dot(ec);if(f>=0&&p<=f)return t.copy(s);let v=p*c-l*f;if(v<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Gr,o);let m=h*f-p*d;if(m<=0&&d-h>=0&&p-f>=0)return Md.subVectors(s,r),o=(d-h)/(d-h+(p-f)),t.copy(r).addScaledVector(Md,o);let _=1/(m+v+u);return a=v*_,o=u*_,t.copy(n).addScaledVector(kr,a).addScaledVector(Gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function tc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=pf(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=tc(a,s,e+1/3),this.g=tc(a,s,e),this.b=tc(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=ut){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let n=wp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=Vl(e.r),this.g=Vl(e.g),this.b=Vl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return Je.fromWorkingColorSpace(Nt.copy(this),e),65536*Math.round(Ct(255*Nt.r,0,255))+256*Math.round(Ct(255*Nt.g,0,255))+Math.round(Ct(255*Nt.b,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Nt.copy(this),t);let n=Nt.r,r=Nt.g,s=Nt.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=ut){Je.fromWorkingColorSpace(Nt.copy(this),e);let t=Nt.r,n=Nt.g,r=Nt.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Pa);let n=kl(_i.h,Pa.h,t),r=kl(_i.s,Pa.s,t),s=kl(_i.l,Pa.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nt=new Se;Se.NAMES=wp;var Tf=0,Fn=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=1,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=xc,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_c&&(n.blendSrc=this.blendSrc),this.blendDst!==xc&&(n.blendDst=this.blendDst),this.blendEquation!==er&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},je=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pv=Af();function Af(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,r[l]=24,r[256|l]=24):(n[l]=31744,n[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var pt=new S,Ia=new he,ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sc&&(e.usage=this.usage),e}};var vo=class extends ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var yo=class extends ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Re=class extends ft{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Rf=0,on=new Ce,nc=new wt,Vr=new S,Kt=new wn,Ps=new wn,St=new S,$e=class i extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sp(e)?yo:vo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Re(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new S,1/0);if(e){let n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Kt.min,Ps.min),Kt.expandByPoint(St),St.addVectors(Kt.max,Ps.max),Kt.expandByPoint(St)):(Kt.expandByPoint(Ps.min),Kt.expandByPoint(Ps.max))}Kt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(Vr.fromBufferAttribute(e,c),St.add(Vr)),r=Math.max(r,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let O=0;O<o;O++)c[O]=new S,h[O]=new S;let d=new S,u=new S,p=new S,f=new he,v=new he,m=new he,_=new S,g=new S;function y(O,J,P){d.fromArray(r,3*O),u.fromArray(r,3*J),p.fromArray(r,3*P),f.fromArray(a,2*O),v.fromArray(a,2*J),m.fromArray(a,2*P),u.sub(d),p.sub(d),v.sub(f),m.sub(f);let q=1/(v.x*m.y-m.x*v.y);isFinite(q)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(q),g.copy(p).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(q),c[O].add(_),c[J].add(_),c[P].add(_),h[O].add(g),h[J].add(g),h[P].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let O=0,J=E.length;O<J;++O){let P=E[O],q=P.start;for(let Z=q,oe=q+P.count;Z<oe;Z+=3)y(n[Z+0],n[Z+1],n[Z+2])}let A=new S,w=new S,T=new S,G=new S;function H(O){T.fromArray(s,3*O),G.copy(T);let J=c[O];A.copy(J),A.sub(T.multiplyScalar(T.dot(J))).normalize(),w.crossVectors(G,J);let P=w.dot(h[O])<0?-1:1;l[4*O]=A.x,l[4*O+1]=A.y,l[4*O+2]=A.z,l[4*O+3]=P}for(let O=0,J=E.length;O<J;++O){let P=E[O],q=P.start;for(let Z=q,oe=q+P.count;Z<oe;Z+=3)H(n[Z+0]),H(n[Z+1]),H(n[Z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ft(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let r=new S,s=new S,a=new S,o=new S,l=new S,c=new S,h=new S,d=new S;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,f=0;for(let v=0,m=l.length;v<m;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let _=0;_<h;_++)u[f++]=c[p++]}return new ft(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=e(c[h],n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ed=new Ce,Ji=new or,Da=new Tn,bd=new S,Wr=new S,Xr=new S,jr=new S,ic=new S,Fa=new S,Ua=new he,Na=new he,Oa=new he,Sd=new S,wd=new S,Td=new S,Ba=new S,za=new S,me=class extends wt{constructor(e=new $e,t=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(ic.fromBufferAttribute(d,e),a?Fa.addScaledVector(ic,h):Fa.addScaledVector(ic.sub(t),h))}t.add(Fa)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),Da.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Da,bd)===null||Ji.origin.distanceToSquared(bd)>(e.far-e.near)**2))return;Ed.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(Ed),n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Ji)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=u.length;f<v;f++){let m=u[f],_=a[m.materialIndex];for(let g=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));g<y;g+=3)r=Ha(this,_,e,n,c,h,d,o.getX(g),o.getX(g+1),o.getX(g+2)),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);f<v;f+=3)r=Ha(this,a,e,n,c,h,d,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,v=u.length;f<v;f++){let m=u[f],_=a[m.materialIndex];for(let g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));g<y;g+=3)r=Ha(this,_,e,n,c,h,d,g,g+1,g+2),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);f<v;f+=3)r=Ha(this,a,e,n,c,h,d,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function Ha(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Wr),i.getVertexPosition(l,Xr),i.getVertexPosition(c,jr);let h=function(d,u,p,f,v,m,_,g){let y;if(y=u.side===Ot?f.intersectTriangle(_,m,v,!0,g):f.intersectTriangle(v,m,_,u.side===wi,g),y===null)return null;za.copy(g),za.applyMatrix4(d.matrixWorld);let E=p.ray.origin.distanceTo(za);return E<p.near||E>p.far?null:{distance:E,point:za.clone(),object:d}}(i,e,t,n,Wr,Xr,jr,Ba);if(h){r&&(Ua.fromBufferAttribute(r,o),Na.fromBufferAttribute(r,l),Oa.fromBufferAttribute(r,c),h.uv=Ei.getInterpolation(Ba,Wr,Xr,jr,Ua,Na,Oa,new he)),s&&(Ua.fromBufferAttribute(s,o),Na.fromBufferAttribute(s,l),Oa.fromBufferAttribute(s,c),h.uv1=Ei.getInterpolation(Ba,Wr,Xr,jr,Ua,Na,Oa,new he),h.uv2=h.uv1),a&&(Sd.fromBufferAttribute(a,o),wd.fromBufferAttribute(a,l),Td.fromBufferAttribute(a,c),h.normal=Ei.getInterpolation(Ba,Wr,Xr,jr,Sd,wd,Td,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new S,materialIndex:0};Ei.getNormal(Wr,Xr,jr,d.normal),h.face=d}return h}var Me=class i extends $e{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;function f(v,m,_,g,y,E,A,w,T,G,H){let O=E/T,J=A/G,P=E/2,q=A/2,Z=w/2,oe=T+1,W=G+1,N=0,I=0,U=new S;for(let D=0;D<W;D++){let V=D*J-q;for(let se=0;se<oe;se++){let M=se*O-P;U[v]=M*g,U[m]=V*y,U[_]=Z,c.push(U.x,U.y,U.z),U[v]=0,U[m]=0,U[_]=w>0?1:-1,h.push(U.x,U.y,U.z),d.push(se/T),d.push(1-D/G),N+=1}}for(let D=0;D<G;D++)for(let V=0;V<T;V++){let se=u+V+oe*D,M=u+V+oe*(D+1),x=u+(V+1)+oe*(D+1),R=u+(V+1)+oe*D;l.push(se,M,R),l.push(M,x,R),I+=6}o.addGroup(p,I,H),p+=I,u+=N}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,r,a,2),f("x","z","y",1,-1,e,n,-t,r,a,3),f("x","y","z",1,-1,e,t,n,r,s,4),f("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ht(i){let e={};for(let t=0;t<i.length;t++){let n=cs(i[t]);for(let r in n)e[r]=n[r]}return e}function Tp(i){return i.getRenderTarget()===null?i.outputColorSpace:Je.workingColorSpace}var Cf={clone:cs,merge:Ht},An=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xs=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=os}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kt=class extends Xs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Tc*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ro*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Tc*Math.atan(Math.tan(.5*ro*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ro*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qr=-90,Lc=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new kt(qr,1,e,t);r.layers=this.layers,this.add(r);let s=new kt(qr,1,e,t);s.layers=this.layers,this.add(s);let a=new kt(qr,1,e,t);a.layers=this.layers,this.add(a);let o=new kt(qr,1,e,t);o.layers=this.layers,this.add(o);let l=new kt(qr,1,e,t);l.layers=this.layers,this.add(l);let c=new kt(qr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===os)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==uo)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},_o=class extends Qt{constructor(e,t,n,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:rs,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pc=class extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Bs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ar?ut:Dn),this.texture=new _o(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Me(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:0});s.uniforms.tEquirect.value=t;let a=new me(r,s),o=t.minFilter;return t.minFilter===so&&(t.minFilter=En),new Lc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},rc=new S,Lf=new S,Pf=new Fe,bn=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=rc.subVectors(n,t).cross(Lf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(rc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pf.getNormalMatrix(e),r=this.coplanarPoint(rc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new Tn,ka=new S,hs=class{constructor(e=new bn,t=new bn,n=new bn,r=new bn,s=new bn,a=new bn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],p=r[8],f=r[9],v=r[10],m=r[11],_=r[12],g=r[13],y=r[14],E=r[15];if(n[0].setComponents(l-s,u-c,m-p,E-_).normalize(),n[1].setComponents(l+s,u+c,m+p,E+_).normalize(),n[2].setComponents(l+a,u+h,m+f,E+g).normalize(),n[3].setComponents(l-a,u-h,m-f,E-g).normalize(),n[4].setComponents(l-o,u-d,m-v,E-y).normalize(),t===os)n[5].setComponents(l+o,u+d,m+v,E+y).normalize();else{if(t!==uo)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,d,v,y).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ka.x=r.normal.x>0?e.max.x:e.min.x,ka.y=r.normal.y>0?e.max.y:e.min.y,ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ap(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function If(i,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(r){return r.isInterleavedBufferAttribute&&(r=r.data),n.get(r)},remove:function(r){r.isInterleavedBufferAttribute&&(r=r.data);let s=n.get(r);s&&(i.deleteBuffer(s.buffer),n.delete(r))},update:function(r,s){if(r.isGLBufferAttribute){let o=n.get(r);return void((!o||o.version<r.version)&&n.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version}))}r.isInterleavedBufferAttribute&&(r=r.data);let a=n.get(r);if(a===void 0)n.set(r,function(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer(),p;if(i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=i.HALF_FLOAT}else p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);p=i.UNSIGNED_BYTE}return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}(r,s));else if(a.version<r.version){if(a.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,d=l._updateRange,u=l.updateRanges;if(i.bindBuffer(c,o),d.count===-1&&u.length===0&&i.bufferSubData(c,0,h),u.length!==0){for(let p=0,f=u.length;p<f;p++){let v=u[p];t?i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count):i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h.subarray(v.start,v.start+v.count))}l.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),l.onUploadCallback()})(a.buffer,r,s),a.version=r.version}}}}var et=class i extends $e{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=e/o,u=t/l,p=[],f=[],v=[],m=[];for(let _=0;_<h;_++){let g=_*u-a;for(let y=0;y<c;y++){let E=y*d-s;f.push(E,-g,0),v.push(0,0,1),m.push(y/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let g=0;g<o;g++){let y=g+c*_,E=g+c*(_+1),A=g+1+c*(_+1),w=g+1+c*_;p.push(y,E,w),p.push(E,A,w)}this.setIndex(p),this.setAttribute("position",new Re(f,3)),this.setAttribute("normal",new Re(v,3)),this.setAttribute("uv",new Re(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Le={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ue={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},In={basic:{uniforms:Ht([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Ht([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Se(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Ht([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Ht([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Ht([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Se(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Ht([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Ht([ue.points,ue.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Ht([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Ht([ue.common,ue.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Ht([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Ht([ue.sprite,ue.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Ht([ue.common,ue.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Ht([ue.lights,ue.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};In.physical={uniforms:Ht([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var Ga={r:0,b:0,g:0};function Df(i,e,t,n,r,s,a){let o=new Se(0),l,c,h=s===!0?0:1,d=null,u=0,p=null;function f(v,m){v.getRGB(Ga,Tp(i)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(v,m=1){o.set(v),h=m,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,f(o,h)},render:function(v,m){let _=!1,g=m.isScene===!0?m.background:null;g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g===null?f(o,h):g&&g.isColor&&(f(g,1),_=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Vo)?(c===void 0&&(c=new me(new Me(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:cs(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Je.getTransfer(g.colorSpace)!==Qe,d===g&&u===g.version&&p===i.toneMapping||(c.material.needsUpdate=!0,d=g,u=g.version,p=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new me(new et(2,2),new An({name:"BackgroundMaterial",uniforms:cs(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Je.getTransfer(g.colorSpace)!==Qe,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),d===g&&u===g.version&&p===i.toneMapping||(l.material.needsUpdate=!0,d=g,u=g.version,p=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}}}function Ff(i,e,t,n){let r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null),c=l,h=!1;function d(A){return n.isWebGL2?i.bindVertexArray(A):s.bindVertexArrayOES(A)}function u(A){return n.isWebGL2?i.deleteVertexArray(A):s.deleteVertexArrayOES(A)}function p(A){let w=[],T=[],G=[];for(let H=0;H<r;H++)w[H]=0,T[H]=0,G[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:T,attributeDivisors:G,object:A,attributes:{},index:null}}function f(){let A=c.newAttributes;for(let w=0,T=A.length;w<T;w++)A[w]=0}function v(A){m(A,0)}function m(A,w){let T=c.newAttributes,G=c.enabledAttributes,H=c.attributeDivisors;T[A]=1,G[A]===0&&(i.enableVertexAttribArray(A),G[A]=1),H[A]!==w&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,w),H[A]=w)}function _(){let A=c.newAttributes,w=c.enabledAttributes;for(let T=0,G=w.length;T<G;T++)w[T]!==A[T]&&(i.disableVertexAttribArray(T),w[T]=0)}function g(A,w,T,G,H,O,J){J===!0?i.vertexAttribIPointer(A,w,T,H,O):i.vertexAttribPointer(A,w,T,G,H,O)}function y(){E(),h=!0,c!==l&&(c=l,d(c.object))}function E(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(A,w,T,G,H){let O=!1;if(a){let J=function(P,q,Z){let oe=Z.wireframe===!0,W=o[P.id];W===void 0&&(W={},o[P.id]=W);let N=W[q.id];N===void 0&&(N={},W[q.id]=N);let I=N[oe];return I===void 0&&(I=p(n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()),N[oe]=I),I}(G,T,w);c!==J&&(c=J,d(c.object)),O=function(P,q,Z,oe){let W=c.attributes,N=q.attributes,I=0,U=Z.getAttributes();for(let D in U)if(U[D].location>=0){let V=W[D],se=N[D];if(se===void 0&&(D==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),D==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),V===void 0||V.attribute!==se||se&&V.data!==se.data)return!0;I++}return c.attributesNum!==I||c.index!==oe}(A,G,T,H),O&&function(P,q,Z,oe){let W={},N=q.attributes,I=0,U=Z.getAttributes();for(let D in U)if(U[D].location>=0){let V=N[D];V===void 0&&(D==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),D==="instanceColor"&&P.instanceColor&&(V=P.instanceColor));let se={};se.attribute=V,V&&V.data&&(se.data=V.data),W[D]=se,I++}c.attributes=W,c.attributesNum=I,c.index=oe}(A,G,T,H)}else{let J=w.wireframe===!0;c.geometry===G.id&&c.program===T.id&&c.wireframe===J||(c.geometry=G.id,c.program=T.id,c.wireframe=J,O=!0)}H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,function(J,P,q,Z){if(n.isWebGL2===!1&&(J.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let oe=Z.attributes,W=q.getAttributes(),N=P.defaultAttributeValues;for(let I in W){let U=W[I];if(U.location>=0){let D=oe[I];if(D===void 0&&(I==="instanceMatrix"&&J.instanceMatrix&&(D=J.instanceMatrix),I==="instanceColor"&&J.instanceColor&&(D=J.instanceColor)),D!==void 0){let V=D.normalized,se=D.itemSize,M=t.get(D);if(M===void 0)continue;let x=M.buffer,R=M.type,B=M.bytesPerElement,C=n.isWebGL2===!0&&(R===i.INT||R===i.UNSIGNED_INT||D.gpuType===gp);if(D.isInterleavedBufferAttribute){let k=D.data,F=k.stride,z=D.offset;if(k.isInstancedInterleavedBuffer){for(let j=0;j<U.locationSize;j++)m(U.location+j,k.meshPerAttribute);J.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let j=0;j<U.locationSize;j++)v(U.location+j);i.bindBuffer(i.ARRAY_BUFFER,x);for(let j=0;j<U.locationSize;j++)g(U.location+j,se/U.locationSize,R,V,F*B,(z+se/U.locationSize*j)*B,C)}else{if(D.isInstancedBufferAttribute){for(let k=0;k<U.locationSize;k++)m(U.location+k,D.meshPerAttribute);J.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let k=0;k<U.locationSize;k++)v(U.location+k);i.bindBuffer(i.ARRAY_BUFFER,x);for(let k=0;k<U.locationSize;k++)g(U.location+k,se/U.locationSize,R,V,se*B,se/U.locationSize*k*B,C)}}else if(N!==void 0){let V=N[I];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(U.location,V);break;case 3:i.vertexAttrib3fv(U.location,V);break;case 4:i.vertexAttrib4fv(U.location,V);break;default:i.vertexAttrib1fv(U.location,V)}}}}_()}(A,w,T,G),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))},reset:y,resetDefaultState:E,dispose:function(){y();for(let A in o){let w=o[A];for(let T in w){let G=w[T];for(let H in G)u(G[H].object),delete G[H];delete w[T]}delete o[A]}},releaseStatesOfGeometry:function(A){if(o[A.id]===void 0)return;let w=o[A.id];for(let T in w){let G=w[T];for(let H in G)u(G[H].object),delete G[H];delete w[T]}delete o[A.id]},releaseStatesOfProgram:function(A){for(let w in o){let T=o[w];if(T[A.id]===void 0)continue;let G=T[A.id];for(let H in G)u(G[H].object),delete G[H];delete T[A.id]}},initAttributes:f,enableAttribute:v,disableUnusedAttributes:_}}function Uf(i,e,t,n){let r=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){i.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(r)c=i,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let d=0;d<l;d++)h+=o[d];t.update(h,s,1)}}}function Nf(i,e,t){let n;function r(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,y=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:v,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:g&&y,maxSamples:s?i.getParameter(i.MAX_SAMPLES):0}}function Of(i){let e=this,t=null,n=0,r=!1,s=!1,a=new bn,o=new Fe,l={value:null,needsUpdate:!1};function c(h,d,u,p){let f=h!==null?h.length:0,v=null;if(f!==0){if(v=l.value,p!==!0||v===null){let m=u+4*f,_=d.matrixWorldInverse;o.getNormalMatrix(_),(v===null||v.length<m)&&(v=new Float32Array(m));for(let g=0,y=u;g!==f;++g,y+=4)a.copy(h[g]).applyMatrix4(_,o),a.normal.toArray(v,y),v[y+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||n!==0||r;return r=d,n=h.length,u},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,f=h.clipIntersection,v=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!v)s?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}();else{let _=s?0:n,g=4*_,y=m.clippingState||null;l.value=y,y=c(p,d,g,u);for(let E=0;E!==g;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=_}}}function Bf(i){let e=new WeakMap;function t(r,s){return s===Mc?r.mapping=rs:s===Ec&&(r.mapping=ss),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===Mc||s===Ec){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Pc(a.height/2);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var xo=class extends Xs{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ad=[.125,.215,.35,.446,.526,.582],Is=20,sc=new xo,Rd=new Se,ac=null,oc=0,lc=0,Qi=(1+Math.sqrt(5))/2,Yr=1/Qi,Cd=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,Qi,Yr),new S(0,Qi,-Yr),new S(Yr,0,Qi),new S(-Yr,0,Qi),new S(Qi,Yr,0),new S(-Qi,Yr,0)],Mo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ac,oc,lc),e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Vs,format:ln,colorSpace:ti,depthBuffer:!1},r=Ld(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ld(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,d=a-4+1+Ad.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);l.push(p);let f=1/p;u>a-4?f=Ad[u-a+4-1]:u===0&&(f=0),c.push(f);let v=1/(p-2),m=-v,_=1+v,g=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,E=6,A=3,w=2,T=1,G=new Float32Array(A*E*y),H=new Float32Array(w*E*y),O=new Float32Array(T*E*y);for(let P=0;P<y;P++){let q=P%3*2/3-1,Z=P>2?0:-1,oe=[q,Z,0,q+2/3,Z,0,q+2/3,Z+1,0,q,Z,0,q+2/3,Z+1,0,q,Z+1,0];G.set(oe,A*E*P),H.set(g,w*E*P);let W=[P,P,P,P,P,P];O.set(W,T*E*P)}let J=new $e;J.setAttribute("position",new ft(G,A)),J.setAttribute("uv",new ft(H,w)),J.setAttribute("faceIndex",new ft(O,T)),o.push(J),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array(Is),h=new S(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return r}_compileMaterial(e){let t=new me(this._lodPlanes[0],e);this._renderer.compile(t,sc)}_sceneToCubeUV(e,t,n,r){let s=new kt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Rd),l.toneMapping=bi,l.autoClear=!1;let d=new je({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),u=new me(new Me,d),p=!1,f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,p=!0):(d.color.copy(Rd),p=!0);for(let v=0;v<6;v++){let m=v%3;m===0?(s.up.set(0,a[v],0),s.lookAt(o[v],0,0)):m===1?(s.up.set(0,0,a[v]),s.lookAt(0,o[v],0)):(s.up.set(0,a[v],0),s.lookAt(0,0,o[v]));let _=this._cubeSize;Va(r,m*_,v>2?_:0,_,_),l.setRenderTarget(r),p&&l.render(u,s),l.render(e,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===rs||e.mapping===ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pd());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new me(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Va(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,sc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cd[(r-1)%Cd.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new me(this._lodPlanes[r],c),d=c.uniforms,u=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,f=s/p,v=isFinite(s)?1+Math.floor(3*f):Is;v>Is&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let m=[],_=0;for(let E=0;E<Is;++E){let A=E/f,w=Math.exp(-A*A/2);m.push(w),E===0?_+=w:E<v&&(_+=2*w)}for(let E=0;E<m.length;E++)m[E]=m[E]/_;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:g}=this;d.dTheta.value=p,d.mipInt.value=g-n;let y=this._sizeLods[r];Va(t,3*y*(r>g-4?r-g+4:0),4*(this._cubeSize-y),3*y,2*y),l.setRenderTarget(t),l.render(h,sc)}};function Ld(i,e,t){let n=new ni(i,e,t);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Pd(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Id(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mh(){return`

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
	`}function zf(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===Mc||s===Ec,o=s===rs||s===ss;if(a||o){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let l=e.get(r);return t===null&&(t=new Mo(i)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),e.set(r,l),l.texture}if(e.has(r))return e.get(r).texture;{let l=r.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0,d=6;for(let u=0;u<d;u++)c[u]!==void 0&&h++;return h===d}(l)){t===null&&(t=new Mo(i));let c=a?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,c),r.addEventListener("dispose",n),c.texture}return null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Hf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function kf(i,e,t,n){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let d in c.attributes)e.remove(c.attributes[d]);for(let d in c.morphAttributes){let u=c.morphAttributes[d];for(let p=0,f=u.length;p<f;p++)e.remove(u[p])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,d=l.attributes.position,u=0;if(h!==null){let v=h.array;u=h.version;for(let m=0,_=v.length;m<_;m+=3){let g=v[m+0],y=v[m+1],E=v[m+2];c.push(g,y,y,E,E,g)}}else{if(d===void 0)return;{let v=d.array;u=d.version;for(let m=0,_=v.length/3-1;m<_;m+=3){let g=m+0,y=m+1,E=m+2;c.push(g,y,y,E,E,g)}}}let p=new(Sp(c)?yo:vo)(c,1);p.version=u;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let d in c)e.update(c[d],i.ARRAY_BUFFER);let h=l.morphAttributes;for(let d in h){let u=h[d];for(let p=0,f=u.length;p<f;p++)e.update(u[p],i.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Gf(i,e,t,n){let r=n.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){i.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let d,u;if(r)d=i,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<h;u++)this.render(l[u]/o,c[u]);else{d.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,s,1)}}}function Vf(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Wf(i,e){return i[0]-e[0]}function Xf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function jf(i,e,t){let n={},r=new Float32Array(8),s=new WeakMap,a=new mt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=u!==void 0?u.length:0,f=s.get(c);if(f===void 0||f.count!==p){let q=function(){J.dispose(),s.delete(c),c.removeEventListener("dispose",q)};f!==void 0&&f.texture.dispose();let _=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],w=c.morphAttributes.color||[],T=0;_===!0&&(T=1),g===!0&&(T=2),y===!0&&(T=3);let G=c.attributes.position.count*T,H=1;G>e.maxTextureSize&&(H=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);let O=new Float32Array(G*H*4*p),J=new go(O,G,H,p);J.type=Mi,J.needsUpdate=!0;let P=4*T;for(let Z=0;Z<p;Z++){let oe=E[Z],W=A[Z],N=w[Z],I=G*H*4*Z;for(let U=0;U<oe.count;U++){let D=U*P;_===!0&&(a.fromBufferAttribute(oe,U),O[I+D+0]=a.x,O[I+D+1]=a.y,O[I+D+2]=a.z,O[I+D+3]=0),g===!0&&(a.fromBufferAttribute(W,U),O[I+D+4]=a.x,O[I+D+5]=a.y,O[I+D+6]=a.z,O[I+D+7]=0),y===!0&&(a.fromBufferAttribute(N,U),O[I+D+8]=a.x,O[I+D+9]=a.y,O[I+D+10]=a.z,O[I+D+11]=N.itemSize===4?a.w:1)}}f={count:p,texture:J,size:new he(G,H)},s.set(c,f),c.addEventListener("dispose",q)}let v=0;for(let _=0;_<d.length;_++)v+=d[_];let m=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(i,"morphTargetBaseInfluence",m),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{let u=d===void 0?0:d.length,p=n[c.id];if(p===void 0||p.length!==u){p=[];for(let g=0;g<u;g++)p[g]=[g,0];n[c.id]=p}for(let g=0;g<u;g++){let y=p[g];y[0]=g,y[1]=d[g]}p.sort(Xf);for(let g=0;g<8;g++)g<u&&p[g][1]?(o[g][0]=p[g][0],o[g][1]=p[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(Wf);let f=c.morphAttributes.position,v=c.morphAttributes.normal,m=0;for(let g=0;g<8;g++){let y=o[g],E=y[0],A=y[1];E!==Number.MAX_SAFE_INTEGER&&A?(f&&c.getAttribute("morphTarget"+g)!==f[E]&&c.setAttribute("morphTarget"+g,f[E]),v&&c.getAttribute("morphNormal"+g)!==v[E]&&c.setAttribute("morphNormal"+g,v[E]),r[g]=A,m+=A):(f&&c.hasAttribute("morphTarget"+g)===!0&&c.deleteAttribute("morphTarget"+g),v&&c.hasAttribute("morphNormal"+g)===!0&&c.deleteAttribute("morphNormal"+g),r[g]=0)}let _=c.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",_),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}}}function qf(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var Eo=class extends Qt{constructor(e,t,n,r,s,a,o,l,c,h){if((h=h!==void 0?h:sr)!==sr&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===sr&&(n=xi),n===void 0&&h===as&&(n=rr),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rp=new Qt,Cp=new Eo(1,1);Cp.compareFunction=515;var Lp=new go,Pp=new Cc,Ip=new _o,Dd=[],Fd=[],Ud=new Float32Array(16),Nd=new Float32Array(9),Od=new Float32Array(4);function ds(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Dd[r];if(s===void 0&&(s=new Float32Array(r),Dd[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xo(i,e){let t=Fd[e];t===void 0&&(t=new Int32Array(e),Fd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Yf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $f(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function Zf(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function Jf(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function Kf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Od.set(n),i.uniformMatrix2fv(this.addr,!1,Od),xt(t,n)}}function Qf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Nd.set(n),i.uniformMatrix3fv(this.addr,!1,Nd),xt(t,n)}}function e0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Ud.set(n),i.uniformMatrix4fv(this.addr,!1,Ud),xt(t,n)}}function t0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function n0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function i0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function r0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function s0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function a0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function o0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function l0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function c0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s=this.type===i.SAMPLER_2D_SHADOW?Cp:Rp;t.setTexture2D(e||s,r)}function h0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Pp,r)}function u0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ip,r)}function d0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Lp,r)}function p0(i,e){i.uniform1fv(this.addr,e)}function m0(i,e){let t=ds(e,this.size,2);i.uniform2fv(this.addr,t)}function f0(i,e){let t=ds(e,this.size,3);i.uniform3fv(this.addr,t)}function g0(i,e){let t=ds(e,this.size,4);i.uniform4fv(this.addr,t)}function v0(i,e){let t=ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function y0(i,e){let t=ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _0(i,e){let t=ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function x0(i,e){i.uniform1iv(this.addr,e)}function M0(i,e){i.uniform2iv(this.addr,e)}function E0(i,e){i.uniform3iv(this.addr,e)}function b0(i,e){i.uniform4iv(this.addr,e)}function S0(i,e){i.uniform1uiv(this.addr,e)}function w0(i,e){i.uniform2uiv(this.addr,e)}function T0(i,e){i.uniform3uiv(this.addr,e)}function A0(i,e){i.uniform4uiv(this.addr,e)}function R0(i,e,t){let n=this.cache,r=e.length,s=Xo(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Rp,s[a])}function C0(i,e,t){let n=this.cache,r=e.length,s=Xo(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Pp,s[a])}function L0(i,e,t){let n=this.cache,r=e.length,s=Xo(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ip,s[a])}function P0(i,e,t){let n=this.cache,r=e.length,s=Xo(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Lp,s[a])}var Ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(r){switch(r){case 5126:return Yf;case 35664:return $f;case 35665:return Zf;case 35666:return Jf;case 35674:return Kf;case 35675:return Qf;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return r0;case 5125:return s0;case 36294:return a0;case 36295:return o0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return d0}}(t.type)}},Dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(r){switch(r){case 5126:return p0;case 35664:return m0;case 35665:return f0;case 35666:return g0;case 35674:return v0;case 35675:return y0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return M0;case 35668:case 35672:return E0;case 35669:case 35673:return b0;case 5125:return S0;case 36294:return w0;case 36295:return T0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return P0}}(t.type)}},Fc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},cc=/(\w+)(\])?(\[|\.)?/g;function Bd(i,e){i.seq.push(e),i.map[e.id]=e}function I0(i,e,t){let n=i.name,r=n.length;for(cc.lastIndex=0;;){let s=cc.exec(n),a=cc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){Bd(t,c===void 0?new Ic(o,i,e):new Dc(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new Fc(o),Bd(t,h)),t=h}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);I0(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function zd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var D0=37297,F0=0;function Hd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+function(o,l){let c=o.split(`
`),h=[],d=Math.max(l-6,0),u=Math.min(l+6,c.length);for(let p=d;p<u;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)}(i.getShaderSource(e),a)}return r}function U0(i,e){let t=function(n){let r=Je.getPrimaries(Je.workingColorSpace),s=Je.getPrimaries(n),a;switch(r===s?a="":r===ho&&s===co?a="LinearDisplayP3ToLinearSRGB":r===co&&s===ho&&(a="LinearSRGBToLinearDisplayP3"),n){case ti:case Wo:return[a,"LinearTransferOETF"];case ut:case xh:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}}(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function N0(i,e){let t;switch(e){case af:t="Linear";break;case of:t="Reinhard";break;case lf:t="OptimizedCineon";break;case cf:t="ACESFilmic";break;case uf:t="AgX";break;case hf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $r(i){return i!==""}function kd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(i){return i.replace(O0,z0)}var B0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function z0(i,e){let t=Le[e];if(t===void 0){let n=B0.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Uc(t)}var H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(i){return i.replace(H0,k0)}function k0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function G0(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(P){let q="SHADOWMAP_TYPE_BASIC";return P.shadowMapType===Go?q="SHADOWMAP_TYPE_PCF":P.shadowMapType===nf?q="SHADOWMAP_TYPE_PCF_SOFT":P.shadowMapType===Jn&&(q="SHADOWMAP_TYPE_VSM"),q}(t),c=function(P){let q="ENVMAP_TYPE_CUBE";if(P.envMap)switch(P.envMapMode){case rs:case ss:q="ENVMAP_TYPE_CUBE";break;case Vo:q="ENVMAP_TYPE_CUBE_UV"}return q}(t),h=function(P){let q="ENVMAP_MODE_REFLECTION";return P.envMap&&P.envMapMode===ss&&(q="ENVMAP_MODE_REFRACTION"),q}(t),d=function(P){let q="ENVMAP_BLENDING_NONE";if(P.envMap)switch(P.combine){case mp:q="ENVMAP_BLENDING_MULTIPLY";break;case rf:q="ENVMAP_BLENDING_MIX";break;case sf:q="ENVMAP_BLENDING_ADD"}return q}(t),u=function(P){let q=P.envMapCubeUVHeight;if(q===null)return null;let Z=Math.log2(q)-2,oe=1/q;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:oe,maxMip:Z}}(t),p=t.isWebGL2?"":function(P){return[P.extensionDerivatives||P.envMapCubeUVHeight||P.bumpMap||P.normalMapTangentSpace||P.clearcoatNormalMap||P.flatShading||P.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(P.extensionFragDepth||P.logarithmicDepthBuffer)&&P.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",P.extensionDrawBuffers&&P.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(P.extensionShaderTextureLOD||P.envMap||P.transmission)&&P.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($r).join(`
`)}(t),f=function(P){return[P.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter($r).join(`
`)}(t),v=function(P){let q=[];for(let Z in P){let oe=P[Z];oe!==!1&&q.push("#define "+Z+" "+oe)}return q.join(`
`)}(s),m=r.createProgram(),_,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($r).join(`
`),_.length>0&&(_+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter($r).join(`
`),g.length>0&&(g+=`
`)):(_=[Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),g=[p,Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?Le.tonemapping_pars_fragment:"",t.toneMapping!==bi?N0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,U0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),a=Uc(a),a=kd(a,t),a=Gd(a,t),o=Uc(o),o=kd(o,t),o=Gd(o,t),a=Vd(a),o=Vd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=y+_+a,A=y+g+o,w=zd(r,r.VERTEX_SHADER,E),T=zd(r,r.FRAGMENT_SHADER,A);function G(P){if(i.debug.checkShaderErrors){let q=r.getProgramInfoLog(m).trim(),Z=r.getShaderInfoLog(w).trim(),oe=r.getShaderInfoLog(T).trim(),W=!0,N=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,w,T);else{let I=Hd(r,w,"vertex"),U=Hd(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+I+`
`+U)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):Z!==""&&oe!==""||(N=!1);N&&(P.diagnostics={runnable:W,programLog:q,vertexShader:{log:Z,prefix:_},fragmentShader:{log:oe,prefix:g}})}r.deleteShader(w),r.deleteShader(T),H=new is(r,m),O=function(q,Z){let oe={},W=q.getProgramParameter(Z,q.ACTIVE_ATTRIBUTES);for(let N=0;N<W;N++){let I=q.getActiveAttrib(Z,N),U=I.name,D=1;I.type===q.FLOAT_MAT2&&(D=2),I.type===q.FLOAT_MAT3&&(D=3),I.type===q.FLOAT_MAT4&&(D=4),oe[U]={type:I.type,location:q.getAttribLocation(Z,U),locationSize:D}}return oe}(r,m)}let H,O;r.attachShader(m,w),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return H===void 0&&G(this),H},this.getAttributes=function(){return O===void 0&&G(this),O};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=r.getProgramParameter(m,D0)),J},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=T,this}var V0=0,Nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Oc(e),t.set(e,n)),n}},Oc=class{constructor(e){this.id=V0++,this.code=e,this.usedTimes=0}};function W0(i,e,t,n,r,s,a){let o=new Ws,l=new Nc,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,u=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return m===0?"uv":`uv${m}`}return{getParameters:function(m,_,g,y,E){let A=y.fog,w=E.geometry,T=m.isMeshStandardMaterial?y.environment:null,G=(m.isMeshStandardMaterial?t:e).get(m.envMap||T),H=G&&G.mapping===Vo?G.image.height:null,O=f[m.type];m.precision!==null&&(p=r.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let J=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,P=J!==void 0?J.length:0,q,Z,oe,W,N=0;if(w.morphAttributes.position!==void 0&&(N=1),w.morphAttributes.normal!==void 0&&(N=2),w.morphAttributes.color!==void 0&&(N=3),O){let Dt=In[O];q=Dt.vertexShader,Z=Dt.fragmentShader}else q=m.vertexShader,Z=m.fragmentShader,l.update(m),oe=l.getVertexShaderID(m),W=l.getFragmentShaderID(m);let I=i.getRenderTarget(),U=E.isInstancedMesh===!0,D=E.isBatchedMesh===!0,V=!!m.map,se=!!m.matcap,M=!!G,x=!!m.aoMap,R=!!m.lightMap,B=!!m.bumpMap,C=!!m.normalMap,k=!!m.displacementMap,F=!!m.emissiveMap,z=!!m.metalnessMap,j=!!m.roughnessMap,Y=m.anisotropy>0,te=m.clearcoat>0,b=m.iridescence>0,re=m.sheen>0,$=m.transmission>0,K=Y&&!!m.anisotropyMap,le=te&&!!m.clearcoatMap,de=te&&!!m.clearcoatNormalMap,fe=te&&!!m.clearcoatRoughnessMap,ge=b&&!!m.iridescenceMap,Ae=b&&!!m.iridescenceThicknessMap,ve=re&&!!m.sheenColorMap,xe=re&&!!m.sheenRoughnessMap,Pe=!!m.specularMap,Et=!!m.specularColorMap,Ee=!!m.specularIntensityMap,He=$&&!!m.transmissionMap,Ne=$&&!!m.thicknessMap,aa=!!m.gradientMap,xr=!!m.alphaMap,oa=m.alphaTest>0,nn=!!m.alphaHash,$t=!!m.extensions,Mr=!!w.attributes.uv1,ee=!!w.attributes.uv2,la=!!w.attributes.uv3,_s=bi;return m.toneMapped&&(I!==null&&I.isXRRenderTarget!==!0||(_s=i.toneMapping)),{isWebGL2:h,shaderID:O,shaderType:m.type,shaderName:m.name,vertexShader:q,fragmentShader:Z,defines:m.defines,customVertexShaderID:oe,customFragmentShaderID:W,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:D,instancing:U,instancingColor:U&&E.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:I===null?i.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ti,map:V,matcap:se,envMap:M,envMapMode:M&&G.mapping,envMapCubeUVHeight:H,aoMap:x,lightMap:R,bumpMap:B,normalMap:C,displacementMap:u&&k,emissiveMap:F,normalMapObjectSpace:C&&m.normalMapType===1,normalMapTangentSpace:C&&m.normalMapType===0,metalnessMap:z,roughnessMap:j,anisotropy:Y,anisotropyMap:K,clearcoat:te,clearcoatMap:le,clearcoatNormalMap:de,clearcoatRoughnessMap:fe,iridescence:b,iridescenceMap:ge,iridescenceThicknessMap:Ae,sheen:re,sheenColorMap:ve,sheenRoughnessMap:xe,specularMap:Pe,specularColorMap:Et,specularIntensityMap:Ee,transmission:$,transmissionMap:He,thicknessMap:Ne,gradientMap:aa,opaque:m.transparent===!1&&m.blending===1,alphaMap:xr,alphaTest:oa,alphaHash:nn,combine:m.combine,mapUv:V&&v(m.map.channel),aoMapUv:x&&v(m.aoMap.channel),lightMapUv:R&&v(m.lightMap.channel),bumpMapUv:B&&v(m.bumpMap.channel),normalMapUv:C&&v(m.normalMap.channel),displacementMapUv:k&&v(m.displacementMap.channel),emissiveMapUv:F&&v(m.emissiveMap.channel),metalnessMapUv:z&&v(m.metalnessMap.channel),roughnessMapUv:j&&v(m.roughnessMap.channel),anisotropyMapUv:K&&v(m.anisotropyMap.channel),clearcoatMapUv:le&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(m.sheenRoughnessMap.channel),specularMapUv:Pe&&v(m.specularMap.channel),specularColorMapUv:Et&&v(m.specularColorMap.channel),specularIntensityMapUv:Ee&&v(m.specularIntensityMap.channel),transmissionMapUv:He&&v(m.transmissionMap.channel),thicknessMapUv:Ne&&v(m.thicknessMap.channel),alphaMapUv:xr&&v(m.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(C||Y),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,vertexUv1s:Mr,vertexUv2s:ee,vertexUv3s:la,pointsUvs:E.isPoints===!0&&!!w.attributes.uv&&(V||xr),fog:!!A,useFog:m.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:E.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:N,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&g.length>0,shadowMapType:i.shadowMap.type,toneMapping:_s,useLegacyLights:i._useLegacyLights,decodeVideoTexture:V&&m.map.isVideoTexture===!0&&Je.getTransfer(m.map.colorSpace)===Qe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===Ot,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:$t&&m.extensions.derivatives===!0,extensionFragDepth:$t&&m.extensions.fragDepth===!0,extensionDrawBuffers:$t&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:$t&&m.extensions.shaderTextureLOD===!0,extensionClipCullDistance:$t&&m.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)_.push(g),_.push(m.defines[g]);return m.isRawShaderMaterial===!1&&(function(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}(_,m),function(g,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),g.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),g.push(o.mask)}(_,m),_.push(i.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=f[m.type],g;if(_){let y=In[_];g=Cf.clone(y.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,_){let g;for(let y=0,E=c.length;y<E;y++){let A=c[y];if(A.cacheKey===_){g=A,++g.usedTimes;break}}return g===void 0&&(g=new G0(i,_,m,s),c.push(g)),g},releaseProgram:function(m){if(--m.usedTimes==0){let _=c.indexOf(m);c[_]=c[c.length-1],c.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:c,dispose:function(){l.dispose()}}}function X0(){let i=new WeakMap;return{get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function j0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jd(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,l,c,h,d){let u=i[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:d},i[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=c,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?n.push(u):l.transparent===!0?r.push(u):t.push(u)},unshift:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?n.unshift(u):l.transparent===!0?r.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=i.length;a<o;a++){let l=i[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||j0),n.length>1&&n.sort(o||Xd),r.length>1&&r.sort(o||Xd)}}}function q0(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new jd,i.set(e,[r])):t>=n.length?(r=new jd,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function Y0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new Se};break;case"SpotLight":t={position:new S,direction:new S,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new S,halfWidth:new S,halfHeight:new S}}return i[e.id]=t,t}}}var $0=0;function Z0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function J0(i,e){let t=new Y0,n=function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new S);let s=new S,a=new Ce,o=new Ce;return{setup:function(l,c){let h=0,d=0,u=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let p=0,f=0,v=0,m=0,_=0,g=0,y=0,E=0,A=0,w=0,T=0;l.sort(Z0);let G=c===!0?Math.PI:1;for(let O=0,J=l.length;O<J;O++){let P=l[O],q=P.color,Z=P.intensity,oe=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=q.r*Z*G,d+=q.g*Z*G,u+=q.b*Z*G;else if(P.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(P.sh.coefficients[N],Z);T++}else if(P.isDirectionalLight){let N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*G),P.castShadow){let I=P.shadow,U=n.get(P);U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize=I.mapSize,r.directionalShadow[p]=U,r.directionalShadowMap[p]=W,r.directionalShadowMatrix[p]=P.shadow.matrix,g++}r.directional[p]=N,p++}else if(P.isSpotLight){let N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(q).multiplyScalar(Z*G),N.distance=oe,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,r.spot[v]=N;let I=P.shadow;if(P.map&&(r.spotLightMap[A]=P.map,A++,I.updateMatrices(P),P.castShadow&&w++),r.spotLightMatrix[v]=I.matrix,P.castShadow){let U=n.get(P);U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize=I.mapSize,r.spotShadow[v]=U,r.spotShadowMap[v]=W,E++}v++}else if(P.isRectAreaLight){let N=t.get(P);N.color.copy(q).multiplyScalar(Z),N.halfWidth.set(.5*P.width,0,0),N.halfHeight.set(0,.5*P.height,0),r.rectArea[m]=N,m++}else if(P.isPointLight){let N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*G),N.distance=P.distance,N.decay=P.decay,P.castShadow){let I=P.shadow,U=n.get(P);U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize=I.mapSize,U.shadowCameraNear=I.camera.near,U.shadowCameraFar=I.camera.far,r.pointShadow[f]=U,r.pointShadowMap[f]=W,r.pointShadowMatrix[f]=P.shadow.matrix,y++}r.point[f]=N,f++}else if(P.isHemisphereLight){let N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(Z*G),N.groundColor.copy(P.groundColor).multiplyScalar(Z*G),r.hemi[_]=N,_++}}m>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=u;let H=r.hash;H.directionalLength===p&&H.pointLength===f&&H.spotLength===v&&H.rectAreaLength===m&&H.hemiLength===_&&H.numDirectionalShadows===g&&H.numPointShadows===y&&H.numSpotShadows===E&&H.numSpotMaps===A&&H.numLightProbes===T||(r.directional.length=p,r.spot.length=v,r.rectArea.length=m,r.point.length=f,r.hemi.length=_,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=g,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=E+A-w,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=T,H.directionalLength=p,H.pointLength=f,H.spotLength=v,H.rectAreaLength=m,H.hemiLength=_,H.numDirectionalShadows=g,H.numPointShadows=y,H.numSpotShadows=E,H.numSpotMaps=A,H.numLightProbes=T,r.version=$0++)},setupView:function(l,c){let h=0,d=0,u=0,p=0,f=0,v=c.matrixWorldInverse;for(let m=0,_=l.length;m<_;m++){let g=l[m];if(g.isDirectionalLight){let y=r.directional[h];y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),h++}else if(g.isSpotLight){let y=r.spot[u];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(v),y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),u++}else if(g.isRectAreaLight){let y=r.rectArea[p];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(v),o.identity(),a.copy(g.matrixWorld),a.premultiply(v),o.extractRotation(a),y.halfWidth.set(.5*g.width,0,0),y.halfHeight.set(0,.5*g.height,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(g.isPointLight){let y=r.point[d];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(v),d++}else if(g.isHemisphereLight){let y=r.hemi[f];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(v),f++}}},state:r}}function qd(i,e){let t=new J0(i,e),n=[],r=[];return{init:function(){n.length=0,r.length=0},state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){r.push(s)}}}function K0(i,e){let t=new WeakMap;return{get:function(n,r=0){let s=t.get(n),a;return s===void 0?(a=new qd(i,e),t.set(n,[a])):r>=s.length?(a=new qd(i,e),s.push(a)):a=s[r],a},dispose:function(){t=new WeakMap}}}var Bc=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zc=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Q0(i,e,t){let n=new hs,r=new he,s=new he,a=new mt,o=new Bc({depthPacking:3201}),l=new zc,c={},h=t.maxTextureSize,d={[wi]:Ot,[Ot]:wi,2:2},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new $e;f.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new me(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let _=this.type;function g(w,T){let G=e.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ni(r.x,r.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,G,u,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,G,p,v,null)}function y(w,T,G,H){let O=null,J=G.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(J!==void 0)O=J;else if(O=G.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let P=O.uuid,q=T.uuid,Z=c[P];Z===void 0&&(Z={},c[P]=Z);let oe=Z[q];oe===void 0&&(oe=O.clone(),Z[q]=oe,T.addEventListener("dispose",A)),O=oe}return O.visible=T.visible,O.wireframe=T.wireframe,O.side=H===Jn?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:d[T.side],O.alphaMap=T.alphaMap,O.alphaTest=T.alphaTest,O.map=T.map,O.clipShadows=T.clipShadows,O.clippingPlanes=T.clippingPlanes,O.clipIntersection=T.clipIntersection,O.displacementMap=T.displacementMap,O.displacementScale=T.displacementScale,O.displacementBias=T.displacementBias,O.wireframeLinewidth=T.wireframeLinewidth,O.linewidth=T.linewidth,G.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(i.properties.get(O).light=G),O}function E(w,T,G,H,O){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===Jn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld);let P=e.update(w),q=w.material;if(Array.isArray(q)){let Z=P.groups;for(let oe=0,W=Z.length;oe<W;oe++){let N=Z[oe],I=q[N.materialIndex];if(I&&I.visible){let U=y(w,I,H,O);w.onBeforeShadow(i,w,T,G,P,U,N),i.renderBufferDirect(G,null,P,U,w,N),w.onAfterShadow(i,w,T,G,P,U,N)}}}else if(q.visible){let Z=y(w,q,H,O);w.onBeforeShadow(i,w,T,G,P,Z,null),i.renderBufferDirect(G,null,P,Z,w,null),w.onAfterShadow(i,w,T,G,P,Z,null)}}let J=w.children;for(let P=0,q=J.length;P<q;P++)E(J[P],T,G,H,O)}function A(w){w.target.removeEventListener("dispose",A);for(let T in c){let G=c[T],H=w.target.uuid;H in G&&(G[H].dispose(),delete G[H])}}this.render=function(w,T,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let H=i.getRenderTarget(),O=i.getActiveCubeFace(),J=i.getActiveMipmapLevel(),P=i.state;P.setBlending(0),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let q=_!==Jn&&this.type===Jn,Z=_===Jn&&this.type!==Jn;for(let oe=0,W=w.length;oe<W;oe++){let N=w[oe],I=N.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);let U=I.getFrameExtents();if(r.multiply(U),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/U.x),r.x=s.x*U.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/U.y),r.y=s.y*U.y,I.mapSize.y=s.y)),I.map===null||q===!0||Z===!0){let V=this.type!==Jn?{minFilter:Rt,magFilter:Rt}:{};I.map!==null&&I.map.dispose(),I.map=new ni(r.x,r.y,V),I.map.texture.name=N.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();let D=I.getViewportCount();for(let V=0;V<D;V++){let se=I.getViewport(V);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),P.viewport(a),I.updateMatrices(N,V),n=I.getFrustum(),E(T,G,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===Jn&&g(I,G),I.needsUpdate=!1}_=this.type,m.needsUpdate=!1,i.setRenderTarget(H,O,J)}}function eg(i,e,t){let n=t.isWebGL2,r=new function(){let b=!1,re=new mt,$=null,K=new mt(0,0,0,0);return{setMask:function(le){$===le||b||(i.colorMask(le,le,le,le),$=le)},setLocked:function(le){b=le},setClear:function(le,de,fe,ge,Ae){Ae===!0&&(le*=ge,de*=ge,fe*=ge),re.set(le,de,fe,ge),K.equals(re)===!1&&(i.clearColor(le,de,fe,ge),K.copy(re))},reset:function(){b=!1,$=null,K.set(-1,0,0,0)}}},s=new function(){let b=!1,re=null,$=null,K=null;return{setTest:function(le){le?B(i.DEPTH_TEST):C(i.DEPTH_TEST)},setMask:function(le){re===le||b||(i.depthMask(le),re=le)},setFunc:function(le){if($!==le){switch(le){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}$=le}},setLocked:function(le){b=le},setClear:function(le){K!==le&&(i.clearDepth(le),K=le)},reset:function(){b=!1,re=null,$=null,K=null}}},a=new function(){let b=!1,re=null,$=null,K=null,le=null,de=null,fe=null,ge=null,Ae=null;return{setTest:function(ve){b||(ve?B(i.STENCIL_TEST):C(i.STENCIL_TEST))},setMask:function(ve){re===ve||b||(i.stencilMask(ve),re=ve)},setFunc:function(ve,xe,Pe){$===ve&&K===xe&&le===Pe||(i.stencilFunc(ve,xe,Pe),$=ve,K=xe,le=Pe)},setOp:function(ve,xe,Pe){de===ve&&fe===xe&&ge===Pe||(i.stencilOp(ve,xe,Pe),de=ve,fe=xe,ge=Pe)},setLocked:function(ve){b=ve},setClear:function(ve){Ae!==ve&&(i.clearStencil(ve),Ae=ve)},reset:function(){b=!1,re=null,$=null,K=null,le=null,de=null,fe=null,ge=null,Ae=null}}},o=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],p=null,f=!1,v=null,m=null,_=null,g=null,y=null,E=null,A=null,w=new Se(0,0,0),T=0,G=!1,H=null,O=null,J=null,P=null,q=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),oe=!1,W=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(N)[1]),oe=W>=1):N.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),oe=W>=2);let I=null,U={},D=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),se=new mt().fromArray(D),M=new mt().fromArray(V);function x(b,re,$,K){let le=new Uint8Array(4),de=i.createTexture();i.bindTexture(b,de),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<$;fe++)!n||b!==i.TEXTURE_3D&&b!==i.TEXTURE_2D_ARRAY?i.texImage2D(re+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage3D(re,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,le);return de}let R={};function B(b){c[b]!==!0&&(i.enable(b),c[b]=!0)}function C(b){c[b]!==!1&&(i.disable(b),c[b]=!1)}R[i.TEXTURE_2D]=x(i.TEXTURE_2D,i.TEXTURE_2D,1),R[i.TEXTURE_CUBE_MAP]=x(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(R[i.TEXTURE_2D_ARRAY]=x(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),R[i.TEXTURE_3D]=x(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),B(i.DEPTH_TEST),s.setFunc(3),j(!1),Y(1),B(i.CULL_FACE),z(0);let k={[er]:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};if(n)k[103]=i.MIN,k[104]=i.MAX;else{let b=e.get("EXT_blend_minmax");b!==null&&(k[103]=b.MIN_EXT,k[104]=b.MAX_EXT)}let F={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,[_c]:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,[xc]:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function z(b,re,$,K,le,de,fe,ge,Ae,ve){if(b!==0){if(f===!1&&(B(i.BLEND),f=!0),b===5)le=le||re,de=de||$,fe=fe||K,re===m&&le===y||(i.blendEquationSeparate(k[re],k[le]),m=re,y=le),$===_&&K===g&&de===E&&fe===A||(i.blendFuncSeparate(F[$],F[K],F[de],F[fe]),_=$,g=K,E=de,A=fe),ge.equals(w)!==!1&&Ae===T||(i.blendColor(ge.r,ge.g,ge.b,Ae),w.copy(ge),T=Ae),v=b,G=!1;else if(b!==v||ve!==G){if(m===er&&y===er||(i.blendEquation(i.FUNC_ADD),m=er,y=er),ve)switch(b){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}_=null,g=null,E=null,A=null,w.set(0,0,0),T=0,v=b,G=ve}}else f===!0&&(C(i.BLEND),f=!1)}function j(b){H!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),H=b)}function Y(b){b!==0?(B(i.CULL_FACE),b!==O&&(b===1?i.cullFace(i.BACK):b===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):C(i.CULL_FACE),O=b}function te(b,re,$){b?(B(i.POLYGON_OFFSET_FILL),P===re&&q===$||(i.polygonOffset(re,$),P=re,q=$)):C(i.POLYGON_OFFSET_FILL)}return{buffers:{color:r,depth:s,stencil:a},enable:B,disable:C,bindFramebuffer:function(b,re){return h[b]!==re&&(i.bindFramebuffer(b,re),h[b]=re,n&&(b===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=re),b===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=re)),!0)},drawBuffers:function(b,re){let $=u,K=!1;if(b)if($=d.get(re),$===void 0&&($=[],d.set(re,$)),b.isWebGLMultipleRenderTargets){let le=b.texture;if($.length!==le.length||$[0]!==i.COLOR_ATTACHMENT0){for(let de=0,fe=le.length;de<fe;de++)$[de]=i.COLOR_ATTACHMENT0+de;$.length=le.length,K=!0}}else $[0]!==i.COLOR_ATTACHMENT0&&($[0]=i.COLOR_ATTACHMENT0,K=!0);else $[0]!==i.BACK&&($[0]=i.BACK,K=!0);K&&(t.isWebGL2?i.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))},useProgram:function(b){return p!==b&&(i.useProgram(b),p=b,!0)},setBlending:z,setMaterial:function(b,re){b.side===2?C(i.CULL_FACE):B(i.CULL_FACE);let $=b.side===Ot;re&&($=!$),j($),b.blending===1&&b.transparent===!1?z(0):z(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),s.setFunc(b.depthFunc),s.setTest(b.depthTest),s.setMask(b.depthWrite),r.setMask(b.colorWrite);let K=b.stencilWrite;a.setTest(K),K&&(a.setMask(b.stencilWriteMask),a.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),a.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),te(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?B(i.SAMPLE_ALPHA_TO_COVERAGE):C(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:j,setCullFace:Y,setLineWidth:function(b){b!==J&&(oe&&i.lineWidth(b),J=b)},setPolygonOffset:te,setScissorTest:function(b){b?B(i.SCISSOR_TEST):C(i.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=i.TEXTURE0+Z-1),I!==b&&(i.activeTexture(b),I=b)},bindTexture:function(b,re,$){$===void 0&&($=I===null?i.TEXTURE0+Z-1:I);let K=U[$];K===void 0&&(K={type:void 0,texture:void 0},U[$]=K),K.type===b&&K.texture===re||(I!==$&&(i.activeTexture($),I=$),i.bindTexture(b,re||R[b]),K.type=b,K.texture=re)},unbindTexture:function(){let b=U[I];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},updateUBOMapping:function(b,re){let $=l.get(re);$===void 0&&($=new WeakMap,l.set(re,$));let K=$.get(b);K===void 0&&(K=i.getUniformBlockIndex(re,b.name),$.set(b,K))},uniformBlockBinding:function(b,re){let $=l.get(re).get(b);o.get(re)!==$&&(i.uniformBlockBinding(re,$,b.__bindingPointIndex),o.set(re,$))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},scissor:function(b){se.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),se.copy(b))},viewport:function(b){M.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),M.copy(b))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},I=null,U={},h={},d=new WeakMap,u=[],p=null,f=!1,v=null,m=null,_=null,g=null,y=null,E=null,A=null,w=new Se(0,0,0),T=0,G=!1,H=null,O=null,J=null,P=null,q=null,se.set(0,0,i.canvas.width,i.canvas.height),M.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}}}function tg(i,e,t,n,r,s,a){let o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator!="undefined"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(M,x){return p?new OffscreenCanvas(M,x):po("canvas")}function v(M,x,R,B){let C=1;if((M.width>B||M.height>B)&&(C=B/Math.max(M.width,M.height)),C<1||x===!0){if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){let k=x?Ac:Math.floor,F=k(C*M.width),z=k(C*M.height);d===void 0&&(d=f(F,z));let j=R?f(F,z):d;return j.width=F,j.height=z,j.getContext("2d").drawImage(M,0,0,F,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+F+"x"+z+")."),j}return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M}return M}function m(M){return hd(M.width)&&hd(M.height)}function _(M,x){return M.generateMipmaps&&x&&M.minFilter!==Rt&&M.minFilter!==En}function g(M){i.generateMipmap(M)}function y(M,x,R,B,C=!1){if(o===!1)return x;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let k=x;if(x===i.RED&&(R===i.FLOAT&&(k=i.R32F),R===i.HALF_FLOAT&&(k=i.R16F),R===i.UNSIGNED_BYTE&&(k=i.R8)),x===i.RED_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.R8UI),R===i.UNSIGNED_SHORT&&(k=i.R16UI),R===i.UNSIGNED_INT&&(k=i.R32UI),R===i.BYTE&&(k=i.R8I),R===i.SHORT&&(k=i.R16I),R===i.INT&&(k=i.R32I)),x===i.RG&&(R===i.FLOAT&&(k=i.RG32F),R===i.HALF_FLOAT&&(k=i.RG16F),R===i.UNSIGNED_BYTE&&(k=i.RG8)),x===i.RGBA){let F=C?lo:Je.getTransfer(B);R===i.FLOAT&&(k=i.RGBA32F),R===i.HALF_FLOAT&&(k=i.RGBA16F),R===i.UNSIGNED_BYTE&&(k=F===Qe?i.SRGB8_ALPHA8:i.RGBA8),R===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),R===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return k!==i.R16F&&k!==i.R32F&&k!==i.RG16F&&k!==i.RG32F&&k!==i.RGBA16F&&k!==i.RGBA32F||e.get("EXT_color_buffer_float"),k}function E(M,x,R){return _(M,R)===!0||M.isFramebufferTexture&&M.minFilter!==Rt&&M.minFilter!==En?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function A(M){return M===Rt||M===Fu||M===Fl?i.NEAREST:i.LINEAR}function w(M){let x=M.target;x.removeEventListener("dispose",w),function(R){let B=n.get(R);if(B.__webglInit===void 0)return;let C=R.source,k=u.get(C);if(k){let F=k[B.__cacheKey];F.usedTimes--,F.usedTimes===0&&G(R),Object.keys(k).length===0&&u.delete(C)}n.remove(R)}(x),x.isVideoTexture&&h.delete(x)}function T(M){let x=M.target;x.removeEventListener("dispose",T),function(R){let B=R.texture,C=n.get(R),k=n.get(B);if(k.__webglTexture!==void 0&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(C.__webglFramebuffer[F]))for(let z=0;z<C.__webglFramebuffer[F].length;z++)i.deleteFramebuffer(C.__webglFramebuffer[F][z]);else i.deleteFramebuffer(C.__webglFramebuffer[F]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[F])}else{if(Array.isArray(C.__webglFramebuffer))for(let F=0;F<C.__webglFramebuffer.length;F++)i.deleteFramebuffer(C.__webglFramebuffer[F]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let F=0;F<C.__webglColorRenderbuffer.length;F++)C.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[F]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let F=0,z=B.length;F<z;F++){let j=n.get(B[F]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(B[F])}n.remove(B),n.remove(R)}(x)}function G(M){let x=n.get(M);i.deleteTexture(x.__webglTexture);let R=M.source;delete u.get(R)[x.__cacheKey],a.memory.textures--}let H=0;function O(M,x){let R=n.get(M);if(M.isVideoTexture&&function(B){let C=a.render.frame;h.get(B)!==C&&(h.set(B,C),B.update())}(M),M.isRenderTargetTexture===!1&&M.version>0&&R.__version!==M.version){let B=M.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(B.complete!==!1)return void W(R,M,x);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,R.__webglTexture,i.TEXTURE0+x)}let J={[Ti]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[bc]:i.MIRRORED_REPEAT},P={[Rt]:i.NEAREST,[Fu]:i.NEAREST_MIPMAP_NEAREST,[Fl]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[df]:i.LINEAR_MIPMAP_NEAREST,[so]:i.LINEAR_MIPMAP_LINEAR},q={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Z(M,x,R){if(R?(i.texParameteri(M,i.TEXTURE_WRAP_S,J[x.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,J[x.wrapT]),M!==i.TEXTURE_3D&&M!==i.TEXTURE_2D_ARRAY||i.texParameteri(M,i.TEXTURE_WRAP_R,J[x.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,P[x.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,P[x.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),M!==i.TEXTURE_3D&&M!==i.TEXTURE_2D_ARRAY||i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),x.wrapS===Kn&&x.wrapT===Kn||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,A(x.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Rt&&x.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,q[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let B=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Rt||x.minFilter!==Fl&&x.minFilter!==so||x.type===Mi&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Vs&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(M,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function oe(M,x){let R=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",w));let B=x.source,C=u.get(B);C===void 0&&(C={},u.set(B,C));let k=function(F){let z=[];return z.push(F.wrapS),z.push(F.wrapT),z.push(F.wrapR||0),z.push(F.magFilter),z.push(F.minFilter),z.push(F.anisotropy),z.push(F.internalFormat),z.push(F.format),z.push(F.type),z.push(F.generateMipmaps),z.push(F.premultiplyAlpha),z.push(F.flipY),z.push(F.unpackAlignment),z.push(F.colorSpace),z.join()}(x);if(k!==M.__cacheKey){C[k]===void 0&&(C[k]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,R=!0),C[k].usedTimes++;let F=C[M.__cacheKey];F!==void 0&&(C[M.__cacheKey].usedTimes--,F.usedTimes===0&&G(x)),M.__cacheKey=k,M.__webglTexture=C[k].texture}return R}function W(M,x,R){let B=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(B=i.TEXTURE_3D);let C=oe(M,x),k=x.source;t.bindTexture(B,M.__webglTexture,i.TEXTURE0+R);let F=n.get(k);if(k.version!==F.__version||C===!0){t.activeTexture(i.TEXTURE0+R);let z=Je.getPrimaries(Je.workingColorSpace),j=x.colorSpace===Dn?null:Je.getPrimaries(x.colorSpace),Y=x.colorSpace===Dn||z===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let te=function(xe){return!o&&(xe.wrapS!==Kn||xe.wrapT!==Kn||xe.minFilter!==Rt&&xe.minFilter!==En)}(x)&&m(x.image)===!1,b=v(x.image,te,!1,r.maxTextureSize);b=se(x,b);let re=m(b)||o,$=s.convert(x.format,x.colorSpace),K,le=s.convert(x.type),de=y(x.internalFormat,$,le,x.colorSpace,x.isVideoTexture);Z(B,x,re);let fe=x.mipmaps,ge=o&&x.isVideoTexture!==!0&&de!==Ep,Ae=F.__version===void 0||C===!0,ve=E(x,b,re);if(x.isDepthTexture)de=i.DEPTH_COMPONENT,o?de=x.type===Mi?i.DEPTH_COMPONENT32F:x.type===xi?i.DEPTH_COMPONENT24:x.type===rr?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT16:x.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===sr&&de===i.DEPTH_COMPONENT&&x.type!==_h&&x.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=xi,le=s.convert(x.type)),x.format===as&&de===i.DEPTH_COMPONENT&&(de=i.DEPTH_STENCIL,x.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=rr,le=s.convert(x.type))),Ae&&(ge?t.texStorage2D(i.TEXTURE_2D,1,de,b.width,b.height):t.texImage2D(i.TEXTURE_2D,0,de,b.width,b.height,0,$,le,null));else if(x.isDataTexture)if(fe.length>0&&re){ge&&Ae&&t.texStorage2D(i.TEXTURE_2D,ve,de,fe[0].width,fe[0].height);for(let xe=0,Pe=fe.length;xe<Pe;xe++)K=fe[xe],ge?t.texSubImage2D(i.TEXTURE_2D,xe,0,0,K.width,K.height,$,le,K.data):t.texImage2D(i.TEXTURE_2D,xe,de,K.width,K.height,0,$,le,K.data);x.generateMipmaps=!1}else ge?(Ae&&t.texStorage2D(i.TEXTURE_2D,ve,de,b.width,b.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,$,le,b.data)):t.texImage2D(i.TEXTURE_2D,0,de,b.width,b.height,0,$,le,b.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ge&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,de,fe[0].width,fe[0].height,b.depth);for(let xe=0,Pe=fe.length;xe<Pe;xe++)K=fe[xe],x.format!==ln?$!==null?ge?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,K.width,K.height,b.depth,$,K.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,de,K.width,K.height,b.depth,0,K.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,K.width,K.height,b.depth,$,le,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,de,K.width,K.height,b.depth,0,$,le,K.data)}else{ge&&Ae&&t.texStorage2D(i.TEXTURE_2D,ve,de,fe[0].width,fe[0].height);for(let xe=0,Pe=fe.length;xe<Pe;xe++)K=fe[xe],x.format!==ln?$!==null?ge?t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,K.width,K.height,$,K.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,de,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?t.texSubImage2D(i.TEXTURE_2D,xe,0,0,K.width,K.height,$,le,K.data):t.texImage2D(i.TEXTURE_2D,xe,de,K.width,K.height,0,$,le,K.data)}else if(x.isDataArrayTexture)ge?(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,de,b.width,b.height,b.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,b.width,b.height,b.depth,$,le,b.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,b.width,b.height,b.depth,0,$,le,b.data);else if(x.isData3DTexture)ge?(Ae&&t.texStorage3D(i.TEXTURE_3D,ve,de,b.width,b.height,b.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,b.width,b.height,b.depth,$,le,b.data)):t.texImage3D(i.TEXTURE_3D,0,de,b.width,b.height,b.depth,0,$,le,b.data);else if(x.isFramebufferTexture){if(Ae)if(ge)t.texStorage2D(i.TEXTURE_2D,ve,de,b.width,b.height);else{let xe=b.width,Pe=b.height;for(let Et=0;Et<ve;Et++)t.texImage2D(i.TEXTURE_2D,Et,de,xe,Pe,0,$,le,null),xe>>=1,Pe>>=1}}else if(fe.length>0&&re){ge&&Ae&&t.texStorage2D(i.TEXTURE_2D,ve,de,fe[0].width,fe[0].height);for(let xe=0,Pe=fe.length;xe<Pe;xe++)K=fe[xe],ge?t.texSubImage2D(i.TEXTURE_2D,xe,0,0,$,le,K):t.texImage2D(i.TEXTURE_2D,xe,de,$,le,K);x.generateMipmaps=!1}else ge?(Ae&&t.texStorage2D(i.TEXTURE_2D,ve,de,b.width,b.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,$,le,b)):t.texImage2D(i.TEXTURE_2D,0,de,$,le,b);_(x,re)&&g(B),F.__version=k.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function N(M,x,R,B,C,k){let F=s.convert(R.format,R.colorSpace),z=s.convert(R.type),j=y(R.internalFormat,F,z,R.colorSpace);if(!n.get(x).__hasExternalTextures){let Y=Math.max(1,x.width>>k),te=Math.max(1,x.height>>k);C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?t.texImage3D(C,k,j,Y,te,x.depth,0,F,z,null):t.texImage2D(C,k,j,Y,te,0,F,z,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),V(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,C,n.get(R).__webglTexture,0,D(x)):(C===i.TEXTURE_2D||C>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&C<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,C,n.get(R).__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function I(M,x,R){if(i.bindRenderbuffer(i.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let B=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(R||V(x)){let C=x.depthTexture;C&&C.isDepthTexture&&(C.type===Mi?B=i.DEPTH_COMPONENT32F:C.type===xi&&(B=i.DEPTH_COMPONENT24));let k=D(x);V(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k,B,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,k,B,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,B,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){let B=D(x);R&&V(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,B,i.DEPTH24_STENCIL8,x.width,x.height):V(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{let B=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let C=0;C<B.length;C++){let k=B[C],F=s.convert(k.format,k.colorSpace),z=s.convert(k.type),j=y(k.internalFormat,F,z,k.colorSpace),Y=D(x);R&&V(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,j,x.width,x.height):V(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Y,j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function U(M){let x=n.get(M),R=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");(function(B,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,B),!C.depthTexture||!C.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(C.depthTexture).__webglTexture&&C.depthTexture.image.width===C.width&&C.depthTexture.image.height===C.height||(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),O(C.depthTexture,0);let k=n.get(C.depthTexture).__webglTexture,F=D(C);if(C.depthTexture.format===sr)V(C)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0);else{if(C.depthTexture.format!==as)throw new Error("Unknown depthTexture format");V(C)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0)}})(x.__webglFramebuffer,M)}else if(R){x.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[B]),x.__webglDepthbuffer[B]=i.createRenderbuffer(),I(x.__webglDepthbuffer[B],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),I(x.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function D(M){return Math.min(r.maxSamples,M.samples)}function V(M){let x=n.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function se(M,x){let R=M.colorSpace,B=M.format,C=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===wc||R!==ti&&R!==Dn&&(Je.getTransfer(R)===Qe?o===!1?e.has("EXT_sRGB")===!0&&B===ln?(M.format=wc,M.minFilter=En,M.generateMipmaps=!1):x=mo.sRGBToLinear(x):B===ln&&C===ir||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),x}this.allocateTextureUnit=function(){let M=H;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),H+=1,M},this.resetTextureUnits=function(){H=0},this.setTexture2D=O,this.setTexture2DArray=function(M,x){let R=n.get(M);M.version>0&&R.__version!==M.version?W(R,M,x):t.bindTexture(i.TEXTURE_2D_ARRAY,R.__webglTexture,i.TEXTURE0+x)},this.setTexture3D=function(M,x){let R=n.get(M);M.version>0&&R.__version!==M.version?W(R,M,x):t.bindTexture(i.TEXTURE_3D,R.__webglTexture,i.TEXTURE0+x)},this.setTextureCube=function(M,x){let R=n.get(M);M.version>0&&R.__version!==M.version?function(B,C,k){if(C.image.length!==6)return;let F=oe(B,C),z=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+k);let j=n.get(z);if(z.version!==j.__version||F===!0){t.activeTexture(i.TEXTURE0+k);let Y=Je.getPrimaries(Je.workingColorSpace),te=C.colorSpace===Dn?null:Je.getPrimaries(C.colorSpace),b=C.colorSpace===Dn||Y===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,b);let re=C.isCompressedTexture||C.image[0].isCompressedTexture,$=C.image[0]&&C.image[0].isDataTexture,K=[];for(let Ee=0;Ee<6;Ee++)K[Ee]=re||$?$?C.image[Ee].image:C.image[Ee]:v(C.image[Ee],!1,!0,r.maxCubemapSize),K[Ee]=se(C,K[Ee]);let le=K[0],de=m(le)||o,fe=s.convert(C.format,C.colorSpace),ge=s.convert(C.type),Ae=y(C.internalFormat,fe,ge,C.colorSpace),ve=o&&C.isVideoTexture!==!0,xe=j.__version===void 0||F===!0,Pe,Et=E(C,le,de);if(Z(i.TEXTURE_CUBE_MAP,C,de),re){ve&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Ae,le.width,le.height);for(let Ee=0;Ee<6;Ee++){Pe=K[Ee].mipmaps;for(let He=0;He<Pe.length;He++){let Ne=Pe[He];C.format!==ln?fe!==null?ve?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He,0,0,Ne.width,Ne.height,fe,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He,Ae,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He,0,0,Ne.width,Ne.height,fe,ge,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He,Ae,Ne.width,Ne.height,0,fe,ge,Ne.data)}}}else{Pe=C.mipmaps,ve&&xe&&(Pe.length>0&&Et++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Ae,K[0].width,K[0].height));for(let Ee=0;Ee<6;Ee++)if($){ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,K[Ee].width,K[Ee].height,fe,ge,K[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Ae,K[Ee].width,K[Ee].height,0,fe,ge,K[Ee].data);for(let He=0;He<Pe.length;He++){let Ne=Pe[He].image[Ee].image;ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He+1,0,0,Ne.width,Ne.height,fe,ge,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He+1,Ae,Ne.width,Ne.height,0,fe,ge,Ne.data)}}else{ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,fe,ge,K[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Ae,fe,ge,K[Ee]);for(let He=0;He<Pe.length;He++){let Ne=Pe[He];ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He+1,0,0,fe,ge,Ne.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He+1,Ae,fe,ge,Ne.image[Ee])}}}_(C,de)&&g(i.TEXTURE_CUBE_MAP),j.__version=z.version,C.onUpdate&&C.onUpdate(C)}B.__version=C.version}(R,M,x):t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+x)},this.rebindTextures=function(M,x,R){let B=n.get(M);x!==void 0&&N(B.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),R!==void 0&&U(M)},this.setupRenderTarget=function(M){let x=M.texture,R=n.get(M),B=n.get(x);M.addEventListener("dispose",T),M.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=x.version,a.memory.textures++);let C=M.isWebGLCubeRenderTarget===!0,k=M.isWebGLMultipleRenderTargets===!0,F=m(M)||o;if(C){R.__webglFramebuffer=[];for(let z=0;z<6;z++)if(o&&x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer[z]=[];for(let j=0;j<x.mipmaps.length;j++)R.__webglFramebuffer[z][j]=i.createFramebuffer()}else R.__webglFramebuffer[z]=i.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer=[];for(let z=0;z<x.mipmaps.length;z++)R.__webglFramebuffer[z]=i.createFramebuffer()}else R.__webglFramebuffer=i.createFramebuffer();if(k)if(r.drawBuffers){let z=M.texture;for(let j=0,Y=z.length;j<Y;j++){let te=n.get(z[j]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&V(M)===!1){let z=k?x:[x];R.__webglMultisampledFramebuffer=i.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let j=0;j<z.length;j++){let Y=z[j];R.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,R.__webglColorRenderbuffer[j]);let te=s.convert(Y.format,Y.colorSpace),b=s.convert(Y.type),re=y(Y.internalFormat,te,b,Y.colorSpace,M.isXRRenderTarget===!0),$=D(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,re,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,R.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(R.__webglDepthRenderbuffer=i.createRenderbuffer(),I(R.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(C){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Z(i.TEXTURE_CUBE_MAP,x,F);for(let z=0;z<6;z++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)N(R.__webglFramebuffer[z][j],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,j);else N(R.__webglFramebuffer[z],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);_(x,F)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(k){let z=M.texture;for(let j=0,Y=z.length;j<Y;j++){let te=z[j],b=n.get(te);t.bindTexture(i.TEXTURE_2D,b.__webglTexture),Z(i.TEXTURE_2D,te,F),N(R.__webglFramebuffer,M,te,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,0),_(te,F)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let z=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?z=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(z,B.__webglTexture),Z(z,x,F),o&&x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)N(R.__webglFramebuffer[j],M,x,i.COLOR_ATTACHMENT0,z,j);else N(R.__webglFramebuffer,M,x,i.COLOR_ATTACHMENT0,z,0);_(x,F)&&g(z),t.unbindTexture()}M.depthBuffer&&U(M)},this.updateRenderTargetMipmap=function(M){let x=m(M)||o,R=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let B=0,C=R.length;B<C;B++){let k=R[B];if(_(k,x)){let F=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,z=n.get(k).__webglTexture;t.bindTexture(F,z),g(F),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(M){if(o&&M.samples>0&&V(M)===!1){let x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],R=M.width,B=M.height,C=i.COLOR_BUFFER_BIT,k=[],F=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=n.get(M),j=M.isWebGLMultipleRenderTargets===!0;if(j)for(let Y=0;Y<x.length;Y++)t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,z.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,z.__webglFramebuffer);for(let Y=0;Y<x.length;Y++){k.push(i.COLOR_ATTACHMENT0+Y),M.depthBuffer&&k.push(F);let te=z.__ignoreDepthValues!==void 0&&z.__ignoreDepthValues;if(te===!1&&(M.depthBuffer&&(C|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(C|=i.STENCIL_BUFFER_BIT)),j&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,z.__webglColorRenderbuffer[Y]),te===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[F]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[F])),j){let b=n.get(x[Y]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,b,0)}i.blitFramebuffer(0,0,R,B,0,0,R,B,C,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,k)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let Y=0;Y<x.length;Y++){t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);let te=n.get(x[Y]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,z.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=N,this.useMultisampledRTT=V}function ng(i,e,t){let n=t.isWebGL2;return{convert:function(r,s=""){let a,o=Je.getTransfer(s);if(r===ir)return i.UNSIGNED_BYTE;if(r===vp)return i.UNSIGNED_SHORT_4_4_4_4;if(r===yp)return i.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return i.BYTE;if(r===1011)return i.SHORT;if(r===_h)return i.UNSIGNED_SHORT;if(r===gp)return i.INT;if(r===xi)return i.UNSIGNED_INT;if(r===Mi)return i.FLOAT;if(r===Vs)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return i.ALPHA;if(r===ln)return i.RGBA;if(r===1024)return i.LUMINANCE;if(r===1025)return i.LUMINANCE_ALPHA;if(r===sr)return i.DEPTH_COMPONENT;if(r===as)return i.DEPTH_STENCIL;if(r===wc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===1028)return i.RED;if(r===_p)return i.RED_INTEGER;if(r===1030)return i.RG;if(r===xp)return i.RG_INTEGER;if(r===Mp)return i.RGBA_INTEGER;if(r===Ul||r===Nl||r===Ol||r===Bl)if(o===Qe){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(r===Ul)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(r===Ul)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ol)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(r===Uu||r===Nu||r===Ou||r===Bu){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(r===Uu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ou)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(r===Ep)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===zu||r===Hu){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(r===zu)return o===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Hu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(r===ku||r===Gu||r===Vu||r===Wu||r===Xu||r===ju||r===qu||r===Yu||r===$u||r===Zu||r===Ju||r===Ku||r===Qu||r===ed){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(r===ku)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ju)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$u)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ju)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ku)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ed)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(r===zl||r===td||r===nd){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(r===zl)return o===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===td)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(r===36283||r===id||r===rd||r===sd){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(r===zl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===id)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return r===rr?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}}}var Hc=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},be=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ig={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),_=this._getHandJoint(c,v);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&u>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},kc=class extends Ai{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,f=null,v=t.getContextAttributes(),m=null,_=null,g=[],y=[],E=new he,A=null,w=new kt;w.layers.enable(1),w.viewport=new mt;let T=new kt;T.layers.enable(2),T.viewport=new mt;let G=[w,T],H=new Hc;H.layers.enable(1),H.layers.enable(2);let O=null,J=null;function P(D){let V=y.indexOf(D.inputSource);if(V===-1)return;let se=g[V];se!==void 0&&(se.update(D.inputSource,D.frame,c||a),se.dispatchEvent({type:D.type,data:D.inputSource}))}function q(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",Z);for(let D=0;D<g.length;D++){let V=y[D];V!==null&&(y[D]=null,g[D].disconnect(V))}O=null,J=null,e.setRenderTarget(m),p=null,u=null,d=null,r=null,_=null,U.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}function Z(D){for(let V=0;V<D.removed.length;V++){let se=D.removed[V],M=y.indexOf(se);M>=0&&(y[M]=null,g[M].disconnect(se))}for(let V=0;V<D.added.length;V++){let se=D.added[V],M=y.indexOf(se);if(M===-1){for(let R=0;R<g.length;R++){if(R>=y.length){y.push(se),M=R;break}if(y[R]===null){y[R]=se,M=R;break}}if(M===-1)break}let x=g[M];x&&x.connect(se)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let V=g[D];return V===void 0&&(V=new zs,g[D]=V),V.getTargetRaySpace()},this.getControllerGrip=function(D){let V=g[D];return V===void 0&&(V=new zs,g[D]=V),V.getGripSpace()},this.getHand=function(D){let V=g[D];return V===void 0&&(V=new zs,g[D]=V),V.getHandSpace()},this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",q),r.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let V={antialias:r.renderState.layers!==void 0||v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ni(p.framebufferWidth,p.framebufferHeight,{format:ln,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let V=null,se=null,M=null;v.depth&&(M=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=v.stencil?as:sr,se=v.stencil?rr:xi);let x={colorFormat:t.RGBA8,depthFormat:M,scaleFactor:s};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(x),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new ni(u.textureWidth,u.textureHeight,{format:ln,type:ir,depthTexture:new Eo(u.textureWidth,u.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0}),e.properties.get(_).__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),U.setContext(r),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};let oe=new S,W=new S;function N(D,V){V===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(V.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;H.near=T.near=w.near=D.near,H.far=T.far=w.far=D.far,O===H.near&&J===H.far||(r.updateRenderState({depthNear:H.near,depthFar:H.far}),O=H.near,J=H.far);let V=D.parent,se=H.cameras;N(H,V);for(let M=0;M<se.length;M++)N(se[M],V);se.length===2?function(M,x,R){oe.setFromMatrixPosition(x.matrixWorld),W.setFromMatrixPosition(R.matrixWorld);let B=oe.distanceTo(W),C=x.projectionMatrix.elements,k=R.projectionMatrix.elements,F=C[14]/(C[10]-1),z=C[14]/(C[10]+1),j=(C[9]+1)/C[5],Y=(C[9]-1)/C[5],te=(C[8]-1)/C[0],b=(k[8]+1)/k[0],re=F*te,$=F*b,K=B/(-te+b),le=K*-te;x.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(le),M.translateZ(K),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert();let de=F+K,fe=z+K,ge=re-le,Ae=$+(B-le),ve=j*z/fe*de,xe=Y*z/fe*de;M.projectionMatrix.makePerspective(ge,Ae,ve,xe,de,fe),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}(H,w,T):H.projectionMatrix.copy(w.projectionMatrix),function(M,x,R){R===null?M.matrix.copy(x.matrixWorld):(M.matrix.copy(R.matrixWorld),M.matrix.invert(),M.matrix.multiply(x.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(x.projectionMatrix),M.projectionMatrixInverse.copy(x.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=2*Tc*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)}(D,H,V)},this.getCamera=function(){return H},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(D){l=D,u!==null&&(u.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)};let I=null,U=new Ap;U.setAnimationLoop(function(D,V){if(h=V.getViewerPose(c||a),f=V,h!==null){let se=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let M=!1;se.length!==H.cameras.length&&(H.cameras.length=0,M=!0);for(let x=0;x<se.length;x++){let R=se[x],B=null;if(p!==null)B=p.getViewport(R);else{let k=d.getViewSubImage(u,R);B=k.viewport,x===0&&(e.setRenderTargetTextures(_,k.colorTexture,u.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(_))}let C=G[x];C===void 0&&(C=new kt,C.layers.enable(x),C.viewport=new mt,G[x]=C),C.matrix.fromArray(R.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(R.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(B.x,B.y,B.width,B.height),x===0&&(H.matrix.copy(C.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),M===!0&&H.cameras.push(C)}}for(let se=0;se<g.length;se++){let M=y[se],x=g[se];M!==null&&x!==void 0&&x.update(M,V,c||a)}I&&I(D,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),f=null}),this.setAnimationLoop=function(D){I=D},this.dispose=function(){}}};function rg(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Ot&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Ot&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap){r.lightMap.value=s.lightMap;let o=i._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,r.lightMapTransform)}s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Tp(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(r,s)):s.isMeshPhongMaterial?(n(r,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(r,s)):s.isMeshStandardMaterial?(n(r,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(r,s),s.isMeshPhysicalMaterial&&function(c,h,d){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ot&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(r,s,l)):s.isMeshMatcapMaterial?(n(r,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),function(c,h){let d=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far}(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(r,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(r,s)):s.isPointsMaterial?function(c,h,d,u){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*d,c.scale.value=.5*u,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function sg(i,e,t,n){let r={},s={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(d,u,p,f){let v=d.value,m=u+"_"+p;if(f[m]===void 0)return f[m]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let _=f[m];if(typeof v=="number"||typeof v=="boolean"){if(_!==v)return f[m]=v,!0}else if(_.equals(v)===!1)return _.copy(v),!0}return!1}function c(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[u.id]),delete r[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;n.uniformBlockBinding(d,p)},update:function(d,u){let p=r[d.id];p===void 0&&(function(m){let _=m.uniforms,g=0,y=16;for(let A=0,w=_.length;A<w;A++){let T=Array.isArray(_[A])?_[A]:[_[A]];for(let G=0,H=T.length;G<H;G++){let O=T[G],J=Array.isArray(O.value)?O.value:[O.value];for(let P=0,q=J.length;P<q;P++){let Z=c(J[P]),oe=g%y;oe!==0&&y-oe<Z.boundary&&(g+=y-oe),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=g,g+=Z.storage}}}let E=g%y;E>0&&(g+=y-E),m.__size=g,m.__cache={}}(d),p=function(m){let _=function(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();m.__bindingPointIndex=_;let g=i.createBuffer(),y=m.__size,E=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,y,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,g),g}(d),r[d.id]=p,d.addEventListener("dispose",h));let f=u.program;n.updateUBOMapping(d,f);let v=e.render.frame;s[d.id]!==v&&(function(m){let _=r[m.id],g=m.uniforms,y=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,A=g.length;E<A;E++){let w=Array.isArray(g[E])?g[E]:[g[E]];for(let T=0,G=w.length;T<G;T++){let H=w[T];if(l(H,E,T,y)===!0){let O=H.__offset,J=Array.isArray(H.value)?H.value:[H.value],P=0;for(let q=0;q<J.length;q++){let Z=J[q],oe=c(Z);typeof Z=="number"||typeof Z=="boolean"?(H.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,O+P,H.__data)):Z.isMatrix3?(H.__data[0]=Z.elements[0],H.__data[1]=Z.elements[1],H.__data[2]=Z.elements[2],H.__data[3]=0,H.__data[4]=Z.elements[3],H.__data[5]=Z.elements[4],H.__data[6]=Z.elements[5],H.__data[7]=0,H.__data[8]=Z.elements[6],H.__data[9]=Z.elements[7],H.__data[10]=Z.elements[8],H.__data[11]=0):(Z.toArray(H.__data,P),P+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}(d),s[d.id]=v)},dispose:function(){for(let d in r)i.deleteBuffer(r[d]);a=[],r={},s={}}}}var js=class{constructor(e={}){let{canvas:t=mf(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e,u;this.isWebGLRenderer=!0,u=n!==null?n.getContextAttributes().alpha:a;let p=new Uint32Array(4),f=new Int32Array(4),v=null,m=null,_=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=bi,this.toneMappingExposure=1;let y=this,E=!1,A=0,w=0,T=null,G=-1,H=null,O=new mt,J=new mt,P=null,q=new Se(0),Z=0,oe=t.width,W=t.height,N=1,I=null,U=null,D=new mt(0,0,oe,W),V=new mt(0,0,oe,W),se=!1,M=new hs,x=!1,R=!1,B=null,C=new Ce,k=new he,F=new S,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function j(){return T===null?N:1}let Y,te,b,re,$,K,le,de,fe,ge,Ae,ve,xe,Pe,Et,Ee,He,Ne,aa,xr,oa,nn,$t,Mr,ee=n;function la(L,Q){for(let ne=0;ne<L.length;ne++){let ce=L[ne],ie=t.getContext(ce,Q);if(ie!==null)return ie}return null}try{let L={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yc}`),t.addEventListener("webglcontextlost",Yh,!1),t.addEventListener("webglcontextrestored",$h,!1),t.addEventListener("webglcontextcreationerror",Zh,!1),ee===null){let Q=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&Q.shift(),ee=la(Q,L),ee===null)throw la(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&ee instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ee.getShaderPrecisionFormat===void 0&&(ee.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}function _s(){Y=new Hf(ee),te=new Nf(ee,Y,e),Y.init(te),nn=new ng(ee,Y,te),b=new eg(ee,Y,te),re=new Vf(ee),$=new X0,K=new tg(ee,Y,b,$,te,nn,re),le=new Bf(y),de=new zf(y),fe=new If(ee,te),$t=new Ff(ee,Y,fe,te),ge=new kf(ee,fe,re,$t),Ae=new qf(ee,ge,fe,re),aa=new jf(ee,te,K),Ee=new Of($),ve=new W0(y,le,de,Y,te,$t,Ee),xe=new rg(y,$),Pe=new q0,Et=new K0(Y,te),Ne=new Df(y,le,de,b,Ae,u,l),He=new Q0(y,Ae,te),Mr=new sg(ee,re,te,b),xr=new Uf(ee,Y,re,te),oa=new Gf(ee,Y,re,te),re.programs=ve.programs,y.capabilities=te,y.extensions=Y,y.properties=$,y.renderLists=Pe,y.shadowMap=He,y.state=b,y.info=re}_s();let Dt=new kc(y,ee);function Yh(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function $h(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let L=re.autoReset,Q=He.enabled,ne=He.autoUpdate,ce=He.needsUpdate,ie=He.type;_s(),re.autoReset=L,He.enabled=Q,He.autoUpdate=ne,He.needsUpdate=ce,He.type=ie}function Zh(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Jh(L){let Q=L.target;Q.removeEventListener("dispose",Jh),function(ne){(function(ce){let ie=$.get(ce).programs;ie!==void 0&&(ie.forEach(function(pe){ve.releaseProgram(pe)}),ce.isShaderMaterial&&ve.releaseShaderCache(ce))})(ne),$.remove(ne)}(Q)}function Kh(L,Q,ne){L.transparent===!0&&L.side===2&&L.forceSinglePass===!1?(L.side=Ot,L.needsUpdate=!0,ha(L,Q,ne),L.side=wi,L.needsUpdate=!0,ha(L,Q,ne),L.side=2):ha(L,Q,ne)}this.xr=Dt,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){let L=Y.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Y.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(L){L!==void 0&&(N=L,this.setSize(oe,W,!1))},this.getSize=function(L){return L.set(oe,W)},this.setSize=function(L,Q,ne=!0){Dt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(oe=L,W=Q,t.width=Math.floor(L*N),t.height=Math.floor(Q*N),ne===!0&&(t.style.width=L+"px",t.style.height=Q+"px"),this.setViewport(0,0,L,Q))},this.getDrawingBufferSize=function(L){return L.set(oe*N,W*N).floor()},this.setDrawingBufferSize=function(L,Q,ne){oe=L,W=Q,N=ne,t.width=Math.floor(L*ne),t.height=Math.floor(Q*ne),this.setViewport(0,0,L,Q)},this.getCurrentViewport=function(L){return L.copy(O)},this.getViewport=function(L){return L.copy(D)},this.setViewport=function(L,Q,ne,ce){L.isVector4?D.set(L.x,L.y,L.z,L.w):D.set(L,Q,ne,ce),b.viewport(O.copy(D).multiplyScalar(N).floor())},this.getScissor=function(L){return L.copy(V)},this.setScissor=function(L,Q,ne,ce){L.isVector4?V.set(L.x,L.y,L.z,L.w):V.set(L,Q,ne,ce),b.scissor(J.copy(V).multiplyScalar(N).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(L){b.setScissorTest(se=L)},this.setOpaqueSort=function(L){I=L},this.setTransparentSort=function(L){U=L},this.getClearColor=function(L){return L.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(L=!0,Q=!0,ne=!0){let ce=0;if(L){let ie=!1;if(T!==null){let pe=T.texture.format;ie=pe===Mp||pe===xp||pe===_p}if(ie){let pe=T.texture.type,we=pe===ir||pe===xi||pe===_h||pe===rr||pe===vp||pe===yp,Te=Ne.getClearColor(),Ie=Ne.getClearAlpha(),Ue=Te.r,Oe=Te.g,Be=Te.b;we?(p[0]=Ue,p[1]=Oe,p[2]=Be,p[3]=Ie,ee.clearBufferuiv(ee.COLOR,0,p)):(f[0]=Ue,f[1]=Oe,f[2]=Be,f[3]=Ie,ee.clearBufferiv(ee.COLOR,0,f))}else ce|=ee.COLOR_BUFFER_BIT}Q&&(ce|=ee.DEPTH_BUFFER_BIT),ne&&(ce|=ee.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Yh,!1),t.removeEventListener("webglcontextrestored",$h,!1),t.removeEventListener("webglcontextcreationerror",Zh,!1),Pe.dispose(),Et.dispose(),$.dispose(),le.dispose(),de.dispose(),Ae.dispose(),$t.dispose(),Mr.dispose(),ve.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Qh),Dt.removeEventListener("sessionend",eu),B&&(B.dispose(),B=null),Bi.stop()},this.renderBufferDirect=function(L,Q,ne,ce,ie,pe){Q===null&&(Q=z);let we=ie.isMesh&&ie.matrixWorld.determinant()<0,Te=function(yt,rn,Wt,ze,ke){rn.isScene!==!0&&(rn=z),K.resetTextureUnits();let xs=rn.fog,rl=ze.isMeshStandardMaterial?rn.environment:null,Am=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ti,ua=(ze.isMeshStandardMaterial?de:le).get(ze.envMap||rl),Rm=ze.vertexColors===!0&&!!Wt.attributes.color&&Wt.attributes.color.itemSize===4,Cm=!!Wt.attributes.tangent&&(!!ze.normalMap||ze.anisotropy>0),Lm=!!Wt.morphAttributes.position,Pm=!!Wt.morphAttributes.normal,Im=!!Wt.morphAttributes.color,au=bi;ze.toneMapped&&(T!==null&&T.isXRRenderTarget!==!0||(au=y.toneMapping));let ou=Wt.morphAttributes.position||Wt.morphAttributes.normal||Wt.morphAttributes.color,Dm=ou!==void 0?ou.length:0,Ge=$.get(ze),Fm=m.state.lights;if(x===!0&&(R===!0||yt!==H)){let sn=yt===H&&ze.id===G;Ee.setState(ze,yt,sn)}let gn=!1;ze.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==Fm.state.version||Ge.outputColorSpace!==Am||ke.isBatchedMesh&&Ge.batching===!1?gn=!0:ke.isBatchedMesh||Ge.batching!==!0?ke.isInstancedMesh&&Ge.instancing===!1?gn=!0:ke.isInstancedMesh||Ge.instancing!==!0?ke.isSkinnedMesh&&Ge.skinning===!1?gn=!0:ke.isSkinnedMesh||Ge.skinning!==!0?ke.isInstancedMesh&&Ge.instancingColor===!0&&ke.instanceColor===null||ke.isInstancedMesh&&Ge.instancingColor===!1&&ke.instanceColor!==null||Ge.envMap!==ua||ze.fog===!0&&Ge.fog!==xs?gn=!0:Ge.numClippingPlanes===void 0||Ge.numClippingPlanes===Ee.numPlanes&&Ge.numIntersection===Ee.numIntersection?(Ge.vertexAlphas!==Rm||Ge.vertexTangents!==Cm||Ge.morphTargets!==Lm||Ge.morphNormals!==Pm||Ge.morphColors!==Im||Ge.toneMapping!==au||te.isWebGL2===!0&&Ge.morphTargetsCount!==Dm)&&(gn=!0):gn=!0:gn=!0:gn=!0:gn=!0:(gn=!0,Ge.__version=ze.version);let Hi=Ge.currentProgram;gn===!0&&(Hi=ha(ze,rn,ke));let lu=!1,Ms=!1,sl=!1,Ft=Hi.getUniforms(),ki=Ge.uniforms;if(b.useProgram(Hi.program)&&(lu=!0,Ms=!0,sl=!0),ze.id!==G&&(G=ze.id,Ms=!0),lu||H!==yt){Ft.setValue(ee,"projectionMatrix",yt.projectionMatrix),Ft.setValue(ee,"viewMatrix",yt.matrixWorldInverse);let sn=Ft.map.cameraPosition;sn!==void 0&&sn.setValue(ee,F.setFromMatrixPosition(yt.matrixWorld)),te.logarithmicDepthBuffer&&Ft.setValue(ee,"logDepthBufFC",2/(Math.log(yt.far+1)/Math.LN2)),(ze.isMeshPhongMaterial||ze.isMeshToonMaterial||ze.isMeshLambertMaterial||ze.isMeshBasicMaterial||ze.isMeshStandardMaterial||ze.isShaderMaterial)&&Ft.setValue(ee,"isOrthographic",yt.isOrthographicCamera===!0),H!==yt&&(H=yt,Ms=!0,sl=!0)}if(ke.isSkinnedMesh){Ft.setOptional(ee,ke,"bindMatrix"),Ft.setOptional(ee,ke,"bindMatrixInverse");let sn=ke.skeleton;sn&&(te.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Ft.setValue(ee,"boneTexture",sn.boneTexture,K)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ke.isBatchedMesh&&(Ft.setOptional(ee,ke,"batchingTexture"),Ft.setValue(ee,"batchingTexture",ke._matricesTexture,K));let al=Wt.morphAttributes;(al.position!==void 0||al.normal!==void 0||al.color!==void 0&&te.isWebGL2===!0)&&aa.update(ke,Wt,Hi),(Ms||Ge.receiveShadow!==ke.receiveShadow)&&(Ge.receiveShadow=ke.receiveShadow,Ft.setValue(ee,"receiveShadow",ke.receiveShadow)),ze.isMeshGouraudMaterial&&ze.envMap!==null&&(ki.envMap.value=ua,ki.flipEnvMap.value=ua.isCubeTexture&&ua.isRenderTargetTexture===!1?-1:1),Ms&&(Ft.setValue(ee,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&(vn=sl,(Cn=ki).ambientLightColor.needsUpdate=vn,Cn.lightProbe.needsUpdate=vn,Cn.directionalLights.needsUpdate=vn,Cn.directionalLightShadows.needsUpdate=vn,Cn.pointLights.needsUpdate=vn,Cn.pointLightShadows.needsUpdate=vn,Cn.spotLights.needsUpdate=vn,Cn.spotLightShadows.needsUpdate=vn,Cn.rectAreaLights.needsUpdate=vn,Cn.hemisphereLights.needsUpdate=vn),xs&&ze.fog===!0&&xe.refreshFogUniforms(ki,xs),xe.refreshMaterialUniforms(ki,ze,N,W,B),is.upload(ee,ru(Ge),ki,K));var Cn,vn;if(ze.isShaderMaterial&&ze.uniformsNeedUpdate===!0&&(is.upload(ee,ru(Ge),ki,K),ze.uniformsNeedUpdate=!1),ze.isSpriteMaterial&&Ft.setValue(ee,"center",ke.center),Ft.setValue(ee,"modelViewMatrix",ke.modelViewMatrix),Ft.setValue(ee,"normalMatrix",ke.normalMatrix),Ft.setValue(ee,"modelMatrix",ke.matrixWorld),ze.isShaderMaterial||ze.isRawShaderMaterial){let sn=ze.uniformsGroups;for(let ol=0,Um=sn.length;ol<Um;ol++)if(te.isWebGL2){let cu=sn[ol];Mr.update(cu,Hi),Mr.bind(cu,Hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hi}(L,Q,ne,ce,ie);b.setMaterial(ce,we);let Ie=ne.index,Ue=1;if(ce.wireframe===!0){if(Ie=ge.getWireframeAttribute(ne),Ie===void 0)return;Ue=2}let Oe=ne.drawRange,Be=ne.attributes.position,rt=Oe.start*Ue,fn=(Oe.start+Oe.count)*Ue;pe!==null&&(rt=Math.max(rt,pe.start*Ue),fn=Math.min(fn,(pe.start+pe.count)*Ue)),Ie!==null?(rt=Math.max(rt,0),fn=Math.min(fn,Ie.count)):Be!=null&&(rt=Math.max(rt,0),fn=Math.min(fn,Be.count));let Hn=fn-rt;if(Hn<0||Hn===1/0)return;let zi;$t.setup(ie,ce,Te,ne,Ie);let st=xr;if(Ie!==null&&(zi=fe.get(Ie),st=oa,st.setIndex(zi)),ie.isMesh)ce.wireframe===!0?(b.setLineWidth(ce.wireframeLinewidth*j()),st.setMode(ee.LINES)):st.setMode(ee.TRIANGLES);else if(ie.isLine){let yt=ce.linewidth;yt===void 0&&(yt=1),b.setLineWidth(yt*j()),ie.isLineSegments?st.setMode(ee.LINES):ie.isLineLoop?st.setMode(ee.LINE_LOOP):st.setMode(ee.LINE_STRIP)}else ie.isPoints?st.setMode(ee.POINTS):ie.isSprite&&st.setMode(ee.TRIANGLES);if(ie.isBatchedMesh)st.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)st.renderInstances(rt,Hn,ie.count);else if(ne.isInstancedBufferGeometry){let yt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,rn=Math.min(ne.instanceCount,yt);st.renderInstances(rt,Hn,rn)}else st.render(rt,Hn)},this.compile=function(L,Q,ne=null){ne===null&&(ne=L),m=Et.get(ne),m.init(),g.push(m),ne.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Q.layers)&&(m.pushLight(ie),ie.castShadow&&m.pushShadow(ie))}),L!==ne&&L.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Q.layers)&&(m.pushLight(ie),ie.castShadow&&m.pushShadow(ie))}),m.setupLights(y._useLegacyLights);let ce=new Set;return L.traverse(function(ie){let pe=ie.material;if(pe)if(Array.isArray(pe))for(let we=0;we<pe.length;we++){let Te=pe[we];Kh(Te,ne,ie),ce.add(Te)}else Kh(pe,ne,ie),ce.add(pe)}),g.pop(),m=null,ce},this.compileAsync=function(L,Q,ne=null){let ce=this.compile(L,Q,ne);return new Promise(ie=>{function pe(){ce.forEach(function(we){$.get(we).currentProgram.isReady()&&ce.delete(we)}),ce.size!==0?setTimeout(pe,10):ie(L)}Y.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let il=null;function Qh(){Bi.stop()}function eu(){Bi.start()}let Bi=new Ap;function tu(L,Q,ne,ce){if(L.visible===!1)return;if(L.layers.test(Q.layers)){if(L.isGroup)ne=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Q);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||M.intersectsSprite(L)){ce&&F.setFromMatrixPosition(L.matrixWorld).applyMatrix4(C);let pe=Ae.update(L),we=L.material;we.visible&&v.push(L,pe,we,ne,F.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||M.intersectsObject(L))){let pe=Ae.update(L),we=L.material;if(ce&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),F.copy(L.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),F.copy(pe.boundingSphere.center)),F.applyMatrix4(L.matrixWorld).applyMatrix4(C)),Array.isArray(we)){let Te=pe.groups;for(let Ie=0,Ue=Te.length;Ie<Ue;Ie++){let Oe=Te[Ie],Be=we[Oe.materialIndex];Be&&Be.visible&&v.push(L,pe,Be,ne,F.z,Oe)}}else we.visible&&v.push(L,pe,we,ne,F.z,null)}}let ie=L.children;for(let pe=0,we=ie.length;pe<we;pe++)tu(ie[pe],Q,ne,ce)}function nu(L,Q,ne,ce){let ie=L.opaque,pe=L.transmissive,we=L.transparent;m.setupLightsView(ne),x===!0&&Ee.setGlobalState(y.clippingPlanes,ne),pe.length>0&&function(Te,Ie,Ue,Oe){if((Ue.isScene===!0?Ue.overrideMaterial:null)!==null)return;let rt=te.isWebGL2;B===null&&(B=new ni(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?Vs:ir,minFilter:so,samples:rt?4:0})),y.getDrawingBufferSize(k),rt?B.setSize(k.x,k.y):B.setSize(Ac(k.x),Ac(k.y));let fn=y.getRenderTarget();y.setRenderTarget(B),y.getClearColor(q),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear();let Hn=y.toneMapping;y.toneMapping=bi,ca(Te,Ue,Oe),K.updateMultisampleRenderTarget(B),K.updateRenderTargetMipmap(B);let zi=!1;for(let st=0,yt=Ie.length;st<yt;st++){let rn=Ie[st],Wt=rn.object,ze=rn.geometry,ke=rn.material,xs=rn.group;if(ke.side===2&&Wt.layers.test(Oe.layers)){let rl=ke.side;ke.side=Ot,ke.needsUpdate=!0,iu(Wt,Ue,Oe,ze,ke,xs),ke.side=rl,ke.needsUpdate=!0,zi=!0}}zi===!0&&(K.updateMultisampleRenderTarget(B),K.updateRenderTargetMipmap(B)),y.setRenderTarget(fn),y.setClearColor(q,Z),y.toneMapping=Hn}(ie,pe,Q,ne),ce&&b.viewport(O.copy(ce)),ie.length>0&&ca(ie,Q,ne),pe.length>0&&ca(pe,Q,ne),we.length>0&&ca(we,Q,ne),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function ca(L,Q,ne){let ce=Q.isScene===!0?Q.overrideMaterial:null;for(let ie=0,pe=L.length;ie<pe;ie++){let we=L[ie],Te=we.object,Ie=we.geometry,Ue=ce===null?we.material:ce,Oe=we.group;Te.layers.test(ne.layers)&&iu(Te,Q,ne,Ie,Ue,Oe)}}function iu(L,Q,ne,ce,ie,pe){L.onBeforeRender(y,Q,ne,ce,ie,pe),L.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ie.onBeforeRender(y,Q,ne,ce,L,pe),ie.transparent===!0&&ie.side===2&&ie.forceSinglePass===!1?(ie.side=Ot,ie.needsUpdate=!0,y.renderBufferDirect(ne,Q,ce,ie,L,pe),ie.side=wi,ie.needsUpdate=!0,y.renderBufferDirect(ne,Q,ce,ie,L,pe),ie.side=2):y.renderBufferDirect(ne,Q,ce,ie,L,pe),L.onAfterRender(y,Q,ne,ce,ie,pe)}function ha(L,Q,ne){Q.isScene!==!0&&(Q=z);let ce=$.get(L),ie=m.state.lights,pe=m.state.shadowsArray,we=ie.state.version,Te=ve.getParameters(L,ie.state,pe,Q,ne),Ie=ve.getProgramCacheKey(Te),Ue=ce.programs;ce.environment=L.isMeshStandardMaterial?Q.environment:null,ce.fog=Q.fog,ce.envMap=(L.isMeshStandardMaterial?de:le).get(L.envMap||ce.environment),Ue===void 0&&(L.addEventListener("dispose",Jh),Ue=new Map,ce.programs=Ue);let Oe=Ue.get(Ie);if(Oe!==void 0){if(ce.currentProgram===Oe&&ce.lightsStateVersion===we)return su(L,Te),Oe}else Te.uniforms=ve.getUniforms(L),L.onBuild(ne,Te,y),L.onBeforeCompile(Te,y),Oe=ve.acquireProgram(Te,Ie),Ue.set(Ie,Oe),ce.uniforms=Te.uniforms;let Be=ce.uniforms;return(L.isShaderMaterial||L.isRawShaderMaterial)&&L.clipping!==!0||(Be.clippingPlanes=Ee.uniform),su(L,Te),ce.needsLights=function(rt){return rt.isMeshLambertMaterial||rt.isMeshToonMaterial||rt.isMeshPhongMaterial||rt.isMeshStandardMaterial||rt.isShadowMaterial||rt.isShaderMaterial&&rt.lights===!0}(L),ce.lightsStateVersion=we,ce.needsLights&&(Be.ambientLightColor.value=ie.state.ambient,Be.lightProbe.value=ie.state.probe,Be.directionalLights.value=ie.state.directional,Be.directionalLightShadows.value=ie.state.directionalShadow,Be.spotLights.value=ie.state.spot,Be.spotLightShadows.value=ie.state.spotShadow,Be.rectAreaLights.value=ie.state.rectArea,Be.ltc_1.value=ie.state.rectAreaLTC1,Be.ltc_2.value=ie.state.rectAreaLTC2,Be.pointLights.value=ie.state.point,Be.pointLightShadows.value=ie.state.pointShadow,Be.hemisphereLights.value=ie.state.hemi,Be.directionalShadowMap.value=ie.state.directionalShadowMap,Be.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Be.spotShadowMap.value=ie.state.spotShadowMap,Be.spotLightMatrix.value=ie.state.spotLightMatrix,Be.spotLightMap.value=ie.state.spotLightMap,Be.pointShadowMap.value=ie.state.pointShadowMap,Be.pointShadowMatrix.value=ie.state.pointShadowMatrix),ce.currentProgram=Oe,ce.uniformsList=null,Oe}function ru(L){if(L.uniformsList===null){let Q=L.currentProgram.getUniforms();L.uniformsList=is.seqWithValue(Q.seq,L.uniforms)}return L.uniformsList}function su(L,Q){let ne=$.get(L);ne.outputColorSpace=Q.outputColorSpace,ne.batching=Q.batching,ne.instancing=Q.instancing,ne.instancingColor=Q.instancingColor,ne.skinning=Q.skinning,ne.morphTargets=Q.morphTargets,ne.morphNormals=Q.morphNormals,ne.morphColors=Q.morphColors,ne.morphTargetsCount=Q.morphTargetsCount,ne.numClippingPlanes=Q.numClippingPlanes,ne.numIntersection=Q.numClipIntersection,ne.vertexAlphas=Q.vertexAlphas,ne.vertexTangents=Q.vertexTangents,ne.toneMapping=Q.toneMapping}Bi.setAnimationLoop(function(L){il&&il(L)}),typeof self!="undefined"&&Bi.setContext(self),this.setAnimationLoop=function(L){il=L,Dt.setAnimationLoop(L),L===null?Bi.stop():Bi.start()},Dt.addEventListener("sessionstart",Qh),Dt.addEventListener("sessionend",eu),this.render=function(L,Q){if(Q!==void 0&&Q.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(E===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(Q),Q=Dt.getCamera()),L.isScene===!0&&L.onBeforeRender(y,L,Q,T),m=Et.get(L,g.length),m.init(),g.push(m),C.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),M.setFromProjectionMatrix(C),R=this.localClippingEnabled,x=Ee.init(this.clippingPlanes,R),v=Pe.get(L,_.length),v.init(),_.push(v),tu(L,Q,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(I,U),this.info.render.frame++,x===!0&&Ee.beginShadows();let ne=m.state.shadowsArray;if(He.render(ne,L,Q),x===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ne.render(v,L),m.setupLights(y._useLegacyLights),Q.isArrayCamera){let ce=Q.cameras;for(let ie=0,pe=ce.length;ie<pe;ie++){let we=ce[ie];nu(v,L,we,we.viewport)}}else nu(v,L,Q);T!==null&&(K.updateMultisampleRenderTarget(T),K.updateRenderTargetMipmap(T)),L.isScene===!0&&L.onAfterRender(y,L,Q),$t.resetDefaultState(),G=-1,H=null,g.pop(),m=g.length>0?g[g.length-1]:null,_.pop(),v=_.length>0?_[_.length-1]:null},this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(L,Q,ne){$.get(L.texture).__webglTexture=Q,$.get(L.depthTexture).__webglTexture=ne;let ce=$.get(L);ce.__hasExternalTextures=!0,ce.__hasExternalTextures&&(ce.__autoAllocateDepthBuffer=ne===void 0,ce.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,Q){let ne=$.get(L);ne.__webglFramebuffer=Q,ne.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(L,Q=0,ne=0){T=L,A=Q,w=ne;let ce=!0,ie=null,pe=!1,we=!1;if(L){let Te=$.get(L);Te.__useDefaultFramebuffer!==void 0?(b.bindFramebuffer(ee.FRAMEBUFFER,null),ce=!1):Te.__webglFramebuffer===void 0?K.setupRenderTarget(L):Te.__hasExternalTextures&&K.rebindTextures(L,$.get(L.texture).__webglTexture,$.get(L.depthTexture).__webglTexture);let Ie=L.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(we=!0);let Ue=$.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(ie=Array.isArray(Ue[Q])?Ue[Q][ne]:Ue[Q],pe=!0):ie=te.isWebGL2&&L.samples>0&&K.useMultisampledRTT(L)===!1?$.get(L).__webglMultisampledFramebuffer:Array.isArray(Ue)?Ue[ne]:Ue,O.copy(L.viewport),J.copy(L.scissor),P=L.scissorTest}else O.copy(D).multiplyScalar(N).floor(),J.copy(V).multiplyScalar(N).floor(),P=se;if(b.bindFramebuffer(ee.FRAMEBUFFER,ie)&&te.drawBuffers&&ce&&b.drawBuffers(L,ie),b.viewport(O),b.scissor(J),b.setScissorTest(P),pe){let Te=$.get(L.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te.__webglTexture,ne)}else if(we){let Te=$.get(L.texture),Ie=Q||0;ee.framebufferTextureLayer(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,Te.__webglTexture,ne||0,Ie)}G=-1},this.readRenderTargetPixels=function(L,Q,ne,ce,ie,pe,we){if(!L||!L.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=$.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te){b.bindFramebuffer(ee.FRAMEBUFFER,Te);try{let Ie=L.texture,Ue=Ie.format,Oe=Ie.type;if(Ue!==ln&&nn.convert(Ue)!==ee.getParameter(ee.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Be=Oe===Vs&&(Y.has("EXT_color_buffer_half_float")||te.isWebGL2&&Y.has("EXT_color_buffer_float"));if(!(Oe===ir||nn.convert(Oe)===ee.getParameter(ee.IMPLEMENTATION_COLOR_READ_TYPE)||Oe===Mi&&(te.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float"))||Be))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Q>=0&&Q<=L.width-ce&&ne>=0&&ne<=L.height-ie&&ee.readPixels(Q,ne,ce,ie,nn.convert(Ue),nn.convert(Oe),pe)}finally{let Ie=T!==null?$.get(T).__webglFramebuffer:null;b.bindFramebuffer(ee.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(L,Q,ne=0){let ce=Math.pow(2,-ne),ie=Math.floor(Q.image.width*ce),pe=Math.floor(Q.image.height*ce);K.setTexture2D(Q,0),ee.copyTexSubImage2D(ee.TEXTURE_2D,ne,0,0,L.x,L.y,ie,pe),b.unbindTexture()},this.copyTextureToTexture=function(L,Q,ne,ce=0){let ie=Q.image.width,pe=Q.image.height,we=nn.convert(ne.format),Te=nn.convert(ne.type);K.setTexture2D(ne,0),ee.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,ne.flipY),ee.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),ee.pixelStorei(ee.UNPACK_ALIGNMENT,ne.unpackAlignment),Q.isDataTexture?ee.texSubImage2D(ee.TEXTURE_2D,ce,L.x,L.y,ie,pe,we,Te,Q.image.data):Q.isCompressedTexture?ee.compressedTexSubImage2D(ee.TEXTURE_2D,ce,L.x,L.y,Q.mipmaps[0].width,Q.mipmaps[0].height,we,Q.mipmaps[0].data):ee.texSubImage2D(ee.TEXTURE_2D,ce,L.x,L.y,we,Te,Q.image),ce===0&&ne.generateMipmaps&&ee.generateMipmap(ee.TEXTURE_2D),b.unbindTexture()},this.copyTextureToTexture3D=function(L,Q,ne,ce,ie=0){if(y.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let pe=L.max.x-L.min.x+1,we=L.max.y-L.min.y+1,Te=L.max.z-L.min.z+1,Ie=nn.convert(ce.format),Ue=nn.convert(ce.type),Oe;if(ce.isData3DTexture)K.setTexture3D(ce,0),Oe=ee.TEXTURE_3D;else{if(!ce.isDataArrayTexture&&!ce.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");K.setTexture2DArray(ce,0),Oe=ee.TEXTURE_2D_ARRAY}ee.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,ce.flipY),ee.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),ee.pixelStorei(ee.UNPACK_ALIGNMENT,ce.unpackAlignment);let Be=ee.getParameter(ee.UNPACK_ROW_LENGTH),rt=ee.getParameter(ee.UNPACK_IMAGE_HEIGHT),fn=ee.getParameter(ee.UNPACK_SKIP_PIXELS),Hn=ee.getParameter(ee.UNPACK_SKIP_ROWS),zi=ee.getParameter(ee.UNPACK_SKIP_IMAGES),st=ne.isCompressedTexture?ne.mipmaps[ie]:ne.image;ee.pixelStorei(ee.UNPACK_ROW_LENGTH,st.width),ee.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,st.height),ee.pixelStorei(ee.UNPACK_SKIP_PIXELS,L.min.x),ee.pixelStorei(ee.UNPACK_SKIP_ROWS,L.min.y),ee.pixelStorei(ee.UNPACK_SKIP_IMAGES,L.min.z),ne.isDataTexture||ne.isData3DTexture?ee.texSubImage3D(Oe,ie,Q.x,Q.y,Q.z,pe,we,Te,Ie,Ue,st.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ee.compressedTexSubImage3D(Oe,ie,Q.x,Q.y,Q.z,pe,we,Te,Ie,st.data)):ee.texSubImage3D(Oe,ie,Q.x,Q.y,Q.z,pe,we,Te,Ie,Ue,st),ee.pixelStorei(ee.UNPACK_ROW_LENGTH,Be),ee.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,rt),ee.pixelStorei(ee.UNPACK_SKIP_PIXELS,fn),ee.pixelStorei(ee.UNPACK_SKIP_ROWS,Hn),ee.pixelStorei(ee.UNPACK_SKIP_IMAGES,zi),ie===0&&ce.generateMipmaps&&ee.generateMipmap(Oe),b.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?K.setTextureCube(L,0):L.isData3DTexture?K.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?K.setTexture2DArray(L,0):K.setTexture2D(L,0),b.unbindTexture()},this.resetState=function(){A=0,w=0,T=null,b.reset(),$t.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return os}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===xh?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Wo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?ar:bp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ar?ut:ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Gc=class extends js{};Gc.prototype.isWebGL1Renderer=!0;var bo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},So=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Vc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},zt=new S,wo=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ii=class extends Fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zr,Ds=new S,Jr=new S,Kr=new S,Qr=new he,Fs=new he,Dp=new Ce,Wa=new S,Us=new S,Xa=new S,Yd=new he,hc=new he,$d=new he,Ri=class extends wt{constructor(e=new ii){if(super(),this.isSprite=!0,this.type="Sprite",Zr===void 0){Zr=new $e;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vc(t,5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute("position",new wo(n,3,0,!1)),Zr.setAttribute("uv",new wo(n,2,3,!1))}this.geometry=Zr,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jr.setFromMatrixScale(this.matrixWorld),Dp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jr.multiplyScalar(-Kr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;ja(Wa.set(-.5,-.5,0),Kr,a,Jr,r,s),ja(Us.set(.5,-.5,0),Kr,a,Jr,r,s),ja(Xa.set(.5,.5,0),Kr,a,Jr,r,s),Yd.set(0,0),hc.set(1,0),$d.set(1,1);let o=e.ray.intersectTriangle(Wa,Us,Xa,!1,Ds);if(o===null&&(ja(Us.set(-.5,.5,0),Kr,a,Jr,r,s),hc.set(0,1),o=e.ray.intersectTriangle(Wa,Xa,Us,!1,Ds),o===null))return;let l=e.ray.origin.distanceTo(Ds);l<e.near||l>e.far||t.push({distance:l,point:Ds.clone(),uv:Ei.getInterpolation(Ds,Wa,Us,Xa,Yd,hc,$d,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ja(i,e,t,n,r,s){Qr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Fs.x=s*Qr.x-r*Qr.y,Fs.y=r*Qr.x+s*Qr.y):Fs.copy(Qr),i.copy(e),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(Dp)}var Iv=new S,Dv=new S;var Fv=new S,Uv=new mt,Nv=new mt,Ov=new S,Bv=new Ce,zv=new S,Hv=new Tn,kv=new Ce,Gv=new or;var To=class extends Qt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=1003,h=1003,d,u){super(null,a,o,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vv=new Ce,Wv=new Ce;var Ao=class extends ft{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},es=new Ce,Zd=new Ce,qa=[],Jd=new wn,ag=new Ce,Ns=new me,Os=new Tn,lr=class extends me{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ao(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,ag)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),Jd.copy(e.boundingBox).applyMatrix4(es),this.boundingBox.union(Jd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),Os.copy(e.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),e.ray.intersectsSphere(Os)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,es),Zd.multiplyMatrices(n,es),Ns.matrixWorld=Zd,Ns.raycast(e,qa);for(let a=0,o=qa.length;a<o;a++){let l=qa[a];l.instanceId=s,l.object=this,t.push(l)}qa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ao(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Wc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,r=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];r.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var Xv=new Ce,jv=new Ce,qv=new Ce,Yv=new Ce,$v=new hs,Zv=new wn,Jv=new Tn,Kv=new S,Qv=new Wc,ey=new me;var qs=class extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Kd=new S,Qd=new S,ep=new Ce,uc=new or,Ya=new Tn,Ro=class extends wt{constructor(e=new $e,t=new qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Kd.fromBufferAttribute(t,r-1),Qd.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Kd.distanceTo(Qd);e.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(r),Ya.radius+=s,e.ray.intersectsSphere(Ya)===!1)return;ep.copy(r).invert(),uc.copy(e.ray).applyMatrix4(ep);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new S,h=new S,d=new S,u=new S,p=this.isLineSegments?2:1,f=n.index,v=n.attributes.position;if(f!==null)for(let m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count)-1;m<_;m+=p){let g=f.getX(m),y=f.getX(m+1);if(c.fromBufferAttribute(v,g),h.fromBufferAttribute(v,y),uc.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(u);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}else for(let m=Math.max(0,a.start),_=Math.min(v.count,a.start+a.count)-1;m<_;m+=p){if(c.fromBufferAttribute(v,m),h.fromBufferAttribute(v,m+1),uc.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let g=e.ray.origin.distanceTo(u);g<e.near||g>e.far||t.push({distance:g,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},ty=new S,ny=new S;var Ci=class extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tp=new Ce,Xc=new or,$a=new Tn,Za=new S,cr=class extends wt{constructor(e=new $e,t=new Ci){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(r),$a.radius+=s,e.ray.intersectsSphere($a)===!1)return;tp.copy(r).invert(),Xc.copy(e.ray).applyMatrix4(tp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);d<u;d++){let p=c.getX(d);Za.fromBufferAttribute(h,p),np(Za,p,l,r,e,t,this)}else for(let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);d<u;d++)Za.fromBufferAttribute(h,d),np(Za,d,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function np(i,e,t,n,r,s,a){let o=Xc.distanceSqToPoint(i);if(o<t){let l=new S;Xc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Co=class extends Qt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=n[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new he:new S);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,r=[],s=[],a=[],o=new S,l=new Ce;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new S)}s[0]=new S,a[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Ct(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Ct(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ys=class extends hn{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new he,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},jc=class extends Ys{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Eh(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,r(a,o,u,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var Ja=new S,dc=new Eh,pc=new Eh,mc=new Eh,qc=class extends hn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new S){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(Ja.subVectors(r[0],r[1]).add(r[0]),o=Ja);let d=r[c%s],u=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(Ja.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=Ja),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(l),p);v<1e-4&&(v=1),f<1e-4&&(f=v),m<1e-4&&(m=v),dc.initNonuniformCatmullRom(o.x,d.x,u.x,l.x,f,v,m),pc.initNonuniformCatmullRom(o.y,d.y,u.y,l.y,f,v,m),mc.initNonuniformCatmullRom(o.z,d.z,u.z,l.z,f,v,m)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(o.x,d.x,u.x,l.x,this.tension),pc.initCatmullRom(o.y,d.y,u.y,l.y,this.tension),mc.initCatmullRom(o.z,d.z,u.z,l.z,this.tension));return n.set(dc.calc(h),pc.calc(h),mc.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new S().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ip(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function Hs(i,e,t,n){return function(r,s){let a=1-r;return a*a*s}(i,e)+function(r,s){return 2*(1-r)*r*s}(i,t)+function(r,s){return r*r*s}(i,n)}function ks(i,e,t,n,r){return function(s,a){let o=1-s;return o*o*o*a}(i,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(i,t)+function(s,a){return 3*(1-s)*s*s*a}(i,n)+function(s,a){return s*s*s*a}(i,r)}var Lo=class extends hn{constructor(e=new he,t=new he,n=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new he){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ks(e,r.x,s.x,a.x,o.x),ks(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yc=class extends hn{constructor(e=new S,t=new S,n=new S,r=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new S){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ks(e,r.x,s.x,a.x,o.x),ks(e,r.y,s.y,a.y,o.y),ks(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Po=class extends hn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$c=class extends hn{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends hn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Hs(e,r.x,s.x,a.x),Hs(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends hn{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Hs(e,r.x,s.x,a.x),Hs(e,r.y,s.y,a.y),Hs(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(ip(o,l.x,c.x,h.x,d.x),ip(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new he().fromArray(r))}return this}},Uo=Object.freeze({__proto__:null,ArcCurve:jc,CatmullRomCurve3:qc,CubicBezierCurve:Lo,CubicBezierCurve3:Yc,EllipseCurve:Ys,LineCurve:Po,LineCurve3:$c,QuadraticBezierCurve:Io,QuadraticBezierCurve3:Do,SplineCurve:Fo}),Zc=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Uo[r.type]().fromJSON(r))}return this}},$s=class extends Zc{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Po(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Io(this.currentPoint.clone(),new he(e,t),new he(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new Lo(this.currentPoint.clone(),new he(e,t),new he(n,r),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Fo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){let c=new Ys(e,t,n,r,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},No=class i extends $e{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Ct(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,d=new S,u=new he,p=new S,f=new S,v=new S,m=0,_=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-m,p.z=0*_,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-m,p.z=0*_,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(f)}for(let g=0;g<=t;g++){let y=n+g*h*r,E=Math.sin(y),A=Math.cos(y);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*E,d.y=e[w].y,d.z=e[w].x*A,a.push(d.x,d.y,d.z),u.x=g/t,u.y=w/(e.length-1),o.push(u.x,u.y);let T=l[3*w+0]*E,G=l[3*w+1],H=l[3*w+0]*A;c.push(T,G,H)}}for(let g=0;g<t;g++)for(let y=0;y<e.length-1;y++){let E=y+g*e.length,A=E,w=E+e.length,T=E+e.length+1,G=E+1;s.push(A,w,G),s.push(T,G,w)}this.setIndex(s),this.setAttribute("position",new Re(a,3)),this.setAttribute("uv",new Re(o,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},hr=class i extends No{constructor(e=1,t=1,n=4,r=8){let s=new $s;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},qt=class i extends $e{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new S,h=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(o,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},We=class i extends $e{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],u=[],p=[],f=0,v=[],m=n/2,_=0;function g(y){let E=f,A=new he,w=new S,T=0,G=y===!0?e:t,H=y===!0?1:-1;for(let J=1;J<=r;J++)d.push(0,m*H,0),u.push(0,H,0),p.push(.5,.5),f++;let O=f;for(let J=0;J<=r;J++){let P=J/r*l+o,q=Math.cos(P),Z=Math.sin(P);w.x=G*Z,w.y=m*H,w.z=G*q,d.push(w.x,w.y,w.z),u.push(0,H,0),A.x=.5*q+.5,A.y=.5*Z*H+.5,p.push(A.x,A.y),f++}for(let J=0;J<r;J++){let P=E+J,q=O+J;y===!0?h.push(q,q+1,P):h.push(q+1,q,P),T+=3}c.addGroup(_,T,y===!0?1:2),_+=T}(function(){let y=new S,E=new S,A=0,w=(t-e)/n;for(let T=0;T<=s;T++){let G=[],H=T/s,O=H*(t-e)+e;for(let J=0;J<=r;J++){let P=J/r,q=P*l+o,Z=Math.sin(q),oe=Math.cos(q);E.x=O*Z,E.y=-H*n+m,E.z=O*oe,d.push(E.x,E.y,E.z),y.set(Z,w,oe).normalize(),u.push(y.x,y.y,y.z),p.push(P,1-H),G.push(f++)}v.push(G)}for(let T=0;T<r;T++)for(let G=0;G<s;G++){let H=v[G][T],O=v[G+1][T],J=v[G+1][T+1],P=v[G][T+1];h.push(H,O,P),h.push(O,J,P),A+=6}c.addGroup(_,A,0),_+=A})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Re(d,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Un=class i extends We{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ur=class i extends $e{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(u,p,f,v){let m=v+1,_=[];for(let g=0;g<=m;g++){_[g]=[];let y=u.clone().lerp(f,g/m),E=p.clone().lerp(f,g/m),A=m-g;for(let w=0;w<=A;w++)_[g][w]=w===0&&g===m?y:y.clone().lerp(E,w/A)}for(let g=0;g<m;g++)for(let y=0;y<2*(m-g)-1;y++){let E=Math.floor(y/2);y%2==0?(l(_[g][E+1]),l(_[g+1][E]),l(_[g][E])):(l(_[g][E+1]),l(_[g+1][E+1]),l(_[g+1][E]))}}function l(u){s.push(u.x,u.y,u.z)}function c(u,p){let f=3*u;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(u,p,f,v){v<0&&u.x===1&&(a[p]=u.x-1),f.x===0&&f.z===0&&(a[p]=v/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new S,f=new S,v=new S;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],v),o(p,f,v,u)})(r),function(u){let p=new S;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(u),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z}(n),function(){let u=new S;for(let f=0;f<s.length;f+=3){u.x=s[f+0],u.y=s[f+1],u.z=s[f+2];let v=d(u)/2/Math.PI+.5,m=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(v,1-m)}var p;(function(){let f=new S,v=new S,m=new S,_=new S,g=new he,y=new he,E=new he;for(let A=0,w=0;A<s.length;A+=9,w+=6){f.set(s[A+0],s[A+1],s[A+2]),v.set(s[A+3],s[A+4],s[A+5]),m.set(s[A+6],s[A+7],s[A+8]),g.set(a[w+0],a[w+1]),y.set(a[w+2],a[w+3]),E.set(a[w+4],a[w+5]),_.copy(f).add(v).add(m).divideScalar(3);let T=d(_);h(g,w+0,f,T),h(y,w+2,v,T),h(E,w+4,m,T)}})(),function(){for(let f=0;f<a.length;f+=6){let v=a[f+0],m=a[f+2],_=a[f+4],g=Math.max(v,m,_),y=Math.min(v,m,_);g>.9&&y<.1&&(v<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),_<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new Re(s,3)),this.setAttribute("normal",new Re(s.slice(),3)),this.setAttribute("uv",new Re(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Jc=class i extends ur{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ka=new S,Qa=new S,fc=new S,eo=new Ei,Kc=class extends $e{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(ro*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:v,b:m,c:_}=eo;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),_.fromBufferAttribute(o,c[2]),eo.getNormal(fc),d[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let g=0;g<3;g++){let y=(g+1)%3,E=d[g],A=d[y],w=eo[h[g]],T=eo[h[y]],G=`${E}_${A}`,H=`${A}_${E}`;H in u&&u[H]?(fc.dot(u[H].normal)<=s&&(p.push(w.x,w.y,w.z),p.push(T.x,T.y,T.z)),u[H]=null):G in u||(u[G]={index0:c[g],index1:c[y],normal:fc.clone()})}}for(let f in u)if(u[f]){let{index0:v,index1:m}=u[f];Ka.fromBufferAttribute(o,v),Qa.fromBufferAttribute(o,m),p.push(Ka.x,Ka.y,Ka.z),p.push(Qa.x,Qa.y,Qa.z)}this.setAttribute("position",new Re(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ri=class extends $s{constructor(e){super(e),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new $s().fromJSON(r))}return this}},og=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=rp(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,d,u,p;if(n&&(s=function(f,v,m,_){let g=[],y,E,A,w,T;for(y=0,E=v.length;y<E;y++)A=v[y]*_,w=y<E-1?v[y+1]*_:f.length,T=rp(f,A,w,_,!1),T===T.next&&(T.steiner=!0),g.push(fg(T));for(g.sort(dg),y=0;y<g.length;y++)m=pg(g[y],m);return m}(i,e,s,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let f=t;f<r;f+=t)d=i[f],u=i[f+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Zs(s,a,t,o,l,p,0),a};function rp(i,e,t,n,r){let s,a;if(r===function(o,l,c,h){let d=0;for(let u=l,p=c-h;u<c;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d}(i,e,t,n)>0)for(s=e;s<t;s+=n)a=sp(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=sp(s,i[s],i[s+1],a);return a&&jo(a,a.next)&&(Ks(a),a=a.next),a}function dr(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!jo(n,n.next)&&lt(n.prev,n,n.next)!==0)n=n.next;else{if(Ks(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Zs(i,e,t,n,r,s,a){if(!i)return;!a&&s&&function(h,d,u,p){let f=h;do f.z===0&&(f.z=Qc(f.x,f.y,d,u,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(v){let m,_,g,y,E,A,w,T,G=1;do{for(_=v,v=null,E=null,A=0;_;){for(A++,g=_,w=0,m=0;m<G&&(w++,g=g.nextZ,g);m++);for(T=G;w>0||T>0&&g;)w!==0&&(T===0||!g||_.z<=g.z)?(y=_,_=_.nextZ,w--):(y=g,g=g.nextZ,T--),E?E.nextZ=y:v=y,y.prevZ=E,E=y;_=g}E.nextZ=null,G*=2}while(A>1)}(f)}(i,n,r,s);let o,l,c=i;for(;i.prev!==i.next;)if(o=i.prev,l=i.next,s?cg(i,n,r,s):lg(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Ks(i),i=l.next,c=l.next;else if((i=l)===c){a?a===1?Zs(i=hg(dr(i),e,t),e,t,n,r,s,2):a===2&&ug(i,e,t,n,r,s):Zs(dr(i),e,t,n,r,s,1);break}}function lg(i){let e=i.prev,t=i,n=i.next;if(lt(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,u=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&ts(r,o,s,l,a,c,f.x,f.y)&&lt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function cg(i,e,t,n){let r=i.prev,s=i,a=i.next;if(lt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,d=s.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<d?h<u?h:u:d<u?d:u,v=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,_=Qc(p,f,e,t,n),g=Qc(v,m,e,t,n),y=i.prevZ,E=i.nextZ;for(;y&&y.z>=_&&E&&E.z<=g;){if(y.x>=p&&y.x<=v&&y.y>=f&&y.y<=m&&y!==r&&y!==a&&ts(o,h,l,d,c,u,y.x,y.y)&&lt(y.prev,y,y.next)>=0||(y=y.prevZ,E.x>=p&&E.x<=v&&E.y>=f&&E.y<=m&&E!==r&&E!==a&&ts(o,h,l,d,c,u,E.x,E.y)&&lt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=v&&y.y>=f&&y.y<=m&&y!==r&&y!==a&&ts(o,h,l,d,c,u,y.x,y.y)&&lt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;E&&E.z<=g;){if(E.x>=p&&E.x<=v&&E.y>=f&&E.y<=m&&E!==r&&E!==a&&ts(o,h,l,d,c,u,E.x,E.y)&&lt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function hg(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!jo(r,s)&&Fp(r,n,n.next,s)&&Js(r,s)&&Js(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ks(n),Ks(n.next),n=i=s),n=n.next}while(n!==i);return dr(n)}function ug(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&gg(a,o)){let l=Up(a,o);return a=dr(a,a.next),l=dr(l,l.next),Zs(a,e,t,n,r,s,0),void Zs(l,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function dg(i,e){return i.x-e.x}function pg(i,e){let t=function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let d=a,u=a.x,p=a.y,f,v=1/0;o=a;do c>=o.x&&o.x>=u&&c!==o.x&&ts(h<p?c:l,h,u,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),Js(o,r)&&(f<v||f===v&&(o.x>a.x||o.x===a.x&&mg(a,o)))&&(a=o,v=f)),o=o.next;while(o!==d);return a}(i,e);if(!t)return e;let n=Up(t,i);return dr(n,n.next),dr(t,t.next)}function mg(i,e){return lt(i.prev,i,e.prev)<0&&lt(e.next,i,i.next)<0}function Qc(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function fg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ts(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function gg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&Fp(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1}(i,e)&&(Js(i,e)&&Js(e,i)&&function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s}(i,e)&&(lt(i.prev,i,e.prev)||lt(i,e.prev,e))||jo(i,e)&&lt(i.prev,i,i.next)>0&&lt(e.prev,e,e.next)>0)}function lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function jo(i,e){return i.x===e.x&&i.y===e.y}function Fp(i,e,t,n){let r=no(lt(i,e,t)),s=no(lt(i,e,n)),a=no(lt(t,n,i)),o=no(lt(t,n,e));return r!==s&&a!==o||!(r!==0||!to(i,t,e))||!(s!==0||!to(i,n,e))||!(a!==0||!to(t,i,n))||!(o!==0||!to(t,e,n))}function to(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function no(i){return i>0?1:i<0?-1:0}function Js(i,e){return lt(i.prev,i,i.next)<0?lt(i,e,i.next)>=0&&lt(i,i.prev,e)>=0:lt(i,e,i.prev)<0||lt(i,i.next,e)<0}function Up(i,e){let t=new eh(i.i,i.x,i.y),n=new eh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function sp(i,e,t,n){let r=new eh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function eh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Si=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];ap(e),op(n,e);let a=e.length;t.forEach(ap);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,op(n,t[l]);let o=og(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function ap(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function op(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Li=class i extends $e{constructor(e=new ri([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:vg,y,E,A,w,T,G=!1;_&&(y=_.getSpacedPoints(h),G=!0,u=!1,E=_.computeFrenetFrames(h,!1),A=new S,w=new S,T=new S),u||(m=0,p=0,f=0,v=0);let H=o.extractPoints(c),O=H.shape,J=H.holes;if(!Si.isClockWise(O)){O=O.reverse();for(let F=0,z=J.length;F<z;F++){let j=J[F];Si.isClockWise(j)&&(J[F]=j.reverse())}}let P=Si.triangulateShape(O,J),q=O;for(let F=0,z=J.length;F<z;F++){let j=J[F];O=O.concat(j)}function Z(F,z,j){return z||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(z,j)}let oe=O.length,W=P.length;function N(F,z,j){let Y,te,b,re=F.x-z.x,$=F.y-z.y,K=j.x-F.x,le=j.y-F.y,de=re*re+$*$,fe=re*le-$*K;if(Math.abs(fe)>Number.EPSILON){let ge=Math.sqrt(de),Ae=Math.sqrt(K*K+le*le),ve=z.x-$/ge,xe=z.y+re/ge,Pe=((j.x-le/Ae-ve)*le-(j.y+K/Ae-xe)*K)/(re*le-$*K);Y=ve+re*Pe-F.x,te=xe+$*Pe-F.y;let Et=Y*Y+te*te;if(Et<=2)return new he(Y,te);b=Math.sqrt(Et/2)}else{let ge=!1;re>Number.EPSILON?K>Number.EPSILON&&(ge=!0):re<-Number.EPSILON?K<-Number.EPSILON&&(ge=!0):Math.sign($)===Math.sign(le)&&(ge=!0),ge?(Y=-$,te=re,b=Math.sqrt(de)):(Y=re,te=$,b=Math.sqrt(de/2))}return new he(Y/b,te/b)}let I=[];for(let F=0,z=q.length,j=z-1,Y=F+1;F<z;F++,j++,Y++)j===z&&(j=0),Y===z&&(Y=0),I[F]=N(q[F],q[j],q[Y]);let U=[],D,V=I.concat();for(let F=0,z=J.length;F<z;F++){let j=J[F];D=[];for(let Y=0,te=j.length,b=te-1,re=Y+1;Y<te;Y++,b++,re++)b===te&&(b=0),re===te&&(re=0),D[Y]=N(j[Y],j[b],j[re]);U.push(D),V=V.concat(D)}for(let F=0;F<m;F++){let z=F/m,j=p*Math.cos(z*Math.PI/2),Y=f*Math.sin(z*Math.PI/2)+v;for(let te=0,b=q.length;te<b;te++){let re=Z(q[te],I[te],Y);x(re.x,re.y,-j)}for(let te=0,b=J.length;te<b;te++){let re=J[te];D=U[te];for(let $=0,K=re.length;$<K;$++){let le=Z(re[$],D[$],Y);x(le.x,le.y,-j)}}}let se=f+v;for(let F=0;F<oe;F++){let z=u?Z(O[F],V[F],se):O[F];G?(w.copy(E.normals[0]).multiplyScalar(z.x),A.copy(E.binormals[0]).multiplyScalar(z.y),T.copy(y[0]).add(w).add(A),x(T.x,T.y,T.z)):x(z.x,z.y,0)}for(let F=1;F<=h;F++)for(let z=0;z<oe;z++){let j=u?Z(O[z],V[z],se):O[z];G?(w.copy(E.normals[F]).multiplyScalar(j.x),A.copy(E.binormals[F]).multiplyScalar(j.y),T.copy(y[F]).add(w).add(A),x(T.x,T.y,T.z)):x(j.x,j.y,d/h*F)}for(let F=m-1;F>=0;F--){let z=F/m,j=p*Math.cos(z*Math.PI/2),Y=f*Math.sin(z*Math.PI/2)+v;for(let te=0,b=q.length;te<b;te++){let re=Z(q[te],I[te],Y);x(re.x,re.y,d+j)}for(let te=0,b=J.length;te<b;te++){let re=J[te];D=U[te];for(let $=0,K=re.length;$<K;$++){let le=Z(re[$],D[$],Y);G?x(le.x,le.y+y[h-1].y,y[h-1].x+j):x(le.x,le.y,d+j)}}}function M(F,z){let j=F.length;for(;--j>=0;){let Y=j,te=j-1;te<0&&(te=F.length-1);for(let b=0,re=h+2*m;b<re;b++){let $=oe*b,K=oe*(b+1);B(z+Y+$,z+te+$,z+te+K,z+Y+K)}}}function x(F,z,j){l.push(F),l.push(z),l.push(j)}function R(F,z,j){C(F),C(z),C(j);let Y=r.length/3,te=g.generateTopUV(n,r,Y-3,Y-2,Y-1);k(te[0]),k(te[1]),k(te[2])}function B(F,z,j,Y){C(F),C(z),C(Y),C(z),C(j),C(Y);let te=r.length/3,b=g.generateSideWallUV(n,r,te-6,te-3,te-2,te-1);k(b[0]),k(b[1]),k(b[3]),k(b[1]),k(b[2]),k(b[3])}function C(F){r.push(l[3*F+0]),r.push(l[3*F+1]),r.push(l[3*F+2])}function k(F){s.push(F.x),s.push(F.y)}(function(){let F=r.length/3;if(u){let z=0,j=oe*z;for(let Y=0;Y<W;Y++){let te=P[Y];R(te[2]+j,te[1]+j,te[0]+j)}z=h+2*m,j=oe*z;for(let Y=0;Y<W;Y++){let te=P[Y];R(te[0]+j,te[1]+j,te[2]+j)}}else{for(let z=0;z<W;z++){let j=P[z];R(j[2],j[1],j[0])}for(let z=0;z<W;z++){let j=P[z];R(j[0]+oe*h,j[1]+oe*h,j[2]+oe*h)}}n.addGroup(F,r.length/3-F,0)})(),function(){let F=r.length/3,z=0;M(q,z),z+=q.length;for(let j=0,Y=J.length;j<Y;j++){let te=J[j];M(te,z),z+=te.length}n.addGroup(F,r.length/3-F,1)}()}this.setAttribute("position",new Re(r,3)),this.setAttribute("uv",new Re(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Uo[r.type]().fromJSON(r)),new i(n,e.options)}},vg={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*r],h=e[3*r+1];return[new he(s,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],d=e[3*n+2],u=e[3*r],p=e[3*r+1],f=e[3*r+2],v=e[3*s],m=e[3*s+1],_=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-d),new he(u,1-f),new he(v,1-_)]:[new he(o,1-l),new he(h,1-d),new he(p,1-f),new he(m,1-_)]}},Gt=class i extends ur{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},th=class i extends ur{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},si=class i extends $e{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/(r=Math.max(1,r)),p=new S,f=new he;for(let v=0;v<=r;v++){for(let m=0;m<=n;m++){let _=s+m/n*a;p.x=d*Math.cos(_),p.y=d*Math.sin(_),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let v=0;v<r;v++){let m=v*(n+1);for(let _=0;_<n;_++){let g=_+m,y=g,E=g+n+1,A=g+n+2,w=g+1;o.push(y,E,w),o.push(E,A,w)}}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},nh=class i extends $e{constructor(e=new ri([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let d=r.length/3,u=h.extractPoints(t),p=u.shape,f=u.holes;Si.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,_=f.length;m<_;m++){let g=f[m];Si.isClockWise(g)===!0&&(f[m]=g.reverse())}let v=Si.triangulateShape(p,f);for(let m=0,_=f.length;m<_;m++){let g=f[m];p=p.concat(g)}for(let m=0,_=p.length;m<_;m++){let g=p[m];r.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let m=0,_=v.length;m<_;m++){let g=v[m],y=g[0]+d,E=g[1]+d,A=g[2]+d;n.push(y,E,A),l+=3}}this.setIndex(n),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(s,3)),this.setAttribute("uv",new Re(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},Ze=class i extends $e{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new S,u=new S,p=[],f=[],v=[],m=[];for(let _=0;_<=n;_++){let g=[],y=_/n,E=0;_===0&&a===0?E=.5/t:_===n&&l===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){let w=A/t;d.x=-e*Math.cos(r+w*s)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(r+w*s)*Math.sin(a+y*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(w+E,1-y),g.push(c++)}h.push(g)}for(let _=0;_<n;_++)for(let g=0;g<t;g++){let y=h[_][g+1],E=h[_][g],A=h[_+1][g],w=h[_+1][g+1];(_!==0||a>0)&&p.push(y,E,w),(_!==n-1||l<Math.PI)&&p.push(E,A,w)}this.setIndex(p),this.setAttribute("position",new Re(f,3)),this.setAttribute("normal",new Re(v,3)),this.setAttribute("uv",new Re(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ih=class i extends ur{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Nn=class i extends $e{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new S,d=new S,u=new S;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){let v=f/r*s,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(f/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){let v=(r+1)*p+f-1,m=(r+1)*(p-1)+f-1,_=(r+1)*(p-1)+f,g=(r+1)*p+f;a.push(v,m,g),a.push(m,_,g)}this.setIndex(a),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},rh=class i extends $e{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],l=[],c=[],h=[],d=new S,u=new S,p=new S,f=new S,v=new S,m=new S,_=new S;for(let y=0;y<=n;++y){let E=y/n*s*Math.PI*2;g(E,s,a,e,p),g(E+.01,s,a,e,f),m.subVectors(f,p),_.addVectors(f,p),v.crossVectors(m,_),_.crossVectors(v,m),v.normalize(),_.normalize();for(let A=0;A<=r;++A){let w=A/r*Math.PI*2,T=-t*Math.cos(w),G=t*Math.sin(w);d.x=p.x+(T*_.x+G*v.x),d.y=p.y+(T*_.y+G*v.y),d.z=p.z+(T*_.z+G*v.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(y/n),h.push(A/r)}}for(let y=1;y<=n;y++)for(let E=1;E<=r;E++){let A=(r+1)*(y-1)+(E-1),w=(r+1)*y+(E-1),T=(r+1)*y+E,G=(r+1)*(y-1)+E;o.push(A,w,G),o.push(w,T,G)}function g(y,E,A,w,T){let G=Math.cos(y),H=Math.sin(y),O=A/E*y,J=Math.cos(O);T.x=w*(2+J)*.5*G,T.y=w*(2+J)*H*.5,T.z=w*Math.sin(O)*.5}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},sh=class i extends $e{constructor(e=new Do(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new S,l=new S,c=new he,h=new S,d=[],u=[],p=[],f=[];function v(m){h=e.getPointAt(m/t,h);let _=a.normals[m],g=a.binormals[m];for(let y=0;y<=r;y++){let E=y/r*Math.PI*2,A=Math.sin(E),w=-Math.cos(E);l.x=w*_.x+A*g.x,l.y=w*_.y+A*g.y,l.z=w*_.z+A*g.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)v(m);v(s===!1?t:0),function(){for(let m=0;m<=t;m++)for(let _=0;_<=r;_++)c.x=m/t,c.y=_/r,p.push(c.x,c.y)}(),function(){for(let m=1;m<=t;m++)for(let _=1;_<=r;_++){let g=(r+1)*(m-1)+(_-1),y=(r+1)*m+(_-1),E=(r+1)*m+_,A=(r+1)*(m-1)+_;f.push(g,y,A),f.push(y,E,A)}}()})(),this.setIndex(f),this.setAttribute("position",new Re(d,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ah=class extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new S,s=new S;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let v=0;v<3;v++){let m=o.getX(p+v),_=o.getX(p+(v+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,_),lp(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),lp(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Re(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function lp(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var iy=Object.freeze({__proto__:null,BoxGeometry:Me,CapsuleGeometry:hr,CircleGeometry:qt,ConeGeometry:Un,CylinderGeometry:We,DodecahedronGeometry:Jc,EdgesGeometry:Kc,ExtrudeGeometry:Li,IcosahedronGeometry:Gt,LatheGeometry:No,OctahedronGeometry:th,PlaneGeometry:et,PolyhedronGeometry:ur,RingGeometry:si,ShapeGeometry:nh,SphereGeometry:Ze,TetrahedronGeometry:ih,TorusGeometry:Nn,TorusKnotGeometry:rh,TubeGeometry:sh,WireframeGeometry:ah});var Tt=class extends Fn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function io(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function yg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var us=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oh=class extends us{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ad,endingEnd:ad}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case od:s=e,o=2*t-n;break;case ld:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case od:a=e,l=2*n-t;break;case ld:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),v=f*f,m=v*f,_=-u*m+2*u*v-u*f,g=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*f+1,y=(-1-p)*m+(1.5+p)*v+.5*f,E=p*m-p*v;for(let A=0;A!==o;++A)s[A]=_*a[h+A]+g*a[c+A]+y*a[l+A]+E*a[d+A];return s}},lh=class extends us{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},ch=class extends us{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Sn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=io(t,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:io(e.times,Array),values:io(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ao:t=this.InterpolantFactoryMethodDiscrete;break;case oo:t=this.InterpolantFactoryMethodLinear;break;case Hl:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return oo;case this.InterpolantFactoryMethodSmooth:return Hl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&yg(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Hl,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Sn.prototype.TimeBufferType=Float32Array,Sn.prototype.ValueBufferType=Float32Array,Sn.prototype.DefaultInterpolation=oo;var tr=class extends Sn{};tr.prototype.ValueTypeName="bool",tr.prototype.ValueBufferType=Array,tr.prototype.DefaultInterpolation=ao,tr.prototype.InterpolantFactoryMethodLinear=void 0,tr.prototype.InterpolantFactoryMethodSmooth=void 0;var hh=class extends Sn{};hh.prototype.ValueTypeName="color";var uh=class extends Sn{};uh.prototype.ValueTypeName="number";var dh=class extends us{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)cn.slerpFlat(s,0,a,c-o,a,c,l);return s}},Gs=class extends Sn{InterpolantFactoryMethodLinear(e){return new dh(this.times,this.values,this.getValueSize(),e)}};Gs.prototype.ValueTypeName="quaternion",Gs.prototype.DefaultInterpolation=oo,Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var nr=class extends Sn{};nr.prototype.ValueTypeName="string",nr.prototype.ValueBufferType=Array,nr.prototype.DefaultInterpolation=ao,nr.prototype.InterpolantFactoryMethodLinear=void 0,nr.prototype.InterpolantFactoryMethodSmooth=void 0;var ph=class extends Sn{};ph.prototype.ValueTypeName="vector";var mh=class{constructor(e,t,n){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},_g=new mh,fh=class{constructor(e){this.manager=e!==void 0?e:_g,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};fh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oo=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Bo=class extends Oo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},gc=new Ce,cp=new S,hp=new S,gh=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;cp.setFromMatrixPosition(e.matrixWorld),t.position.copy(cp),hp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hp),t.updateMatrixWorld(),gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ry=new Ce,sy=new S,ay=new S;var vh=class extends gh{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zo=class extends Oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new vh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var oy=new Ce,ly=new Ce,cy=new Ce;var Ho=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=up(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=up();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function up(){return(typeof performance=="undefined"?Date:performance).now()}var hy=new S,uy=new cn,dy=new S,py=new S;var my=new S,fy=new cn,gy=new S,vy=new S;var bh="\\[\\]\\.:\\/",xg=new RegExp("["+bh+"]","g"),vc="[^"+bh+"]",Mg="[^"+bh.replace("\\.","")+"]",Eg=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",vc)+/(WCOD+)?/.source.replace("WCOD",Mg)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc)+"$"),bg=["material","materials","bones","map"],it=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xg,"")}static parseTrackName(e){let t=Eg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);bg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};it.Composite=class{constructor(i,e,t){let n=t||it.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray],it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yy=new Float32Array(1);var ko=class{constructor(e,t,n=0,r=1/0){this.ray=new or(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return yh(e,this,n,t),n.sort(dp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)yh(e[r],this,n,t);return n.sort(dp),n}};function dp(i,e){return i.distance-e.distance}function yh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let r=i.children;for(let s=0,a=r.length;s<a;s++)yh(r[s],e,t,!0)}}var _y=new he;var xy=new S,My=new S;var Ey=new S;var by=new S,Sy=new Ce,wy=new Ce;var Ty=new S,Ay=new Se,Ry=new Se;var Cy=new S,Ly=new S,Py=new S;var Iy=new S,Dy=new Xs;var Fy=new wn;var Uy=new S;typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);var On=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),wh=(()=>{try{return matchMedia("(prefers-reduced-motion: reduce)").matches||localStorage.getItem("wedding-lite")==="1"}catch{return!1}})(),Ii=(()=>{let i=new Uint8Array([150,150,150,255,215,215,215,255,255,255,255,255]),e=new To(i,3,1,ln);return e.minFilter=e.magFilter=Rt,e.needsUpdate=!0,e})(),Sh=new Map;function dt(i,e={}){let t=i+JSON.stringify(e);if(!e.unique&&Sh.has(t))return Sh.get(t);let n=new Tt({color:i,gradientMap:Ii,...e});return delete n.unique,e.unique||Sh.set(t,n),n}function ae(i,e,t=0,n=0,r=0,s){let a=new me(i,typeof e=="string"||typeof e=="number"?dt(e,s):e);return a.position.set(t,n,r),a.castShadow=!0,a.receiveShadow=!0,a}function Yt(i,{w:e=512,h:t=256,bg:n="#FFFDF8",color:r="#4A3B38",font:s="Gowun Batang",size:a=56,radius:o=40,border:l=null,sub:c=null,subSize:h=30}={}){let d=document.createElement("canvas");d.width=e,d.height=t;let u=d.getContext("2d");n&&(u.fillStyle=n,Pi(u,0,0,e,t,o),u.fill(),l&&(u.lineWidth=10,u.strokeStyle=l,Pi(u,5,5,e-10,t-10,o-4),u.stroke())),u.fillStyle=r,u.textAlign="center",u.textBaseline="middle";let p=Array.isArray(i)?i:[i],f=p.length*a*1.25+(c?h*1.5:0),v=t/2-f/2+a*.62;u.font=`700 ${a}px "${s}", serif`;for(let m of p)u.fillText(m,e/2,v),v+=a*1.25;return c&&(u.font=`${h}px "Gowun Dodum", sans-serif`,u.globalAlpha=.7,u.fillText(c,e/2,v+h*.2)),d}function Pi(i,e,t,n,r,s){i.beginPath(),i.moveTo(e+s,t),i.arcTo(e+n,t,e+n,t+r,s),i.arcTo(e+n,t+r,e,t+r,s),i.arcTo(e,t+r,e,t,s),i.arcTo(e,t,e+n,t,s),i.closePath()}function Mt(i){let e=new Co(i);return e.colorSpace=ut,e.anisotropy=4,e}function qo(i,{scale:e=4.2,bg:t="rgba(255,253,248,.95)",color:n="#4A3B38"}={}){let r=document.createElement("canvas");r.width=512,r.height=128;let s=r.getContext("2d"),a=54;for(s.font=`700 ${a}px "Gowun Dodum", sans-serif`;s.measureText(i).width>430&&a>32;)a-=2,s.font=`700 ${a}px "Gowun Dodum", sans-serif`;let o=Math.min(490,s.measureText(i).width+70);s.fillStyle=t,s.shadowColor="rgba(120,80,60,.25)",s.shadowBlur=12,s.shadowOffsetY=4,Pi(s,(512-o)/2,18,o,86,43),s.fill(),s.shadowColor="transparent",s.fillStyle=n,s.textAlign="center",s.textBaseline="middle",s.fillText(i,256,63);let l=new Ri(new ii({map:Mt(r),depthWrite:!1,transparent:!0}));return l.scale.set(e,e/4,1),l.renderOrder=10,l}var _e=(i,e)=>i+Math.random()*(e-i),Sg=(i,e,t)=>i+(e-i)*t,ai=(i,e,t,n)=>Sg(i,e,1-Math.exp(-t*n)),Np=(i,e,t)=>Math.max(e,Math.min(t,i));var Op=[[0,34,0,10,3.2],[0,-2,0,-19,2.6],[5,1,20,-5.5,2.6],[-6,3,-12,2,2.4],[-6,0,-18,-10,2.4],[6,7,10,9,2.2],[-2,20,-10,19,2.2]],Bn={x:0,z:4,r:7.5},Lt={day:{top:"#7EC8EE",mid:"#CDEBFA",horizon:"#FFE6D2",fog:"#FFE6D2",sun:"#FFEBD0",sunI:2.4,hemi:"#FFF6EA",ground:"#C6DDB0",hemiI:1.9,lamps:!1,stars:!1},dusk:{top:"#6A7FC4",mid:"#F6A77A",horizon:"#FFD39B",fog:"#FFD39B",sun:"#FFB07A",sunI:2,hemi:"#FFD3B0",ground:"#B8A890",hemiI:1.6,lamps:!0,stars:!1},night:{top:"#0F1B3D",mid:"#2A3A6B",horizon:"#5A4A7A",fog:"#5A4A7A",sun:"#B8C8FF",sunI:1.1,hemi:"#8FA3D8",ground:"#3E4A5F",hemiI:1.25,lamps:!0,stars:!0}};function wg(i,e,t,n,r,s){let a=r-t,o=s-n,l=Math.max(0,Math.min(1,((i-t)*a+(e-n)*o)/(a*a+o*o)));return Math.hypot(i-(t+a*l),e-(n+o*l))}function Tg(i,e,t=.6){return Math.hypot(i-Bn.x,e-Bn.z)<Bn.r+t?!0:Op.some(n=>wg(i,e,n[0],n[1],n[2],n[3])<n[4]/2+t)}function Ag(){let i=new Ze(400,32,16),e=new An({side:Ot,depthWrite:!1,fog:!1,uniforms:{top:{value:new Se(Lt.day.top)},mid:{value:new Se(Lt.day.mid)},horizon:{value:new Se(Lt.day.horizon)},sunDir:{value:new S(.5,.45,-.75).normalize()},sunK:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 top; uniform vec3 mid; uniform vec3 horizon; uniform vec3 sunDir; uniform float sunK; varying vec3 vDir;
      void main(){
        float h = clamp(vDir.y, -0.2, 1.0);
        vec3 c = mix(horizon, mid, smoothstep(-0.02, 0.18, h));
        c = mix(c, top, smoothstep(0.18, 0.75, h));
        float s = max(dot(normalize(vDir), sunDir), 0.0);
        c += (vec3(1.0, 0.86, 0.6) * pow(s, 40.0) * 0.55 + vec3(1.0, 0.95, 0.8) * pow(s, 400.0) * 1.2) * sunK;
        gl_FragColor = vec4(c, 1.0);
      }`}),t=new me(i,e);t.renderOrder=-1;let n=320,r=new Float32Array(n*3);for(let o=0;o<n;o++){let l=_e(0,Math.PI*2),c=_e(.06,1),h=380,d=h*Math.sqrt(1-c*c);r.set([Math.cos(l)*d,h*c,Math.sin(l)*d],o*3)}let s=new $e;s.setAttribute("position",new ft(r,3));let a=new cr(s,new Ci({color:"#FFF8D6",size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.9,depthWrite:!1}));return a.visible=!1,a.renderOrder=-1,t.add(a),t.userData.setPalette=o=>{e.uniforms.top.value.set(o.top),e.uniforms.mid.value.set(o.mid),e.uniforms.horizon.value.set(o.horizon),e.uniforms.sunK.value=o.stars?.15:1,a.visible=!!o.stars},t}function Rg(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#A9D18E",e.fillRect(0,0,256,256);let t=["#9DC883","#B4D899","#A2CC87","#BEDDA3"];for(let r=0;r<1400;r++)e.fillStyle=t[r%t.length],e.globalAlpha=.5,e.beginPath(),e.arc(Math.random()*256,Math.random()*256,Math.random()*3+1,0,7),e.fill();let n=Mt(i);return n.wrapS=n.wrapT=Ti,n.repeat.set(60,60),n}function Cg(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");e.fillStyle="#F1E4CF",e.fillRect(0,0,128,128);for(let n=0;n<18;n++)e.fillStyle=["#E8D8BF","#F6ECDC","#EADCC6"][n%3],e.beginPath(),e.ellipse(Math.random()*128,Math.random()*128,10+Math.random()*12,8+Math.random()*8,Math.random()*3,0,7),e.fill();let t=Mt(i);return t.wrapS=t.wrapT=Ti,t}var Lg=new We(.22,.32,2,8),Bp=new Gt(1.3,1);function Th(i,e,{kind:t="green",s:n=1}={}){let r=new be;r.add(ae(Lg,"#A47A5C",0,1,0));let s=t==="blossom"?["#F9C9D2","#F6B5C2","#FCDCE3"]:["#8CC47A","#9ED08A","#7DB86C"];return[[0,2.6,0,1.2],[.8,2.2,.2,.85],[-.75,2.3,-.2,.9],[.1,3.3,-.1,.8]].forEach(([o,l,c,h],d)=>{let u=ae(Bp,s[d%3],o,l,c);u.scale.setScalar(h),r.add(u)}),r.position.set(i,0,e),r.scale.setScalar(n),r.rotation.y=Math.random()*6,r}function Pg(i,e,t=1,n="#8CC47A"){let r=new be;return[[0,.45,0,.6],[.5,.35,.1,.45],[-.45,.35,-.05,.45]].forEach(([s,a,o,l])=>{let c=ae(Bp,n,s,a,o);c.scale.setScalar(l),r.add(c)}),r.position.set(i,0,e),r.scale.setScalar(t),r}function Ig(i,e){let t=new be;t.add(ae(new We(.08,.12,2.8,8),"#6E5A50",0,1.4,0)),t.add(ae(new We(.22,.22,.1,8),"#6E5A50",0,.05,0));let n=new me(new Ze(.28,12,10),new je({color:"#FFF1C9"}));return n.position.y=3,t.add(n),t.add(ae(new Un(.34,.26,8),"#6E5A50",0,3.3,0)),t.position.set(i,0,e),t}var Ah;function Dg(i,e){if(!Ah){let s=document.createElement("canvas");s.width=s.height=128;let a=s.getContext("2d"),o=a.createRadialGradient(64,64,4,64,64,64);o.addColorStop(0,"rgba(255,236,170,.95)"),o.addColorStop(.35,"rgba(255,220,140,.45)"),o.addColorStop(1,"rgba(255,200,120,0)"),a.fillStyle=o,a.fillRect(0,0,128,128),Ah=Mt(s)}let t=new be,n=new Ri(new ii({map:Ah,blending:pp,depthWrite:!1,transparent:!0,opacity:.9}));n.position.set(0,3,0),n.scale.set(3.6,3.6,1);let r=new me(new qt(2.6,24),new je({color:"#FFE4A8",transparent:!0,opacity:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return r.rotation.x=-Math.PI/2,r.position.y=.04,t.add(n,r),t.position.set(i,0,e),t}function Fg(i,e,t=0){let n=new be,r="#D9A877";for(let s=0;s<3;s++)n.add(ae(new Me(1.8,.08,.16),r,0,.5,-.2+s*.2));for(let s=0;s<2;s++){let a=ae(new Me(1.8,.14,.06),r,0,.75+s*.2,-.32);n.add(a)}for(let s of[-.75,.75])n.add(ae(new Me(.08,.5,.5),"#8C6B55",s,.25,0)),n.add(ae(new Me(.08,.6,.06),"#8C6B55",s,.8,-.32));return n.position.set(i,0,e),n.rotation.y=t,n}function Ug(i,e,t=3.2){let n=new be,r=["#F4B8C0","#FFFFFF","#F7D58B","#F9C59E","#E88A98"],s=[];for(let a=0;a<5;a++){let o=a/5*Math.PI*2,l=Math.cos(o)*.35,c=Math.sin(o)*.35,h=t+a%2*.35,d=ae(new Ze(.34,14,12),r[a],l,h,c);d.scale.y=1.18;let u=new Ro(new $e().setFromPoints([new S(0,.4,0),new S(l,h-.4,c)]),new qs({color:"#B8A59B"}));n.add(d,u),s.push({b:d,base:h,off:Math.random()*6})}return n.add(ae(new Ze(.12,8,6),"#C9637A",0,.4,0)),n.add(ae(new We(.2,.25,.4,10),"#FFF3EA",0,.2,0)),n.position.set(i,0,e),n.userData.update=a=>s.forEach(o=>{o.b.position.y=o.base+Math.sin(a*1.4+o.off)*.12,o.b.rotation.z=Math.sin(a+o.off)*.08}),n}function Ng(i,e){let t=On?500:900,n=new Un(.07,.4,3),r=new lr(n,dt("#8DC175"),t),s=new Gt(.11,0),a=On?260:480,o=new lr(s,new Tt({color:"#fff"}),a),l=new Ce,c=new cn,h=new S,d=new S,u=new ls,p=()=>{for(let v=0;v<20;v++){let m=Math.random()*Math.PI*2,_=Math.sqrt(Math.random())*38,g=Math.cos(m)*_,y=Math.sin(m)*_;if(!Tg(g,y)&&!e(g,y))return[g,y]}return[60,60]};for(let v=0;v<t;v++){let[m,_]=p();u.set(_e(-.2,.2),_e(0,6),_e(-.2,.2)),c.setFromEuler(u);let g=_e(.7,1.4);l.compose(d.set(m,.18*g,_),c,h.set(g,g,g)),r.setMatrixAt(v,l)}let f=["#FFFFFF","#F4B8C0","#F7D58B","#FFB7A5","#E7C6F2","#FFE3EA"].map(v=>new Se(v));for(let v=0;v<a;v++){let[m,_]=p();l.compose(d.set(m,.14,_),c.identity(),h.setScalar(_e(.8,1.3))),o.setMatrixAt(v,l),o.setColorAt(v,f[v%f.length])}r.receiveShadow=!0,i.add(r,o)}function Og(i){let e=[],t=new be;i.add(t);let n=new Ze(1,12,10),r=new Tt({color:"#FFFFFF",emissive:"#FFF4EA",emissiveIntensity:.35});for(let a=0;a<14;a++){let o=new be,l=4+Math.floor(Math.random()*3);for(let d=0;d<l;d++){let u=new me(n,r);u.position.set(d*2.2-l,Math.random()*1.2,Math.random()*1.5),u.scale.setScalar(_e(1.6,2.8)),o.add(u)}let c=Math.random()*Math.PI*2,h=_e(70,150);o.position.set(Math.cos(c)*h,_e(28,50),Math.sin(c)*h-30),o.scale.set(1.3,.8,1),t.add(o),e.push({g:o,speed:_e(.4,1)})}return{group:t,update:a=>{t.visible&&e.forEach(o=>{o.g.position.x+=o.speed*a,o.g.position.x>170&&(o.g.position.x=-170)})}}}function Bg(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d");return e.fillStyle="#FFFFFF",e.beginPath(),e.ellipse(32,32,26,15,.6,0,7),e.fill(),Mt(i)}function zg(i){let e=wh?0:On?160:300;if(!e)return{group:new be,update(){},setCount(){}};let t=new Float32Array(e*3),n=[],r=new Float32Array(e*3),s=["#F9C9D2","#FFFFFF","#FCDCE3","#F7D58B"].map(c=>new Se(c));for(let c=0;c<e;c++){t[c*3]=_e(-30,30),t[c*3+1]=_e(0,9),t[c*3+2]=_e(-30,30),n.push([_e(.3,.9),_e(.4,1.1),_e(0,6)]);let h=s[c%s.length];r.set([h.r,h.g,h.b],c*3)}let a=new $e;a.setAttribute("position",new ft(t,3)),a.setAttribute("color",new ft(r,3));let o=new cr(a,new Ci({size:.28,map:Bg(),transparent:!0,depthWrite:!1,vertexColors:!0,alphaTest:.1}));o.frustumCulled=!1,i.add(o);let l=e;return{group:o,setCount(c){l=Math.max(0,Math.min(e,c)),a.setDrawRange(0,l)},update(c,h,d){if(o.visible){for(let u=0;u<l;u++){let p=n[u];t[u*3]+=(Math.sin(h*p[0]+p[2])*.6+.35)*c,t[u*3+1]-=p[1]*c,t[u*3+2]+=Math.cos(h*p[0]*.7+p[2])*.4*c,t[u*3+1]<0&&(t[u*3]=d.x+_e(-28,28),t[u*3+1]=_e(6,9),t[u*3+2]=d.z+_e(-28,20))}a.attributes.position.needsUpdate=!0}}}}function Hg(i){let e=new be;i.add(e);let t=[],n=new qt(.16,10),r=["#F7D58B","#F4B8C0","#FFFFFF","#BFE3F5"];for(let a=0;a<(wh?0:8);a++){let o=new be,l=new je({color:r[a%4],side:pr}),c=new me(n,l),h=new me(n,l);c.position.x=-.14,h.position.x=.14;let d=new be,u=new be;d.add(c),u.add(h),o.add(d,u),e.add(o),t.push({g:o,lw:d,rw:u,cx:_e(-25,25),cz:_e(-25,25),r:_e(2,5),sp:_e(.3,.7),off:_e(0,6)})}return{group:e,update:(a,o)=>{e.visible&&t.forEach(l=>{let c=o*l.sp+l.off;l.g.position.set(l.cx+Math.cos(c)*l.r,1.2+Math.sin(o*2+l.off)*.5,l.cz+Math.sin(c*1.3)*l.r),l.g.rotation.y=-c;let h=Math.sin(o*18+l.off)*1.1;l.lw.rotation.y=h,l.rw.rotation.y=-h})}}}var Rh=new Map;function zp(i="\u{1F497}"){if(Rh.has(i))return Rh.get(i);let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");t.font="52px serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,32,36);let n=Mt(e);return Rh.set(i,n),n}var ms=[];function fs(i,e,t=10,n="\u{1F497}"){let r=zp(n);for(let s=0;s<t&&!(ms.length>90);s++){let a=new Ri(new ii({map:r,transparent:!0,depthWrite:!1}));a.position.copy(e).add(new S(_e(-.4,.4),_e(0,.5),_e(-.4,.4))),a.scale.setScalar(_e(.35,.6)),i.add(a),ms.push({sp:a,v:new S(_e(-1,1),_e(2,3.5),_e(-1,1)),life:1.4+Math.random()*.4,scene:i})}}function Hp(i,e,t,n="\u{1FA99}",r=.7,s){let a=new Ri(new ii({map:zp(n),transparent:!0,depthWrite:!1}));a.position.copy(e),a.scale.setScalar(.5),i.add(a);let o=9,l=new S((t.x-e.x)/r,(t.y-e.y+.5*o*r*r)/r,(t.z-e.z)/r);ms.push({sp:a,v:l,life:r,scene:i,g:o,onLand:s})}function kp(i){var e;for(let t=ms.length-1;t>=0;t--){let n=ms[t];n.life-=i,n.v.y-=(n.g||1.2)*i,n.sp.position.addScaledVector(n.v,i),n.g||(n.sp.material.opacity=Math.min(1,n.life)),n.life<=0&&(n.scene.remove(n.sp),n.sp.material.dispose(),ms.splice(t,1),(e=n.onLand)==null||e.call(n,n.sp.position))}}function Gp(i,e){let t=new be;i.add(t);let n=Ag();i.add(n);let r=new me(new qt(160,64),new Tt({map:Rg(),gradientMap:Ii}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,t.add(r);let s=Cg(),a=new Tt({map:s,gradientMap:Ii,polygonOffset:!0,polygonOffsetFactor:-1});for(let[_,g,y,E,A]of Op){let w=Math.hypot(y-_,E-g),T=new et(A,w),G=T.attributes.uv;for(let O=0;O<G.count;O++)G.setXY(O,G.getX(O)*A/3,G.getY(O)*w/3);let H=new me(T,a);H.rotation.x=-Math.PI/2,H.rotation.z=Math.atan2(y-_,E-g)+Math.PI,H.position.set((_+y)/2,.02,(g+E)/2),H.receiveShadow=!0,t.add(H);for(let[O,J]of[[_,g],[y,E]]){let P=new me(new qt(A/2,20),a);P.rotation.x=-Math.PI/2,P.position.set(O,.021,J),P.receiveShadow=!0,t.add(P)}}let o=new me(new qt(Bn.r,48),a);o.rotation.x=-Math.PI/2,o.position.set(Bn.x,.025,Bn.z),o.receiveShadow=!0,t.add(o);let l=new me(new si(Bn.r-.35,Bn.r,48),dt("#E6D2B5"));l.rotation.x=-Math.PI/2,l.position.set(Bn.x,.03,Bn.z),t.add(l);let c=[];for(let _=0;_<46;_++){let g=_/46*Math.PI*2+_e(-.04,.04),y=_e(41,46),E=Math.cos(g)*y,A=Math.sin(g)*y;Math.abs(E)<4&&A>30||t.add(Th(E,A,{kind:_%4===0?"blossom":"green",s:_e(1.1,1.6)}))}for(let _=0;_<30;_++){let g=Math.random()*Math.PI*2,y=_e(50,75);t.add(Th(Math.cos(g)*y,Math.sin(g)*y,{kind:_%3===0?"blossom":"green",s:_e(1.4,2.2)}))}for(let _=0;_<8;_++){let g=ae(new Ze(1,20,12),_%2?"#9CCB84":"#AED596",_e(-120,120),-_e(8,14),-_e(90,130));g.scale.set(_e(25,45),_e(18,26),_e(20,30)),t.add(g)}[[-9,27,"blossom"],[14.5,31,"blossom"],[-24,22,"green"],[30,4,"green"],[-28,-20,"blossom"],[33,-20,"green"],[-8,-28,"green"],[8,-29,"blossom"],[-15,12,"blossom"],[16,14,"green"],[-22,-2,"green"],[11,-22,"green"],[-12,-24,"blossom"]].forEach(([_,g,y])=>{t.add(Th(_,g,{kind:y,s:_e(1,1.3)})),c.push({x:_,z:g,r:.7})}),[[-5,28],[12.5,27.5],[-14,8],[13,3],[-3,-21],[3,-21],[-26,12],[26,10],[-20,-18],[28,-8]].forEach(([_,g],y)=>{t.add(Pg(_,g,_e(.9,1.3),y%3===0?"#A7D08F":"#8CC47A")),c.push({x:_,z:g,r:.9})});let d=new be;d.visible=!1,t.add(d),[[-2.3,30],[2.3,24],[-2.3,18],[2.3,12],[7.5,-1],[14,-3.5],[-8.6,5.5],[-12,-5],[-8,9],[8,12]].forEach(([_,g])=>{t.add(Ig(_,g)),d.add(Dg(_,g)),c.push({x:_,z:g,r:.3})}),[[-6.3,8.8,2.4],[6.3,8.8,-2.4],[-6.8,-.5,1.2],[6.8,-1,-1.2]].forEach(([_,g,y])=>{let E=Fg(_,g,y);t.add(E),c.push({x:_,z:g,r:.9})});let u=[];[[-2.5,33],[2.5,33],[-3.2,-17],[3.2,-17],[15.5,-7],[24.5,-7]].forEach(([_,g])=>{let y=Ug(_,g);t.add(y),u.push(y.userData.update),c.push({x:_,z:g,r:.4})}),Ng(t,e);let p=Og(t),f=zg(t),v=Hg(t),m="day";return{group:t,sky:n,colliders:c,get time(){return m},setTime(_){m=Lt[_]?_:"day";let g=Lt[m];return n.userData.setPalette(g),d.visible=g.lamps,g},setLite(_){f.setCount(_>=2?0:_===1?80:300),f.group.visible=_<2,p.group.visible=v.group.visible=_<2},update(_,g,y){p.update(_),f.update(_,g,y),v.update(_,g),u.forEach(E=>E(g))}}}function Qs({type:i="guest",outfit:e="#8FB8DE",hair:t="#5A3A2A",skin:n="#FFE0C7",longHair:r=!1}={}){let s=new be,a=new be;s.add(a);let o=i==="bride",l=i==="groom",c=l?"#2F2B33":o?"#FFFFFF":e,h=l?"#2F2B33":o?"#FFFFFF":"#6B5B53",d=new hr(.1,.28,4,8),u=new Ze(.13,12,8),p=[];for(let N of[-1,1]){let I=new be;I.position.set(.14*N,.56,0);let U=ae(d,h,0,-.26,0),D=ae(u,o?"#F4E3D7":"#4A3B38",0,-.47,.04);D.scale.set(1,.6,1.35),I.add(U,D),a.add(I),p.push(I)}let f=ae(new hr(.3,.3,6,14),c,0,.86,0);if(f.scale.set(1,1,.85),a.add(f),l){let N=ae(new Un(.13,.36,3),"#FFFFFF",0,.98,.2);N.rotation.set(Math.PI+.25,0,0),N.scale.z=.3;let I=new be,U=ae(new Ze(.04,8,6),"#1E1A22",0,0,0),D=new Un(.06,.12,4),V=ae(D,"#1E1A22",-.07,0,0);V.rotation.z=-Math.PI/2;let se=ae(D,"#1E1A22",.07,0,0);se.rotation.z=Math.PI/2,I.add(U,V,se),I.position.set(0,1.1,.26);let M=ae(new Ze(.05,8,6),"#F4B8C0",-.17,1.02,.22);a.add(N,I,M)}if(o){let N=ae(new We(.28,.78,.95,24,1,!0),"#FFFFFF",0,.47,0,{side:pr}),I=ae(new Nn(.76,.05,6,30),"#FFF3F5",0,.03,0);I.rotation.x=Math.PI/2;let U=ae(new Nn(.3,.035,6,24),"#F4B8C0",0,.88,0);U.rotation.x=Math.PI/2,a.add(N,I,U),p.forEach(D=>D.visible=!1)}let v=new hr(.075,.3,4,8),m=new Ze(.085,10,8),_=[];for(let N of[-1,1]){let I=new be;I.position.set(.36*N,1.08,0);let U=ae(v,o?n:c,.02*N,-.2,0),D=ae(m,n,.03*N,-.42,0);I.add(U,D),I.rotation.z=.12*N,a.add(I),_.push(I)}if(o){let N=new be,I=["#F4B8C0","#FFFFFF","#F7D58B","#E88A98","#FFE3EA"];for(let U=0;U<7;U++){let D=U/7*Math.PI*2;N.add(ae(new Ze(.075,8,6),I[U%I.length],Math.cos(D)*.09,.03,Math.sin(D)*.09))}N.add(ae(new Ze(.08,8,6),"#E88A98",0,.07,0)),N.add(ae(new Un(.07,.22,8),"#9CC08A",0,-.13,0)),N.position.set(0,.7,.36),a.add(N),_[0].rotation.set(-.9,0,.5),_[1].rotation.set(-.9,0,-.5)}let g=new be;g.position.y=1.5,a.add(g);let y=ae(new Ze(.42,24,18),n,0,0,0);g.add(y);let E=dt(t),A=new me(new Ze(.45,24,16,0,Math.PI*2,0,Math.PI*.52),E);A.rotation.x=-.35,A.position.set(0,.03,-.03),A.castShadow=!0,g.add(A);let w=new me(new Ze(.2,12,8),E);if(w.scale.set(1.5,.55,.8),w.position.set(.1,.26,.27),w.rotation.z=-.3,g.add(w),r||o){let N=new me(new Ze(.42,16,12),E);N.scale.set(1.05,1.25,.7),N.position.set(0,-.22,-.18),g.add(N)}if(o){let N=new me(new Ze(.55,20,14,0,Math.PI*2,0,Math.PI*.62),new Tt({color:"#FFFFFF",transparent:!0,opacity:.55,side:pr,depthWrite:!1}));N.scale.set(1,1.6,1),N.position.set(0,-.35,-.12),N.rotation.x=-.25,g.add(N);let I=new be;for(let U=0;U<9;U++){let D=Math.PI*.15+U/8*Math.PI*.7;I.add(ae(new Ze(.055,8,6),U%2?"#F4B8C0":"#FFFFFF",Math.cos(D)*.4,.22,-Math.sin(D)*.06+.02))}I.rotation.x=-.5,g.add(I)}let T=new Ze(.05,10,8),G=new je({color:"#2B2220"}),H=[];for(let N of[-1,1]){let I=new me(T,G);I.position.set(.14*N,.02,.38),I.scale.set(1,1.3,.6),g.add(I),H.push(I);let U=new me(new Ze(.016,6,4),new je({color:"#fff"}));U.position.set(.14*N+.018,.05,.415),g.add(U);let D=new me(new qt(.07,14),new je({color:"#FFB3B3",transparent:!0,opacity:.7}));D.position.set(.24*N,-.09,.345),D.rotation.y=.55*N,g.add(D)}let O=new me(new Nn(.045,.012,6,12,Math.PI),G);O.position.set(0,-.1,.39),O.rotation.z=Math.PI,g.add(O),s.traverse(N=>{N.isMesh&&N.material!==G&&(N.castShadow=!0)});let J=0,P=2+Math.random()*3,q=0,Z=0,oe=_[1].rotation.clone(),W={root:s,body:a,head:g,arms:_,legs:p,type:i};return W.animate=(N,I=0,U=0)=>{let D=Math.min(1,I);J+=N*(4+7*D);let V=Math.sin(J)*.75*D;if(o||(p[0].rotation.x=V,p[1].rotation.x=-V,_[0].rotation.x=-V*.8,_[1].rotation.x=V*.8),a.position.y=Math.abs(Math.sin(J))*.07*D+Math.sin(U*2)*.012,a.rotation.z=Math.sin(J)*.04*D,g.rotation.z=Math.sin(U*1.3)*.04,i==="guest"){Z=D<.05?Z+N:0;let M=Z>4?Math.sin(U*.8)*.45:0;g.rotation.y+=(M-g.rotation.y)*Math.min(1,N*4)}P-=N;let se=P<.12?.15:1;if(H.forEach(M=>M.scale.y=1.3*se),P<0&&(P=2+Math.random()*3),q>0){q-=N;let M=_[1];M.rotation.z=-2.5+Math.sin(U*14)*.35,M.rotation.x=0,q<=0&&M.rotation.copy(oe)}},W.wave=(N=1.6)=>{q=N},W}var mr={x:20,z:-8.4,r:1.7},tt={x:8.2,z:25.5,r:1.8},kg=["\uC640\uC8FC\uC154\uC11C \uC815\uB9D0 \uAC10\uC0AC\uD574\uC694 \u{1F490}","\uC2DD\uC0AC \uAF2D \uD558\uACE0 \uAC00\uC138\uC694!","\uBD84\uC218\uC5D0 \uB3D9\uC804 \uB358\uC838 \uBCF4\uC168\uC5B4\uC694?","\uC0AC\uC9C4\uAD00\uB3C4 \uB4E4\uB7EC \uC8FC\uC138\uC694 \u{1F5BC}\uFE0F","\uD3B8\uC9C0 \uB0A8\uACA8 \uC8FC\uC2DC\uBA74 \uAF2D \uC77D\uC744\uAC8C\uC694 \u{1F48C}","\uC624\uB298 \uC815\uB9D0 \uD589\uBCF5\uD574\uC694 \u{1F970}"];function Vp(i){var oe;let e=window.WEDDING,t=new be;i.add(t);let n=[],r=[],s=[],a=[];function o(W,N,I,U,D,V,se,M=3.4){let x=qo(`${I} ${N}`);x.position.set(D,M,V),t.add(x);let R={id:W,text:N,emoji:I,action:U,pos:new S(D,0,V),r:se,label:x,baseY:M,off:Math.random()*6};return s.push(R),R}let l=(W,N,I)=>new me(new et(N,I),new je({map:Mt(W),transparent:!0})),{date:c}=Xt(),h=e.date.slice(0,10).replace(/-/g,". ");{let W=new be,N="#B98A66",I=ae(new Me(.1,3,.1),N,-.8,1.45,.1);I.rotation.z=.12;let U=ae(new Me(.1,3,.1),N,.8,1.45,.1);U.rotation.z=-.12;let D=ae(new Me(.1,3,.1),N,0,1.4,-.45);D.rotation.x=-.3;let V=ae(new Me(1.9,.08,.25),N,0,.75,.2),se=ae(new Me(1.9,2.5,.06),"#FFFDF8",0,2.05,.2);se.rotation.x=-.08;let M=Yt(["Wedding","Invitation"],{w:512,h:680,size:64,bg:"#FFFDF8",border:"#E2B865",radius:24,color:"#C9637A",sub:`${e.groom.name} \u2665 ${e.bride.name}`,subSize:40}),x=M.getContext("2d");x.fillStyle="#7C6A66",x.font='30px "Gowun Dodum"',x.textAlign="center",x.fillText(h,256,590),x.font="80px serif",x.fillText("\u{1F48C}",256,130);let R=l(M,1.75,2.33);R.position.set(0,2.05,.235),R.rotation.x=-.08,W.add(I,U,D,V,se,R),W.position.set(-4.8,0,24),W.rotation.y=.35,t.add(W),n.push({x:-4.8,z:24,r:1}),o("invitation","\uCCAD\uCCA9\uC7A5","\u{1F48C}","\uCCAD\uCCA9\uC7A5 \uBCF4\uAE30",-4.8,24,3,3.8)}{let W=new be,N="#E4605A";W.add(ae(new We(.2,.25,.5,10),"#8C6B55",0,.25,0));let I=ae(new Me(1,1.3,.8),N,0,1.15,0),U=ae(new We(.4,.4,1,20,1,!1,0,Math.PI),N,0,1.8,0);U.rotation.z=Math.PI/2;let D=ae(new Me(.6,.06,.05),"#4A2B28",0,1.55,.41),V=l(Yt("\uD3B8\uC9C0\uD568",{w:256,h:128,size:58,bg:"#FFFDF8",radius:24,color:"#C9637A"}),.7,.35);V.position.set(0,1.1,.41);let se=[];for(let M=0;M<3;M++){let x=ae(new Me(.4,.28,.02),M===1?"#FFF3EA":"#FFFFFF",0,2.4,0);W.add(x),se.push({l:x,off:M*2.1})}W.add(I,U,D,V),W.position.set(4.8,0,23),W.rotation.y=-.4,t.add(W),a.push(M=>se.forEach(({l:x,off:R})=>{let B=(M*.35+R/6.3)%1;x.position.set(Math.sin(B*6+R)*.5,2+B*1.6,Math.cos(B*5)*.3),x.rotation.set(B*3,B*5+R,.3),x.visible=B<.95})),n.push({x:4.8,z:23,r:.8}),o("mailbox","\uD3B8\uC9C0\uD568","\u2709\uFE0F","\uCD95\uD558 \uD3B8\uC9C0 \uC4F0\uAE30",4.8,23,2.8,4.1)}let d=new be;t.add(d);let u=[];{d.add(ae(new We(tt.r+.3,tt.r+.4,.18,28),"#B98A66",tt.x,.09,tt.z)),d.add(ae(new We(tt.r+.05,tt.r+.05,.22,28),"#7A5A44",tt.x,.1,tt.z));let W=ae(new We(.05,.06,1.1,6),"#A47A5C",tt.x,.55,tt.z+tt.r+.5),N=l(Yt("\uD3B8\uC9C0 \uAF43\uBC2D",{w:360,h:110,size:50,bg:"#FFFDF8",radius:26,color:"#C9637A"}),1.3,.4);N.position.set(tt.x,1.15,tt.z+tt.r+.55);let I=N.clone();I.rotation.y=Math.PI,I.position.z-=.02,d.add(W,N,I),n.push({x:tt.x,z:tt.z,r:tt.r+.5})}let p=new We(.03,.03,.5,6),f=new Gt(.16,0),v=new Ze(.06,8,6),m=W=>{let N=7;for(let I of String(W))N=N*31+I.charCodeAt(0)>>>0;return N};function _(W,N){if(u.length>=60)return null;let I=m(`${W.name}|${W.time||""}|${u.length}`),U=I%360/360*Math.PI*2,D=.25+(I>>9)%100/100*(tt.r-.55),V=tt.x+Math.cos(U)*D,se=tt.z+Math.sin(U)*D,M=new be;if(M.add(ae(p,"#8DC175",0,.45,0)),M.add(ae(f,W.side==="\uC2E0\uBD80\uCE21"?"#F4B8C0":"#8FB8DE",0,.75,0)),M.add(ae(v,"#F7D58B",0,.75,.13)),u.length<24){let x=String(W.name||"").slice(0,8),R=qo(x,{scale:1.5,bg:"rgba(255,253,248,.85)"});R.position.y=1.12,M.add(R)}if(M.position.set(V,0,se),M.rotation.y=U,d.add(M),u.push(M),N){let x=0;M.scale.setScalar(.01),a.push((R,B)=>{if(x>=1)return;x=Math.min(1,x+B/.7);let C=1-Math.pow(1-x,3);M.scale.setScalar(C)})}return new S(V,0,se)}{let W=new be;W.add(ae(new We(.1,.12,3.2,8),"#A47A5C",0,1.6,0)),[["\uC624\uC2DC\uB294 \uAE38","#FFFDF8",.4],["\uC608\uC2DD\uC7A5 \u2192","#F4B8C0",-.5],["\uC8FC\uCC28 \uC548\uB0B4","#F7D58B",.9]].forEach(([I,U,D],V)=>{let se=new be,M=ae(new Me(1.5,.42,.08),U,.55,0,0),x=ae(new We(.21,.21,.08,3),U,1.35,0,0);x.rotation.x=Math.PI/2,x.rotation.y=Math.PI/2;let R=l(Yt(I,{w:384,h:110,size:56,bg:null}),1.4,.4);R.position.set(.55,0,.05);let B=R.clone();B.rotation.y=Math.PI,B.position.z=-.05,se.add(M,x,R,B),se.position.y=2.8-V*.55,se.rotation.y=D,W.add(se)}),W.position.set(-3.6,0,13.5),t.add(W),n.push({x:-3.6,z:13.5,r:.4}),o("directions","\uC624\uC2DC\uB294 \uAE38","\u{1F5FA}\uFE0F","\uC624\uC2DC\uB294 \uAE38 \uBCF4\uAE30",-3.6,13.5,2.6,3.9)}{let W=new be,N=(I,U,D,V,se,M)=>{let x=new be;x.add(ae(new Me(I,I,I),U,0,I/2,0)),x.add(ae(new Me(I*1.02,I*1.02,I*.16),D,0,I/2,0)),x.add(ae(new Me(I*.16,I*1.02,I*1.02),D,0,I/2,0));let R=new Nn(I*.18,I*.06,8,16),B=ae(R,D,-I*.15,I+I*.12,0);B.rotation.set(0,Math.PI/2,.6);let C=ae(R,D,I*.15,I+I*.12,0);return C.rotation.set(0,Math.PI/2,-.6),x.add(B,C),x.position.set(V,0,se),x.rotation.y=M,x};W.add(N(1.5,"#F4B8C0","#FFFFFF",0,0,.3)),W.add(N(.7,"#F7D58B","#E88A98",1.2,.6,-.4)),W.add(N(.55,"#BFE3F5","#FFFFFF",-1,.8,.6)),W.position.set(-13.5,0,2),t.add(W),n.push({x:-13.5,z:2,r:1.5}),o("gift","\uB9C8\uC74C \uC804\uD558\uC2E4 \uACF3","\u{1F381}","\uACC4\uC88C\uBC88\uD638 \uBCF4\uAE30",-13.5,2,3,3.3)}{let W=new be,N="#B98A66";for(let V of[-.75,.75])W.add(ae(new Me(.1,2.8,.1),N,V,1.4,0));W.add(ae(new Me(1.8,2.1,.1),N,0,1.9,0));let I=document.createElement("canvas");I.width=480,I.height=560;let U=I.getContext("2d");U.fillStyle="#5E7D6A",U.fillRect(0,0,480,560),U.fillStyle="#FFF8E7",U.textAlign="center",U.font='700 50px "Gowun Batang"',U.fillText("\uC624\uB298\uC758 \uC2DD\uC21C",240,70),U.font='30px "Gowun Dodum"',(e.schedule||[]).slice(0,6).forEach((V,se)=>{U.textAlign="left",U.fillStyle="#F7D58B",U.fillText(V.time,40,150+se*70),U.fillStyle="#FFF8E7",U.fillText(V.title,150,150+se*70)});let D=l(I,1.62,1.9);D.position.set(0,1.9,.06),W.add(D),W.position.set(11,0,9.8),W.rotation.y=-.5,t.add(W),n.push({x:11,z:9.8,r:1}),o("schedule","\uC624\uB298\uC758 \uC2DD\uC21C","\u{1F570}\uFE0F","\uC2DD\uC21C \uBCF4\uAE30",11,9.8,2.8,3.6)}{let W=new be;W.add(ae(new Me(2.4,1.1,1),"#FFF3EA",0,.55,0)),W.add(ae(new Me(2.5,.1,1.1),"#E2B865",0,1.12,0));for(let U of[-1.1,1.1])W.add(ae(new We(.06,.06,2.4,8),"#FFFFFF",U,2.2,-.4));let N=8;for(let U=0;U<N;U++){let D=ae(new We(1.7,1.7,.5,3,1,!1,Math.PI/2+U/N*Math.PI,Math.PI/N),U%2?"#FFFFFF":"#F4B8C0",0,3.3,-.4);D.rotation.x=Math.PI/2,D.scale.set(1,1,.5),W.add(D)}let I=l(Yt("?",{w:256,h:256,size:190,bg:"#F7D58B",radius:128,color:"#FFFFFF"}),.9,.9);I.position.set(0,.6,.51),W.add(I),W.position.set(-19.5,0,-11.5),W.rotation.y=.6,t.add(W),n.push({x:-19.5,z:-11.5,r:1.5}),o("quiz","\uC2E0\uB791\uC2E0\uBD80 \uD034\uC988","\u2753","\uD034\uC988 \uD480\uAE30",-19.5,-11.5,3.2,4.4)}let g;{let W=new be,N="#F3E9DA";W.add(ae(new We(2.9,3.1,.6,32),N,0,.3,0));let I=new me(new qt(2.6,32),new Tt({color:"#8FD3F0",transparent:!0,opacity:.85}));I.rotation.x=-Math.PI/2,I.position.y=.58,W.add(I),W.add(ae(new We(.3,.4,1.6,12),N,0,1.2,0)),W.add(ae(new We(1.2,.5,.35,24),N,0,2,0));let U=new me(new qt(1.05,24),I.material);U.rotation.x=-Math.PI/2,U.position.y=2.17,W.add(U);let D=new ri;D.moveTo(0,-.35),D.bezierCurveTo(-.6,.05,-.35,.5,0,.25),D.bezierCurveTo(.35,.5,.6,.05,0,-.35);let V=ae(new Li(D,{depth:.15,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2}),"#F4B8C0",0,2.75,-.07);W.add(V);let se=90,M=new Float32Array(se*3),x=[];for(let z=0;z<se;z++)x.push([Math.random()*Math.PI*2,Math.random()]);let R=new $e;R.setAttribute("position",new ft(M,3));let B=new cr(R,new Ci({color:"#E8F7FF",size:.12,transparent:!0,opacity:.9}));W.add(B);let C=new lr(new We(.09,.09,.02,12),dt("#E2B865"),40);C.count=0,W.add(C);let k=new me(new si(.2,.32,28),new je({color:"#FFFFFF",transparent:!0,opacity:0,depthWrite:!1}));k.rotation.x=-Math.PI/2,k.position.y=.6,W.add(k);let F=0;W.position.set(0,0,4),t.add(W),a.push((z,j)=>{V.rotation.y=z*.8;for(let Y=0;Y<se;Y++){let[te,b]=x[Y],re=(z*.6+b)%1,$=.3+re*1.3;M[Y*3]=Math.cos(te)*$,M[Y*3+2]=Math.sin(te)*$,M[Y*3+1]=2.2+Math.sin(re*Math.PI)*.8-re*1.5}if(R.attributes.position.needsUpdate=!0,F>0){F-=j/.7;let Y=1-Math.max(0,F);k.scale.setScalar(1+Y*6),k.material.opacity=Math.max(0,F)}}),n.push({x:0,z:4,r:3.2}),o("fountain","\uC18C\uC6D0 \uBD84\uC218","\u{1FA99}","\uB3D9\uC804 \uB358\uC9C0\uAE30",0,4,4.2,4.3),g={toss(z,j,Y){Hp(z,j,new S(0,2.25,4),"\u{1FA99}",.75,()=>{F=1,Y==null||Y()})},setCoins(z){z=Math.max(0,Math.min(40,z|0));let j=new Ce;for(let Y=0;Y<z;Y++){let te=Y*2.39996,b=.55+Y*.37%1*1.85;j.makeRotationY(te),j.setPosition(Math.cos(te)*b,.6,Math.sin(te)*b),C.setMatrixAt(Y,j)}C.count=z,C.instanceMatrix.needsUpdate=!0}}}{let W=new be,N=ae(new Me(1.6,.03,14.5),"#FFFFFF",0,.04,-11),I=ae(new Me(.1,.035,14.5),"#F4B8C0",-.8,.045,-11),U=I.clone();U.position.x=.8,W.add(N,I,U);let D=(B,C,k)=>{let F=new be;if(F.add(ae(new Me(.62,.08,.6),"#FFFFFF",0,.5,0)),F.add(ae(new Me(.62,.6,.07),"#FFFFFF",0,.85,.28)),F.add(ae(new Me(.56,.48,.05),"#F3E9DA",0,.24,-.26)),F.add(ae(new Me(.56,.48,.05),"#F3E9DA",0,.24,.26)),k){let z=ae(new Ze(.12,8,6),"#F4B8C0",B>0?-.32:.32,.95,.3);z.scale.set(.5,1,1.3),F.add(z)}return F.position.set(B,0,C),F};for(let B of[-6.8,-8.8,-10.8,-12.8])for(let C of[-1,1])for(let k=0;k<3;k++)W.add(D(C*(1.7+k*.95),B,k===0));r.push({minX:1.3,maxX:4.4,minZ:-13.3,maxZ:-6.3},{minX:-4.4,maxX:-1.3,minZ:-13.3,maxZ:-6.3}),W.add(ae(new We(3.2,3.3,.16,36),"#FFFDF8",0,.08,-19.5));let V=dt("#FFFFFF");for(let B of[-1,1])W.add(ae(new We(.14,.16,3.2,10),V,B*2.2,1.6,-19.5));let se=ae(new Nn(2.2,.14,10,40,Math.PI),V,0,3.2,-19.5);W.add(se);let M=["#F4B8C0","#FFFFFF","#F9C59E","#E88A98","#FFE3EA","#F7D58B"],x=new Gt(.2,1);for(let B=0;B<44;B++){let C=B/43*Math.PI,k=2.2+_e(-.12,.12),F=ae(x,M[B%M.length],Math.cos(C)*k,3.2+Math.sin(C)*k,-19.5+_e(-.2,.2));if(F.scale.setScalar(_e(.8,1.5)),W.add(F),B%3===0){let z=ae(x,"#9CC08A",F.position.x*1.05,F.position.y+_e(-.2,.1),F.position.z+.1);z.scale.set(.9,.5,.9),W.add(z)}}for(let B=0;B<16;B++){let C=B<8?-1:1,k=ae(x,M[B%M.length],C*2.2+_e(-.2,.2),_e(.3,1.8),-19.5+_e(-.25,.25));k.scale.setScalar(_e(.9,1.4)),W.add(k)}let R=new Tt({color:"#FFE3EA",transparent:!0,opacity:.75,side:pr});for(let B of[-1,1]){let C=new me(new et(1.1,3.6,1,8),R),k=C.geometry.attributes.position;for(let F=0;F<k.count;F++)k.setZ(F,Math.sin(k.getY(F)*3+k.getX(F)*4)*.08);C.position.set(B*2.6,2.4,-19.4),C.rotation.z=B*.1,W.add(C)}for(let B=0;B<9;B++){let C=-6+B*1.5,k=ae(new Gt(.9,1),"#8CC47A",C,.8,-22.3);k.scale.set(1,1.1,.8),W.add(k),W.add(ae(new Gt(.18,0),M[B%M.length],C+.3,1.4,-21.6))}t.add(W),n.push({x:-2.2,z:-19.5,r:.45},{x:2.2,z:-19.5,r:.45}),r.push({minX:-7,maxX:7,minZ:-23.5,maxZ:-21.5})}let y=Qs({type:"groom",hair:"#3A2A24"});y.root.position.set(-.75,.16,-19.6);let E=Qs({type:"bride",hair:"#5A3A2A"});E.root.position.set(.75,.16,-19.6),y.root.rotation.y=.15,E.root.rotation.y=-.15,t.add(y.root,E.root),n.push({x:0,z:-19.6,r:1.4});let A=o("couple","\uC2E0\uB791 \xB7 \uC2E0\uBD80","\u{1F490}","\uC778\uC0AC \uB098\uB204\uAE30",0,-18.6,3.4,3.2);A.npcs=[y,E];let w=Array.isArray(e.coupleLines)&&e.coupleLines.length?e.coupleLines:kg,T=new Map,G=4,H=Math.floor(Math.random()*w.length),O=null,J=0;function P(W,N){let I=Math.hypot(N.x,N.z+19.6);for(let U of[y,E]){let D=I<7?Np(Math.atan2(N.x-U.root.position.x,N.z-U.root.position.z)-U.root.rotation.y,-.9,.9):0;U.head.rotation.y+=(D-U.head.rotation.y)*Math.min(1,W*4)}if(G-=W,I<4.5&&G<=0&&!O){let U=w[H++%w.length];if(!T.has(U)){let D=qo(U,{scale:4});D.position.set(0,4.05,-19.3),D.visible=!1,t.add(D),T.set(U,D)}O=T.get(U),O.visible=!0,J=2.8,(Math.random()<.5?y:E).wave(1.6),G=8+_e(0,5)}O&&(J-=W,J<=0&&(O.visible=!1,O=null))}{let W=new be,N="#E2B865",I=3.2,U=2.4,D=.16,V=.9;W.add(ae(new Me(I+D,D,D),N,0,V+U,0)),W.add(ae(new Me(I+D,D,D),N,0,V,0));for(let R of[-1,1])W.add(ae(new Me(D,U,D),N,R*I/2,V+U/2,0)),W.add(ae(new Me(D,V,D),N,R*I/2,V/2,0));let se=l(Yt("PHOTO ZONE",{w:512,h:110,size:60,bg:"#FFFDF8",radius:55,color:"#C9637A"}),2,.43);se.position.set(0,V+U+.4,.05),W.add(se);let M=["#F4B8C0","#FFFFFF","#F9C59E","#E88A98"];for(let R=0;R<18;R++){let B=ae(new Gt(.16,1),M[R%4],-I/2+_e(-.15,.3),V+_e(0,1.1),_e(-.1,.15));W.add(B)}W.position.set(-11,0,19),W.rotation.y=.5,t.add(W);let x=.5;for(let R of[-1,1])n.push({x:-11+Math.cos(x)*R*I/2,z:19-Math.sin(x)*R*I/2,r:.3});o("photozone","\uD3EC\uD1A0\uC874","\u{1F4F8}","\uAE30\uB150\uC0AC\uC9C4 \uCC0D\uAE30",-11,19,3,4.6)}let q=(W,N,I)=>{let U=new be;for(let M of[-.4,.4]){let x=ae(new We(.04,.04,2,6),"#B98A66",M,1,0);x.rotation.z=-M*.2,U.add(x)}let D=["#FFFFFF","#F4B8C0","#F7D58B","#FFE3EA"],V=new Gt(.17,1);for(let M=0;M<28;M++){let x=M/28*Math.PI*2;U.add(ae(V,D[M%4],Math.cos(x)*.62,2.3+Math.sin(x)*.62,0))}let se=l(Yt(I.split(""),{w:96,h:420,size:64,bg:"#FFFFFF",radius:10,color:"#C9637A",font:"Gowun Batang"}),.22,.95);se.position.set(.25,1.65,.12),U.add(se),U.position.set(W,0,N),U.rotation.y=W<0?.4:-.4,t.add(U),n.push({x:W,z:N,r:.6})};q(-3.4,32,"\uCD95\uACB0\uD63C"),q(3.4,32,"\uCD95\uACB0\uD63C"),q(15.2,-9,"\uCD95\uACB0\uD63C"),Gg(t,n,r,a),o("museum",((oe=e.museum)==null?void 0:oe.title)||"\uCD94\uC5B5 \uC0AC\uC9C4\uAD00","\u{1F5BC}\uFE0F","\uC0AC\uC9C4\uAD00 \uC785\uC7A5",mr.x,mr.z,2.6,8.4);function Z(W,N,I){a.forEach(U=>U(N,W)),s.forEach(U=>{U.label.position.y=U.baseY+Math.sin(N*2+U.off)*.12}),[y,E].forEach(U=>U.animate(W,0,N)),I&&P(W,I)}return{group:t,colliders:n,boxes:r,interactables:s,update:Z,npcs:[y,E],plantFlower:_,fountain:g,bed:tt}}function Gg(i,e,t,n){var G,H;let r=window.WEDDING,s=new be,a=20,o=-10.2,l="#FFF6EA",c="#FFFDF8",h="#E9B4A8";s.add(ae(new Me(15,.4,13),"#F1E4CF",a,.2,-15.5));for(let O=0;O<3;O++)s.add(ae(new Me(6-O*.6,.13,.45),"#F1E4CF",a,.065+O*.13,-8.3-O*.45));s.add(ae(new Me(13,5.8,10),l,a,3.3,-15.3));let d=new We(.34,.38,5.4,16),u=new Me(.9,.25,.9);[14,16.2,18.3,21.7,23.8,26].forEach(O=>{s.add(ae(d,c,O,3.1,-9.4)),s.add(ae(u,c,O,5.9,-9.4)),s.add(ae(u,c,O,.52,-9.4))}),s.add(ae(new Me(14.2,.6,11.8),c,a,6.3,-14.9));let p=new ri;p.moveTo(-7.4,0),p.lineTo(7.4,0),p.lineTo(0,2.4),p.closePath();let f=ae(new Li(p,{depth:11.8,bevelEnabled:!1}),h,a,6.6,-20.8);s.add(f);let v=ae(new Li((()=>{let O=new ri;return O.moveTo(-6.6,.25),O.lineTo(6.6,.25),O.lineTo(0,2.05),O.closePath(),O})(),{depth:.05,bevelEnabled:!1}),c,a,6.6,-8.98);s.add(v);let m=new ri;m.moveTo(0,-.35),m.bezierCurveTo(-.6,.05,-.35,.5,0,.25),m.bezierCurveTo(.35,.5,.6,.05,0,-.35);let _=ae(new Li(m,{depth:.1,bevelEnabled:!1}),"#E88A98",a,7.5,-8.9);_.scale.setScalar(.9),s.add(_);let g=new me(new et(6,.9),new je({map:Mt(Yt(((G=r.museum)==null?void 0:G.title)||"\uCD94\uC5B5 \uC0AC\uC9C4\uAD00",{w:1024,h:150,size:80,bg:"#FFFDF8",border:"#E2B865",radius:75,color:"#C9637A"})),transparent:!0}));g.position.set(a,5.3,o+.02),s.add(g),s.add(ae(new Me(2.9,3.7,.2),"#E2B865",a,2.25,o));let y=ae(new Me(2.5,3.4,.22),"#9C6B4E",a,2.1,o+.02);s.add(y);let E=new me(new et(2.1,1.1),new je({color:"#FFF1C9",transparent:!0,opacity:.9}));E.position.set(a,3,o+.15),s.add(E);let A=ae(new Ze(.08,8,6),"#E2B865",a+.9,1.9,o+.15);s.add(A);let w=((H=r.museum)==null?void 0:H.themes)||[];[15.2,17.2,22.8,24.8].forEach((O,J)=>{var oe;let P=w[J%Math.max(1,w.length)],q=Yt(P?[P.emoji]:["\u2665"],{w:128,h:320,size:70,bg:(P==null?void 0:P.color)||"#F4B8C0",radius:16,color:"#fff",sub:(oe=P==null?void 0:P.title)==null?void 0:oe.slice(0,4),subSize:22}),Z=new me(new et(.8,2),new je({map:Mt(q),transparent:!0}));Z.position.set(O,3.2,o+.03),s.add(Z)});let T=(O,J)=>{s.add(ae(new We(.35,.28,.6,12),"#E9B4A8",O,.3,J));let P=ae(new Gt(.5,1),"#8CC47A",O,.95,J);s.add(P);for(let q=0;q<4;q++)s.add(ae(new Gt(.12,0),["#F4B8C0","#FFFFFF","#F7D58B"][q%3],O+_e(-.35,.35),1.1+_e(0,.3),J+.3));e.push({x:O,z:J,r:.5})};T(16.5,-7.8),T(23.5,-7.8);for(let O of[13.45,26.55])for(let J of[-12.5,-15.5,-18.5]){let P=new me(new et(1.6,2.2),new je({color:"#CDE9F5"}));P.position.set(O+(O<a?-.02:.02),3.4,J),P.rotation.y=O<a?-Math.PI/2:Math.PI/2,s.add(P)}i.add(s),n.push(O=>{_.position.y=7.5+Math.sin(O*2)*.06,E.material.opacity=.75+Math.sin(O*3)*.2}),t.push({minX:12.3,maxX:27.7,minZ:-22.2,maxZ:-9})}var Wp=new S(1e3,0,0),Bt=-3.2,Ch=3,Xp=3.5,jp=2.7,Lh=2.7,Vg=On?768:1024,Wg=16,Xg=34;function jg(){let i=document.createElement("canvas");i.width=256,i.height=256;let e=i.getContext("2d"),t=["#E7C9A3","#E1C09A","#EBD0AD","#DDBB94"];for(let r=0;r<8;r++)e.fillStyle=t[r%4],e.fillRect(0,r*32,256,32),e.fillStyle="rgba(150,110,80,.18)",e.fillRect(0,r*32,256,2),e.fillRect(r*97%256,r*32,2,32);let n=Mt(i);return n.wrapS=n.wrapT=Ti,n}function qp(i,e=.6){return new Se(i).lerp(new Se("#FFFFFF"),e)}function Yp(i){var M;let e=window.WEDDING,t=new be;t.position.copy(Wp),t.visible=!1,i.add(t);let n=br(),r=[],s=[],a=[],o=2;n.forEach((x,R)=>{let B=o,C=B+1.6,k=x.photos.map((z,j)=>({...z,x:B+4.4+j*Xp})),F=B+4.4+Math.max(0,x.photos.length-1)*Xp+2.2;a.push({theme:x,ti:R,x0:B,x1:F,headerX:C}),s.push({theme:x,ti:R,x:C}),k.forEach(z=>r.push({...z,ti:R})),o=F+1.2});let l=o+3.5,c=-9,h=l-c,d=(c+l)/2,u=jg();u.repeat.set(h/4,14/4);let p=new me(new et(h,16),new Tt({map:u,gradientMap:Ii}));p.rotation.x=-Math.PI/2,p.position.set(d,0,4.6),t.add(p);let f=dt("#FFF6EA"),v=new me(new Me(h,9,.4),f);v.position.set(d,4.5,Bt-.2),t.add(v);for(let x of[c,l]){let R=new me(new Me(.4,9,16),f);R.position.set(x,4.5,4.6),t.add(R)}let m=new me(new et(h,16),dt("#FFFDF8"));m.rotation.x=Math.PI/2,m.position.set(d,8.6,4.6),t.add(m);let _=new me(new Me(h,.18,.12),dt("#E2B865"));_.position.set(d,5.5,Bt+.06),t.add(_);let g=new me(new Me(h,.3,.1),dt("#C9A27E"));g.position.set(d,.15,Bt+.05),t.add(g);let y=-6.2,E=new me(new Me(2.9,3.9,.12),dt("#E2B865"));E.position.set(y,1.95,Bt+.06);let A=new me(new Me(2.5,3.6,.1),dt("#9C6B4E"));A.position.set(y,1.8,Bt+.14);let w=new me(new et(1.8,.5),new je({map:Mt(Yt("\u{1F6AA} \uB098\uAC00\uB294 \uBB38",{w:360,h:100,size:46,bg:"#FFFDF8",radius:50,color:"#4A3B38"})),transparent:!0}));w.position.set(y,4.3,Bt+.08),t.add(E,A,w);let T=document.createElement("canvas");T.width=900,T.height=700;{let x=T.getContext("2d");x.fillStyle="#FFFDF8",Pi(x,0,0,900,700,40),x.fill(),x.strokeStyle="#E2B865",x.lineWidth=8,Pi(x,20,20,860,660,30),x.stroke(),x.textAlign="center",x.fillStyle="#E88A98",x.font='28px "Gowun Dodum"',x.fillText("P H O T O   M U S E U M",450,110),x.fillStyle="#4A3B38",x.font='700 72px "Gowun Batang"',x.fillText(((M=e.museum)==null?void 0:M.title)||"\uC6B0\uB9AC\uC758 \uCD94\uC5B5 \uC0AC\uC9C4\uAD00",450,210),x.font='36px "Gowun Batang"',x.fillStyle="#7C6A66",x.fillText(`${e.groom.name} \u2665 ${e.bride.name}`,450,280),x.font='30px "Gowun Dodum"',n.forEach((R,B)=>x.fillText(`${R.emoji}  ${R.title} \xB7 ${R.photos.length}\uC7A5`,450,370+B*52)),x.fillStyle="#C9637A",x.font='28px "Gowun Dodum"',x.fillText("\u2192 \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC5B4\uAC00\uBA70 \uAD00\uB78C\uD574 \uC8FC\uC138\uC694",450,650)}let G=new me(new et(4.2,3.27),new je({map:Mt(T)}));G.position.set(-1.6,3,Bt+.05),t.add(G);let H=new Me(.9,.12,.35),O=new je({color:"#FFF1C9"});a.forEach(x=>{let R=x.theme,B=x.x1-x.x0,C=qp(R.color,.55),k=new me(new et(B,1.4),new Tt({color:C,gradientMap:Ii}));k.position.set((x.x0+x.x1)/2,.7,Bt+.02),t.add(k);let F=new me(new et(B,.5),k.material);F.position.set((x.x0+x.x1)/2,6,Bt+.02),t.add(F);let z=new me(new et(B-.6,3.2),new Tt({color:qp(R.color,.3),gradientMap:Ii}));z.rotation.x=-Math.PI/2,z.position.set((x.x0+x.x1)/2,.01,.4),t.add(z);let j=document.createElement("canvas");j.width=560,j.height=800;let Y=j.getContext("2d");Y.fillStyle=R.color,Pi(Y,0,0,560,800,36),Y.fill(),Y.fillStyle="rgba(255,255,255,.9)",Pi(Y,24,24,512,752,26),Y.fill(),Y.textAlign="center",Y.textBaseline="middle",Y.font="150px serif",Y.fillText(R.emoji||"\u{1F4F7}",280,190),Y.fillStyle="#4A3B38",Y.font='700 64px "Gowun Batang"',Y.fillText(R.title,280,360),Y.fillStyle="#7C6A66",Y.font='30px "Gowun Dodum"',qg(Y,R.subtitle||"",280,450,440,44),Y.fillStyle="#C9637A",Y.font='28px "Gowun Dodum"',Y.fillText(`\uC0AC\uC9C4 ${R.photos.length}\uC7A5`,280,700);let te=new me(new et(2.3,3.29),new je({map:Mt(j)}));te.position.set(x.headerX,3,Bt+.05),t.add(te);let b=Yt([`${R.emoji} ${R.title}`],{w:640,h:140,size:64,bg:R.color,radius:30,color:"#FFFFFF"}),re=new me(new et(3.2,.7),new je({map:Mt(b),transparent:!0}));if(re.position.set(x.headerX+.4,6.9,Bt+.1),t.add(re),x.x1-x.x0>9){let $=(x.x0+x.x1)/2,K=new me(new Me(2.4,.2,.7),dt("#B98A66"));K.position.set($,.55,4.3);let le=new me(new Me(.15,.5,.6),dt("#8C6B55"));le.position.set($-1,.25,4.3);let de=le.clone();de.position.x=$+1,t.add(K,le,de)}});let J=new et(1,1),P=new Me(1,1,.12),q=[dt("#E2B865"),dt("#FFFFFF"),dt("#B98A66")],Z=new je({color:"#F3E9DA"});r.forEach((x,R)=>{let B=new me(P,q[x.ti%q.length]),C=new me(J,Z);B.position.set(x.x,Ch,Bt+.07),C.position.set(x.x,Ch,Bt+.135),t.add(B,C);let k=new me(H,O);k.position.set(x.x,4.9,Bt+.25),t.add(k),x.frame=B,x.photo=C,x.state="idle",oe(x,2.2,2.2)});function oe(x,R,B){x.photo.scale.set(R,B,1),x.frame.scale.set(R+.26,B+.26,1)}function W(x){if(x.placard){x.placard.visible=!0;return}let R=`${String(x.idx+1).padStart(2,"0")}${x.caption?" \xB7 "+x.caption:""}`,B=Yt(R.length>22?R.slice(0,21)+"\u2026":R,{w:512,h:90,size:34,bg:"#FFFDF8",radius:12,color:"#4A3B38",font:"Gowun Dodum"}),C=new me(new et(1.8,.32),new je({map:Mt(B),transparent:!0})),k=Ch-x.photo.scale.y/2-.45;C.position.set(x.x,k,Bt+.06),t.add(C),x.placard=C}function N(x){var R;x.photo.material!==Z&&((R=x.photo.material.map)==null||R.dispose(),x.photo.material.dispose()),x.photo.material=Z,x.state="idle",x.placard&&(x.placard.visible=!1),oe(x,2.2,2.2)}let I=0;function U(x){x.state="loading",I++;let R=new Image;R.decoding="async";let B=setTimeout(()=>{x.state==="loading"&&(R.onload=R.onerror=null,D(x,Wi(x.theme,x.idx,x.src),1,!1))},8e3);R.onload=()=>{clearTimeout(B);let C=Math.min(1,Vg/Math.max(R.width,R.height)),k=document.createElement("canvas");k.width=Math.round(R.width*C),k.height=Math.round(R.height*C);let F=k.getContext("2d");F.drawImage(R,0,0,k.width,k.height);try{F.getImageData(0,0,1,1),D(x,k,R.width/R.height,!0)}catch{let j=Math.round(600/(R.width/R.height));D(x,Wi(x.theme,x.idx,"(\uD30C\uC77C\uB85C \uC5F4\uC5C8\uC744 \uB54C\uB9CC \uBCF4\uC774\uB294 \uC548\uB0B4)",600,j,"\u{1F50D} \uD06C\uAC8C \uBCF4\uAE30\uB97C \uB20C\uB7EC \uD655\uC778\uD558\uC138\uC694"),R.width/R.height,!0)}},R.onerror=()=>{clearTimeout(B),D(x,Wi(x.theme,x.idx,x.src),1,!1)},R.src=Vi(x)}function D(x,R,B,C){I--,x.state="done",x.ok=C,x.photo.material!==Z&&x.photo.material.dispose(),x.photo.material=new je({map:Mt(R)});let k=jp,F=jp/B;F>Lh&&(F=Lh,k=Lh*B),oe(x,k,F),W(x)}let V=Wp,se=new S(V.x+y,0,1.2);return{group:t,themes:n,sections:a,entries:r,spawn:se,themeStart(x){let R=a[x];return new S(V.x+R.headerX+1.2,0,1.2)},clamp(x){x.x=Math.min(V.x+l-.8,Math.max(V.x+c+.8,x.x)),x.z=Math.min(V.z+3.2,Math.max(V.z+Bt+1,x.z))},currentTheme(x){let R=x.x-V.x,B=a.find(C=>R>=C.x0-.6&&R<=C.x1+.6);return B?B.ti:-1},nearest(x){let R=x.x-V.x;if(Math.abs(R-y)<1.8)return{type:"exit",emoji:"\u{1F6AA}",action:"\uBC16\uC73C\uB85C \uB098\uAC00\uAE30"};if(Math.abs(R- -1.6)<2)return{type:"welcome",emoji:"\u{1F4DA}",action:"\uC804\uCCB4 \uC568\uBC94 \uBCF4\uAE30"};let B=s.find(F=>Math.abs(R-F.x)<1.3);if(B)return{type:"header",ti:B.ti,emoji:B.theme.emoji||"\u{1F4DA}",action:`${B.theme.title} \uC568\uBC94`};let C=null,k=1.75;for(let F of r){let z=Math.abs(R-F.x);z<k&&(k=z,C=F)}return C?{type:"photo",entry:C,ti:C.ti,idx:C.idx,emoji:"\u{1F50D}",action:"\uD06C\uAC8C \uBCF4\uAE30"}:null},update(x,R,B){let C=B.x-V.x;for(let k of r){let F=Math.abs(C-k.x);k.state==="idle"&&F<Wg&&I<3?U(k):k.state==="done"&&F>Xg&&N(k)}}}}function qg(i,e,t,n,r,s){let a=e.split(" "),o="",l=n;for(let c of a){let h=o?o+" "+c:c;i.measureText(h).width>r&&o?(i.fillText(o,t,l),o=c,l+=s):o=h}o&&i.fillText(o,t,l)}var Ui=window.WEDDING,Pt=i=>document.querySelector(i),Yg=Pt("#phone"),vt={w:1,h:1,left:0,top:0},em=()=>vt.w/vt.h<.8,$g=i=>new Promise(e=>setTimeout(e,i)),ct,gt,pn,Vt,ia,hi,ht,It,dn,fr,tm=[],nm=[],zn=!1,un=null,$p=-2,gr=1,Fh=!1,vs=0,ta=0,Zp=0;function zh(){let i=Math.min(devicePixelRatio||1,On?1.75:1.5);return vs>=1&&(i=Math.min(i,1.25)),vs>=2&&(i=1),document.body.classList.contains("wide")&&(i=Math.min(i,1)),i}function Zg(){try{let i=ct.getContext(),e=i.getExtension("WEBGL_debug_renderer_info"),t=e?String(i.getParameter(e.UNMASKED_RENDERER_WEBGL)):"";return/Intel|Iris|UHD|HD Graphics|SwiftShader|llvmpipe|Mali-|Adreno \(TM\) [1-5]|PowerVR/i.test(t)}catch{return!1}}var vr={outfit:"#8FB8DE",hair:"#5A3A2A",longHair:!1},Ni="day",mn=null,Qo=new Ho,Jg=new S(16,34,14),X={pos:new S(0,0,31),vel:new S,yaw:Math.PI,y:0,vy:0,mode:"out",busy:!1,doorCooldown:0,target:null,pending:null,targetT:0,moveT:0,stuckT:0,swoopT:0,posing:null},Rn=new Set,gs={x:0,y:0},{date:Kg}=Xt(),Di={x:-11,z:19,ang:.5},Qg=["invitation","mailbox","directions","gift","schedule","quiz","fountain","couple","photozone","museum"],im=i=>{try{dispatchEvent(new CustomEvent("wv:visit",{detail:i}))}catch{}};async function rm({character:i,onProgress:e=()=>{}}={}){var s;i&&(vr={...vr,...i}),await Promise.race([Promise.all(['700 40px "Gowun Batang"','40px "Gowun Batang"','40px "Gowun Dodum"'].map(a=>document.fonts.load(a))),new Promise(a=>setTimeout(a,3e3))]),e(35),om();let t=On&&(navigator.deviceMemory&&navigator.deviceMemory<=2||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4);ct=new js({antialias:!t,powerPreference:"high-performance"}),gr=zh(),ct.setPixelRatio(gr),ct.shadowMap.enabled=!0,ct.shadowMap.type=Go,ct.outputColorSpace=ut,Pt("#app").appendChild(ct.domElement),ct.domElement.addEventListener("webglcontextlost",a=>{a.preventDefault(),Fh=!0,nt("\uD654\uBA74\uC744 \uB2E4\uC2DC \uADF8\uB9AC\uB294 \uC911\u2026")}),ct.domElement.addEventListener("webglcontextrestored",()=>{Fh=!1,ct.setPixelRatio(gr),ct.setSize(vt.w,vt.h),ys()}),gt=new So,gt.fog=new bo(Lt.day.fog,50,150),pn=new kt(60,1,.1,900),ia=new Bo(Lt.day.hemi,Lt.day.ground,Lt.day.hemiI),gt.add(ia),Vt=new zo(Lt.day.sun,Lt.day.sunI),Vt.castShadow=!0;let n=On?1024:1536;if(Vt.shadow.mapSize.set(n,n),Object.assign(Vt.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:90}),Vt.shadow.bias=-5e-4,Vt.shadow.normalBias=.03,gt.add(Vt,Vt.target),ht=Vp(gt),hi=Gp(gt,(a,o)=>ht.colliders.some(l=>Math.hypot(a-l.x,o-l.z)<l.r+.8)||ht.boxes.some(l=>a>l.minX-.8&&a<l.maxX+.8&&o>l.minZ-.8&&o<l.maxZ+.8)),e(65),It=Yp(gt),e(85),tm=[...hi.colliders,...ht.colliders],nm=ht.boxes,pa().forEach(a=>ht.plantFlower(a,!1)),ht.fountain.setCoins(cm()),fr=new me(new si(.32,.48,24),new je({color:"#E88A98",transparent:!0,opacity:0,depthWrite:!1})),fr.rotation.x=-Math.PI/2,fr.position.y=.05,gt.add(fr),am(),iv(),hv(),Pt("#btn-shot").onclick=()=>Jo(!1),(s=Pt("#btn-tour"))==null||s.addEventListener("click",()=>ci("\uD22C\uC5B4\uB97C \uBA48\uCDC4\uC5B4\uC694. \uB9C8\uC74C\uB300\uB85C \uB458\uB7EC\uBCF4\uC138\uC694")),addEventListener("resize",ra),document.addEventListener("visibilitychange",()=>{document.hidden||Qo.getDelta()}),ra(),Zo(nv()),(t||Zg())&&um(1),ys(),dm(),Ui.demoPhotos){let a=It.themes.flatMap(c=>c.photos),o=window.requestIdleCallback||(c=>setTimeout(c,120)),l=()=>{let c=a.shift();if(c){try{Vi(c)}catch{}o(l)}};o(l)}return/debug/.test(location.hash)&&(window.__wv={goTo:a=>kh(ht.interactables.find(o=>o.id===a)),takePhoto:Jo,enterMuseum:tl,exitMuseum:nl,cycleTime:Uh,startTour:Qp,stopTour:ci,applyTime:Zo,state:X,props:ht}),{themes:It.themes,start:ev,setCharacter:tv,enterMuseum:()=>tl(),letterSent:sm,takePhoto:Jo,resize:()=>{ra(),ys()},startTour:Qp,stopTour:ci,isTouring:()=>!!mn,setTime:Zo,getTime:()=>Ni,cycleTime:Uh}}function ev({hint:i=!0}={}){zn=!0,X.swoopT=1.8,na=Ko=0,ot.saved()&&ot.setEnabled(!0),i&&setTimeout(()=>nt("\u{1F446} \uD654\uBA74\uC744 \uB04C\uBA74 \uAC77\uACE0, \uC774\uB984\uD45C\uB97C \uB204\uB974\uBA74 \uCC3E\uC544\uAC00\uC694",4200),900);let e=Ni==="night"?"\u{1F319} \uBC24\uC5D0 \uC640\uC8FC\uC168\uB124\uC694. \uAC00\uB85C\uB4F1\uC744 \uCF1C \uB450\uC5C8\uC5B4\uC694":Ni==="dusk"?"\u{1F307} \uB178\uC744 \uC9C0\uB294 \uB9C8\uC744\uC774\uC5D0\uC694. \uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694":null;e&&setTimeout(()=>nt(e,3600),5600)}function tv(i){vr={...vr,...i},dn&&am()}function sm(i){let e=ht.plantFlower(i||{name:"\uD558\uAC1D",side:"\uC2E0\uB791\uCE21"},!0);fs(gt,new S(X.pos.x,2.2+X.y,X.pos.z),10,"\u{1F48C}"),e&&X.mode==="out"&&!mn&&(X.target=new S(tt.x-tt.r-1,0,tt.z+.6),X.pending=null,X.targetT=12,X.moveT=0,setTimeout(()=>nt(`\u{1F337} ${(i==null?void 0:i.name)||"\uD558\uAC1D"}\uB2D8\uC758 \uAF43\uC774 \uD3B8\uC9C0 \uAF43\uBC2D\uC5D0 \uD53C\uC5C8\uC5B4\uC694`,3200),500))}function am(){dn&&gt.remove(dn.root),dn=Qs({outfit:vr.outfit,hair:vr.hair,longHair:!!vr.longHair}),gt.add(dn.root)}function nv(){let i=location.hash;if(/night/.test(i))return"night";if(/sunset|dusk/.test(i))return"dusk";if(/day|morning/.test(i))return"day";try{let t=localStorage.getItem("wedding-time");if(Lt[t])return t}catch{}if(Ui.skyMode&&Lt[Ui.skyMode])return Ui.skyMode;let e=new Date(di().toLocaleString("en-US",{timeZone:"Asia/Seoul"})).getHours();return e>=6&&e<16?"day":e<19?"dusk":"night"}function Hh(i){gt.fog.color.set(i.fog),Vt.color.set(i.sun),Vt.intensity=i.sunI,ia.color.set(i.hemi),ia.groundColor.set(i.ground),ia.intensity=i.hemiI}function Zo(i){Ni=Lt[i]?i:"day";let e=hi.setTime(Ni);return X.mode==="out"&&Hh(e),Ni}function Uh(){let i=["day","dusk","night"],e=i[(i.indexOf(Ni)+1)%i.length];Zo(e);try{localStorage.setItem("wedding-time",e)}catch{}return nt(e==="night"?"\u{1F319} \uBC24 \uB9C8\uC744\uC774\uC5D0\uC694. \uAC00\uB85C\uB4F1\uC774 \uCF1C\uC84C\uC5B4\uC694":e==="dusk"?"\u{1F307} \uB178\uC744\uC774 \uC9C0\uACE0 \uC788\uC5B4\uC694":"\u2600\uFE0F \uB2E4\uC2DC \uD658\uD55C \uB0AE\uC774\uC5D0\uC694"),e}function om(){let i=Yg.getBoundingClientRect();vt.w=Math.max(1,i.width),vt.h=Math.max(1,i.height),vt.left=i.left,vt.top=i.top}function ra(){om(),pn.aspect=vt.w/vt.h,pn.fov=em()?X.mode==="museum"?55:64:50,pn.updateProjectionMatrix(),gr=zh(),ct.setPixelRatio(gr),ct.setSize(vt.w,vt.h)}function iv(){addEventListener("keydown",a=>{Xn()||/INPUT|TEXTAREA/.test(a.target.tagName)||document.body.classList.contains("reading")||(Rn.add(a.code),/Key[WASD]|Arrow/.test(a.code)&&(document.body.classList.add("moved"),ci()),a.code==="Space"&&(Jp(),a.preventDefault()),(a.code==="KeyE"||a.code==="Enter")&&Oh(),a.code==="KeyH"&&Kp(),a.code==="KeyN"&&Uh())}),addEventListener("keyup",a=>Rn.delete(a.code)),addEventListener("blur",()=>Rn.clear());let i=ct.domElement,e=Pt("#joy"),t=e.querySelector(".knob"),n=48,r=null;i.addEventListener("pointerdown",a=>{if(!(r||!zn)){r={id:a.pointerId,sx:a.clientX,sy:a.clientY,ax:a.clientX,ay:a.clientY,drag:!1,t:performance.now()};try{i.setPointerCapture(a.pointerId)}catch{}}}),i.addEventListener("pointermove",a=>{if(!r||a.pointerId!==r.id)return;if(!r.drag){if(Math.hypot(a.clientX-r.sx,a.clientY-r.sy)<10)return;r.drag=!0,X.target=null,X.pending=null,ci(),e.classList.add("active"),document.body.classList.add("moved")}let o=a.clientX-r.ax,l=a.clientY-r.ay,c=Math.hypot(o,l);c>n&&(r.ax=a.clientX-o/c*n,r.ay=a.clientY-l/c*n,o=a.clientX-r.ax,l=a.clientY-r.ay),gs.x=o/n,gs.y=l/n,e.style.left=`${r.ax-vt.left}px`,e.style.top=`${r.ay-vt.top}px`,t.style.transform=`translate(${o}px, ${l}px)`});let s=a=>{if(!r||a.pointerId!==r.id)return;let o=!r.drag&&performance.now()-r.t<450&&a.type==="pointerup";r=null,gs.x=gs.y=0,e.classList.remove("active"),e.style.left=e.style.top="",t.style.transform="",o&&sv(a.clientX,a.clientY)};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),Ph(Pt("#btn-action"),()=>Oh()),Ph(Pt("#btn-jump"),()=>Jp()),Ph(Pt("#btn-heart"),()=>Kp())}function Ph(i,e){let t=0;i.addEventListener("pointerdown",n=>{n.pointerType==="mouse"&&n.button!==0||(t=performance.now(),n.preventDefault(),e())}),i.addEventListener("click",()=>{performance.now()-t>500&&e()})}function kh(i){let e=X.pos.x-i.pos.x,t=X.pos.z-i.pos.z,n=Math.hypot(e,t)||1,r=Math.max(.5,i.r-.6);X.target=new S(i.pos.x+e/n*r,0,i.pos.z+t/n*r),X.pending=i,X.targetT=16,X.moveT=0,X.stuckT=0}function Nh(i){fr.position.set(i.x,.05,i.z),ta=1}var Ih=new ko,rv=new bn(new S(0,1,0),0);function sv(i,e){if(Xn()||X.busy)return;ci();let t=new he((i-vt.left)/vt.w*2-1,-((e-vt.top)/vt.h)*2+1);if(Ih.setFromCamera(t,pn),X.mode==="out"){let r=Ih.intersectObjects(ht.interactables.map(s=>s.label))[0];if(r){let s=ht.interactables.find(a=>a.label===r.object);kh(s),Nh(s.pos),bt(8);return}}let n=new S;Ih.ray.intersectPlane(rv,n)&&(X.target=n,X.pending=null,X.targetT=8,X.moveT=0,X.stuckT=0,Nh(n))}var lm="wedding-coins",cm=()=>{try{return+localStorage.getItem(lm)||0}catch{return 0}};function av(i){if(i===1)return"\u{1FA99} \uCCAB \uB3D9\uC804\uC774\uC5D0\uC694. \uC18C\uC6D0\uC740 \uB9C8\uC74C\uC18D\uC73C\uB85C\uB9CC \u{1F92B}";if(i===7)return"\u{1FA99} \uC77C\uACF1 \uBC88\uC9F8\u2026 \uC18C\uC6D0 \uBD80\uC790\uC2DC\uB124\uC694 \u{1F606}";if(i>=10)return"\u{1FA99} \uBD84\uC218\uAC00 \uBD80\uC790\uAC00 \uB410\uC5B4\uC694 \u{1F4B0} \uB450 \uBD84\uC758 \uD589\uBCF5\uC744 \uBE4C\uC5C8\uC5B4\uC694";let e=["\uB450 \uBD84\uC758 \uD589\uBCF5\uC744 \uBE4C\uC5C8\uC5B4\uC694","\uD3C9\uC0DD \uC6C3\uC74C \uAC00\uB4DD\uD558\uAE38 \uBE4C\uC5C8\uC5B4\uC694","\uAC74\uAC15\uD558\uACE0 \uD589\uBCF5\uD558\uAE38 \uBE4C\uC5C8\uC5B4\uC694","\uC624\uB298\uCC98\uB7FC \uB298 \uB530\uC2A4\uD558\uAE38 \uBE4C\uC5C8\uC5B4\uC694"];return`\u{1FA99} \uD401\uB2F9! ${e[Math.floor(Math.random()*e.length)]}`}var Dh={invitation:va,directions:Pr,gift:Ts,schedule:ya,quiz:_a,mailbox:()=>As(sm),couple:i=>{i.npcs.forEach(e=>e.wave(2)),fs(gt,new S(0,2.6,-19.3),14),setTimeout(()=>{!Xn()&&X.mode==="out"&&xa()},700)},fountain:()=>{dn.wave(.8),bt(30),ht.fountain.toss(gt,new S(X.pos.x,1.4+X.y,X.pos.z),()=>{let i=cm()+1;try{localStorage.setItem(lm,String(i))}catch{}ht.fountain.setCoins(i),fs(gt,new S(0,2.6,4),6,"\u2728"),ot.sfx("coin"),nt(av(i))})},photozone:()=>Jo(!0),museum:()=>tl()};function ov(){let i=X.pos;if(X.mode==="museum")return It.nearest(i);let e=null,t=1/0;for(let n of ht.interactables){let r=Math.hypot(i.x-n.pos.x,i.z-n.pos.z);r<n.r&&r<t&&(t=r,e=n)}return e}function Oh(i=un){var e;if(!(X.busy||Xn())){if(!i){dn.wave(1.4);return}if(bt(15),ot.sfx("pop"),X.mode==="museum"){i.type==="exit"?nl():i.type==="welcome"?Ir(It.themes):i.type==="header"?Ir(It.themes,i.ti):i.type==="photo"&&Il(It.themes,i.ti,i.idx);return}X.yaw=Math.atan2(i.pos.x-X.pos.x,i.pos.z-X.pos.z),im(i.id),(e=Dh[i.id])==null||e.call(Dh,i)}}function lv(){var t,n,r;let i=Pt("#btn-action"),e=un?(un.id||un.type)+((r=(n=(t=un.entry)==null?void 0:t.src)!=null?n:un.ti)!=null?r:""):"";i.dataset.key!==e&&(e&&!i.dataset.key&&(bt(8),ot.sfx("chime")),i.dataset.key=e,i.classList.toggle("ready",!!un),i.querySelector(".em").textContent=un?un.emoji:"\u{1F44B}",i.querySelector(".lb").textContent=un?un.action:"\uC778\uC0AC\uD558\uAE30")}function Jp(){X.y<=.001&&!Xn()&&!X.busy&&(X.vy=6.5,ot.sfx("jump"))}function Kp(){fs(gt,new S(X.pos.x,2.2+X.y,X.pos.z),8),dn.wave(1),ot.sfx("heart"),X.mode==="out"&&Math.hypot(X.pos.x,X.pos.z+19.6)<6&&ht.npcs.forEach(i=>i.wave(1.5))}function Qp(){!zn||X.mode!=="out"||X.busy||(mn={i:0,waitT:.4},document.body.classList.add("touring"),nt("\u{1F6B6} \uC790\uB3D9 \uD22C\uC5B4 \uC2DC\uC791! \uD654\uBA74\uC744 \uB04C\uBA74 \uC5B8\uC81C\uB4E0 \uBA48\uCDB0\uC694",3200))}function ci(i){mn&&(mn=null,document.body.classList.remove("touring"),X.pending&&(X.target=null,X.pending=null),i&&nt(i))}function cv(){let i=Qg[mn.i++];if(!i){ci(),nt("\u{1F389} \uD22C\uC5B4 \uB05D! \uC774\uC81C \uB9C8\uC74C\uB300\uB85C \uB458\uB7EC\uBCF4\uC138\uC694",3600),Lr(),ot.sfx("tada");return}let e=ht.interactables.find(t=>t.id===i);e&&(kh(e),Nh(e.pos),mn.waitT=i==="fountain"?2.4:i==="couple"?1.2:.9)}var el=i=>new Promise(e=>{Pt("#fade").classList.toggle("on",i),setTimeout(e,460)});function hv(){let i=Pt("#museum-bar");i.innerHTML="",It.themes.forEach((t,n)=>{let r=document.createElement("button");r.className="chip",r.dataset.ti=n,r.textContent=`${t.emoji} ${t.title}`,r.onclick=()=>{X.pos.copy(It.themeStart(n)),X.target=null,bt(8),ys()},i.appendChild(r)});let e=document.createElement("button");e.className="chip",e.textContent="\u{1F4DA} \uC804\uCCB4 \uC568\uBC94",e.onclick=()=>Ir(It.themes),i.append(e),Pt("#btn-exit").onclick=()=>nl()}var Bh=()=>nl(!0);async function tl(i=-1){if(X.mode==="museum"||X.busy)return;let e=!!mn;ci(),im("museum"),X.busy=!0,await el(!0),X.mode="museum",hi.group.visible=ht.group.visible=!1,It.group.visible=!0,Vt.castShadow=!1,Hh(Lt.day),X.pos.copy(i>=0?It.themeStart(i):It.spawn),X.vel.set(0,0,0),X.target=null,X.yaw=Math.PI/2,document.body.classList.add("in-museum"),ra(),ys(),Yi(Bh),await el(!1),X.busy=!1,nt(e?"\u{1F3C1} \uD22C\uC5B4\uC758 \uB9C8\uC9C0\uB9C9, \uC0AC\uC9C4\uAD00\uC774\uC5D0\uC694. \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC73C\uBA70 \uAD6C\uACBD\uD558\uC138\uC694":"\u{1F449} \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC73C\uBA70 \uC0AC\uC9C4\uC744 \uAD6C\uACBD\uD558\uC138\uC694",e?4200:2400)}async function nl(i=!1){if(X.mode==="museum"){if(X.busy){i&&Yi(Bh);return}i||Cr(Bh),X.busy=!0,await el(!0),X.mode="out",hi.group.visible=ht.group.visible=!0,It.group.visible=!1,Vt.castShadow=ct.shadowMap.enabled,Hh(Lt[Ni]),X.pos.set(mr.x,0,mr.z+2.4),X.vel.set(0,0,0),X.target=null,X.yaw=0,X.doorCooldown=1.5,document.body.classList.remove("in-museum"),ra(),ys(),await el(!1),X.busy=!1}}function uv(i){let e=i.width,t=i.height,n=Math.round(e*.05),r=Math.round(e*.22),s=document.createElement("canvas");s.width=e+n*2,s.height=t+n+r;let a=s.getContext("2d");a.fillStyle="#FFFDF8",a.fillRect(0,0,s.width,s.height),a.drawImage(i,n,n),a.fillStyle="#C9637A",a.textAlign="center",a.font=`700 ${Math.round(r*.3)}px "Gowun Batang", serif`,a.fillText(`${Ui.groom.name} \u2665 ${Ui.bride.name}`,s.width/2,t+n+r*.45),a.fillStyle="#7C6A66",a.font=`${Math.round(r*.15)}px "Gowun Dodum", sans-serif`,a.fillText(`${Kg} \xB7 \uC6B0\uB9AC\uC758 \uC791\uC740 \uACB0\uD63C \uB9C8\uC744\uC5D0\uC11C`,s.width/2,t+n+r*.74);let o=document.createElement("canvas");o.width=Math.round(s.width*1.12),o.height=Math.round(s.height*1.1);let l=o.getContext("2d");l.fillStyle="#F6E9DD",l.fillRect(0,0,o.width,o.height),l.save(),l.translate(o.width/2,o.height/2),l.rotate(-.03),l.shadowColor="rgba(80,40,30,.3)",l.shadowBlur=e*.05,l.shadowOffsetY=e*.02,l.drawImage(s,-s.width/2,-s.height/2),l.restore(),l.fillStyle="rgba(255,236,170,.8)";for(let[c,h,d]of[[o.width*.09,o.height*.055,-.5],[o.width*.91,o.height*.055,.5]])l.save(),l.translate(c,h),l.rotate(d),l.fillRect(-e*.11,-e*.03,e*.22,e*.06),l.restore();return o}async function Jo(i=!1){if(X.busy||Xn())return;let e=null;X.busy=!0;try{if(i){ci(),X.target=null,X.pending=null;let s=Math.sin(Di.ang),a=Math.cos(Di.ang),o=Math.cos(Di.ang),l=-Math.sin(Di.ang),c=Di.x+s*.9,h=Di.z+a*.9;X.pos.set(c,0,h),X.vel.set(0,0,0),X.yaw=Di.ang,X.y=0,X.vy=0;let[d,u]=ht.npcs,p=[d,u].map(v=>({c:v,p:v.root.position.clone(),r:v.root.rotation.y}));d.root.position.set(c-o*1.15,0,h-l*1.15),u.root.position.set(c+o*1.15,0,h+l*1.15),d.root.rotation.y=u.root.rotation.y=Di.ang,e=()=>p.forEach(v=>{v.c.root.position.copy(v.p),v.c.root.rotation.y=v.r}),X.posing={x:c,z:h,nx:s,nz:a},dn.wave(3),d.wave(3),u.wave(3);let f=Pt("#count");for(let v of["3","2","1"])f.textContent=v,f.classList.remove("show"),f.offsetWidth,f.classList.add("show"),ot.sfx("pop"),bt(8),await $g(680);f.classList.remove("show"),f.textContent="",fs(gt,new S(c,2.4,h),10)}ct.render(gt,pn);let t=uv(ct.domElement),n=t.toDataURL("image/jpeg",.9);ot.sfx("shutter"),bt(25),Pt("#fade").style.background="#fff",Pt("#fade").classList.add("on"),setTimeout(()=>{Pt("#fade").classList.remove("on"),setTimeout(()=>Pt("#fade").style.background="",450)},120),e==null||e(),e=null,X.posing=null;let r=/KAKAOTALK|Instagram|FBAN|FBAV|Line\//i.test(navigator.userAgent);El("\uAE30\uB150\uC0AC\uC9C4",`
      <img src="${n}" style="width:100%;border-radius:14px;box-shadow:var(--shadow);-webkit-touch-callout:default" alt="\uAE30\uB150\uC0AC\uC9C4" />
      <p class="muted center">${r?"\uC0AC\uC9C4\uC744 <b>\uAE38\uAC8C \uB20C\uB7EC</b> \uC800\uC7A5\uD574 \uC8FC\uC138\uC694":"\uC0AC\uC9C4\uC744 <b>\uAE38\uAC8C \uB20C\uB7EC</b> \uC800\uC7A5\uD558\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694"}</p>
      <div class="btns">
        <button class="btn pink ph-share">\u{1F4E4} \uACF5\uC720\uD558\uAE30</button>
        <button class="btn ph-save">\u{1F4BE} \uC800\uC7A5\uD558\uAE30</button>
      </div>`,s=>{let a=null,o=null;t.toBlob(c=>{c&&(a=new File([c],"wedding-village-photo.jpg",{type:"image/jpeg"}),o=URL.createObjectURL(c))},"image/jpeg",.9);let l=()=>{if(r){nt("\uC0AC\uC9C4\uC744 \uAE38\uAC8C \uB20C\uB7EC \uC800\uC7A5\uD574 \uC8FC\uC138\uC694");return}let c=document.createElement("a");c.href=o||n,c.download="wedding-village-photo.jpg",document.body.appendChild(c),c.click(),c.remove(),nt("\u{1F4BE} \uC0AC\uC9C4\uC744 \uC800\uC7A5\uD588\uC5B4\uC694")};return s.querySelector(".ph-save").onclick=l,s.querySelector(".ph-share").onclick=async()=>{var c;if(a&&((c=navigator.canShare)!=null&&c.call(navigator,{files:[a]})))try{await navigator.share({files:[a],title:`${Ui.groom.name} \u2665 ${Ui.bride.name} \uACB0\uD63C \uB9C8\uC744`});return}catch(h){if((h==null?void 0:h.name)==="AbortError")return}l()},()=>{o&&URL.revokeObjectURL(o)}})}finally{e==null||e(),X.posing=null,X.busy=!1}}var Fi=.45;function dv(i){if(X.mode==="museum"){It.clamp(i);return}for(let t of tm){let n=i.x-t.x,r=i.z-t.z,s=Math.hypot(n,r),a=t.r+Fi;s<a&&s>1e-4&&(i.x=t.x+n/s*a,i.z=t.z+r/s*a)}for(let t of nm){let n=Math.max(t.minX,Math.min(i.x,t.maxX)),r=Math.max(t.minZ,Math.min(i.z,t.maxZ)),s=i.x-n,a=i.z-r,o=Math.hypot(s,a);if(o>=Fi)continue;if(o>1e-4){i.x=n+s/o*Fi,i.z=r+a/o*Fi;continue}let l=[[i.x-t.minX,"x",t.minX-Fi],[t.maxX-i.x,"x",t.maxX+Fi],[i.z-t.minZ,"z",t.minZ-Fi],[t.maxZ-i.z,"z",t.maxZ+Fi]].sort((c,h)=>c[0]-h[0])[0];i[l[1]]=l[2]}let e=Math.hypot(i.x,i.z);e>39&&(i.x*=39/e,i.z*=39/e)}var ea=new S;function pv(i){let e=0,t=0;if(!Xn()&&!X.busy&&((Rn.has("KeyW")||Rn.has("ArrowUp"))&&(t-=1),(Rn.has("KeyS")||Rn.has("ArrowDown"))&&(t+=1),(Rn.has("KeyA")||Rn.has("ArrowLeft"))&&(e-=1),(Rn.has("KeyD")||Rn.has("ArrowRight"))&&(e+=1),e+=gs.x,t+=gs.y,(e||t)&&(X.target=null,X.pending=null),X.target)){ea.subVectors(X.target,X.pos),ea.y=0;let a=ea.length();X.targetT-=i,X.moveT+=i;let o=Math.hypot(X.vel.x,X.vel.z),l=X.pending,c;if(l){let h=Math.hypot(X.pos.x-l.pos.x,X.pos.z-l.pos.z);c=h<l.r-.2||h<l.r&&o<.6&&X.moveT>.5}else c=a<.35;if(X.stuckT=X.moveT>.5&&o<.5?X.stuckT+i:0,c||X.targetT<0||X.stuckT>.7){let h=l&&Math.hypot(X.pos.x-l.pos.x,X.pos.z-l.pos.z)<l.r;X.target=null,X.pending=null,X.stuckT=0,l&&(c||h)?Oh(l):!c&&!mn&&nt("\uADF8\uCABD\uC740 \uB9C9\uD600 \uC788\uC5B4\uC694")}else e=ea.x/a,t=ea.z/a}let n=Math.hypot(e,t);n>1&&(e/=n,t/=n);let r=X.mode==="museum"?5.2:6.4;X.vel.x=ai(X.vel.x,e*r,10,i),X.vel.z=ai(X.vel.z,t*r,10,i),X.pos.x+=X.vel.x*i,X.pos.z+=X.vel.z*i,dv(X.pos);let s=Math.hypot(X.vel.x,X.vel.z);if(s>.3){let a=Math.atan2(X.vel.x,X.vel.z)-X.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),X.yaw+=a*Math.min(1,i*12)}return X.vy-=20*i,X.y=Math.max(0,X.y+X.vy*i),X.y===0&&(X.vy=0),dn.root.position.set(X.pos.x,X.y,X.pos.z),dn.root.rotation.y=X.yaw,s/r}var oi=new S,li=new S,Yo=new S,$o=new S;function hm(i,e,t=0){let n=X.pos,r=em();if(X.posing){let s=X.posing;i.set(s.x+s.nx*4.4,1.7,s.z+s.nz*4.4),e.set(s.x,1.25,s.z)}else if(zn)X.mode==="museum"?(i.set(n.x,r?4.1:3.6,r?9.6:8.4),e.set(n.x,r?2.45:2.7,-3.2)):r?(i.set(n.x,14.5,n.z+14.5),e.set(n.x,.6,n.z-3.5)):(i.set(n.x,10.5,n.z+13.5),e.set(n.x,1.2,n.z-1.5));else{let s=t*.08;i.set(Math.sin(s)*26,12+Math.sin(t*.3)*1.2,4+Math.cos(s)*26),e.set(0,2,-2)}}function ys(){hm(oi,li,Qo.elapsedTime),pn.position.copy(oi),pn.lookAt(li)}function mv(i,e){hm(Yo,$o,e);let t=X.swoopT>0?2.4:5,n=X.swoopT>0?2.8:6;X.swoopT>0&&(X.swoopT-=i),oi.x=ai(oi.x,Yo.x,t,i),oi.y=ai(oi.y,Yo.y,t,i),oi.z=ai(oi.z,Yo.z,t,i),li.x=ai(li.x,$o.x,n,i),li.y=ai(li.y,$o.y,n,i),li.z=ai(li.z,$o.z,n,i),pn.position.copy(oi),pn.lookAt(li),hi.sky.position.copy(pn.position)}var na=0,Ko=0,fv=0;function um(i){vs=i,gr=zh(),ct.setPixelRatio(gr),ct.setSize(vt.w,vt.h),i>=1&&hi.setLite(1),i>=2&&ct.shadowMap.enabled&&(ct.shadowMap.enabled=!1,Vt.castShadow=!1,gt.traverse(e=>{e.material&&(e.material.needsUpdate=!0)})),i>=3&&hi.setLite(2)}function gv(i){if(!zn||(na+=i,Ko++,na<2.5))return;let e=na/Ko;na=Ko=0,e>1/32&&vs<3?um(vs+1):vs>=3&&e>1/18&&++fv===2&&nt('\u{1F4D6} \uD734\uB300\uD3F0\uC774 \uD798\uB4E4\uC5B4\uD558\uBA74 \u2630 \uBA54\uB274\uC758 "\uAE00\uB85C \uBCF4\uAE30"\uB85C \uD3B8\uD558\uAC8C \uBCF4\uC138\uC694',4800)}function dm(){var n;if(requestAnimationFrame(dm),Zp++,!zn&&Zp%2)return;let i=Math.min(Qo.getDelta(),.05),e=Qo.elapsedTime;if(Fh||document.hidden||Xn()||document.body.classList.contains("reading"))return;gv(i);let t=zn?pv(i):0;if(dn.animate(i,t,e),X.mode==="out"){hi.update(i,e,X.pos),ht.update(i,e,X.pos),Vt.position.copy(X.pos).add(Jg),Vt.target.position.copy(X.pos);for(let r of ht.interactables){let s=Math.hypot(X.pos.x-r.pos.x,X.pos.z-r.pos.z);r.label.material.opacity=Math.max(.3,Math.min(1,1.6-s/22))}X.doorCooldown-=i,zn&&X.doorCooldown<0&&!X.busy&&X.vel.z<-1&&Math.hypot(X.pos.x-mr.x,X.pos.z-mr.z)<1.1&&tl(),mn&&zn&&!X.busy&&!X.target&&(mn.waitT-=i,mn.waitT<=0&&cv())}else{It.update(i,e,X.pos);let r=It.currentTheme(X.pos);r!==$p&&($p=r,document.querySelectorAll("#museum-bar .chip[data-ti]").forEach(s=>s.classList.toggle("on",+s.dataset.ti===r)),(n=document.querySelector("#museum-bar .chip.on"))==null||n.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}))}if(kp(i),ta>0){ta-=i*1.3;let r=1-Math.max(0,ta);fr.scale.setScalar(1+r*.9),fr.material.opacity=Math.max(0,ta)}un=zn&&!X.posing?ov():null,lv(),mv(i,e),ct.render(gt,pn)}var yr=window.WEDDING,pm=i=>document.querySelector(i),sa=[],Vh=null,mm=()=>document.body.classList.contains("reading"),yv=[["invitation","\u{1F48C} \uCCAD\uCCA9\uC7A5"],["directions","\u{1F5FA}\uFE0F \uC624\uC2DC\uB294 \uAE38"],["schedule","\u{1F570}\uFE0F \uC2DD\uC21C"],["album","\u{1F5BC}\uFE0F \uC568\uBC94"],["mailbox","\u2709\uFE0F \uD3B8\uC9C0"],["accounts","\u{1F381} \uB9C8\uC74C"],["quiz","\u2753 \uD034\uC988"],["couple","\u{1F4DE} \uC5F0\uB77D"]];function Oi(i,e,t,n,r=""){return`
    <section class="tv-sec" data-sec="${i}" aria-labelledby="tv-h-${i}">
      <h2 class="tv-h" id="tv-h-${i}"><span aria-hidden="true">${e}</span>${t}</h2>
      ${r?`<p class="muted tv-sub">${r}</p>`:""}
      <div class="tv-body" data-mount="${i}">${n.html}</div>
    </section>`}function fm({canPlay:i=!1,onPlay:e,onClose:t,onSent:n,section:r}={}){var d;if(mm()){r&&Gh(r);return}let s=pm("#textview"),a=br(),{date:o,time:l}=Xt(),c={invitation:bl({hero:!1}),directions:wl(),schedule:Al(),album:Pl(a),mailbox:Ll(n,{onBack:an}),accounts:Tl(),quiz:Rl(),couple:Cl({greeting:!1})},h=i?'<button class="btn-primary tv-play">\u{1F3E1} 3D \uB9C8\uC744\uC5D0\uC11C \uAD6C\uACBD\uD558\uAE30</button>':"";if(s.innerHTML=`
    <div class="tv-top">
      <button class="tv-back" ${i?"":"hidden"} aria-label="3D \uB9C8\uC744\uB85C \uB3CC\uC544\uAC00\uAE30">\u{1F3E1} \uB9C8\uC744\uB85C</button>
      <div class="tv-chips" role="navigation" aria-label="\uAE00\uB85C \uBCF4\uAE30 \uCC28\uB840">
        ${yv.map(([u,p])=>`<button class="chip" data-go="${u}">${p}</button>`).join("")}
      </div>
      <button class="fs-toggle tv-fs" aria-label="${Ma()?"\uAE00\uC790 \uC791\uAC8C":"\uAE00\uC790 \uD06C\uAC8C"}">${Ma()?"\uAC00-":"\uAC00+"}</button>
    </div>
    <div class="tv-inner">
      <header class="tv-hero">
        <div class="en">WEDDING INVITATION</div>
        <div class="tv-names">${ye(yr.groom.name)} <span class="heart">\u2665</span> ${ye(yr.bride.name)}</div>
        <div class="muted">${o} ${l}<br>${ye(yr.venue.name)} ${ye(yr.venue.hall)}</div>
        <div class="intro-dday">${Gi()==="today"?"\uC624\uB298\uC774\uC5D0\uC694 \u{1F389}":pi()}</div>
        ${h}
        <p class="muted tv-hint">${i?"\uAC8C\uC784\uC774 \uC5B4\uB824\uC6B0\uC2DC\uBA74 \uADF8\uB300\uB85C \uC544\uB798\uB85C \uB0B4\uB824\uC11C \uC77D\uC5B4 \uC8FC\uC138\uC694":"\uC544\uB798\uB85C \uB0B4\uB9AC\uBA74\uC11C \uCC9C\uCC9C\uD788 \uC77D\uC5B4 \uC8FC\uC138\uC694"}</p>
      </header>
      ${Oi("invitation","\u{1F48C}","\uCCAD\uCCA9\uC7A5",c.invitation)}
      ${Oi("directions","\u{1F5FA}\uFE0F","\uC624\uC2DC\uB294 \uAE38",c.directions)}
      ${Oi("schedule","\u{1F570}\uFE0F","\uC624\uB298\uC758 \uC2DD\uC21C",c.schedule)}
      ${Oi("album","\u{1F5BC}\uFE0F",((d=yr.museum)==null?void 0:d.title)||"\uCD94\uC5B5 \uC0AC\uC9C4\uAD00",c.album,"\uC0AC\uC9C4\uC744 \uB204\uB974\uBA74 \uD06C\uAC8C \uBCFC \uC218 \uC788\uC5B4\uC694")}
      ${Oi("mailbox","\u2709\uFE0F","\uCD95\uD558 \uD3B8\uC9C0\uD568",c.mailbox)}
      ${Oi("accounts","\u{1F381}","\uB9C8\uC74C \uC804\uD558\uC2E4 \uACF3",c.accounts)}
      ${Oi("quiz","\u2753","\uC2E0\uB791\uC2E0\uBD80 \uD034\uC988",c.quiz,"\uAE30\uB2E4\uB9AC\uC2DC\uB294 \uB3D9\uC548 \uAC00\uBCCD\uAC8C \uD480\uC5B4 \uBCF4\uC138\uC694")}
      ${Oi("couple","\u{1F4DE}","\uC2E0\uB791 \xB7 \uC2E0\uBD80\uC5D0\uAC8C \uC5F0\uB77D",c.couple)}
      <footer class="tv-foot">
        <div class="btns" style="justify-content:center">
          <button class="btn tv-share">\u{1F517} \uCCAD\uCCA9\uC7A5 \uACF5\uC720\uD558\uAE30</button>
          ${i?'<button class="btn pink tv-play">\u{1F3E1} \uB9C8\uC744\uB85C \uB4E4\uC5B4\uAC00\uAE30</button>':""}
        </div>
        <p style="margin-top:18px">${ye(yr.groom.name)} \u2665 ${ye(yr.bride.name)} \xB7 \uC791\uC740 \uACB0\uD63C \uB9C8\uC744</p>
      </footer>
    </div>`,sa=[],Object.entries(c).forEach(([u,p])=>{var m;let f=s.querySelector(`[data-mount="${u}"]`),v=(m=p.mount)==null?void 0:m.call(p,f);typeof v=="function"&&sa.push(v)}),s.querySelectorAll("[data-go]").forEach(u=>u.onclick=()=>Gh(u.dataset.go)),s.querySelectorAll(".tv-back, .tv-play").forEach(u=>u.onclick=()=>{e==null||e(),_v()}),s.querySelectorAll(".tv-share").forEach(u=>u.onclick=Sl),"IntersectionObserver"in window){let u=[...s.querySelectorAll("[data-go]")],p=new IntersectionObserver(f=>f.forEach(v=>{var m;v.isIntersecting&&(u.forEach(_=>_.classList.toggle("on",_.dataset.go===v.target.dataset.sec)),(m=u.find(_=>_.classList.contains("on")))==null||m.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"}))}),{root:s,rootMargin:"-35% 0px -55% 0px"});s.querySelectorAll(".tv-sec").forEach(f=>p.observe(f)),sa.push(()=>p.disconnect())}Vh={onClose:t},document.body.classList.add("reading"),s.scrollTop=0,Yi(Wh),r&&setTimeout(()=>Gh(r,!1),60)}function Gh(i,e=!0){var t;(t=pm("#textview").querySelector(`[data-sec="${i}"]`))==null||t.scrollIntoView({behavior:e?"smooth":"auto",block:"start"})}function Wh(){var e;document.body.classList.remove("reading"),sa.forEach(t=>t()),sa=[];let i=Vh;Vh=null,(e=i==null?void 0:i.onClose)==null||e.call(i)}function _v(){mm()&&(Wh(),Cr(Wh))}var en=window.WEDDING,Ve=i=>document.querySelector(i),xv=[[10,"\uB9C8\uC744\uC744 \uC9D3\uB294 \uC911\u2026 \u{1F3E1}"],[35,"\uAF43\uC744 \uC2EC\uB294 \uC911\u2026 \u{1F337}"],[65,"\uC758\uC790\uB97C \uB193\uB294 \uC911\u2026 \u{1FA91}"],[85,"\uC0AC\uC9C4\uC744 \uAC70\uB294 \uC911\u2026 \u{1F5BC}\uFE0F"]],Xh=i=>{Ve("#loadbar").style.width=i+"%";let e=Ve("#btn-enter");if(e.disabled){let t=xv.filter(([n])=>i>=n).pop();t&&(e.textContent=t[1])}};["gesturestart","gesturechange"].forEach(i=>document.addEventListener(i,e=>e.preventDefault()));if(window.visualViewport){let i=window.visualViewport,e=()=>document.documentElement.style.setProperty("--kb",`${Math.max(0,Math.round(innerHeight-i.height-i.offsetTop))}px`);i.addEventListener("resize",e),i.addEventListener("scroll",e)}var{date:Mv,time:Ev}=Xt(),ym=`${en.groom.name} \u2665 ${en.bride.name}`;Ve("#i-groom").textContent=en.groom.name;Ve("#i-bride").textContent=en.bride.name;Ve("#i-date").innerHTML=`${Mv} ${Ev}<br>${en.venue.name} ${en.venue.hall}`;Ve("#i-dday").textContent=pi();Ve("#h-names").textContent=ym;Ve("#h-dday").textContent=pi();document.title=`${ym} \uACB0\uD63C\uD569\uB2C8\uB2E4`;var jh=Gi();if(jh==="today"){Ve("#i-dday").textContent="\uC624\uB298\uC774\uC5D0\uC694 \u{1F389}",Ve("#h-dday").textContent="\uC624\uB298 \u{1F389}";let i=Ve("#today");i.hidden=!1;let e=()=>{var n,r,s,a;let t=da();i.querySelector(".t-now").textContent=t.done?"\u{1F64F} \uC624\uB298 \uC608\uC2DD\uC774 \uBAA8\uB450 \uB05D\uB0AC\uC5B4\uC694. \uAC10\uC0AC\uD569\uB2C8\uB2E4":t.item?`\u{1F570}\uFE0F \uC9C0\uAE08: ${t.item.time} ${t.item.title}`:`\u{1F570}\uFE0F \uACE7 \uC2DC\uC791\uD574\uC694 \xB7 \uCCAB \uC21C\uC11C ${((r=(n=en.schedule)==null?void 0:n[0])==null?void 0:r.time)||""} ${((a=(s=en.schedule)==null?void 0:s[0])==null?void 0:a.title)||""}`};e(),setInterval(e,6e4),i.querySelector(".t-dir").onclick=Pr,i.querySelector(".t-acc").onclick=Ts}else jh==="after"&&(Ve("#i-dday").textContent=`${pi()} \u{1F495}`);fu()&&(Ve("#demo-badge").hidden=!1);var qe=null,_m=["#8FB8DE","#F4B8C0","#F7D58B","#A8D08D","#C9B3E6","#F9C59E","#E88A98","#7FC8C2"],xm=["#5A3A2A","#3A2A24","#7A5238","#1E1A22","#C98A5B"],Mm="wedding-character",gm=i=>i[Math.floor(Math.random()*i.length)],qh=()=>({outfit:gm(_m),hair:gm(xm),longHair:Math.random()<.5}),tn=null;try{tn=JSON.parse(localStorage.getItem(Mm)||"null")}catch{}(!tn||!_m.includes(tn.outfit)||!xm.includes(tn.hair))&&(tn=qh());var Em=()=>{try{localStorage.setItem(Mm,JSON.stringify(tn))}catch{}};function bm(i){let e=Ve("#avatar");e.style.setProperty("--outfit",tn.outfit),e.style.setProperty("--hair",tn.hair),e.classList.toggle("long",!!tn.longHair),i&&(e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop"))}function Sm(){let i=qh();i.outfit===tn.outfit&&(i=qh()),tn=i,Em(),bm(!0),qe==null||qe.setCharacter(tn),bt(12),ot.sfx("pop"),document.body.classList.contains("playing")&&nt("\u{1F3B2} \uC0C8 \uCE90\uB9AD\uD130\uB85C \uBC14\uB00C\uC5C8\uC5B4\uC694")}Em();bm(!1);Ve("#btn-reroll").onclick=Sm;Xh(10);Du();var wm="wedding-visited",_r=new Set;try{_r=new Set(JSON.parse(localStorage.getItem(wm)||"[]"))}catch{}function Tm(){document.querySelectorAll("#visits li").forEach(n=>n.classList.toggle("done",_r.has(n.dataset.id)));let i=_r.size,e=document.querySelectorAll("#visits li").length,t=Ve("#visit-count");t&&(t.textContent=i?`${i}/${e}`:"")}addEventListener("wv:visit",i=>{if(!_r.has(i.detail)){_r.add(i.detail);try{localStorage.setItem(wm,JSON.stringify([..._r]))}catch{}Tm(),_r.size===document.querySelectorAll("#visits li").length&&setTimeout(()=>{nt("\u{1F3C5} \uB9C8\uC744\uC758 \uBAA8\uB4E0 \uACF3\uC744 \uB458\uB7EC\uBD24\uC5B4\uC694!",3600),Lr()},800)}});Tm();var vm;(vm=Ve("#btn-wide"))==null||vm.addEventListener("click",()=>{let i=document.body.classList.toggle("wide");Ve("#btn-wide").textContent=i?"\u{1F4F1} \uD734\uB300\uD3F0 \uBCF4\uAE30":"\u{1F5A5} \uB113\uAC8C \uBCF4\uAE30",qe==null||qe.resize()});function bv(){var i;try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");return t?((i=t.getExtension("WEBGL_lose_context"))==null||i.loseContext(),!0):!1}catch{return!1}}async function Sv(){var d;let i=setTimeout(()=>{let u=Ve("#btn-enter");u.disabled&&(u.disabled=!1,u.textContent="\u{1F4D6} \uCCAD\uCCA9\uC7A5 \uAE00\uB85C \uBCF4\uAE30",u.onclick=()=>a(),Ve("#intro-help").textContent="\uB9C8\uC744\uC774 \uB2A6\uAC8C \uC5F4\uB9AC\uACE0 \uC788\uC5B4\uC694. \uBA3C\uC800 \uAE00\uB85C \uBCF4\uAE30\uB85C \uC77D\uC5B4 \uC8FC\uC138\uC694")},9e3);if(bv())try{qe=await rm({character:tn,onProgress:Xh})}catch(u){console.error("3D \uB9C8\uC744\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD574 \uAE00\uB85C \uBCF4\uAE30\uB85C \uC804\uD658\uD569\uB2C8\uB2E4",u),qe=null,Ve("#app").innerHTML=""}clearTimeout(i),qe||document.body.classList.add("no3d"),Xh(100);let e=!1,t=Ve("#bgm"),n=Ve("#btn-sound"),r=()=>{n.textContent=(en.bgm?!t.paused:ot.enabled)?"\u{1F50A}":"\u{1F507}"};function s(){e||!qe||(e=!0,document.body.classList.add("playing"),Ve("#intro").classList.add("hide"),en.bgm&&t.play().then(r).catch(()=>{}),qe.start({hint:!0}),r(),!en.bgm&&!ot.saved()&&setTimeout(()=>nt("\u{1F50A} \uC624\uB978\uCABD \uC704 \uBC84\uD2BC\uC73C\uB85C \uC624\uB974\uACE8 \uC18C\uB9AC\uB97C \uCF24 \uC218 \uC788\uC5B4\uC694",3400),9500))}function a(u){Ve("#intro").classList.add("hide"),fm({canPlay:!!qe,onPlay:s,onSent:qe==null?void 0:qe.letterSent,onClose:()=>{e||Ve("#intro").classList.remove("hide")},section:u})}let o=qe?qe.themes:br(),l=[{emoji:"\u{1F48C}",label:"\uCCAD\uCCA9\uC7A5",go:va},{emoji:"\u{1F5FA}\uFE0F",label:"\uC624\uC2DC\uB294 \uAE38",go:Pr},{emoji:"\u2709\uFE0F",label:"\uCD95\uD558 \uD3B8\uC9C0",go:()=>As(qe==null?void 0:qe.letterSent)},qe?{emoji:"\u{1F5BC}\uFE0F",label:"\uCD94\uC5B5 \uC0AC\uC9C4\uAD00",go:()=>{an(),qe.enterMuseum()}}:{emoji:"\u{1F4DA}",label:"\uC804\uCCB4 \uC568\uBC94",go:()=>Ir(o)},{emoji:"\u{1F381}",label:"\uB9C8\uC74C \uC804\uD558\uC2E4 \uACF3",go:Ts},{emoji:"\u{1F570}\uFE0F",label:"\uC624\uB298\uC758 \uC2DD\uC21C",go:ya},{emoji:"\u2753",label:"\uC2E0\uB791\uC2E0\uBD80 \uD034\uC988",go:_a},{emoji:"\u{1F490}",label:"\uC2E0\uB791\xB7\uC2E0\uBD80 \uC778\uC0AC",go:xa},...qe?[{emoji:"\u{1F6B6}",label:"\uC790\uB3D9 \uD22C\uC5B4",go:()=>{an(),qe.startTour()}},{emoji:"\u{1F319}",label:"\uB0AE \xB7 \uBC24 \uBC14\uAFB8\uAE30",go:()=>{an(),qe.cycleTime()}},{emoji:"\u{1F3B2}",label:"\uCE90\uB9AD\uD130 \uBC14\uAFB8\uAE30",go:()=>{an(),Sm()}}]:[]];if(jh==="today"){let u=["\uC624\uB298\uC758 \uC2DD\uC21C","\uC624\uC2DC\uB294 \uAE38","\uB9C8\uC74C \uC804\uD558\uC2E4 \uACF3"];l.sort((p,f)=>(u.indexOf(p.label)+1||99)-(u.indexOf(f.label)+1||99))}let c=()=>Lu(l);Ve("#btn-menu").onclick=c,Ve("#btn-text-hud").onclick=()=>a(),(d=Ve("#btn-desk-text"))==null||d.addEventListener("click",()=>a()),en.bgm?(t.src=en.bgm,n.hidden=!1,n.onclick=()=>{t.paused?t.play().then(r).catch(()=>{}):(t.pause(),r())}):qe&&(n.hidden=!1,r(),n.onclick=()=>{let u=ot.setEnabled(!ot.enabled);r(),nt(u?"\u{1F50A} \uC624\uB974\uACE8 \uBC30\uACBD\uC74C\uC744 \uCF30\uC5B4\uC694":"\u{1F507} \uC18C\uB9AC\uB97C \uAED0\uC5B4\uC694")});let h=Ve("#btn-enter");h.disabled=!1,h.textContent=qe?"\uB9C8\uC744\uC5D0 \uC785\uC7A5\uD558\uAE30 \u{1F490}":"\u{1F4D6} \uCCAD\uCCA9\uC7A5 \uAE00\uB85C \uBCF4\uAE30",h.onclick=()=>qe?s():a(),Ve("#btn-text").onclick=()=>a(),Ve("#btn-tour-start").onclick=()=>{if(!qe){a();return}s(),setTimeout(()=>qe.startTour(),1400)}}Sv();})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */

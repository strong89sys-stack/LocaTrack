import{t as e}from"./jsx-runtime-B-hcVAMW.js";import{t}from"./compiler-runtime-kM0e9lBH.js";import{t as n}from"./loader-circle-Dd7dVyCf.js";import{B as r,R as ee,w as i}from"./app-BrOCEdYE.js";var te=i(`Cpu`,[[`rect`,{width:`16`,height:`16`,x:`4`,y:`4`,rx:`2`,key:`14l7u7`}],[`rect`,{width:`6`,height:`6`,x:`9`,y:`9`,rx:`1`,key:`5aljv4`}],[`path`,{d:`M15 2v2`,key:`13l42r`}],[`path`,{d:`M15 20v2`,key:`15mkzm`}],[`path`,{d:`M2 15h2`,key:`1gxd5l`}],[`path`,{d:`M2 9h2`,key:`1bbxkp`}],[`path`,{d:`M20 15h2`,key:`19e6y8`}],[`path`,{d:`M20 9h2`,key:`19tzq7`}],[`path`,{d:`M9 2v2`,key:`165o2o`}],[`path`,{d:`M9 20v2`,key:`i2bqo8`}]]),ne=i(`Smartphone`,[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`,key:`1yt0o3`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}]]),re=t(),a=e();function o(e){let t=(0,re.c)(87),{equipements:r}=e,i;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(i={imei:``,numero_sim:``,niveau_batterie:100,statut:`Actif`,equipement_id:0},t[0]=i):i=t[0];let{data:o,setData:c,post:l,processing:u,errors:d}=ee(i),f;t[1]===l?f=t[2]:(f=e=>{e.preventDefault(),l(`/appareils/create`,{onSuccess:ie})},t[1]=l,t[2]=f);let p=f,m;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,a.jsxs)(`div`,{className:`mb-8`,children:[(0,a.jsxs)(`div`,{className:`mb-3 flex items-center gap-3`,children:[(0,a.jsx)(`div`,{className:`flex h-10 w-10 items-center justify-center rounded-lg bg-[#00647c]/10`,children:(0,a.jsx)(te,{className:`h-5 w-5 text-[#00647c]`})}),(0,a.jsx)(`span`,{className:`text-sm font-medium text-[#00647c]`,children:`Gestion des appareils`})]}),(0,a.jsx)(`h1`,{className:`text-3xl font-semibold tracking-tight text-gray-900 dark:text-white`,children:`Ajouter un appareil GPS`}),(0,a.jsx)(`p`,{className:`mt-2 text-sm text-gray-500 dark:text-gray-400`,children:`Enregistrez un nouveau dispositif GPS et associez-le à un équipement.`})]}),t[3]=m):m=t[3];let h;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,a.jsx)(`label`,{htmlFor:`imei`,className:`
                                    mb-2 block text-sm font-medium
                                    text-gray-900 dark:text-gray-200
                                `,children:`Numéro IMEI`}),t[4]=h):h=t[4];let g;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(g=(0,a.jsx)(ne,{className:`
                                        absolute left-3 top-1/2
                                        h-4 w-4 -translate-y-1/2
                                        text-gray-400
                                    `}),t[5]=g):g=t[5];let _;t[6]===c?_=t[7]:(_=e=>c(`imei`,e.target.value),t[6]=c,t[7]=_);let v;t[8]!==o.imei||t[9]!==_?(v=(0,a.jsxs)(`div`,{className:`relative`,children:[g,(0,a.jsx)(`input`,{id:`imei`,type:`text`,value:o.imei,onChange:_,placeholder:`Ex : 356938035643809`,required:!0,className:`
                                        w-full rounded-lg
                                        border border-gray-300
                                        bg-white
                                        py-3 pl-10 pr-4
                                        text-sm text-gray-900
                                        outline-none transition
                                        placeholder:text-gray-400
                                        focus:border-[#00647c]
                                        focus:ring-2
                                        focus:ring-[#00647c]/20
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-white
                                    `})]}),t[8]=o.imei,t[9]=_,t[10]=v):v=t[10];let y;t[11]===d.imei?y=t[12]:(y=d.imei&&(0,a.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:d.imei}),t[11]=d.imei,t[12]=y);let b;t[13]!==v||t[14]!==y?(b=(0,a.jsxs)(`div`,{children:[h,v,y]}),t[13]=v,t[14]=y,t[15]=b):b=t[15];let x;t[16]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,a.jsx)(`label`,{htmlFor:`numero_sim`,className:`
                                        mb-2 block text-sm font-medium
                                        text-gray-900 dark:text-gray-200
                                    `,children:`Numéro SIM`}),t[16]=x):x=t[16];let S;t[17]===c?S=t[18]:(S=e=>c(`numero_sim`,e.target.value),t[17]=c,t[18]=S);let C;t[19]!==o.numero_sim||t[20]!==S?(C=(0,a.jsx)(`input`,{id:`numero_sim`,type:`text`,value:o.numero_sim,onChange:S,placeholder:`Ex : 0700000000`,required:!0,className:`
                                        w-full rounded-lg
                                        border border-gray-300
                                        bg-white
                                        px-4 py-3
                                        text-sm text-gray-900
                                        outline-none transition
                                        placeholder:text-gray-400
                                        focus:border-[#00647c]
                                        focus:ring-2
                                        focus:ring-[#00647c]/20
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-white
                                    `}),t[19]=o.numero_sim,t[20]=S,t[21]=C):C=t[21];let w;t[22]===d.numero_sim?w=t[23]:(w=d.numero_sim&&(0,a.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:d.numero_sim}),t[22]=d.numero_sim,t[23]=w);let T;t[24]!==C||t[25]!==w?(T=(0,a.jsxs)(`div`,{children:[x,C,w]}),t[24]=C,t[25]=w,t[26]=T):T=t[26];let E;t[27]===Symbol.for(`react.memo_cache_sentinel`)?(E=(0,a.jsx)(`label`,{htmlFor:`niveau_batterie`,className:`
                                        mb-2 block text-sm font-medium
                                        text-gray-900 dark:text-gray-200
                                    `,children:`Niveau de batterie`}),t[27]=E):E=t[27];let D;t[28]===c?D=t[29]:(D=e=>c(`niveau_batterie`,Number(e.target.value)),t[28]=c,t[29]=D);let O;t[30]!==o.niveau_batterie||t[31]!==D?(O=(0,a.jsx)(`input`,{id:`niveau_batterie`,type:`number`,min:`0`,max:`100`,value:o.niveau_batterie,onChange:D,disabled:!0,className:`
                                            w-full rounded-lg
                                            border border-gray-300
                                            bg-white
                                            px-4 py-3 pr-12
                                            text-sm text-gray-900
                                            outline-none transition
                                            focus:border-[#00647c]
                                            focus:ring-2
                                            focus:ring-[#00647c]/20
                                            dark:border-zinc-700
                                            dark:bg-zinc-900
                                            dark:text-white
                                            disabled:bg-gray-200
                                        `}),t[30]=o.niveau_batterie,t[31]=D,t[32]=O):O=t[32];let k;t[33]===Symbol.for(`react.memo_cache_sentinel`)?(k=(0,a.jsx)(`span`,{className:`
                                        absolute right-4 top-1/2
                                        -translate-y-1/2
                                        text-sm text-gray-400
                                    `,children:`%`}),t[33]=k):k=t[33];let A;t[34]===O?A=t[35]:(A=(0,a.jsxs)(`div`,{className:`relative`,children:[O,k]}),t[34]=O,t[35]=A);let j;t[36]===d.niveau_batterie?j=t[37]:(j=d.niveau_batterie&&(0,a.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:d.niveau_batterie}),t[36]=d.niveau_batterie,t[37]=j);let M;t[38]!==A||t[39]!==j?(M=(0,a.jsxs)(`div`,{children:[E,A,j]}),t[38]=A,t[39]=j,t[40]=M):M=t[40];let N;t[41]!==T||t[42]!==M?(N=(0,a.jsxs)(`div`,{className:`grid gap-6 sm:grid-cols-2`,children:[T,M]}),t[41]=T,t[42]=M,t[43]=N):N=t[43];let P;t[44]===Symbol.for(`react.memo_cache_sentinel`)?(P=(0,a.jsx)(`label`,{htmlFor:`statut`,className:`
                                    mb-2 block text-sm font-medium
                                    text-gray-900 dark:text-gray-200
                                `,children:`Statut de l'appareil`}),t[44]=P):P=t[44];let F;t[45]===c?F=t[46]:(F=e=>c(`statut`,e.target.value),t[45]=c,t[46]=F);let I,L;t[47]===Symbol.for(`react.memo_cache_sentinel`)?(I=(0,a.jsx)(`option`,{value:`Actif`,children:`Actif`}),L=(0,a.jsx)(`option`,{value:`Inactif`,children:`Inactif`}),t[47]=I,t[48]=L):(I=t[47],L=t[48]);let R;t[49]!==o.statut||t[50]!==F?(R=(0,a.jsxs)(`select`,{id:`statut`,value:o.statut,onChange:F,disabled:!0,className:`
                                    w-full rounded-lg
                                    border border-gray-300
                                    bg-white
                                    px-4 py-3
                                    text-sm text-gray-900
                                    outline-none transition
                                    focus:border-[#00647c]
                                    focus:ring-2
                                    focus:ring-[#00647c]/20
                                    dark:border-zinc-700
                                    dark:bg-zinc-900
                                    dark:text-white
                                    disabled:bg-gray-200
                                `,children:[I,L]}),t[49]=o.statut,t[50]=F,t[51]=R):R=t[51];let z;t[52]===d.statut?z=t[53]:(z=d.statut&&(0,a.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:d.statut}),t[52]=d.statut,t[53]=z);let B;t[54]!==R||t[55]!==z?(B=(0,a.jsxs)(`div`,{children:[P,R,z]}),t[54]=R,t[55]=z,t[56]=B):B=t[56];let V;t[57]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,a.jsx)(`label`,{htmlFor:`equipement_id`,className:`
                                    mb-2 block text-sm font-medium
                                    text-gray-900 dark:text-gray-200
                                `,children:`Équipement associé`}),t[57]=V):V=t[57];let H=o.equipement_id||``,U;t[58]===c?U=t[59]:(U=e=>c(`equipement_id`,e.target.value===``?0:Number(e.target.value)),t[58]=c,t[59]=U);let W;t[60]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,a.jsx)(`option`,{value:``,children:`Sélectionner un équipement`}),t[60]=W):W=t[60];let G;t[61]===r?G=t[62]:(G=r.map(s),t[61]=r,t[62]=G);let K;t[63]!==H||t[64]!==U||t[65]!==G?(K=(0,a.jsxs)(`select`,{id:`equipement_id`,value:H,onChange:U,className:`
                                    w-full rounded-lg
                                    border border-gray-300
                                    bg-white
                                    px-4 py-3
                                    text-sm text-gray-900
                                    outline-none transition
                                    focus:border-[#00647c]
                                    focus:ring-2
                                    focus:ring-[#00647c]/20
                                    dark:border-zinc-700
                                    dark:bg-zinc-900
                                    dark:text-white
                                `,children:[W,G]}),t[63]=H,t[64]=U,t[65]=G,t[66]=K):K=t[66];let q;t[67]===d.equipement_id?q=t[68]:(q=d.equipement_id&&(0,a.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:d.equipement_id}),t[67]=d.equipement_id,t[68]=q);let J;t[69]!==K||t[70]!==q?(J=(0,a.jsxs)(`div`,{children:[V,K,q]}),t[69]=K,t[70]=q,t[71]=J):J=t[71];let Y;t[72]!==N||t[73]!==B||t[74]!==J||t[75]!==b?(Y=(0,a.jsxs)(`div`,{className:`space-y-7 p-8`,children:[b,N,B,J]}),t[72]=N,t[73]=B,t[74]=J,t[75]=b,t[76]=Y):Y=t[76];let X;t[77]===u?X=t[78]:(X=u&&(0,a.jsx)(n,{className:`h-4 w-4 animate-spin`}),t[77]=u,t[78]=X);let Z=u?`Ajout en cours...`:`Ajouter l'appareil`,Q;t[79]!==u||t[80]!==X||t[81]!==Z?(Q=(0,a.jsx)(`div`,{className:`
                            flex items-center justify-end
                            border-t border-gray-200
                            bg-gray-50
                            px-8 py-5
                            dark:border-zinc-800
                            dark:bg-zinc-900/50
                        `,children:(0,a.jsxs)(`button`,{type:`submit`,disabled:u,className:`
                                inline-flex items-center
                                justify-center gap-2
                                rounded-lg
                                bg-[#00647c]
                                px-6 py-3
                                text-sm font-semibold
                                text-white
                                shadow-sm
                                transition
                                hover:bg-[#005268]
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#00647c]/30
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                            `,children:[X,Z]})}),t[79]=u,t[80]=X,t[81]=Z,t[82]=Q):Q=t[82];let $;return t[83]!==p||t[84]!==Y||t[85]!==Q?($=(0,a.jsx)(`div`,{className:`min-h-screen bg-gray-50 px-4 py-12 dark:bg-[#09090b]`,children:(0,a.jsxs)(`div`,{className:`mx-auto w-full max-w-2xl`,children:[m,(0,a.jsxs)(`form`,{onSubmit:p,className:`
                        overflow-hidden
                        rounded-2xl
                        border border-gray-200
                        bg-white
                        shadow-sm
                        dark:border-zinc-800
                        dark:bg-zinc-950
                    `,children:[Y,Q]})]})}),t[83]=p,t[84]=Y,t[85]=Q,t[86]=$):$=t[86],$}function s(e){return(0,a.jsxs)(`option`,{value:e.id,children:[e.reference,` —`,` `,e.marque,` `,e.modele]},e.id)}function ie(){r.visit(`/equipements`)}export{o as default};
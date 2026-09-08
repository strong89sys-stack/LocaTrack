import{t as e}from"./jsx-runtime-B-hcVAMW.js";import{t}from"./compiler-runtime-kM0e9lBH.js";import{t as ee}from"./loader-circle-Dd7dVyCf.js";import{B as n,R as r,w as i}from"./app-BrOCEdYE.js";var a=i(`ImagePlus`,[[`path`,{d:`M16 5h6`,key:`1vod17`}],[`path`,{d:`M19 2v6`,key:`4bpg5p`}],[`path`,{d:`M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5`,key:`1ue2ih`}],[`path`,{d:`m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`,key:`1xmnt7`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}]]),te=t(),o=e();function s(e){let t=(0,te.c)(85),{statuts:n}=e,i;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(i={reference:``,marque:``,modele:``,statut_id:0,image:null},t[0]=i):i=t[0];let{data:s,setData:l,post:u,processing:d,errors:f}=r(i),p;t[1]===u?p=t[2]:(p=e=>{e.preventDefault(),u(`/equipements/create`,{onSuccess:c})},t[1]=u,t[2]=p);let m=p,h;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,o.jsxs)(`div`,{className:`mb-8`,children:[(0,o.jsx)(`h1`,{className:`text-3xl font-semibold tracking-tight text-gray-900 dark:text-white`,children:`Ajouter un équipement`}),(0,o.jsx)(`p`,{className:`mt-2 text-sm text-gray-500 dark:text-gray-400`,children:`Enregistrez un nouveau matériel dans votre parc.`})]}),t[3]=h):h=t[3];let g;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(g=(0,o.jsx)(`label`,{htmlFor:`reference`,className:`mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200`,children:`Référence`}),t[4]=g):g=t[4];let _;t[5]===l?_=t[6]:(_=e=>l(`reference`,e.target.value),t[5]=l,t[6]=_);let v;t[7]!==s.reference||t[8]!==_?(v=(0,o.jsx)(`input`,{id:`reference`,type:`text`,value:s.reference,onChange:_,placeholder:`Ex : EQ-2026-001`,className:`
                                    w-full rounded-lg border border-gray-300
                                    bg-white px-4 py-3 text-sm
                                    text-gray-900 outline-none
                                    transition
                                    placeholder:text-gray-400
                                    focus:border-[#00647c]
                                    focus:ring-2
                                    focus:ring-[#00647c]/20
                                    dark:border-zinc-700
                                    dark:bg-zinc-900
                                    dark:text-white
                                `}),t[7]=s.reference,t[8]=_,t[9]=v):v=t[9];let y;t[10]===f.reference?y=t[11]:(y=f.reference&&(0,o.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:f.reference}),t[10]=f.reference,t[11]=y);let b;t[12]!==v||t[13]!==y?(b=(0,o.jsxs)(`div`,{children:[g,v,y]}),t[12]=v,t[13]=y,t[14]=b):b=t[14];let x;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,o.jsx)(`label`,{htmlFor:`marque`,className:`mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200`,children:`Marque`}),t[15]=x):x=t[15];let S;t[16]===l?S=t[17]:(S=e=>l(`marque`,e.target.value),t[16]=l,t[17]=S);let C;t[18]!==s.marque||t[19]!==S?(C=(0,o.jsx)(`input`,{id:`marque`,type:`text`,value:s.marque,onChange:S,placeholder:`Ex : Caterpillar`,className:`
                                        w-full rounded-lg border border-gray-300
                                        bg-white px-4 py-3 text-sm
                                        text-gray-900 outline-none
                                        transition
                                        placeholder:text-gray-400
                                        focus:border-[#00647c]
                                        focus:ring-2
                                        focus:ring-[#00647c]/20
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-white
                                    `}),t[18]=s.marque,t[19]=S,t[20]=C):C=t[20];let w;t[21]===f.marque?w=t[22]:(w=f.marque&&(0,o.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:f.marque}),t[21]=f.marque,t[22]=w);let T;t[23]!==C||t[24]!==w?(T=(0,o.jsxs)(`div`,{children:[x,C,w]}),t[23]=C,t[24]=w,t[25]=T):T=t[25];let E;t[26]===Symbol.for(`react.memo_cache_sentinel`)?(E=(0,o.jsx)(`label`,{htmlFor:`modele`,className:`mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200`,children:`Modèle`}),t[26]=E):E=t[26];let D;t[27]===l?D=t[28]:(D=e=>l(`modele`,e.target.value),t[27]=l,t[28]=D);let O;t[29]!==s.modele||t[30]!==D?(O=(0,o.jsx)(`input`,{id:`modele`,type:`text`,value:s.modele,onChange:D,placeholder:`Ex : 320D`,className:`
                                        w-full rounded-lg border border-gray-300
                                        bg-white px-4 py-3 text-sm
                                        text-gray-900 outline-none
                                        transition
                                        placeholder:text-gray-400
                                        focus:border-[#00647c]
                                        focus:ring-2
                                        focus:ring-[#00647c]/20
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-white
                                    `}),t[29]=s.modele,t[30]=D,t[31]=O):O=t[31];let k;t[32]===f.modele?k=t[33]:(k=f.modele&&(0,o.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:f.modele}),t[32]=f.modele,t[33]=k);let A;t[34]!==O||t[35]!==k?(A=(0,o.jsxs)(`div`,{children:[E,O,k]}),t[34]=O,t[35]=k,t[36]=A):A=t[36];let j;t[37]!==T||t[38]!==A?(j=(0,o.jsxs)(`div`,{className:`grid gap-6 sm:grid-cols-2`,children:[T,A]}),t[37]=T,t[38]=A,t[39]=j):j=t[39];let M;t[40]===Symbol.for(`react.memo_cache_sentinel`)?(M=(0,o.jsx)(`label`,{htmlFor:`statut`,className:`mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200`,children:`Statut`}),t[40]=M):M=t[40];let N=s.statut_id||``,P;t[41]===l?P=t[42]:(P=e=>l(`statut_id`,e.target.value===``?0:Number(e.target.value)),t[41]=l,t[42]=P);let F;t[43]===Symbol.for(`react.memo_cache_sentinel`)?(F=(0,o.jsx)(`option`,{value:``,children:`Sélectionner un statut`}),t[43]=F):F=t[43];let I;t[44]===n?I=t[45]:(I=n.map(ne),t[44]=n,t[45]=I);let L;t[46]!==N||t[47]!==P||t[48]!==I?(L=(0,o.jsxs)(`select`,{id:`statut`,value:N,onChange:P,className:`
                                    w-full rounded-lg border border-gray-300
                                    bg-white px-4 py-3 text-sm
                                    text-gray-900 outline-none
                                    transition
                                    focus:border-[#00647c]
                                    focus:ring-2
                                    focus:ring-[#00647c]/20
                                    dark:border-zinc-700
                                    dark:bg-zinc-900
                                    dark:text-white
                                `,children:[F,I]}),t[46]=N,t[47]=P,t[48]=I,t[49]=L):L=t[49];let R;t[50]===f.statut_id?R=t[51]:(R=f.statut_id&&(0,o.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:f.statut_id}),t[50]=f.statut_id,t[51]=R);let z;t[52]!==L||t[53]!==R?(z=(0,o.jsxs)(`div`,{children:[M,L,R]}),t[52]=L,t[53]=R,t[54]=z):z=t[54];let B;t[55]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,o.jsx)(`label`,{htmlFor:`image`,className:`mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200`,children:`Image de l'équipement`}),t[55]=B):B=t[55];let V;t[56]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,o.jsx)(a,{className:`mb-3 h-10 w-10 text-gray-400`}),t[56]=V):V=t[56];let H=s.image?s.image.name:`Cliquez pour sélectionner une image`,U;t[57]===H?U=t[58]:(U=(0,o.jsx)(`span`,{className:`text-sm font-medium text-gray-700 dark:text-gray-300`,children:H}),t[57]=H,t[58]=U);let W;t[59]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,o.jsx)(`span`,{className:`mt-1 text-xs text-gray-400`,children:`PNG, JPG ou JPEG`}),t[59]=W):W=t[59];let G;t[60]===l?G=t[61]:(G=(0,o.jsx)(`input`,{id:`image`,type:`file`,accept:`image/png,image/jpeg,image/jpg`,className:`hidden`,onChange:e=>l(`image`,e.target.files?.[0]??null)}),t[60]=l,t[61]=G);let K;t[62]!==U||t[63]!==G?(K=(0,o.jsxs)(`label`,{htmlFor:`image`,className:`
                                    flex cursor-pointer flex-col
                                    items-center justify-center
                                    rounded-xl border-2 border-dashed
                                    border-gray-300
                                    px-6 py-10
                                    transition
                                    hover:border-[#00647c]
                                    hover:bg-gray-50
                                    dark:border-zinc-700
                                    dark:hover:bg-zinc-900
                                `,children:[V,U,W,G]}),t[62]=U,t[63]=G,t[64]=K):K=t[64];let q;t[65]===f.image?q=t[66]:(q=f.image&&(0,o.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:f.image}),t[65]=f.image,t[66]=q);let J;t[67]!==K||t[68]!==q?(J=(0,o.jsxs)(`div`,{children:[B,K,q]}),t[67]=K,t[68]=q,t[69]=J):J=t[69];let Y;t[70]!==j||t[71]!==z||t[72]!==J||t[73]!==b?(Y=(0,o.jsxs)(`div`,{className:`space-y-7 p-8`,children:[b,j,z,J]}),t[70]=j,t[71]=z,t[72]=J,t[73]=b,t[74]=Y):Y=t[74];let X;t[75]===d?X=t[76]:(X=d&&(0,o.jsx)(ee,{className:`h-4 w-4 animate-spin`}),t[75]=d,t[76]=X);let Z=d?`Ajout en cours...`:`Ajouter l'équipement`,Q;t[77]!==d||t[78]!==X||t[79]!==Z?(Q=(0,o.jsx)(`div`,{className:`
                        flex items-center justify-end
                        border-t border-gray-200
                        bg-gray-50
                        px-8 py-5
                        dark:border-zinc-800
                        dark:bg-zinc-900/50
                    `,children:(0,o.jsxs)(`button`,{type:`submit`,disabled:d,className:`
                                inline-flex items-center justify-center
                                gap-2 rounded-lg
                                bg-[#00647c]
                                px-6 py-3
                                text-sm font-semibold text-white
                                shadow-sm
                                transition
                                hover:bg-[#005268]
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#00647c]/30
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                            `,children:[X,Z]})}),t[77]=d,t[78]=X,t[79]=Z,t[80]=Q):Q=t[80];let $;return t[81]!==m||t[82]!==Y||t[83]!==Q?($=(0,o.jsx)(`div`,{className:`min-h-screen bg-gray-50 px-4 py-12 dark:bg-[#09090b]`,children:(0,o.jsxs)(`div`,{className:`mx-auto w-full max-w-2xl`,children:[h,(0,o.jsxs)(`form`,{onSubmit:m,encType:`multipart/form-data`,className:`
                        overflow-hidden
                        rounded-2xl
                        border border-gray-200
                        bg-white
                        shadow-sm
                        dark:border-zinc-800
                        dark:bg-zinc-950
                    `,children:[Y,Q]})]})}),t[81]=m,t[82]=Y,t[83]=Q,t[84]=$):$=t[84],$}function ne(e){return(0,o.jsx)(`option`,{value:e.id,children:e.libelle},e.id)}function c(){n.visit(`/equipements`)}export{s as default};
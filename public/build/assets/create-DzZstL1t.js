import{t as e}from"./jsx-runtime-B-hcVAMW.js";import{t}from"./compiler-runtime-kM0e9lBH.js";import{t as n}from"./loader-circle-Dd7dVyCf.js";import{B as r,R as i}from"./app-BrOCEdYE.js";var a=t(),o=e();function s(){let e=(0,a.c)(77),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t={nom:``,prenoms:``,email:``,telephone:``,adresse:``},e[0]=t):t=e[0];let{data:r,setData:s,post:u,processing:d,errors:f}=i(t),p;e[1]===u?p=e[2]:(p=e=>{e.preventDefault(),u(`/clients/create`,{onSuccess:l})},e[1]=u,e[2]=p);let m=p,h=c,g;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(g=(0,o.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,o.jsxs)(`div`,{className:`mb-8`,children:[(0,o.jsx)(`h1`,{className:`text-3xl font-semibold tracking-tight text-gray-900 dark:text-white`,children:`Ajouter un client`}),(0,o.jsx)(`p`,{className:`mt-2 text-sm text-gray-500 dark:text-gray-400`,children:`Enregistrez un nouveau client dans votre plateforme.`})]}),(0,o.jsx)(`button`,{onClick:h,className:`font-bold hover:underline transition-all`,children:`Retour`})]}),e[3]=g):g=e[3];let _;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(_=(0,o.jsx)(`label`,{htmlFor:`nom`,className:`
                                        mb-2 block
                                        text-sm font-medium
                                        text-gray-900
                                        dark:text-gray-200
                                    `,children:`Nom`}),e[4]=_):_=e[4];let v;e[5]===s?v=e[6]:(v=e=>s(`nom`,e.target.value),e[5]=s,e[6]=v);let y;e[7]!==r.nom||e[8]!==v?(y=(0,o.jsx)(`input`,{id:`nom`,type:`text`,value:r.nom,onChange:v,placeholder:`Ex : Kaboré`,className:`
                                        w-full rounded-lg
                                        border border-gray-300
                                        bg-white
                                        px-4 py-3
                                        text-sm text-gray-900
                                        outline-none
                                        transition
                                        placeholder:text-gray-400
                                        focus:border-[#00647c]
                                        focus:ring-2
                                        focus:ring-[#00647c]/20
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-white
                                    `}),e[7]=r.nom,e[8]=v,e[9]=y):y=e[9];let b;e[10]===f.nom?b=e[11]:(b=f.nom&&(0,o.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:f.nom}),e[10]=f.nom,e[11]=b);let x;e[12]!==y||e[13]!==b?(x=(0,o.jsxs)(`div`,{children:[_,y,b]}),e[12]=y,e[13]=b,e[14]=x):x=e[14];let S;e[15]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,o.jsx)(`label`,{htmlFor:`prenoms`,className:`
                                        mb-2 block
                                        text-sm font-medium
                                        text-gray-900
                                        dark:text-gray-200
                                    `,children:`Prénoms`}),e[15]=S):S=e[15];let C;e[16]===s?C=e[17]:(C=e=>s(`prenoms`,e.target.value),e[16]=s,e[17]=C);let w;e[18]!==r.prenoms||e[19]!==C?(w=(0,o.jsx)(`input`,{id:`prenoms`,type:`text`,value:r.prenoms,onChange:C,placeholder:`Ex : Aziz`,className:`
                                        w-full rounded-lg
                                        border border-gray-300
                                        bg-white
                                        px-4 py-3
                                        text-sm text-gray-900
                                        outline-none
                                        transition
                                        placeholder:text-gray-400
                                        focus:border-[#00647c]
                                        focus:ring-2
                                        focus:ring-[#00647c]/20
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-white
                                    `}),e[18]=r.prenoms,e[19]=C,e[20]=w):w=e[20];let T;e[21]===f.prenoms?T=e[22]:(T=f.prenoms&&(0,o.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:f.prenoms}),e[21]=f.prenoms,e[22]=T);let E;e[23]!==w||e[24]!==T?(E=(0,o.jsxs)(`div`,{children:[S,w,T]}),e[23]=w,e[24]=T,e[25]=E):E=e[25];let D;e[26]!==E||e[27]!==x?(D=(0,o.jsxs)(`div`,{className:`grid gap-6 sm:grid-cols-2`,children:[x,E]}),e[26]=E,e[27]=x,e[28]=D):D=e[28];let O;e[29]===Symbol.for(`react.memo_cache_sentinel`)?(O=(0,o.jsx)(`label`,{htmlFor:`email`,className:`
                                    mb-2 block
                                    text-sm font-medium
                                    text-gray-900
                                    dark:text-gray-200
                                `,children:`Adresse e-mail`}),e[29]=O):O=e[29];let k;e[30]===s?k=e[31]:(k=e=>s(`email`,e.target.value),e[30]=s,e[31]=k);let A;e[32]!==r.email||e[33]!==k?(A=(0,o.jsx)(`input`,{id:`email`,type:`email`,value:r.email,onChange:k,placeholder:`Ex : client@example.com`,className:`
                                    w-full rounded-lg
                                    border border-gray-300
                                    bg-white
                                    px-4 py-3
                                    text-sm text-gray-900
                                    outline-none
                                    transition
                                    placeholder:text-gray-400
                                    focus:border-[#00647c]
                                    focus:ring-2
                                    focus:ring-[#00647c]/20
                                    dark:border-zinc-700
                                    dark:bg-zinc-900
                                    dark:text-white
                                `}),e[32]=r.email,e[33]=k,e[34]=A):A=e[34];let j;e[35]===f.email?j=e[36]:(j=f.email&&(0,o.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:f.email}),e[35]=f.email,e[36]=j);let M;e[37]!==A||e[38]!==j?(M=(0,o.jsxs)(`div`,{children:[O,A,j]}),e[37]=A,e[38]=j,e[39]=M):M=e[39];let N;e[40]===Symbol.for(`react.memo_cache_sentinel`)?(N=(0,o.jsx)(`label`,{htmlFor:`telephone`,className:`
                                    mb-2 block
                                    text-sm font-medium
                                    text-gray-900
                                    dark:text-gray-200
                                `,children:`Téléphone`}),e[40]=N):N=e[40];let P;e[41]===s?P=e[42]:(P=e=>s(`telephone`,e.target.value),e[41]=s,e[42]=P);let F;e[43]!==r.telephone||e[44]!==P?(F=(0,o.jsx)(`input`,{id:`telephone`,type:`tel`,value:r.telephone,onChange:P,placeholder:`Ex : +225 07 00 00 00 00`,className:`
                                    w-full rounded-lg
                                    border border-gray-300
                                    bg-white
                                    px-4 py-3
                                    text-sm text-gray-900
                                    outline-none
                                    transition
                                    placeholder:text-gray-400
                                    focus:border-[#00647c]
                                    focus:ring-2
                                    focus:ring-[#00647c]/20
                                    dark:border-zinc-700
                                    dark:bg-zinc-900
                                    dark:text-white
                                `}),e[43]=r.telephone,e[44]=P,e[45]=F):F=e[45];let I;e[46]===f.telephone?I=e[47]:(I=f.telephone&&(0,o.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:f.telephone}),e[46]=f.telephone,e[47]=I);let L;e[48]!==F||e[49]!==I?(L=(0,o.jsxs)(`div`,{children:[N,F,I]}),e[48]=F,e[49]=I,e[50]=L):L=e[50];let R;e[51]===Symbol.for(`react.memo_cache_sentinel`)?(R=(0,o.jsx)(`label`,{htmlFor:`adresse`,className:`
                                    mb-2 block
                                    text-sm font-medium
                                    text-gray-900
                                    dark:text-gray-200
                                `,children:`Adresse`}),e[51]=R):R=e[51];let z;e[52]===s?z=e[53]:(z=e=>s(`adresse`,e.target.value),e[52]=s,e[53]=z);let B;e[54]!==r.adresse||e[55]!==z?(B=(0,o.jsx)(`input`,{id:`adresse`,type:`text`,value:r.adresse,onChange:z,placeholder:`Ex : Cocody, Abidjan`,className:`
                                    w-full rounded-lg
                                    border border-gray-300
                                    bg-white
                                    px-4 py-3
                                    text-sm text-gray-900
                                    outline-none
                                    transition
                                    placeholder:text-gray-400
                                    focus:border-[#00647c]
                                    focus:ring-2
                                    focus:ring-[#00647c]/20
                                    dark:border-zinc-700
                                    dark:bg-zinc-900
                                    dark:text-white
                                `}),e[54]=r.adresse,e[55]=z,e[56]=B):B=e[56];let V;e[57]===f.adresse?V=e[58]:(V=f.adresse&&(0,o.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:f.adresse}),e[57]=f.adresse,e[58]=V);let H;e[59]!==B||e[60]!==V?(H=(0,o.jsxs)(`div`,{children:[R,B,V]}),e[59]=B,e[60]=V,e[61]=H):H=e[61];let U;e[62]!==D||e[63]!==M||e[64]!==L||e[65]!==H?(U=(0,o.jsxs)(`div`,{className:`space-y-7 p-8`,children:[D,M,L,H]}),e[62]=D,e[63]=M,e[64]=L,e[65]=H,e[66]=U):U=e[66];let W;e[67]===d?W=e[68]:(W=d&&(0,o.jsx)(n,{className:`h-4 w-4 animate-spin`}),e[67]=d,e[68]=W);let G=d?`Création en cours...`:`Créer le client`,K;e[69]!==d||e[70]!==W||e[71]!==G?(K=(0,o.jsx)(`div`,{className:`
                            flex items-center justify-end
                            border-t border-gray-200
                            bg-gray-50
                            px-8 py-5
                            dark:border-zinc-800
                            dark:bg-zinc-900/50
                        `,children:(0,o.jsxs)(`button`,{type:`submit`,disabled:d,className:`
                                inline-flex
                                items-center
                                justify-center
                                gap-2
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
                            `,children:[W,G]})}),e[69]=d,e[70]=W,e[71]=G,e[72]=K):K=e[72];let q;return e[73]!==m||e[74]!==U||e[75]!==K?(q=(0,o.jsx)(`div`,{className:`min-h-screen bg-gray-50 px-4 py-12 dark:bg-[#09090b]`,children:(0,o.jsxs)(`div`,{className:`mx-auto w-full max-w-2xl`,children:[g,(0,o.jsxs)(`form`,{onSubmit:m,className:` overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950`,children:[U,K]})]})}),e[73]=m,e[74]=U,e[75]=K,e[76]=q):q=e[76],q}function c(){r.visit(`/locations`)}function l(){r.visit(`/locations/form`)}export{s as default};
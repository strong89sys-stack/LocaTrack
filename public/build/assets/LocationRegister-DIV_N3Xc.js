import{t as e}from"./jsx-runtime-B-hcVAMW.js";import{t}from"./compiler-runtime-kM0e9lBH.js";import{t as ee}from"./loader-circle-CCkVCjNd.js";import{L as te,z as n}from"./app-BwpkRVN-.js";var ne=t(),r=e();function i(e){let t=(0,ne.c)(88),{clients:n,equipements:i,zone_geofence:a}=e,o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o={client_id:0,equipement_id:0,zone_geofence_id:null,date_debut:``,date_fin:``},t[0]=o):o=t[0];let{data:s,setData:c,post:l,processing:u,errors:d}=te(o),f;t[1]===l?f=t[2]:(f=e=>{e.preventDefault(),l(`/locations/create`)},t[1]=l,t[2]=f);let p=f,se=oe,m;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,r.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,r.jsxs)(`div`,{className:`mb-8`,children:[(0,r.jsx)(`h1`,{className:`text-3xl font-semibold tracking-tight text-gray-900 dark:text-white`,children:`Créer une location`}),(0,r.jsx)(`p`,{className:`mt-2 text-sm text-gray-500 dark:text-gray-400`,children:`Enregistrez un nouveau contrat de location dans votre plateforme.`})]}),(0,r.jsx)(`button`,{onClick:se,className:`font-bold hover:underline transition-all`,children:`Retour`})]}),t[3]=m):m=t[3];let h;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,r.jsx)(`label`,{htmlFor:`client_id`,className:`\r
                                        mb-2 block\r
                                        text-sm font-medium\r
                                        text-gray-900\r
                                        dark:text-gray-200\r
                                    `,children:`Client`}),t[4]=h):h=t[4];let g=s.client_id||``,_;t[5]===c?_=t[6]:(_=e=>c(`client_id`,e.target.value===``?0:Number(e.target.value)),t[5]=c,t[6]=_);let v;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,r.jsx)(`option`,{value:``,children:`Sélectionner un client`}),t[7]=v):v=t[7];let y;t[8]===n?y=t[9]:(y=n.map(ae),t[8]=n,t[9]=y);let b;t[10]!==g||t[11]!==_||t[12]!==y?(b=(0,r.jsxs)(`select`,{id:`client_id`,value:g,onChange:_,className:`\r
                                        w-full rounded-lg\r
                                        border border-gray-300\r
                                        bg-white\r
                                        px-4 py-3\r
                                        text-sm\r
                                        text-gray-900\r
                                        outline-none\r
                                        transition\r
                                        focus:border-[#00647c]\r
                                        focus:ring-2\r
                                        focus:ring-[#00647c]/20\r
                                        dark:border-zinc-700\r
                                        dark:bg-zinc-900\r
                                        dark:text-white\r
                                    `,children:[v,y]}),t[10]=g,t[11]=_,t[12]=y,t[13]=b):b=t[13];let x;t[14]===d.client_id?x=t[15]:(x=d.client_id&&(0,r.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:d.client_id}),t[14]=d.client_id,t[15]=x);let S;t[16]!==x||t[17]!==b?(S=(0,r.jsxs)(`div`,{children:[h,b,x]}),t[16]=x,t[17]=b,t[18]=S):S=t[18];let C;t[19]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,r.jsx)(`label`,{htmlFor:`equipement_id`,className:`\r
                                        mb-2 block\r
                                        text-sm font-medium\r
                                        text-gray-900\r
                                        dark:text-gray-200\r
                                    `,children:`Équipement`}),t[19]=C):C=t[19];let ce=s.equipement_id||``,w;t[20]===c?w=t[21]:(w=e=>c(`equipement_id`,e.target.value===``?0:Number(e.target.value)),t[20]=c,t[21]=w);let T;t[22]===Symbol.for(`react.memo_cache_sentinel`)?(T=(0,r.jsx)(`option`,{value:``,children:`Sélectionner un équipement`}),t[22]=T):T=t[22];let E;t[23]===i?E=t[24]:(E=i.map(ie),t[23]=i,t[24]=E);let D;t[25]!==ce||t[26]!==w||t[27]!==E?(D=(0,r.jsxs)(`select`,{id:`equipement_id`,value:ce,onChange:w,className:`\r
                                        w-full rounded-lg\r
                                        border border-gray-300\r
                                        bg-white\r
                                        px-4 py-3\r
                                        text-sm\r
                                        text-gray-900\r
                                        outline-none\r
                                        transition\r
                                        focus:border-[#00647c]\r
                                        focus:ring-2\r
                                        focus:ring-[#00647c]/20\r
                                        dark:border-zinc-700\r
                                        dark:bg-zinc-900\r
                                        dark:text-white\r
                                    `,children:[T,E]}),t[25]=ce,t[26]=w,t[27]=E,t[28]=D):D=t[28];let O;t[29]===d.equipement_id?O=t[30]:(O=d.equipement_id&&(0,r.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:d.equipement_id}),t[29]=d.equipement_id,t[30]=O);let k;t[31]!==D||t[32]!==O?(k=(0,r.jsxs)(`div`,{children:[C,D,O]}),t[31]=D,t[32]=O,t[33]=k):k=t[33];let A;t[34]!==S||t[35]!==k?(A=(0,r.jsxs)(`div`,{className:`grid gap-6 sm:grid-cols-2`,children:[S,k]}),t[34]=S,t[35]=k,t[36]=A):A=t[36];let j;t[37]===Symbol.for(`react.memo_cache_sentinel`)?(j=(0,r.jsx)(`label`,{htmlFor:`date_debut`,className:`\r
                                        mb-2 block\r
                                        text-sm font-medium\r
                                        text-gray-900\r
                                        dark:text-gray-200\r
                                    `,children:`Date de début`}),t[37]=j):j=t[37];let M;t[38]===c?M=t[39]:(M=e=>c(`date_debut`,e.target.value),t[38]=c,t[39]=M);let N;t[40]!==s.date_debut||t[41]!==M?(N=(0,r.jsx)(`input`,{id:`date_debut`,type:`date`,value:s.date_debut,onChange:M,className:`\r
                                        w-full rounded-lg\r
                                        border border-gray-300\r
                                        bg-white\r
                                        px-4 py-3\r
                                        text-sm\r
                                        text-gray-900\r
                                        outline-none\r
                                        transition\r
                                        focus:border-[#00647c]\r
                                        focus:ring-2\r
                                        focus:ring-[#00647c]/20\r
                                        dark:border-zinc-700\r
                                        dark:bg-zinc-900\r
                                        dark:text-white\r
                                    `}),t[40]=s.date_debut,t[41]=M,t[42]=N):N=t[42];let P;t[43]===d.date_debut?P=t[44]:(P=d.date_debut&&(0,r.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:d.date_debut}),t[43]=d.date_debut,t[44]=P);let F;t[45]!==N||t[46]!==P?(F=(0,r.jsxs)(`div`,{children:[j,N,P]}),t[45]=N,t[46]=P,t[47]=F):F=t[47];let I;t[48]===Symbol.for(`react.memo_cache_sentinel`)?(I=(0,r.jsx)(`label`,{htmlFor:`date_fin`,className:`\r
                                        mb-2 block\r
                                        text-sm font-medium\r
                                        text-gray-900\r
                                        dark:text-gray-200\r
                                    `,children:`Date de fin`}),t[48]=I):I=t[48];let L;t[49]===c?L=t[50]:(L=e=>c(`date_fin`,e.target.value),t[49]=c,t[50]=L);let R;t[51]!==s.date_fin||t[52]!==L?(R=(0,r.jsx)(`input`,{id:`date_fin`,type:`date`,value:s.date_fin,onChange:L,className:`\r
                                        w-full rounded-lg\r
                                        border border-gray-300\r
                                        bg-white\r
                                        px-4 py-3\r
                                        text-sm\r
                                        text-gray-900\r
                                        outline-none\r
                                        transition\r
                                        focus:border-[#00647c]\r
                                        focus:ring-2\r
                                        focus:ring-[#00647c]/20\r
                                        dark:border-zinc-700\r
                                        dark:bg-zinc-900\r
                                        dark:text-white\r
                                    `}),t[51]=s.date_fin,t[52]=L,t[53]=R):R=t[53];let z;t[54]===d.date_fin?z=t[55]:(z=d.date_fin&&(0,r.jsx)(`p`,{className:`mt-2 text-sm text-red-500`,children:d.date_fin}),t[54]=d.date_fin,t[55]=z);let B;t[56]!==R||t[57]!==z?(B=(0,r.jsxs)(`div`,{children:[I,R,z]}),t[56]=R,t[57]=z,t[58]=B):B=t[58];let V;t[59]!==F||t[60]!==B?(V=(0,r.jsxs)(`div`,{className:`grid gap-6 sm:grid-cols-2`,children:[F,B]}),t[59]=F,t[60]=B,t[61]=V):V=t[61];let H;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,r.jsx)(`label`,{htmlFor:`zone`,className:`\r
                                    mb-2 block\r
                                    text-sm font-medium\r
                                    text-gray-900\r
                                    dark:text-gray-200\r
                                `,children:`Zone`}),t[62]=H):H=t[62];let U=s.zone_geofence_id||``,W;t[63]===c?W=t[64]:(W=e=>c(`zone_geofence_id`,e.target.value===``?null:Number(e.target.value)),t[63]=c,t[64]=W);let G;t[65]===Symbol.for(`react.memo_cache_sentinel`)?(G=(0,r.jsx)(`option`,{value:``,children:`Sélectionner une zone`}),t[65]=G):G=t[65];let K;t[66]===a?K=t[67]:(K=a.map(re),t[66]=a,t[67]=K);let q;t[68]!==U||t[69]!==W||t[70]!==K?(q=(0,r.jsxs)(`div`,{children:[H,(0,r.jsxs)(`select`,{id:`zone`,value:U,onChange:W,className:`\r
                                    w-full rounded-lg\r
                                    border border-gray-300\r
                                    bg-gray-100\r
                                    px-4 py-3\r
                                    text-sm\r
                                    text-gray-900\r
                                    outline-none\r
                                    dark:border-zinc-700\r
                                    dark:bg-zinc-900\r
                                    dark:text-gray-400\r
                                `,children:[G,K]})]}),t[68]=U,t[69]=W,t[70]=K,t[71]=q):q=t[71];let J;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(J=(0,r.jsx)(`label`,{htmlFor:`statut`,className:`\r
                                    mb-2 block\r
                                    text-sm font-medium\r
                                    text-gray-900\r
                                    dark:text-gray-200\r
                                `,children:`Statut`}),t[72]=J):J=t[72];let Y;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Y=(0,r.jsxs)(`div`,{children:[J,(0,r.jsx)(`select`,{id:`statut`,value:`en_cours`,disabled:!0,className:`\r
                                    w-full rounded-lg\r
                                    border border-gray-300\r
                                    bg-gray-100\r
                                    px-4 py-3\r
                                    text-sm\r
                                    text-gray-900\r
                                    outline-none\r
                                    dark:border-zinc-700\r
                                    dark:bg-zinc-900\r
                                    dark:text-gray-400\r
                                `,children:(0,r.jsx)(`option`,{value:`en_cours`,children:`En cours`})})]}),t[73]=Y):Y=t[73];let X;t[74]!==A||t[75]!==V||t[76]!==q?(X=(0,r.jsxs)(`div`,{className:`space-y-7 p-8`,children:[A,V,q,Y]}),t[74]=A,t[75]=V,t[76]=q,t[77]=X):X=t[77];let Z;t[78]===u?Z=t[79]:(Z=u&&(0,r.jsx)(ee,{className:`h-4 w-4 animate-spin`}),t[78]=u,t[79]=Z);let le=u?`Création en cours...`:`Créer la location`,Q;t[80]!==u||t[81]!==Z||t[82]!==le?(Q=(0,r.jsx)(`div`,{className:`\r
                            flex items-center justify-end\r
                            border-t border-gray-200\r
                            bg-gray-50\r
                            px-8 py-5\r
                            dark:border-zinc-800\r
                            dark:bg-zinc-900/50\r
                        `,children:(0,r.jsxs)(`button`,{type:`submit`,disabled:u,className:`\r
                                inline-flex\r
                                items-center\r
                                justify-center\r
                                gap-2\r
                                rounded-lg\r
                                bg-[#00647c]\r
                                px-6 py-3\r
                                text-sm font-semibold\r
                                text-white\r
                                shadow-sm\r
                                transition\r
                                hover:bg-[#005268]\r
                                focus:outline-none\r
                                focus:ring-2\r
                                focus:ring-[#00647c]/30\r
                                disabled:cursor-not-allowed\r
                                disabled:opacity-60\r
                            `,children:[Z,le]})}),t[80]=u,t[81]=Z,t[82]=le,t[83]=Q):Q=t[83];let $;return t[84]!==p||t[85]!==X||t[86]!==Q?($=(0,r.jsx)(`div`,{className:`min-h-screen bg-gray-50 px-4 py-12 dark:bg-[#09090b]`,children:(0,r.jsxs)(`div`,{className:`mx-auto w-full max-w-2xl`,children:[m,(0,r.jsxs)(`form`,{onSubmit:p,className:`\r
                        overflow-hidden\r
                        rounded-2xl\r
                        border border-gray-200\r
                        bg-white\r
                        shadow-sm\r
                        dark:border-zinc-800\r
                        dark:bg-zinc-950\r
                    `,children:[X,Q]})]})}),t[84]=p,t[85]=X,t[86]=Q,t[87]=$):$=t[87],$}function re(e){return(0,r.jsx)(`option`,{value:e.id,children:e.nom},e.id)}function ie(e){return(0,r.jsxs)(`option`,{value:e.id,children:[e.reference,` -`,` `,e.marque,` `,e.modele]},e.id)}function ae(e){return(0,r.jsxs)(`option`,{value:e.id,children:[e.prenoms,` `,e.nom]},e.id)}function oe(){n.visit(`/locations`)}export{i as default};
import{t as e}from"./jsx-runtime-B-hcVAMW.js";import{t}from"./compiler-runtime-kM0e9lBH.js";import{z as n}from"./app-BwpkRVN-.js";var r=t(),i=e();function a(e){let t=(0,r.c)(64),{appareil:n}=e,a=o,s=Math.max(0,Math.min(100,n.niveau_batterie)),c=s<=20,l=n.statut.toLowerCase()===`actif`||n.statut.toLowerCase()===`connecté`,u;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,i.jsxs)(`div`,{className:`mb-6 flex items-center justify-between`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Gestion des appareils GPS`}),(0,i.jsx)(`h1`,{className:`
                            mt-1
                            text-2xl
                            font-bold
                            text-foreground
                        `,children:`Détails de l'appareil`})]}),(0,i.jsx)(`button`,{type:`button`,onClick:a,className:`
                            rounded-xl
                            border-0
                            bg-transparent
                            px-4
                            py-2.5
                            text-sm
                            font-semibold
                            text-gray-400
                            shadow-sm
                            transition
                            hover:text-foreground
                            hover:shadow
                        `,children:`← Retour`})]}),t[0]=u):u=t[0];let d,f;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,i.jsx)(`div`,{className:`
                                    flex
                                    h-16
                                    w-16
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-white/15
                                    text-3xl
                                `,children:`📡`}),f=(0,i.jsx)(`p`,{className:`
                                        text-xs
                                        font-medium
                                        uppercase
                                        tracking-widest
                                        text-white/60
                                    `,children:`Appareil GPS`}),t[1]=d,t[2]=f):(d=t[1],f=t[2]);let p;t[3]===n.imei?p=t[4]:(p=(0,i.jsxs)(`div`,{className:`flex items-center gap-4`,children:[d,(0,i.jsxs)(`div`,{children:[f,(0,i.jsx)(`h2`,{className:`
                                        mt-1
                                        text-2xl
                                        font-bold
                                        text-white
                                        break-all
                                    `,children:n.imei})]})]}),t[3]=n.imei,t[4]=p);let m=`
                                    inline-flex
                                    w-fit
                                    items-center
                                    gap-2
                                    rounded-full
                                    px-4
                                    py-2
                                    text-sm
                                    font-semibold
                                    ${l?`bg-green-400/20 text-green-100`:`bg-white/15 text-white`}
                                `,h=`
                                        h-2.5
                                        w-2.5
                                        rounded-full
                                        ${l?`bg-green-400`:`bg-gray-300`}
                                    `,g;t[5]===h?g=t[6]:(g=(0,i.jsx)(`span`,{className:h}),t[5]=h,t[6]=g);let _;t[7]!==n.statut||t[8]!==m||t[9]!==g?(_=(0,i.jsxs)(`span`,{className:m,children:[g,n.statut]}),t[7]=n.statut,t[8]=m,t[9]=g,t[10]=_):_=t[10];let v;t[11]!==p||t[12]!==_?(v=(0,i.jsx)(`div`,{className:`
                        bg-[#00647c]
                        px-8
                        py-7
                    `,children:(0,i.jsxs)(`div`,{className:`
                            flex
                            flex-col
                            gap-5
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        `,children:[p,_]})}),t[11]=p,t[12]=_,t[13]=v):v=t[13];let y;t[14]===Symbol.for(`react.memo_cache_sentinel`)?(y=(0,i.jsx)(`h3`,{className:`
                                mb-4
                                text-xs
                                font-bold
                                uppercase
                                tracking-widest
                                text-gray-400
                            `,children:`Identification`}),t[14]=y):y=t[14];let b;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,i.jsxs)(`div`,{className:`
                                        mb-2
                                        flex
                                        items-center
                                        gap-2
                                    `,children:[(0,i.jsx)(`span`,{className:`
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-white
                                            text-sm
                                            shadow-sm
                                            text-black
                                        `,children:`#`}),(0,i.jsx)(`span`,{className:`
                                            text-xs
                                            font-medium
                                            text-gray-400
                                        `,children:`Identifiant`})]}),t[15]=b):b=t[15];let x;t[16]===n.id?x=t[17]:(x=(0,i.jsxs)(`div`,{className:`
                                    rounded-2xl
                                    border
                                    border-border
                                    bg-background
                                    p-5
                                `,children:[b,(0,i.jsxs)(`p`,{className:`
                                        text-xl
                                        font-bold
                                        text-foreground
                                    `,children:[`#`,n.id]})]}),t[16]=n.id,t[17]=x);let S;t[18]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,i.jsxs)(`div`,{className:`
                                        mb-2
                                        flex
                                        items-center
                                        gap-2
                                    `,children:[(0,i.jsx)(`span`,{className:`
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-white
                                            text-sm
                                            shadow-sm
                                        `,children:`📱`}),(0,i.jsx)(`span`,{className:`
                                            text-xs
                                            font-medium
                                            text-gray-400
                                        `,children:`Numéro IMEI`})]}),t[18]=S):S=t[18];let C;t[19]===n.imei?C=t[20]:(C=(0,i.jsxs)(`div`,{className:`
                                    rounded-2xl
                                    border
                                    border-border
                                    bg-background
                                    p-5
                                `,children:[S,(0,i.jsx)(`p`,{className:`
                                        break-all
                                        text-lg
                                        font-bold
                                        tracking-wide
                                        text-foreground
                                    `,children:n.imei})]}),t[19]=n.imei,t[20]=C);let w;t[21]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,i.jsxs)(`div`,{className:`
                                        mb-2
                                        flex
                                        items-center
                                        gap-2
                                    `,children:[(0,i.jsx)(`span`,{className:`
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-white
                                            text-sm
                                            shadow-sm
                                        `,children:`💳`}),(0,i.jsx)(`span`,{className:`
                                            text-xs
                                            font-medium
                                            text-gray-400
                                        `,children:`Carte SIM`})]}),t[21]=w):w=t[21];let T;t[22]===n.numero_sim?T=t[23]:(T=(0,i.jsxs)(`div`,{className:`
                                    rounded-2xl
                                    border
                                    border-border
                                    bg-background
                                    p-5
                                `,children:[w,(0,i.jsx)(`p`,{className:`
                                        text-lg
                                        font-bold
                                        text-foreground
                                    `,children:n.numero_sim})]}),t[22]=n.numero_sim,t[23]=T);let E;t[24]===Symbol.for(`react.memo_cache_sentinel`)?(E=(0,i.jsxs)(`div`,{className:`
                                        mb-2
                                        flex
                                        items-center
                                        gap-2
                                    `,children:[(0,i.jsx)(`span`,{className:`
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-white
                                            text-sm
                                            shadow-sm
                                            text-black
                                        `,children:`●`}),(0,i.jsx)(`span`,{className:`
                                            text-xs
                                            font-medium
                                            text-gray-400
                                        `,children:`Statut`})]}),t[24]=E):E=t[24];let D=`
                                                h-2.5
                                                w-2.5
                                                rounded-full
                                                ${l?`bg-green-500`:`bg-gray-400`}
                                            `,O;t[25]===D?O=t[26]:(O=(0,i.jsx)(`span`,{className:D}),t[25]=D,t[26]=O);let k;t[27]===n.statut?k=t[28]:(k=(0,i.jsx)(`p`,{className:`
                                            text-lg
                                            font-bold
                                            text-foreground
                                        `,children:n.statut}),t[27]=n.statut,t[28]=k);let A;t[29]!==O||t[30]!==k?(A=(0,i.jsxs)(`div`,{className:`
                                    rounded-2xl
                                    border
                                    border-border
                                    bg-background
                                    p-5
                                `,children:[E,(0,i.jsxs)(`div`,{className:`
                                        flex
                                        items-center
                                        gap-2
                                    `,children:[O,k]})]}),t[29]=O,t[30]=k,t[31]=A):A=t[31];let j;t[32]!==x||t[33]!==C||t[34]!==T||t[35]!==A?(j=(0,i.jsxs)(`div`,{children:[y,(0,i.jsxs)(`div`,{className:`
                                grid
                                grid-cols-1
                                gap-4
                                md:grid-cols-2
                            `,children:[x,C,T,A]})]}),t[32]=x,t[33]=C,t[34]=T,t[35]=A,t[36]=j):j=t[36];let M;t[37]===Symbol.for(`react.memo_cache_sentinel`)?(M=(0,i.jsx)(`div`,{className:`
                            my-8
                            h-px
                            bg-border
                        `}),t[37]=M):M=t[37];let N;t[38]===Symbol.for(`react.memo_cache_sentinel`)?(N=(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h3`,{className:`
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-widest
                                        text-gray-400
                                    `,children:`Batterie`}),(0,i.jsx)(`p`,{className:`
                                        mt-1
                                        text-sm
                                        text-gray-500
                                    `,children:`Niveau de charge actuel`})]}),t[38]=N):N=t[38];let P=`
                                    text-2xl
                                    font-bold
                                    ${c?`text-red-500`:`text-foreground`}
                                `,F;t[39]!==s||t[40]!==P?(F=(0,i.jsxs)(`div`,{className:`
                                mb-4
                                flex
                                items-center
                                justify-between
                            `,children:[N,(0,i.jsxs)(`span`,{className:P,children:[s,`%`]})]}),t[39]=s,t[40]=P,t[41]=F):F=t[41];let I=`
                                        h-full
                                        rounded-full
                                        transition-all
                                        duration-700
                                        ${s<=20?`bg-red-500`:s<=50?`bg-yellow-500`:`bg-green-500`}
                                    `,L=`${s}%`,R;t[42]===L?R=t[43]:(R={width:L},t[42]=L,t[43]=R);let z;t[44]!==I||t[45]!==R?(z=(0,i.jsx)(`div`,{className:`
                                h-4
                                w-full
                                overflow-hidden
                                rounded-full
                                bg-border
                            `,children:(0,i.jsx)(`div`,{className:I,style:R})}),t[44]=I,t[45]=R,t[46]=z):z=t[46];let B;t[47]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,i.jsxs)(`div`,{className:`
                                mt-3
                                flex
                                justify-between
                                text-xs
                                text-gray-400
                            `,children:[(0,i.jsx)(`span`,{children:`Niveau faible`}),(0,i.jsx)(`span`,{children:`Niveau optimal`})]}),t[47]=B):B=t[47];let V;t[48]!==F||t[49]!==z?(V=(0,i.jsxs)(`div`,{children:[F,z,B]}),t[48]=F,t[49]=z,t[50]=V):V=t[50];let H;t[51]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,i.jsx)(`p`,{className:`
                                    text-xs
                                    text-gray-400
                                `,children:`Identifiant de l'appareil`}),t[51]=H):H=t[51];let U;t[52]===n.id?U=t[53]:(U=(0,i.jsxs)(`div`,{children:[H,(0,i.jsxs)(`p`,{className:`
                                    mt-1
                                    text-sm
                                    font-semibold
                                    text-gray-700
                                `,children:[`#`,n.id]})]}),t[52]=n.id,t[53]=U);let W;t[54]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,i.jsx)(`button`,{type:`button`,onClick:a,className:`
                                    rounded-xl
                                    bg-[#00647c]
                                    px-5
                                    py-2.5
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-[#00566a]
                                    hover:shadow-md
                                `,children:`Retour aux appareils`}),t[54]=W):W=t[54];let G;t[55]===U?G=t[56]:(G=(0,i.jsxs)(`div`,{className:`
                            mt-8
                            flex
                            flex-col
                            gap-4
                            border-t
                            border-border
                            pt-6
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        `,children:[U,W]}),t[55]=U,t[56]=G);let K;t[57]!==j||t[58]!==V||t[59]!==G?(K=(0,i.jsxs)(`div`,{className:`p-8`,children:[j,M,V,G]}),t[57]=j,t[58]=V,t[59]=G,t[60]=K):K=t[60];let q;return t[61]!==K||t[62]!==v?(q=(0,i.jsx)(`div`,{className:`min-h-screen bg-background px-6 py-8`,children:(0,i.jsxs)(`div`,{className:`mx-auto max-w-5xl bg-transparent`,children:[u,(0,i.jsxs)(`div`,{className:`
                    overflow-hidden
                    rounded-3xl
                    border
                    border-border
                    bg-background
                    shadow-sm
                `,children:[v,K]})]})}),t[61]=K,t[62]=v,t[63]=q):q=t[63],q}function o(){n.visit(`/equipements`)}export{a as default};
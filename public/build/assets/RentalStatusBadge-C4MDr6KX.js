import{a as e,n as t,t as n}from"./jsx-runtime-I8uHACss.js";var r=e({default:()=>o}),i=t(),a=n();function o(e){let t=(0,i.c)(6),{status:n}=e,r=n===`expiré`,o=n===`en_cours`?`En cours`:`Expiré`,s=`
                absolute
                right-4
                top-4
                flex
                items-center
                gap-2
                rounded-md
                px-3
                py-1.5
                text-sm
                font-bold
                shadow-sm

                ${r?`bg-red-100 text-red-700`:`bg-white text-[#08758d]`}
            `,c=`
                    h-2
                    w-2
                    rounded-full

                    ${r?`bg-red-600`:`bg-[#08758d]`}
                `,l;t[0]===c?l=t[1]:(l=(0,a.jsx)(`span`,{className:c}),t[0]=c,t[1]=l);let u;return t[2]!==o||t[3]!==s||t[4]!==l?(u=(0,a.jsxs)(`div`,{className:s,children:[l,o]}),t[2]=o,t[3]=s,t[4]=l,t[5]=u):u=t[5],u}export{r as n,o as t};
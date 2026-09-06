import{n as e,t}from"./jsx-runtime-I8uHACss.js";var n=e(),r=t();function i(e){let t=(0,n.c)(7),{status:i}=e,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a={Active:`bg-white text-[#08758d]`,Completed:`bg-white text-gray-700`,Overdue:`bg-red-100 text-red-700`},t[0]=a):a=t[0];let o=`
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
                ${a[i]}
            `,s=`
                    h-2
                    w-2
                    rounded-full
                    ${i===`Overdue`?`bg-red-600`:`bg-[#08758d]`}
                `,c;t[1]===s?c=t[2]:(c=(0,r.jsx)(`span`,{className:s}),t[1]=s,t[2]=c);let l;return t[3]!==i||t[4]!==o||t[5]!==c?(l=(0,r.jsxs)(`div`,{className:o,children:[c,i]}),t[3]=i,t[4]=o,t[5]=c,t[6]=l):l=t[6],l}export{i as default};
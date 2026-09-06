import{a as e,n as t,t as n}from"./jsx-runtime-I8uHACss.js";var r=e({default:()=>o}),i=t(),a=n();function o(e){let t=(0,i.c)(14),{progress:n,overdue:r}=e,o=r!==void 0&&r,s=Math.min(Math.max(n,0),100),c;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,a.jsx)(`span`,{className:`
                        text-sm
                        font-semibold
                        text-gray-600
                    `,children:`Temps écoulé`}),t[0]=c):c=t[0];let l=`
                        text-sm
                        font-semibold

                        ${o?`text-red-600`:`text-gray-600`}
                    `,u;t[1]===s?u=t[2]:(u=Math.round(s),t[1]=s,t[2]=u);let d;t[3]!==l||t[4]!==u?(d=(0,a.jsxs)(`div`,{className:`
                    mb-2
                    flex
                    items-center
                    justify-between
                `,children:[c,(0,a.jsxs)(`span`,{className:l,children:[u,`%`]})]}),t[3]=l,t[4]=u,t[5]=d):d=t[5];let f=`
                        h-full
                        rounded-full
                        transition-all
                        duration-700

                        ${o?`bg-red-600`:`bg-[#0796b5]`}
                    `,p=`${s}%`,m;t[6]===p?m=t[7]:(m={width:p},t[6]=p,t[7]=m);let h;t[8]!==f||t[9]!==m?(h=(0,a.jsx)(`div`,{className:`
                    h-2.5
                    overflow-hidden
                    rounded-full
                    bg-gray-200
                `,children:(0,a.jsx)(`div`,{className:f,style:m})}),t[8]=f,t[9]=m,t[10]=h):h=t[10];let g;return t[11]!==d||t[12]!==h?(g=(0,a.jsxs)(`div`,{className:`mt-7`,children:[d,h]}),t[11]=d,t[12]=h,t[13]=g):g=t[13],g}export{r as n,o as t};
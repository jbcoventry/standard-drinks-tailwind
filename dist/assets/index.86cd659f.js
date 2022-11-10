(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const l=()=>document.querySelectorAll(".drink").length;document.addEventListener("input",e=>{c(),u(),document.getElementById(`volume${l()}`).value&&document.getElementById(`abv${l()}`).value&&s()});document.addEventListener("click",function(e){e.target.matches("#clear")&&m(),e.target.matches("input")&&(e.target.value=""),c(),u()});const c=()=>{let e=l();const t=()=>{e>0&&(document.getElementById(`result${e}`).innerHTML=g(parseFloat(document.getElementById(`volume${e}`).value),parseFloat(document.getElementById(`abv${e}`).value)),e--,t())};t()},g=(e,t)=>{const n=Math.round(e*t*.0789)/100;return n||0},u=()=>{let e=0;document.querySelectorAll(".result").forEach(t=>e+=parseFloat(t.innerHTML)),document.getElementById("total").innerHTML=Math.round(e*100)/100};let i=()=>{if(l()>1)document.getElementById(`drink${l()}`).remove(),i();else return},m=()=>{document.getElementById("volume1").value="",document.getElementById("abv1").value="",i(),u()};const s=()=>{const e=l()+1,t=document.createElement("div");let n=0;l()>0&&(n=document.getElementById(`volume${l()}`).value),t.classList.add("drink","contents"),t.setAttribute("id",`drink${e}`),t.innerHTML=`
                <input
                    class="volume block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    id="volume${e}"
                    type="text"
                    inputmode="decimal"
                    value="${n}"
                />
                <input
                    class="abv block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    id="abv${e}"
                    type="text"
                    inputmode="decimal"
                />
                <div
                    class="result block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    id="result${e}"
                >
                    0
                </div>
`,document.getElementById("footer").before(t)};s();

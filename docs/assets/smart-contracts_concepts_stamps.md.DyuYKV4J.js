import{_ as t,c as e,o as a,a1 as o}from"./chunks/framework.B0uk8JDN.js";const _=JSON.parse('{"title":"Stamps","description":"","frontmatter":{},"headers":[],"relativePath":"smart-contracts/concepts/stamps.md","filePath":"smart-contracts/concepts/stamps.md"}'),s={name:"smart-contracts/concepts/stamps.md"},r=o('<h1 id="stamps" tabindex="-1">Stamps <a class="header-anchor" href="#stamps" aria-label="Permalink to &quot;Stamps&quot;">​</a></h1><p>A <code>stamp</code> is a single unit of computational work in a smart contract. Stamps are paid for with Xian. This is what enforces rate limiting and incentivizes the development of the network.</p><p>To calculate work, the code is ran through an optimized tracer. Each Python VM <code>opcode</code> has a specific cost. Each step of the code deducts from the number of stamps attached to the transaction.</p><p>If all of the stamps are deducted before the transaction is done, the transaction reverts states and fails. If there are left over stamps from the transaction execution, they are returned to the sender.</p><h2 id="price-of-stamps" tabindex="-1">Price of Stamps <a class="header-anchor" href="#price-of-stamps" aria-label="Permalink to &quot;Price of Stamps&quot;">​</a></h2><p>The <code>stamp_price</code>, the ratio of <code>xian</code> to <code>stamps</code> is decided by the quorum of validators on the network and is altered via a DAO proposal.</p><h2 id="read-write-costs" tabindex="-1">Read / Write Costs <a class="header-anchor" href="#read-write-costs" aria-label="Permalink to &quot;Read / Write Costs&quot;">​</a></h2><ul><li>Cost to read one byte from state: 3 stamps</li><li>Cost to write one byte to state: 25 stamps</li></ul>',8),c=[r];function i(n,d,p,h,m,l){return a(),e("div",null,c)}const u=t(s,[["render",i]]);export{_ as __pageData,u as default};

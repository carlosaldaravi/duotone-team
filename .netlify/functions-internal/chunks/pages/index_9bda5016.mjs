/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../astro_d5f1422a.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_ea90af8d.mjs';

const $$Astro$1 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<h1 class="font-black uppercase text-5xl text-center py-8 px-4">
Duotone <span class="block text-[83px]">TEAM</span></h1>`;
}, "/Users/carlosaldaravi/Desktop/duotone-team/src/components/Title.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Duotone team riders" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="m-auto max-w-4xl min-w-[300px]">${renderComponent($$result2, "Title", $$Title, {})}${renderComponent($$result2, "DuotoneTeam", null, { "client:only": "svelte", "client:component-hydration": "only", "client:component-path": "/Users/carlosaldaravi/Desktop/duotone-team/src/components/DuotoneTeam.svelte", "client:component-export": "default" })}</main>` })}`;
}, "/Users/carlosaldaravi/Desktop/duotone-team/src/pages/index.astro", void 0);

const $$file = "/Users/carlosaldaravi/Desktop/duotone-team/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

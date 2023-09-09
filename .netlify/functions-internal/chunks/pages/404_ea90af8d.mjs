/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, m as maybeRenderHead } from '../astro_d5f1422a.mjs';
import 'html-escaper';
import 'clsx';

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/carlosaldaravi/Desktop/duotone-team/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/carlosaldaravi/Desktop/duotone-team/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404, not found" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="relative isolate min-h-screen"><img src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-top"><div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8"><p class="text-base font-semibold leading-8 text-white">404</p><h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1><p class="mt-4 text-base text-white/70 sm:mt-6">
Sorry, we couldn’t find the page you’re looking for.
</p><div class="mt-10 flex justify-center"><a href="/" class="text-sm font-semibold leading-7 text-white"><span aria-hidden="true">&larr;</span> Back to home</a></div></div></main>` })}`;
}, "/Users/carlosaldaravi/Desktop/duotone-team/src/pages/404.astro", void 0);

const $$file = "/Users/carlosaldaravi/Desktop/duotone-team/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };

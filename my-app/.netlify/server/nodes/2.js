

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.c64de2cc.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.cad2f903.js"];
export const stylesheets = [];
export const fonts = [];

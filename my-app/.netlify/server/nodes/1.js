

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.35716f3d.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.cad2f903.js","_app/immutable/chunks/singletons.e27259fb.js"];
export const stylesheets = [];
export const fonts = [];

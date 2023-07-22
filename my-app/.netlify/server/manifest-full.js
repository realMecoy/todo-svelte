export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.db778506.js","app":"_app/immutable/entry/app.1741b908.js","imports":["_app/immutable/entry/start.db778506.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.e27259fb.js","_app/immutable/entry/app.1741b908.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.cad2f903.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

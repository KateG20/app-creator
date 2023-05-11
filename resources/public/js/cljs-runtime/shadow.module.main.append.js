
shadow.cljs.devtools.client.env.module_loaded('main');

try { app_creator.client.core.run(); } catch (e) { console.error("An error occurred when calling (app-creator.client.core/run)"); throw(e); }
# smoother-toggle

The smoothness of animation might not be as important for browser, but it is crucial to the overall experience if we are building a hybrid app (webview). Most animation I have seen is laggy in mobile device(below 60 FPS in DevTools Timeline). What I want to achieve in this repo is smooth animation in mobile device whose performance is much weaker than PC. It should be as smooth as the native component even it is webview.

The general idea is using CSS3 and let GPU do the render. So it might not support older version of browser or OS.

# smoother-toggle

The smoothness of animation might not be as important for browser, but it is crucial to the overall experience if we are building a hybrid app (webview). Most animation I have seen is laggy in mobile device(below 60 FPS in DevTools Timeline). What I want to achieve in this repo is smooth animation in mobile device whose performance is much weaker than PC. It should be as smooth as the native component even it is webview.

The general idea is using CSS3 and let GPU do the render. So it might not support older version of browser or OS.

To use this, include the css and js files. add .toggle-trigger class to the div which you would like to trigger the toggle animation when it is clicked. Also add a data attribute, data-toggle-target. The value should be the id of the container of the toggle element.
          
Add a .toggle-target class to the container. 
If you want to set teh direction, add .toggle-target-left ,.toggle-target-right, .toggle-target-up or .toggle-target-down (the default direction is left). Then put the toggle element in the container.
If you are using this as a side bar, add .toggle-sidebar to the toggle target. This will also add shadows to the background.


You can also look at the examples in this demo, or customize the css/js file.
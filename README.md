# Make Lever-Jobs Great Again (MLGA)
![All Fancy Lever Job](/Screenshot.png?raw=true "MLGA in Action")

This is a react app that you can iframe/embed anywhere basically.

### How To Use:

1. Find the Lever page that contains job positngs like (https://jobs.lever.co/leverdemo)
2. Use the username of the company `leverdemo` in the url to create the page 
  
  `https://davext.github.io/neat-lever?username=leverdemo` <-- notice the username 

3. Embed anywhere with this tag.

```
<iframe id="neat-lever"  src="https://davext.github.io/neat-lever?username=leverdemo"> </iframe>
```

You can use it anywhere that supports HTML input. Wordpress, Wix, Squarespace, Webflow, and more!

4. Bonus: if you'd like to have the iFrame height to auto resize based on how many jobs the page has, then add this to your website's head

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.min.js" ></script>
```

and add this after the iFrame code:


```
<script>
  iFrameResize({ log: true, checkOrigin: false }, '#neat-lever')
</script>	
```


### Troubleshoot

* It's not loading the jobs and it's defaulting to "btc" username:


Try looking in the browser console, you probably have the username incorrect.


* iFrame resizing is not working

Usually works right away. Try clearning your cache. If not look for the logs in the console




## Want to support the development of this project?
https://paypal.me/driftgears


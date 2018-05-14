![](https://github.com/herrkaefer/close-unwanted-tabs/raw/master/icons/icon128.png)

## cleanup-tabs

Chrome extension for closing self-defined tabs.

## A user case

This extension is for general purpose, but let's take a coder as an example.

After a lot of developing work, you may often find your browser tabs look like:

>G, SO, G, SO, [useful tab], SO, Blank, G, [useful tab], SO, BLANK, G, G, SO, ...

where `G` is 'Google search result page', `SO` is 'Stack Overflow question page', `BLANK` is 'blank tab'.

Sites like Google or Stack Overflow are paths to approach useful informations, after you get to the destinations, they are left behind, and you want to clean up the path, which means closing them all.

With this extension, one click would be enough. Just define some url pieces in the extension's option:

```
chrome://
www.google.com/search?
stackoverflow.com/questions
```

Remember: no wild characters, no regular expressions. Just url pieces included in the tabs' url that you want to close.

## Installation

(Not published yet, so manually installation is required.)

1. Download repository as ZIP, and unzip
2. Open Chrome browser and navigate to chrome://extensions
3. Select "Developer Mode" and then click "Load unpacked extension..."
4. From the file browser, choose to folder `cleanup-tabs`

## TODOs

- [ ] publish to Chrome Web Store ($5 needed)

## License

MPL v2.0

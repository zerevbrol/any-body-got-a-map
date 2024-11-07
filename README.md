# HTML5 Reader for Electric Zine Maker

A web and mobile friendly way to show off, fork of  [Electric Zine Maker](https://alienmelon.itch.io/electric-zine-maker) zines on itch.io.

See live example [here](https://jeremyoduber.itch.io/js-zine) (it would not include the music aspect).

## Usage Instructions

- Copy the PNG files from your Electric Zine Maker save folder into the 'pages' folder with their original filenames.
- If you're not using the default EZM template, change the TEMPLATE constant in ezmreader.js. As of release all EZM templates are available.
- To change the background color, modify the hex value in the BGCOLOR constant in ezmreader.js.
- To add a description or plaintext copy for screen readers, change the ALT constant.
- To turn off smoothing and get more pixelated images, set SMOOTH to false.
- Turn pages with arrow keys or A&D, or click/tap on page edges.
- If you want to add a background music that will start playing when the first click will be made : copy a mp3 file in the main folder and modify the name of the file MUSIC constant in ezmreader.js. The music can be muted with the key press m or by cliking the mute button.
- To change the mut button sprites, modify the "unmute" and "mute" png of the main folder. 
- If you are hosting your zine directly, you can change the metadata in index.html to have more control of what the preview will look like when your zine is linked to on social media.


### itch.io specific instructions
- Compress the whole thing into a zip file and upload to itch.io as an HTML project that will be played in the browser.
- Set the viewport dimensions to whatever you like.
- The reader is mobile friendly in either orientation, but for better readability on small screens, set it to Landscape.

## Special Thanks
[Nathalie Lawhead](https://bsky.app/profile/alienmelon.bsky.social) for making Electric Zine Maker  
[Jeremy Oduber](https://jeremyoduber.com/) for making the original EZM Reader
[Sean S. LeBlanc](https://bsky.app/profile/jeremyoduber.com) for code contributions


## License
[MIT](https://github.com/jeremyoduber/EZM-Reader/blob/main/LICENSE)

## To do
- Add the possibility to a click and a flip page noise
-  Add the possibility of a noise at a random time
- Add the possibility of a custom cursor
- click that mark the zine


Recruitment Song App Tests
==================

The test consists in building an application that searches for songs. You will be provided with the json file from which you can obtain the songs information as well as the creative file.

#### App. Requirements `(*)` `Optionals`
1. Create a layout based on the PSD and the fonts found under the [assets] folder.
2. It must be Responsive ( desktop, table, mobile 480). 
3. Use the least amount of images possible. `(*)` 
4. Buttons and labels adapt to its content (*)
5. Clouds animation. `(*)` 

### How to start json-server
You will need to start a fake [json-server]. Find all the info of how to use this module in the npm or github page. Then grap the [db/song.json] file and put it some where to start the server as follow:

`json-server --watch db/songs.json`

    URL: [http://localhost:3000/songs?q=beatles]

    Example:

        [
          {
            "url": "spotify:track:7linrtr5px7i3r96mducjw",
            "id": 8815585,
            "songname": "twist and shout",
            "artistid": 1833,
            "artistname": "beatles",
            "albumid": 5619520,
            "albumname": "beatles"
          },
          {
            "url": "spotify:track:7linrtr5px7i3r96mducjw",
            "id": 8815585,
            "songname": "i saw her standing there",
            "artistid": 1833,
            "artistname": "beatles",
            "albumid": 5619520,
            "albumname": "beatles"
          },
          ...
        ]    
#### App. Funtionality `(*)` `Optionals`
Use native Javascript or any other existing Javascript framework.

* When the user clicks on the magnifying glass icon or presses Enter while on the textbox, the app will make a request to the URL provided which will return a JSON and then you will dynamically load the grid with that data. `(*)` 

* The [Today] and [Friday] buttons inside of each grid element must work as radiobuttons (meaning, when one is active the other is not). `(*)` 

* The purple button will open a new tab from which the song will play. `(*)` 

-----
#### Notes:
There are no restrictions on the use of plugins or tools that you can use to develop the test.
Adobe Photoshop is the only software you will need to have installed on your machine in order to complete the test.

##### Once you are done, please let us know by sending an email to [hangarcareers@thehangar.cr].

  [http://localhost:3000/songs?q=beatles]: http://localhost:3000/songs?q=beatles
  [assets]: https://github.com/thehangarcr/recruitment/tree/master/assets
  [db/song.json]: https://github.com/thehangarcr/recruitment/tree/master/db/song.json
  [json-server]: https://www.npmjs.com/package/json-server
  [hangarcareers@thehangar.cr]: mailto:hangarcareers@thehangar.cr



Recruitment Tests ( Front End || Mobile )
==================

The test consists in building an application that searches for songs. You will be provided with the location of the service from which you will obtain the songs information as well as the creative file.

#### App. Requirements `(*)` `Optionals`
1. Create a layout based on the PSD and the fonts found under the [assets] folder.
2. It must be Responsive ( desktop, table, mobile 480). `(*)` 
3. Use the least amount of images possible. `(*)` 
4. Internationalization. `(*)` 
5. Clouds animation. `(*)` 

#### App. Funtionality `(*)` `Optionals`

* You will be provided with a URL from which you can obtain the songs information. You will have to use native Javascript or any other existing Javascript framework. `(*)` 

    URL: [http://thi-clientside-test.herokuapp.com/]

    Ejemplo:

        [
          {
              "Url": "http://tinysong.com/vb2H",
              "SongID": 25479197,
              "SongName": "Johnny B. Goode",
              "ArtistID": 45,
              "ArtistName": "Chuck Berry",
              "AlbumID": 235469,
              "AlbumName": "Roll Over Beethoven"
          },
          {
              "Url": "http://tinysong.com/7Wm7",
              "SongID": 8815585,
              "SongName": "Moonlight Sonata",
              "ArtistID": 1833,
              "ArtistName": "Beethoven",
              "AlbumID": 5619520,
              "AlbumName": "Beethoven Piano Sonatas"
          }
        ]    

* When the user clicks on the magnifying glass icon or presses Enter while on the textbox, the app will make a request to the URL provided which will return a JSON and then you will dynamically load the grid with that data. `(*)` 

* The [Today] and [Friday] buttons inside of each grid element must work as radiobuttons (meaning, when one is active the other is not). `(*)` 

* The purple button will open a new tab from which the song will play. `(*)` 


Recruitment Tests ( Mobile Native App ) 
==================

The test consists in building a native app that searches for songs. You will be provided with the location of the service from which you will obtain the songs information as well as the creative file.

There are no restrictions on the use of platforms (iOS, Android, BlackBerry, Windows).

#### App Requirements `(*)` `Optionals`
1. Create a layout based on the PSD and the fonts found under the [assets] folder.
2. Local storage. Save the songs in the device. `(*)` 
3. Rotation. `(*)` 
4. Internationalization. `(*)` 

#### App. Funtionality

* The URL from which you can obtain the songs information is: 

    URL: [http://thi-clientside-test.herokuapp.com/]

    Example:

        [
          {
              "Url": "http://tinysong.com/vb2H",
              "SongID": 25479197,
              "SongName": "Johnny B. Goode",
              "ArtistID": 45,
              "ArtistName": "Chuck Berry",
              "AlbumID": 235469,
              "AlbumName": "Roll Over Beethoven"
          },
          {
              "Url": "http://tinysong.com/7Wm7",
              "SongID": 8815585,
              "SongName": "Moonlight Sonata",
              "ArtistID": 1833,
              "ArtistName": "Beethoven",
              "AlbumID": 5619520,
              "AlbumName": "Beethoven Piano Sonatas"
          }
        ]    

* When the user clicks on the magnifying glass icon, the app will make a request to the URL provided which will return a JSON and then you will dynamically load the grid with that data.

* The [Today] and [Friday] buttons inside of each grid element must work as radiobuttons (meaning, when one is active the other is not). 

* The purple button will open a new web view from which the song will play.


-----
#### Notes:
There are no restrictions on the use of plugins or tools that you can use to develop the test.
Adobe Photoshop is the only software you will need to have installed on your machine in order to complete the test.

##### Once you are done, please let us know by sending an email to [thi-tech-test@thehangar.cr], with the URL where we can review it or just add the attachment.

  [http://thi-clientside-test.herokuapp.com/]: http://thi-clientside-test.herokuapp.com/
  
  [assets]: https://github.com/thehangarcr/recruitment/tree/master/assets
  
  [thi-tech-test@thehangar.cr]: mailto:thi-tech-test@thehangar.cr


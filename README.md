Recruitment Tests
=========

La prueba consiste en realizar una aplicacion web para buscar canciones. se le proporcionara el servicio de donde obtendra la informacion de las canciones, tambien se le dara el diseño que debera crear.

#### Requisitos del App. `(*)` `Opcionales`
1. Crear layout en base al psd proporcionado. 
2. Responsive ( desktop, table, mobile 480). `(*)` 
3. Minimo posible de images. `(*)` 
4. Botones Multilenguaje. `(*)` 
5. Animacion de nubes. `(*)` 

#### Funcionalidad del App. `(*)` `Opcionales`

* Se le proporcionara una url de donde podra obtener las canciones. Debera utilizar javascript o cualquier framework de javascript existente.

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

* Cuando el usuario de click en la lupa o presione enter estando en la caja de texto, debera hacer un request al url proporcionaro lo cual le devolvera un json y usted debera popular dinamicante el grid con esta informacion. 

* Los botones de [today] y [friday] dentro de cada item del grid deberan funcionar como radiobutons (cuando uno de los botones es activado el otro es desactivado).

* El boton morado de play abrira un nuevo tab donde se puede escuchar la cancion. 


Una ves que haya terminado la prueba puede: 
  - subirla a alguna nube (github, bitbucket, heroku, openshift, amazon)
  - subirla a su propio dominio si posee uno.
  - enviarnos la prueba en un zip. 


#### Notas:
No hay restricciones de plugins o herramientas web que pueda utilizar para completar la prueba.
Adobe photoshop es el unico software que tendria que tener instalado en su propia maquina para realizar la pureba.

  [http://thi-clientside-test.herokuapp.com/]: http://thi-clientside-test.herokuapp.com/
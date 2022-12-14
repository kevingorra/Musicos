import { Integrantes } from './../interfaces/integrantes';
import { Component } from '@angular/core';


@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent {

  integrantes:Integrantes[]=[

    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/musicos-bcb8d.appspot.com/o/Cappadonna.jpg?alt=media&token=0298fdd6-d403-4e3b-a518-f3995ba921ff",
      "nombre":"Cappadonna",
      "biografia":"Darryl Hill , más conocido por su nombre artístico Cappadonna, es un rapero estadounidense, miembro del grupo de rap de Nueva York Theodore Unit así como miembro también de Wu-Tang Clan",
      "nacimiento":"(nacido el 18 de septiembre de 1969)",
    },
    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/musicos-bcb8d.appspot.com/o/DjSymphony.jpg?alt=media&token=b5b2e997-01d6-4805-94a7-e9cb6762472c",
      "nombre":"DjSymphony",
      "biografia":"Symphony Taylor es un productor estadounidense de hip hop, personalidad de radio y DJ oficial de GZA del Clan Wu-Tang. Symphony ha trabajado con artistas como Digital Underground",
      "nacimiento":"(nacido el 01 de agosto de 1980)"
    },
    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/musicos-bcb8d.appspot.com/o/GZA.jpg?alt=media&token=91c6ed73-ad67-49b8-93e8-9e3a95434b60",
      "nombre":"GZA",
      "biografia":"Nacido en Brooklyn, GZA pasó su niñez viviendo con varios parientes en diferentes distritos de Nueva York. Durante este tiempo comenzó a visitar el Soundview en el Bronx donde se fascinó por el hip-hop",
      "nacimiento":"(nacido el 22 de agosto de 1966)"
    },
    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/musicos-bcb8d.appspot.com/o/Ghostface.jpg?alt=media&token=4d8a6155-d514-4b7a-963b-60a333fcfd00",
      "nombre":"Ghostface",
      "biografia":"Dennis Coles (Nacio en Staten Island, New York,) más conocido como Ghostface Killah es un rapero estadounidense, proveniente de Nueva York. Empezó a escribir canciones de rap en 1990. En 1993 debutó con el grupo Wu-Tang Clan y en 1996 debuta como rapero solista",
      "nacimiento":"(nacido el 09 de Mayo de 1970)"
    },
    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/musicos-bcb8d.appspot.com/o/Inspectah.jpg?alt=media&token=5fb1884f-f6cc-4275-a6fd-9333b315b3d5",
      "nombre":"Inspectah",
      "biografia":"",
      "nacimiento":"",
    },
    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/musicos-bcb8d.appspot.com/o/MastaKilla.jpg?alt=media&token=92f56924-68f9-4c13-bb12-d4ff4fc8cd55",
      "nombre":"MastaKilla",
      "biografia":"",
      "nacimiento":"",
    },
    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/musicos-bcb8d.appspot.com/o/Mathematics.jpg?alt=media&token=c4c5a51f-d53f-4bc5-b292-b13a3db8060c",
      "nombre":"Mathematics",
      "biografia":"",
      "nacimiento":"",
    },
    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/musicos-bcb8d.appspot.com/o/MethodMAn.jpg?alt=media&token=3324ec97-758b-4596-a1aa-df573f4e39b2",
      "nombre":"MethodMAn",
      "biografia":"",
      "nacimiento":"",

    },
    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/musicos-bcb8d.appspot.com/o/Ol'DirtyBastard.jpg?alt=media&token=529f9c6c-43d3-4358-9522-0efacd9224ca",
      "nombre":"DirtyBastard",
      "biografia":"",
      "nacimiento":"",

    },
    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/musicos-bcb8d.appspot.com/o/RZA.jpg?alt=media&token=4390955a-53c2-4d09-810c-ad5ff202bef4",
      "nombre":"RZA",
      "nacimiento":"",
      "biografia":"",
    },
    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/musicos-bcb8d.appspot.com/o/Raekwon.jpg?alt=media&token=ea72e547-8198-4d77-8bea-e97adaeaebef",
      "nombre":"Raekwon",
      "biografia":"",
      "nacimiento":"",

    },
    {
      "foto":"https://firebasestorage.googleapis.com/v0/b/musicos-bcb8d.appspot.com/o/U-GOD.jpg?alt=media&token=f452c596-210c-4201-ae07-0174957fb363",
      "nombre":"U-GOD",
      "biografia":"",
      "nacimiento":"",
    },


  ]



  constructor() { }



}

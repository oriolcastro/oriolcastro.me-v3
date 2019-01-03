---
templateKey: blog-post
title: 'Projecte #1 Desembre - Repte6by6 [RESULTAT]'
date: 2019-01-02T15:34:58.663Z
description: >-
  Després de setmanes de feina el projecte de desembre arriba al seu final.
  Quines dificultats m'he trobat al llarg del seu desenvolupament? Que he pogut
  aprendre resolent els problemes? I sobretot, quin és el resultat final?
tags:
  - 6by6
  - Projectes
  - Reactjs
  - JAMstack
  - GraphQL
  - Front end
---
> Avís: aquest serà un article bastant tècnic en alguns dels seus punts.

Com vaig detallar en l'[anterior article](/blog/2018-12-12-projecte-1-desembre-repte6by6/) aquest projecte compta amb 3 seccions per la part del client, més el _back-end_ que s'ocupa de gestionar l'emmagatzematge de les imatges i la base de dades.

Per cadascuna de les 3 seccions exposaré quines són les dificultats que m'he trobat en el seu desenvolupament, quines solucions he aplicat i us mostraré el resultat final.

### Vista d'Usuari

#### Dificultats

Una de les primeres dificultats del projecte va aparèixer ben al principi a causa de l'aposta per fer servir la llibreria de components [Material-UI](https://material-ui.com/). Tot i l'experiència prèvia amb altres _frameworks_ la complexitat de conjugar la generació a _buildtime_ que utilitza Gatsby i l'ús de _CSS-in-JS _de la llibreria van suposar un petit entrebanc. Per sort la comunitat a Internet és gran i amb l'ajuda d'un [exemple](https://github.com/mui-org/material-ui/tree/master/examples/gatsby) vaig poder mantenir l'ús d'aquesta llibreria. Primer aprenentatge que podré utilitza en futurs projectes que requereixin un disseny _material_.

Les principals dificultats es van centrar al voltant de l'ús de la càmera del mòbil, la manipulació de les imatges capturades i com les dades eren publicades al servidor.

**Camera**

En els últims anys les capacitats dels navegadors web per accedir a funcionalitats fins abans reservades a les aplicacions natives ha augmentat molt. L'ús de la càmera en dispositius mòbils és un exemple clar. Així doncs si volia que els usuaris poguessin capturar les fotos sense haver de fer primer la foto amb la seva aplicació de càmera calia trobar un component de React que implementès l'API [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) i que incorpores la captura d'imatges del _stream_.

**GrapQL Mutations**

Com explicava en l'anterior article volia apostar per un_ back end _basat en GraphQL que gestionés en quasi temps-real les publicacions dels usuaris. Necessitava entendre com funcionen les mutations (equivalen a les operacions POST d'una REST API), ja que fins ara només havia utilitzat el llenguatge GraphQL per a fer _queries_ en _buildtime _amb Gatsby. També em calia trobar un client per parlar amb el servidor compatible amb React i Gatsby.

**Manipulació imatges**

En el moment de testejar amb usuaris la primera versió de l'aplicació van aparèixer problemes d'usabilitat i experiència en com es gestionaven les imatges. Per exemple s'oferia l'opció de triar entre la càmera frontal o posterior del mòbil però en alguns dispositius això fallava, ja que no es comprovava que aquest suportes l'API _getUserMedia_ o quines càmeres estaven accessibles des del navegador. Un altre problema apareixia en el moment en què l'usuari feia una foto en format horitzontal, ja que l'orientació no era autocorregida com estem acostumats que facin les apps natives i per tant la foto es mostrava girada en tota l'experiència.

#### Solucions

Per la implementació de les funcionalitats de càmera em vaig decantar per fer servir el component [React-html5-camera-photo](https://www.npmjs.com/package/react-html5-camera-photo), ja que em permetia indicar la resolució màxima de les imatges capturades, alternar entre les dues càmeres dels mòbils i em retornava una imatge en format Base64 que després podia manipular abans de pujar al servidor.

Les operacions entre el client i el servidor són gestionades per [Apollo Client,](https://www.apollographql.com/docs/react/) un potent client GraphQL que compta amb una versió per a React que ofereix dos components que implementen les operacions de _mutation_ i _query_. L'excel·lent [documentació](https://www.apollographql.com/docs/react/api/react-apollo.html) del seu web em va permetre implementar les funcionalitats de forma molt fàcil, menys alguna dificultat amb l'execució asíncrona de les funcions de JavaScript vinculades (bàsicament la pujada de la imatge al servei de Cloudinary). La configuració del client també va ser molt senzilla seguint [l'exemple](https://github.com/jlengstorf/gatsby-with-apollo) d'un dels desenvolupadors principals de Gatsby.

Per acabar, els problemes apareguts durant la fase de testeig van obligar a introduir dues millores que inicialment no havia plantejat. Per una banda la detecció de les càmeres disponibles a través del navegador i l'altre oferir l'opció de rotar les imatges. Després de consultar diferents problemes similars a [stackoverflow](https://stackoverflow.com/) i blogs vaig implementar-ho com es mostra a continuació.

![Funció per comprovar la implementació de getUserMedia i les càmeres disponibles.](/img/getusermedia.png)

![Funció per implementar la rotació de les imatges capturades amb el mòbil en horitzontal.](/img/rotateimage.png)

#### Resultat

Així és com ha quedat l'apartat destinat als usuaris de l'aplicació adaptat al primer esdeveniment on s'utilitzarà, [la Nit de Reines](https://www.facebook.com/events/739878189741702/) de La Unió Vilanovina.

![El que el client veu només accedir a l'aplicació.](/img/6by6december_client_empty.png)

![El que el client veu un cop capturada una imatge i escrit el missatge.](/img/6by6december_client_full.png)

### Vista d'Administrador

\[WIP]

##### Dificultats

#### Solucions

#### Resultats

### Vista de Projecció

\[WIP]

#### Dificultats

#### Solucions

#### Resultats

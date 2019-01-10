---
templateKey: blog-post
title: 'Desenvolupament del projecte #1 Desembre - Repte6by6'
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

## Vista d'Usuari

### Dificultats

Una de les primeres dificultats del projecte va aparèixer ben al principi a causa de l'aposta per fer servir la llibreria de components [Material-UI](https://material-ui.com/). Tot i l'experiència prèvia amb altres _frameworks_ la complexitat de conjugar la generació a _buildtime_ que utilitza Gatsby i l'ús de _CSS-in-JS_ de la llibreria van suposar un petit entrebanc. Per sort la comunitat a Internet és gran i amb l'ajuda d'un [exemple](https://github.com/mui-org/material-ui/tree/master/examples/gatsby) vaig poder mantenir l'ús d'aquesta llibreria. Primer aprenentatge que podré utilitza en futurs projectes que requereixin un disseny _material_.

Les principals dificultats es van centrar al voltant de l'ús de la càmera del mòbil, la manipulació de les imatges capturades i com les dades eren publicades al servidor.

**Camera**

En els últims anys les capacitats dels navegadors web per accedir a funcionalitats fins abans reservades a les aplicacions natives ha augmentat molt. L'ús de la càmera en dispositius mòbils és un exemple clar. Així doncs si volia que els usuaris poguessin capturar les fotos sense haver de fer primer la foto amb la seva aplicació de càmera calia trobar un component de React que implementès l'API [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) i que incorpores la captura d'imatges del _stream_.

**GrapQL Mutations**

Com explicava en l'anterior article volia apostar per un _back end_ basat en GraphQL que gestionés en quasi temps-real les publicacions dels usuaris. Necessitava entendre com funcionen les mutations (equivalen a les operacions POST d'una REST API), ja que fins ara només havia utilitzat el llenguatge GraphQL per a fer _queries_ en _buildtime_ amb Gatsby. També em calia trobar un client per parlar amb el servidor compatible amb React i Gatsby.

**Manipulació imatges**

En el moment de testejar amb usuaris la primera versió de l'aplicació van aparèixer problemes d'usabilitat i experiència en com es gestionaven les imatges. Per exemple s'oferia l'opció de triar entre la càmera frontal o posterior del mòbil però en alguns dispositius això fallava, ja que no es comprovava que aquest suportes l'API _getUserMedia_ o quines càmeres estaven accessibles des del navegador. Un altre problema apareixia en el moment en què l'usuari feia una foto en format horitzontal, ja que l'orientació no era autocorregida com estem acostumats que facin les apps natives i per tant la foto es mostrava girada en tota l'experiència.

### Solucions

Per la implementació de les funcionalitats de càmera em vaig decantar per fer servir el component [React-html5-camera-photo](https://www.npmjs.com/package/react-html5-camera-photo), ja que em permetia indicar la resolució màxima de les imatges capturades, alternar entre les dues càmeres dels mòbils i em retornava una imatge en format Base64 que després podia manipular abans de pujar al servidor.

Les operacions entre el client i el servidor són gestionades per [Apollo Client,](https://www.apollographql.com/docs/react/) un potent client GraphQL que compta amb una versió per a React que ofereix dos components que implementen les operacions de _mutation_ i _query_. L'excel·lent [documentació](https://www.apollographql.com/docs/react/api/react-apollo.html) del seu web em va permetre implementar les funcionalitats de forma molt fàcil, menys alguna dificultat amb l'execució asíncrona de les funcions de JavaScript vinculades (bàsicament la pujada de la imatge al servei de Cloudinary). La configuració del client també va ser molt senzilla seguint [l'exemple](https://github.com/jlengstorf/gatsby-with-apollo) d'un dels desenvolupadors principals de Gatsby.

Per acabar, els problemes apareguts durant la fase de testeig van obligar a introduir dues millores que inicialment no havia plantejat. Per una banda la detecció de les càmeres disponibles a través del navegador i l'altre oferir l'opció de rotar les imatges. Després de consultar diferents problemes similars a [stackoverflow](https://stackoverflow.com/) i blogs vaig implementar-ho com es mostra a continuació.

![Codi per comprovar el funcionament de la càmera](/img/getusermedia.png "Codi per comprovar el funcionament de la càmera")

![Codi per a rotar les imatges](/img/rotateimage.png "Codi per a rotar les imatges")

### Resultat

Així és com ha quedat l'apartat destinat als usuaris de l'aplicació adaptat al primer esdeveniment on s'utilitzarà, [la Nit de Reines](https://www.facebook.com/events/739878189741702/) de La Unió Vilanovina.

![El que el client veu només accedir a l'aplicació.](/img/6by6december_client_empty.png "El que el client veu només accedir a l'aplicació.")

![El que el client veu un cop capturada una imatge i escrit el missatge.](/img/6by6december_client_full.png "El que el client veu un cop capturada una imatge i escrit el missatge.")

## Vista d'Administrador

### Dificultats

La principal dificultat en aquesta secció de l'aplicació ha estat com limitar l'accés només a usuaris autoritzats. Existeixen multitud d'eines per a gestionar la identitat però fins ara no havia hagut d'implementar-ho en cap projecte i per tant era un món desconegut. 

Una segona dificultat molt vinculada a la primera és el fet que en tots els projectes en què havia utilitzat Gatsby les pàgines eren sempre generades al servidor i oferides a l'usuari final com a fitxers estàtics. En aquesta ocasió però l'apartat d'administració s'havia de generar directament en el navegador client per a permetre la gestió de l'accés.

### Solucions

L'ecosistema que s'està desenvolupant sota el paraigua de _JAMStack_ i específicament entorn d'eines com Gatsby van facilitar molt la resolució de les dificultats. Per a la creació de les pàgines directament a client només calia seguir la [documentació](https://www.gatsbyjs.org/docs/authentication-tutorial/#creating-client-only-routes) del projecte en què s'explica com fer-ho. 

Pel que fa a la gestió de la identitat em vaig decantar per fer ús de [Netlify Identity.](https://www.netlify.com/docs/identity/) Aquest servei està molt ben integrat amb el _core_ de CI/CD i la CDN que proporciona Netlify i ofereix un pla gratuït per als primers 1000 usuaris, molt per sobre de les necessitats del projecte. 

El codi d'aquest [exemple](https://github.com/sw-yx/jamstack-hackathon-starter) és la base utilitzada així com [aquest article](https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/) al blog oficial.

### Resultats

Així és com ha quedat l'apartat d'administració.

![El que veu l'administrador per cada publicació](/img/6by6december_admin.png "El que veu l'administrador per cada publicació")

## Vista de Projecció

### Dificultats

La vista que serveix per a projectar les imatges que els usuaris publiquen va ser l'última que vaig desenvolupar, ja que a priori semblava la més senzilla. Tot i la seva aparent simplicitat vaig trobar dos entrebancs que van incrementar les hores dedicades. 

El primer va lligat al fet que per disseny les publicacions hi haurien d'aparèixer en quasitemps real a la pantalla per oferir una experiència satisfactòria als usuaris. GraphQL i la implementació que en fa Hasura permeten crear el que s'anomena _subscriptions_ però la seva implementació no era senzilla.

La segona dificultat tenia a veure en el mecanisme per mostrar de forma individual les publicacions i fer que les transicions d'una a l'altre fossin atractives. La idea segons el disseny era que funcionés com un passi de diapositives on el text del missatge queda sobreposat a la foto descarregada de Cloudinary. Buscant entre els diferents paquets de _slideshows_, _sliders_ i _carrousels_ creats amb React cap complia les especificacions ni oferia un resultat satisfactori.

### Solucions

La implementació de les subscriptions tot i que senzilla aparentment era bastant complexa. Per sort el mateix component de [Query de react-apollo](https://www.apollographql.com/docs/react/essentials/queries.html#refetching) ofereix una opció per tal de forçar que Apollo Client, l'encarregat de gestionar les crides al servidor, repetís la _query_ cada X milisegons. D'aquesta forma el temps màxim que trigaria en aparèixer una publicació a la pantalla seria el temps de refresc que especifiqués.

Si no trobava cap _slideshow_ existent que pogués fer servir hauria de programar-ne un a mida. La lògica per gestionar el bucle sobre les diferents publicacions era bastant simple fent servir _setInterval_ i la gestió del _state_ de React. Un altre assumpte era com animar les transicions. Per sort existeixen llibreries que simplifiquen les animacions per a React i una de les més fàcils d'utilitzar és [Pose](https://popmotion.io/pose/).

![Codi del slideshow](/img/slideshow.png "Codi del slideshow")

![Animació de la slide amb Pose](/img/animatedslide.png "Animació de la slide amb Pose")

L'últim entrebanc va ser com accedir a les imatges emmagatzemades a Cloudinary i optimitzar-ne l'entrega tenint en compte que es projecten en grans dimensions. Per sort Cloudinary ha creat una sèrie de [components](https://github.com/cloudinary/cloudinary-react) en React que simplifiquen [aquest procés.](https://cloudinary.com/documentation/react_image_manipulation)

### Resultats

![El que es projecta en les pantalles](/img/6by6december_presenter.png "El que es projecta en les pantalles")

## Feedback d'ús real

En aquest fil de Twitter podeu llegir algunes dades i conclusions extretes d'analitzar l'ús que va tenir aquest projecte durant la festa de La Nit de Reines el 5 de gener de 2018.

https://twitter.com/Oriolcastro_/status/1083387197863194632

---
templateKey: blog-post
title: 'Disseny del projecte #1 Desembre - Repte6by6'
date: 2018-12-13T08:30:13.172Z
description: >-
  Resum de les dues primeres setmanes de feina en el projecte d'aquest mes del
  Repte 6by6. Definir les funcionalitats que tindrà l'aplicació, escollir la
  tecnologia a fer servir i la seva arquitectura, i finalment dissenyar les
  diferents parts que veuran els usuaris.
tags:
  - 6by6
  - Projectes
  - Reactjs
  - JAMstack
  - GraphQL
  - Front end
---
> Avís: aquest serà un article bastant tècnic en alguns dels seus punts.

Durant el mes de novembre vaig iniciar el repte 6by6 on em proposava dissenyar, desenvolupar i publicar un projecte web cada mes durant els següents 6 mesos. ([+info](/blog/2018-11-05-el-repte-6by6/)). Per tal de decidir quin projecte portava a la pràctica, compartiria a les xarxes socials i amb el meu entorn les diferents idees. Això em serviria per captar el seu possible impacte, rebre propostes de millora, o comentaris que m'ajudessin a donar-li forma.

Per al projecte del mes de desembre tenia aquestes dues idees:

#### \#Idea 1 - VilaNyap

> Espai web on els ciutadans a través de geolocalització i de forma anònima poden indicar on hi ha un nyap (inicialment una rajola que balla). La web mostra un mapa de la ciutat amb els punts introduïts per la gent.

#### \#Idea 2 - Jumbocall

> Aplicació web que permet als visitants d'un esdeveniment (fira, concert, conferència, etc) pujar imatges des del seu mòbil afegint un comentari i sense necessitat de registrar-se. Aquestes imatges es recopilen i es mostren en una pàgina que es pot projectar o mostrar en pantalles. En finalitzar l'esdeveniment totes les imatges són destruïdes.

Totes dues van tenir molt bona acollida i vaig rebre forces propostes. Amb tots els comentaris rebuts i analitzant els requeriments i coneixements tècnics necessaris per a fer-les realitat, finalment he decidit que el projecte del mes de desembre serà...

## JUMBOCALL

He decidit apostar per aquesta idea principalment perquè crec que de les dues és la que està més al meu abast amb els coneixements que ara mateix tinc, i també perquè tindrà, si tot surt bé, aplicació real a principis de gener.

### Funcionalitats

A partir de la idea original i recollint algunes de les propostes rebudes, la primera versió tindrà les seguents funcionalitats:

* L'usuari pot fer una foto amb el seu mòbil directament des de l'aplicació web, afegir un missatge i publicar-la.
* L'aplicació no requereix donar-se d'alta en cap servei. 
* Tot es realitza a través d'una aplicació web progressiva (PWA), de forma que els organitzadors de l'esdeveniment només han de compartir un enllaç entre els participants. 
* Les publicacions es mostren de forma pública i anònima en forma de passi de diapositives facilitant-ne la projecció en gran format. 
* Els organitzadors de l'esdeveniment tenen accés a un panell d'administració.
* En aquest panell poden eliminar publicacions que tinguin un contingut no adequat. 
* També poden bloquejar totes les publicacions d'un usuari fent que qualsevol imatge pujada des d'aquell dispositiu no aparegui en pantalla. 
* Un cop finalitza l'esdeveniment totes les publicacions són destruïdes i l'enllaç deixa de funcionar.

### Arquitectura

La primera cosa a fer un cop clares les funcionalitats inicials és definir quina serà l'arquitectura i les eines que em cal utilitzar.

Una part important dels projectes que he desenvolupat els últims mesos han estat creats amb [Gatsbyjs](https://www.gatsbyjs.com/). Gatsby ens proveeix d'un _framework_ que permet crear de forma ràpida experiències web i aplicacions fent ús de les tecnologies més modernes. La part amb la que els usuaris interactuen, el _front-end_, d'aquestes experiències està escrita amb [React](https://reactjs.org/) i fa servir [GraphQL](https://graphql.org/) per a recopilar el contingut des de diferents serveis ([+info](https://www.gatsbyjs.com/why-gatsby/)). Gatsby compila els projectes en una sèrie d'arxius estàtics (HTML, CSS i JS) després d'aplicar multiples optimitzacions sobre el codi. El resultat és una web estàtica que es pot publicar a qualsevol proveïdor d'allotjament a un baix cost, fins i tot de forma gratuita.

Aquest projecte estarà basat doncs en el _stack_ i arquitectura web conegut com a [JAMStack](https://jamstack.org/).

Les tecnologies i eines utilitzades en el _front-end_:

* [Gatsby](https://github.com/gatsbyjs/gatsby) i els seus plugins ens garanteixen un entorn de desenvolupament òptim.
* La llibreria [React](https://github.com/facebook/react/) gestionarà la part visual de l'aplicació.
* El client d'[Apollo](https://github.com/apollographql/apollo-client) i els seus components faran totes les crides al servidor GraphQL.
* Amb la llibreria de components [Material-ui](https://github.com/mui-org/material-ui) aconseguirem un aspecte modern.

El _back-end_ de l'aplicació continuarà amb el paradigma JAMStack i farà servir la filosofia [_serverless_](https://en.wikipedia.org/wiki/Serverless_computing) per tal d'eliminar qualsevol tasca de manteniment o provisió de servidors. D'aquesta forma elimino la necessitat d'aprendre tecnologies _back-end_ complexes. Tot i focalitzar la meva carrera en esdevenir desenvolupador _front-end_ dominar el paradigma _serverless_ em permet crear aplicacions que van més enllà del client amb certa facilitat.

Les tecnologies i eines utilitzades en el _back-end_:

* El servidor GraphQL amb qui parlarà el client estarà implementat amb [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine)
* La lleugeresa d'Hasura ens permetrà allotjar-lo en els containers [Heroku Dynos](https://www.heroku.com/) de forma gratuïta.
* Les publicacions es guardaran a la base de dades [Heroku Postgres](https://www.heroku.com/) 
* Per a les imatges farem servir els serveis d'allotjament i manipulació de [Cloudinary](https://cloudinary.com/)
* Tant la pàgina del client, la de presentació així com el panell d'administrador estaran allotjats al CDN de [Netlify](https://www.netlify.com/), que també gestionarà l'accés per identitat i el CD des del repositori de Github.

### Disseny

Les funcionalitats d'aquesta primera versió són molt limitades a voluntat per tal de minimitzar la dimensió del projecte. És per això que en l'àmbit del disseny el projecte serà també simple i senzill. Com mencionava en el punt anterior per l'apartat visual faré servir la llibreria de components de Material-UI que implementen les especificacions de [Material Design de Google](https://material.io/). Això ens donarà una base sòlida, sobre la qual poder construir les diferents vistes de l'eina de forma ràpida. 

A continuació podeu veure alguns dels mockups que vaig preparar abans de començar amb el desenvolupament.

**Vista d'usuari**

![Vista d'usuari](/img/mvimg_20181213_164512.jpg)

**Vista de l'administrador**

![Vista de l'administrador](/img/mvimg_20181213_164628.jpg)

**Vista de projecció**

![Vista de projecció](/img/mvimg_20181213_164949.jpg)

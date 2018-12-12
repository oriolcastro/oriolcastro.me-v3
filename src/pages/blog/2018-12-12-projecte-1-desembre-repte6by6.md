---
templateKey: blog-post
title: 'Projecte #1 Desembre - Repte6by6'
date: 2018-12-13T08:30:13.172Z
description: >-
  Resum de les dues primeres setmanes de feina en el projecte d'aquest mes del
  Repte 6by6. Definir les funcionalitats que tindrà l'aplicació, escollir la
  tecnologia a fer servir i la seva arquitectura, i finalment dissenyar les
  diferents parts que veuran els usuaris.
tags:
  - 6by6
  - projectes
  - jamstack
---
> Aquest serà un article llarg i en alguns dels seus punts bastant tècnic.

Durant el mes de novembre vaig iniciar el repte 6by6 on em proposava dissenyar, desenvolupar i publicar un projecte web cada mes durant els següents 6 mesos. ([+info](https://oriolcastro.me/blog/2018-11-05-el-repte-6by6/)). Per tal de decidir quin projecte portava a la pràctica, compartiria a les xarxes socials i amb el meu entorn les diferents idees. Això em serviria per captar el seu possible impacte, rebre propostes de millora, o comentaris que m'ajudessin a donar-li forma.

Per al projecte del mes de desembre tenia aquestes dues idees:

* **\#Idea 1 - VilaNyap: **Espai web on els ciutadans a través de geolocalització i de forma anònima poden indicar on hi ha un nyap (inicialment una rajola que balla). La web mostra un mapa de la ciutat amb els punts introduïts per la gent.
* **\#Idea 2 - Jumbocall: **Aplicació web que permet als visitants d'un esdeveniment (fira, concert, conferència, etc) pujar imatges des del seu mòbil afegint un comentari i sense necessitat de registrar-se. Aquestes imatges es recopilen i es mostren en una pàgina que es pot projectar o mostrar en pantalles. En finalitzar l'esdeveniment totes les imatges són destruïdes.

Totes dues van tenir molt bona acollida i vaig rebre forces propostes. Amb tots els comentaris rebuts i analitzant els requeriments i coneixements tècnics necessaris per a fer-les realitat, finalment he decidit que el projecte del mes de desembre serà...

## JUMBOCALL

He decidit apostar per aquesta idea principalment perquè crec que és la que està més al meu abast amb els coneixements que ara mateix tinc, i també perquè tindrà, si tot surt bé, un ús real a principis de gener.

### Funcionalitats

A partir de la idea original i recollint algunes de les propostes rebudes les funcionalitats de la primera versió seran les seguents.

* L'usuari pot fer una foto amb el seu mòbil directament des de l'aplicació, afegir un missatge i publicar-la. 
* L'aplicació no requereix donar-se d'alta en cap servei. 
* Tot es realitza a través d'un enllaç web que els organitzadors poden difondre entre els participants a l'esdeveniment. 
* Les publicacions es mostren de forma pública i anònima en forma de passi de diapositives facilitant-ne la projecció en gran format. 
* Els organitzadors de l'esdeveniment tenen accés a un panell d'administració.
* Poden eliminar publicacions que tinguin un contingut no adequat. 
* També poden bloquejar totes les futures publicacions d'aquesta persona. 
* Un cop finalitza l'esdeveniment totes les publicacions són destruïdes i l'enllaç deixa de funcionar.

### Arquitectura

La primera cosa fer un cop clares les funcionalitats inicials és definir quina serà l'arquitectura i les eines a fer servir.

Una part important dels projectes dels últims mesos han estat creats amb [Gatsbyjs](https://www.gatsbyjs.com/). Gatsby ens proveeix d'un _framework_ que permet crear de forma ràpida experiències web i aplicacions fent ús de les tecnologies web més modernes. La part visual, el _front-end_, d'aquestes experiències està escrita amb [React](https://reactjs.org/) i fa servir [GraphQL](https://graphql.org/) per a recopilar el contingut des de diferents serveis i crear així pàgines web estàtiques que poden publicar-se a qualsevol proveïdor. Aquest _stack_ es coneix com a [JAMStack](https://jamstack.org/).

Llista de tecnologies i eines utilitzades en el _front-end_:

* [Gatsby](https://github.com/gatsbyjs/gatsby)
* [React](https://github.com/facebook/react/)
* [Apollo](https://github.com/apollographql/apollo-client) 
* [Material-ui](https://github.com/mui-org/material-ui)

El _back-end_ de l'aplicació continua amb el paradigma del JAMStack i fa servir la filosofia [_serverless_](https://en.wikipedia.org/wiki/Serverless_computing) per tal d'eliminar qualsevol tasca de manteniment o provisió de servidor. D'aquesta forma tot i focalitzar la carrera en esdevenir un desenvolupador _front-end_ puc crear aplicacions que van més enllà del client.

Llista de tecnologies i eines utilitzades en el _back-end_:

* [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine)
* [Heroku Dynos i Heroku Postgres](https://www.heroku.com/) 
* [Cloudinary](https://cloudinary.com/)
* [Netlify](https://www.netlify.com/)

### Disseny

El disseny serà...

---
templateKey: blog-post
title: 'Disseny del projecte #2 Gener - Repte6by6'
date: 2019-01-12T12:05:08.431Z
description: Bla bla bla
tags:
  - 6by6
  - JAMStack
  - Projectes
  - Carnaval
---
> Avís: aquest serà un article bastant tècnic en alguns dels seus punts.

Segon més del repte i per tant segon projecte a iniciar. En aquest cas durant el desembre només vaig compartir una de les idees que tenia. El motiu és que de seguida vaig veure clar quin havia de ser el projecte que tirés endavant, així que tenia poc sentit "gastar" idees que sabia tenien poques possibilitats.

La idea que vaig compartir va ser aquesta:

**\#Idea 3 - La Brava**

speach

Com deia tot i que aquest em sembla un concepte interessant el que duré a terme serà el següent...

## PASTANAGAPP - La Pastanaga del Rei

Vaig decidir apostar per aquest projecte principalment per l'impacte que pot tenir, l'any passat varen participar unes XXXX persones del joc de la Pastanaga del Rei. I també perquè les funcionalitats que requereix em feien sortir de la meva zona de confort i testejar noves eines que fins ara no havia utilitzat.

NOTA: per aquells que no sabeu de què parlo.

> La Pastanaga del Rei és una versió del clàssic joc de l'assassí (de la pastanaga) que es juga a Vilanova durant la setmana de Carnaval. Podeu consultar més informació aquí (link Facebook i notícia any passat).



### Funcionalitats

L'objectiu per aquesta primera versió és que pugui tenir totes aquestes funcionalitats:

* Tots els jugadors tindran un usuari amb el qual podran accedir a l'aplicació.
* Els usuaris podran consultar la informació de la seva partida com per exemple les dades de la següent víctima (les mateixes que tindran al clauer que es reparteix) o la llista completa de víctimes aconseguides.
* La funcionalitat principal ajudarà a resoldre una de les problemàtiques detectades els últims anys quan la víctima no duia a sobre el clauer que havia d'entregar a la persona que l'havia eliminat. A través de l'aplicació víctima i botxí podran validar que l'eliminació és correcte i traspassar-se així la informació.
* En un apartat obert es mostrarà la informació general del joc com per exemple el temps restant, nombre total de víctimes, víctimes diàries, etc.
* Estarà dissenyada amb una òptica mobile first i desenvolupada per a ser una PWA que permeti instal·lar-la en dispositius compatibles i actuar com una app nativa més.

**BONUS**

* L'app permetrà rebre notificacions al mòbil de diferents esdeveniments importants per al joc: inici de la partida, el teu assassí vol validar l'eliminació, queden X hores per a finalitzar el joc, etc.

### Tech Stack

Aquest projecte recull les bases assentades al del mes passat i les amplia fins a convertir-se de facto en un projecte full stack, ja que la lògica al back end serà molt més complexa i s'hi implementaran moltes de les funcionalitats. Destacarà especialment aquelles tecnologies noves respecte al projecte de desembre.

Per a facilitar-ne el desenvolupament continuaré amb l'arquitectura JAMStack utilitzant eines com Gatsby per a la part del client i eines SASS i les seves APIs per a la lògica del servidor.

Les tecnologies i eines utilitzades en el _front-end_:

* [Gatsby](https://github.com/gatsbyjs/gatsby) i els seus plugins ens garanteixen un entorn de desenvolupament òptim.
* La llibreria [React](https://github.com/facebook/react/) gestionarà la part visual de l'aplicació.
* El client d'[Apollo](https://github.com/apollographql/apollo-client) i els seus components faran totes les crides al servidor GraphQL.
* Amb la llibreria de components [Material-ui](https://github.com/mui-org/material-ui) aconseguirem un aspecte modern.
* **NOU:** Faré servir el toolkit en javascript de Auth0 per interactuar amb el servei d'identitat.
* **NOU:** La llibreria de Firebase per al navegador ens permetrà implementar les notificacions.

El back end com comentava estarà format per una sèrie de serveis que proporcionaran les funcionalitats d'identitat i notificacions, així com diverses lambd functions que implementaran la lògica necessària continuant amb la filosofia serverless.

Les tecnologies i eines utilitzades en el _back-end_:

* El servidor GraphQL amb qui parlarà el client estarà implementat amb [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine)
* La lleugeresa d'Hasura ens permetrà allotjar-lo en els containers [Heroku Dynos](https://www.heroku.com/) de forma gratuïta.
* Les publicacions es guardaran a la base de dades [Heroku Postgres](https://www.heroku.com/)
* Tota l'app estarà allotjada al CDN de [Netlify](https://www.netlify.com/) que també gestionarà el CD (Continous Deploy) des del repositori de Github.
* **NOU:** Tota la lògica de servidor estarà distribuïda en diferents lambda functions implementades a través del servei de Netlify.
* **NOU:** Faré ús dels event triggers de Hasura per executar les funcions a partir de canvis a la base de dades.
* **NOU:** El servei d'identitat estarà implementat fent ús de Auth0.
* **NOU:** Les notificacions faran servir el servei de Firebase Cloud Messaging.

### Disseny

Tot i que limitades les funcionalitats d'aquesta primera versió són força ambicioses de manera que el disseny de l'app haurà de conjugar forces elements. Igual que el mes passat continuaré fent ús de Material Design implementat a través de Material-UI per a facilitar la feina sobretot tenint en compte que el meu fort no és el disseny visual.

A continuació podeu veure alguns dels mockups que he preparat de les diferents parts de l'aplicació.

fotos

foto

foto

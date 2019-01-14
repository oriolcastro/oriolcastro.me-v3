---
templateKey: blog-post
title: 'Disseny del projecte #2 Gener - Repte6by6'
date: 2019-01-12T12:05:08.431Z
description: >-
  Resum de la primera setmana amb el nou projecte del Repte 6by6. Força més
  ambiciós i complex que l'anterior requereix una bona definició de
  funcionalitats i escollir la

  millor tecnologia i arquitectura a fer servir.
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

> _Tripadvisor_ temàtic d'una de les tapes més típiques i tòpiques dels bars d'arreu. Valora, comenta, puntua i descobreix els millors locals on gaudir d'unes bones braves.

Com deia tot i que aquest em sembla un concepte interessant el que duré a terme serà el següent...

## PASTANAGAPP - La Pastanaga del Rei

He decidit apostar per aquest projecte principalment per l'impacte que pot tenir, l'any passat varen participar unes 400 persones del joc de la Pastanaga del Rei. L'altre motiu és perquè les funcionalitats que requereix em fan sortir de la meva zona de confort, que sempre és una bona forma d'aprenentatge, i també perquè hauré de testejar noves eines i tecnologies que fins ara no he utilitzat.

> NOTA (per aquells que no sabeu de què parlo.)
>
> La Pastanaga del Rei és una versió del clàssic joc de l'assassí (de la pastanaga) que es juga a Vilanova durant la setmana de Carnaval. Podeu consultar més informació [aquí](https://www.facebook.com/La-Pastanaga-del-Rei-215137488677765/) i [aquí](http://lapastanagadelrei.blogspot.com/).

### 📝 Funcionalitats

L'objectiu per aquesta primera versió és que pugui tenir totes aquestes funcionalitats, amb dos bonus track inclosos:

* Tots els jugadors tindran un usuari amb el qual podran accedir a l'aplicació.
* Els usuaris podran consultar la informació relativa a la seva partida com per exemple les dades de la següent víctima (les mateixes que tindran al clauer que es reparteix) o la llista completa de víctimes aconseguides fins aquell moment.
* A través de l'aplicació víctima i botxí podran validar que l'eliminació és correcte i traspassar-se la informació sobre la següent víctima. Aquesta funcionalitat ajudarà a resoldre una de les problemàtiques principals dels últims anys que apareixia quan la víctima no duia a sobre el clauer que havia d'entregar a la persona que l'havia eliminat.
* En un apartat es mostrarà de forma oberta la informació general del joc com per exemple el temps restant, nombre total de víctimes, víctimes diàries, etc.
* L'aplicació ha d'estar dissenyada amb una òptica _mobile first_ i desenvolupada per a ser una PWA que permeti instal·lar-la en dispositius mòbils compatibles i actuar així com una app nativa més.

**BONUS TRACK**

* Si els terminis ho permeten, ha de permetre gestionar les inscripcions al joc i l'assignació inicial de les víctimes.
* L'aplicació permetrà rebre notificacions al mòbil de diferents esdeveniments importants per al joc: inici de la partida, el teu assassí vol validar l'eliminació, queden X hores per a finalitzar el joc, etc.

### 🧰 Arquitectura & TechStack

Aquest projecte recull les bases assentades pel projecte del mes passat i les amplia fins a convertir-se, de facto, en un projecte _full stack_.  La lògica del _back end_ serà molt més complexa i moltes de les funcionalitats estaran implementades en el servidor. Destacaré especialment aquelles tecnologies noves.

Per a facilitar-ne el desenvolupament continuaré amb l'arquitectura [JAMStack](https://jamstack.org/) utilitzant [Gatsby](https://www.gatsbyjs.com/) per a la part del client i eines SASS juntament amb les seves APIs per a la lògica del servidor.

Les tecnologies i eines utilitzades en el _front end_:

* [Gatsby](https://github.com/gatsbyjs/gatsby) i els seus plugins garanteixen un entorn de desenvolupament òptim.
* La llibreria [React](https://github.com/facebook/react/) gestionarà la part visual de l'aplicació.
* El client d'[Apollo](https://github.com/apollographql/apollo-client) i els seus components faran totes les crides al servidor GraphQL.
* Amb la llibreria de components [Material-ui](https://github.com/mui-org/material-ui) aconseguiré un aspecte modern.
* **NOU:** Faré servir el [toolkit](https://github.com/auth0/auth0.js) en javascript de [Auth0](https://auth0.com/) per interactuar amb el servei d'identitat.
* **NOU:** La [llibreria de Firebase](https://github.com/firebase/firebase-js-sdk)  per al navegador permetrà implementar el sistema de notificacions.

El _back end_ estarà format per dos serveis externs que proporcionaran les funcionalitats d'identitat i notificacions, així com diverses _lambda functions_ que implementaran la lògica necessària continuant amb la filosofia _serverless_.

Les tecnologies i eines utilitzades en el _back end_:

* El servidor GraphQL amb qui parlarà el client estarà implementat amb [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine)
* La lleugeresa d'Hasura ens permetrà allotjar-lo en els containers [Heroku Dynos](https://www.heroku.com/) de forma gratuïta.
* Tota la informació es guardarà a la base de dades [Heroku Postgres](https://www.heroku.com/)
* L'aplicació web estarà allotjada al CDN de [Netlify](https://www.netlify.com/) que també gestionarà el CD (_Continous Deploy_) des del repositori de Github.
* **NOU:** Tota la lògica de servidor estarà distribuïda en diferents _lambda functions_ implementades a través del servei de [Netlify functions](https://www.netlify.com/features/functions/).
* **NOU:** Faré ús dels [_event triggers_](https://hasura.io/event-triggers) de Hasura per executar les funcions a partir de canvis a la base de dades.
* **NOU:** El servei d'identitat el proveirà [Auth0](https://auth0.com/).
* **NOU:** Les notificacions faran servir el servei de [Firebase Cloud Messaging](https://firebase.google.com/products/cloud-messaging/).

### 🖍️ Disseny

Tot i que limitades, les funcionalitats d'aquesta primera versió són força ambicioses de manera que el disseny de l'app haurà de conjugar bastants elements. Igual que amb el projecte del mes passat faré ús de [Material Design](https://material.io/) implementat a través de Material-UI per a facilitar-me la feina sobretot tenint en compte que el meu fort no és el disseny visual.

A continuació podeu veure alguns dels mockups que he preparat de les diferents parts de l'aplicació per a fer-vos una idea de quin aspecte tindrà (en la versió final segurament canviaran coses).

![](/img/6by6january-generalview.png "Vista general amb estadístiques del joc.")

![](/img/6by6january-playerview.png "Pàgina un cop logejat amb informació del teu joc.")

![](/img/6by6january-validatekill.png "Diàleg per a confirmar l'eliminació de la teva víctima.")

![](/img/6by6january-killtoconfirm.png "Missatge que rep la víctima per confirmar la seva eliminació del joc.")

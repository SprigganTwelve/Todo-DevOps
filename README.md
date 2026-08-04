# Description

Ce projet se concentre sur le développement de services d'API destinés à la gestion de tâches.

Il est disponible en deux versions :

* **Node.js**
* **Python**


Chaque service permet à un utilisateur de :

* créer une tâche ;
* modifier une tâche ;
* supprimer une tâche.

La persistance des données est assurée par une base de données relationnelle **PostgreSQL**, utilisée par les deux implémentations.

## Structure du projet

Chaque service (`node` et `python`) contient un dossier `/docker` regroupant les fichiers de configuration nécessaires au déploiement de l'application dans un environnement portable à l'aide de Docker.

## Prérequis

Avant de commencer, vérifiez que Docker est correctement installé sur votre machine :

```bash
docker --version
```

Si cette commande ne fonctionne pas, installez Docker en suivant la documentation d'OpenClassrooms :

https://openclassrooms.com/fr/courses/8431896-optimisez-votre-deploiement-en-creant-des-conteneurs-avec-docker/8482700-installez-docker

Vérifiez également que le plugin **Docker Compose** est installé :

```bash
docker compose version
```

## Lancer l'environnement de développement

À la racine du projet se trouve un fichier `docker-compose.yaml`. Celui-ci permet de démarrer l'ensemble des services nécessaires au fonctionnement du projet (API, base de données, etc.).

Pour démarrer l'environnement, exécutez la commande suivante :

```bash
docker compose up
```

Pour lancer les services en arrière-plan, vous pouvez utiliser :

```bash
docker compose up -d
```

Une fois cette commande exécutée, l'ensemble de l'infrastructure sera automatiquement créé et démarré.

## Arrêter l'environnement

Pour arrêter les services et supprimer les conteneurs créés par Docker Compose, utilisez :

```bash
docker compose down
```

## Utilisation des Dockerfiles

Chaque dossier `/docker` contient un `Dockerfile` permettant de construire uniquement l'image du service concerné (Node.js ou Python).

Depuis le dossier contenant le `Dockerfile`, construisez l'image avec :

```bash
docker build -t <nom_image> .
```

Puis lancez un conteneur à partir de cette image :

```bash
docker run --name <nom_du_conteneur> <nom_image>
```

Par exemple :

```bash
docker build -t tasks-api-node .

docker run --name tasks-node tasks-api-node
```

Le même principe s'applique au service Python.

> **Remarque :** L'utilisation de `docker compose` est recommandée, car elle permet de démarrer automatiquement tous les services du projet (API, base de données PostgreSQL, réseau, volumes, etc.) sans avoir à lancer chaque conteneur individuellement.

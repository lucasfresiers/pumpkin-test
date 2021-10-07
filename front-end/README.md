# Front-end

Les informations des employés sont affichées dans un infinite-scroll qui nous permet de ne pas charger toutes les données d'un seul coup.

Fonctionnement : à l'arrivée sur la page, aucun filtre n'est appliqué, tous les employés sont chargés.


Il y a 3 filtres :
1 filtre pour rechercher une personne par son nom (filtre indépendant).

2 filtres liés :
- Un pour afficher uniquement les personnes dans l'effectif.
- Et un pour filtrer sur les salaires supérieurs à une valeur donnée.
à l'application de l'un de ces deux filtres, les résultats sont triés par odre croissant de salaire mensuel.

Le filtre sur les salaires est couplé à celui des personnes présentent dans l'effectif.

Tous les filtres sont réinitialisés lorsque l'on scroll vers le bas et que de nouvelles données sont chargées.

Au click sur le nom d'un employé ou sur la flêche présente sur la card permet d'accéder aux informations personnelles de la personne.
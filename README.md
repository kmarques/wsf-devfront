# Notes

## Utilities

json-server: Instancie un serveur RESTFULL à partir d'un fichier json
```npx json-server --watch db.json```
Pour changer le port d'écoute, ajouter l'option `--port 3001`
## REST

GET = Read => 200,404
POST = Create => 201,400
PUT = Update => 200,400,404
DELETE = Delete => 204,404

200 => OK
201 => CREATED
202 => ACCEPTED
204 => NO CONTENT
400 => Bad Request
404 => NOT FOUND

GET /posts
POST /posts
GET /posts/1
PUT /posts/1
DELETE /posts/1

GET /posts/1/comments
<=> GET /comments?post=1

GET /posts/1/comments/1

## Exo 1

E-commerce

- Afficher une liste de produits (nom, prix, image?)
- Pour chaque produit, afficher un bouton "Ajouter au panier" avec une quantité
- Afficher un panier avec son contenu (produit, quantité) et la somme totale
- Afficher dans le panier un bouton "Payer" qui créer une nouvelle commande (liste des produits + montant total)
- Afficher la liste des commandes passées
- Bonus: Ajouter un champ Autocomplete sur la recherche de produits par nom
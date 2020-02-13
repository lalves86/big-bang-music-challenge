# Big Bang Music Challenge

Esta aplicação recupera dados das APIs do Open Weather Map e do Spotify, e retorna um arquivo JSON contendo uma sugestão de playlist com 20 músicas, baseado na temperatura da cidade pesquisada.

## Uso

Para testar o código basta clonar o repositório e seguir os passos abaixo:

```
> yarn // Instalar as dependências da aplicação
> yarn dev // Iniciar o servidor local
```

Acessar o endereço http://localhost:3333

## Fazendo uma requisição

Uma requisição é feita através do método post, passando o nome de uma cidade;

#### Exemplo:

* POST http://localhost:3333

* req.body (JSON)

```
{
  "city": "Belo Horizonte"
}
```

#### Resposta à requisição

```
{
  "sugestion": "Pop hits",
  "city": "Belo Horizonte",
  "temp": 23.27,
  "playlist": [
    "Intentions",
    "Falling",
    "The Box",
    "Life Is Good (feat. Drake)",
    "You should be sad",
    "My Oh My (feat. DaBaby)",
    "everything i wanted",
    "Say So",
    "ROXANNE",
    "What A Man Gotta Do",
    "Rare",
    "Dance Monkey",
    "Physical",
    "Know Your Worth",
    "Yummy",
    "Adore You",
    "What If I Told You That I Love You",
    "Before You Go",
    "Only The Young - Featured in Miss Americana",
    "No Shame"
  ]
}
```

#### Erro

Caso haja algum erro na requisição feita pelo usuário (e.g. usuário digitou uma cidade que não existe) a API retorna um código de erro

```
{
  "Error": "Something went wrong with your request, probably you mistyped the city name"
}
```

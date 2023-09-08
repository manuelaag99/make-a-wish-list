// Users
const users = [
    {
        id: "1",
        displayName: "Manuel Alanis",
        username: "manuelaag99",
        email: "manuelaag99@gmail.com",
        password: "@Testpassword2",
        creationDate: "2023/09/06",
        birthDate: "2023/09/10"
    },
    {
        id: "2",
        displayName: "Mike Gaona",
        username: "unmikemas",
        email: "mikegaona@gmail.com",
        password: "@Testpassword2",
        creationDate: "2023/09/06",
        birthDate: "2023/10/14"
    }
];

// Lists 
const lists = [
    {
        id: "8j389rj",
        creatorId: "1",
        listName: "Regalos de navidad"
    },
    {
        id: "3rh39as",
        creatorId: "1",
        listName: "Comidas que quiero probar"
    },
    {
        id: "7hj3lfm",
        creatorId: "2",
        listName: "Navidad"
    }
];

// List items
const listItems = [
    {
        listId: "8j389rj",
        id: "rh38f94h837gh",
        itemName: "Videojuego 1",
        itemDescription: "Es el videojuego que he querido siempre.",
        itemPhotoUrl: ""
    },
    {
        listId: "8j389rj",
        id: "26eghwszicmd1",
        itemName: "Sudadera",
        itemDescription: "De cualquier color.",
        itemPhotoUrl: ""
    },
    {
        listId: "3rh39as",
        id: "vbaavx27geqta",
        itemName: "Kiwi",
        itemDescription: "Me da curiosidad.",
        itemPhotoUrl: ""
    },
];

const posts = [
    {
        id: "36rg7s",
        postTitle: "El mejor juguete",
        postBody: "Siempre había querido este juguete, un Shredder de esta línea.",
        creationDate: "2023/09/05",
        creatorId: "1",
    },
    {
        id: "70ke9a",
        postTitle: "La mejor pizza",
        postBody: "Tiene Philadelphia.",
        creationDate: "2023/09/05",
        creatorId: "1",
    },
]

module.exports =  { users, lists, listItems, posts }
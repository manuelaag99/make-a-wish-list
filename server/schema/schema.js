import { listItems, lists, users } from "../sampleData";
import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

//User type 
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        displayName: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        creationDate: { type: GraphQLString },
        birthDate: { type: GraphQLString }
    })
});

//List type
const ListType = new GraphQLObjectType({
    name: "List",
    fields: () => ({
        id: { type: GraphQLID },
        creator: {
            type: UserType,
            resolve(parent, args) {
                return users.find(user => user.id === parent.creatorId);
            }
        },
        listName: { type: GraphQLString }
    })
});

//ListItem type
const ListItemType = new GraphQLObjectType({
    name: "ListItem",
    fields: () => ({
        id: { type: GraphQLID },
        list: {
            type: ListType,
            resolve(parent, args) {
                return lists.find(list => list.id === parent.listId);
            }
        }
    })
});

//Post type
const PostType = new GraphQLObjectType({
    name: "Post",
    field: () => ({
        id: { type: GraphQLID },
        postTitle: { type: GraphQLString },
        postBody: { type: GraphQLString },
        creationDate: { type: GraphQLString },
        creator: {
            type: UserType,
            resolve(parent, args) {
                return users.find(user => user.id === parent.creatorId);
            }
        }
    })
})
const { listItems, lists, posts, users } = require("../sampleData");
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString, GraphQLSchema } = require("graphql");

const User = require("../models/User");
const List = require("../models/List");
const ListItem = require("../models/ListItem");
const Post = require("../models/Post");

// import { listItems, lists, posts, users } from "../sampleData";
// import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

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
        listName: { type: GraphQLString },
        creator: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.creatorId);
            }
        }
    })
});

//ListItem type
const ListItemType = new GraphQLObjectType({
    name: "ListItem",
    fields: () => ({
        id: { type: GraphQLID },
        itemName: { type: GraphQLString }, 
        itemDescription: { type: GraphQLString },
        itemPhotoUrl: { type: GraphQLString },
        list: {
            type: ListType,
            resolve(parent, args) {
                return List.findById(parent.listId);
            }
        }
    })
});

//Post type
const PostType = new GraphQLObjectType({
    name: "Post",
    fields: () => ({
        id: { type: GraphQLID },
        postTitle: { type: GraphQLString },
        postBody: { type: GraphQLString },
        creationDate: { type: GraphQLString },
        creator: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.creatorId);
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find();
                // return users;
            }
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                return User.findById(args.id);
                // return users.find(user => user.id === args.id);
            }
        },
        lists: {
            type: new GraphQLList(ListType),
            resolve(parent, args) {
                return List.find();
                // return lists;
            }
        },
        list: {
            type: ListType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                return List.findById(args.id);
                // return lists.find(list => list.id === args.id);
            }
        },
        listItems: {
            type: new GraphQLList(ListItemType),
            resolve(parent, args) {
                return ListItem.find();
                // return listItems;
            }
        },
        listItem: {
            type: ListItemType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                return ListItem.findById(args.id);
                // return listItems.find(listItem => listItem.id === args.id);
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find();
                // return posts;
            }
        },
        post: {
            type: PostType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                return Post.findById(args.id);
                // return posts.find(listItem => listItem.id === args.id);
            }
        }
    }
})


// export default new GraphQLSchema({ query: RootQuery });
module.exports = new GraphQLSchema({ query: RootQuery });
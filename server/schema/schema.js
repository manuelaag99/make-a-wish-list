const { listItems, lists, posts, users } = require("../sampleData");
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString, GraphQLSchema, GraphQLNonNull } = require("graphql");

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
        listDescription: { type: GraphQLString },
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
        listsByCreator: {
            type: new GraphQLList(ListType),
            args: { creatorId: { type: GraphQLID }},
            resolve(parent, args) {
                return List.find({ creatorId: args.creatorId });
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
        listItemsByList: {
            type: new GraphQLList(ListItemType),
            args: { listId: { type: GraphQLID }},
            resolve(parent, args) {
                return ListItem.find({ listId: args.listId });
                // return listItems;
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

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: UserType,
            args: {
                displayName: { type: GraphQLNonNull(GraphQLString) },
                username: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) },
                creationDate: { type: GraphQLNonNull(GraphQLString) },
                birthDate: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const user = new User({
                    // id: args.id,
                    displayName: args.displayName,
                    username: args.username,
                    email: args.email,
                    password: args.password,
                    creationDate: args.creationDate,
                    birthDate: args.birthDate
                })

                return user.save();
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args) {
                return User.findByIdAndRemove(args.id);
            }
        },
        updateUser: {
            type: UserType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                displayName: { type: GraphQLString },
                username: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
                creationDate: { type: GraphQLString },
                birthDate: { type: GraphQLString }
            },
            resolve(parent, args) {
                return User.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            displayName: args.displayName,
                            username: args.username,
                            email: args.email,
                            password: args.password,
                            creationDate: args.creationDate,
                            birthDate: args.birthDate,
                        }
                    },
                    { new: true }
                );
            }
        },
        addList: {
            type: ListType,
            args: {
                listName: { type: GraphQLNonNull(GraphQLString) },
                listDescription: { type: GraphQLNonNull(GraphQLString) },
                creatorId: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                const list = new List({
                    listName: args.listName,
                    listDescription: args.listDescription,
                    creatorId: args.creatorId
                });

                return list.save();
            }
        },
        deleteList: {
            type: ListType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                return List.findByIdAndRemove(args.id);
            }
        },
        updateList: {
            type: ListType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                listName: { type: GraphQLString },
                listDescription: { type: GraphQLString },
                creatorId: { type: GraphQLID }
            },
            resolve(parent, args) {
                return List.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            listName: args.listName,
                            listDescription: args.listDescription,
                            creatorId: args.creatorId
                        }
                    },
                    { new: true }
                )
            }
        },
        addListItem: {
            type: ListItemType,
            args: {
                itemName: { type: GraphQLNonNull(GraphQLString) },
                itemDescription: { type: GraphQLNonNull(GraphQLString) },
                itemPhotoUrl: { type: GraphQLNonNull(GraphQLString) },
                listId: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                const listItem = new ListItem({
                    itemName: args.itemName,
                    itemDescription: args.itemDescription,
                    itemPhotoUrl: args.itemPhotoUrl,
                    listId: args.listId,
                });

                return listItem.save();
            }
        },
        deleteListItem: {
            type: ListItemType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                return ListItem.findByIdAndRemove(args.id);
            }
        },
        updateListItem: {
            type: ListItemType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                itemName: { type: GraphQLString },
                itemDescription: { type: GraphQLString },
                itemPhotoUrl: { type: GraphQLString },
                listId: { type: GraphQLID }
            },
            resolve(parent, args) {
                return ListItem.findByIdAndUpdate(
                    args.id,
                    {
                        $set: { 
                            itemName: args.itemName,
                            itemDescription: args.itemDescription,
                            itemPhotoUrl: args.itemPhotoUrl,
                            listId: args.listId
                        }
                    },
                    { new: true }
                )
            
            }
        },
        addPost: {
            type: PostType,
            args: {
                postTitle: { type: GraphQLNonNull(GraphQLString) },
                postBody: { type: GraphQLNonNull(GraphQLString) },
                creationDate: { type: GraphQLNonNull(GraphQLString) },
                creatorId: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                const post = new Post({
                    postTitle: args.postTitle,
                    postBody: args.postBody,
                    creationDate: args.creationDate,
                    creatorId: args.creatorId
                });

                return post.save();
            }
        },
        deletePost: {
            type: PostType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                return Post.findByIdAndRemove(args.id);
            }
        },
        updatePost: {
            type: PostType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                postTitle: { type: GraphQLString },
                postBody: { type: GraphQLString },
                creationDate: { type: GraphQLString },
                creatorId: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Post.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            postTitle: args.postTitle,
                            postBody: args.postBody,
                            creationDate: args.creationDate,
                            creatorId: args.creatorId
                        }
                    },
                    { new: true }
                )
            }
        }
    }
})

// export default new GraphQLSchema({ query: RootQuery });
module.exports = new GraphQLSchema({ query: RootQuery, mutation });
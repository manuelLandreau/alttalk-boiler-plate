import userType from './userType';
import talkType from './talkType';
import answerType from './answerType';
import sequelize from '../services/dbService';
import User from '../models/user';
import Talk from '../models/talk';
import Answer from '../models/answer';
import uuid from 'uuid/v4';
import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLList,
    GraphQLInt,
    GraphQLInputObjectType,
    GraphQLString
} from 'graphql';

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'SingleQueryType',
        fields: {
            users: {
                type: new GraphQLList(userType),
                resolve (root, args) {
                    return sequelize.models.user.findAll({ where: args });
                }
            },
            talks: {
                type: new GraphQLList(talkType),
                resolve () {
                    return Talk.findAll({
                        order: [sequelize.fn('min', sequelize.col('answerNb'))],
                        limit: 1
                    });
                }
            },
            answers: {
                type: new GraphQLList(answerType),
                resolve (root, args) {
                    return Answer.findAll({ where: args });
                }
            }
        }
    }),
    // query: new GraphQLObjectType({
    //     name: 'RootQueryType',
    //     fields: {
    //         users: {
    //             type: new GraphQLList(userType),
    //             resolve (root, args) {
    //                 return sequelize.models.user.findAll({ where: args });
    //             }
    //         },
    //         talks: {
    //             type: new GraphQLList(talkType),
    //             resolve (root, args) {
    //                 return Talk.findAll({ where: args });
    //             }
    //         },
    //         answers: {
    //             type: new GraphQLList(answerType),
    //             resolve (root, args) {
    //                 return Answer.findAll({ where: args });
    //             }
    //         }
    //     }
    // }),
    // mutation
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            createUser: {
                type: userType,
                args: {
                    email: {
                        name: 'email',
                        type: GraphQLString
                    },
                    username: {
                        name: 'username',
                        type: GraphQLString
                    },
                    password: {
                        name: 'password',
                        type: GraphQLString
                    }
                },
                resolve(obj, {email, username, password}, source) {
                    return User.create({
                        _id: uuid(),
                        email: email,
                        username: username,
                        password: password
                    });
                }
            },
            updateUser: {
                type: userType,
                args: {
                    _id: {
                        name: 'id',
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    email: {
                        name: 'email',
                        type: GraphQLString
                    },
                    username: {
                        name: 'username',
                        type: GraphQLString
                    },
                    password: {
                        name: 'password',
                        type: GraphQLString
                    }
                },
                resolve(obj, {id, email, username, password}, source) {
                    return User.update({
                        email: email,
                        username: username,
                        password: password,
                        where: {
                            _id: id
                        }
                    });
                }
            }
        }
    })
});

export default schema;

import talkType from './talkType';
import answerType from './answerType';
import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

let userType = new GraphQLObjectType({
    name: 'UserQl',
    description: 'User creator',
    fields() {
        return {
            _id: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'The uuid of the user.',
            },
            username: {
                type: GraphQLString,
                description: 'The name of the user.',
            },
            email: {
                type: GraphQLString,
                description: 'The login of the user.',
            },
            password: {
                type: GraphQLString,
                description: 'User password',
            },
            talks: {
                type: new GraphQLList(talkType),
                resolve (user) {
                    return user.getTalks();
                }
            },
            answers: {
                type: answerType,
                resolve (user) {
                    return user.getAnswers();
                }
            }
        }
    }
});

export default userType;
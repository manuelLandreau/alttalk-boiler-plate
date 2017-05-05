import userType from './userType';
import talkType from './talkType';
import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLString
} from 'graphql';

let answerType = new GraphQLObjectType({
    name: 'Answer',
    description: 'Answer creator',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The uuid of the answer.',
        },
        text: {
            type: GraphQLString,
            description: 'The content of the answer.',
        },
        reportedNb: {
            type: GraphQLInt,
            description: 'Answer reported number',
        },
        user: {
            type: userType,
            resolve (answer) {
                return answer.getUser();
            }
        },
        talk: {
            type: talkType,
            resolve (answer) {
                return answer.getTalk();
            }
        }
    })
});

export default answerType;
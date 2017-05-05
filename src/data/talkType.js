import userType from './userType';
import answerType from './answerType';
import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLInt,
    GraphQLInputObjectType,
    GraphQLString
} from 'graphql';

let talkType = new GraphQLObjectType({
    name: 'TalkQl',
    description: 'Talk creator',
    fields() {
        return {
            _id: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'The uuid of the talk.',
            },
            text: {
                type: GraphQLString,
                description: 'The content of the talk.',
            },
            createdAt: {
                type: GraphQLString,
                description: 'The date of the talk.',
            },
            views: {
                type: GraphQLString,
                description: 'The views number of the talk.',
            },
            answerNb: {
                type: GraphQLInt,
                description: 'Talk answer',
            },
            reportedNb: {
                type: GraphQLInt,
                description: 'Talk reported number',
            },
            user: {
                type: userType,
                resolve (talk) {
                    return talk.getUser();
                }
            },
            answers: {
                type: answerType,
                resolve (talk) {
                    return talk.getAnswers();
                }
            }
        }
    }
});

export default talkType;
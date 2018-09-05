const graphql = require('graphql');
const _ = require('lodash');
const Club = require('../models/club');
const League = require('../models/league');
const Match = require('../models/match');
const Prediction = require('../models/prediction');
const User = require('../models/user');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLEnumType
} = graphql;

//const every table to GraphQLObjectType
const ClubType = new GraphQLObjectType({
    name: 'Club',
    fields: () => ({
        id: { type: GraphQLID },
        name: {
            type: GraphQLString
        },
        zhName: {
            type: GraphQLString
        },
        shortName: {
            type: GraphQLString
        },
        tla: {
            type: GraphQLString
        },
        badge: {
            type: GraphQLString
        },
        league: {
            type: LeagueType,
            resolve(parent, args) {
                return League.findById(parent.leagueId)
            }
        }
    })
});

const LeagueType = new GraphQLObjectType({
    name: 'League',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        zhName: {
            type: GraphQLString
        },
        clubs: {
            type: new GraphQLList(ClubType),
            resolve(parent, args) {
                return Club.find({ leagueId: parent.id });
            }
        }
    })
});

const MatchType = new GraphQLObjectType({
    name: 'Match',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        date: {
            type: GraphQLString
        },
        league: {
            type: LeagueType,
            resolve(parent, args) {
                return League.findById(parent.leagueId)
            }
        },
        home: {
            type: ClubType,
            resolve(parent, args) {
                return Club.findById(parent.homeId)
            }
        },
        away: {
            type: ClubType,
            resolve(parent, args) {
                return Club.findById(parent.awayId)
            }
        },
        //reminder wrong
        result: {
            type: new GraphQLEnumType({
                name: "result",
                values: {
                    home: {
                        value: 0
                    },
                    away: {
                        value: 1
                    },
                    draw: {
                        value: 2
                    }
                }
            })
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        fb: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        displayName: {
            type: GraphQLString
        },
        status: {
            type: GraphQLString
        },
        picture: {
            type: GraphQLString
        },
        total: {
            type: GraphQLInt
        },
        win: {
            type: GraphQLInt
        },
        rate: {
            type: GraphQLInt
        },
        predictions: {
            type: new GraphQLList(PredictionType),
            resolve(parent, args) {
                return Prediction.find({ userId: parent.id });
            }
        }
    })
})

const PredictionType = new GraphQLObjectType({
    name: 'Prediction',
    fields: () => ({
        id: { type: GraphQLID },
        choice: {
            type: new GraphQLEnumType({
                name: "choice",
                values: {
                    home: {
                        value: 0
                    },
                    away: {
                        value: 1
                    },
                    draw: {
                        value: 2
                    }
                }
            })
        },
        user: {
            type: UserType,
            resolve(parent, args) {
                return user.findById(parent.userId)
            }
        },
        match: {
            type: MatchType,
            resolve(parent, args) {
                return match.findById(parent.matchId)
            }
        }
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        league: {
            type: LeagueType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return League.findById(args.id);
            }
        },
        club: {
            type: ClubType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return Club.findById(args.id);
            }
        },

        match: {
            type: MatchType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return Match.findById(args.id);
            }
        },

        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return User.findById(args.id);
            }
        },
        prediction: {
            type: PredictionType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return Prediction.findById(args.id);
            }
        },

        leagues: {
            type: new GraphQLList(LeagueType),
            resolve(parent, args) {
                return League.find({})
            }
        },
        clubs: {
            type: new GraphQLList(ClubType),
            resolve(parent, args) {
                return Club.find({})
            }
        },
        matches: {
            type: new GraphQLList(MatchType),
            resolve(parent, args) {
                return Match.find({})
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find({})
            }
        },
        predictions: {
            type: new GraphQLList(PredictionType),
            resolve(parent, args) {
                return Prediction.find({})
            }
        }

    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addLeague: {
            type: LeagueType,
            args: {
                name: {
                    type: GraphQLString
                },
                zhName: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                let league = new League({
                    name: args.name,
                    zhName: args.zhName
                });
                return league.save()
            }
        },
        addClub: {
            type: ClubType,
            args: {
                name: {
                    type: GraphQLString
                },
                zhName: {
                    type: GraphQLString
                },
                shortName: {
                    type: GraphQLString
                },
                tla: {
                    type: GraphQLString
                },
                badge: {
                    type: GraphQLString
                },
                leagueId: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                let club = new Club({
                    name: args.name,
                    zhName: args.zhName,
                    shortName: args.shortName,
                    tla: args.tla,
                    badge: args.badge,
                    leagueId: args.leagueId
                });
                return club.save()
            }
        },
        addMatch: {
            type: MatchType,
            args: {
                date: {
                    type: GraphQLString
                },
                leagueId: {
                    type: GraphQLID
                },
                homeId: {
                    type: GraphQLID
                },
                awayId: {
                    type: GraphQLID
                },
                //reminder wrong
                result: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                let match = new Match({
                    date: args.date,
                    leagueId: args.leagueId,
                    homeId: args.homeId,
                    awayId: args.awayId,
                    result: args.result
                });
                return match.save()
            }
        },
        addUser: {
            type: UserType,
            args: {
                fb: {
                    type: GraphQLString
                },
                email: {
                    type: GraphQLString
                },
                displayName: {
                    type: GraphQLString
                },
                status: {
                    type: GraphQLString
                },
                picture: {
                    type: GraphQLString
                },
                predictionsId: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                let user = new User({
                    fb: args.fb,
                    email: args.email,
                    displayName: args.displayName,
                    status: args.status,
                    picture: args.picture,
                    predictionsId: args.predictionsId
                });
                return user.save()
            }
        },
        addPrediction: {
            type: PredictionType,
            args: {
                choice: {
                    type: GraphQLString
                },
                matchId: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                let prediction = new Prediction({
                    choice: args.choice,
                    matchId: args.matchId,
                });
                return prediction.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
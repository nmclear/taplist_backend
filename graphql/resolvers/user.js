const twilio = require('./../../twilio');
const dbBeers = require('./../../dynamodb/beers');
const dbUsers = require('./../../dynamodb/users');
const dbAuthUsers = require('./../../dynamodb/auth');

const textAuthCode = ({ phone, code }) => {
    return twilio.messages.create({
        body: `Your validation code is ${code}`,
        to: phone,
        from: '+12314216073'
    }).then(res => {
        return 'sent text successful'
    }).catch(err => {
        throw new Error('Please provide a valid phone number or try again.')
    })
};

const createUser = async (args) => {
        
    const phone = String(args.phone).replace(/[^\d]/g, "");
    const code = Math.floor((Math.random() * 8999 + 1000));
    try {
        await dbUsers.getUserByPhone(phone).then((user) => {
            if(user){
                throw new Error('phone number already in use.')
            }
        });
        await textAuthCode({ phone, code });
        return dbAuthUsers.createUserByPhoneAndCode({ phone, code })
    }
    catch(error) {
        console.log(error)
        return { error }
    }
};

const authorizeUser = async (args) => {
    if(!args.phone || !args.code){
        throw new Error('Phone and code must be provided.')
    }
    const phone = String(args.phone).replace(/[^\d]/g, "");
    const code = parseInt(args.code);

    try {
        await dbUsers.getUserByPhone(phone).then(user => {
            if(!user) throw new Error('Phone number not found.')
            if(user.authStatus) throw new Error('User is already authorized.')
            if(user.code !== code || !user.codeValid){
                throw new Error('Code not valid.')
            }
        })
        return dbAuthUsers.updateSuccessAuthStatusByPhone(phone);
    }
    catch(error) {
        console.log(error)
        return { error }
    }
};

module.exports = {
  Query: {
    users: () => dbUsers.getUsers(),
    user: (_, args) => dbUsers.getUserByPhone(args.phone),
  },
  Mutation: {
    createUser: (_, args) => createUser(args),
    authorizeUser: (_, args) => authorizeUser(args),
    updateUser: (_, args) => dbUsers.updateUser(args),
    deleteUser: (_, args) => dbUsers.deleteUser(args),
  },
  User: {
    taplist: user => dbBeers.getBeersFromTapList(user.taplist),
  },
};

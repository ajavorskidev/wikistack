const Sequelize = require('sequelize'); 
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false // Turns off the SQL logging in console
});

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlphaNumeric: true
        }
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed'),
        defaultValue: 'closed'
        
    }
});

const User = db.define('user', {
    name: {
        type: Sequelize.STRING, // Text dataType since names could possibly be longer than 256 characters, though since workshop specifies that it is string will be string
        allowNull: false,
        validate: {
            isAlpha: true
        }
    },
    email: {
        type: Sequelize.STRING, // Email also text since email could contain total 320 characters
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});
module.exports = {
    db, Page, User
};
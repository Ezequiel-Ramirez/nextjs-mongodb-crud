import { connection, connect } from 'mongoose';

const conn = {
    isConnected: false,
}

//conect to a mongodb atlas database mongodb+srv://ezequielram:<password>@cluster0.sk4jwql.mongodb.net/?retryWrites=true&w=majority
async function dbConnect() {
    if (conn.isConnected) {
        return;
    }

    const db = await connect('mongodb+srv://ezequielram:ezequielram@cluster0.sk4jwql.mongodb.net/', {
    });

    console.log(db.connection.db.databaseName)
    conn.isConnected = db.connections[0].readyState;
    console.log(conn.isConnected);
}

export default dbConnect;

connection.on('connected', () => {
    console.log('Mongoose connected to db...');
});

connection.on('error', (err) => {
    console.log(err.message);
});


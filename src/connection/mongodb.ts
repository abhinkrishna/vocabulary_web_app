import { ConnectionOptions, createConnection } from "typeorm"

const initMongoConnection = async (mongoConfig: ConnectionOptions) => {
    return await createConnection(mongoConfig);
}

export default initMongoConnection;
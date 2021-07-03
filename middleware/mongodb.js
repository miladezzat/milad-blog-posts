import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
    }
    try {
        // Use new db connection
        await mongoose.connect(process.env.mongodbUrl, {
            auth: {
                "password": 'Y105in1whGeleVDi',
                "user": 'miladezzat',
            },
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
    } catch (error) {
        console.log(error);
    }

    return handler(req, res);
};

export default connectDB;
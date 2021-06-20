import connectDB from '../../middleware/mongodb';
import SubScriber from '../../models/subscribers';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { email } = req.body;
        if (email) {
            try {
                const user = new SubScriber({ email });
                const createdSubscriber = await user.save();
                return res.status(200).send({ message: 'subscribe success' });
            } catch (error) {
                return res.status(500).send(error.message);
            }
        } else {
            res.status(400).send({ message: 'bad request, email is required' });
        }
    } else {
        res.status(422).send({ message: 'req_method_not_supported' });
    }
};

export default connectDB(handler);
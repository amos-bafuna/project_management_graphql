import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connexion à MongoDB réussie !'.blue))
    .catch(() => console.log('Connexion à MongoDB échouée !'.red));
};

export default connectDB;

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(' Conectado a MongoDB Atlas'))
  .catch(err => console.error(' Error al conectar Mongo:', err));


const UneteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  generoMusical: { type: String, required: true },
  descripcion: { type: String, required: true },
  redes: { type: String }
}, { timestamps: true });

const Unete = mongoose.model('Unete', UneteSchema);


app.post('/api/unete', async (req, res) => {
  try {
    const nuevo = new Unete(req.body);
    await nuevo.save();
    res.json({ ok: true, message: 'Formulario enviado correctamente' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Error al guardar', error });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(` Servidor backend en puerto ${PORT}`));

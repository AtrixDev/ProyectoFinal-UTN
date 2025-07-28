const Product = require('../models/Product');

exports.getAll = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

exports.getById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(product);
    } catch (error) {
        console.error('Error en getById:', error);
        res.status(500).json({ error: 'Error al obtener producto' });
    }
};

exports.create = async (req, res) => {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
};

exports.update = async (req, res) => {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

exports.remove = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Producto eliminado' });
};

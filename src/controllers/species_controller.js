import Species from '../models/species_model.js';

export const store = async (req, res) => {
    try {
        await Species.create(req.body);
        res.json(201);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const index = async (req, res) => {
    try {
        const content = await Species.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

export const show = async (req, res) => {
    try {
        const content = await Species.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

export const update = async (req, res) => {
    try {
        await Species.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(200);
    } catch (error) {
        res.status(401).send(error.message);
    }
};

export const destroy = async (req, res) => {
    try {
        await Species.findByIdAndDelete(req.params.id).exec();
        res.json(200);
    } catch (error) {
        res.status(401).send(error.message);
    }
};
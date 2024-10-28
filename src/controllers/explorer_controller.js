import Explorer from '../models/explorer_model.js';

export const store = async (req, res) => {
    try {
        await Explorer.create(req.body);
        res.json(201);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const index = async (req, res) => {
    try {
        const content = await Explorer.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

export const show = async (req, res) => {
    try {
        const content = await Explorer.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

export const update = async (req, res) => {
    try {
        await Explorer.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(200);
    } catch (error) {
        res.status(401).send(error.message);
    }
};

export const destroy = async (req, res) => {
    try {
        await Explorer.findByIdAndDelete(req.params.id).exec();
        res.json(200);
    } catch (error) {
        res.status(401).send(error.message);
    }
};
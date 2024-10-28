import { Schema, model } from "mongoose";

const speciesSchema = new Schema({
    name: {
        type: Schema.Types.String,
        unique: true,
        required: true
    },
    discoveryLocation: {
        type: Schema.Types.String,
        required: true
    },
    rarity: {
        type: Schema.Types.Number,
        min: 1,
        max: 10,
        default: 1,
        required: true
    },
    documented: {
        type: Boolean,
        default: false,
        required: true
    },
    expeditions: [{
        type: Schema.Types.ObjectId,
        ref: "Expeditions"
    }]
});

const Species = model('Species', speciesSchema);

export default Species;
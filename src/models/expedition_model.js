import { Schema, model } from "mongoose";

const expeditionSchema = new Schema({
    location: {
        type: Schema.Types.String,
        unique: true,
        required: true
    },
    date: {
        type: Schema.Types.Date,
        required: true
    },
    participants: {
        type: Schema.Types.ObjectId,
        ref: 'Explorer',
        required: true
    },
    speciesFound: {
        type: Schema.Types.ObjectId,
        ref: 'Species',
        required: false
    }
});

const Expedition = model('Expedition', expeditionSchema);

export default Expedition;
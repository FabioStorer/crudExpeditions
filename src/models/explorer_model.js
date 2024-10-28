import { Schema, model } from "mongoose";

const explorerSchema = new Schema({
    name: {
        type: Schema.Types.String,
        unique: true,
        required: true
    },
    fieldOfStudy: {
        type: Schema.Types.String,
        required: true
    },
    expeditionsParticipated: {
        type: Schema.Types.Number,
        min: 1,
        required: true
    },
    expeditions: [{
        type: Schema.Types.ObjectId,
        ref: "Expeditions"
    }]
});

const Explorer = model('Explorer', explorerSchema);

export default Explorer;
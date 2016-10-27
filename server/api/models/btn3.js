import mongoose from 'mongoose';

const btn3Schema = new mongoose.Schema({
    title1: String,
    title2: String,
    title3: String,
    title4: String,
    texte1: String,
    texte2: String,
    texte3: String,
    texte4: String
});

let model = mongoose.model('Btn3', btn3Schema);

export default class Btn3 {

    findAll(req, res) {
        model.find({}, (err, btn3s) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(btn3s);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, btn3) => {
            if (err || !btn3) {
                res.sendStatus(403);
            } else {
                res.json(btn3);
            }
        });
    }

    create(req, res) {
        model.create({
                title1: req.body.title1,
                title2: req.body.title2,
                title3: req.body.title3,
                title4: req.body.title4,
                texte1: req.body.texte1,
                texte2: req.body.texte2,
                texte3: req.body.texte3,
                texte4: req.body.texte4
            },
            (err, btn3) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(btn3);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, btn3) => {
            if (err || !btn3) {
                res.status(500).send(err.message);
            } else {
                res.json(btn3);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        })
    }
}

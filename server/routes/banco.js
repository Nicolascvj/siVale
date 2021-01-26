const express = require('express');
const Banco = require('../models/banco')
const Usuario = require('../models/usuario')
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();

const { verificaToken, verificaAdminRole } = require('../middlewares/autenticacion');

app.get('/banco',[verificaToken, verificaAdminRole],function (req, res) {

    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);

    // let filtrofecha=req.query.Fecha;
    // filtrofecha=String(filtrofecha);

    // let filtrocaja=req.query.Caja;
    // filtrocaja=String(filtrocaja);
//fecha:filtrofecha,caja:filtrocaja
    Banco.find({})
        .skip(desde)
        .limit(limite)
        .exec((err, banco) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err,
                });
            }
            res.json({
                ok: true,
                bancos: banco
            })

        })
});

app.post('/banco', function (req, res) {
//     let body = req.body;
//     let bancos = new Banco({
//         caja: body.caja,
//         fecha: body.fecha,

//         hora: body.hora,

res.json({
    ok: true,
    message: "M"
})

//     });
//     //console.log(bancos);

//     bancos.save((err, bancoDB) => {
//         if (err) {
//             return res.status(400).json({
//                 ok: false,
//                 err,

//             });
//         }
//         res.json({
//             ok: true,
//             bancos: bancoDB
//         });

//     });
 });

app.delete('/banco/:id', function (req, res) {
    let id = req.params.id;


    Banco.findByIdAndDelete(id, (err, bancoDB) => {
        //   { new: true, runValidators: true, context: 'query' }
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }

        if (!bancoDB) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: '# Caja no encontrada'
                },
            });
        }

        res.json({
            ok: true,
            bancos: bancoDB
        });

    });
});

module.exports = app;
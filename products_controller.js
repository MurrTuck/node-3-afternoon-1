module.exports = {
    create: (req, res) => {
        const { name, description, price, image_url } = req.body

        const db = req.app.get('db')

        db.create_product([name, description, price, image_url])
            .then(() => res.sendStatus(200))
            .catch(err => res.status(500).send(err))
    },
    getOne: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.read_product(id)
            .then(product => res.status(200).send(product))
            .catch(err => {
                res.status(500).send({ errorMessage: "Broken!" });
                console.log(err)
            });

    },
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.read_products()
            .then(products => res.status(200).send(products))
            .catch(err => res.status(500).send(err))

    },
    update: (req, res) => {
        //Not sure about this next part. 
        const { params, query } = req
        // const { productName } = req.body
        const db = req.app.get('db')

        //Very confused on this one. 
        db.update_product([params.id, query.desc])
            .then(() => res.sendStatus(200))
            .catch(err => res.status(500).send(err))

    },
    delete: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.delete_product(id)
            .then(() => res.sendStatus(200))
            .catch(err => req.status(500).send(err))

    }
}
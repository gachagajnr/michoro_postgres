// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
    return async(context) => {
        const { app, data, params } = context;
         if (!data) {
            throw new Error("no data");
        }
         await app
            .service("uploads")
            .create({ uri: data.uri })
            .then((res) => {
                context.data = {
                    name: data.name,
                    price: data.price,
                    description: data.description,
                    orientation: data.orientation,
                    userId: context.params.user.id,
                    length: data.length,
                    width: data.width,
                    category: data.category,
                    breadth: data.breadth,
                    materials: data.materials,
                    keywords: data.keywords,
                    mediums: data.mediums,
                    styles: data.styles,
                    subjects: data.subjects,
                    art: res.id,
                };
            })
            .catch((e) => {
                console.log(e)
                throw new Error("Not successful");
            });

        return context;
    };
};
declare module 'swagger-jsdoc' {

    interface Options {

        definition: {

            openapi: string;
            info: {

                title: string;
                version: string;
                description?: string;

            };

            servers?: Array<{ url: string }>;
            components?: any;

        };

        apis: string[];

    }

    function swaggerJSDoc(options: Options): any;
    export = swaggerJSDoc;
    
}
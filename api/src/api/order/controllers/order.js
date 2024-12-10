'use strict';
require('dotenv').config();
const stripe = require('stripe')(process.env.VITE_STRIPE_KEY);


/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({strapi})=>({
    async create(ctx) {
        const {customerEmail, productsOrdered} = ctx.request.body;
        try {
            const lineItems = await Promise.all(
                productsOrdered.map(async (product) => {
                    const item = await strapi
                        .service("api:product.product")
                        .findOne(product.id);
                    return {
                        price_data: {
                            currency: "cad",
                            product_data: {
                                name: item.title,
                            },
                            unit_amount: Math.round(item.price * 100),
                        },
                        quantity: product.quantity
                    }
                });
            );

            const session = stripe.checkout.create({
                mode: 'payment',
                success_url: `${process.env.CLIENT_URL}/success=true`,
                cancel_url: `${process.env.CLIENT_URL}/cancel=true`,
                line_items: lineItems,
                shipping_address_collection: {allowed_countries:["US","CA"]},
                payment_method_types: ["card"],
            });

            await strapi
                .service("api::order.order")
                .create({data: {productsOrdered, stripeId: session.id}});
        } catch(err) {
            ctx.respones.status = 500;
            return err;
        }
    }
}));

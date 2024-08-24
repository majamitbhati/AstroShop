import {z, defineCollection, reference} from "astro:content"


const shopsCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            category: z.string(),
            date: z.string(),
               // .transform(str => format(new Date(str), "MMMM d, yyyy")),
            featured: z.boolean().default(false),
            image: image(),
            soldout: image(),
            title: z.string(),
            floor: z.string(),
            size: z.number(),
            price: reference ("shopPrice"),
            atrium: z.boolean(),
            corner: z.boolean(),
            status: z.string(),
            byowner: z.boolean(),
            discount: z.number(),
            brokerage: z.boolean(),
            plc: z.string(),
            name: z.string(),
            contactno: z.number(),
            giftvisit: z.string(),
            giftbuy: z.string(),
            info: z.string(),
            ptz1: z.string().optional().default("Best location shop at a very reasonable rates, the shop is available at a discounted price. Only few shops available at this price and the price is subject to change because of high demand in the market."),
            ptz2: z.string().optional().default("The shop is for sale directly by the seller and there will be no brokerage charged for most of the shops. Also in some cases there will be added advantages in terms of premium locaion or reduced extra charges."),
            ptz3: z.string().optional().default("One can look at very healthy returns in few years as Trehan Iris Broadway Greno West Shops are likely to get very high premium after delivery."),
            ptz4: z.string().optional().default("The shops will be sold on endorsemnet basis and the documentation for the same is fast and simple. The buyer will get units at very low price as the investors are willing to give few units at above mentioned price."),
            ptz5: z.string().optional().default("Trehan Iris shops with details as provided above are premium shops of the project. The shops in the project are on lease basis and the buyer can not use Trehan Iris shop for self use. Renting, collection of rent and distribution of rent will be done by the builder."),

        }),
});


const foodCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            category: z.string(),
            date: z.string(),
               // .transform(str => format(new Date(str), "MMMM d, yyyy")),
            featured: z.boolean().default(false),
            image: image(),
            title: z.string(),
            floor: z.string(),
            size: z.number(),
            price: reference ("foodPrice"),
            atrium: z.boolean(),
            corner: z.boolean(),
            status: z.string(),
            byowner: z.boolean(),
            discount: z.number(),
            brokerage: z.boolean(),
            plc: z.string(),
            name: z.string(),
            contactno: z.number(),
            giftvisit: z.string(),
            giftbuy: z.string(),
            info: z.string(),
            ptz1: z.string().optional().default("Best location shop at a very reasonable rates, the shop is available at a discounted price. Only few shops available at this price and the price is subject to change because of high demand in the market."),
            ptz2: z.string().optional().default("The shop is for sale directly by the seller and there will be no brokerage charged for most of the shops. Also in some cases there will be added advantages in terms of premium locaion or reduced extra charges."),
            ptz3: z.string().optional().default("One can look at very healthy returns in few years as Trehan Iris Broadway Greno West Shops are likely to get very high premium after delivery."),
            ptz4: z.string().optional().default("The shops will be sold on endorsemnet basis and the documentation for the same is fast and simple. The buyer will get units at very low price as the investors are willing to give few units at above mentioned price."),
            ptz5: z.string().optional().default("Trehan Iris shops with details as provided above are premium shops of the project. The shops in the project are on lease basis and the buyer can not use Trehan Iris shop for self use. Renting, collection of rent and distribution of rent will be done by the builder."),


        }),
});




const anchorCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            category: z.string(),
            date: z.string(),
               // .transform(str => format(new Date(str), "MMMM d, yyyy")),
            featured: z.boolean().default(false),
            image: image(),
            title: z.string(),
            floor: z.string(),
            size: z.number(),
            price: reference ("anchorPrice"),
            atrium: z.boolean(),
            corner: z.boolean(),
            status: z.string(),
            byowner: z.boolean(),
            discount: z.number(),
            brokerage: z.boolean(),
            plc: z.string(),
            name: z.string(),
            contactno: z.number(),
            giftvisit: z.string(),
            giftbuy: z.string(),
            info: z.string(),
            ptz1: z.string().optional().default("Best location shop at a very reasonable rates, the shop is available at a discounted price. Only few shops available at this price and the price is subject to change because of high demand in the market."),
            ptz2: z.string().optional().default("The shop is for sale directly by the seller and there will be no brokerage charged for most of the shops. Also in some cases there will be added advantages in terms of premium locaion or reduced extra charges."),
            ptz3: z.string().optional().default("One can look at very healthy returns in few years as Trehan Iris Broadway Greno West Shops are likely to get very high premium after delivery."),
            ptz4: z.string().optional().default("The shops will be sold on endorsemnet basis and the documentation for the same is fast and simple. The buyer will get units at very low price as the investors are willing to give few units at above mentioned price."),
            ptz5: z.string().optional().default("Trehan Iris shops with details as provided above are premium shops of the project. The shops in the project are on lease basis and the buyer can not use Trehan Iris shop for self use. Renting, collection of rent and distribution of rent will be done by the builder."),
        }),
});




const officeCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            category: z.string(),
            date: z.string(),
               // .transform(str => format(new Date(str), "MMMM d, yyyy")),
            featured: z.boolean().default(false),
            image: image(),
            title: z.string(),
            floor: z.string(),
            size: z.number(),
            price: reference ("officePrice"),
            atrium: z.boolean(),
            corner: z.boolean(),
            status: z.string(),
            byowner: z.boolean(),
            discount: z.number(),
            brokerage: z.boolean(),
            plc: z.string(),
            name: z.string(),
            contactno: z.number(),
            giftvisit: z.string(),
            giftbuy: z.string(),
            info: z.string().optional(),
            ptz1: z.string().optional().default("Best location shop at a very reasonable rates, the shop is available at a discounted price. Only few shops available at this price and the price is subject to change because of high demand in the market."),
            ptz2: z.string().optional().default("The shop is for sale directly by the seller and there will be no brokerage charged for most of the shops. Also in some cases there will be added advantages in terms of premium locaion or reduced extra charges."),
            ptz3: z.string().optional().default("One can look at very healthy returns in few years as Trehan Iris Broadway Greno West Shops are likely to get very high premium after delivery."),
            ptz4: z.string().optional().default("The shops will be sold on endorsement basis and the documentation for the same is fast and simple. The buyer will get units at very low price as the investors are willing to give few units at above mentioned price."),
            ptz5: z.string().optional().default("Trehan Iris shops with details as provided above are premium shops of the project. The shops in the project are on lease basis and the buyer can not use Trehan Iris shop for self use. Renting, collection of rent and distribution of rent will be done by the builder."),

        }),
});

const priceCollection = defineCollection ({type: "data" ,
    schema: z.object({
        typeid: z.string(),
        desc: z.string(),
        type: z.string(),
        priceNow: z.number()
    }),
});




export const collections = {
    shops: shopsCollection,
    foodcourts: foodCollection,
    anchors: anchorCollection,
    offices: officeCollection,
    shopPrice : priceCollection,
    foodPrice: priceCollection,
    anchorPrice: priceCollection,
    officePrice: priceCollection
}
import {z, defineCollection, reference} from "astro:content"


const shopsCollection = defineCollection({
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
            price: reference ("shopPrice"),
            atrium: z.boolean(),
            corner: z.boolean(),
            status: z.string(),
            byowner: z.boolean(),
            discount: z.number(),
            brokerage: z.boolean(),
            plc: z.string(),
            name: z.string(),
            contactno: z.string(),
            giftvisit: z.string(),
            giftbuy: z.string(),
            info: z.string()
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
            contactno: z.string(),
            giftvisit: z.string(),
            giftbuy: z.string()
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
            contactno: z.string(),
            giftvisit: z.string(),
            giftbuy: z.string()
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
            contactno: z.string(),
            giftvisit: z.string(),
            giftbuy: z.string()
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
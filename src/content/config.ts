import {z, defineCollection} from "astro:content"


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
            price: z.string(),
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
            price: z.string(),
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
            price: z.string(),
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
            price: z.string(),
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




export const collections = {
    shops: shopsCollection,
    foods: foodCollection,
    anchors: anchorCollection,
    offices: officeCollection
}
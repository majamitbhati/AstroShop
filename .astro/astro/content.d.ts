declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"anchors": {
"anchor-shop-ground-floor-trehan-iris-broadway-greno-west-asfs01.md": {
	id: "anchor-shop-ground-floor-trehan-iris-broadway-greno-west-asfs01.md";
  slug: "anchor-shop-ground-floor-trehan-iris-broadway-greno-west-asfs01";
  body: string;
  collection: "anchors";
  data: InferEntrySchema<"anchors">
} & { render(): Render[".md"] };
"anchor-shop-trehan-iris-noida-extension-discount-asfs02.md": {
	id: "anchor-shop-trehan-iris-noida-extension-discount-asfs02.md";
  slug: "anchor-shop-trehan-iris-noida-extension-discount-asfs02";
  body: string;
  collection: "anchors";
  data: InferEntrySchema<"anchors">
} & { render(): Render[".md"] };
"atrium-facing-anchor-shop-trehan-iris-broadway-Noida-asfs03.md": {
	id: "atrium-facing-anchor-shop-trehan-iris-broadway-Noida-asfs03.md";
  slug: "atrium-facing-anchor-shop-trehan-iris-broadway-noida-asfs03";
  body: string;
  collection: "anchors";
  data: InferEntrySchema<"anchors">
} & { render(): Render[".md"] };
"largest-anchor-shop-iris-broadway-Noida-asfs04.md": {
	id: "largest-anchor-shop-iris-broadway-Noida-asfs04.md";
  slug: "largest-anchor-shop-iris-broadway-noida-asfs04";
  body: string;
  collection: "anchors";
  data: InferEntrySchema<"anchors">
} & { render(): Render[".md"] };
"least-priced-anchor-shop-iris-broadway-greno-west-asfs05.md": {
	id: "least-priced-anchor-shop-iris-broadway-greno-west-asfs05.md";
  slug: "least-priced-anchor-shop-iris-broadway-greno-west-asfs05";
  body: string;
  collection: "anchors";
  data: InferEntrySchema<"anchors">
} & { render(): Render[".md"] };
};
"foodcourts": {
"atrium-facing-food-court-shop-trehan-iris-broadway-greno-west-ffs01.md": {
	id: "atrium-facing-food-court-shop-trehan-iris-broadway-greno-west-ffs01.md";
  slug: "atrium-facing-food-court-shop-trehan-iris-broadway-greno-west-ffs01";
  body: string;
  collection: "foodcourts";
  data: InferEntrySchema<"foodcourts">
} & { render(): Render[".md"] };
"discount-food-court-shop-trehan-iris-noida-extension-ffs02.md": {
	id: "discount-food-court-shop-trehan-iris-noida-extension-ffs02.md";
  slug: "discount-food-court-shop-trehan-iris-noida-extension-ffs02";
  body: string;
  collection: "foodcourts";
  data: InferEntrySchema<"foodcourts">
} & { render(): Render[".md"] };
"largest-food-court-shop-trehan-broadway-noida-extension-ffs03.md": {
	id: "largest-food-court-shop-trehan-broadway-noida-extension-ffs03.md";
  slug: "largest-food-court-shop-trehan-broadway-noida-extension-ffs03";
  body: string;
  collection: "foodcourts";
  data: InferEntrySchema<"foodcourts">
} & { render(): Render[".md"] };
"lowest-priced-food-court-shop-trehan-iris-greater-Noida-ffs04.md": {
	id: "lowest-priced-food-court-shop-trehan-iris-greater-Noida-ffs04.md";
  slug: "lowest-priced-food-court-shop-trehan-iris-greater-noida-ffs04";
  body: string;
  collection: "foodcourts";
  data: InferEntrySchema<"foodcourts">
} & { render(): Render[".md"] };
"main-sitting-area-facing-food-court-shop-iris-broadway-greno-west-ffs06.md": {
	id: "main-sitting-area-facing-food-court-shop-iris-broadway-greno-west-ffs06.md";
  slug: "main-sitting-area-facing-food-court-shop-iris-broadway-greno-west-ffs06";
  body: string;
  collection: "foodcourts";
  data: InferEntrySchema<"foodcourts">
} & { render(): Render[".md"] };
"no-column-food-court-shop-iris-broadway-greno-west-ffs05.md": {
	id: "no-column-food-court-shop-iris-broadway-greno-west-ffs05.md";
  slug: "no-column-food-court-shop-iris-broadway-greno-west-ffs05";
  body: string;
  collection: "foodcourts";
  data: InferEntrySchema<"foodcourts">
} & { render(): Render[".md"] };
};
"offices": {
"largest-office-space-trehan-iris-broadway-noida-extension-ofs03.md": {
	id: "largest-office-space-trehan-iris-broadway-noida-extension-ofs03.md";
  slug: "largest-office-space-trehan-iris-broadway-noida-extension-ofs03";
  body: string;
  collection: "offices";
  data: InferEntrySchema<"offices">
} & { render(): Render[".md"] };
"non-plc-office-space-iris-broadway-Noida-ofs01.md": {
	id: "non-plc-office-space-iris-broadway-Noida-ofs01.md";
  slug: "non-plc-office-space-iris-broadway-noida-ofs01";
  body: string;
  collection: "offices";
  data: InferEntrySchema<"offices">
} & { render(): Render[".md"] };
"office-space-top-most-floor-iris-broadway-greno-west-ofs05.md": {
	id: "office-space-top-most-floor-iris-broadway-greno-west-ofs05.md";
  slug: "office-space-top-most-floor-iris-broadway-greno-west-ofs05";
  body: string;
  collection: "offices";
  data: InferEntrySchema<"offices">
} & { render(): Render[".md"] };
"office-space-under-35-lakh-trehan-iris-greater-noida-ofs04.md": {
	id: "office-space-under-35-lakh-trehan-iris-greater-noida-ofs04.md";
  slug: "office-space-under-35-lakh-trehan-iris-greater-noida-ofs04";
  body: string;
  collection: "offices";
  data: InferEntrySchema<"offices">
} & { render(): Render[".md"] };
"resale-anchor-shop-trehan-iris-broadway-greno-west-ofs01.md": {
	id: "resale-anchor-shop-trehan-iris-broadway-greno-west-ofs01.md";
  slug: "resale-anchor-shop-trehan-iris-broadway-greno-west-ofs01";
  body: string;
  collection: "offices";
  data: InferEntrySchema<"offices">
} & { render(): Render[".md"] };
};
"shops": {
"atrium-facing-retail-shop-trehan-iris-broadway-greno-west-sfs02.md": {
	id: "atrium-facing-retail-shop-trehan-iris-broadway-greno-west-sfs02.md";
  slug: "atrium-facing-retail-shop-trehan-iris-broadway-greno-west-sfs02";
  body: string;
  collection: "shops";
  data: InferEntrySchema<"shops">
} & { render(): Render[".md"] };
"best-atrium-shop-trehan-broadway-noida-extension-sfs11.md": {
	id: "best-atrium-shop-trehan-broadway-noida-extension-sfs11.md";
  slug: "best-atrium-shop-trehan-broadway-noida-extension-sfs11";
  body: string;
  collection: "shops";
  data: InferEntrySchema<"shops">
} & { render(): Render[".md"] };
"discount-retail-shop-trehan-noida-extension-sfs03.md": {
	id: "discount-retail-shop-trehan-noida-extension-sfs03.md";
  slug: "discount-retail-shop-trehan-noida-extension-sfs03";
  body: string;
  collection: "shops";
  data: InferEntrySchema<"shops">
} & { render(): Render[".md"] };
"first-floor-atrium-facing-retail-shop-iris-broadway-greater-noida-sfs05.md": {
	id: "first-floor-atrium-facing-retail-shop-iris-broadway-greater-noida-sfs05.md";
  slug: "first-floor-atrium-facing-retail-shop-iris-broadway-greater-noida-sfs05";
  body: string;
  collection: "shops";
  data: InferEntrySchema<"shops">
} & { render(): Render[".md"] };
"first-floor-retail-shop-iris-broadway-noida-extension-sfs04.md": {
	id: "first-floor-retail-shop-iris-broadway-noida-extension-sfs04.md";
  slug: "first-floor-retail-shop-iris-broadway-noida-extension-sfs04";
  body: string;
  collection: "shops";
  data: InferEntrySchema<"shops">
} & { render(): Render[".md"] };
"high-discount-retail-shop-trehan-iris-broadway-noida-sfs09.md": {
	id: "high-discount-retail-shop-trehan-iris-broadway-noida-sfs09.md";
  slug: "high-discount-retail-shop-trehan-iris-broadway-noida-sfs09";
  body: string;
  collection: "shops";
  data: InferEntrySchema<"shops">
} & { render(): Render[".md"] };
"resale-shop-trehan-iris-broadway-greno-west-sfs10.md": {
	id: "resale-shop-trehan-iris-broadway-greno-west-sfs10.md";
  slug: "resale-shop-trehan-iris-broadway-greno-west-sfs10";
  body: string;
  collection: "shops";
  data: InferEntrySchema<"shops">
} & { render(): Render[".md"] };
"retail-shop-under-30-lakh-trehan-iris-greater-noida-sfs06.md": {
	id: "retail-shop-under-30-lakh-trehan-iris-greater-noida-sfs06.md";
  slug: "retail-shop-under-30-lakh-trehan-iris-greater-noida-sfs06";
  body: string;
  collection: "shops";
  data: InferEntrySchema<"shops">
} & { render(): Render[".md"] };
"retail-shop-under-40-lakh-trehan-iris-greater-noida-sfs07.md": {
	id: "retail-shop-under-40-lakh-trehan-iris-greater-noida-sfs07.md";
  slug: "retail-shop-under-40-lakh-trehan-iris-greater-noida-sfs07";
  body: string;
  collection: "shops";
  data: InferEntrySchema<"shops">
} & { render(): Render[".md"] };
"second-floor-retail-shop-iris-trehan-broadway-noida-sfs08.md": {
	id: "second-floor-retail-shop-iris-trehan-broadway-noida-sfs08.md";
  slug: "second-floor-retail-shop-iris-trehan-broadway-noida-sfs08";
  body: string;
  collection: "shops";
  data: InferEntrySchema<"shops">
} & { render(): Render[".md"] };
"shop-for-sale-trehan-iris-noida-280sqft-sfs01.md": {
	id: "shop-for-sale-trehan-iris-noida-280sqft-sfs01.md";
  slug: "shop-for-sale-trehan-iris-noida-280sqft-sfs01";
  body: string;
  collection: "shops";
  data: InferEntrySchema<"shops">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"anchorPrice": {
"FCSL-lockable": {
	id: "FCSL-lockable";
  collection: "anchorPrice";
  data: InferEntrySchema<"anchorPrice">
};
"FFSL-anchor": {
	id: "FFSL-anchor";
  collection: "anchorPrice";
  data: InferEntrySchema<"anchorPrice">
};
"GFSL-lockable": {
	id: "GFSL-lockable";
  collection: "anchorPrice";
  data: InferEntrySchema<"anchorPrice">
};
"LGSL-lockable": {
	id: "LGSL-lockable";
  collection: "anchorPrice";
  data: InferEntrySchema<"anchorPrice">
};
"SFSL-lockable": {
	id: "SFSL-lockable";
  collection: "anchorPrice";
  data: InferEntrySchema<"anchorPrice">
};
};
"foodPrice": {
"TFFC-lockable": {
	id: "TFFC-lockable";
  collection: "foodPrice";
  data: InferEntrySchema<"foodPrice">
};
};
"images": Record<string, {
  id: string;
  collection: "images";
  data: any;
}>;
"officePrice": {
"FCSL-lockable": {
	id: "FCSL-lockable";
  collection: "officePrice";
  data: InferEntrySchema<"officePrice">
};
"FFSL-lockable": {
	id: "FFSL-lockable";
  collection: "officePrice";
  data: InferEntrySchema<"officePrice">
};
"GFSL-lockable": {
	id: "GFSL-lockable";
  collection: "officePrice";
  data: InferEntrySchema<"officePrice">
};
"LGSL-lockable": {
	id: "LGSL-lockable";
  collection: "officePrice";
  data: InferEntrySchema<"officePrice">
};
"SFSL-lockable": {
	id: "SFSL-lockable";
  collection: "officePrice";
  data: InferEntrySchema<"officePrice">
};
};
"shopPrice": {
"FCSL-lockable": {
	id: "FCSL-lockable";
  collection: "shopPrice";
  data: InferEntrySchema<"shopPrice">
};
"FFSL-lockable": {
	id: "FFSL-lockable";
  collection: "shopPrice";
  data: InferEntrySchema<"shopPrice">
};
"GFSL-lockable": {
	id: "GFSL-lockable";
  collection: "shopPrice";
  data: InferEntrySchema<"shopPrice">
};
"LGSL-lockable": {
	id: "LGSL-lockable";
  collection: "shopPrice";
  data: InferEntrySchema<"shopPrice">
};
"SFSL-lockable": {
	id: "SFSL-lockable";
  collection: "shopPrice";
  data: InferEntrySchema<"shopPrice">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}

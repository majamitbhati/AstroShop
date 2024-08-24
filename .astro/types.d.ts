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
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
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
"trehan-iris-anchorshop.md": {
	id: "trehan-iris-anchorshop.md";
  slug: "trehan-iris-anchorshop";
  body: string;
  collection: "anchors";
  data: any
} & { render(): Render[".md"] };
};
"foodcourts": {
"atrium-facing-food-court-shop-trehan-iris-broadway-greno-west-ffs01.md": {
	id: "atrium-facing-food-court-shop-trehan-iris-broadway-greno-west-ffs01.md";
  slug: "atrium-facing-food-court-shop-trehan-iris-broadway-greno-west-ffs01";
  body: string;
  collection: "foodcourts";
  data: any
} & { render(): Render[".md"] };
"discount-food-court-shop-trehan-iris-noida-extension-ffs02.md": {
	id: "discount-food-court-shop-trehan-iris-noida-extension-ffs02.md";
  slug: "discount-food-court-shop-trehan-iris-noida-extension-ffs02";
  body: string;
  collection: "foodcourts";
  data: any
} & { render(): Render[".md"] };
"largest-food-court-shop-trehan-broadway-noida-extension-ffs03.md": {
	id: "largest-food-court-shop-trehan-broadway-noida-extension-ffs03.md";
  slug: "largest-food-court-shop-trehan-broadway-noida-extension-ffs03";
  body: string;
  collection: "foodcourts";
  data: any
} & { render(): Render[".md"] };
"lowest-priced-food-court-shop-trehan-iris-greater-Noida-ffs04.md": {
	id: "lowest-priced-food-court-shop-trehan-iris-greater-Noida-ffs04.md";
  slug: "lowest-priced-food-court-shop-trehan-iris-greater-noida-ffs04";
  body: string;
  collection: "foodcourts";
  data: any
} & { render(): Render[".md"] };
"main-sitting-area-facing-food-court-shop-iris-broadway-greno-west-ffs06.md": {
	id: "main-sitting-area-facing-food-court-shop-iris-broadway-greno-west-ffs06.md";
  slug: "main-sitting-area-facing-food-court-shop-iris-broadway-greno-west-ffs06";
  body: string;
  collection: "foodcourts";
  data: any
} & { render(): Render[".md"] };
"no-column-food-court-shop-iris-broadway-greno-west-ffs05.md": {
	id: "no-column-food-court-shop-iris-broadway-greno-west-ffs05.md";
  slug: "no-column-food-court-shop-iris-broadway-greno-west-ffs05";
  body: string;
  collection: "foodcourts";
  data: any
} & { render(): Render[".md"] };
};
"offices": {
"trehan-iris-officespace.md": {
	id: "trehan-iris-officespace.md";
  slug: "trehan-iris-officespace";
  body: string;
  collection: "offices";
  data: any
} & { render(): Render[".md"] };
};
"shops": {
"atrium-facing-retail-shop-trehan-iris-broadway-greno-west-sfs02.md": {
	id: "atrium-facing-retail-shop-trehan-iris-broadway-greno-west-sfs02.md";
  slug: "atrium-facing-retail-shop-trehan-iris-broadway-greno-west-sfs02";
  body: string;
  collection: "shops";
  data: any
} & { render(): Render[".md"] };
"best-atrium-shop-trehan-broadway-noida-extension-sfs11.md": {
	id: "best-atrium-shop-trehan-broadway-noida-extension-sfs11.md";
  slug: "best-atrium-shop-trehan-broadway-noida-extension-sfs11";
  body: string;
  collection: "shops";
  data: any
} & { render(): Render[".md"] };
"discount-retail-shop-trehan-noida-extension-sfs03.md": {
	id: "discount-retail-shop-trehan-noida-extension-sfs03.md";
  slug: "discount-retail-shop-trehan-noida-extension-sfs03";
  body: string;
  collection: "shops";
  data: any
} & { render(): Render[".md"] };
"first-floor-atrium-facing-retail-shop-iris-broadway-greater-noida-sfs05.md": {
	id: "first-floor-atrium-facing-retail-shop-iris-broadway-greater-noida-sfs05.md";
  slug: "first-floor-atrium-facing-retail-shop-iris-broadway-greater-noida-sfs05";
  body: string;
  collection: "shops";
  data: any
} & { render(): Render[".md"] };
"first-floor-retail-shop-iris-broadway-noida-extension-sfs04.md": {
	id: "first-floor-retail-shop-iris-broadway-noida-extension-sfs04.md";
  slug: "first-floor-retail-shop-iris-broadway-noida-extension-sfs04";
  body: string;
  collection: "shops";
  data: any
} & { render(): Render[".md"] };
"high-discount-retail-shop-trehan-iris-broadway-noida-sfs09.md": {
	id: "high-discount-retail-shop-trehan-iris-broadway-noida-sfs09.md";
  slug: "high-discount-retail-shop-trehan-iris-broadway-noida-sfs09";
  body: string;
  collection: "shops";
  data: any
} & { render(): Render[".md"] };
"resale-shop-trehan-iris-broadway-greno-west-sfs10.md": {
	id: "resale-shop-trehan-iris-broadway-greno-west-sfs10.md";
  slug: "resale-shop-trehan-iris-broadway-greno-west-sfs10";
  body: string;
  collection: "shops";
  data: any
} & { render(): Render[".md"] };
"retail-shop-under-30-lakh-trehan-iris-greater-noida-sfs06.md": {
	id: "retail-shop-under-30-lakh-trehan-iris-greater-noida-sfs06.md";
  slug: "retail-shop-under-30-lakh-trehan-iris-greater-noida-sfs06";
  body: string;
  collection: "shops";
  data: any
} & { render(): Render[".md"] };
"retail-shop-under-40-lakh-trehan-iris-greater-noida-sfs07.md": {
	id: "retail-shop-under-40-lakh-trehan-iris-greater-noida-sfs07.md";
  slug: "retail-shop-under-40-lakh-trehan-iris-greater-noida-sfs07";
  body: string;
  collection: "shops";
  data: any
} & { render(): Render[".md"] };
"second-floor-retail-shop-iris-trehan-broadway-noida-sfs08.md": {
	id: "second-floor-retail-shop-iris-trehan-broadway-noida-sfs08.md";
  slug: "second-floor-retail-shop-iris-trehan-broadway-noida-sfs08";
  body: string;
  collection: "shops";
  data: any
} & { render(): Render[".md"] };
"shop-for-sale-trehan-iris-noida-280sqft-sfs01.md": {
	id: "shop-for-sale-trehan-iris-noida-280sqft-sfs01.md";
  slug: "shop-for-sale-trehan-iris-noida-280sqft-sfs01";
  body: string;
  collection: "shops";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"anchorPrice": {
"FCSL-lockable": {
	id: "FCSL-lockable";
  collection: "anchorPrice";
  data: any
};
"FFSL-lockable": {
	id: "FFSL-lockable";
  collection: "anchorPrice";
  data: any
};
"GFSL-lockable": {
	id: "GFSL-lockable";
  collection: "anchorPrice";
  data: any
};
"LGSL-lockable": {
	id: "LGSL-lockable";
  collection: "anchorPrice";
  data: any
};
"SFSL-lockable": {
	id: "SFSL-lockable";
  collection: "anchorPrice";
  data: any
};
};
"foodPrice": {
"TFFC-lockable": {
	id: "TFFC-lockable";
  collection: "foodPrice";
  data: any
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
  data: any
};
"FFSL-lockable": {
	id: "FFSL-lockable";
  collection: "officePrice";
  data: any
};
"GFSL-lockable": {
	id: "GFSL-lockable";
  collection: "officePrice";
  data: any
};
"LGSL-lockable": {
	id: "LGSL-lockable";
  collection: "officePrice";
  data: any
};
"SFSL-lockable": {
	id: "SFSL-lockable";
  collection: "officePrice";
  data: any
};
};
"shopPrice": {
"FCSL-lockable": {
	id: "FCSL-lockable";
  collection: "shopPrice";
  data: any
};
"FFSL-lockable": {
	id: "FFSL-lockable";
  collection: "shopPrice";
  data: any
};
"GFSL-lockable": {
	id: "GFSL-lockable";
  collection: "shopPrice";
  data: any
};
"LGSL-lockable": {
	id: "LGSL-lockable";
  collection: "shopPrice";
  data: any
};
"SFSL-lockable": {
	id: "SFSL-lockable";
  collection: "shopPrice";
  data: any
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}

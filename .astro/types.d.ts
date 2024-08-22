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
  data: InferEntrySchema<"anchors">
} & { render(): Render[".md"] };
};
"foodcourts": {
"trehan-iris-foodcourts.md": {
	id: "trehan-iris-foodcourts.md";
  slug: "trehan-iris-foodcourts";
  body: string;
  collection: "foodcourts";
  data: InferEntrySchema<"foodcourts">
} & { render(): Render[".md"] };
};
"foods": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "foods";
  data: any;
  render(): Render[".md"];
}>;
"offices": {
"trehan-iris-officespace.md": {
	id: "trehan-iris-officespace.md";
  slug: "trehan-iris-officespace";
  body: string;
  collection: "offices";
  data: InferEntrySchema<"offices">
} & { render(): Render[".md"] };
};
"shops": {
"shop-for-sale-trehan-iris-noida-280.md": {
	id: "shop-for-sale-trehan-iris-noida-280.md";
  slug: "shop-for-sale-trehan-iris-noida-280";
  body: string;
  collection: "shops";
  data: InferEntrySchema<"shops">
} & { render(): Render[".md"] };
"shop-for-sale-trehan-iris-noida.md": {
	id: "shop-for-sale-trehan-iris-noida.md";
  slug: "shop-for-sale-trehan-iris-noida";
  body: string;
  collection: "shops";
  data: InferEntrySchema<"shops">
} & { render(): Render[".md"] };
"shop-in-trehan-iris-noida-best-price-SF63.md": {
	id: "shop-in-trehan-iris-noida-best-price-SF63.md";
  slug: "shop-in-trehan-iris-noida-best-price-sf63";
  body: string;
  collection: "shops";
  data: InferEntrySchema<"shops">
} & { render(): Render[".md"] };
"shop-in-trehan-iris-noida-west-under-40-lacs-SF61.md": {
	id: "shop-in-trehan-iris-noida-west-under-40-lacs-SF61.md";
  slug: "shop-in-trehan-iris-noida-west-under-40-lacs-sf61";
  body: string;
  collection: "shops";
  data: InferEntrySchema<"shops">
} & { render(): Render[".md"] };
"shops-trehan-iris-greno-west-on-discount-SF62.md": {
	id: "shops-trehan-iris-greno-west-on-discount-SF62.md";
  slug: "shops-trehan-iris-greno-west-on-discount-sf62";
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
"FFSA-anchor": {
	id: "FFSA-anchor";
  collection: "anchorPrice";
  data: InferEntrySchema<"anchorPrice">
};
"FFSL-lockable": {
	id: "FFSL-lockable";
  collection: "anchorPrice";
  data: InferEntrySchema<"anchorPrice">
};
"GFSA-anchor": {
	id: "GFSA-anchor";
  collection: "anchorPrice";
  data: InferEntrySchema<"anchorPrice">
};
"GFSL-lockable": {
	id: "GFSL-lockable";
  collection: "anchorPrice";
  data: InferEntrySchema<"anchorPrice">
};
"LGSA-anchor": {
	id: "LGSA-anchor";
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
"FCSL-lockable": {
	id: "FCSL-lockable";
  collection: "foodPrice";
  data: InferEntrySchema<"foodPrice">
};
"FFSA-anchor": {
	id: "FFSA-anchor";
  collection: "foodPrice";
  data: InferEntrySchema<"foodPrice">
};
"FFSL-lockable": {
	id: "FFSL-lockable";
  collection: "foodPrice";
  data: InferEntrySchema<"foodPrice">
};
"GFSA-anchor": {
	id: "GFSA-anchor";
  collection: "foodPrice";
  data: InferEntrySchema<"foodPrice">
};
"GFSL-lockable": {
	id: "GFSL-lockable";
  collection: "foodPrice";
  data: InferEntrySchema<"foodPrice">
};
"LGSA-anchor": {
	id: "LGSA-anchor";
  collection: "foodPrice";
  data: InferEntrySchema<"foodPrice">
};
"LGSL-lockable": {
	id: "LGSL-lockable";
  collection: "foodPrice";
  data: InferEntrySchema<"foodPrice">
};
"SFSL-lockable": {
	id: "SFSL-lockable";
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
"FFSA-anchor": {
	id: "FFSA-anchor";
  collection: "officePrice";
  data: InferEntrySchema<"officePrice">
};
"FFSL-lockable": {
	id: "FFSL-lockable";
  collection: "officePrice";
  data: InferEntrySchema<"officePrice">
};
"GFSA-anchor": {
	id: "GFSA-anchor";
  collection: "officePrice";
  data: InferEntrySchema<"officePrice">
};
"GFSL-lockable": {
	id: "GFSL-lockable";
  collection: "officePrice";
  data: InferEntrySchema<"officePrice">
};
"LGSA-anchor": {
	id: "LGSA-anchor";
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
"FFSA-anchor": {
	id: "FFSA-anchor";
  collection: "shopPrice";
  data: InferEntrySchema<"shopPrice">
};
"FFSL-lockable": {
	id: "FFSL-lockable";
  collection: "shopPrice";
  data: InferEntrySchema<"shopPrice">
};
"GFSA-anchor": {
	id: "GFSA-anchor";
  collection: "shopPrice";
  data: InferEntrySchema<"shopPrice">
};
"GFSL-lockable": {
	id: "GFSL-lockable";
  collection: "shopPrice";
  data: InferEntrySchema<"shopPrice">
};
"LGSA-anchor": {
	id: "LGSA-anchor";
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

	export type ContentConfig = typeof import("./../src/content/config.js");
}

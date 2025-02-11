// -- config
import DefaultSchema from "@configs/schema";

interface SchemaDynamicData {
  page?: string;
}

interface SchemaDynamicReturn {
  webpage: {
    url: string;
    name: string;
  };
}

// -- schemaDynamic
const schemaDynamic = (data: SchemaDynamicData): SchemaDynamicReturn => {
  return {
    webpage: {
      url: DefaultSchema.webpage.url + (data?.page ? data.page.toLowerCase() : ""),
      name: data?.page
        ? data.page + " | " + DefaultSchema.webpage.name
        : DefaultSchema.webpage.name,
    },
  };
};

export default schemaDynamic;
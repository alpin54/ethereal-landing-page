// -- config
import DefaultSchema from "@configs/schema";

// -- interface
import { ISchemaDynamicData, ISchemaDynamicResult } from "./type";

// -- schemaDynamic
const schemaDynamic = (data: ISchemaDynamicData): ISchemaDynamicResult => {
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
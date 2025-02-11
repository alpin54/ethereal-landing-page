// -- utils
import SchemaDefault from "@utils/schema/default";
import schemaDynamic from "@utils/schema/dynamic";

// -- interface
interface SchemaType {
  dynamic: (data: Record<string, unknown>) => unknown;
}

// -- Schema
const Schema: SchemaType = (() => {
  return {
    dynamic: schemaDynamic,
  };
})();

export { SchemaDefault };
export default Schema;
// -- config
import DefaultSchema from "@configs/schema";

// -- interface
import { IDefaultSchemaType } from "@configs/schema/type";

const schema: IDefaultSchemaType = DefaultSchema;

const SchemaDefault: React.FC = () => {
	return (
		<>
			{/* Schema Organization */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": schema.organization.context,
						"@id": schema.organization.id,
						"@type": schema.organization.type,
						name: schema.organization.name,
						url: schema.organization.url,
						logo: schema.organization.logo,
						contactPoint: schema.organization.contactPoint,
						sameAs: schema.organization.sameAs,
					}),
				}}
			></script>

			{/* Schema Website */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": schema.website.context,
						"@id": schema.website.id,
						"@type": schema.website.type,
						url: schema.website.url,
						name: schema.website.name,
					}),
				}}
			></script>

			{/* Schema WebPage */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": schema.webpage.context,
						"@id": schema.webpage.id,
						"@type": schema.webpage.type,
						url: schema.webpage.url,
						name: schema.webpage.name,
					}),
				}}
			></script>
		</>
	);
};

export default SchemaDefault;

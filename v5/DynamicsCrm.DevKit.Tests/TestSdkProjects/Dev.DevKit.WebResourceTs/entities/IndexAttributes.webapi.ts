/**
 * IndexAttributes.webapi.ts - IndexAttributes WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * IndexAttributes WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IIndexAttributesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IIndexAttributesApi, 'FormattedValue'>]: string };
	/** Unique identifier of the index attribute */
	IndexAttributeId: DevKit.Guid | null;
	/** Unique identifier of the entity index */
	IndexId: DevKit.Guid | null;
	/** The record id of this index attribute. */
	readonly RecordId: number | null;
	/** The version number of this index attribute. */
	readonly VersionNumber: number | null;
}

const IndexAttributesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	IndexAttributeId: { logicalName: 'indexattributeid' },
	IndexId: { logicalName: 'indexid' },
	RecordId: { logicalName: 'recordid', readOnly: true, type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * IndexAttributes WebApi class for early-bound style coding
 * Usage: const indexAttributes = new IndexAttributesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class IndexAttributesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IIndexAttributesApi>(entity, 'indexattributes', 'indexattributes', IndexAttributesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface IndexAttributesApi extends IIndexAttributesApi { }

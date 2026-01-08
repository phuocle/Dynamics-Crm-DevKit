/**
 * StringMap.webapi.ts - StringMap WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for StringMap
 * All fields return string representation of their values
 */
export interface IStringMapFormattedValue {
	readonly AttributeName: string;
	readonly AttributeValue: string;
	readonly DisplayOrder: string;
	readonly LangId: string;
	readonly OrganizationId: string;
	readonly StringMapId: string;
	readonly Value: string;
	readonly VersionNumber: string;
}

/**
 * StringMap WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IStringMapApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IStringMapFormattedValue;
	readonly AttributeName: string | null;
	readonly AttributeValue: number | null;
	DisplayOrder: number | null;
	readonly LangId: number | null;
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier of the string map. */
	StringMapId: DevKit.Guid | null;
	Value: string | null;
	readonly VersionNumber: number | null;
}

const StringMapFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AttributeName: { logicalName: 'attributename', readOnly: true },
	AttributeValue: { logicalName: 'attributevalue', readOnly: true, type: 'Integer' },
	DisplayOrder: { logicalName: 'displayorder', type: 'Integer' },
	LangId: { logicalName: 'langid', readOnly: true, type: 'Integer' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	StringMapId: { logicalName: 'stringmapid' },
	Value: { logicalName: 'value' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * StringMap WebApi class for early-bound style coding
 * Usage: const stringMap = new StringMapApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class StringMapApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IStringMapApi>(entity, 'stringmap', 'stringmaps', StringMapFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface StringMapApi extends IStringMapApi { }

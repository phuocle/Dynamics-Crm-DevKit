/**
 * AttributePicklistValue.webapi.ts - AttributePicklistValue WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for AttributePicklistValue
 * All fields return string representation of their values
 */
export interface IAttributePicklistValueFormattedValue {
	readonly AttributePicklistValueId: string;
	readonly ComponentState: string;
	readonly IsHidden: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly SolutionId: string;
	readonly VersionNumber: string;
}

/**
 * AttributePicklistValue WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAttributePicklistValueApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IAttributePicklistValueFormattedValue;
	/** Unique identifier of the AttributePicklistValue */
	AttributePicklistValueId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Hides or shows the AttributePicklistValue */
	IsHidden: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** The version number of this attribute picklist value. */
	readonly VersionNumber: number | null;
}

const AttributePicklistValueFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AttributePicklistValueId: { logicalName: 'attributepicklistvalueid' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IsHidden: { logicalName: 'ishidden', type: 'Boolean' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * AttributePicklistValue WebApi class for early-bound style coding
 * Usage: const attributePicklistValue = new AttributePicklistValueApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AttributePicklistValueApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAttributePicklistValueApi>(entity, 'attributepicklistvalue', 'AttributePicklistValues', AttributePicklistValueFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AttributePicklistValueApi extends IAttributePicklistValueApi { }

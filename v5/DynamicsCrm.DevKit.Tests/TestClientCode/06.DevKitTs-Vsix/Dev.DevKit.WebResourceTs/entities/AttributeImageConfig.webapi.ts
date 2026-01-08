/**
 * AttributeImageConfig.webapi.ts - AttributeImageConfig WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for AttributeImageConfig
 * All fields return string representation of their values
 */
export interface IAttributeImageConfigFormattedValue {
	readonly AttributeImageConfigId: string;
	readonly AttributeLogicalName: string;
	readonly CanStoreFullImage: string;
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly ParentEntityLogicalName: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * AttributeImageConfig WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAttributeImageConfigApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IAttributeImageConfigFormattedValue;
	/** Unique identifier for entity instances */
	AttributeImageConfigId: DevKit.Guid | null;
	/** Logical Name of Image Attribute */
	AttributeLogicalName: string | null;
	/** Indicates if an image attribute can store full image */
	CanStoreFullImage: boolean | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Parent Entity Logical Name */
	ParentEntityLogicalName: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Version number of Image Attribute Configuration. */
	readonly VersionNumber: number | null;
}

const AttributeImageConfigFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AttributeImageConfigId: { logicalName: 'attributeimageconfigid' },
	AttributeLogicalName: { logicalName: 'attributelogicalname' },
	CanStoreFullImage: { logicalName: 'canstorefullimage', type: 'Boolean' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ParentEntityLogicalName: { logicalName: 'parententitylogicalname' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * AttributeImageConfig WebApi class for early-bound style coding
 * Usage: const attributeImageConfig = new AttributeImageConfigApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AttributeImageConfigApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAttributeImageConfigApi>(entity, 'attributeimageconfig', 'attributeimageconfigs', AttributeImageConfigFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AttributeImageConfigApi extends IAttributeImageConfigApi { }

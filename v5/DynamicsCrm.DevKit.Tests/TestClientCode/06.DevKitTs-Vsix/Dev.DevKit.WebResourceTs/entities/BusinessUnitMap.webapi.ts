/**
 * BusinessUnitMap.webapi.ts - BusinessUnitMap WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for BusinessUnitMap
 * All fields return string representation of their values
 */
export interface IBusinessUnitMapFormattedValue {
	readonly BusinessId: string;
	readonly BusinessUnitMapId: string;
	readonly SubBusinessId: string;
	readonly VersionNumber: string;
}

/**
 * BusinessUnitMap WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IBusinessUnitMapApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IBusinessUnitMapFormattedValue;
	BusinessId: DevKit.Guid | null;
	/** Unique identifier of the business unit. */
	BusinessUnitMapId: DevKit.Guid | null;
	SubBusinessId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const BusinessUnitMapFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BusinessId: { logicalName: 'businessid' },
	BusinessUnitMapId: { logicalName: 'businessunitmapid' },
	SubBusinessId: { logicalName: 'subbusinessid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * BusinessUnitMap WebApi class for early-bound style coding
 * Usage: const businessUnitMap = new BusinessUnitMapApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class BusinessUnitMapApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IBusinessUnitMapApi>(entity, 'businessunitmap', 'businessunitmaps', BusinessUnitMapFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface BusinessUnitMapApi extends IBusinessUnitMapApi { }

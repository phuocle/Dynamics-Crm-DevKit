/**
 * PrincipalObjectAccess.webapi.ts - PrincipalObjectAccess WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * PrincipalObjectAccess WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPrincipalObjectAccessApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPrincipalObjectAccessApi, 'FormattedValue'>]: string };
	AccessRightsMask: number | null;
	ChangedOn_UtcDateOnly: Date | null;
	InheritedAccessRightsMask: number | null;
	readonly ObjectId: DevKit.Guid | null;
	readonly PrincipalId: DevKit.Guid | null;
	/** Unique identifier of the principal object access. */
	PrincipalObjectAccessId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
}

const PrincipalObjectAccessFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AccessRightsMask: { logicalName: 'accessrightsmask', type: 'Integer' },
	ChangedOn_UtcDateOnly: { logicalName: 'changedon', type: 'DateTime' },
	InheritedAccessRightsMask: { logicalName: 'inheritedaccessrightsmask', type: 'Integer' },
	ObjectId: { logicalName: 'objectid', readOnly: true },
	PrincipalId: { logicalName: 'principalid', readOnly: true },
	PrincipalObjectAccessId: { logicalName: 'principalobjectaccessid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * PrincipalObjectAccess WebApi class for early-bound style coding
 * Usage: const principalObjectAccess = new PrincipalObjectAccessApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PrincipalObjectAccessApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPrincipalObjectAccessApi>(entity, 'principalobjectaccess', '', PrincipalObjectAccessFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PrincipalObjectAccessApi extends IPrincipalObjectAccessApi { }

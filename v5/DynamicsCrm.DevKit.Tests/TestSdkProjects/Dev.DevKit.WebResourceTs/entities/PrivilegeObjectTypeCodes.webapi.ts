/**
 * PrivilegeObjectTypeCodes.webapi.ts - PrivilegeObjectTypeCodes WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * PrivilegeObjectTypeCodes WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPrivilegeObjectTypeCodesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPrivilegeObjectTypeCodesApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** For internal use only. */
	PrivilegeId: DevKit.Guid | null;
	/** For internal use only. */
	PrivilegeObjectTypeCodeId: DevKit.Guid | null;
	/** Unique identifier of the PrivlegeObjectTypeCode used when synchronizing customizations for the Microsoft Dynamics CRM client for Outlook */
	PrivilegeObjectTypeCodeRowId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const PrivilegeObjectTypeCodesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PrivilegeId: { schemaName: 'PrivilegeId', logicalName: '_privilegeid_value', entityCollectionName: 'privileges', entityLogicalName: 'privilege' },
	PrivilegeObjectTypeCodeId: { logicalName: 'privilegeobjecttypecodeid' },
	PrivilegeObjectTypeCodeRowId: { logicalName: 'privilegeobjecttypecoderowid' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * PrivilegeObjectTypeCodes WebApi class for early-bound style coding
 * Usage: const privilegeObjectTypeCodes = new PrivilegeObjectTypeCodesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PrivilegeObjectTypeCodesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPrivilegeObjectTypeCodesApi>(entity, 'privilegeobjecttypecodes', 'privilegeobjecttypecodeses', PrivilegeObjectTypeCodesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PrivilegeObjectTypeCodesApi extends IPrivilegeObjectTypeCodesApi { }

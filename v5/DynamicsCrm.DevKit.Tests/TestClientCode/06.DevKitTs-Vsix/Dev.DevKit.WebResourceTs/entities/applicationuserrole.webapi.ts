/**
 * applicationuserrole.webapi.ts - applicationuserrole WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for applicationuserrole
 * All fields return string representation of their values
 */
export interface IapplicationuserroleFormattedValue {
	readonly applicationuserid: string;
	readonly applicationuserroleId: string;
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly roleid: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * applicationuserrole WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IapplicationuserroleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IapplicationuserroleFormattedValue;
	readonly applicationuserid: DevKit.Guid | null;
	readonly applicationuserroleId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	readonly roleid: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const applicationuserroleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	applicationuserid: { logicalName: 'applicationuserid', readOnly: true },
	applicationuserroleId: { logicalName: 'applicationuserroleid', readOnly: true },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	roleid: { logicalName: 'roleid', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * applicationuserrole WebApi class for early-bound style coding
 * Usage: const applicationuserrole = new applicationuserroleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class applicationuserroleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IapplicationuserroleApi>(entity, 'applicationuserrole', '', applicationuserroleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface applicationuserroleApi extends IapplicationuserroleApi { }

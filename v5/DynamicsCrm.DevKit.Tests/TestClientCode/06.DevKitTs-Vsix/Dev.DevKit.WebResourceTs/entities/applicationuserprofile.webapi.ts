/**
 * applicationuserprofile.webapi.ts - applicationuserprofile WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for applicationuserprofile
 * All fields return string representation of their values
 */
export interface IapplicationuserprofileFormattedValue {
	readonly applicationuserid: string;
	readonly applicationuserprofileId: string;
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly fieldsecurityprofileid: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * applicationuserprofile WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IapplicationuserprofileApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IapplicationuserprofileFormattedValue;
	readonly applicationuserid: DevKit.Guid | null;
	readonly applicationuserprofileId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	readonly fieldsecurityprofileid: DevKit.Guid | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const applicationuserprofileFieldConfig: DevKit.IWebApiFieldConfigMap = {
	applicationuserid: { logicalName: 'applicationuserid', readOnly: true },
	applicationuserprofileId: { logicalName: 'applicationuserprofileid', readOnly: true },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	fieldsecurityprofileid: { logicalName: 'fieldsecurityprofileid', readOnly: true },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * applicationuserprofile WebApi class for early-bound style coding
 * Usage: const applicationuserprofile = new applicationuserprofileApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class applicationuserprofileApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IapplicationuserprofileApi>(entity, 'applicationuserprofile', '', applicationuserprofileFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface applicationuserprofileApi extends IapplicationuserprofileApi { }

/**
 * msdyn_aiconfiguration_documenttemplate.webapi.ts - msdyn_aiconfiguration_documenttemplate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_aiconfiguration_documenttemplate
 * All fields return string representation of their values
 */
export interface Imsdyn_aiconfiguration_documenttemplateFormattedValue {
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly msdyn_aiconfiguration_documenttemplateId: string;
	readonly msdyn_aiconfigurationid: string;
	readonly msdyn_aidocumenttemplateid: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_aiconfiguration_documenttemplate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_aiconfiguration_documenttemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_aiconfiguration_documenttemplateFormattedValue;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	readonly msdyn_aiconfiguration_documenttemplateId: DevKit.Guid | null;
	readonly msdyn_aiconfigurationid: DevKit.Guid | null;
	readonly msdyn_aidocumenttemplateid: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const msdyn_aiconfiguration_documenttemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	msdyn_aiconfiguration_documenttemplateId: { logicalName: 'msdyn_aiconfiguration_documenttemplateid', readOnly: true },
	msdyn_aiconfigurationid: { logicalName: 'msdyn_aiconfigurationid', readOnly: true },
	msdyn_aidocumenttemplateid: { logicalName: 'msdyn_aidocumenttemplateid', readOnly: true },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_aiconfiguration_documenttemplate WebApi class for early-bound style coding
 * Usage: const msdyn_aiconfiguration_documenttemplate = new msdyn_aiconfiguration_documenttemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_aiconfiguration_documenttemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_aiconfiguration_documenttemplateApi>(entity, 'msdyn_aiconfiguration_documenttemplate', '', msdyn_aiconfiguration_documenttemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_aiconfiguration_documenttemplateApi extends Imsdyn_aiconfiguration_documenttemplateApi { }

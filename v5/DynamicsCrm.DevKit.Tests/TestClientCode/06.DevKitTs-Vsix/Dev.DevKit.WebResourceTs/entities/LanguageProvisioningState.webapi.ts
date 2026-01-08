/**
 * LanguageProvisioningState.webapi.ts - LanguageProvisioningState WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for LanguageProvisioningState
 * All fields return string representation of their values
 */
export interface ILanguageProvisioningStateFormattedValue {
	readonly ApplicationVersion: string;
	readonly LanguageId: string;
	readonly LanguageProvisioningStateId: string;
	readonly ProvisioningStage: string;
	readonly SolutionFileVersion: string;
	readonly SolutionUniqueName: string;
}

/**
 * LanguageProvisioningState WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ILanguageProvisioningStateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ILanguageProvisioningStateFormattedValue;
	/** Application Version */
	ApplicationVersion: string | null;
	/** Language Id */
	LanguageId: number | null;
	/** Unique identifier for entity instances */
	LanguageProvisioningStateId: DevKit.Guid | null;
	/** Provisioning Stage */
	ProvisioningStage: number | null;
	/** Solution File Version */
	SolutionFileVersion: string | null;
	/** Solution Unique Name */
	SolutionUniqueName: string | null;
}

const LanguageProvisioningStateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ApplicationVersion: { logicalName: 'applicationversion' },
	LanguageId: { logicalName: 'languageid', type: 'Integer' },
	LanguageProvisioningStateId: { logicalName: 'languageprovisioningstateid' },
	ProvisioningStage: { logicalName: 'provisioningstage', type: 'Integer' },
	SolutionFileVersion: { logicalName: 'solutionfileversion' },
	SolutionUniqueName: { logicalName: 'solutionuniquename' },
};

/**
 * LanguageProvisioningState WebApi class for early-bound style coding
 * Usage: const languageProvisioningState = new LanguageProvisioningStateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class LanguageProvisioningStateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ILanguageProvisioningStateApi>(entity, 'languageprovisioningstate', 'languageprovisioningstates', LanguageProvisioningStateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface LanguageProvisioningStateApi extends ILanguageProvisioningStateApi { }

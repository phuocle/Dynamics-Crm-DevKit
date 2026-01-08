/**
 * package_solution.webapi.ts - package_solution WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for package_solution
 * All fields return string representation of their values
 */
export interface Ipackage_solutionFormattedValue {
	readonly package_solutionId: string;
	readonly packageid: string;
	readonly solutionid: string;
	readonly VersionNumber: string;
}

/**
 * package_solution WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Ipackage_solutionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Ipackage_solutionFormattedValue;
	readonly package_solutionId: DevKit.Guid | null;
	readonly packageid: DevKit.Guid | null;
	readonly solutionid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const package_solutionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	package_solutionId: { logicalName: 'package_solutionid', readOnly: true },
	packageid: { logicalName: 'packageid', readOnly: true },
	solutionid: { logicalName: 'solutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * package_solution WebApi class for early-bound style coding
 * Usage: const package_solution = new package_solutionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class package_solutionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Ipackage_solutionApi>(entity, 'package_solution', '', package_solutionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface package_solutionApi extends Ipackage_solutionApi { }

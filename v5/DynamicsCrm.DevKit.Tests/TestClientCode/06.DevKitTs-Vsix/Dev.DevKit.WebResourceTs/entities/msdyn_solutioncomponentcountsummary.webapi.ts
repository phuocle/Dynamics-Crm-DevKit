/**
 * msdyn_solutioncomponentcountsummary.webapi.ts - msdyn_solutioncomponentcountsummary WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_solutioncomponentcountsummary
 * All fields return string representation of their values
 */
export interface Imsdyn_solutioncomponentcountsummaryFormattedValue {
	readonly msdyn_componentlogicalname: string;
	readonly msdyn_componenttype: string;
	readonly msdyn_name: string;
	readonly msdyn_primaryentityname: string;
	readonly msdyn_solutioncomponentcountsummaryId: string;
	readonly msdyn_solutionid: string;
	readonly msdyn_subtype: string;
	readonly msdyn_total: string;
	readonly msdyn_workflowcategory: string;
	readonly OrganizationId: string;
}

/**
 * msdyn_solutioncomponentcountsummary WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_solutioncomponentcountsummaryApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_solutioncomponentcountsummaryFormattedValue;
	/** Component Logical Name */
	msdyn_componentlogicalname: string | null;
	/** msdyn_componenttype */
	msdyn_componenttype: number | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** Primary Entity Name */
	msdyn_primaryentityname: string | null;
	/** Unique identifier for entity instances */
	msdyn_solutioncomponentcountsummaryId: DevKit.Guid | null;
	/** msdyn_solutionid */
	msdyn_solutionid: string | null;
	/** msdyn_subtype */
	msdyn_subtype: string | null;
	/** msdyn_total */
	msdyn_total: number | null;
	/** msdyn_workflowcategory */
	msdyn_workflowcategory: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
}

const msdyn_solutioncomponentcountsummaryFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_componentlogicalname: { logicalName: 'msdyn_componentlogicalname' },
	msdyn_componenttype: { logicalName: 'msdyn_componenttype', type: 'Number' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_primaryentityname: { logicalName: 'msdyn_primaryentityname' },
	msdyn_solutioncomponentcountsummaryId: { logicalName: 'msdyn_solutioncomponentcountsummaryid' },
	msdyn_solutionid: { logicalName: 'msdyn_solutionid' },
	msdyn_subtype: { logicalName: 'msdyn_subtype' },
	msdyn_total: { logicalName: 'msdyn_total', type: 'Number' },
	msdyn_workflowcategory: { logicalName: 'msdyn_workflowcategory' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
};

/**
 * msdyn_solutioncomponentcountsummary WebApi class for early-bound style coding
 * Usage: const msdyn_solutioncomponentcountsummary = new msdyn_solutioncomponentcountsummaryApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_solutioncomponentcountsummaryApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_solutioncomponentcountsummaryApi>(entity, 'msdyn_solutioncomponentcountsummary', 'msdyn_solutioncomponentcountsummaries', msdyn_solutioncomponentcountsummaryFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_solutioncomponentcountsummaryApi extends Imsdyn_solutioncomponentcountsummaryApi { }

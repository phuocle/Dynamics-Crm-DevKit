/**
 * msdyn_flow_basicapprovalmodel_team.webapi.ts - msdyn_flow_basicapprovalmodel_team WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_flow_basicapprovalmodel_team WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_flow_basicapprovalmodel_teamApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_flow_basicapprovalmodel_teamApi, 'FormattedValue'>]: string };
	readonly msdyn_flow_basicapprovalmodel_teamId: DevKit.Guid | null;
	readonly msdyn_flow_basicapprovalmodelid: DevKit.Guid | null;
	readonly teamid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const msdyn_flow_basicapprovalmodel_teamFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_flow_basicapprovalmodel_teamId: { logicalName: 'msdyn_flow_basicapprovalmodel_teamid', readOnly: true },
	msdyn_flow_basicapprovalmodelid: { logicalName: 'msdyn_flow_basicapprovalmodelid', readOnly: true },
	teamid: { logicalName: 'teamid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_flow_basicapprovalmodel_team WebApi class for early-bound style coding
 * Usage: const msdyn_flow_basicapprovalmodel_team = new msdyn_flow_basicapprovalmodel_teamApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_flow_basicapprovalmodel_teamApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_flow_basicapprovalmodel_teamApi>(entity, 'msdyn_flow_basicapprovalmodel_team', '', msdyn_flow_basicapprovalmodel_teamFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_flow_basicapprovalmodel_teamApi extends Imsdyn_flow_basicapprovalmodel_teamApi { }

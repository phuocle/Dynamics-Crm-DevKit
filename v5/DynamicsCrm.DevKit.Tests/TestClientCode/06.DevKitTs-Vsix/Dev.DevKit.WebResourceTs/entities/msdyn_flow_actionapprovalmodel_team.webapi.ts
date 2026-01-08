/**
 * msdyn_flow_actionapprovalmodel_team.webapi.ts - msdyn_flow_actionapprovalmodel_team WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_flow_actionapprovalmodel_team
 * All fields return string representation of their values
 */
export interface Imsdyn_flow_actionapprovalmodel_teamFormattedValue {
	readonly msdyn_flow_actionapprovalmodel_teamId: string;
	readonly msdyn_flow_actionapprovalmodelid: string;
	readonly teamid: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_flow_actionapprovalmodel_team WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_flow_actionapprovalmodel_teamApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_flow_actionapprovalmodel_teamFormattedValue;
	readonly msdyn_flow_actionapprovalmodel_teamId: DevKit.Guid | null;
	readonly msdyn_flow_actionapprovalmodelid: DevKit.Guid | null;
	readonly teamid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const msdyn_flow_actionapprovalmodel_teamFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_flow_actionapprovalmodel_teamId: { logicalName: 'msdyn_flow_actionapprovalmodel_teamid', readOnly: true },
	msdyn_flow_actionapprovalmodelid: { logicalName: 'msdyn_flow_actionapprovalmodelid', readOnly: true },
	teamid: { logicalName: 'teamid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_flow_actionapprovalmodel_team WebApi class for early-bound style coding
 * Usage: const msdyn_flow_actionapprovalmodel_team = new msdyn_flow_actionapprovalmodel_teamApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_flow_actionapprovalmodel_teamApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_flow_actionapprovalmodel_teamApi>(entity, 'msdyn_flow_actionapprovalmodel_team', '', msdyn_flow_actionapprovalmodel_teamFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_flow_actionapprovalmodel_teamApi extends Imsdyn_flow_actionapprovalmodel_teamApi { }

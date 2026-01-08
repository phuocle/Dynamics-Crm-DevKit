/**
 * msdyn_flow_awaitallmodel_team.webapi.ts - msdyn_flow_awaitallmodel_team WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_flow_awaitallmodel_team WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_flow_awaitallmodel_teamApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_flow_awaitallmodel_teamApi, 'FormattedValue'>]: string };
	readonly msdyn_flow_awaitallapprovalmodelid: DevKit.Guid | null;
	readonly msdyn_flow_awaitallmodel_teamId: DevKit.Guid | null;
	readonly teamid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const msdyn_flow_awaitallmodel_teamFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_flow_awaitallapprovalmodelid: { logicalName: 'msdyn_flow_awaitallapprovalmodelid', readOnly: true },
	msdyn_flow_awaitallmodel_teamId: { logicalName: 'msdyn_flow_awaitallmodel_teamid', readOnly: true },
	teamid: { logicalName: 'teamid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_flow_awaitallmodel_team WebApi class for early-bound style coding
 * Usage: const msdyn_flow_awaitallmodel_team = new msdyn_flow_awaitallmodel_teamApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_flow_awaitallmodel_teamApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_flow_awaitallmodel_teamApi>(entity, 'msdyn_flow_awaitallmodel_team', '', msdyn_flow_awaitallmodel_teamFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_flow_awaitallmodel_teamApi extends Imsdyn_flow_awaitallmodel_teamApi { }

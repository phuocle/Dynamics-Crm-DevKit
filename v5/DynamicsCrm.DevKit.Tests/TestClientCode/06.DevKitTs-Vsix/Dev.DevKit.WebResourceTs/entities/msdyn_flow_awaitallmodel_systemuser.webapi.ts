/**
 * msdyn_flow_awaitallmodel_systemuser.webapi.ts - msdyn_flow_awaitallmodel_systemuser WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_flow_awaitallmodel_systemuser WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_flow_awaitallmodel_systemuserApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_flow_awaitallmodel_systemuserApi, 'FormattedValue'>]: string };
	readonly msdyn_flow_awaitallapprovalmodelid: DevKit.Guid | null;
	readonly msdyn_flow_awaitallmodel_systemuserId: DevKit.Guid | null;
	readonly systemuserid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const msdyn_flow_awaitallmodel_systemuserFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_flow_awaitallapprovalmodelid: { logicalName: 'msdyn_flow_awaitallapprovalmodelid', readOnly: true },
	msdyn_flow_awaitallmodel_systemuserId: { logicalName: 'msdyn_flow_awaitallmodel_systemuserid', readOnly: true },
	systemuserid: { logicalName: 'systemuserid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_flow_awaitallmodel_systemuser WebApi class for early-bound style coding
 * Usage: const msdyn_flow_awaitallmodel_systemuser = new msdyn_flow_awaitallmodel_systemuserApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_flow_awaitallmodel_systemuserApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_flow_awaitallmodel_systemuserApi>(entity, 'msdyn_flow_awaitallmodel_systemuser', '', msdyn_flow_awaitallmodel_systemuserFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_flow_awaitallmodel_systemuserApi extends Imsdyn_flow_awaitallmodel_systemuserApi { }

/**
 * msdyn_flow_actionapprovalmodel_systemuser.webapi.ts - msdyn_flow_actionapprovalmodel_systemuser WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_flow_actionapprovalmodel_systemuser
 * All fields return string representation of their values
 */
export interface Imsdyn_flow_actionapprovalmodel_systemuserFormattedValue {
	readonly msdyn_flow_actionapprovalmodel_systemuserId: string;
	readonly msdyn_flow_actionapprovalmodelid: string;
	readonly systemuserid: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_flow_actionapprovalmodel_systemuser WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_flow_actionapprovalmodel_systemuserApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_flow_actionapprovalmodel_systemuserFormattedValue;
	readonly msdyn_flow_actionapprovalmodel_systemuserId: DevKit.Guid | null;
	readonly msdyn_flow_actionapprovalmodelid: DevKit.Guid | null;
	readonly systemuserid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const msdyn_flow_actionapprovalmodel_systemuserFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_flow_actionapprovalmodel_systemuserId: { logicalName: 'msdyn_flow_actionapprovalmodel_systemuserid', readOnly: true },
	msdyn_flow_actionapprovalmodelid: { logicalName: 'msdyn_flow_actionapprovalmodelid', readOnly: true },
	systemuserid: { logicalName: 'systemuserid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_flow_actionapprovalmodel_systemuser WebApi class for early-bound style coding
 * Usage: const msdyn_flow_actionapprovalmodel_systemuser = new msdyn_flow_actionapprovalmodel_systemuserApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_flow_actionapprovalmodel_systemuserApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_flow_actionapprovalmodel_systemuserApi>(entity, 'msdyn_flow_actionapprovalmodel_systemuser', '', msdyn_flow_actionapprovalmodel_systemuserFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_flow_actionapprovalmodel_systemuserApi extends Imsdyn_flow_actionapprovalmodel_systemuserApi { }

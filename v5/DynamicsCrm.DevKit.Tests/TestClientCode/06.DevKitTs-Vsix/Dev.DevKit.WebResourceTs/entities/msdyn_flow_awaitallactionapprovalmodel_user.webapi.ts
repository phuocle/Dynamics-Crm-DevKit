/**
 * msdyn_flow_awaitallactionapprovalmodel_user.webapi.ts - msdyn_flow_awaitallactionapprovalmodel_user WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_flow_awaitallactionapprovalmodel_user
 * All fields return string representation of their values
 */
export interface Imsdyn_flow_awaitallactionapprovalmodel_userFormattedValue {
	readonly msdyn_flow_awaitallactionapprovalmodel_userId: string;
	readonly msdyn_flow_awaitallactionapprovalmodelid: string;
	readonly systemuserid: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_flow_awaitallactionapprovalmodel_user WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_flow_awaitallactionapprovalmodel_userApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_flow_awaitallactionapprovalmodel_userFormattedValue;
	readonly msdyn_flow_awaitallactionapprovalmodel_userId: DevKit.Guid | null;
	readonly msdyn_flow_awaitallactionapprovalmodelid: DevKit.Guid | null;
	readonly systemuserid: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const msdyn_flow_awaitallactionapprovalmodel_userFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_flow_awaitallactionapprovalmodel_userId: { logicalName: 'msdyn_flow_awaitallactionapprovalmodel_userid', readOnly: true },
	msdyn_flow_awaitallactionapprovalmodelid: { logicalName: 'msdyn_flow_awaitallactionapprovalmodelid', readOnly: true },
	systemuserid: { logicalName: 'systemuserid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_flow_awaitallactionapprovalmodel_user WebApi class for early-bound style coding
 * Usage: const msdyn_flow_awaitallactionapprovalmodel_user = new msdyn_flow_awaitallactionapprovalmodel_userApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_flow_awaitallactionapprovalmodel_userApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_flow_awaitallactionapprovalmodel_userApi>(entity, 'msdyn_flow_awaitallactionapprovalmodel_user', '', msdyn_flow_awaitallactionapprovalmodel_userFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_flow_awaitallactionapprovalmodel_userApi extends Imsdyn_flow_awaitallactionapprovalmodel_userApi { }

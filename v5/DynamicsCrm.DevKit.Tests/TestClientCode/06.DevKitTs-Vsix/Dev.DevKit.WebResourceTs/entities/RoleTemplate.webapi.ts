/**
 * RoleTemplate.webapi.ts - RoleTemplate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for RoleTemplate
 * All fields return string representation of their values
 */
export interface IRoleTemplateFormattedValue {
	readonly Name: string;
	readonly RoleTemplateId: string;
	readonly Upgrading: string;
}

/**
 * RoleTemplate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRoleTemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IRoleTemplateFormattedValue;
	/** Name of the role template. */
	Name: string | null;
	/** Unique identifier of the role template. */
	RoleTemplateId: DevKit.Guid | null;
	readonly Upgrading: boolean | null;
}

const RoleTemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Name: { logicalName: 'name' },
	RoleTemplateId: { logicalName: 'roletemplateid' },
	Upgrading: { logicalName: 'upgrading', readOnly: true, type: 'Boolean' },
};

/**
 * RoleTemplate WebApi class for early-bound style coding
 * Usage: const roleTemplate = new RoleTemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RoleTemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRoleTemplateApi>(entity, 'roletemplate', 'roletemplates', RoleTemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RoleTemplateApi extends IRoleTemplateApi { }

/**
 * HierarchySecurityConfiguration.webapi.ts - HierarchySecurityConfiguration WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * HierarchySecurityConfiguration WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IHierarchySecurityConfigurationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IHierarchySecurityConfigurationApi, 'FormattedValue'>]: string };
	/** Logical entity name of the entity that is configured for hierarchy security. */
	EntityName2: string | null;
	/** Shows the entity used for the Hierarchy Security Modeling Configuration. */
	HierarchySecurityModelingSettingId: DevKit.Guid | null;
	VersionNumber: number | null;
}

const HierarchySecurityConfigurationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	EntityName2: { logicalName: 'entityname' },
	HierarchySecurityModelingSettingId: { logicalName: 'hierarchysecuritymodelingsettingid' },
	VersionNumber: { logicalName: 'versionnumber', type: 'Integer' },
};

/**
 * HierarchySecurityConfiguration WebApi class for early-bound style coding
 * Usage: const hierarchySecurityConfiguration = new HierarchySecurityConfigurationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class HierarchySecurityConfigurationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IHierarchySecurityConfigurationApi>(entity, 'hierarchysecurityconfiguration', 'hierarchysecurityconfigurations', HierarchySecurityConfigurationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface HierarchySecurityConfigurationApi extends IHierarchySecurityConfigurationApi { }

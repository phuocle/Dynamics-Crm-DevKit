/**
 * ProvisionLanguageForUser.webapi.ts - ProvisionLanguageForUser WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ProvisionLanguageForUser WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IProvisionLanguageForUserApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IProvisionLanguageForUserApi, 'FormattedValue'>]: string };
	/** AsyncOperationId */
	AsyncOperationId: DevKit.Guid | null;
	/** Lcid */
	Lcid: number | null;
	/** The name of the custom entity. */
	Name: string | null;
	/** OperationStatus */
	OperationStatus: number | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	ProvisionLanguageForUserId: DevKit.Guid | null;
	/** UserId */
	UserId: DevKit.Guid | null;
}

const ProvisionLanguageForUserFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AsyncOperationId: { logicalName: 'asyncoperationid' },
	Lcid: { logicalName: 'lcid', type: 'Integer' },
	Name: { logicalName: 'name' },
	OperationStatus: { logicalName: 'operationstatus', type: 'Integer' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	ProvisionLanguageForUserId: { logicalName: 'provisionlanguageforuserid' },
	UserId: { logicalName: 'userid' },
};

/**
 * ProvisionLanguageForUser WebApi class for early-bound style coding
 * Usage: const provisionLanguageForUser = new ProvisionLanguageForUserApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ProvisionLanguageForUserApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IProvisionLanguageForUserApi>(entity, 'provisionlanguageforuser', 'provisionlanguageforusers', ProvisionLanguageForUserFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ProvisionLanguageForUserApi extends IProvisionLanguageForUserApi { }

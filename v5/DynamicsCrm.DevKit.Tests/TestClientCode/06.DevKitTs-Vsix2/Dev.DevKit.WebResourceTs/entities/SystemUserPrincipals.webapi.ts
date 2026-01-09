/**
 * SystemUserPrincipals.webapi.ts - SystemUserPrincipals WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SystemUserPrincipals WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISystemUserPrincipalsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISystemUserPrincipalsApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	PrincipalId: DevKit.Guid | null;
	/** For internal use only. */
	SystemUserId: DevKit.Guid | null;
	/** For internal use only. */
	SystemUserPrincipalId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const SystemUserPrincipalsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	PrincipalId: { logicalName: 'principalid' },
	SystemUserId: { logicalName: 'systemuserid' },
	SystemUserPrincipalId: { logicalName: 'systemuserprincipalid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SystemUserPrincipals WebApi class for early-bound style coding
 * Usage: const systemUserPrincipals = new SystemUserPrincipalsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SystemUserPrincipalsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISystemUserPrincipalsApi>(entity, 'systemuserprincipals', 'systemuserprincipalses', SystemUserPrincipalsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SystemUserPrincipalsApi extends ISystemUserPrincipalsApi { }

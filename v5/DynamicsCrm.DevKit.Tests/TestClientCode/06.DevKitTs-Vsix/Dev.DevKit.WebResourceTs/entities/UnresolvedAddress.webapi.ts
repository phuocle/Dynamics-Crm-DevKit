/**
 * UnresolvedAddress.webapi.ts - UnresolvedAddress WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * UnresolvedAddress WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IUnresolvedAddressApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IUnresolvedAddressApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	EMailAddress: string | null;
	/** For internal use only. */
	readonly FullName: string | null;
	/** For internal use only. */
	Telephone: string | null;
	/** For internal use only. */
	UnresolvedAddressId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const UnresolvedAddressFieldConfig: DevKit.IWebApiFieldConfigMap = {
	EMailAddress: { logicalName: 'emailaddress' },
	FullName: { logicalName: 'fullname', readOnly: true },
	Telephone: { logicalName: 'telephone' },
	UnresolvedAddressId: { logicalName: 'unresolvedaddressid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * UnresolvedAddress WebApi class for early-bound style coding
 * Usage: const unresolvedAddress = new UnresolvedAddressApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class UnresolvedAddressApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IUnresolvedAddressApi>(entity, 'unresolvedaddress', 'unresolvedaddresses', UnresolvedAddressFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface UnresolvedAddressApi extends IUnresolvedAddressApi { }

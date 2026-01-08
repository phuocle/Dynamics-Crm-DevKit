/**
 * EmailSearch.webapi.ts - EmailSearch WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for EmailSearch
 * All fields return string representation of their values
 */
export interface IEmailSearchFormattedValue {
	readonly EmailAddress: string;
	readonly EmailSearchId: string;
	readonly ParentObjectId: string;
	readonly VersionNumber: string;
}

/**
 * EmailSearch WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEmailSearchApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IEmailSearchFormattedValue;
	/** The email address */
	EmailAddress: string | null;
	/** Unique identifier of the email search entry. */
	EmailSearchId: DevKit.Guid | null;
	/** Unique identifier of the parent object with which the email address is associated. */
	ParentObjectId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const EmailSearchFieldConfig: DevKit.IWebApiFieldConfigMap = {
	EmailAddress: { logicalName: 'emailaddress' },
	EmailSearchId: { logicalName: 'emailsearchid' },
	ParentObjectId: { logicalName: 'parentobjectid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * EmailSearch WebApi class for early-bound style coding
 * Usage: const emailSearch = new EmailSearchApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EmailSearchApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEmailSearchApi>(entity, 'emailsearch', 'emailsearches', EmailSearchFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EmailSearchApi extends IEmailSearchApi { }

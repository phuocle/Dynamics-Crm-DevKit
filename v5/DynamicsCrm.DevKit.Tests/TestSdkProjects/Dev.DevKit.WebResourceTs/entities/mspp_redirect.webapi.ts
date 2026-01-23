/**
 * mspp_redirect.webapi.ts - mspp_redirect WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspp_redirect WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_redirectApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspp_redirectApi, 'FormattedValue'>]: string };
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** The path to redirect visitors from */
	mspp_inboundurl: string | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Unique identifier for entity instances */
	mspp_redirectId: DevKit.Guid | null;
	/** The path to redirect visitors to */
	mspp_redirecturl: string | null;
	/** Unique identifier for Site Marker associated with Redirect. */
	mspp_sitemarkerid: DevKit.Guid | null;
	/** Status Code */
	mspp_statuscode: number | null;
	/** Unique identifier for Web Page associated with Redirect. */
	mspp_webpageid: DevKit.Guid | null;
	/** Unique identifier for Website associated with Redirect. */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the Redirect */
	statecode: number | null;
	/** Reason for the status of the Redirect */
	statuscode: number | null;
}

const mspp_redirectFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_inboundurl: { logicalName: 'mspp_inboundurl' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_redirectId: { logicalName: 'mspp_redirectid' },
	mspp_redirecturl: { logicalName: 'mspp_redirecturl' },
	mspp_sitemarkerid: { schemaName: 'mspp_sitemarkerid', logicalName: '_mspp_sitemarkerid_value', entityCollectionName: 'mspp_sitemarkers', entityLogicalName: 'mspp_sitemarker' },
	mspp_statuscode: { logicalName: 'mspp_statuscode', type: 'Integer' },
	mspp_webpageid: { schemaName: 'mspp_webpageid', logicalName: '_mspp_webpageid_value', entityCollectionName: 'mspp_webpages', entityLogicalName: 'mspp_webpage' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_redirect WebApi class for early-bound style coding
 * Usage: const mspp_redirect = new mspp_redirectApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_redirectApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_redirectApi>(entity, 'mspp_redirect', 'mspp_redirects', mspp_redirectFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_redirectApi extends Imspp_redirectApi { }

/**
 * mspp_sitemarker.webapi.ts - mspp_sitemarker WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspp_sitemarker WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_sitemarkerApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspp_sitemarkerApi, 'FormattedValue'>]: string };
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Unique identifier for Web Page associated with Site Marker. */
	mspp_pageid: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	mspp_sitemarkerId: DevKit.Guid | null;
	/** Unique identifier for Website associated with Site Marker. */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the Site Marker */
	statecode: number | null;
	/** Reason for the status of the Site Marker */
	statuscode: number | null;
}

const mspp_sitemarkerFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_pageid: { schemaName: 'mspp_pageid', logicalName: '_mspp_pageid_value', entityCollectionName: 'mspp_webpages', entityLogicalName: 'mspp_webpage' },
	mspp_sitemarkerId: { logicalName: 'mspp_sitemarkerid' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_sitemarker WebApi class for early-bound style coding
 * Usage: const mspp_sitemarker = new mspp_sitemarkerApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_sitemarkerApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_sitemarkerApi>(entity, 'mspp_sitemarker', 'mspp_sitemarkers', mspp_sitemarkerFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_sitemarkerApi extends Imspp_sitemarkerApi { }

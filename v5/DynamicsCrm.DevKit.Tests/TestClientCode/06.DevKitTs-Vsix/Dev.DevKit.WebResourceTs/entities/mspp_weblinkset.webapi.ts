/**
 * mspp_weblinkset.webapi.ts - mspp_weblinkset WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_weblinkset
 * All fields return string representation of their values
 */
export interface Imspp_weblinksetFormattedValue {
	readonly mspp_copy: string;
	readonly mspp_createdby: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_display_name: string;
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_name: string;
	readonly mspp_publishingstateid: string;
	readonly mspp_title: string;
	readonly mspp_weblinksetId: string;
	readonly mspp_websiteid: string;
	readonly mspp_websitelanguageid: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_weblinkset WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_weblinksetApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_weblinksetFormattedValue;
	/** Copy */
	mspp_copy: string | null;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Stores the label that is shown on the user interface (UI) in the data editing mode. */
	mspp_display_name: string | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Unique identifier for Publishing State associated with Web Link Set. */
	mspp_publishingstateid: DevKit.Guid | null;
	/** Title */
	mspp_title: string | null;
	/** Unique identifier for entity instances */
	mspp_weblinksetId: DevKit.Guid | null;
	/** Unique identifier for Website associated with Web Link Set. */
	mspp_websiteid: DevKit.Guid | null;
	/** Optional language to associate with web link sets for language-specific primary navigation */
	mspp_websitelanguageid: DevKit.Guid | null;
	/** Status of the Web Link Set */
	statecode: number | null;
	/** Reason for the status of the Web Link Set */
	statuscode: number | null;
}

const mspp_weblinksetFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_copy: { logicalName: 'mspp_copy' },
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_display_name: { logicalName: 'mspp_display_name' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_publishingstateid: { schemaName: 'mspp_publishingstateid', logicalName: '_mspp_publishingstateid_value', entityCollectionName: 'mspp_publishingstates', entityLogicalName: 'mspp_publishingstate' },
	mspp_title: { logicalName: 'mspp_title' },
	mspp_weblinksetId: { logicalName: 'mspp_weblinksetid' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	mspp_websitelanguageid: { schemaName: 'mspp_websitelanguageid', logicalName: '_mspp_websitelanguageid_value', entityCollectionName: 'mspp_websitelanguages', entityLogicalName: 'mspp_websitelanguage' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_weblinkset WebApi class for early-bound style coding
 * Usage: const mspp_weblinkset = new mspp_weblinksetApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_weblinksetApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_weblinksetApi>(entity, 'mspp_weblinkset', 'mspp_weblinksets', mspp_weblinksetFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_weblinksetApi extends Imspp_weblinksetApi { }

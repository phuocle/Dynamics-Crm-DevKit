/**
 * mspp_contentsnippet.webapi.ts - mspp_contentsnippet WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_contentsnippet
 * All fields return string representation of their values
 */
export interface Imspp_contentsnippetFormattedValue {
	readonly mspp_contentsnippetId: string;
	readonly mspp_contentsnippetlanguageid: string;
	readonly mspp_createdby: string;
	readonly mspp_createdbyipaddress: string;
	readonly mspp_createdbyusername: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_display_name: string;
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedbyipaddress: string;
	readonly mspp_modifiedbyusername: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_name: string;
	readonly mspp_type: string;
	readonly mspp_value: string;
	readonly mspp_websiteid: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_contentsnippet WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_contentsnippetApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_contentsnippetFormattedValue;
	/** Unique identifier for entity instances */
	mspp_contentsnippetId: DevKit.Guid | null;
	/** Option to make content snippets language specific */
	mspp_contentsnippetlanguageid: DevKit.Guid | null;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Created By IP Address */
	mspp_createdbyipaddress: string | null;
	/** Created By Username */
	mspp_createdbyusername: string | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Stores the label that is shown on the user interface (UI) in the data editing mode. */
	mspp_display_name: string | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Modified By IP Address */
	mspp_modifiedbyipaddress: string | null;
	/** Modified By Username */
	mspp_modifiedbyusername: string | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Type */
	mspp_type: number | null;
	/** Value */
	mspp_value: string | null;
	/** Unique identifier for Website associated with Content Snippet. */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the Content Snippet */
	statecode: number | null;
	/** Reason for the status of the Content Snippet */
	statuscode: number | null;
}

const mspp_contentsnippetFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_contentsnippetId: { logicalName: 'mspp_contentsnippetid' },
	mspp_contentsnippetlanguageid: { schemaName: 'mspp_contentsnippetlanguageid', logicalName: '_mspp_contentsnippetlanguageid_value', entityCollectionName: 'mspp_websitelanguages', entityLogicalName: 'mspp_websitelanguage' },
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdbyipaddress: { logicalName: 'mspp_createdbyipaddress' },
	mspp_createdbyusername: { logicalName: 'mspp_createdbyusername' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_display_name: { logicalName: 'mspp_display_name' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedbyipaddress: { logicalName: 'mspp_modifiedbyipaddress' },
	mspp_modifiedbyusername: { logicalName: 'mspp_modifiedbyusername' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_type: { logicalName: 'mspp_type', type: 'Integer' },
	mspp_value: { logicalName: 'mspp_value' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_contentsnippet WebApi class for early-bound style coding
 * Usage: const mspp_contentsnippet = new mspp_contentsnippetApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_contentsnippetApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_contentsnippetApi>(entity, 'mspp_contentsnippet', 'mspp_contentsnippets', mspp_contentsnippetFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_contentsnippetApi extends Imspp_contentsnippetApi { }

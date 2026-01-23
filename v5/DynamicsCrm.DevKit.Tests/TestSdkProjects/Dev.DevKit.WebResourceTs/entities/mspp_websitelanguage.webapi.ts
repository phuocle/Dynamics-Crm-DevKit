/**
 * mspp_websitelanguage.webapi.ts - mspp_websitelanguage WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspp_websitelanguage WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_websitelanguageApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspp_websitelanguageApi, 'FormattedValue'>]: string };
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Description */
	mspp_description: string | null;
	/** Localized display name of the portal language */
	mspp_displayname: string | null;
	/** Locale or language identifier that appears in the URL to indicate the portal language */
	mspp_languagecode: string | null;
	/** Locale ID that is assigned to the portal language */
	mspp_lcid: number | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** Name of the portal language */
	mspp_name: string | null;
	/** Lookup to Publishing State - publishing state of this website/language instance (draft/published) */
	mspp_publishingstate: DevKit.Guid | null;
	/** The system language determines which portal languages are available */
	mspp_systemlanguage: number | null;
	/** Lookup to Website */
	mspp_websiteid: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	mspp_websitelanguageId: DevKit.Guid | null;
	/** This attribute is used only in Power Pages Management App, and only for UI purpose. It's value is mapped to mspp_systemlanguage. */
	mspp_websitelcid: number | null;
	/** Status of the Website Language */
	statecode: number | null;
	/** Reason for the status of the Website Language */
	statuscode: number | null;
}

const mspp_websitelanguageFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_description: { logicalName: 'mspp_description' },
	mspp_displayname: { logicalName: 'mspp_displayname' },
	mspp_languagecode: { logicalName: 'mspp_languagecode' },
	mspp_lcid: { logicalName: 'mspp_lcid', type: 'Integer' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_publishingstate: { schemaName: 'mspp_publishingstate', logicalName: '_mspp_publishingstate_value', entityCollectionName: 'mspp_publishingstates', entityLogicalName: 'mspp_publishingstate' },
	mspp_systemlanguage: { logicalName: 'mspp_systemlanguage', type: 'Integer' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	mspp_websitelanguageId: { logicalName: 'mspp_websitelanguageid' },
	mspp_websitelcid: { logicalName: 'mspp_websitelcid', type: 'Integer' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_websitelanguage WebApi class for early-bound style coding
 * Usage: const mspp_websitelanguage = new mspp_websitelanguageApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_websitelanguageApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_websitelanguageApi>(entity, 'mspp_websitelanguage', 'mspp_websitelanguages', mspp_websitelanguageFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_websitelanguageApi extends Imspp_websitelanguageApi { }

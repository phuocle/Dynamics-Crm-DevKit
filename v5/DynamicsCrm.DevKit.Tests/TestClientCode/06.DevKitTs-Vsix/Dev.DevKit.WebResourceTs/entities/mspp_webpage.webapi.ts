/**
 * mspp_webpage.webapi.ts - mspp_webpage WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_webpage
 * All fields return string representation of their values
 */
export interface Imspp_webpageFormattedValue {
	readonly mspp_alloworigin: string;
	readonly mspp_category: string;
	readonly mspp_copy: string;
	readonly mspp_createdby: string;
	readonly mspp_createdbyipaddress: string;
	readonly mspp_createdbyusername: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_customcss: string;
	readonly mspp_customjavascript: string;
	readonly mspp_displaydate_UtcDateAndTime: string;
	readonly mspp_displayorder: string;
	readonly mspp_editorialcomments: string;
	readonly mspp_enablerating: string;
	readonly mspp_entityform: string;
	readonly mspp_entitylist: string;
	readonly mspp_excludefromsearch: string;
	readonly mspp_expirationdate_UtcDateAndTime: string;
	readonly mspp_feedbackpolicy: string;
	readonly mspp_hiddenfromsitemap: string;
	readonly mspp_image: string;
	readonly mspp_imageurl: string;
	readonly mspp_isofflinecached: string;
	readonly mspp_isroot: string;
	readonly mspp_masterwebpageid: string;
	readonly mspp_meta_description: string;
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedbyipaddress: string;
	readonly mspp_modifiedbyusername: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_name: string;
	readonly mspp_navigation: string;
	readonly mspp_pagetemplateid: string;
	readonly mspp_parentpageid: string;
	readonly mspp_partialurl: string;
	readonly mspp_publishingstateid: string;
	readonly mspp_releasedate_UtcDateAndTime: string;
	readonly mspp_rootwebpageid: string;
	readonly mspp_sharedpageconfiguration: string;
	readonly mspp_summary: string;
	readonly mspp_title: string;
	readonly mspp_webform: string;
	readonly mspp_webpageId: string;
	readonly mspp_webpagelanguageid: string;
	readonly mspp_websiteid: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_webpage WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_webpageApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_webpageFormattedValue;
	/** Defines CORS header Access-Control-Allow-Origin for cross origin requests. */
	mspp_alloworigin: string | null;
	/** Category */
	mspp_category: number | null;
	/** Copy */
	mspp_copy: string | null;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Created By IP Address */
	mspp_createdbyipaddress: string | null;
	/** Created By Username */
	mspp_createdbyusername: string | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Custom CSS */
	mspp_customcss: string | null;
	/** Custom JavaScript */
	mspp_customjavascript: string | null;
	/** Display Date */
	mspp_displaydate_UtcDateAndTime: Date | null;
	/** Display Order */
	mspp_displayorder: number | null;
	/** Editorial Comments */
	mspp_editorialcomments: string | null;
	/** Setting this value to 'Yes' will allow users to rate the web page. */
	mspp_enablerating: boolean | null;
	/** Unique identifier for Entity Form associated with Web Page. */
	mspp_entityform: DevKit.Guid | null;
	/** Unique identifier for Entity List associated with Web Page. */
	mspp_entitylist: DevKit.Guid | null;
	/** Shows whether the webpage is excluded from the portal search. */
	mspp_excludefromsearch: boolean | null;
	/** Expiration Date */
	mspp_expirationdate_UtcDateAndTime: Date | null;
	/** Comment Policy */
	mspp_feedbackpolicy: number | null;
	/** Hidden From Sitemap */
	mspp_hiddenfromsitemap: boolean | null;
	/** Unique identifier for Web File associated with Web Page. */
	mspp_image: DevKit.Guid | null;
	/** Image URL */
	mspp_imageurl: string | null;
	/** Define whether to cache this page for PWA. */
	mspp_isofflinecached: boolean | null;
	/** Defines whether this is the "root" record of this translated group of Web Pages. */
	mspp_isroot: boolean | null;
	/** Unique identifier for Web Page associated with Web Page. */
	mspp_masterwebpageid: DevKit.Guid | null;
	/** Description */
	mspp_meta_description: string | null;
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
	/** Unique identifier for Web Link Set associated with Web Page. */
	mspp_navigation: DevKit.Guid | null;
	/** Unique identifier for Page Template associated with Web Page. */
	mspp_pagetemplateid: DevKit.Guid | null;
	/** Unique identifier for Web Page associated with Web Page. */
	mspp_parentpageid: DevKit.Guid | null;
	/** Partial URL */
	mspp_partialurl: string | null;
	/** Unique identifier for Publishing State associated with Web Page. */
	mspp_publishingstateid: DevKit.Guid | null;
	/** Release Date */
	mspp_releasedate_UtcDateAndTime: Date | null;
	/** Lookup to root WebPage. */
	mspp_rootwebpageid: DevKit.Guid | null;
	/** Determines if the content page uses the root page configuration */
	mspp_sharedpageconfiguration: boolean | null;
	/** Summary */
	mspp_summary: string | null;
	/** Title */
	mspp_title: string | null;
	/** Unique identifier for Multistep Form associated with Web Page. */
	mspp_webform: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	mspp_webpageId: DevKit.Guid | null;
	/** Language of this web page. */
	mspp_webpagelanguageid: DevKit.Guid | null;
	/** Unique identifier for Website associated with Web Page. */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the Web Page */
	statecode: number | null;
	/** Reason for the status of the Web Page */
	statuscode: number | null;
}

const mspp_webpageFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_alloworigin: { logicalName: 'mspp_alloworigin' },
	mspp_category: { logicalName: 'mspp_category', type: 'Integer' },
	mspp_copy: { logicalName: 'mspp_copy' },
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdbyipaddress: { logicalName: 'mspp_createdbyipaddress' },
	mspp_createdbyusername: { logicalName: 'mspp_createdbyusername' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_customcss: { logicalName: 'mspp_customcss' },
	mspp_customjavascript: { logicalName: 'mspp_customjavascript' },
	mspp_displaydate_UtcDateAndTime: { logicalName: 'mspp_displaydate', type: 'DateTime' },
	mspp_displayorder: { logicalName: 'mspp_displayorder', type: 'Integer' },
	mspp_editorialcomments: { logicalName: 'mspp_editorialcomments' },
	mspp_enablerating: { logicalName: 'mspp_enablerating', type: 'Boolean' },
	mspp_entityform: { schemaName: 'mspp_entityform', logicalName: '_mspp_entityform_value', entityCollectionName: 'mspp_entityforms', entityLogicalName: 'mspp_entityform' },
	mspp_entitylist: { schemaName: 'mspp_entitylist', logicalName: '_mspp_entitylist_value', entityCollectionName: 'mspp_entitylists', entityLogicalName: 'mspp_entitylist' },
	mspp_excludefromsearch: { logicalName: 'mspp_excludefromsearch', type: 'Boolean' },
	mspp_expirationdate_UtcDateAndTime: { logicalName: 'mspp_expirationdate', type: 'DateTime' },
	mspp_feedbackpolicy: { logicalName: 'mspp_feedbackpolicy', type: 'Integer' },
	mspp_hiddenfromsitemap: { logicalName: 'mspp_hiddenfromsitemap', type: 'Boolean' },
	mspp_image: { schemaName: 'mspp_image', logicalName: '_mspp_image_value', entityCollectionName: 'mspp_webfiles', entityLogicalName: 'mspp_webfile' },
	mspp_imageurl: { logicalName: 'mspp_imageurl' },
	mspp_isofflinecached: { logicalName: 'mspp_isofflinecached', type: 'Boolean' },
	mspp_isroot: { logicalName: 'mspp_isroot', type: 'Boolean' },
	mspp_masterwebpageid: { schemaName: 'mspp_masterwebpageid', logicalName: '_mspp_masterwebpageid_value', entityCollectionName: 'mspp_webpages', entityLogicalName: 'mspp_webpage' },
	mspp_meta_description: { logicalName: 'mspp_meta_description' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedbyipaddress: { logicalName: 'mspp_modifiedbyipaddress' },
	mspp_modifiedbyusername: { logicalName: 'mspp_modifiedbyusername' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_navigation: { schemaName: 'mspp_navigation', logicalName: '_mspp_navigation_value', entityCollectionName: 'mspp_weblinksets', entityLogicalName: 'mspp_weblinkset' },
	mspp_pagetemplateid: { schemaName: 'mspp_pagetemplateid', logicalName: '_mspp_pagetemplateid_value', entityCollectionName: 'mspp_pagetemplates', entityLogicalName: 'mspp_pagetemplate' },
	mspp_parentpageid: { schemaName: 'mspp_parentpageid', logicalName: '_mspp_parentpageid_value', entityCollectionName: 'mspp_webpages', entityLogicalName: 'mspp_webpage' },
	mspp_partialurl: { logicalName: 'mspp_partialurl' },
	mspp_publishingstateid: { schemaName: 'mspp_publishingstateid', logicalName: '_mspp_publishingstateid_value', entityCollectionName: 'mspp_publishingstates', entityLogicalName: 'mspp_publishingstate' },
	mspp_releasedate_UtcDateAndTime: { logicalName: 'mspp_releasedate', type: 'DateTime' },
	mspp_rootwebpageid: { schemaName: 'mspp_rootwebpageid', logicalName: '_mspp_rootwebpageid_value', entityCollectionName: 'mspp_webpages', entityLogicalName: 'mspp_webpage' },
	mspp_sharedpageconfiguration: { logicalName: 'mspp_sharedpageconfiguration', type: 'Boolean' },
	mspp_summary: { logicalName: 'mspp_summary' },
	mspp_title: { logicalName: 'mspp_title' },
	mspp_webform: { schemaName: 'mspp_webform', logicalName: '_mspp_webform_value', entityCollectionName: 'mspp_webforms', entityLogicalName: 'mspp_webform' },
	mspp_webpageId: { logicalName: 'mspp_webpageid' },
	mspp_webpagelanguageid: { schemaName: 'mspp_webpagelanguageid', logicalName: '_mspp_webpagelanguageid_value', entityCollectionName: 'mspp_websitelanguages', entityLogicalName: 'mspp_websitelanguage' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_webpage WebApi class for early-bound style coding
 * Usage: const mspp_webpage = new mspp_webpageApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_webpageApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_webpageApi>(entity, 'mspp_webpage', 'mspp_webpages', mspp_webpageFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_webpageApi extends Imspp_webpageApi { }

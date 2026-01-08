/**
 * mspp_shortcut.webapi.ts - mspp_shortcut WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspp_shortcut WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_shortcutApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspp_shortcutApi, 'FormattedValue'>]: string };
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Description */
	mspp_description: string | null;
	/** Disable Shortcut Target Validation */
	mspp_disabletargetvalidation: boolean | null;
	/** Display Order */
	mspp_displayorder: number | null;
	/** External URL */
	mspp_externalurl: string | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Unique identifier for Web Page associated with Shortcut. */
	mspp_parentpage_webpageid: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	mspp_shortcutId: DevKit.Guid | null;
	/** Title */
	mspp_title: string | null;
	/** Web File that is pointed to by the shortcut */
	mspp_webfileid: DevKit.Guid | null;
	/** The web page that the shortcut points to */
	mspp_webpageid: DevKit.Guid | null;
	/** Unique identifier for Website associated with Shortcut. */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the Shortcut */
	statecode: number | null;
	/** Reason for the status of the Shortcut */
	statuscode: number | null;
}

const mspp_shortcutFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_description: { logicalName: 'mspp_description' },
	mspp_disabletargetvalidation: { logicalName: 'mspp_disabletargetvalidation', type: 'Boolean' },
	mspp_displayorder: { logicalName: 'mspp_displayorder', type: 'Integer' },
	mspp_externalurl: { logicalName: 'mspp_externalurl' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_parentpage_webpageid: { schemaName: 'mspp_parentpage_webpageid', logicalName: '_mspp_parentpage_webpageid_value', entityCollectionName: 'mspp_webpages', entityLogicalName: 'mspp_webpage' },
	mspp_shortcutId: { logicalName: 'mspp_shortcutid' },
	mspp_title: { logicalName: 'mspp_title' },
	mspp_webfileid: { schemaName: 'mspp_webfileid', logicalName: '_mspp_webfileid_value', entityCollectionName: 'mspp_webfiles', entityLogicalName: 'mspp_webfile' },
	mspp_webpageid: { schemaName: 'mspp_webpageid', logicalName: '_mspp_webpageid_value', entityCollectionName: 'mspp_webpages', entityLogicalName: 'mspp_webpage' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_shortcut WebApi class for early-bound style coding
 * Usage: const mspp_shortcut = new mspp_shortcutApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_shortcutApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_shortcutApi>(entity, 'mspp_shortcut', 'mspp_shortcuts', mspp_shortcutFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_shortcutApi extends Imspp_shortcutApi { }

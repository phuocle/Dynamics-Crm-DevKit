/**
 * mspp_weblink.webapi.ts - mspp_weblink WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspp_weblink WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_weblinkApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspp_weblinkApi, 'FormattedValue'>]: string };
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Created By IP Address */
	mspp_createdbyipaddress: string | null;
	/** Created By Username */
	mspp_createdbyusername: string | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Description */
	mspp_description: string | null;
	/** Disable Page Validation */
	mspp_disablepagevalidation: boolean | null;
	/** Display Image Only */
	mspp_displayimageonly: boolean | null;
	/** Display Order */
	mspp_displayorder: number | null;
	/** Select whether to display the children of the page as child links for this link. */
	mspp_displaypagechildlinks: boolean | null;
	/** External Url */
	mspp_externalurl: string | null;
	/** Image Alt Text */
	mspp_imagealttext: string | null;
	/** Image Height */
	mspp_imageheight: number | null;
	/** Image Url */
	mspp_imageurl: string | null;
	/** Image Width */
	mspp_imagewidth: number | null;
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
	/** Open In New Window */
	mspp_openinnewwindow: boolean | null;
	/** Unique identifier for Web Page associated with Web Link. */
	mspp_pageid: DevKit.Guid | null;
	/** Unique identifier for parent Web Link associated with Web Link. */
	mspp_parentweblinkid: DevKit.Guid | null;
	/** Unique identifier for Publishing State associated with Web Link. */
	mspp_publishingstateid: DevKit.Guid | null;
	/** Robots Follow Link */
	mspp_robotsfollowlink: boolean | null;
	/** Unique identifier for entity instances */
	mspp_weblinkId: DevKit.Guid | null;
	/** Unique identifier for Web Link Set associated with Web Link. */
	mspp_weblinksetid: DevKit.Guid | null;
	/** Status of the Web Link */
	statecode: number | null;
	/** Reason for the status of the Web Link */
	statuscode: number | null;
}

const mspp_weblinkFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdbyipaddress: { logicalName: 'mspp_createdbyipaddress' },
	mspp_createdbyusername: { logicalName: 'mspp_createdbyusername' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_description: { logicalName: 'mspp_description' },
	mspp_disablepagevalidation: { logicalName: 'mspp_disablepagevalidation', type: 'Boolean' },
	mspp_displayimageonly: { logicalName: 'mspp_displayimageonly', type: 'Boolean' },
	mspp_displayorder: { logicalName: 'mspp_displayorder', type: 'Integer' },
	mspp_displaypagechildlinks: { logicalName: 'mspp_displaypagechildlinks', type: 'Boolean' },
	mspp_externalurl: { logicalName: 'mspp_externalurl' },
	mspp_imagealttext: { logicalName: 'mspp_imagealttext' },
	mspp_imageheight: { logicalName: 'mspp_imageheight', type: 'Integer' },
	mspp_imageurl: { logicalName: 'mspp_imageurl' },
	mspp_imagewidth: { logicalName: 'mspp_imagewidth', type: 'Integer' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedbyipaddress: { logicalName: 'mspp_modifiedbyipaddress' },
	mspp_modifiedbyusername: { logicalName: 'mspp_modifiedbyusername' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_openinnewwindow: { logicalName: 'mspp_openinnewwindow', type: 'Boolean' },
	mspp_pageid: { schemaName: 'mspp_pageid', logicalName: '_mspp_pageid_value', entityCollectionName: 'mspp_webpages', entityLogicalName: 'mspp_webpage' },
	mspp_parentweblinkid: { schemaName: 'mspp_parentweblinkid', logicalName: '_mspp_parentweblinkid_value', entityCollectionName: 'mspp_weblinks', entityLogicalName: 'mspp_weblink' },
	mspp_publishingstateid: { schemaName: 'mspp_publishingstateid', logicalName: '_mspp_publishingstateid_value', entityCollectionName: 'mspp_publishingstates', entityLogicalName: 'mspp_publishingstate' },
	mspp_robotsfollowlink: { logicalName: 'mspp_robotsfollowlink', type: 'Boolean' },
	mspp_weblinkId: { logicalName: 'mspp_weblinkid' },
	mspp_weblinksetid: { schemaName: 'mspp_weblinksetid', logicalName: '_mspp_weblinksetid_value', entityCollectionName: 'mspp_weblinksets', entityLogicalName: 'mspp_weblinkset' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_weblink WebApi class for early-bound style coding
 * Usage: const mspp_weblink = new mspp_weblinkApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_weblinkApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_weblinkApi>(entity, 'mspp_weblink', 'mspp_weblinks', mspp_weblinkFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_weblinkApi extends Imspp_weblinkApi { }

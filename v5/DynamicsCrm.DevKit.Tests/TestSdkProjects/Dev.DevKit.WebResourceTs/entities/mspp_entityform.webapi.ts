/**
 * mspp_entityform.webapi.ts - mspp_entityform WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspp_entityform WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_entityformApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspp_entityformApi, 'FormattedValue'>]: string };
	/** Append Query String */
	mspp_appendquerystring: boolean | null;
	/** Associate Current Portal User */
	mspp_associatecurrentportaluser: boolean | null;
	/** Attach File */
	mspp_attachfile: boolean | null;
	/** The accept attribute specifies the MIME types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. audio/*,video/*,image/*). */
	mspp_attachfileaccept: string | null;
	/** The accept attribute specifies the extension types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. .docx,.pdf,.txt). */
	mspp_attachfileacceptextensions: string | null;
	/** Attach File Allow Multiple */
	mspp_attachfileallowmultiple: boolean | null;
	/** Attach File Label */
	mspp_attachfilelabel: string | null;
	/** Maximum File Size */
	mspp_attachfilemaxsize: number | null;
	/** Attach File Required */
	mspp_attachfilerequired: boolean | null;
	/** Attach File Required Error Message */
	mspp_attachfilerequirederrormessage: string | null;
	/** Restrict Files To Accepted Types */
	mspp_attachfilerestrictaccept: boolean | null;
	/** Attach File Save Option */
	mspp_attachfilesaveoption: number | null;
	/** Attach File Size Error Message */
	mspp_attachfilesizeerrormessage: string | null;
	/** Attach File Storage Location */
	mspp_attachfilestoragelocation: number | null;
	/** Attach File Type Error Message */
	mspp_attachfiletypeerrormessage: string | null;
	/** Auto Generate Steps From Tabs */
	mspp_autogeneratesteps: boolean | null;
	/** Captcha Required */
	mspp_captcharequired: boolean | null;
	/** Container Name */
	mspp_containername: string | null;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Unique identifier for entity instances */
	mspp_entityformId: DevKit.Guid | null;
	/** Table Name */
	mspp_entityname: string | null;
	/** Indicates whether or not the table permission provider will assert privileges. */
	mspp_entitypermissionsenabled: boolean | null;
	/** Table Source Type */
	mspp_entitysourcetype: number | null;
	/** Make All Fields Required */
	mspp_forceallfieldsrequired: boolean | null;
	/** Shows the name of the entity form to render. */
	mspp_formname: string | null;
	/** Address Line Field Name */
	mspp_geolocation_addresslinefieldname: string | null;
	/** City Field Name */
	mspp_geolocation_cityfieldname: string | null;
	/** Country/Region Field Name */
	mspp_geolocation_countryfieldname: string | null;
	/** County Field Name */
	mspp_geolocation_countyfieldname: string | null;
	/** Display Map */
	mspp_geolocation_displaymap: boolean | null;
	/** Enabled */
	mspp_geolocation_enabled: boolean | null;
	/** Formatted Address Field Name */
	mspp_geolocation_formattedaddressfieldname: string | null;
	/** Latitude Field Name */
	mspp_geolocation_latitudefieldname: string | null;
	/** Longitude Field Name */
	mspp_geolocation_longitudefieldname: string | null;
	/** Map Type */
	mspp_geolocation_maptype: number | null;
	/** Neighborhood Field Name */
	mspp_geolocation_neighborhoodfieldname: string | null;
	/** Zip/Postal Code Field Name */
	mspp_geolocation_postalcodefieldname: string | null;
	/** State or Province Field Name */
	mspp_geolocation_statefieldname: string | null;
	/** Hide Form on Success */
	mspp_hideformonsuccess: boolean | null;
	/** Instructions */
	mspp_instructions: string | null;
	/** Maximum No Of Files */
	mspp_maximumnooffiles: number | null;
	/** Mode */
	mspp_mode: number | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Next Button CSS Class */
	mspp_nextbuttoncssclass: string | null;
	/** Next Button Text */
	mspp_nextbuttontext: string | null;
	/** On Success */
	mspp_onsuccess: number | null;
	/** Populate Table Reference Lookup Field */
	mspp_populatereferenceentitylookupfield: boolean | null;
	/** Is Activity Party */
	mspp_portaluserlookupattributeisactivityparty: boolean | null;
	/** Previous Button CSS Class */
	mspp_previousbuttoncssclass: string | null;
	/** Previous Button Text */
	mspp_previousbuttontext: string | null;
	/** Primary Key Name */
	mspp_primarykeyname: string | null;
	/** Provisioned Languages */
	mspp_provisionedlanguages: number | null;
	/** Recommended Fields Required */
	mspp_recommendedfieldsrequired: boolean | null;
	/** Record ID Parameter Name */
	mspp_recordidquerystringparametername: string | null;
	/** Record Not Found Message */
	mspp_recordnotfoundmessage: string | null;
	/** This flag, when set to "true," allows the user to create a record if the record doesn't already exist and the Record Source Type is "Record Associated with Current Portal User." */
	mspp_recordsourceallowcreateonnull: boolean | null;
	/** Record Source Table Logical Name */
	mspp_recordsourceentitylogicalname: string | null;
	/** Relationship Name */
	mspp_recordsourcerelationshipname: string | null;
	/** Shows the URL to redirect to. */
	mspp_redirecturl: string | null;
	/** Append Table ID To Query String */
	mspp_redirecturlappendentityidquerystring: boolean | null;
	/** Custom Query String */
	mspp_redirecturlcustomquerystring: string | null;
	/** Add an attribute value as a query string value by specifying the logical name of the attribute to assign its value to the query string. */
	mspp_redirecturlquerystringattribute: string | null;
	/** Query String Parameter Name */
	mspp_redirecturlquerystringattributeparamname: string | null;
	/** The url to redirect to is dynamically retrieved from the query string using this parameter name */
	mspp_redirecturlquerystringname: string | null;
	/** Web Page to redirect to. */
	mspp_redirectwebpage: DevKit.Guid | null;
	/** Reference Table name */
	mspp_referenceentitylogicalname: string | null;
	/** Reference Table Primary Key Logical Name */
	mspp_referenceentityprimarykeylogicalname: string | null;
	/** Reference Entity ReadOnly Form Name */
	mspp_referenceentityreadonlyformname: string | null;
	/** Reference Entity Relationship Name */
	mspp_referenceentityrelationshipname: string | null;
	/** Show Reference Entity ReadOnly Form */
	mspp_referenceentityshowreadonlyform: boolean | null;
	/** Source Type */
	mspp_referenceentitysourcetype: number | null;
	/** Reference Query Attribute Logical Name */
	mspp_referencequeryattributelogicalname: string | null;
	/** Reference Query String Is Primary Key */
	mspp_referencequerystringisprimarykey: boolean | null;
	/** Reference Query String Name */
	mspp_referencequerystringname: string | null;
	/** Record Source Relationship Name */
	mspp_referencerecordsourcerelationshipname: string | null;
	/** Reference Target Lookup Attribute Logical Name */
	mspp_referencetargetlookupattributelogicalname: string | null;
	/** Custom JavaScript */
	mspp_registerstartupscript: string | null;
	/** Render Web Resources Inline */
	mspp_renderwebresourcesinline: boolean | null;
	/** Set Table Reference */
	mspp_setentityreference: boolean | null;
	/** Settings */
	mspp_settings: string | null;
	/** Show Captcha for Authenticated Users */
	mspp_showcaptchaforauthenticatedusers: boolean | null;
	/** Show Owner Fields */
	mspp_showownerfields: boolean | null;
	/** Show Unsupported Fields */
	mspp_showunsupportedfields: boolean | null;
	/** Storage Account Name */
	mspp_storageaccountname: string | null;
	/** Submit Button Busy Text */
	mspp_submitbuttonbusytext: string | null;
	/** Submit Button CSS Class */
	mspp_submitbuttoncssclass: string | null;
	/** Submit Button Text */
	mspp_submitbuttontext: string | null;
	/** Success Message */
	mspp_successmessage: string | null;
	/** The name of the tab on an entity form to render. */
	mspp_tabname: string | null;
	/** Portal User Lookup Column */
	mspp_targetentityportaluserlookupattribute: string | null;
	/** ToolTip Enabled */
	mspp_tooltipenabled: boolean | null;
	/** Validation Group */
	mspp_validationgroup: string | null;
	/** Validation Summary CSS Class */
	mspp_validationsummarycssclass: string | null;
	/** Validation Summary Header Text */
	mspp_validationsummaryheadertext: string | null;
	/** Enable Validation Summary Links */
	mspp_validationsummarylinksenabled: boolean | null;
	/** Validation Summary Link Text */
	mspp_validationsummarylinktext: string | null;
	/** Unique identifier for Website entity associated with this record. */
	mspp_websiteid: DevKit.Guid | null;
	/** Status of the Basic Form */
	statecode: number | null;
	/** Reason for the status of the Basic Form */
	statuscode: number | null;
}

const mspp_entityformFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_appendquerystring: { logicalName: 'mspp_appendquerystring', type: 'Boolean' },
	mspp_associatecurrentportaluser: { logicalName: 'mspp_associatecurrentportaluser', type: 'Boolean' },
	mspp_attachfile: { logicalName: 'mspp_attachfile', type: 'Boolean' },
	mspp_attachfileaccept: { logicalName: 'mspp_attachfileaccept' },
	mspp_attachfileacceptextensions: { logicalName: 'mspp_attachfileacceptextensions' },
	mspp_attachfileallowmultiple: { logicalName: 'mspp_attachfileallowmultiple', type: 'Boolean' },
	mspp_attachfilelabel: { logicalName: 'mspp_attachfilelabel' },
	mspp_attachfilemaxsize: { logicalName: 'mspp_attachfilemaxsize', type: 'Integer' },
	mspp_attachfilerequired: { logicalName: 'mspp_attachfilerequired', type: 'Boolean' },
	mspp_attachfilerequirederrormessage: { logicalName: 'mspp_attachfilerequirederrormessage' },
	mspp_attachfilerestrictaccept: { logicalName: 'mspp_attachfilerestrictaccept', type: 'Boolean' },
	mspp_attachfilesaveoption: { logicalName: 'mspp_attachfilesaveoption', type: 'Integer' },
	mspp_attachfilesizeerrormessage: { logicalName: 'mspp_attachfilesizeerrormessage' },
	mspp_attachfilestoragelocation: { logicalName: 'mspp_attachfilestoragelocation', type: 'Integer' },
	mspp_attachfiletypeerrormessage: { logicalName: 'mspp_attachfiletypeerrormessage' },
	mspp_autogeneratesteps: { logicalName: 'mspp_autogeneratesteps', type: 'Boolean' },
	mspp_captcharequired: { logicalName: 'mspp_captcharequired', type: 'Boolean' },
	mspp_containername: { logicalName: 'mspp_containername' },
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_entityformId: { logicalName: 'mspp_entityformid' },
	mspp_entityname: { logicalName: 'mspp_entityname' },
	mspp_entitypermissionsenabled: { logicalName: 'mspp_entitypermissionsenabled', type: 'Boolean' },
	mspp_entitysourcetype: { logicalName: 'mspp_entitysourcetype', type: 'Integer' },
	mspp_forceallfieldsrequired: { logicalName: 'mspp_forceallfieldsrequired', type: 'Boolean' },
	mspp_formname: { logicalName: 'mspp_formname' },
	mspp_geolocation_addresslinefieldname: { logicalName: 'mspp_geolocation_addresslinefieldname' },
	mspp_geolocation_cityfieldname: { logicalName: 'mspp_geolocation_cityfieldname' },
	mspp_geolocation_countryfieldname: { logicalName: 'mspp_geolocation_countryfieldname' },
	mspp_geolocation_countyfieldname: { logicalName: 'mspp_geolocation_countyfieldname' },
	mspp_geolocation_displaymap: { logicalName: 'mspp_geolocation_displaymap', type: 'Boolean' },
	mspp_geolocation_enabled: { logicalName: 'mspp_geolocation_enabled', type: 'Boolean' },
	mspp_geolocation_formattedaddressfieldname: { logicalName: 'mspp_geolocation_formattedaddressfieldname' },
	mspp_geolocation_latitudefieldname: { logicalName: 'mspp_geolocation_latitudefieldname' },
	mspp_geolocation_longitudefieldname: { logicalName: 'mspp_geolocation_longitudefieldname' },
	mspp_geolocation_maptype: { logicalName: 'mspp_geolocation_maptype', type: 'Integer' },
	mspp_geolocation_neighborhoodfieldname: { logicalName: 'mspp_geolocation_neighborhoodfieldname' },
	mspp_geolocation_postalcodefieldname: { logicalName: 'mspp_geolocation_postalcodefieldname' },
	mspp_geolocation_statefieldname: { logicalName: 'mspp_geolocation_statefieldname' },
	mspp_hideformonsuccess: { logicalName: 'mspp_hideformonsuccess', type: 'Boolean' },
	mspp_instructions: { logicalName: 'mspp_instructions' },
	mspp_maximumnooffiles: { logicalName: 'mspp_maximumnooffiles', type: 'Integer' },
	mspp_mode: { logicalName: 'mspp_mode', type: 'Integer' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_nextbuttoncssclass: { logicalName: 'mspp_nextbuttoncssclass' },
	mspp_nextbuttontext: { logicalName: 'mspp_nextbuttontext' },
	mspp_onsuccess: { logicalName: 'mspp_onsuccess', type: 'Integer' },
	mspp_populatereferenceentitylookupfield: { logicalName: 'mspp_populatereferenceentitylookupfield', type: 'Boolean' },
	mspp_portaluserlookupattributeisactivityparty: { logicalName: 'mspp_portaluserlookupattributeisactivityparty', type: 'Boolean' },
	mspp_previousbuttoncssclass: { logicalName: 'mspp_previousbuttoncssclass' },
	mspp_previousbuttontext: { logicalName: 'mspp_previousbuttontext' },
	mspp_primarykeyname: { logicalName: 'mspp_primarykeyname' },
	mspp_provisionedlanguages: { logicalName: 'mspp_provisionedlanguages', type: 'Integer' },
	mspp_recommendedfieldsrequired: { logicalName: 'mspp_recommendedfieldsrequired', type: 'Boolean' },
	mspp_recordidquerystringparametername: { logicalName: 'mspp_recordidquerystringparametername' },
	mspp_recordnotfoundmessage: { logicalName: 'mspp_recordnotfoundmessage' },
	mspp_recordsourceallowcreateonnull: { logicalName: 'mspp_recordsourceallowcreateonnull', type: 'Boolean' },
	mspp_recordsourceentitylogicalname: { logicalName: 'mspp_recordsourceentitylogicalname' },
	mspp_recordsourcerelationshipname: { logicalName: 'mspp_recordsourcerelationshipname' },
	mspp_redirecturl: { logicalName: 'mspp_redirecturl' },
	mspp_redirecturlappendentityidquerystring: { logicalName: 'mspp_redirecturlappendentityidquerystring', type: 'Boolean' },
	mspp_redirecturlcustomquerystring: { logicalName: 'mspp_redirecturlcustomquerystring' },
	mspp_redirecturlquerystringattribute: { logicalName: 'mspp_redirecturlquerystringattribute' },
	mspp_redirecturlquerystringattributeparamname: { logicalName: 'mspp_redirecturlquerystringattributeparamname' },
	mspp_redirecturlquerystringname: { logicalName: 'mspp_redirecturlquerystringname' },
	mspp_redirectwebpage: { schemaName: 'mspp_redirectwebpage', logicalName: '_mspp_redirectwebpage_value', entityCollectionName: 'mspp_webpages', entityLogicalName: 'mspp_webpage' },
	mspp_referenceentitylogicalname: { logicalName: 'mspp_referenceentitylogicalname' },
	mspp_referenceentityprimarykeylogicalname: { logicalName: 'mspp_referenceentityprimarykeylogicalname' },
	mspp_referenceentityreadonlyformname: { logicalName: 'mspp_referenceentityreadonlyformname' },
	mspp_referenceentityrelationshipname: { logicalName: 'mspp_referenceentityrelationshipname' },
	mspp_referenceentityshowreadonlyform: { logicalName: 'mspp_referenceentityshowreadonlyform', type: 'Boolean' },
	mspp_referenceentitysourcetype: { logicalName: 'mspp_referenceentitysourcetype', type: 'Integer' },
	mspp_referencequeryattributelogicalname: { logicalName: 'mspp_referencequeryattributelogicalname' },
	mspp_referencequerystringisprimarykey: { logicalName: 'mspp_referencequerystringisprimarykey', type: 'Boolean' },
	mspp_referencequerystringname: { logicalName: 'mspp_referencequerystringname' },
	mspp_referencerecordsourcerelationshipname: { logicalName: 'mspp_referencerecordsourcerelationshipname' },
	mspp_referencetargetlookupattributelogicalname: { logicalName: 'mspp_referencetargetlookupattributelogicalname' },
	mspp_registerstartupscript: { logicalName: 'mspp_registerstartupscript' },
	mspp_renderwebresourcesinline: { logicalName: 'mspp_renderwebresourcesinline', type: 'Boolean' },
	mspp_setentityreference: { logicalName: 'mspp_setentityreference', type: 'Boolean' },
	mspp_settings: { logicalName: 'mspp_settings' },
	mspp_showcaptchaforauthenticatedusers: { logicalName: 'mspp_showcaptchaforauthenticatedusers', type: 'Boolean' },
	mspp_showownerfields: { logicalName: 'mspp_showownerfields', type: 'Boolean' },
	mspp_showunsupportedfields: { logicalName: 'mspp_showunsupportedfields', type: 'Boolean' },
	mspp_storageaccountname: { logicalName: 'mspp_storageaccountname' },
	mspp_submitbuttonbusytext: { logicalName: 'mspp_submitbuttonbusytext' },
	mspp_submitbuttoncssclass: { logicalName: 'mspp_submitbuttoncssclass' },
	mspp_submitbuttontext: { logicalName: 'mspp_submitbuttontext' },
	mspp_successmessage: { logicalName: 'mspp_successmessage' },
	mspp_tabname: { logicalName: 'mspp_tabname' },
	mspp_targetentityportaluserlookupattribute: { logicalName: 'mspp_targetentityportaluserlookupattribute' },
	mspp_tooltipenabled: { logicalName: 'mspp_tooltipenabled', type: 'Boolean' },
	mspp_validationgroup: { logicalName: 'mspp_validationgroup' },
	mspp_validationsummarycssclass: { logicalName: 'mspp_validationsummarycssclass' },
	mspp_validationsummaryheadertext: { logicalName: 'mspp_validationsummaryheadertext' },
	mspp_validationsummarylinksenabled: { logicalName: 'mspp_validationsummarylinksenabled', type: 'Boolean' },
	mspp_validationsummarylinktext: { logicalName: 'mspp_validationsummarylinktext' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_entityform WebApi class for early-bound style coding
 * Usage: const mspp_entityform = new mspp_entityformApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_entityformApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_entityformApi>(entity, 'mspp_entityform', 'mspp_entityforms', mspp_entityformFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_entityformApi extends Imspp_entityformApi { }

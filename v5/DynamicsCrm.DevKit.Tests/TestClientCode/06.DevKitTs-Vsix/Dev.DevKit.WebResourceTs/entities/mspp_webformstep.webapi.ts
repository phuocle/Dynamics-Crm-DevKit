/**
 * mspp_webformstep.webapi.ts - mspp_webformstep WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_webformstep
 * All fields return string representation of their values
 */
export interface Imspp_webformstepFormattedValue {
	readonly mspp_accept: string;
	readonly mspp_allowmultiplefiles: string;
	readonly mspp_appendquerystring: string;
	readonly mspp_associatecurrentportaluser: string;
	readonly mspp_attachfile: string;
	readonly mspp_attachfilelabel: string;
	readonly mspp_attachfilemaxsize: string;
	readonly mspp_attachfilerequired: string;
	readonly mspp_attachfilerequirederrormessage: string;
	readonly mspp_attachfilerestrictaccept: string;
	readonly mspp_attachfilesizeerrormessage: string;
	readonly mspp_attachfilestoragelocation: string;
	readonly mspp_attachfiletypeerrormessage: string;
	readonly mspp_autogeneratesteps: string;
	readonly mspp_autonumberattributelogicalname: string;
	readonly mspp_autonumberdefinitionname: string;
	readonly mspp_captcharequired: string;
	readonly mspp_condition: string;
	readonly mspp_conditiondefaultnextstep: string;
	readonly mspp_containername: string;
	readonly mspp_createautonumber: string;
	readonly mspp_createdby: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_editexistingrecordpermitted: string;
	readonly mspp_editexpiredmessage: string;
	readonly mspp_editexpiredstatecode: string;
	readonly mspp_editexpiredstatusreason: string;
	readonly mspp_editnotpermittedmessage: string;
	readonly mspp_entitypermissionsenabled: string;
	readonly mspp_entitysourcestep: string;
	readonly mspp_entitysourcetype: string;
	readonly mspp_forceallfieldsrequired: string;
	readonly mspp_formname: string;
	readonly mspp_geolocation_addresslinefieldname: string;
	readonly mspp_geolocation_cityfieldname: string;
	readonly mspp_geolocation_countryfieldname: string;
	readonly mspp_geolocation_countyfieldname: string;
	readonly mspp_geolocation_displaymap: string;
	readonly mspp_geolocation_enabled: string;
	readonly mspp_geolocation_formattedaddressfieldname: string;
	readonly mspp_geolocation_latitudefieldname: string;
	readonly mspp_geolocation_longitudefieldname: string;
	readonly mspp_geolocation_maptype: string;
	readonly mspp_geolocation_neighborhoodfieldname: string;
	readonly mspp_geolocation_postalcodefieldname: string;
	readonly mspp_geolocation_statefieldname: string;
	readonly mspp_hideformonsuccess: string;
	readonly mspp_instructions: string;
	readonly mspp_loadeventkeyname: string;
	readonly mspp_loguser: string;
	readonly mspp_maximumnooffiles: string;
	readonly mspp_mode: string;
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_movepreviouseventkeyname: string;
	readonly mspp_movepreviouspermitted: string;
	readonly mspp_multiplerecordsperuserpermitted: string;
	readonly mspp_name: string;
	readonly mspp_nextbuttoncssclass: string;
	readonly mspp_nextbuttontext: string;
	readonly mspp_nextstep: string;
	readonly mspp_populatereferenceentitylookupfield: string;
	readonly mspp_portaluserlookupattributeisactivityparty: string;
	readonly mspp_postbackurl: string;
	readonly mspp_previousbuttoncssclass: string;
	readonly mspp_previousbuttontext: string;
	readonly mspp_previousstep: string;
	readonly mspp_primarykeyattributelogicalname: string;
	readonly mspp_primarykeyquerystringparametername: string;
	readonly mspp_provisionedlanguages: string;
	readonly mspp_recommendedfieldsrequired: string;
	readonly mspp_recordnotfoundmessage: string;
	readonly mspp_recordsourcerelationshipname: string;
	readonly mspp_redirecturl: string;
	readonly mspp_redirecturlappendentityidquerystring: string;
	readonly mspp_redirecturlcustomquerystring: string;
	readonly mspp_redirecturlquerystringattribute: string;
	readonly mspp_redirecturlquerystringattributeparamname: string;
	readonly mspp_redirecturlquerystringname: string;
	readonly mspp_redirectwebpage: string;
	readonly mspp_referenceentitylogicalname: string;
	readonly mspp_referenceentityprimarykeylogicalname: string;
	readonly mspp_referenceentityreadonlyformname: string;
	readonly mspp_referenceentityrelationshipname: string;
	readonly mspp_referenceentityshowreadonlyform: string;
	readonly mspp_referenceentitysourcetype: string;
	readonly mspp_referenceentitystep: string;
	readonly mspp_referencequeryattributelogicalname: string;
	readonly mspp_referencequerystringisprimarykey: string;
	readonly mspp_referencequerystringname: string;
	readonly mspp_referencerecordsourcerelationshipname: string;
	readonly mspp_referencesourceentitylogicalname: string;
	readonly mspp_referencetargetlookupattributelogicalname: string;
	readonly mspp_registerstartupscript: string;
	readonly mspp_renderwebresourcesinline: string;
	readonly mspp_savedeventkeyname: string;
	readonly mspp_savingeventkeyname: string;
	readonly mspp_setentityreference: string;
	readonly mspp_settings: string;
	readonly mspp_showcaptchaforauthenticatedusers: string;
	readonly mspp_showownerfields: string;
	readonly mspp_showunsupportedfields: string;
	readonly mspp_storageaccountname: string;
	readonly mspp_submitbuttonbusytext: string;
	readonly mspp_submitbuttoncssclass: string;
	readonly mspp_submitbuttontext: string;
	readonly mspp_submiteventkeyname: string;
	readonly mspp_successmessage: string;
	readonly mspp_tabname: string;
	readonly mspp_targetentitylogicalname: string;
	readonly mspp_targetentityportaluserlookupattribute: string;
	readonly mspp_targetentityprimarykeylogicalname: string;
	readonly mspp_title: string;
	readonly mspp_tooltipenabled: string;
	readonly mspp_type: string;
	readonly mspp_usercontrolpath: string;
	readonly mspp_usercontroltitle: string;
	readonly mspp_userhostaddressattributelogicalname: string;
	readonly mspp_useridentitynameattributelogicalname: string;
	readonly mspp_validationgroup: string;
	readonly mspp_validationsummarycssclass: string;
	readonly mspp_validationsummaryheadertext: string;
	readonly mspp_validationsummarylinksenabled: string;
	readonly mspp_validationsummarylinktext: string;
	readonly mspp_webform: string;
	readonly mspp_webformstepId: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_webformstep WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_webformstepApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_webformstepFormattedValue;
	/** The accept attribute specifies the MIME types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. audio/*,video/*,image/*). */
	mspp_accept: string | null;
	/** Allow Multiple Files */
	mspp_allowmultiplefiles: boolean | null;
	/** Append Query String */
	mspp_appendquerystring: boolean | null;
	/** Associate Current Portal User */
	mspp_associatecurrentportaluser: boolean | null;
	/** Attach File */
	mspp_attachfile: boolean | null;
	/** Attach File Label */
	mspp_attachfilelabel: string | null;
	/** Attach File Maximum Size */
	mspp_attachfilemaxsize: number | null;
	/** Attach File Required */
	mspp_attachfilerequired: boolean | null;
	/** Attach File Required Error Message */
	mspp_attachfilerequirederrormessage: string | null;
	/** Attach File Restrict Accept */
	mspp_attachfilerestrictaccept: boolean | null;
	/** Attach File Size Error Message */
	mspp_attachfilesizeerrormessage: string | null;
	/** Attach File Storage Location */
	mspp_attachfilestoragelocation: number | null;
	/** Attach File Type Error Message */
	mspp_attachfiletypeerrormessage: string | null;
	/** Auto Generate Steps From Tabs */
	mspp_autogeneratesteps: boolean | null;
	/** Auto Number Attribute Logical Name */
	mspp_autonumberattributelogicalname: string | null;
	/** Auto Number Definition Name */
	mspp_autonumberdefinitionname: string | null;
	/** Captcha Required */
	mspp_captcharequired: boolean | null;
	/** Condition */
	mspp_condition: string | null;
	/** If the condition test fails, this is the next step. */
	mspp_conditiondefaultnextstep: DevKit.Guid | null;
	/** Container Name */
	mspp_containername: string | null;
	/** Create Auto Number */
	mspp_createautonumber: boolean | null;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Edit Existing Record Permitted */
	mspp_editexistingrecordpermitted: boolean | null;
	/** Edit Expired Message */
	mspp_editexpiredmessage: string | null;
	/** Edit Expired State Code */
	mspp_editexpiredstatecode: number | null;
	/** Edit Expired Status Reason */
	mspp_editexpiredstatusreason: number | null;
	/** Edit Not Permitted Message */
	mspp_editnotpermittedmessage: string | null;
	/** Enable Table Permissions */
	mspp_entitypermissionsenabled: boolean | null;
	/** Unique identifier for Form Step associated with Form Step. */
	mspp_entitysourcestep: DevKit.Guid | null;
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
	/** Load Event Key Name */
	mspp_loadeventkeyname: string | null;
	/** Log User */
	mspp_loguser: boolean | null;
	/** Maximum No Of Files */
	mspp_maximumnooffiles: number | null;
	/** Mode */
	mspp_mode: number | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** Move Previous Event Key Name */
	mspp_movepreviouseventkeyname: string | null;
	/** Move Previous Permitted */
	mspp_movepreviouspermitted: boolean | null;
	/** Multiple Records Per User Permitted */
	mspp_multiplerecordsperuserpermitted: boolean | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Next Button CSS Class */
	mspp_nextbuttoncssclass: string | null;
	/** Next Button Text */
	mspp_nextbuttontext: string | null;
	/** Pointer to the next step. */
	mspp_nextstep: DevKit.Guid | null;
	/** Populate Table Reference Lookup Field */
	mspp_populatereferenceentitylookupfield: boolean | null;
	/** Is Activity Party */
	mspp_portaluserlookupattributeisactivityparty: boolean | null;
	/** Post Back URL */
	mspp_postbackurl: string | null;
	/** Previous Button CSS Class */
	mspp_previousbuttoncssclass: string | null;
	/** Previous Button Text */
	mspp_previousbuttontext: string | null;
	/** Pointer to the previous step. */
	mspp_previousstep: DevKit.Guid | null;
	/** The logical name of the primary key attribute of the target entity. */
	mspp_primarykeyattributelogicalname: string | null;
	/** Primary Key Query String Parameter Name */
	mspp_primarykeyquerystringparametername: string | null;
	/** Provisioned Languages */
	mspp_provisionedlanguages: number | null;
	/** Recommended Fields Required */
	mspp_recommendedfieldsrequired: boolean | null;
	/** Record Not Found Message */
	mspp_recordnotfoundmessage: string | null;
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
	/** Unique identifier for Form Step associated with Form Step. */
	mspp_referenceentitystep: DevKit.Guid | null;
	/** Reference Query Attribute Logical Name */
	mspp_referencequeryattributelogicalname: string | null;
	/** Reference Query String Is Primary Key */
	mspp_referencequerystringisprimarykey: boolean | null;
	/** Reference Query String Name */
	mspp_referencequerystringname: string | null;
	/** Record Source Relationship Name */
	mspp_referencerecordsourcerelationshipname: string | null;
	/** Reference Source Table name */
	mspp_referencesourceentitylogicalname: string | null;
	/** Reference Target Lookup Attribute Logical Name */
	mspp_referencetargetlookupattributelogicalname: string | null;
	/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
	mspp_registerstartupscript: string | null;
	/** Render Web Resources Inline */
	mspp_renderwebresourcesinline: boolean | null;
	/** Saved Event Key Name */
	mspp_savedeventkeyname: string | null;
	/** Saving Event Key Name */
	mspp_savingeventkeyname: string | null;
	/** Set Table Reference */
	mspp_setentityreference: boolean | null;
	/** Settings */
	mspp_settings: string | null;
	/** Show Captcha for authenticated users */
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
	/** Submit Event Key Name */
	mspp_submiteventkeyname: string | null;
	/** Success Message */
	mspp_successmessage: string | null;
	/** The name of the tab on an entity form to render. */
	mspp_tabname: string | null;
	/** Target Table name */
	mspp_targetentitylogicalname: string | null;
	/** Portal User Lookup Column */
	mspp_targetentityportaluserlookupattribute: string | null;
	/** Target Entity Primary Key Logical Name */
	mspp_targetentityprimarykeylogicalname: string | null;
	/** Title */
	mspp_title: string | null;
	/** ToolTip Enabled */
	mspp_tooltipenabled: boolean | null;
	/** Type */
	mspp_type: number | null;
	/** User Control Path */
	mspp_usercontrolpath: string | null;
	/** User Control Title */
	mspp_usercontroltitle: string | null;
	/** User Host Address Attribute Logical Name */
	mspp_userhostaddressattributelogicalname: string | null;
	/** User Identity Name Attribute Logical Name */
	mspp_useridentitynameattributelogicalname: string | null;
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
	/** Unique identifier for Multistep Form associated with Form Step. */
	mspp_webform: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	mspp_webformstepId: DevKit.Guid | null;
	/** Status of the Form Step */
	statecode: number | null;
	/** Reason for the status of the Form Step */
	statuscode: number | null;
}

const mspp_webformstepFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_accept: { logicalName: 'mspp_accept' },
	mspp_allowmultiplefiles: { logicalName: 'mspp_allowmultiplefiles', type: 'Boolean' },
	mspp_appendquerystring: { logicalName: 'mspp_appendquerystring', type: 'Boolean' },
	mspp_associatecurrentportaluser: { logicalName: 'mspp_associatecurrentportaluser', type: 'Boolean' },
	mspp_attachfile: { logicalName: 'mspp_attachfile', type: 'Boolean' },
	mspp_attachfilelabel: { logicalName: 'mspp_attachfilelabel' },
	mspp_attachfilemaxsize: { logicalName: 'mspp_attachfilemaxsize', type: 'Integer' },
	mspp_attachfilerequired: { logicalName: 'mspp_attachfilerequired', type: 'Boolean' },
	mspp_attachfilerequirederrormessage: { logicalName: 'mspp_attachfilerequirederrormessage' },
	mspp_attachfilerestrictaccept: { logicalName: 'mspp_attachfilerestrictaccept', type: 'Boolean' },
	mspp_attachfilesizeerrormessage: { logicalName: 'mspp_attachfilesizeerrormessage' },
	mspp_attachfilestoragelocation: { logicalName: 'mspp_attachfilestoragelocation', type: 'Integer' },
	mspp_attachfiletypeerrormessage: { logicalName: 'mspp_attachfiletypeerrormessage' },
	mspp_autogeneratesteps: { logicalName: 'mspp_autogeneratesteps', type: 'Boolean' },
	mspp_autonumberattributelogicalname: { logicalName: 'mspp_autonumberattributelogicalname' },
	mspp_autonumberdefinitionname: { logicalName: 'mspp_autonumberdefinitionname' },
	mspp_captcharequired: { logicalName: 'mspp_captcharequired', type: 'Boolean' },
	mspp_condition: { logicalName: 'mspp_condition' },
	mspp_conditiondefaultnextstep: { schemaName: 'mspp_conditiondefaultnextstep', logicalName: '_mspp_conditiondefaultnextstep_value', entityCollectionName: 'mspp_webformsteps', entityLogicalName: 'mspp_webformstep' },
	mspp_containername: { logicalName: 'mspp_containername' },
	mspp_createautonumber: { logicalName: 'mspp_createautonumber', type: 'Boolean' },
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_editexistingrecordpermitted: { logicalName: 'mspp_editexistingrecordpermitted', type: 'Boolean' },
	mspp_editexpiredmessage: { logicalName: 'mspp_editexpiredmessage' },
	mspp_editexpiredstatecode: { logicalName: 'mspp_editexpiredstatecode', type: 'Integer' },
	mspp_editexpiredstatusreason: { logicalName: 'mspp_editexpiredstatusreason', type: 'Integer' },
	mspp_editnotpermittedmessage: { logicalName: 'mspp_editnotpermittedmessage' },
	mspp_entitypermissionsenabled: { logicalName: 'mspp_entitypermissionsenabled', type: 'Boolean' },
	mspp_entitysourcestep: { schemaName: 'mspp_entitysourcestep', logicalName: '_mspp_entitysourcestep_value', entityCollectionName: 'mspp_webformsteps', entityLogicalName: 'mspp_webformstep' },
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
	mspp_loadeventkeyname: { logicalName: 'mspp_loadeventkeyname' },
	mspp_loguser: { logicalName: 'mspp_loguser', type: 'Boolean' },
	mspp_maximumnooffiles: { logicalName: 'mspp_maximumnooffiles', type: 'Integer' },
	mspp_mode: { logicalName: 'mspp_mode', type: 'Integer' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_movepreviouseventkeyname: { logicalName: 'mspp_movepreviouseventkeyname' },
	mspp_movepreviouspermitted: { logicalName: 'mspp_movepreviouspermitted', type: 'Boolean' },
	mspp_multiplerecordsperuserpermitted: { logicalName: 'mspp_multiplerecordsperuserpermitted', type: 'Boolean' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_nextbuttoncssclass: { logicalName: 'mspp_nextbuttoncssclass' },
	mspp_nextbuttontext: { logicalName: 'mspp_nextbuttontext' },
	mspp_nextstep: { schemaName: 'mspp_nextstep', logicalName: '_mspp_nextstep_value', entityCollectionName: 'mspp_webformsteps', entityLogicalName: 'mspp_webformstep' },
	mspp_populatereferenceentitylookupfield: { logicalName: 'mspp_populatereferenceentitylookupfield', type: 'Boolean' },
	mspp_portaluserlookupattributeisactivityparty: { logicalName: 'mspp_portaluserlookupattributeisactivityparty', type: 'Boolean' },
	mspp_postbackurl: { logicalName: 'mspp_postbackurl' },
	mspp_previousbuttoncssclass: { logicalName: 'mspp_previousbuttoncssclass' },
	mspp_previousbuttontext: { logicalName: 'mspp_previousbuttontext' },
	mspp_previousstep: { schemaName: 'mspp_previousstep', logicalName: '_mspp_previousstep_value', entityCollectionName: 'mspp_webformsteps', entityLogicalName: 'mspp_webformstep' },
	mspp_primarykeyattributelogicalname: { logicalName: 'mspp_primarykeyattributelogicalname' },
	mspp_primarykeyquerystringparametername: { logicalName: 'mspp_primarykeyquerystringparametername' },
	mspp_provisionedlanguages: { logicalName: 'mspp_provisionedlanguages', type: 'Integer' },
	mspp_recommendedfieldsrequired: { logicalName: 'mspp_recommendedfieldsrequired', type: 'Boolean' },
	mspp_recordnotfoundmessage: { logicalName: 'mspp_recordnotfoundmessage' },
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
	mspp_referenceentitystep: { schemaName: 'mspp_referenceentitystep', logicalName: '_mspp_referenceentitystep_value', entityCollectionName: 'mspp_webformsteps', entityLogicalName: 'mspp_webformstep' },
	mspp_referencequeryattributelogicalname: { logicalName: 'mspp_referencequeryattributelogicalname' },
	mspp_referencequerystringisprimarykey: { logicalName: 'mspp_referencequerystringisprimarykey', type: 'Boolean' },
	mspp_referencequerystringname: { logicalName: 'mspp_referencequerystringname' },
	mspp_referencerecordsourcerelationshipname: { logicalName: 'mspp_referencerecordsourcerelationshipname' },
	mspp_referencesourceentitylogicalname: { logicalName: 'mspp_referencesourceentitylogicalname' },
	mspp_referencetargetlookupattributelogicalname: { logicalName: 'mspp_referencetargetlookupattributelogicalname' },
	mspp_registerstartupscript: { logicalName: 'mspp_registerstartupscript' },
	mspp_renderwebresourcesinline: { logicalName: 'mspp_renderwebresourcesinline', type: 'Boolean' },
	mspp_savedeventkeyname: { logicalName: 'mspp_savedeventkeyname' },
	mspp_savingeventkeyname: { logicalName: 'mspp_savingeventkeyname' },
	mspp_setentityreference: { logicalName: 'mspp_setentityreference', type: 'Boolean' },
	mspp_settings: { logicalName: 'mspp_settings' },
	mspp_showcaptchaforauthenticatedusers: { logicalName: 'mspp_showcaptchaforauthenticatedusers', type: 'Boolean' },
	mspp_showownerfields: { logicalName: 'mspp_showownerfields', type: 'Boolean' },
	mspp_showunsupportedfields: { logicalName: 'mspp_showunsupportedfields', type: 'Boolean' },
	mspp_storageaccountname: { logicalName: 'mspp_storageaccountname' },
	mspp_submitbuttonbusytext: { logicalName: 'mspp_submitbuttonbusytext' },
	mspp_submitbuttoncssclass: { logicalName: 'mspp_submitbuttoncssclass' },
	mspp_submitbuttontext: { logicalName: 'mspp_submitbuttontext' },
	mspp_submiteventkeyname: { logicalName: 'mspp_submiteventkeyname' },
	mspp_successmessage: { logicalName: 'mspp_successmessage' },
	mspp_tabname: { logicalName: 'mspp_tabname' },
	mspp_targetentitylogicalname: { logicalName: 'mspp_targetentitylogicalname' },
	mspp_targetentityportaluserlookupattribute: { logicalName: 'mspp_targetentityportaluserlookupattribute' },
	mspp_targetentityprimarykeylogicalname: { logicalName: 'mspp_targetentityprimarykeylogicalname' },
	mspp_title: { logicalName: 'mspp_title' },
	mspp_tooltipenabled: { logicalName: 'mspp_tooltipenabled', type: 'Boolean' },
	mspp_type: { logicalName: 'mspp_type', type: 'Integer' },
	mspp_usercontrolpath: { logicalName: 'mspp_usercontrolpath' },
	mspp_usercontroltitle: { logicalName: 'mspp_usercontroltitle' },
	mspp_userhostaddressattributelogicalname: { logicalName: 'mspp_userhostaddressattributelogicalname' },
	mspp_useridentitynameattributelogicalname: { logicalName: 'mspp_useridentitynameattributelogicalname' },
	mspp_validationgroup: { logicalName: 'mspp_validationgroup' },
	mspp_validationsummarycssclass: { logicalName: 'mspp_validationsummarycssclass' },
	mspp_validationsummaryheadertext: { logicalName: 'mspp_validationsummaryheadertext' },
	mspp_validationsummarylinksenabled: { logicalName: 'mspp_validationsummarylinksenabled', type: 'Boolean' },
	mspp_validationsummarylinktext: { logicalName: 'mspp_validationsummarylinktext' },
	mspp_webform: { schemaName: 'mspp_webform', logicalName: '_mspp_webform_value', entityCollectionName: 'mspp_webforms', entityLogicalName: 'mspp_webform' },
	mspp_webformstepId: { logicalName: 'mspp_webformstepid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_webformstep WebApi class for early-bound style coding
 * Usage: const mspp_webformstep = new mspp_webformstepApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_webformstepApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_webformstepApi>(entity, 'mspp_webformstep', 'mspp_webformsteps', mspp_webformstepFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_webformstepApi extends Imspp_webformstepApi { }

/**
 * mspp_entityformmetadata.webapi.ts - mspp_entityformmetadata WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_entityformmetadata
 * All fields return string representation of their values
 */
export interface Imspp_entityformmetadataFormattedValue {
	readonly mspp_adddescription: string;
	readonly mspp_attributelogicalname: string;
	readonly mspp_constantsummaximumtotal: string;
	readonly mspp_constantsumminimumtotal: string;
	readonly mspp_constantsumvalidationerrormessage: string;
	readonly mspp_controlstyle: string;
	readonly mspp_createdby: string;
	readonly mspp_createdon_UtcDateAndTime: string;
	readonly mspp_cssclass: string;
	readonly mspp_description: string;
	readonly mspp_descriptionposition: string;
	readonly mspp_entityform: string;
	readonly mspp_entityformforcreate: string;
	readonly mspp_entityformmetadataId: string;
	readonly mspp_fieldisrequired: string;
	readonly mspp_geolocationvalidatorerrormessage: string;
	readonly mspp_groupname: string;
	readonly mspp_ignoredefaultvalue: string;
	readonly mspp_label: string;
	readonly mspp_maxmultiplechoiceselectedcount: string;
	readonly mspp_minmultiplechoiceselectedcount: string;
	readonly mspp_modifiedby: string;
	readonly mspp_modifiedon_UtcDateAndTime: string;
	readonly mspp_multiplechoicevalidationerrormessage: string;
	readonly mspp_name: string;
	readonly mspp_notes_settings: string;
	readonly mspp_onsavefromattribute: string;
	readonly mspp_onsavetype: string;
	readonly mspp_onsavevalue: string;
	readonly mspp_prepopulatefromattribute: string;
	readonly mspp_prepopulatetype: string;
	readonly mspp_prepopulatevalue: string;
	readonly mspp_provisionedlanguages: string;
	readonly mspp_randomizeoptionsetvalues: string;
	readonly mspp_rangevalidationerrormessage: string;
	readonly mspp_rankordernotiesvalidationerrormessage: string;
	readonly mspp_requiredfieldvalidationerrormessage: string;
	readonly mspp_sectionname: string;
	readonly mspp_setvalueonsave: string;
	readonly mspp_subgrid_name: string;
	readonly mspp_subgrid_settings: string;
	readonly mspp_tabname: string;
	readonly mspp_timeline_settings: string;
	readonly mspp_type: string;
	readonly mspp_useattributedescriptionproperty: string;
	readonly mspp_validationerrormessage: string;
	readonly mspp_validationregularexpression: string;
	readonly mspp_validationregularexpressionerrormessage: string;
	readonly statecode: string;
	readonly statuscode: string;
}

/**
 * mspp_entityformmetadata WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_entityformmetadataApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_entityformmetadataFormattedValue;
	/** Add Description */
	mspp_adddescription: boolean | null;
	/** Attribute Logical Name */
	mspp_attributelogicalname: string | null;
	/** Constant Sum Maximum Total */
	mspp_constantsummaximumtotal: number | null;
	/** Constant Sum Minimum Total */
	mspp_constantsumminimumtotal: number | null;
	/** Constant Sum Validation Error Message */
	mspp_constantsumvalidationerrormessage: string | null;
	/** Specifies how the control should be modified or enhanced. */
	mspp_controlstyle: number | null;
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** CSS Class */
	mspp_cssclass: string | null;
	/** Description */
	mspp_description: string | null;
	/** Position */
	mspp_descriptionposition: number | null;
	/** Unique identifier for Entity Form associated with Entity Form Metadata. */
	mspp_entityform: DevKit.Guid | null;
	/** Basic Form for Create */
	mspp_entityformforcreate: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	mspp_entityformmetadataId: DevKit.Guid | null;
	/** Field is Required */
	mspp_fieldisrequired: boolean | null;
	/** The error message to be displayed when the geolocation validator validation fails. */
	mspp_geolocationvalidatorerrormessage: string | null;
	/** Shows which attributes are to be grouped and rendered as a composite control if the control style is a groupings type such as "Group Whole Number as Constant Sum." */
	mspp_groupname: string | null;
	/** Ignore Default Value */
	mspp_ignoredefaultvalue: boolean | null;
	/** Label */
	mspp_label: string | null;
	/** Multiple Choice Max Selected Count */
	mspp_maxmultiplechoiceselectedcount: number | null;
	/** Multiple Choice Minimum Required Selected Count */
	mspp_minmultiplechoiceselectedcount: number | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** Multiple Choice Validation Error Message */
	mspp_multiplechoicevalidationerrormessage: string | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Notes Settings */
	mspp_notes_settings: string | null;
	/** Use this field, in conjunction with On Save Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
	mspp_onsavefromattribute: string | null;
	/** Shows the mechanisms for populating a field with a value. */
	mspp_onsavetype: number | null;
	/** Value */
	mspp_onsavevalue: string | null;
	/** Use this field, in conjunction with Prepopulate Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
	mspp_prepopulatefromattribute: string | null;
	/** Shows the mechanisms for populating a field with a value. */
	mspp_prepopulatetype: number | null;
	/** The value to prepopulate the field. */
	mspp_prepopulatevalue: string | null;
	/** Provisioned Languages */
	mspp_provisionedlanguages: number | null;
	/** Randomize Option Set Values */
	mspp_randomizeoptionsetvalues: boolean | null;
	/** Range Validation Error Message */
	mspp_rangevalidationerrormessage: string | null;
	/** Rank Order No Ties Validation Error Message */
	mspp_rankordernotiesvalidationerrormessage: string | null;
	/** The error message shown when a required field does not contain a value. */
	mspp_requiredfieldvalidationerrormessage: string | null;
	/** Section Name */
	mspp_sectionname: string | null;
	/** Set Value On Save */
	mspp_setvalueonsave: boolean | null;
	/** Subgrid Name */
	mspp_subgrid_name: string | null;
	/** Subgrid Settings */
	mspp_subgrid_settings: string | null;
	/** Tab Name */
	mspp_tabname: string | null;
	/** Timeline Settings */
	mspp_timeline_settings: string | null;
	/** Type */
	mspp_type: number | null;
	/** Use Attribute's Description Property */
	mspp_useattributedescriptionproperty: boolean | null;
	/** The error message defined for the validation. */
	mspp_validationerrormessage: string | null;
	/** Adds a regular expression validator with the specified regular expression. */
	mspp_validationregularexpression: string | null;
	/** Regular Expression Validation Error Message */
	mspp_validationregularexpressionerrormessage: string | null;
	/** Status of the Basic Form Metadata */
	statecode: number | null;
	/** Reason for the status of the Basic Form Metadata */
	statuscode: number | null;
}

const mspp_entityformmetadataFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_adddescription: { logicalName: 'mspp_adddescription', type: 'Boolean' },
	mspp_attributelogicalname: { logicalName: 'mspp_attributelogicalname' },
	mspp_constantsummaximumtotal: { logicalName: 'mspp_constantsummaximumtotal', type: 'Integer' },
	mspp_constantsumminimumtotal: { logicalName: 'mspp_constantsumminimumtotal', type: 'Integer' },
	mspp_constantsumvalidationerrormessage: { logicalName: 'mspp_constantsumvalidationerrormessage' },
	mspp_controlstyle: { logicalName: 'mspp_controlstyle', type: 'Integer' },
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_cssclass: { logicalName: 'mspp_cssclass' },
	mspp_description: { logicalName: 'mspp_description' },
	mspp_descriptionposition: { logicalName: 'mspp_descriptionposition', type: 'Integer' },
	mspp_entityform: { schemaName: 'mspp_entityform', logicalName: '_mspp_entityform_value', entityCollectionName: 'mspp_entityforms', entityLogicalName: 'mspp_entityform' },
	mspp_entityformforcreate: { schemaName: 'mspp_entityformforcreate', logicalName: '_mspp_entityformforcreate_value', entityCollectionName: 'mspp_entityforms', entityLogicalName: 'mspp_entityform' },
	mspp_entityformmetadataId: { logicalName: 'mspp_entityformmetadataid' },
	mspp_fieldisrequired: { logicalName: 'mspp_fieldisrequired', type: 'Boolean' },
	mspp_geolocationvalidatorerrormessage: { logicalName: 'mspp_geolocationvalidatorerrormessage' },
	mspp_groupname: { logicalName: 'mspp_groupname' },
	mspp_ignoredefaultvalue: { logicalName: 'mspp_ignoredefaultvalue', type: 'Boolean' },
	mspp_label: { logicalName: 'mspp_label' },
	mspp_maxmultiplechoiceselectedcount: { logicalName: 'mspp_maxmultiplechoiceselectedcount', type: 'Integer' },
	mspp_minmultiplechoiceselectedcount: { logicalName: 'mspp_minmultiplechoiceselectedcount', type: 'Integer' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_multiplechoicevalidationerrormessage: { logicalName: 'mspp_multiplechoicevalidationerrormessage' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_notes_settings: { logicalName: 'mspp_notes_settings' },
	mspp_onsavefromattribute: { logicalName: 'mspp_onsavefromattribute' },
	mspp_onsavetype: { logicalName: 'mspp_onsavetype', type: 'Integer' },
	mspp_onsavevalue: { logicalName: 'mspp_onsavevalue' },
	mspp_prepopulatefromattribute: { logicalName: 'mspp_prepopulatefromattribute' },
	mspp_prepopulatetype: { logicalName: 'mspp_prepopulatetype', type: 'Integer' },
	mspp_prepopulatevalue: { logicalName: 'mspp_prepopulatevalue' },
	mspp_provisionedlanguages: { logicalName: 'mspp_provisionedlanguages', type: 'Integer' },
	mspp_randomizeoptionsetvalues: { logicalName: 'mspp_randomizeoptionsetvalues', type: 'Boolean' },
	mspp_rangevalidationerrormessage: { logicalName: 'mspp_rangevalidationerrormessage' },
	mspp_rankordernotiesvalidationerrormessage: { logicalName: 'mspp_rankordernotiesvalidationerrormessage' },
	mspp_requiredfieldvalidationerrormessage: { logicalName: 'mspp_requiredfieldvalidationerrormessage' },
	mspp_sectionname: { logicalName: 'mspp_sectionname' },
	mspp_setvalueonsave: { logicalName: 'mspp_setvalueonsave', type: 'Boolean' },
	mspp_subgrid_name: { logicalName: 'mspp_subgrid_name' },
	mspp_subgrid_settings: { logicalName: 'mspp_subgrid_settings' },
	mspp_tabname: { logicalName: 'mspp_tabname' },
	mspp_timeline_settings: { logicalName: 'mspp_timeline_settings' },
	mspp_type: { logicalName: 'mspp_type', type: 'Integer' },
	mspp_useattributedescriptionproperty: { logicalName: 'mspp_useattributedescriptionproperty', type: 'Boolean' },
	mspp_validationerrormessage: { logicalName: 'mspp_validationerrormessage' },
	mspp_validationregularexpression: { logicalName: 'mspp_validationregularexpression' },
	mspp_validationregularexpressionerrormessage: { logicalName: 'mspp_validationregularexpressionerrormessage' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_entityformmetadata WebApi class for early-bound style coding
 * Usage: const mspp_entityformmetadata = new mspp_entityformmetadataApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_entityformmetadataApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_entityformmetadataApi>(entity, 'mspp_entityformmetadata', 'mspp_entityformmetadatas', mspp_entityformmetadataFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_entityformmetadataApi extends Imspp_entityformmetadataApi { }

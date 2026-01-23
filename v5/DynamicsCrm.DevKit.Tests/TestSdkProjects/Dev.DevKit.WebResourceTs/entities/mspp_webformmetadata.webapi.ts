/**
 * mspp_webformmetadata.webapi.ts - mspp_webformmetadata WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspp_webformmetadata WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_webformmetadataApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspp_webformmetadataApi, 'FormattedValue'>]: string };
	/** Add Description */
	mspp_adddescription: boolean | null;
	/** The name of the attribute field to be modified. */
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
	/** Basic Form for Create */
	mspp_entityformforcreate: DevKit.Guid | null;
	/** Basic Form for Create */
	mspp_entityformforcreateinwebformmetadata: DevKit.Guid | null;
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
	/** Create Invoice on Payment */
	mspp_purchasecreateinvoiceonpayment: boolean | null;
	/** Fulfill Order on Payment */
	mspp_purchasefulfillorderonpayment: boolean | null;
	/** Line Item Description Attribute Name */
	mspp_purchaselineitemdescriptionattribute: string | null;
	/** Purchase line item entity attribute name for instructions. */
	mspp_purchaselineiteminstructionsattribute: string | null;
	/** Purchase line item entity attribute name for the order in which a line item should be displayed. */
	mspp_purchaselineitemorderattribute: string | null;
	/** Purchase line item entity attribute name for Product lookup. If this value is not present and set, the corresponding line item will be excluded from the purchase. */
	mspp_purchaselineitemproductattribute: string | null;
	/** Purchase line item entity attribute name for item quantity. (Should be a decimal attribute.) */
	mspp_purchaselineitemquantityattribute: string | null;
	/** Relationship from the purchase entity that defines purchase line items. */
	mspp_purchaselineitemrelationship: string | null;
	/** Purchase line item entity attribute name for whether a line item is required. */
	mspp_purchaselineitemrequiredattribute: string | null;
	/** Purchase line item entity attribute name for Unit of Measure lookup. */
	mspp_purchaselineitemuomattribute: string | null;
	/** Relationship from the purchase entity for products to be purchased that are optional (the user must opt-in to purchase of these items). */
	mspp_purchaseoptionalproductsrelationship: string | null;
	/** The name to be used for all purchase quotes generated by this step. */
	mspp_purchasequotename: string | null;
	/** Relationship from the purchase entity for products to be purchased that are a required part of the purchase. */
	mspp_purchaserequiredproductsrelationship: string | null;
	/** Select whether to require the purchase process to collect shipping information. */
	mspp_purchaserequiresshipping: boolean | null;
	/** Target Entity Invoice Relationship Name */
	mspp_purchasetargetentityinvoicerelationship: string | null;
	/** Target Entity Order Relationship Name */
	mspp_purchasetargetentityorderrelationship: string | null;
	/** Relationship from the form step target entity to the purchase entity, if the step target is not the purchase entity. */
	mspp_purchasetargetentityrelationship: string | null;
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
	/** Unique identifier for entity instances */
	mspp_webformmetadataId: DevKit.Guid | null;
	/** Unique identifier for Form Step associated with Multistep Form Metadata. */
	mspp_webformstep: DevKit.Guid | null;
	/** Status of the Multistep Form Metadata */
	statecode: number | null;
	/** Reason for the status of the Multistep Form Metadata */
	statuscode: number | null;
}

const mspp_webformmetadataFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	mspp_entityformforcreate: { schemaName: 'mspp_entityformforcreate', logicalName: '_mspp_entityformforcreate_value', entityCollectionName: 'mspp_webforms', entityLogicalName: 'mspp_webform' },
	mspp_entityformforcreateinwebformmetadata: { schemaName: 'mspp_entityformforcreateinwebformmetadata', logicalName: '_mspp_entityformforcreateinwebformmetadata_value', entityCollectionName: 'mspp_entityforms', entityLogicalName: 'mspp_entityform' },
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
	mspp_notes_settings: { logicalName: 'mspp_notes_settings' },
	mspp_onsavefromattribute: { logicalName: 'mspp_onsavefromattribute' },
	mspp_onsavetype: { logicalName: 'mspp_onsavetype', type: 'Integer' },
	mspp_onsavevalue: { logicalName: 'mspp_onsavevalue' },
	mspp_prepopulatefromattribute: { logicalName: 'mspp_prepopulatefromattribute' },
	mspp_prepopulatetype: { logicalName: 'mspp_prepopulatetype', type: 'Integer' },
	mspp_prepopulatevalue: { logicalName: 'mspp_prepopulatevalue' },
	mspp_provisionedlanguages: { logicalName: 'mspp_provisionedlanguages', type: 'Integer' },
	mspp_purchasecreateinvoiceonpayment: { logicalName: 'mspp_purchasecreateinvoiceonpayment', type: 'Boolean' },
	mspp_purchasefulfillorderonpayment: { logicalName: 'mspp_purchasefulfillorderonpayment', type: 'Boolean' },
	mspp_purchaselineitemdescriptionattribute: { logicalName: 'mspp_purchaselineitemdescriptionattribute' },
	mspp_purchaselineiteminstructionsattribute: { logicalName: 'mspp_purchaselineiteminstructionsattribute' },
	mspp_purchaselineitemorderattribute: { logicalName: 'mspp_purchaselineitemorderattribute' },
	mspp_purchaselineitemproductattribute: { logicalName: 'mspp_purchaselineitemproductattribute' },
	mspp_purchaselineitemquantityattribute: { logicalName: 'mspp_purchaselineitemquantityattribute' },
	mspp_purchaselineitemrelationship: { logicalName: 'mspp_purchaselineitemrelationship' },
	mspp_purchaselineitemrequiredattribute: { logicalName: 'mspp_purchaselineitemrequiredattribute' },
	mspp_purchaselineitemuomattribute: { logicalName: 'mspp_purchaselineitemuomattribute' },
	mspp_purchaseoptionalproductsrelationship: { logicalName: 'mspp_purchaseoptionalproductsrelationship' },
	mspp_purchasequotename: { logicalName: 'mspp_purchasequotename' },
	mspp_purchaserequiredproductsrelationship: { logicalName: 'mspp_purchaserequiredproductsrelationship' },
	mspp_purchaserequiresshipping: { logicalName: 'mspp_purchaserequiresshipping', type: 'Boolean' },
	mspp_purchasetargetentityinvoicerelationship: { logicalName: 'mspp_purchasetargetentityinvoicerelationship' },
	mspp_purchasetargetentityorderrelationship: { logicalName: 'mspp_purchasetargetentityorderrelationship' },
	mspp_purchasetargetentityrelationship: { logicalName: 'mspp_purchasetargetentityrelationship' },
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
	mspp_webformmetadataId: { logicalName: 'mspp_webformmetadataid' },
	mspp_webformstep: { schemaName: 'mspp_webformstep', logicalName: '_mspp_webformstep_value', entityCollectionName: 'mspp_webformsteps', entityLogicalName: 'mspp_webformstep' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_webformmetadata WebApi class for early-bound style coding
 * Usage: const mspp_webformmetadata = new mspp_webformmetadataApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_webformmetadataApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_webformmetadataApi>(entity, 'mspp_webformmetadata', 'mspp_webformmetadatas', mspp_webformmetadataFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_webformmetadataApi extends Imspp_webformmetadataApi { }

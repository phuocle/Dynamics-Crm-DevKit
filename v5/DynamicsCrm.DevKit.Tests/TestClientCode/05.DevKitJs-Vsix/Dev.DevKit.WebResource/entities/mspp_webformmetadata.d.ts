//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class mspp_webformmetadataApi {
		/**
		* DynamicsCrm.DevKit mspp_webformmetadataApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		mspp_adddescription: boolean | null;
		/** The name of the attribute field to be modified. */
		mspp_attributelogicalname: string | null;
		mspp_constantsummaximumtotal: number | null;
		mspp_constantsumminimumtotal: number | null;
		mspp_constantsumvalidationerrormessage: string | null;
		/** Specifies how the control should be modified or enhanced. */
		mspp_controlstyle: OptionSet.mspp_webformmetadata.mspp_controlstyle | null;
		/** Shows who created the record. */
		mspp_createdby: string | null;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date | null;
		mspp_cssclass: string | null;
		mspp_description: string | null;
		mspp_descriptionposition: OptionSet.mspp_webformmetadata.mspp_descriptionposition | null;
		mspp_entityformforcreate: string | null;
		mspp_entityformforcreateinwebformmetadata: string | null;
		mspp_fieldisrequired: boolean | null;
		/** The error message to be displayed when the geolocation validator validation fails. */
		mspp_geolocationvalidatorerrormessage: string | null;
		/** Shows which attributes are to be grouped and rendered as a composite control if the control style is a groupings type such as "Group Whole Number as Constant Sum." */
		mspp_groupname: string | null;
		mspp_ignoredefaultvalue: boolean | null;
		mspp_label: string | null;
		mspp_maxmultiplechoiceselectedcount: number | null;
		mspp_minmultiplechoiceselectedcount: number | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		mspp_multiplechoicevalidationerrormessage: string | null;
		mspp_notes_settings: string | null;
		/** Use this field, in conjunction with On Save Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
		mspp_onsavefromattribute: string | null;
		/** Shows the mechanisms for populating a field with a value. */
		mspp_onsavetype: OptionSet.mspp_webformmetadata.mspp_onsavetype | null;
		mspp_onsavevalue: string | null;
		/** Use this field, in conjunction with Prepopulate Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
		mspp_prepopulatefromattribute: string | null;
		/** Shows the mechanisms for populating a field with a value. */
		mspp_prepopulatetype: OptionSet.mspp_webformmetadata.mspp_prepopulatetype | null;
		/** The value to prepopulate the field. */
		mspp_prepopulatevalue: string | null;
		mspp_provisionedlanguages: number | null;
		mspp_purchasecreateinvoiceonpayment: boolean | null;
		mspp_purchasefulfillorderonpayment: boolean | null;
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
		mspp_purchasetargetentityinvoicerelationship: string | null;
		mspp_purchasetargetentityorderrelationship: string | null;
		/** Relationship from the form step target entity to the purchase entity, if the step target is not the purchase entity. */
		mspp_purchasetargetentityrelationship: string | null;
		mspp_randomizeoptionsetvalues: boolean | null;
		mspp_rangevalidationerrormessage: string | null;
		mspp_rankordernotiesvalidationerrormessage: string | null;
		/** The error message shown when a required field does not contain a value. */
		mspp_requiredfieldvalidationerrormessage: string | null;
		mspp_sectionname: string | null;
		mspp_setvalueonsave: boolean | null;
		mspp_subgrid_name: string | null;
		mspp_subgrid_settings: string | null;
		mspp_tabname: string | null;
		mspp_timeline_settings: string | null;
		mspp_type: OptionSet.mspp_webformmetadata.mspp_type | null;
		mspp_useattributedescriptionproperty: boolean | null;
		/** The error message defined for the validation. */
		mspp_validationerrormessage: string | null;
		/** Adds a regular expression validator with the specified regular expression. */
		mspp_validationregularexpression: string | null;
		mspp_validationregularexpressionerrormessage: string | null;
		/** Unique identifier for entity instances */
		mspp_webformmetadataId: string | null;
		/** Unique identifier for Form Step associated with Multistep Form Metadata. */
		mspp_webformstep: string | null;
		/** Status of the Multistep Form Metadata */
		statecode: OptionSet.mspp_webformmetadata.statecode | null;
		/** Reason for the status of the Multistep Form Metadata */
		statuscode: OptionSet.mspp_webformmetadata.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly mspp_adddescription: string;
			/** The name of the attribute field to be modified. */
			readonly mspp_attributelogicalname: string;
			readonly mspp_constantsummaximumtotal: string;
			readonly mspp_constantsumminimumtotal: string;
			readonly mspp_constantsumvalidationerrormessage: string;
			/** Specifies how the control should be modified or enhanced. */
			readonly mspp_controlstyle: string;
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_cssclass: string;
			readonly mspp_description: string;
			readonly mspp_descriptionposition: string;
			readonly mspp_entityformforcreate: string;
			readonly mspp_entityformforcreateinwebformmetadata: string;
			readonly mspp_fieldisrequired: string;
			/** The error message to be displayed when the geolocation validator validation fails. */
			readonly mspp_geolocationvalidatorerrormessage: string;
			/** Shows which attributes are to be grouped and rendered as a composite control if the control style is a groupings type such as "Group Whole Number as Constant Sum." */
			readonly mspp_groupname: string;
			readonly mspp_ignoredefaultvalue: string;
			readonly mspp_label: string;
			readonly mspp_maxmultiplechoiceselectedcount: string;
			readonly mspp_minmultiplechoiceselectedcount: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			readonly mspp_multiplechoicevalidationerrormessage: string;
			readonly mspp_notes_settings: string;
			/** Use this field, in conjunction with On Save Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
			readonly mspp_onsavefromattribute: string;
			/** Shows the mechanisms for populating a field with a value. */
			readonly mspp_onsavetype: string;
			readonly mspp_onsavevalue: string;
			/** Use this field, in conjunction with Prepopulate Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
			readonly mspp_prepopulatefromattribute: string;
			/** Shows the mechanisms for populating a field with a value. */
			readonly mspp_prepopulatetype: string;
			/** The value to prepopulate the field. */
			readonly mspp_prepopulatevalue: string;
			readonly mspp_provisionedlanguages: string;
			readonly mspp_purchasecreateinvoiceonpayment: string;
			readonly mspp_purchasefulfillorderonpayment: string;
			readonly mspp_purchaselineitemdescriptionattribute: string;
			/** Purchase line item entity attribute name for instructions. */
			readonly mspp_purchaselineiteminstructionsattribute: string;
			/** Purchase line item entity attribute name for the order in which a line item should be displayed. */
			readonly mspp_purchaselineitemorderattribute: string;
			/** Purchase line item entity attribute name for Product lookup. If this value is not present and set, the corresponding line item will be excluded from the purchase. */
			readonly mspp_purchaselineitemproductattribute: string;
			/** Purchase line item entity attribute name for item quantity. (Should be a decimal attribute.) */
			readonly mspp_purchaselineitemquantityattribute: string;
			/** Relationship from the purchase entity that defines purchase line items. */
			readonly mspp_purchaselineitemrelationship: string;
			/** Purchase line item entity attribute name for whether a line item is required. */
			readonly mspp_purchaselineitemrequiredattribute: string;
			/** Purchase line item entity attribute name for Unit of Measure lookup. */
			readonly mspp_purchaselineitemuomattribute: string;
			/** Relationship from the purchase entity for products to be purchased that are optional (the user must opt-in to purchase of these items). */
			readonly mspp_purchaseoptionalproductsrelationship: string;
			/** The name to be used for all purchase quotes generated by this step. */
			readonly mspp_purchasequotename: string;
			/** Relationship from the purchase entity for products to be purchased that are a required part of the purchase. */
			readonly mspp_purchaserequiredproductsrelationship: string;
			/** Select whether to require the purchase process to collect shipping information. */
			readonly mspp_purchaserequiresshipping: string;
			readonly mspp_purchasetargetentityinvoicerelationship: string;
			readonly mspp_purchasetargetentityorderrelationship: string;
			/** Relationship from the form step target entity to the purchase entity, if the step target is not the purchase entity. */
			readonly mspp_purchasetargetentityrelationship: string;
			readonly mspp_randomizeoptionsetvalues: string;
			readonly mspp_rangevalidationerrormessage: string;
			readonly mspp_rankordernotiesvalidationerrormessage: string;
			/** The error message shown when a required field does not contain a value. */
			readonly mspp_requiredfieldvalidationerrormessage: string;
			readonly mspp_sectionname: string;
			readonly mspp_setvalueonsave: string;
			readonly mspp_subgrid_name: string;
			readonly mspp_subgrid_settings: string;
			readonly mspp_tabname: string;
			readonly mspp_timeline_settings: string;
			readonly mspp_type: string;
			readonly mspp_useattributedescriptionproperty: string;
			/** The error message defined for the validation. */
			readonly mspp_validationerrormessage: string;
			/** Adds a regular expression validator with the specified regular expression. */
			readonly mspp_validationregularexpression: string;
			readonly mspp_validationregularexpressionerrormessage: string;
			/** Unique identifier for entity instances */
			readonly mspp_webformmetadataId: string;
			/** Unique identifier for Form Step associated with Multistep Form Metadata. */
			readonly mspp_webformstep: string;
			/** Status of the Multistep Form Metadata */
			readonly statecode: string;
			/** Reason for the status of the Multistep Form Metadata */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_webformmetadata {
		enum mspp_controlstyle {
			/** Code_component = 756150001*/
			Code_component = 756150001,
			/** Group_Whole_Number_as_Constant_Sum = 100000003*/
			Group_Whole_Number_as_Constant_Sum = 100000003,
			/** Group_Whole_Number_as_Rank_Order_Scale_Allow_Ties = 100000005*/
			Group_Whole_Number_as_Rank_Order_Scale_Allow_Ties = 100000005,
			/** Group_Whole_Number_as_Rank_Order_Scale_No_Ties = 100000004*/
			Group_Whole_Number_as_Rank_Order_Scale_No_Ties = 100000004,
			/** Group_Whole_Number_as_Stack_Rank = 100000008*/
			Group_Whole_Number_as_Stack_Rank = 100000008,
			/** Multiple_Choice = 100000007*/
			Multiple_Choice = 100000007,
			/** Multiple_Choice_Matrix = 100000006*/
			Multiple_Choice_Matrix = 100000006,
			/** Option_Set_as_Horizontal_Radio_Button_List = 100000001*/
			Option_Set_as_Horizontal_Radio_Button_List = 100000001,
			/** Option_Set_as_Vertical_Radio_Button_List = 100000000*/
			Option_Set_as_Vertical_Radio_Button_List = 100000000,
			/** Render_Lookup_as_Dropdown = 756150000*/
			Render_Lookup_as_Dropdown = 756150000,
			/** Single_Line_of_Text_as_Geolocation_Lookup_Validator = 100000002*/
			Single_Line_of_Text_as_Geolocation_Lookup_Validator = 100000002
		}
		enum mspp_descriptionposition {
			/** Above_the_field = 100000000*/
			Above_the_field = 100000000,
			/** Above_the_label = 100000002*/
			Above_the_label = 100000002,
			/** Below_the_field = 100000001*/
			Below_the_field = 100000001
		}
		enum mspp_onsavetype {
			/** Current_Portal_User = 100000002*/
			Current_Portal_User = 100000002,
			/** Todays_Date = 100000001*/
			Todays_Date = 100000001,
			/** Value = 100000000*/
			Value = 100000000
		}
		enum mspp_prepopulatetype {
			/** Current_Portal_User = 100000002*/
			Current_Portal_User = 100000002,
			/** Todays_Date = 100000001*/
			Todays_Date = 100000001,
			/** Value = 100000000*/
			Value = 100000000
		}
		enum mspp_type {
			/** Attribute = 100000000*/
			Attribute = 100000000,
			/** Notes = 100000005*/
			Notes = 100000005,
			/** Purchase = 100000003*/
			Purchase = 100000003,
			/** Section = 100000001*/
			Section = 100000001,
			/** Subgrid = 100000004*/
			Subgrid = 100000004,
			/** Tab = 100000002*/
			Tab = 100000002,
			/** Timeline = 756150000*/
			Timeline = 756150000
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
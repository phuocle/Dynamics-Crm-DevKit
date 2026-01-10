//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_entityformmetadata_Information {
		interface Tabs {
		}
		interface Body {
			/** Add Description */
			mspp_adddescription: DevKit.Controls.Boolean;
			/** Attribute Logical Name */
			mspp_attributelogicalname: DevKit.Controls.String;
			/** Constant Sum Maximum Total */
			mspp_constantsummaximumtotal: DevKit.Controls.Integer;
			/** Constant Sum Minimum Total */
			mspp_constantsumminimumtotal: DevKit.Controls.Integer;
			/** Constant Sum Validation Error Message */
			mspp_constantsumvalidationerrormessage: DevKit.Controls.String;
			/** Specifies how the control should be modified or enhanced. */
			mspp_controlstyle: DevKit.Controls.OptionSet;
			/** CSS Class */
			mspp_cssclass: DevKit.Controls.String;
			/** Description */
			mspp_description: DevKit.Controls.String;
			/** Position */
			mspp_descriptionposition: DevKit.Controls.OptionSet;
			/** Unique identifier for Entity Form associated with Entity Form Metadata. */
			mspp_entityform: DevKit.Controls.Lookup;
			/** Basic Form for Create */
			mspp_entityformforcreate: DevKit.Controls.Lookup;
			/** Field is Required */
			mspp_fieldisrequired: DevKit.Controls.Boolean;
			/** The error message to be displayed when the geolocation validator validation fails. */
			mspp_geolocationvalidatorerrormessage: DevKit.Controls.String;
			/** Shows which attributes are to be grouped and rendered as a composite control if the control style is a groupings type such as "Group Whole Number as Constant Sum." */
			mspp_groupname: DevKit.Controls.String;
			/** Ignore Default Value */
			mspp_ignoredefaultvalue: DevKit.Controls.Boolean;
			/** Label */
			mspp_label: DevKit.Controls.String;
			/** Multiple Choice Max Selected Count */
			mspp_maxmultiplechoiceselectedcount: DevKit.Controls.Integer;
			/** Multiple Choice Minimum Required Selected Count */
			mspp_minmultiplechoiceselectedcount: DevKit.Controls.Integer;
			/** Multiple Choice Validation Error Message */
			mspp_multiplechoicevalidationerrormessage: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Notes Settings */
			mspp_notes_settings: DevKit.Controls.String;
			/** Use this field, in conjunction with On Save Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
			mspp_onsavefromattribute: DevKit.Controls.String;
			/** Shows the mechanisms for populating a field with a value. */
			mspp_onsavetype: DevKit.Controls.OptionSet;
			/** Value */
			mspp_onsavevalue: DevKit.Controls.String;
			/** Use this field, in conjunction with Prepopulate Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
			mspp_prepopulatefromattribute: DevKit.Controls.String;
			/** Shows the mechanisms for populating a field with a value. */
			mspp_prepopulatetype: DevKit.Controls.OptionSet;
			/** The value to prepopulate the field. */
			mspp_prepopulatevalue: DevKit.Controls.String;
			/** Provisioned Languages */
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			/** Randomize Option Set Values */
			mspp_randomizeoptionsetvalues: DevKit.Controls.Boolean;
			/** Range Validation Error Message */
			mspp_rangevalidationerrormessage: DevKit.Controls.String;
			/** Rank Order No Ties Validation Error Message */
			mspp_rankordernotiesvalidationerrormessage: DevKit.Controls.String;
			/** The error message shown when a required field does not contain a value. */
			mspp_requiredfieldvalidationerrormessage: DevKit.Controls.String;
			/** Section Name */
			mspp_sectionname: DevKit.Controls.String;
			/** Set Value On Save */
			mspp_setvalueonsave: DevKit.Controls.Boolean;
			/** Subgrid Name */
			mspp_subgrid_name: DevKit.Controls.String;
			/** Subgrid Settings */
			mspp_subgrid_settings: DevKit.Controls.String;
			/** Tab Name */
			mspp_tabname: DevKit.Controls.String;
			/** Timeline Settings */
			mspp_timeline_settings: DevKit.Controls.String;
			/** Type */
			mspp_type: DevKit.Controls.OptionSet;
			/** Use Attribute's Description Property */
			mspp_useattributedescriptionproperty: DevKit.Controls.Boolean;
			/** The error message defined for the validation. */
			mspp_validationerrormessage: DevKit.Controls.String;
			/** Adds a regular expression validator with the specified regular expression. */
			mspp_validationregularexpression: DevKit.Controls.String;
			/** Regular Expression Validation Error Message */
			mspp_validationregularexpressionerrormessage: DevKit.Controls.String;
			WebResource_attributelogicalname: DevKit.Controls.WebResource;
			WebResource_localizeconstantsumerrormessage: DevKit.Controls.WebResource;
			WebResource_localizedescription: DevKit.Controls.WebResource;
			WebResource_localizegeolocationerrormessage: DevKit.Controls.WebResource;
			WebResource_localizelabel: DevKit.Controls.WebResource;
			WebResource_localizemultiplechoiceerrormessage: DevKit.Controls.WebResource;
			WebResource_localizerangevalidationerrormessage: DevKit.Controls.WebResource;
			WebResource_localizerankordernotieserrormessage: DevKit.Controls.WebResource;
			WebResource_localizeregularexpressionerrormessage: DevKit.Controls.WebResource;
			WebResource_localizerequiredfieldvalidationerrormessage: DevKit.Controls.WebResource;
			WebResource_localizevalidationerrormessage: DevKit.Controls.WebResource;
			WebResource_mspp_onsavefromattribute: DevKit.Controls.WebResource;
			WebResource_mspp_prepopulatefromattribute: DevKit.Controls.WebResource;
			WebResource_notes_settings: DevKit.Controls.WebResource;
			WebResource_sectionname: DevKit.Controls.WebResource;
			WebResource_subgrid_name: DevKit.Controls.WebResource;
			WebResource_subgrid_settings: DevKit.Controls.WebResource;
			WebResource_tabname: DevKit.Controls.WebResource;
			WebResource_timeline_settings: DevKit.Controls.WebResource;
		}
	}
	export class Formmspp_entityformmetadata_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form mspp_entityformmetadata_Information */
		Body: DevKit.Formmspp_entityformmetadata_Information.Body;
	}
	export class mspp_entityformmetadataApi {
		/**
		* DynamicsCrm.DevKit mspp_entityformmetadataApi
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
		mspp_attributelogicalname: string | null;
		mspp_constantsummaximumtotal: number | null;
		mspp_constantsumminimumtotal: number | null;
		mspp_constantsumvalidationerrormessage: string | null;
		/** Specifies how the control should be modified or enhanced. */
		mspp_controlstyle: OptionSet.mspp_entityformmetadata.mspp_controlstyle | null;
		/** Shows who created the record. */
		mspp_createdby: string | null;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date | null;
		mspp_cssclass: string | null;
		mspp_description: string | null;
		mspp_descriptionposition: OptionSet.mspp_entityformmetadata.mspp_descriptionposition | null;
		/** Unique identifier for Entity Form associated with Entity Form Metadata. */
		mspp_entityform: string | null;
		mspp_entityformforcreate: string | null;
		/** Unique identifier for entity instances */
		mspp_entityformmetadataId: string | null;
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
		/** The name of the custom entity. */
		mspp_name: string | null;
		mspp_notes_settings: string | null;
		/** Use this field, in conjunction with On Save Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
		mspp_onsavefromattribute: string | null;
		/** Shows the mechanisms for populating a field with a value. */
		mspp_onsavetype: OptionSet.mspp_entityformmetadata.mspp_onsavetype | null;
		mspp_onsavevalue: string | null;
		/** Use this field, in conjunction with Prepopulate Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
		mspp_prepopulatefromattribute: string | null;
		/** Shows the mechanisms for populating a field with a value. */
		mspp_prepopulatetype: OptionSet.mspp_entityformmetadata.mspp_prepopulatetype | null;
		/** The value to prepopulate the field. */
		mspp_prepopulatevalue: string | null;
		mspp_provisionedlanguages: number | null;
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
		mspp_type: OptionSet.mspp_entityformmetadata.mspp_type | null;
		mspp_useattributedescriptionproperty: boolean | null;
		/** The error message defined for the validation. */
		mspp_validationerrormessage: string | null;
		/** Adds a regular expression validator with the specified regular expression. */
		mspp_validationregularexpression: string | null;
		mspp_validationregularexpressionerrormessage: string | null;
		/** Status of the Basic Form Metadata */
		statecode: OptionSet.mspp_entityformmetadata.statecode | null;
		/** Reason for the status of the Basic Form Metadata */
		statuscode: OptionSet.mspp_entityformmetadata.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly mspp_adddescription: string;
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
			/** Unique identifier for Entity Form associated with Entity Form Metadata. */
			readonly mspp_entityform: string;
			readonly mspp_entityformforcreate: string;
			/** Unique identifier for entity instances */
			readonly mspp_entityformmetadataId: string;
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
			/** The name of the custom entity. */
			readonly mspp_name: string;
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
			/** Status of the Basic Form Metadata */
			readonly statecode: string;
			/** Reason for the status of the Basic Form Metadata */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_entityformmetadata {
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
			/** Section = 100000001*/
			Section = 100000001,
			/** Subgrid = 100000003*/
			Subgrid = 100000003,
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
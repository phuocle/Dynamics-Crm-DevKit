//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_entityformmetadata_Information {
		interface Tabs {
		}
		interface Body {
			mspp_adddescription: DevKit.Controls.Boolean;
			mspp_attributelogicalname: DevKit.Controls.String;
			mspp_constantsummaximumtotal: DevKit.Controls.Integer;
			mspp_constantsumminimumtotal: DevKit.Controls.Integer;
			mspp_constantsumvalidationerrormessage: DevKit.Controls.String;
			/** Specifies how the control should be modified or enhanced. */
			mspp_controlstyle: DevKit.Controls.OptionSet;
			mspp_cssclass: DevKit.Controls.String;
			mspp_description: DevKit.Controls.String;
			mspp_descriptionposition: DevKit.Controls.OptionSet;
			/** Unique identifier for Entity Form associated with Entity Form Metadata. */
			mspp_entityform: DevKit.Controls.Lookup;
			mspp_entityformforcreate: DevKit.Controls.Lookup;
			mspp_fieldisrequired: DevKit.Controls.Boolean;
			/** The error message to be displayed when the geolocation validator validation fails. */
			mspp_geolocationvalidatorerrormessage: DevKit.Controls.String;
			/** Shows which attributes are to be grouped and rendered as a composite control if the control style is a groupings type such as "Group Whole Number as Constant Sum." */
			mspp_groupname: DevKit.Controls.String;
			mspp_ignoredefaultvalue: DevKit.Controls.Boolean;
			mspp_label: DevKit.Controls.String;
			mspp_maxmultiplechoiceselectedcount: DevKit.Controls.Integer;
			mspp_minmultiplechoiceselectedcount: DevKit.Controls.Integer;
			mspp_multiplechoicevalidationerrormessage: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			mspp_notes_settings: DevKit.Controls.String;
			/** Use this field, in conjunction with On Save Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
			mspp_onsavefromattribute: DevKit.Controls.String;
			/** Shows the mechanisms for populating a field with a value. */
			mspp_onsavetype: DevKit.Controls.OptionSet;
			mspp_onsavevalue: DevKit.Controls.String;
			/** Use this field, in conjunction with Prepopulate Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
			mspp_prepopulatefromattribute: DevKit.Controls.String;
			/** Shows the mechanisms for populating a field with a value. */
			mspp_prepopulatetype: DevKit.Controls.OptionSet;
			/** The value to prepopulate the field. */
			mspp_prepopulatevalue: DevKit.Controls.String;
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			mspp_randomizeoptionsetvalues: DevKit.Controls.Boolean;
			mspp_rangevalidationerrormessage: DevKit.Controls.String;
			mspp_rankordernotiesvalidationerrormessage: DevKit.Controls.String;
			/** The error message shown when a required field does not contain a value. */
			mspp_requiredfieldvalidationerrormessage: DevKit.Controls.String;
			mspp_sectionname: DevKit.Controls.String;
			mspp_setvalueonsave: DevKit.Controls.Boolean;
			mspp_subgrid_name: DevKit.Controls.String;
			mspp_subgrid_settings: DevKit.Controls.String;
			mspp_tabname: DevKit.Controls.String;
			mspp_timeline_settings: DevKit.Controls.String;
			mspp_type: DevKit.Controls.OptionSet;
			mspp_useattributedescriptionproperty: DevKit.Controls.Boolean;
			/** The error message defined for the validation. */
			mspp_validationerrormessage: DevKit.Controls.String;
			/** Adds a regular expression validator with the specified regular expression. */
			mspp_validationregularexpression: DevKit.Controls.String;
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
		interface Navigation {

		}
	}
	class Formmspp_entityformmetadata_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_entityformmetadata_Information */
		Body: DevKit.Formmspp_entityformmetadata_Information.Body;
		/** The Navigation of form mspp_entityformmetadata_Information */
		Navigation: DevKit.Formmspp_entityformmetadata_Information.Navigation;
		/** The SidePanes of form mspp_entityformmetadata_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_entityformmetadataApi {
		/**
		* DynamicsCrm.DevKit mspp_entityformmetadataApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		mspp_adddescription: boolean;
		mspp_attributelogicalname: string;
		mspp_constantsummaximumtotal: number;
		mspp_constantsumminimumtotal: number;
		mspp_constantsumvalidationerrormessage: string;
		/** Specifies how the control should be modified or enhanced. */
		mspp_controlstyle: OptionSet.mspp_entityformmetadata.mspp_controlstyle;
		/** Shows who created the record. */
		mspp_createdby: string;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_cssclass: string;
		mspp_description: string;
		mspp_descriptionposition: OptionSet.mspp_entityformmetadata.mspp_descriptionposition;
		/** Unique identifier for Entity Form associated with Entity Form Metadata. */
		mspp_entityform: string;
		mspp_entityformforcreate: string;
		/** Unique identifier for entity instances */
		mspp_entityformmetadataId: string;
		mspp_fieldisrequired: boolean;
		/** The error message to be displayed when the geolocation validator validation fails. */
		mspp_geolocationvalidatorerrormessage: string;
		/** Shows which attributes are to be grouped and rendered as a composite control if the control style is a groupings type such as "Group Whole Number as Constant Sum." */
		mspp_groupname: string;
		mspp_ignoredefaultvalue: boolean;
		mspp_label: string;
		mspp_maxmultiplechoiceselectedcount: number;
		mspp_minmultiplechoiceselectedcount: number;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		mspp_multiplechoicevalidationerrormessage: string;
		/** The name of the custom entity. */
		mspp_name: string;
		mspp_notes_settings: string;
		/** Use this field, in conjunction with On Save Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
		mspp_onsavefromattribute: string;
		/** Shows the mechanisms for populating a field with a value. */
		mspp_onsavetype: OptionSet.mspp_entityformmetadata.mspp_onsavetype;
		mspp_onsavevalue: string;
		/** Use this field, in conjunction with Prepopulate Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
		mspp_prepopulatefromattribute: string;
		/** Shows the mechanisms for populating a field with a value. */
		mspp_prepopulatetype: OptionSet.mspp_entityformmetadata.mspp_prepopulatetype;
		/** The value to prepopulate the field. */
		mspp_prepopulatevalue: string;
		mspp_provisionedlanguages: number;
		mspp_randomizeoptionsetvalues: boolean;
		mspp_rangevalidationerrormessage: string;
		mspp_rankordernotiesvalidationerrormessage: string;
		/** The error message shown when a required field does not contain a value. */
		mspp_requiredfieldvalidationerrormessage: string;
		mspp_sectionname: string;
		mspp_setvalueonsave: boolean;
		mspp_subgrid_name: string;
		mspp_subgrid_settings: string;
		mspp_tabname: string;
		mspp_timeline_settings: string;
		mspp_type: OptionSet.mspp_entityformmetadata.mspp_type;
		mspp_useattributedescriptionproperty: boolean;
		/** The error message defined for the validation. */
		mspp_validationerrormessage: string;
		/** Adds a regular expression validator with the specified regular expression. */
		mspp_validationregularexpression: string;
		mspp_validationregularexpressionerrormessage: string;
		/** Status of the Basic Form Metadata */
		statecode: OptionSet.mspp_entityformmetadata.statecode;
		/** Reason for the status of the Basic Form Metadata */
		statuscode: OptionSet.mspp_entityformmetadata.statuscode;
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
			/** 756150001 */
			Code_component,
			/** 100000003 */
			Group_Whole_Number_as_Constant_Sum,
			/** 100000005 */
			Group_Whole_Number_as_Rank_Order_Scale_Allow_Ties,
			/** 100000004 */
			Group_Whole_Number_as_Rank_Order_Scale_No_Ties,
			/** 100000008 */
			Group_Whole_Number_as_Stack_Rank,
			/** 100000007 */
			Multiple_Choice,
			/** 100000006 */
			Multiple_Choice_Matrix,
			/** 100000001 */
			Option_Set_as_Horizontal_Radio_Button_List,
			/** 100000000 */
			Option_Set_as_Vertical_Radio_Button_List,
			/** 756150000 */
			Render_Lookup_as_Dropdown,
			/** 100000002 */
			Single_Line_of_Text_as_Geolocation_Lookup_Validator
		}
		enum mspp_descriptionposition {
			/** 100000000 */
			Above_the_field,
			/** 100000002 */
			Above_the_label,
			/** 100000001 */
			Below_the_field
		}
		enum mspp_onsavetype {
			/** 100000002 */
			Current_Portal_User,
			/** 100000001 */
			Todays_Date,
			/** 100000000 */
			Value
		}
		enum mspp_prepopulatetype {
			/** 100000002 */
			Current_Portal_User,
			/** 100000001 */
			Todays_Date,
			/** 100000000 */
			Value
		}
		enum mspp_type {
			/** 100000000 */
			Attribute,
			/** 100000005 */
			Notes,
			/** 100000001 */
			Section,
			/** 100000003 */
			Subgrid,
			/** 100000002 */
			Tab,
			/** 756150000 */
			Timeline
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
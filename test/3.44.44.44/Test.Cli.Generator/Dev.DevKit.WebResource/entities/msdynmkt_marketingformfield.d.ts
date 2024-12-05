//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDate_Time_Field_Form {
		interface Tabs {
		}
		interface Body {
			msdynmkt_date_defaultvalue: DevKit.Controls.Date;
			msdynmkt_datetime_defaultvalue: DevKit.Controls.DateTime;
			msdynmkt_datetime_displayoption: DevKit.Controls.OptionSet;
			/** Hide field */
			msdynmkt_hide: DevKit.Controls.Boolean;
			/** Placeholder text */
			msdynmkt_placeholder: DevKit.Controls.String;
			msdynmkt_prefill: DevKit.Controls.ActionCards;
			/** Required */
			msdynmkt_required: DevKit.Controls.Boolean;
			/** Target audience attribute */
			msdynmkt_targetentity: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormDate_Time_Field_Form extends DevKit.IForm {
		/**
		* Date Time Field Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Date_Time_Field_Form */
		Body: DevKit.FormDate_Time_Field_Form.Body;
		/** The Navigation of form Date_Time_Field_Form */
		Navigation: DevKit.FormDate_Time_Field_Form.Navigation;
		/** The SidePanes of form Date_Time_Field_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormLong_Text_Field_Form {
		interface Tabs {
		}
		interface Body {
			msdynmkt_defaultvalue: DevKit.Controls.String;
			/** Hide field */
			msdynmkt_hide: DevKit.Controls.Boolean;
			/** Placeholder text */
			msdynmkt_placeholder: DevKit.Controls.String;
			msdynmkt_prefill: DevKit.Controls.ActionCards;
			/** Required */
			msdynmkt_required: DevKit.Controls.Boolean;
			/** Target audience attribute */
			msdynmkt_targetentity: DevKit.Controls.String;
			msdynmkt_validation: DevKit.Controls.ActionCards;
		}
		interface Navigation {

		}
	}
	class FormLong_Text_Field_Form extends DevKit.IForm {
		/**
		* Long Text Field Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Long_Text_Field_Form */
		Body: DevKit.FormLong_Text_Field_Form.Body;
		/** The Navigation of form Long_Text_Field_Form */
		Navigation: DevKit.FormLong_Text_Field_Form.Navigation;
		/** The SidePanes of form Long_Text_Field_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormLookup_Field_Form {
		interface Tabs {
		}
		interface Body {
			/** Hide field */
			msdynmkt_hide: DevKit.Controls.Boolean;
			msdynmkt_lookup_targets: DevKit.Controls.String;
			/** Placeholder text */
			msdynmkt_placeholder: DevKit.Controls.String;
			msdynmkt_prefill: DevKit.Controls.ActionCards;
			/** I acknowledge the select lookup will be visible to public */
			msdynmkt_publicvisibility: DevKit.Controls.Boolean;
			/** Required */
			msdynmkt_required: DevKit.Controls.Boolean;
			/** Target audience attribute */
			msdynmkt_targetentity: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormLookup_Field_Form extends DevKit.IForm {
		/**
		* Lookup Field Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Lookup_Field_Form */
		Body: DevKit.FormLookup_Field_Form.Body;
		/** The Navigation of form Lookup_Field_Form */
		Navigation: DevKit.FormLookup_Field_Form.Navigation;
		/** The SidePanes of form Lookup_Field_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormMulti_select_Field_Form {
		interface Tabs {
		}
		interface Body {
			msdynmkt_fieldoptions: DevKit.Controls.String;
			/** Hide field */
			msdynmkt_hide: DevKit.Controls.Boolean;
			msdynmkt_prefill: DevKit.Controls.ActionCards;
			/** Required */
			msdynmkt_required: DevKit.Controls.Boolean;
			/** Target audience attribute */
			msdynmkt_targetentity: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormMulti_select_Field_Form extends DevKit.IForm {
		/**
		* Multi-select Field Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Multi_select_Field_Form */
		Body: DevKit.FormMulti_select_Field_Form.Body;
		/** The Navigation of form Multi_select_Field_Form */
		Navigation: DevKit.FormMulti_select_Field_Form.Navigation;
		/** The SidePanes of form Multi_select_Field_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormOptionset_Field_Form {
		interface Tabs {
		}
		interface Body {
			/** Allow empty option */
			msdynmkt_allowemptyoption: DevKit.Controls.Boolean;
			msdynmkt_defaultvalue: DevKit.Controls.ActionCards;
			msdynmkt_fieldoptions: DevKit.Controls.String;
			/** Hide field */
			msdynmkt_hide: DevKit.Controls.Boolean;
			msdynmkt_optionsetdisplayoption: DevKit.Controls.OptionSet;
			/** Placeholder text */
			msdynmkt_placeholder: DevKit.Controls.String;
			msdynmkt_prefill: DevKit.Controls.ActionCards;
			/** Required */
			msdynmkt_required: DevKit.Controls.Boolean;
			/** Target audience attribute */
			msdynmkt_targetentity: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormOptionset_Field_Form extends DevKit.IForm {
		/**
		* Optionset Field Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Optionset_Field_Form */
		Body: DevKit.FormOptionset_Field_Form.Body;
		/** The Navigation of form Optionset_Field_Form */
		Navigation: DevKit.FormOptionset_Field_Form.Navigation;
		/** The SidePanes of form Optionset_Field_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPhone_Field_Form {
		interface Tabs {
		}
		interface Body {
			msdynmkt_countrycode: DevKit.Controls.ActionCards;
			msdynmkt_defaultvalue: DevKit.Controls.String;
			/** Hide field */
			msdynmkt_hide: DevKit.Controls.Boolean;
			/** Placeholder text */
			msdynmkt_placeholder: DevKit.Controls.String;
			msdynmkt_prefill: DevKit.Controls.ActionCards;
			/** Required */
			msdynmkt_required: DevKit.Controls.Boolean;
			/** Target audience attribute */
			msdynmkt_targetentity: DevKit.Controls.String;
			msdynmkt_validation: DevKit.Controls.ActionCards;
		}
		interface Navigation {

		}
	}
	class FormPhone_Field_Form extends DevKit.IForm {
		/**
		* Phone Field Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Phone_Field_Form */
		Body: DevKit.FormPhone_Field_Form.Body;
		/** The Navigation of form Phone_Field_Form */
		Navigation: DevKit.FormPhone_Field_Form.Navigation;
		/** The SidePanes of form Phone_Field_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormShort_Text_Field_Form {
		interface Tabs {
		}
		interface Body {
			msdynmkt_defaultvalue: DevKit.Controls.String;
			/** Hide field */
			msdynmkt_hide: DevKit.Controls.Boolean;
			/** Placeholder text */
			msdynmkt_placeholder: DevKit.Controls.String;
			msdynmkt_prefill: DevKit.Controls.ActionCards;
			/** Required */
			msdynmkt_required: DevKit.Controls.Boolean;
			/** Target audience attribute */
			msdynmkt_targetentity: DevKit.Controls.String;
			msdynmkt_validation: DevKit.Controls.ActionCards;
		}
		interface Navigation {

		}
	}
	class FormShort_Text_Field_Form extends DevKit.IForm {
		/**
		* Short Text Field Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Short_Text_Field_Form */
		Body: DevKit.FormShort_Text_Field_Form.Body;
		/** The Navigation of form Short_Text_Field_Form */
		Navigation: DevKit.FormShort_Text_Field_Form.Navigation;
		/** The SidePanes of form Short_Text_Field_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTwo_option_Field_Form {
		interface Tabs {
		}
		interface Body {
			/** Allow empty option */
			msdynmkt_allowemptyoption: DevKit.Controls.Boolean;
			msdynmkt_defaultvalue: DevKit.Controls.ActionCards;
			msdynmkt_fieldoptions: DevKit.Controls.String;
			/** Hide field */
			msdynmkt_hide: DevKit.Controls.Boolean;
			msdynmkt_prefill: DevKit.Controls.ActionCards;
			/** Required */
			msdynmkt_required: DevKit.Controls.Boolean;
			/** Target audience attribute */
			msdynmkt_targetentity: DevKit.Controls.String;
			msdynmkt_twooption_displayoption: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class FormTwo_option_Field_Form extends DevKit.IForm {
		/**
		* Two-option Field Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Two_option_Field_Form */
		Body: DevKit.FormTwo_option_Field_Form.Body;
		/** The Navigation of form Two_option_Field_Form */
		Navigation: DevKit.FormTwo_option_Field_Form.Navigation;
		/** The SidePanes of form Two_option_Field_Form */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_marketingformfieldApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_marketingformfieldApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Allowed validation types */
		msdynmkt_allowedvalidationtypes: string;
		/** Allow empty option */
		msdynmkt_allowemptyoption: boolean;
		/** Country code */
		msdynmkt_countrycode: string;
		msdynmkt_date_defaultvalue_UtcDateOnly: Date;
		msdynmkt_datetime_defaultvalue_UtcDateAndTime: Date;
		msdynmkt_datetime_displayoption: OptionSet.msdynmkt_marketingformfield.msdynmkt_datetime_displayoption;
		msdynmkt_defaultvalue: string;
		/** Error message */
		msdynmkt_errormessage: string;
		msdynmkt_fieldoptions: string;
		msdynmkt_fieldtype: string;
		/** Hide field */
		msdynmkt_hide: boolean;
		msdynmkt_icon: string;
		msdynmkt_lookup_targets: string;
		/** Unique identifier for entity instances */
		msdynmkt_marketingformfieldId: string;
		/** Max size of form field. */
		msdynmkt_maxlength: number;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		msdynmkt_optionsetdisplayoption: OptionSet.msdynmkt_marketingformfield.msdynmkt_optionsetdisplayoption;
		/** Placeholder text */
		msdynmkt_placeholder: string;
		/** Prefill field */
		msdynmkt_prefill: boolean;
		/** I acknowledge the select lookup will be visible to public */
		msdynmkt_publicvisibility: boolean;
		/** Required */
		msdynmkt_required: boolean;
		/** Target audience attribute */
		msdynmkt_targetentity: string;
		/** Form field maps to target audience property */
		msdynmkt_targetproperty: string;
		msdynmkt_twooption_displayoption: OptionSet.msdynmkt_marketingformfield.msdynmkt_twooption_displayoption;
		/** Validation */
		msdynmkt_validation: boolean;
		/** Validation pattern */
		msdynmkt_validationpattern: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Form field */
		statecode: OptionSet.msdynmkt_marketingformfield.statecode;
		/** Reason for the status of the Form field */
		statuscode: OptionSet.msdynmkt_marketingformfield.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Allowed validation types */
			readonly msdynmkt_allowedvalidationtypes: string;
			/** Allow empty option */
			readonly msdynmkt_allowemptyoption: string;
			/** Country code */
			readonly msdynmkt_countrycode: string;
			readonly msdynmkt_date_defaultvalue_UtcDateOnly: string;
			readonly msdynmkt_datetime_defaultvalue_UtcDateAndTime: string;
			readonly msdynmkt_datetime_displayoption: string;
			readonly msdynmkt_defaultvalue: string;
			/** Error message */
			readonly msdynmkt_errormessage: string;
			readonly msdynmkt_fieldoptions: string;
			readonly msdynmkt_fieldtype: string;
			/** Hide field */
			readonly msdynmkt_hide: string;
			readonly msdynmkt_icon: string;
			readonly msdynmkt_lookup_targets: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_marketingformfieldId: string;
			/** Max size of form field. */
			readonly msdynmkt_maxlength: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			readonly msdynmkt_optionsetdisplayoption: string;
			/** Placeholder text */
			readonly msdynmkt_placeholder: string;
			/** Prefill field */
			readonly msdynmkt_prefill: string;
			/** I acknowledge the select lookup will be visible to public */
			readonly msdynmkt_publicvisibility: string;
			/** Required */
			readonly msdynmkt_required: string;
			/** Target audience attribute */
			readonly msdynmkt_targetentity: string;
			/** Form field maps to target audience property */
			readonly msdynmkt_targetproperty: string;
			readonly msdynmkt_twooption_displayoption: string;
			/** Validation */
			readonly msdynmkt_validation: string;
			/** Validation pattern */
			readonly msdynmkt_validationpattern: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Form field */
			readonly statecode: string;
			/** Reason for the status of the Form field */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdynmkt_marketingformfield {
		enum msdynmkt_datetime_displayoption {
			/** 100000000 */
			Date,
			/** 100000001 */
			Date_Time
		}
		enum msdynmkt_optionsetdisplayoption {
			/** 100000001 */
			Dropdown,
			/** 100000000 */
			Radio_button
		}
		enum msdynmkt_twooption_displayoption {
			/** 100000001 */
			Checkbox,
			/** 100000000 */
			Radio_button
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
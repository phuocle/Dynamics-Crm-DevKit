//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_marketingformfield_Information {
		interface tab__5437586D_4A52_439F_9A8E_1CFFFA3850B0_Sections {
			_5437586D_4A52_439F_9A8E_1CFFFA3850B0_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__5437586D_4A52_439F_9A8E_1CFFFA3850B0 extends DevKit.Controls.ITab {
			Section: tab__5437586D_4A52_439F_9A8E_1CFFFA3850B0_Sections;
		}
		interface Tabs {
			_5437586D_4A52_439F_9A8E_1CFFFA3850B0: tab__5437586D_4A52_439F_9A8E_1CFFFA3850B0;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			msdyncrm_contactmapping: DevKit.Controls.ActionCards;
			msdyncrm_contactmapping_target: DevKit.Controls.String;
			msdyncrm_defaultformlabel: DevKit.Controls.String;
			msdyncrm_defaultformplaceholder: DevKit.Controls.String;
			msdyncrm_format: DevKit.Controls.OptionSet;
			msdyncrm_leadmapping: DevKit.Controls.ActionCards;
			msdyncrm_leadmapping_target: DevKit.Controls.String;
			msdyncrm_lookup_target: DevKit.Controls.ActionCards;
			msdyncrm_marketingformfieldtype: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_prototype_attribute: DevKit.Controls.ActionCards;
			msdyncrm_prototype_entity: DevKit.Controls.ActionCards;
			msdyncrm_prototype_target: DevKit.Controls.String;
			/** I acknowledge the select lookup will be visible to public */
			msdyncrm_PublicVisibility: DevKit.Controls.Boolean;
			msdyncrm_renderas: DevKit.Controls.OptionSet;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyncrm_marketingformfield_submission: DevKit.Controls.NavigationItem
		}
		interface Grid {
			MarketingForms: DevKit.Controls.Grid;
		}
	}
	class Formmsdyncrm_marketingformfield_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_marketingformfield_Information */
		Body: DevKit.Formmsdyncrm_marketingformfield_Information.Body;
		/** The Navigation of form msdyncrm_marketingformfield_Information */
		Navigation: DevKit.Formmsdyncrm_marketingformfield_Information.Navigation;
		/** The Grid of form msdyncrm_marketingformfield_Information */
		Grid: DevKit.Formmsdyncrm_marketingformfield_Information.Grid;
		/** The SidePanes of form msdyncrm_marketingformfield_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyncrm_marketingformfield_New_Form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			msdyncrm_contactmapping: DevKit.Controls.ActionCards;
			msdyncrm_contactmapping_target: DevKit.Controls.String;
			msdyncrm_defaultformlabel: DevKit.Controls.String;
			msdyncrm_defaultformplaceholder: DevKit.Controls.String;
			msdyncrm_format: DevKit.Controls.OptionSet;
			msdyncrm_leadmapping: DevKit.Controls.ActionCards;
			msdyncrm_leadmapping_target: DevKit.Controls.String;
			msdyncrm_lookup_target: DevKit.Controls.ActionCards;
			msdyncrm_marketingformfieldtype: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_prototype_attribute: DevKit.Controls.ActionCards;
			msdyncrm_prototype_entity: DevKit.Controls.ActionCards;
			msdyncrm_prototype_target: DevKit.Controls.String;
			/** I acknowledge the select lookup will be visible to public */
			msdyncrm_PublicVisibility: DevKit.Controls.Boolean;
			msdyncrm_renderas: DevKit.Controls.OptionSet;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyncrm_marketingformfield_New_Form extends DevKit.IForm {
		/**
		* New form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_marketingformfield_New_Form */
		Body: DevKit.Formmsdyncrm_marketingformfield_New_Form.Body;
	}
	class msdyncrm_marketingformfieldApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_marketingformfieldApi
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
		/** Indicates the person who created this. */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Indicates the person who created this for another person. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		msdyncrm_contactmapping: string;
		msdyncrm_contactmapping_target: string;
		msdyncrm_defaultformlabel: string;
		msdyncrm_defaultformplaceholder: string;
		msdyncrm_format: OptionSet.msdyncrm_marketingformfield.msdyncrm_format;
		msdyncrm_leadmapping: string;
		msdyncrm_leadmapping_target: string;
		msdyncrm_lookup_target: string;
		/** Unique ID for entity instances */
		msdyncrm_marketingformfieldId: string;
		msdyncrm_marketingformfieldtype: OptionSet.msdyncrm_marketingformfield.msdyncrm_marketingformfieldtype;
		msdyncrm_marketingprovided: boolean;
		/** The name of the custom entity */
		msdyncrm_name: string;
		msdyncrm_prototype_attribute: string;
		msdyncrm_prototype_entity: string;
		msdyncrm_prototype_target: string;
		/** I acknowledge the select lookup will be visible to public */
		msdyncrm_PublicVisibility: boolean;
		msdyncrm_renderas: OptionSet.msdyncrm_marketingformfield.msdyncrm_renderas;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique ID for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this. */
		readonly OwningTeam: string;
		/** Indicates the person who owns this. */
		readonly OwningUser: string;
		/** Status of the marketing form field */
		statecode: OptionSet.msdyncrm_marketingformfield.statecode;
		/** Reason for the status of the marketing form field */
		statuscode: OptionSet.msdyncrm_marketingformfield.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** The time-zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Indicates the person who created this. */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Indicates the person who created this for another person. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncrm_contactmapping: string;
			readonly msdyncrm_contactmapping_target: string;
			readonly msdyncrm_defaultformlabel: string;
			readonly msdyncrm_defaultformplaceholder: string;
			readonly msdyncrm_format: string;
			readonly msdyncrm_leadmapping: string;
			readonly msdyncrm_leadmapping_target: string;
			readonly msdyncrm_lookup_target: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_marketingformfieldId: string;
			readonly msdyncrm_marketingformfieldtype: string;
			readonly msdyncrm_marketingprovided: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			readonly msdyncrm_prototype_attribute: string;
			readonly msdyncrm_prototype_entity: string;
			readonly msdyncrm_prototype_target: string;
			/** I acknowledge the select lookup will be visible to public */
			readonly msdyncrm_PublicVisibility: string;
			readonly msdyncrm_renderas: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique ID for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this. */
			readonly OwningTeam: string;
			/** Indicates the person who owns this. */
			readonly OwningUser: string;
			/** Status of the marketing form field */
			readonly statecode: string;
			/** Reason for the status of the marketing form field */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** The time-zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_marketingformfield {
		enum msdyncrm_format {
			/** 6 */
			Date,
			/** 7 */
			Date_and_time,
			/** 3 */
			Email,
			/** 5 */
			Phone,
			/** 1 */
			Text,
			/** 2 */
			Text_area,
			/** 4 */
			URL
		}
		enum msdyncrm_marketingformfieldtype {
			/** 9 */
			Currency,
			/** 8 */
			Date_and_time,
			/** 7 */
			Decimal_number,
			/** 6 */
			Floating_point_number,
			/** 11 */
			Lookup,
			/** 10 */
			Multi_select_option_set,
			/** 2 */
			Multiple_lines_of_text,
			/** 3 */
			Option_set,
			/** 1 */
			Single_line_of_text,
			/** 4 */
			Two_options,
			/** 5 */
			Whole_number
		}
		enum msdyncrm_renderas {
			/** 7 */
			Checkbox,
			/** 12 */
			Checkbox_list,
			/** 10 */
			Date_picker,
			/** 11 */
			Date_time_picker,
			/** 8 */
			Drop_down,
			/** 2 */
			Email_input,
			/** 13 */
			Lookup,
			/** 5 */
			Number_input,
			/** 4 */
			Phone_input,
			/** 9 */
			Radio_buttons,
			/** 6 */
			Text_area,
			/** 1 */
			Text_box,
			/** 3 */
			URL_input
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
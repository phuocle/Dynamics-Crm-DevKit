//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_taskactivitymarketingtemplate_Information {
		interface tab__9F29B748_C028_487D_BB1E_E4F023BCE788_Sections {
			_9F29B748_C028_487D_BB1E_E4F023BCE788_SECTION_2: DevKit.Controls.Section;
			_9F29B748_C028_487D_BB1E_E4F023BCE788_SECTION_3: DevKit.Controls.Section;
			_9F29B748_C028_487D_BB1E_E4F023BCE788_SECTION_4: DevKit.Controls.Section;
		}
		interface tab__9F29B748_C028_487D_BB1E_E4F023BCE788 extends DevKit.Controls.ITab {
			Section: tab__9F29B748_C028_487D_BB1E_E4F023BCE788_Sections;
		}
		interface Tabs {
			_9F29B748_C028_487D_BB1E_E4F023BCE788: tab__9F29B748_C028_487D_BB1E_E4F023BCE788;
		}
		interface Body {
			Tab: Tabs;
			/** Enter additional information to describe the task */
			msdyncrm_description: DevKit.Controls.String;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			/** Select the priority so that preferred customers or critical issues are handled quickly */
			msdyncrm_prioritycode: DevKit.Controls.OptionSet;
			/** Shows the expected duration of the task, in minutes. */
			msdyncrm_scheduleddurationminutes: DevKit.Controls.Integer;
			msdyncrm_scheduletype: DevKit.Controls.OptionSet;
			msdyncrm_startdate: DevKit.Controls.Date;
			msdyncrm_startdelay: DevKit.Controls.Integer;
			msdyncrm_starttimehour: DevKit.Controls.OptionSet;
			msdyncrm_starttimeminute: DevKit.Controls.OptionSet;
			/** Enter a short description about the objective or primary topic of the task */
			msdyncrm_subject: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyncrm_msdyncrm_taskactivitymarketingtemplate_msdyncrm_taskactivity_tasktemplate: DevKit.Controls.NavigationItem,
			msdyncrm_taskactivitymarketingtemplate_Feedback: DevKit.Controls.NavigationItem,
			msdyncrm_taskactivitymarketingtemplate_QueueItems: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_taskactivitymarketingtemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_taskactivitymarketingtemplate_Information */
		Body: DevKit.Formmsdyncrm_taskactivitymarketingtemplate_Information.Body;
		/** The Navigation of form msdyncrm_taskactivitymarketingtemplate_Information */
		Navigation: DevKit.Formmsdyncrm_taskactivitymarketingtemplate_Information.Navigation;
		/** The SidePanes of form msdyncrm_taskactivitymarketingtemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyncrm_taskactivitymarketingtemplate_New_Form {
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
			/** Enter additional information to describe the task */
			msdyncrm_description: DevKit.Controls.String;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			/** Select the priority so that preferred customers or critical issues are handled quickly */
			msdyncrm_prioritycode: DevKit.Controls.OptionSet;
			/** Shows the expected duration of the task, in minutes. */
			msdyncrm_scheduleddurationminutes: DevKit.Controls.Integer;
			msdyncrm_scheduletype: DevKit.Controls.OptionSet;
			msdyncrm_startdate: DevKit.Controls.Date;
			msdyncrm_startdelay: DevKit.Controls.Integer;
			msdyncrm_starttimehour: DevKit.Controls.OptionSet;
			msdyncrm_starttimeminute: DevKit.Controls.OptionSet;
			/** Enter a short description about the objective or primary topic of the task */
			msdyncrm_subject: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyncrm_taskactivitymarketingtemplate_New_Form extends DevKit.IForm {
		/**
		* New form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_taskactivitymarketingtemplate_New_Form */
		Body: DevKit.Formmsdyncrm_taskactivitymarketingtemplate_New_Form.Body;
	}
	class msdyncrm_taskactivitymarketingtemplateApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_taskactivitymarketingtemplateApi
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
		/** Enter additional information to describe the task */
		msdyncrm_description: string;
		/** The name of the custom entity */
		msdyncrm_name: string;
		/** Select the priority so that preferred customers or critical issues are handled quickly */
		msdyncrm_prioritycode: OptionSet.msdyncrm_taskactivitymarketingtemplate.msdyncrm_prioritycode;
		/** Shows the expected duration of the task, in minutes. */
		msdyncrm_scheduleddurationminutes: number;
		msdyncrm_scheduletype: OptionSet.msdyncrm_taskactivitymarketingtemplate.msdyncrm_scheduletype;
		msdyncrm_startdate_DateOnly: Date;
		msdyncrm_startdelay: number;
		msdyncrm_starttimehour: OptionSet.msdyncrm_taskactivitymarketingtemplate.msdyncrm_starttimehour;
		msdyncrm_starttimeminute: OptionSet.msdyncrm_taskactivitymarketingtemplate.msdyncrm_starttimeminute;
		/** Enter a short description about the objective or primary topic of the task */
		msdyncrm_subject: string;
		/** Unique ID for entity instances */
		msdyncrm_taskactivitymarketingtemplateId: string;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this. */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this. */
		readonly OwningTeam: string;
		/** Indicates the person who owns this. */
		readonly OwningUser: string;
		/** Status of the task activity marketing template */
		statecode: OptionSet.msdyncrm_taskactivitymarketingtemplate.statecode;
		/** Reason for the status of the task activity marketing template */
		statuscode: OptionSet.msdyncrm_taskactivitymarketingtemplate.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time-zone code that was in use when the record was created */
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
			/** Enter additional information to describe the task */
			readonly msdyncrm_description: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			/** Select the priority so that preferred customers or critical issues are handled quickly */
			readonly msdyncrm_prioritycode: string;
			/** Shows the expected duration of the task, in minutes. */
			readonly msdyncrm_scheduleddurationminutes: string;
			readonly msdyncrm_scheduletype: string;
			readonly msdyncrm_startdate_DateOnly: string;
			readonly msdyncrm_startdelay: string;
			readonly msdyncrm_starttimehour: string;
			readonly msdyncrm_starttimeminute: string;
			/** Enter a short description about the objective or primary topic of the task */
			readonly msdyncrm_subject: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_taskactivitymarketingtemplateId: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this. */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this. */
			readonly OwningTeam: string;
			/** Indicates the person who owns this. */
			readonly OwningUser: string;
			/** Status of the task activity marketing template */
			readonly statecode: string;
			/** Reason for the status of the task activity marketing template */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time-zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_taskactivitymarketingtemplate {
		enum msdyncrm_prioritycode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum msdyncrm_scheduletype {
			/** 1 */
			Delay_in_days,
			/** 0 */
			Fixed_date
		}
		enum msdyncrm_starttimehour {
			/** 0 */
			_00,
			/** 1 */
			_01,
			/** 2 */
			_02,
			/** 3 */
			_03,
			/** 4 */
			_04,
			/** 5 */
			_05,
			/** 6 */
			_06,
			/** 7 */
			_07,
			/** 8 */
			_08,
			/** 9 */
			_09,
			/** 10 */
			_10,
			/** 11 */
			_11,
			/** 12 */
			_12,
			/** 13 */
			_13,
			/** 14 */
			_14,
			/** 15 */
			_15,
			/** 16 */
			_16,
			/** 17 */
			_17,
			/** 18 */
			_18,
			/** 19 */
			_19,
			/** 20 */
			_20,
			/** 21 */
			_21,
			/** 22 */
			_22,
			/** 23 */
			_23
		}
		enum msdyncrm_starttimeminute {
			/** 0 */
			_00,
			/** 15 */
			_15,
			/** 30 */
			_30,
			/** 45 */
			_45
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
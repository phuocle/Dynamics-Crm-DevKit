//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_oclocalizationdata_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for Channel Language associated with Localization Data. */
			msdyn_customerlanguageid: DevKit.Controls.Lookup;
			/** Localized text of the original record. */
			msdyn_localizedtext: DevKit.Controls.String;
			/** Unique identifier for System Message associated with Localization Data. */
			msdyn_systemmessageid: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_oclocalizationdata_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_oclocalizationdata_Information */
		Body: DevKit.Formmsdyn_oclocalizationdata_Information.Body;
		/** The Navigation of form msdyn_oclocalizationdata_Information */
		Navigation: DevKit.Formmsdyn_oclocalizationdata_Information.Navigation;
		/** The SidePanes of form msdyn_oclocalizationdata_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_oclocalizationdata_Information2 {
		interface tab__67489580_D521_4EA2_8994_03C6D8F7D16B_Sections {
			_51E7DADB_658A_4415_A6ED_3416D4B64ED6: DevKit.Controls.Section;
		}
		interface tab__67489580_D521_4EA2_8994_03C6D8F7D16B extends DevKit.Controls.ITab {
			Section: tab__67489580_D521_4EA2_8994_03C6D8F7D16B_Sections;
		}
		interface Tabs {
			_67489580_D521_4EA2_8994_03C6D8F7D16B: tab__67489580_D521_4EA2_8994_03C6D8F7D16B;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Channel Language associated with Localization Data. */
			msdyn_customerlanguageid: DevKit.Controls.Lookup;
			/** Localized text of the original record. */
			msdyn_localizedtext: DevKit.Controls.String;
		}
		interface Navigation {

		}
		interface quickForm_System_Message_View_Body {
			msdyn_messagereceiver: DevKit.Controls.QuickView;
			msdyn_name: DevKit.Controls.QuickView;
			msdyn_streamsource: DevKit.Controls.QuickView;
			msdyn_systemmessageeventtype: DevKit.Controls.QuickView;
		}
		interface quickForm_System_Message_View extends DevKit.Controls.IQuickView {
			Body: quickForm_System_Message_View_Body;
		}
		interface QuickForm {
			System_Message_View: quickForm_System_Message_View;
		}
	}
	class Formmsdyn_oclocalizationdata_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_oclocalizationdata_Information2 */
		Body: DevKit.Formmsdyn_oclocalizationdata_Information2.Body;
		/** The Navigation of form msdyn_oclocalizationdata_Information2 */
		Navigation: DevKit.Formmsdyn_oclocalizationdata_Information2.Navigation;
		/** The QuickForm of form msdyn_oclocalizationdata_Information2 */
		QuickForm: DevKit.Formmsdyn_oclocalizationdata_Information2.QuickForm;
		/** The SidePanes of form msdyn_oclocalizationdata_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_oclocalizationdata_New_Form {
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

		}
	}
	class Formmsdyn_oclocalizationdata_New_Form extends DevKit.IForm {
		/**
		* New Form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_oclocalizationdata_New_Form */
		Body: DevKit.Formmsdyn_oclocalizationdata_New_Form.Body;
	}
	class msdyn_oclocalizationdataApi {
		/**
		* DynamicsCrm.DevKit msdyn_oclocalizationdataApi
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
		/** Unique identifier for Channel Language associated with Localization Data. */
		msdyn_customerlanguageid: string;
		/** Default Localized Text */
		msdyn_DefaultLocalizedText: string;
		/** The column name of the original entity to be localized. */
		msdyn_EntityColumnName: string;
		/** The name of the original entity to be localized. */
		msdyn_EntityName: string;
		/** The record id of the original entity. */
		msdyn_EntityRecordId: string;
		/** Indicates if the localization data record is the default record for message template. */
		msdyn_Isdefault: boolean;
		/** The target language code for the record to be localized in. */
		msdyn_LanguageCode: number;
		/** Localized text of the original record. */
		msdyn_localizedtext: string;
		/** Unique identifier for entity instances */
		msdyn_oclocalizationdataId: string;
		/** Unique identifier for System Message associated with Localization Data. */
		msdyn_systemmessageid: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Localization Data */
		statecode: OptionSet.msdyn_oclocalizationdata.statecode;
		/** Reason for the status of the Localization Data */
		statuscode: OptionSet.msdyn_oclocalizationdata.statuscode;
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
			/** Unique identifier for Channel Language associated with Localization Data. */
			readonly msdyn_customerlanguageid: string;
			/** Default Localized Text */
			readonly msdyn_DefaultLocalizedText: string;
			/** The column name of the original entity to be localized. */
			readonly msdyn_EntityColumnName: string;
			/** The name of the original entity to be localized. */
			readonly msdyn_EntityName: string;
			/** The record id of the original entity. */
			readonly msdyn_EntityRecordId: string;
			/** Indicates if the localization data record is the default record for message template. */
			readonly msdyn_Isdefault: string;
			/** The target language code for the record to be localized in. */
			readonly msdyn_LanguageCode: string;
			/** Localized text of the original record. */
			readonly msdyn_localizedtext: string;
			/** Unique identifier for entity instances */
			readonly msdyn_oclocalizationdataId: string;
			/** Unique identifier for System Message associated with Localization Data. */
			readonly msdyn_systemmessageid: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Localization Data */
			readonly statecode: string;
			/** Reason for the status of the Localization Data */
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
	namespace msdyn_oclocalizationdata {
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
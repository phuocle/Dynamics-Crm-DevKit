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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_oclocalizationdata_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_oclocalizationdata_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_oclocalizationdata_Information */
		Body: DevKit.Formmsdyn_oclocalizationdata_Information.Body;
		/** The Process of form msdyn_oclocalizationdata_Information */
		Process: DevKit.Formmsdyn_oclocalizationdata_Information.Process;
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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_oclocalizationdata_Information2 extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_oclocalizationdata_Information2 Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_oclocalizationdata_Information2 */
		Body: DevKit.Formmsdyn_oclocalizationdata_Information2.Body;
		/** The QuickForm of form msdyn_oclocalizationdata_Information2 */
		QuickForm: DevKit.Formmsdyn_oclocalizationdata_Information2.QuickForm;
		/** The Process of form msdyn_oclocalizationdata_Information2 */
		Process: DevKit.Formmsdyn_oclocalizationdata_Information2.Process;
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
		* DynamicsCrm.DevKit form msdyn_oclocalizationdata_New_Form Quick Create
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for Channel Language associated with Localization Data. */
		msdyn_customerlanguageid: DevKit.WebApi.LookupValue;
		/** Default Localized Text */
		msdyn_DefaultLocalizedText: DevKit.WebApi.StringValue;
		/** The column name of the original entity to be localized. */
		msdyn_EntityColumnName: DevKit.WebApi.StringValue;
		/** The name of the original entity to be localized. */
		msdyn_EntityName: DevKit.WebApi.StringValue;
		/** The record id of the original entity. */
		msdyn_EntityRecordId: DevKit.WebApi.StringValue;
		/** Indicates if the localization data record is the default record for message template. */
		msdyn_Isdefault: DevKit.WebApi.BooleanValue;
		/** The target language code for the record to be localized in. */
		msdyn_LanguageCode: DevKit.WebApi.IntegerValue;
		/** Localized text of the original record. */
		msdyn_localizedtext: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_oclocalizationdataId: DevKit.WebApi.GuidValue;
		/** Unique identifier for System Message associated with Localization Data. */
		msdyn_systemmessageid: DevKit.WebApi.LookupValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Localization Data */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Localization Data */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
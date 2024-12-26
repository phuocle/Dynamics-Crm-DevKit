//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_kmpersonalizationsetting_Information {
		interface tab__ADE28570_C803_4349_927A_9A1B2269450E_Sections {
		}
		interface tab_knowledge_authoring_language_settings_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_knowledge_filter_settings_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__ADE28570_C803_4349_927A_9A1B2269450E extends DevKit.Controls.ITab {
			Section: tab__ADE28570_C803_4349_927A_9A1B2269450E_Sections;
		}
		interface tab_knowledge_authoring_language_settings extends DevKit.Controls.ITab {
			Section: tab_knowledge_authoring_language_settings_Sections;
		}
		interface tab_knowledge_filter_settings extends DevKit.Controls.ITab {
			Section: tab_knowledge_filter_settings_Sections;
		}
		interface Tabs {
			_ADE28570_C803_4349_927A_9A1B2269450E: tab__ADE28570_C803_4349_927A_9A1B2269450E;
			knowledge_authoring_language_settings: tab_knowledge_authoring_language_settings;
			knowledge_filter_settings: tab_knowledge_filter_settings;
		}
		interface Body {
			Tab: Tabs;
			msdyn_filtercontroldata: DevKit.Controls.String;
			msdyn_languagecontrol: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_kmpersonalizationsetting_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_kmpersonalizationsetting_Information */
		Body: DevKit.Formmsdyn_kmpersonalizationsetting_Information.Body;
		/** The Navigation of form msdyn_kmpersonalizationsetting_Information */
		Navigation: DevKit.Formmsdyn_kmpersonalizationsetting_Information.Navigation;
		/** The SidePanes of form msdyn_kmpersonalizationsetting_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_kmpersonalizationsettingApi {
		/**
		* DynamicsCrm.DevKit msdyn_kmpersonalizationsettingApi
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
		msdyn_filtercontroldata: string;
		/** Unique identifier for entity instances */
		msdyn_kmpersonalizationsettingId: string;
		msdyn_languagecontrol: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Knowledge personalization */
		statecode: OptionSet.msdyn_kmpersonalizationsetting.statecode;
		/** Reason for the status of the Knowledge personalization */
		statuscode: OptionSet.msdyn_kmpersonalizationsetting.statuscode;
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
			readonly msdyn_filtercontroldata: string;
			/** Unique identifier for entity instances */
			readonly msdyn_kmpersonalizationsettingId: string;
			readonly msdyn_languagecontrol: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Knowledge personalization */
			readonly statecode: string;
			/** Reason for the status of the Knowledge personalization */
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
	namespace msdyn_kmpersonalizationsetting {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}
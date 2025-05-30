﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_propertylog_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_booleanvalue: DevKit.Controls.Boolean;
			msdyn_customerasset: DevKit.Controls.Lookup;
			msdyn_datevalue: DevKit.Controls.DateTime;
			/** For Internal Use only */
			msdyn_delta: DevKit.Controls.Decimal;
			/** Functional Location that the property log is associated with. */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			msdyn_islatest: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_numbervalue: DevKit.Controls.Decimal;
			msdyn_property: DevKit.Controls.Lookup;
			msdyn_readingtime: DevKit.Controls.DateTime;
			msdyn_stringvalue: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_propertylog_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_propertylog_Information */
		Body: DevKit.Formmsdyn_propertylog_Information.Body;
		/** The Navigation of form msdyn_propertylog_Information */
		Navigation: DevKit.Formmsdyn_propertylog_Information.Navigation;
		/** The SidePanes of form msdyn_propertylog_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormProperty_Log_Quick_Create {
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
			msdyn_booleanvalue: DevKit.Controls.Boolean;
			msdyn_customerasset: DevKit.Controls.Lookup;
			msdyn_datevalue: DevKit.Controls.DateTime;
			/** Functional Location that the property log is associated with. */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			msdyn_numbervalue: DevKit.Controls.Decimal;
			msdyn_property: DevKit.Controls.Lookup;
			msdyn_readingtime: DevKit.Controls.DateTime;
			msdyn_stringvalue: DevKit.Controls.String;
		}
	}
	class FormProperty_Log_Quick_Create extends DevKit.IForm {
		/**
		* Property Log Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Property_Log_Quick_Create */
		Body: DevKit.FormProperty_Log_Quick_Create.Body;
	}
	class msdyn_propertylogApi {
		/**
		* DynamicsCrm.DevKit msdyn_propertylogApi
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
		msdyn_booleanvalue: boolean;
		msdyn_customerasset: string;
		msdyn_datevalue_UtcDateAndTime: Date;
		/** For Internal Use only */
		msdyn_delta: number;
		/** Functional Location that the property log is associated with. */
		msdyn_FunctionalLocation: string;
		msdyn_islatest: boolean;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_numbervalue: number;
		msdyn_property: string;
		/** Unique identifier for entity instances */
		msdyn_propertylogId: string;
		msdyn_readingtime_UtcDateAndTime: Date;
		msdyn_stringvalue: string;
		msdyn_valuetodisplay: string;
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
		/** Status of the Property Log */
		statecode: OptionSet.msdyn_propertylog.statecode;
		/** Reason for the status of the Property Log */
		statuscode: OptionSet.msdyn_propertylog.statuscode;
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
			readonly msdyn_booleanvalue: string;
			readonly msdyn_customerasset: string;
			readonly msdyn_datevalue_UtcDateAndTime: string;
			/** For Internal Use only */
			readonly msdyn_delta: string;
			/** Functional Location that the property log is associated with. */
			readonly msdyn_FunctionalLocation: string;
			readonly msdyn_islatest: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_numbervalue: string;
			readonly msdyn_property: string;
			/** Unique identifier for entity instances */
			readonly msdyn_propertylogId: string;
			readonly msdyn_readingtime_UtcDateAndTime: string;
			readonly msdyn_stringvalue: string;
			readonly msdyn_valuetodisplay: string;
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
			/** Status of the Property Log */
			readonly statecode: string;
			/** Reason for the status of the Property Log */
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
	namespace msdyn_propertylog {
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
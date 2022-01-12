//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_fieldcomputation_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab__B74A3450_5DC5_412A_A7CA_2847A660F299_Sections {
			_7B7B4CF3_6D9F_4DA9_8E24_A71B75677633: DevKit.Controls.Section;
			_B74A3450_5DC5_412A_A7CA_2847A660F299_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__B74A3450_5DC5_412A_A7CA_2847A660F299 extends DevKit.Controls.ITab {
			Section: tab__B74A3450_5DC5_412A_A7CA_2847A660F299_Sections;
		}
		interface Tabs {
			_B74A3450_5DC5_412A_A7CA_2847A660F299: tab__B74A3450_5DC5_412A_A7CA_2847A660F299;
		}
		interface Body {
			Tab: Tabs;
			/** Stores an enum value that indicates the supported sales document line field will be the target computed field. */
			msdyn_ComputedField: DevKit.Controls.OptionSet;
			/** Stores the name of the computed transaction field and product property computation mapping. */
			msdyn_name: DevKit.Controls.String;
			/** Transaction product identifier. */
			msdyn_ProductId: DevKit.Controls.Lookup;
			/** Product dynamic property identifier. */
			msdyn_PropertyId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_fieldcomputation_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_fieldcomputation_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_fieldcomputation_Information */
		Body: DevKit.Formmsdyn_fieldcomputation_Information.Body;
		/** The Header section of form msdyn_fieldcomputation_Information */
		Header: DevKit.Formmsdyn_fieldcomputation_Information.Header;
		/** The SidePanes of form msdyn_fieldcomputation_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_fieldcomputationApi {
		/**
		* DynamicsCrm.DevKit msdyn_fieldcomputationApi
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
		/** Stores an enum value that indicates the supported sales document line field will be the target computed field. */
		msdyn_ComputedField: DevKit.WebApi.OptionSetValue;
		/** Field computation record unique identifier. */
		msdyn_fieldcomputationId: DevKit.WebApi.GuidValue;
		/** Stores the name of the computed transaction field and product property computation mapping. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Transaction product identifier. */
		msdyn_ProductId: DevKit.WebApi.LookupValue;
		/** Product dynamic property identifier. */
		msdyn_PropertyId: DevKit.WebApi.LookupValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Field Computation */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Field Computation */
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
	namespace msdyn_fieldcomputation {
		enum msdyn_ComputedField {
			/** 192350001 */
			Quantity
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
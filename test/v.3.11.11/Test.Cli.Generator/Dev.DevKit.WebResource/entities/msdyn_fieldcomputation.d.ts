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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_fieldcomputation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
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
		/** The Process of form msdyn_fieldcomputation_Information */
		Process: DevKit.Formmsdyn_fieldcomputation_Information.Process;
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
		/** Stores an enum value that indicates the supported sales document line field will be the target computed field. */
		msdyn_ComputedField: OptionSet.msdyn_fieldcomputation.msdyn_ComputedField;
		/** Field computation record unique identifier. */
		msdyn_fieldcomputationId: string;
		/** Stores the name of the computed transaction field and product property computation mapping. */
		msdyn_name: string;
		/** Transaction product identifier. */
		msdyn_ProductId: string;
		/** Product dynamic property identifier. */
		msdyn_PropertyId: string;
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
		/** Status of the Field Computation */
		statecode: OptionSet.msdyn_fieldcomputation.statecode;
		/** Reason for the status of the Field Computation */
		statuscode: OptionSet.msdyn_fieldcomputation.statuscode;
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
			/** Stores an enum value that indicates the supported sales document line field will be the target computed field. */
			readonly msdyn_ComputedField: string;
			/** Field computation record unique identifier. */
			readonly msdyn_fieldcomputationId: string;
			/** Stores the name of the computed transaction field and product property computation mapping. */
			readonly msdyn_name: string;
			/** Transaction product identifier. */
			readonly msdyn_ProductId: string;
			/** Product dynamic property identifier. */
			readonly msdyn_PropertyId: string;
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
			/** Status of the Field Computation */
			readonly statecode: string;
			/** Reason for the status of the Field Computation */
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
	namespace msdyn_fieldcomputation {
		enum msdyn_ComputedField {
			/** 192350001 */
			Quantity
		}
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
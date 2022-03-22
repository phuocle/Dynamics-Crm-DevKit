//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_delegation_Information {
		interface tab__AC9573F3_08AC_45C8_9C69_D7762DF99DD8_Sections {
		}
		interface tab__AC9573F3_08AC_45C8_9C69_D7762DF99DD8 extends DevKit.Controls.ITab {
			Section: tab__AC9573F3_08AC_45C8_9C69_D7762DF99DD8_Sections;
		}
		interface Tabs {
			_AC9573F3_08AC_45C8_9C69_D7762DF99DD8: tab__AC9573F3_08AC_45C8_9C69_D7762DF99DD8;
		}
		interface Body {
			Tab: Tabs;
			/** The resource who requires a substitute. */
			msdyn_delegationfrom: DevKit.Controls.Lookup;
			/** Delegate of the resource. */
			msdyn_delegationto: DevKit.Controls.Lookup;
			/** Date when delegation ends. */
			msdyn_enddate: DevKit.Controls.Date;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Date when delegation starts. */
			msdyn_startdate: DevKit.Controls.Date;
			msdyn_type: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_delegation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_delegation_Information */
		Body: DevKit.Formmsdyn_delegation_Information.Body;
		/** The Process of form msdyn_delegation_Information */
		Process: DevKit.Formmsdyn_delegation_Information.Process;
		/** The SidePanes of form msdyn_delegation_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_delegationApi {
		/**
		* DynamicsCrm.DevKit msdyn_delegationApi
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
		/** The resource who requires a substitute. */
		msdyn_delegationfrom: string;
		/** Unique identifier for entity instances */
		msdyn_delegationId: string;
		/** Delegate of the resource. */
		msdyn_delegationto: string;
		/** Date when delegation ends. */
		msdyn_enddate_UtcDateOnly: Date;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Date when delegation starts. */
		msdyn_startdate_UtcDateOnly: Date;
		msdyn_type: OptionSet.msdyn_delegation.msdyn_type;
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
		/** Status of the Delegation */
		statecode: OptionSet.msdyn_delegation.statecode;
		/** Reason for the status of the Delegation */
		statuscode: OptionSet.msdyn_delegation.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_delegation {
		enum msdyn_type {
			/** 192350001 */
			Expense,
			/** 192350000 */
			Time_Entry
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_schedulingscope_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of the Booking View. */
			msdyn_BookingViewId: DevKit.Controls.String;
			/** Enter the name of the Scheduling Scope. */
			msdyn_Name: DevKit.Controls.String;
			/** Unique identifier of the Requirement View. */
			msdyn_RequirementViewId: DevKit.Controls.String;
			/** Unique identifier of the Resource View. */
			msdyn_ResourceViewId: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_schedulingscope_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_schedulingscope_Information */
		Body: DevKit.Formmsdyn_schedulingscope_Information.Body;
		/** The Navigation of form msdyn_schedulingscope_Information */
		Navigation: DevKit.Formmsdyn_schedulingscope_Information.Navigation;
		/** The SidePanes of form msdyn_schedulingscope_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_schedulingscopeApi {
		/**
		* DynamicsCrm.DevKit msdyn_schedulingscopeApi
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
		CreatedBy: string;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: string;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: string;
		/** Unique identifier of the Booking View. */
		msdyn_BookingViewId: string;
		/** Enter the name of the Scheduling Scope. */
		msdyn_Name: string;
		/** Unique identifier of the Requirement View. */
		msdyn_RequirementViewId: string;
		/** Unique identifier of the Resource View. */
		msdyn_ResourceViewId: string;
		/** Unique identifier for entity instances */
		msdyn_schedulingscopeId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		OwningUser: string;
		/** Status of the Scheduling Scope */
		statecode: OptionSet.msdyn_schedulingscope.statecode;
		/** Reason for the status of the Scheduling Scope */
		statuscode: OptionSet.msdyn_schedulingscope.statuscode;
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
			/** Unique identifier of the Booking View. */
			readonly msdyn_BookingViewId: string;
			/** Enter the name of the Scheduling Scope. */
			readonly msdyn_Name: string;
			/** Unique identifier of the Requirement View. */
			readonly msdyn_RequirementViewId: string;
			/** Unique identifier of the Resource View. */
			readonly msdyn_ResourceViewId: string;
			/** Unique identifier for entity instances */
			readonly msdyn_schedulingscopeId: string;
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
			/** Status of the Scheduling Scope */
			readonly statecode: string;
			/** Reason for the status of the Scheduling Scope */
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
	namespace msdyn_schedulingscope {
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
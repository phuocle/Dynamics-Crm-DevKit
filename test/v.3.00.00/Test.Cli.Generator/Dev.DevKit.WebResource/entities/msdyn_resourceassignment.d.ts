//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_resourceassignment_Information {
		interface Tabs {
		}
		interface Body {
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_resourceassignment_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_resourceassignment_Information */
		Body: DevKit.Formmsdyn_resourceassignment_Information.Body;
		/** The Process of form msdyn_resourceassignment_Information */
		Process: DevKit.Formmsdyn_resourceassignment_Information.Process;
		/** The SidePanes of form msdyn_resourceassignment_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_resourceassignmentApi {
		/**
		* DynamicsCrm.DevKit msdyn_resourceassignmentApi
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
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows the resource. */
		msdyn_bookableresourceid: string;
		/** Booking Status */
		msdyn_bookingstatusid: string;
		/** Select the commitment type of the assignment (hard or soft). */
		msdyn_CommitType: OptionSet.msdyn_resourceassignment.msdyn_CommitType;
		/** Enter the date a resource is assigned from. */
		msdyn_fromdate_UtcDateOnly: Date;
		/** Enter the number of hours for which a resource is assigned. */
		msdyn_hours: number;
		/** id for resource assignment in ms project */
		msdyn_msprojectclientid: string;
		/** Type the name of the custom entity. */
		msdyn_name: string;
		/** Planned Cost Amount */
		msdyn_plannedcost: number;
		/** Value of the Planned Cost in base currency. */
		readonly msdyn_plannedcost_Base: number;
		/** Serialized planned cost contour */
		msdyn_plannedcostcontour: string;
		/** Planned Sales Amount */
		msdyn_plannedsales: number;
		/** Value of the Planned Sales in base currency. */
		readonly msdyn_plannedsales_Base: number;
		/** Serialized planned sales contour */
		msdyn_plannedsalescontour: string;
		/** Serialized planned work schedule for assigned resource */
		msdyn_plannedwork: string;
		/** Select the project for which the resource is assigned. */
		msdyn_projectid: string;
		/** Unique identifier for Project Team Member associated with Resource Assignment. */
		msdyn_projectteamid: string;
		/** Unique identifier for entity instances */
		msdyn_resourceassignmentId: string;
		/** Select the task for which the resource is assigned to. */
		msdyn_taskid: string;
		/** Enter the end date until which a resource is assigned. */
		msdyn_todate_UtcDateOnly: Date;
		/** Select the user whose capacity is assigned. */
		msdyn_userresourceid: string;
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
		/** Status of the Resource Assignment */
		statecode: OptionSet.msdyn_resourceassignment.statecode;
		/** Reason for the status of the Resource Assignment */
		statuscode: OptionSet.msdyn_resourceassignment.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
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
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows the resource. */
			readonly msdyn_bookableresourceid: string;
			/** Booking Status */
			readonly msdyn_bookingstatusid: string;
			/** Select the commitment type of the assignment (hard or soft). */
			readonly msdyn_CommitType: string;
			/** Enter the date a resource is assigned from. */
			readonly msdyn_fromdate_UtcDateOnly: string;
			/** Enter the number of hours for which a resource is assigned. */
			readonly msdyn_hours: string;
			/** id for resource assignment in ms project */
			readonly msdyn_msprojectclientid: string;
			/** Type the name of the custom entity. */
			readonly msdyn_name: string;
			/** Planned Cost Amount */
			readonly msdyn_plannedcost: string;
			/** Value of the Planned Cost in base currency. */
			readonly msdyn_plannedcost_Base: string;
			/** Serialized planned cost contour */
			readonly msdyn_plannedcostcontour: string;
			/** Planned Sales Amount */
			readonly msdyn_plannedsales: string;
			/** Value of the Planned Sales in base currency. */
			readonly msdyn_plannedsales_Base: string;
			/** Serialized planned sales contour */
			readonly msdyn_plannedsalescontour: string;
			/** Serialized planned work schedule for assigned resource */
			readonly msdyn_plannedwork: string;
			/** Select the project for which the resource is assigned. */
			readonly msdyn_projectid: string;
			/** Unique identifier for Project Team Member associated with Resource Assignment. */
			readonly msdyn_projectteamid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_resourceassignmentId: string;
			/** Select the task for which the resource is assigned to. */
			readonly msdyn_taskid: string;
			/** Enter the end date until which a resource is assigned. */
			readonly msdyn_todate_UtcDateOnly: string;
			/** Select the user whose capacity is assigned. */
			readonly msdyn_userresourceid: string;
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
			/** Status of the Resource Assignment */
			readonly statecode: string;
			/** Reason for the status of the Resource Assignment */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_resourceassignment {
		enum msdyn_CommitType {
			/** 192350004 */
			Canceled,
			/** 192350001 */
			Hard_Book,
			/** 192350000 */
			None,
			/** 192350003 */
			Proposed,
			/** 192350002 */
			Soft_Book
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
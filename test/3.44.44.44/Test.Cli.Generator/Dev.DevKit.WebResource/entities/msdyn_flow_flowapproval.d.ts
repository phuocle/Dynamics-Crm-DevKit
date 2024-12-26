//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_flow_flowapproval_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the flow approval. */
			msdyn_flow_flowapproval_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_flow_flowapproval_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_flow_flowapproval_Information */
		Body: DevKit.Formmsdyn_flow_flowapproval_Information.Body;
		/** The Navigation of form msdyn_flow_flowapproval_Information */
		Navigation: DevKit.Formmsdyn_flow_flowapproval_Information.Navigation;
		/** The SidePanes of form msdyn_flow_flowapproval_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_flow_flowapprovalApi {
		/**
		* DynamicsCrm.DevKit msdyn_flow_flowapprovalApi
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
		/** The linked approval. */
		msdyn_flow_flowapproval_approval: string;
		/** The locale set by logic apps when the approval was created. */
		msdyn_flow_flowapproval_flowculture: string;
		/** The logic apps id of the flow. */
		msdyn_flow_flowapproval_flowid: string;
		/** The name of the flow. */
		msdyn_flow_flowapproval_flowname: string;
		/** The logic apps callback to resume the flow once the approval completes. */
		msdyn_flow_flowapproval_flownotificationuri: string;
		/** The sequence id of the flow run. */
		msdyn_flow_flowapproval_flowrunsequenceid: string;
		/** The name of the flow approval. */
		msdyn_flow_flowapproval_name: string;
		/** Whether to send system-generated email notifications for the approval. */
		msdyn_flow_flowapproval_sendflowemail: boolean;
		/** Whether to send system-generated push notifications for the approval. */
		msdyn_flow_flowapproval_sendflowpush: boolean;
		/** Unique identifier for entity instances */
		msdyn_flow_flowapprovalId: string;
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
		/** Status of the Flow Approval */
		statecode: OptionSet.msdyn_flow_flowapproval.statecode;
		/** Reason for the status of the Flow Approval */
		statuscode: OptionSet.msdyn_flow_flowapproval.statuscode;
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
			/** The linked approval. */
			readonly msdyn_flow_flowapproval_approval: string;
			/** The locale set by logic apps when the approval was created. */
			readonly msdyn_flow_flowapproval_flowculture: string;
			/** The logic apps id of the flow. */
			readonly msdyn_flow_flowapproval_flowid: string;
			/** The name of the flow. */
			readonly msdyn_flow_flowapproval_flowname: string;
			/** The logic apps callback to resume the flow once the approval completes. */
			readonly msdyn_flow_flowapproval_flownotificationuri: string;
			/** The sequence id of the flow run. */
			readonly msdyn_flow_flowapproval_flowrunsequenceid: string;
			/** The name of the flow approval. */
			readonly msdyn_flow_flowapproval_name: string;
			/** Whether to send system-generated email notifications for the approval. */
			readonly msdyn_flow_flowapproval_sendflowemail: string;
			/** Whether to send system-generated push notifications for the approval. */
			readonly msdyn_flow_flowapproval_sendflowpush: string;
			/** Unique identifier for entity instances */
			readonly msdyn_flow_flowapprovalId: string;
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
			/** Status of the Flow Approval */
			readonly statecode: string;
			/** Reason for the status of the Flow Approval */
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
	namespace msdyn_flow_flowapproval {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 192350003 */
			Completed,
			/** 192350000 */
			Created,
			/** 192350002 */
			NotifyingFlow,
			/** 192350001 */
			WaitingForApproval
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
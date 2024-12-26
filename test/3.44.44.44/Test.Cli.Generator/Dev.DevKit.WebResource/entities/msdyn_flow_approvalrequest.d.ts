//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_flow_approvalrequest_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the approval request. */
			msdyn_flow_approvalrequest_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_flow_approvalrequest_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_flow_approvalrequest_Information */
		Body: DevKit.Formmsdyn_flow_approvalrequest_Information.Body;
		/** The Navigation of form msdyn_flow_approvalrequest_Information */
		Navigation: DevKit.Formmsdyn_flow_approvalrequest_Information.Navigation;
		/** The SidePanes of form msdyn_flow_approvalrequest_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_flow_approvalrequestApi {
		/**
		* DynamicsCrm.DevKit msdyn_flow_approvalrequestApi
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
		/** Whether the approval request may be reassigned to another user. */
		msdyn_flow_approvalrequest_allowreassignment: boolean;
		/** The linked approval. */
		msdyn_flow_approvalrequest_approval: string;
		/** Lookup key to match approval id and stage in fetch xml. */
		msdyn_flow_approvalrequest_approvalstagekey: string;
		/** The due date. */
		msdyn_flow_approvalrequest_dueon_UtcDateAndTime: Date;
		/** The expiration date. */
		msdyn_flow_approvalrequest_expireson_UtcDateAndTime: Date;
		/** The last notification date. */
		msdyn_flow_approvalrequest_lastnotifiedon_UtcDateAndTime: Date;
		/** The name of the approval request. */
		msdyn_flow_approvalrequest_name: string;
		/** The notification frequency in hours. */
		msdyn_flow_approvalrequest_notificationfrequency: number;
		/** The set of available response options. */
		msdyn_flow_approvalrequest_options: string;
		/** Unstructured space to store extraneous information associated with the approval request for partner services. */
		msdyn_flow_approvalrequest_partnermetadata: string;
		/** The approval request from which this one was reassigned. */
		msdyn_flow_approvalrequest_reassignedfrom: string;
		/** The response options, comma-separated. */
		msdyn_flow_approvalrequest_responseoptions: string;
		msdyn_flow_approvalrequest_responseoptionstype: OptionSet.msdyn_flow_approvalrequest.msdyn_flow_approvalrequest_responseoptionstype;
		/** The assigned stage of the associated approval. */
		msdyn_flow_approvalrequest_stage: OptionSet.msdyn_flow_approvalrequest.msdyn_flow_approvalrequest_stage;
		msdyn_flow_approvalrequest_stepnumber: number;
		/** Unique identifier for entity instances */
		msdyn_flow_approvalrequestId: string;
		/** Field mirroring the linked approval for the constraint index. */
		msdyn_flow_approvalrequestidx_approvalid: string;
		/** Field mirroring the owning user id for the constraint index. */
		msdyn_flow_approvalrequestidx_owninguserid: string;
		/** Field mirroring the reassigned from id for the constraint index. */
		msdyn_flow_approvalrequestidx_reassignedfromid: string;
		/** Field mirroring the stage for the constraint index. */
		msdyn_flow_approvalrequestidx_stage: string;
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
		/** Status of the Approval Request */
		statecode: OptionSet.msdyn_flow_approvalrequest.statecode;
		/** The reason for the status of the request. */
		statuscode: OptionSet.msdyn_flow_approvalrequest.statuscode;
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
			/** Whether the approval request may be reassigned to another user. */
			readonly msdyn_flow_approvalrequest_allowreassignment: string;
			/** The linked approval. */
			readonly msdyn_flow_approvalrequest_approval: string;
			/** Lookup key to match approval id and stage in fetch xml. */
			readonly msdyn_flow_approvalrequest_approvalstagekey: string;
			/** The due date. */
			readonly msdyn_flow_approvalrequest_dueon_UtcDateAndTime: string;
			/** The expiration date. */
			readonly msdyn_flow_approvalrequest_expireson_UtcDateAndTime: string;
			/** The last notification date. */
			readonly msdyn_flow_approvalrequest_lastnotifiedon_UtcDateAndTime: string;
			/** The name of the approval request. */
			readonly msdyn_flow_approvalrequest_name: string;
			/** The notification frequency in hours. */
			readonly msdyn_flow_approvalrequest_notificationfrequency: string;
			/** The set of available response options. */
			readonly msdyn_flow_approvalrequest_options: string;
			/** Unstructured space to store extraneous information associated with the approval request for partner services. */
			readonly msdyn_flow_approvalrequest_partnermetadata: string;
			/** The approval request from which this one was reassigned. */
			readonly msdyn_flow_approvalrequest_reassignedfrom: string;
			/** The response options, comma-separated. */
			readonly msdyn_flow_approvalrequest_responseoptions: string;
			readonly msdyn_flow_approvalrequest_responseoptionstype: string;
			/** The assigned stage of the associated approval. */
			readonly msdyn_flow_approvalrequest_stage: string;
			readonly msdyn_flow_approvalrequest_stepnumber: string;
			/** Unique identifier for entity instances */
			readonly msdyn_flow_approvalrequestId: string;
			/** Field mirroring the linked approval for the constraint index. */
			readonly msdyn_flow_approvalrequestidx_approvalid: string;
			/** Field mirroring the owning user id for the constraint index. */
			readonly msdyn_flow_approvalrequestidx_owninguserid: string;
			/** Field mirroring the reassigned from id for the constraint index. */
			readonly msdyn_flow_approvalrequestidx_reassignedfromid: string;
			/** Field mirroring the stage for the constraint index. */
			readonly msdyn_flow_approvalrequestidx_stage: string;
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
			/** Status of the Approval Request */
			readonly statecode: string;
			/** The reason for the status of the request. */
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
	namespace msdyn_flow_approvalrequest {
		enum msdyn_flow_approvalrequest_responseoptionstype {
			/** 192350001 */
			BasicApproveReject,
			/** 192350002 */
			CustomOptions,
			/** 192350000 */
			NotSpecified
		}
		enum msdyn_flow_approvalrequest_stage {
			/** 192350001 */
			Basic,
			/** 192351000 */
			Complete,
			/** 192350000 */
			Not_Specified
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
			Inactive,
			/** 192350000 */
			Reassigned
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
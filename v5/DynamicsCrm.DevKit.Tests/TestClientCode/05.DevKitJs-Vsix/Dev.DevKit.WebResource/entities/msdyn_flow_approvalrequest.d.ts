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
	}
	export class Formmsdyn_flow_approvalrequest_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_flow_approvalrequest_Information */
		Body: DevKit.Formmsdyn_flow_approvalrequest_Information.Body;
	}
	export class msdyn_flow_approvalrequestApi {
		/**
		* DynamicsCrm.DevKit msdyn_flow_approvalrequestApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Whether the approval request may be reassigned to another user. */
		msdyn_flow_approvalrequest_allowreassignment: boolean | null;
		/** The linked approval. */
		msdyn_flow_approvalrequest_approval: string | null;
		/** Lookup key to match approval id and stage in fetch xml. */
		msdyn_flow_approvalrequest_approvalstagekey: string | null;
		/** The due date. */
		msdyn_flow_approvalrequest_dueon_UtcDateAndTime: Date | null;
		/** The expiration date. */
		msdyn_flow_approvalrequest_expireson_UtcDateAndTime: Date | null;
		/** The last notification date. */
		msdyn_flow_approvalrequest_lastnotifiedon_UtcDateAndTime: Date | null;
		/** The name of the approval request. */
		msdyn_flow_approvalrequest_name: string | null;
		/** The notification frequency in hours. */
		msdyn_flow_approvalrequest_notificationfrequency: number | null;
		/** The set of available response options. */
		msdyn_flow_approvalrequest_options: string | null;
		/** Unstructured space to store extraneous information associated with the approval request for partner services. */
		msdyn_flow_approvalrequest_partnermetadata: string | null;
		/** The approval request from which this one was reassigned. */
		msdyn_flow_approvalrequest_reassignedfrom: string | null;
		/** The response options, comma-separated. */
		msdyn_flow_approvalrequest_responseoptions: string | null;
		msdyn_flow_approvalrequest_responseoptionstype: OptionSet.msdyn_flow_approvalrequest.msdyn_flow_approvalrequest_responseoptionstype | null;
		/** The assigned stage of the associated approval. */
		msdyn_flow_approvalrequest_stage: OptionSet.msdyn_flow_approvalrequest.msdyn_flow_approvalrequest_stage | null;
		msdyn_flow_approvalrequest_stepnumber: number | null;
		/** Unique identifier for entity instances */
		msdyn_flow_approvalrequestId: string | null;
		/** Field mirroring the linked approval for the constraint index. */
		msdyn_flow_approvalrequestidx_approvalid: string | null;
		/** Field mirroring the owning user id for the constraint index. */
		msdyn_flow_approvalrequestidx_owninguserid: string | null;
		/** Field mirroring the reassigned from id for the constraint index. */
		msdyn_flow_approvalrequestidx_reassignedfromid: string | null;
		/** Field mirroring the stage for the constraint index. */
		msdyn_flow_approvalrequestidx_stage: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** The stage number to which this approval request belongs. */
		StageNumber: number | null;
		/** Status of the Approval Request */
		statecode: OptionSet.msdyn_flow_approvalrequest.statecode | null;
		/** The reason for the status of the request. */
		statuscode: OptionSet.msdyn_flow_approvalrequest.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** The stage number to which this approval request belongs. */
			readonly StageNumber: string;
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
			/** BasicApproveReject = 192350001*/
			BasicApproveReject = 192350001,
			/** CustomOptions = 192350002*/
			CustomOptions = 192350002,
			/** NotSpecified = 192350000*/
			NotSpecified = 192350000
		}
		enum msdyn_flow_approvalrequest_stage {
			/** Basic = 192350001*/
			Basic = 192350001,
			/** Complete = 192351000*/
			Complete = 192351000,
			/** Not_Specified = 192350000*/
			Not_Specified = 192350000
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2,
			/** Reassigned = 192350000*/
			Reassigned = 192350000
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
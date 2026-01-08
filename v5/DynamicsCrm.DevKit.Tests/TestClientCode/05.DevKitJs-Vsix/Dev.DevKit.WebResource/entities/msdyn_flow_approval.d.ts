//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_flow_approval_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the approval. */
			msdyn_flow_approval_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	export class Formmsdyn_flow_approval_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_flow_approval_Information */
		Body: DevKit.Formmsdyn_flow_approval_Information.Body;
	}
	export class msdyn_flow_approvalApi {
		/**
		* DynamicsCrm.DevKit msdyn_flow_approvalApi
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
		/** The link to the current stage of the multi stage approvals */
		CurrentStage: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		msdyn_flow_approval_additionalfields: string | null;
		/** Boolean field that allows the approvers to reassign approval requests. */
		msdyn_flow_approval_allowreassign: boolean | null;
		/** Lookup key to match approval id and stage in fetch xml. */
		msdyn_flow_approval_approvalstagekey: string | null;
		/** The linked basic approval model data. */
		msdyn_flow_approval_basicapprovalmodel: string | null;
		/** User defined string that allows approval creators to categorize an approval. */
		msdyn_flow_approval_category: string | null;
		/** The completion date. */
		msdyn_flow_approval_completedon_UtcDateAndTime: Date | null;
		msdyn_flow_approval_currentstepnumber: number | null;
		/** The description of the approval. */
		msdyn_flow_approval_details: string | null;
		/** The due date. */
		msdyn_flow_approval_dueon_UtcDateAndTime: Date | null;
		/** The expiration date. */
		msdyn_flow_approval_expireson_UtcDateAndTime: Date | null;
		/** The optional link to the item to approve. */
		msdyn_flow_approval_itemlink: string | null;
		/** The optional description for the item link. */
		msdyn_flow_approval_itemlinkdescription: string | null;
		/** Item link hash to enable queries. */
		msdyn_flow_approval_itemlinkhash: string | null;
		/** Id of the approval model. */
		msdyn_flow_approval_modelid: string | null;
		/** Table name of the approval model. */
		msdyn_flow_approval_modeltype: string | null;
		/** The name of the approval. */
		msdyn_flow_approval_name: string | null;
		/** The hash of a unique partner id associated with a document. Meant for search scenarios. */
		msdyn_flow_approval_partneridhash: string | null;
		/** Unstructured space to store extraneous information associated with the approval for partner services. */
		msdyn_flow_approval_partnermetadata: string | null;
		/** The priority of the approval. */
		msdyn_flow_approval_priority: OptionSet.msdyn_flow_approval.msdyn_flow_approval_priority | null;
		/** The type of request that created the approval whether from an approval template, esignature process, etc. */
		msdyn_flow_approval_requesttype: OptionSet.msdyn_flow_approval.msdyn_flow_approval_requesttype | null;
		/** Final outcome of the approval. */
		msdyn_flow_approval_result: string | null;
		/** Whether to send system-generated email notifications for this approval. */
		msdyn_flow_approval_sendemail: boolean | null;
		/** Source of the request that created the approval. */
		msdyn_flow_approval_source: string | null;
		/** The stage. */
		msdyn_flow_approval_stage: OptionSet.msdyn_flow_approval.msdyn_flow_approval_stage | null;
		/** Semicolon delimited list of user defined strings to help filter and search approvals. */
		msdyn_flow_approval_tags: string | null;
		/** Base64 encoded string id of the template approval form. */
		msdyn_flow_approval_templateformid: string | null;
		/** Base64 encoded string id of the template used to create the approval. */
		msdyn_flow_approval_templateid: string | null;
		/** Base64 encoded string id of the unique templated approval response. */
		msdyn_flow_approval_templateresponseId: string | null;
		/** The title. */
		msdyn_flow_approval_title: string | null;
		/** Unique identifier for entity instances */
		msdyn_flow_approvalId: string | null;
		/** Boolean field that allows the approval owner to cancel the approval. */
		new_msdyn_flow_approval_allowcancel: boolean | null;
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
		/** The id of the approval process from which the approval is created */
		ProcessId: string | null;
		/** Status of the Approval */
		statecode: OptionSet.msdyn_flow_approval.statecode | null;
		/** The reason for the status of the approval. */
		statuscode: OptionSet.msdyn_flow_approval.statuscode | null;
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
			/** The link to the current stage of the multi stage approvals */
			readonly CurrentStage: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_flow_approval_additionalfields: string;
			/** Boolean field that allows the approvers to reassign approval requests. */
			readonly msdyn_flow_approval_allowreassign: string;
			/** Lookup key to match approval id and stage in fetch xml. */
			readonly msdyn_flow_approval_approvalstagekey: string;
			/** The linked basic approval model data. */
			readonly msdyn_flow_approval_basicapprovalmodel: string;
			/** User defined string that allows approval creators to categorize an approval. */
			readonly msdyn_flow_approval_category: string;
			/** The completion date. */
			readonly msdyn_flow_approval_completedon_UtcDateAndTime: string;
			readonly msdyn_flow_approval_currentstepnumber: string;
			/** The description of the approval. */
			readonly msdyn_flow_approval_details: string;
			/** The due date. */
			readonly msdyn_flow_approval_dueon_UtcDateAndTime: string;
			/** The expiration date. */
			readonly msdyn_flow_approval_expireson_UtcDateAndTime: string;
			/** The optional link to the item to approve. */
			readonly msdyn_flow_approval_itemlink: string;
			/** The optional description for the item link. */
			readonly msdyn_flow_approval_itemlinkdescription: string;
			/** Item link hash to enable queries. */
			readonly msdyn_flow_approval_itemlinkhash: string;
			/** Id of the approval model. */
			readonly msdyn_flow_approval_modelid: string;
			/** Table name of the approval model. */
			readonly msdyn_flow_approval_modeltype: string;
			/** The name of the approval. */
			readonly msdyn_flow_approval_name: string;
			/** The hash of a unique partner id associated with a document. Meant for search scenarios. */
			readonly msdyn_flow_approval_partneridhash: string;
			/** Unstructured space to store extraneous information associated with the approval for partner services. */
			readonly msdyn_flow_approval_partnermetadata: string;
			/** The priority of the approval. */
			readonly msdyn_flow_approval_priority: string;
			/** The type of request that created the approval whether from an approval template, esignature process, etc. */
			readonly msdyn_flow_approval_requesttype: string;
			/** Final outcome of the approval. */
			readonly msdyn_flow_approval_result: string;
			/** Whether to send system-generated email notifications for this approval. */
			readonly msdyn_flow_approval_sendemail: string;
			/** Source of the request that created the approval. */
			readonly msdyn_flow_approval_source: string;
			/** The stage. */
			readonly msdyn_flow_approval_stage: string;
			/** Semicolon delimited list of user defined strings to help filter and search approvals. */
			readonly msdyn_flow_approval_tags: string;
			/** Base64 encoded string id of the template approval form. */
			readonly msdyn_flow_approval_templateformid: string;
			/** Base64 encoded string id of the template used to create the approval. */
			readonly msdyn_flow_approval_templateid: string;
			/** Base64 encoded string id of the unique templated approval response. */
			readonly msdyn_flow_approval_templateresponseId: string;
			/** The title. */
			readonly msdyn_flow_approval_title: string;
			/** Unique identifier for entity instances */
			readonly msdyn_flow_approvalId: string;
			/** Boolean field that allows the approval owner to cancel the approval. */
			readonly new_msdyn_flow_approval_allowcancel: string;
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
			/** The id of the approval process from which the approval is created */
			readonly ProcessId: string;
			/** Status of the Approval */
			readonly statecode: string;
			/** The reason for the status of the approval. */
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
	namespace msdyn_flow_approval {
		enum msdyn_flow_approval_priority {
			/** Important = 192350001*/
			Important = 192350001,
			/** Low = 192350003*/
			Low = 192350003,
			/** Medium = 192350002*/
			Medium = 192350002,
			/** Urgent = 192350000*/
			Urgent = 192350000
		}
		enum msdyn_flow_approval_requesttype {
			/** Basic = 192350001*/
			Basic = 192350001,
			/** eSign = 192350002*/
			eSign = 192350002,
			/** Other = 192350000*/
			Other = 192350000,
			/** Templates = 192350003*/
			Templates = 192350003
		}
		enum msdyn_flow_approval_stage {
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
			/** Abandoned = 192350007*/
			Abandoned = 192350007,
			/** Canceled = 192350006*/
			Canceled = 192350006,
			/** Completed = 192350004*/
			Completed = 192350004,
			/** Created = 192350000*/
			Created = 192350000,
			/** Expired = 192350005*/
			Expired = 192350005,
			/** Pending = 192350001*/
			Pending = 192350001,
			/** Suspended = 192350002*/
			Suspended = 192350002
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
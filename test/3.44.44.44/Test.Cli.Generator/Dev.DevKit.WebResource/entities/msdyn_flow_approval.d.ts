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
		interface Navigation {
			msdyn_flow_approvalrelationship_approvalrequests: DevKit.Controls.NavigationItem,
			msdyn_flow_approvalrelationship_approvalresponses: DevKit.Controls.NavigationItem,
			msdyn_flow_approvalrelationship_approvalsteps: DevKit.Controls.NavigationItem,
			msdyn_flow_approvalrelationship_flowapprovals: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_flow_approval_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_flow_approval_Information */
		Body: DevKit.Formmsdyn_flow_approval_Information.Body;
		/** The Navigation of form msdyn_flow_approval_Information */
		Navigation: DevKit.Formmsdyn_flow_approval_Information.Navigation;
		/** The SidePanes of form msdyn_flow_approval_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_flow_approvalApi {
		/**
		* DynamicsCrm.DevKit msdyn_flow_approvalApi
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
		msdyn_flow_approval_additionalfields: string;
		/** Boolean field that allows the approvers to reassign approval requests. */
		msdyn_flow_approval_allowreassign: boolean;
		/** Lookup key to match approval id and stage in fetch xml. */
		msdyn_flow_approval_approvalstagekey: string;
		/** The linked basic approval model data. */
		msdyn_flow_approval_basicapprovalmodel: string;
		/** User defined string that allows approval creators to categorize an approval. */
		msdyn_flow_approval_category: string;
		/** The completion date. */
		msdyn_flow_approval_completedon_UtcDateAndTime: Date;
		msdyn_flow_approval_currentstepnumber: number;
		/** The description of the approval. */
		msdyn_flow_approval_details: string;
		/** The due date. */
		msdyn_flow_approval_dueon_UtcDateAndTime: Date;
		/** The expiration date. */
		msdyn_flow_approval_expireson_UtcDateAndTime: Date;
		/** The optional link to the item to approve. */
		msdyn_flow_approval_itemlink: string;
		/** The optional description for the item link. */
		msdyn_flow_approval_itemlinkdescription: string;
		/** Item link hash to enable queries. */
		msdyn_flow_approval_itemlinkhash: string;
		/** Id of the approval model. */
		msdyn_flow_approval_modelid: string;
		/** Table name of the approval model. */
		msdyn_flow_approval_modeltype: string;
		/** The name of the approval. */
		msdyn_flow_approval_name: string;
		/** The hash of a unique partner id associated with a document. Meant for search scenarios. */
		msdyn_flow_approval_partneridhash: string;
		/** Unstructured space to store extraneous information associated with the approval for partner services. */
		msdyn_flow_approval_partnermetadata: string;
		/** The priority of the approval. */
		msdyn_flow_approval_priority: OptionSet.msdyn_flow_approval.msdyn_flow_approval_priority;
		/** The type of request that created the approval whether from an approval template, esignature process, etc. */
		msdyn_flow_approval_requesttype: OptionSet.msdyn_flow_approval.msdyn_flow_approval_requesttype;
		/** Final outcome of the approval. */
		msdyn_flow_approval_result: string;
		/** Whether to send system-generated email notifications for this approval. */
		msdyn_flow_approval_sendemail: boolean;
		/** Source of the request that created the approval. */
		msdyn_flow_approval_source: string;
		/** The stage. */
		msdyn_flow_approval_stage: OptionSet.msdyn_flow_approval.msdyn_flow_approval_stage;
		/** Semicolon delimited list of user defined strings to help filter and search approvals. */
		msdyn_flow_approval_tags: string;
		/** Base64 encoded string id of the template approval form. */
		msdyn_flow_approval_templateformid: string;
		/** Base64 encoded string id of the template used to create the approval. */
		msdyn_flow_approval_templateid: string;
		/** Base64 encoded string id of the unique templated approval response. */
		msdyn_flow_approval_templateresponseId: string;
		/** The title. */
		msdyn_flow_approval_title: string;
		/** Unique identifier for entity instances */
		msdyn_flow_approvalId: string;
		/** Boolean field that allows the approval owner to cancel the approval. */
		new_msdyn_flow_approval_allowcancel: boolean;
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
		/** Status of the Approval */
		statecode: OptionSet.msdyn_flow_approval.statecode;
		/** The reason for the status of the approval. */
		statuscode: OptionSet.msdyn_flow_approval.statuscode;
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
			/** 192350001 */
			Important,
			/** 192350003 */
			Low,
			/** 192350002 */
			Medium,
			/** 192350000 */
			Urgent
		}
		enum msdyn_flow_approval_requesttype {
			/** 192350001 */
			Basic,
			/** 192350002 */
			eSign,
			/** 192350000 */
			Other,
			/** 192350003 */
			Templates
		}
		enum msdyn_flow_approval_stage {
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
			/** 192350007 */
			Abandoned,
			/** 192350006 */
			Canceled,
			/** 192350004 */
			Completed,
			/** 192350000 */
			Created,
			/** 192350005 */
			Expired,
			/** 192350001 */
			Pending,
			/** 192350002 */
			Suspended
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
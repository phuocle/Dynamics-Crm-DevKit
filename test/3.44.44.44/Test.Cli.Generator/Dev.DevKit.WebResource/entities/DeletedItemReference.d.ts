//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDeleted_Item_Reference {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user who deleted the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was deleted. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who deleted the record. */
			CreatedOnBehalfBy: DevKit.Controls.Lookup;
		}
		interface Tabs {
		}
		interface Body {
			/** Deleted Object */
			DeletedObject: DevKit.Controls.Lookup;
			/** The Display name of the deleted record. */
			name: DevKit.Controls.String;
			/** Number of Processed Records */
			ProcessedRecords: DevKit.Controls.Integer;
			/** Regarding Object */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Total impacted Records */
			TotalRecords: DevKit.Controls.Integer;
		}
		interface Navigation {

		}
	}
	class FormDeleted_Item_Reference extends DevKit.IForm {
		/**
		* Deleted Item Reference [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Deleted_Item_Reference */
		Body: DevKit.FormDeleted_Item_Reference.Body;
		/** The Header section of form Deleted_Item_Reference */
		Header: DevKit.FormDeleted_Item_Reference.Header;
		/** The Navigation of form Deleted_Item_Reference */
		Navigation: DevKit.FormDeleted_Item_Reference.Navigation;
		/** The SidePanes of form Deleted_Item_Reference */
		SidePanes: DevKit.SidePanes;
	}
	class DeletedItemReferenceApi {
		/**
		* DynamicsCrm.DevKit DeletedItemReferenceApi
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
		/** Unique identifier of the user who deleted the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was deleted. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who deleted the record. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier for entity instances */
		DeletedItemReferenceId: string;
		/** Deleted Object */
		DeletedObject: string;
		/** For internal use only. */
		readonly DeletedRecords_name: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The Display name of the deleted record. */
		name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Number of Processed Records */
		readonly ProcessedRecords: number;
		/** Regarding Object */
		RegardingObjectId: string;
		/** Status of the Deleted Record Reference */
		statecode: OptionSet.DeletedItemReference.statecode;
		/** Reason for the status of the Deleted Record Reference */
		statuscode: OptionSet.DeletedItemReference.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Total impacted Records */
		readonly TotalRecords: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** If true this record can be restored. */
		readonly ValidForRestore: boolean;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who deleted the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was deleted. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who deleted the record. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier for entity instances */
			readonly DeletedItemReferenceId: string;
			/** Deleted Object */
			readonly DeletedObject: string;
			/** For internal use only. */
			readonly DeletedRecords_name: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The Display name of the deleted record. */
			readonly name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Number of Processed Records */
			readonly ProcessedRecords: string;
			/** Regarding Object */
			readonly RegardingObjectId: string;
			/** Status of the Deleted Record Reference */
			readonly statecode: string;
			/** Reason for the status of the Deleted Record Reference */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Total impacted Records */
			readonly TotalRecords: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** If true this record can be restored. */
			readonly ValidForRestore: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace DeletedItemReference {
		enum deletedobjectIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
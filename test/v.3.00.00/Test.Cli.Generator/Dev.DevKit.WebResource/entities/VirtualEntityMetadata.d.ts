//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormVirtualEntityMetadata_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the virtual entity that these settings are for. */
			ExtensionOfRecordId: DevKit.Controls.Lookup;
			/** Whether the OnExternalUpdated message ChangedFields parameter will include data about which fields have changed. */
			IsChangedFieldsEnabledForUpdateEvent: DevKit.Controls.Boolean;
			/** Will enable a message to send information about new records created in the external data source. */
			IsOnExternalCreatedEnabled: DevKit.Controls.Boolean;
			/** Will enable a message to send information about deleted records in the external data source. */
			IsOnExternalDeletedEnabled: DevKit.Controls.Boolean;
			/** Will enable a message to send information about updated records in the external data source. */
			IsOnExternalUpdatedEnabled: DevKit.Controls.Boolean;
			/** The name of the  settings. */
			Name: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormVirtualEntityMetadata_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form VirtualEntityMetadata_Information */
		Body: DevKit.FormVirtualEntityMetadata_Information.Body;
		/** The Process of form VirtualEntityMetadata_Information */
		Process: DevKit.FormVirtualEntityMetadata_Information.Process;
		/** The SidePanes of form VirtualEntityMetadata_Information */
		SidePanes: DevKit.SidePanes;
	}
	class VirtualEntityMetadataApi {
		/**
		* DynamicsCrm.DevKit VirtualEntityMetadataApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.VirtualEntityMetadata.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** The name of the virtual entity that these settings are for. */
		ExtensionOfRecordId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Whether the OnExternalUpdated message ChangedFields parameter will include data about which fields have changed. */
		IsChangedFieldsEnabledForUpdateEvent: boolean;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Will enable a message to send information about new records created in the external data source. */
		IsOnExternalCreatedEnabled: boolean;
		/** Will enable a message to send information about deleted records in the external data source. */
		IsOnExternalDeletedEnabled: boolean;
		/** Will enable a message to send information about updated records in the external data source. */
		IsOnExternalUpdatedEnabled: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the  settings. */
		Name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the VirtualEntityMetadata */
		statecode: OptionSet.VirtualEntityMetadata.statecode;
		/** Reason for the status of the VirtualEntityMetadata */
		statuscode: OptionSet.VirtualEntityMetadata.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Unique identifier for entity instances */
		VirtualEntityMetadataId: string;
	}
}
declare namespace OptionSet {
	namespace VirtualEntityMetadata {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
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
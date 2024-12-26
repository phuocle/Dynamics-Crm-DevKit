//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCustomAPI_Information {
		interface Tabs {
		}
		interface Body {
			/** The type of custom processing step allowed */
			AllowedCustomProcessingStepType: DevKit.Controls.OptionSet;
			/** The binding type of the custom API */
			BindingType: DevKit.Controls.OptionSet;
			/** The logical name of the entity bound to the custom API */
			BoundEntityLogicalName: DevKit.Controls.String;
			/** Localized description for custom API instances */
			Description: DevKit.Controls.String;
			/** Localized display name for custom API instances */
			DisplayName: DevKit.Controls.String;
			/** Name of the privilege that allows execution of the custom API */
			ExecutePrivilegeName: DevKit.Controls.String;
			/** Indicates if the custom API is a function (GET is supported) or not (POST is supported) */
			IsFunction: DevKit.Controls.Boolean;
			/** Indicates if the custom API is private (hidden from metadata and documentation) */
			IsPrivate: DevKit.Controls.Boolean;
			/** The primary name of the custom API */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			PluginTypeId: DevKit.Controls.Lookup;
			/** Unique name for the custom API */
			UniqueName: DevKit.Controls.String;
			/** Indicates if the custom API is enabled as a workflow action */
			WorkflowSdkStepEnabled: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormCustomAPI_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form CustomAPI_Information */
		Body: DevKit.FormCustomAPI_Information.Body;
		/** The Process of form CustomAPI_Information */
		Process: DevKit.FormCustomAPI_Information.Process;
		/** The SidePanes of form CustomAPI_Information */
		SidePanes: DevKit.SidePanes;
	}
	class CustomAPIApi {
		/**
		* DynamicsCrm.DevKit CustomAPIApi
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
		/** The type of custom processing step allowed */
		AllowedCustomProcessingStepType: OptionSet.CustomAPI.AllowedCustomProcessingStepType;
		/** The binding type of the custom API */
		BindingType: OptionSet.CustomAPI.BindingType;
		/** The logical name of the entity bound to the custom API */
		BoundEntityLogicalName: string;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.CustomAPI.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier for custom API instances */
		CustomAPIId: string;
		/** Localized description for custom API instances */
		Description: string;
		/** Localized display name for custom API instances */
		DisplayName: string;
		/** Name of the privilege that allows execution of the custom API */
		ExecutePrivilegeName: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates if the custom API is a function (GET is supported) or not (POST is supported) */
		IsFunction: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Indicates if the custom API is private (hidden from metadata and documentation) */
		IsPrivate: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The primary name of the custom API */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		PluginTypeId: string;
		SdkMessageId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Custom API */
		statecode: OptionSet.CustomAPI.statecode;
		/** Reason for the status of the Custom API */
		statuscode: OptionSet.CustomAPI.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique name for the custom API */
		UniqueName: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Indicates if the custom API is enabled as a workflow action */
		WorkflowSdkStepEnabled: boolean;
		readonly FormattedValue: {
			/** The type of custom processing step allowed */
			readonly AllowedCustomProcessingStepType: string;
			/** The binding type of the custom API */
			readonly BindingType: string;
			/** The logical name of the entity bound to the custom API */
			readonly BoundEntityLogicalName: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier for custom API instances */
			readonly CustomAPIId: string;
			/** Localized description for custom API instances */
			readonly Description: string;
			/** Localized display name for custom API instances */
			readonly DisplayName: string;
			/** Name of the privilege that allows execution of the custom API */
			readonly ExecutePrivilegeName: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates if the custom API is a function (GET is supported) or not (POST is supported) */
			readonly IsFunction: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Indicates if the custom API is private (hidden from metadata and documentation) */
			readonly IsPrivate: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The primary name of the custom API */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			readonly PluginTypeId: string;
			readonly SdkMessageId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Custom API */
			readonly statecode: string;
			/** Reason for the status of the Custom API */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique name for the custom API */
			readonly UniqueName: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Indicates if the custom API is enabled as a workflow action */
			readonly WorkflowSdkStepEnabled: string;
		}
	}
}
declare namespace OptionSet {
	namespace CustomAPI {
		enum AllowedCustomProcessingStepType {
			/** 1 */
			Async_Only,
			/** 0 */
			None,
			/** 2 */
			Sync_and_Async
		}
		enum BindingType {
			/** 1 */
			Entity,
			/** 2 */
			Entity_Collection,
			/** 0 */
			Global
		}
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
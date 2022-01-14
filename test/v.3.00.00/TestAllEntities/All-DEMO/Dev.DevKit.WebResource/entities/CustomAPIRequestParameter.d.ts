//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCustomAPIRequestParameter_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for the custom API that owns this custom API request parameter */
			CustomAPIId: DevKit.Controls.Lookup;
			/** Localized description for custom API request parameter instances  */
			Description: DevKit.Controls.String;
			/** Localized display name for custom API request parameter instances */
			DisplayName: DevKit.Controls.String;
			/** Indicates if the custom API request parameter is optional */
			IsOptional: DevKit.Controls.Boolean;
			/** The logical name of the entity bound to the custom API request parameter */
			LogicalEntityName: DevKit.Controls.String;
			/** The primary name of the custom API request parameter */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The data type of the custom API request parameter */
			Type: DevKit.Controls.OptionSet;
			/** Unique name for the custom API request parameter */
			UniqueName: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormCustomAPIRequestParameter_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form CustomAPIRequestParameter_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form CustomAPIRequestParameter_Information */
		Body: DevKit.FormCustomAPIRequestParameter_Information.Body;
		/** The Process of form CustomAPIRequestParameter_Information */
		Process: DevKit.FormCustomAPIRequestParameter_Information.Process;
		/** The SidePanes of form CustomAPIRequestParameter_Information */
		SidePanes: DevKit.SidePanes;
	}
	class CustomAPIRequestParameterApi {
		/**
		* DynamicsCrm.DevKit CustomAPIRequestParameterApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** For internal use only. */
		ComponentIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the custom API that owns this custom API request parameter */
		CustomAPIId: DevKit.WebApi.LookupValue;
		/** Unique identifier for custom API request parameter instances */
		CustomAPIRequestParameterId: DevKit.WebApi.GuidValue;
		/** Localized description for custom API request parameter instances  */
		Description: DevKit.WebApi.StringValue;
		/** Localized display name for custom API request parameter instances */
		DisplayName: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates if the custom API request parameter is optional */
		IsOptional: DevKit.WebApi.BooleanValue;
		/** The logical name of the entity bound to the custom API request parameter */
		LogicalEntityName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The primary name of the custom API request parameter */
		Name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the Custom API Request Parameter */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Custom API Request Parameter */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** The data type of the custom API request parameter */
		Type: DevKit.WebApi.OptionSetValue;
		/** Unique name for the custom API request parameter */
		UniqueName: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace CustomAPIRequestParameter {
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
		enum Type {
			/** 0 */
			Boolean,
			/** 1 */
			DateTime,
			/** 2 */
			Decimal,
			/** 3 */
			Entity,
			/** 4 */
			EntityCollection,
			/** 5 */
			EntityReference,
			/** 6 */
			Float,
			/** 12 */
			Guid,
			/** 7 */
			Integer,
			/** 8 */
			Money,
			/** 9 */
			Picklist,
			/** 10 */
			String,
			/** 11 */
			StringArray
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCustomAPIResponseProperty_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for the custom API that owns this custom API response property */
			CustomAPIId: DevKit.Controls.Lookup;
			/** Localized description for custom API response property instances */
			Description: DevKit.Controls.String;
			/** Localized display name for custom API response property instances */
			DisplayName: DevKit.Controls.String;
			/** The logical name of the entity bound to the custom API response property */
			LogicalEntityName: DevKit.Controls.String;
			/** The primary name of the custom API response property */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The data type of the custom API response property */
			Type: DevKit.Controls.OptionSet;
			/** Unique name for the custom API response property */
			UniqueName: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_customapiresponseproperty_msdyn_customapirulesetconfiguration_CustomAPIResponseProperty: DevKit.Controls.NavigationItem
		}
	}
	class FormCustomAPIResponseProperty_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form CustomAPIResponseProperty_Information */
		Body: DevKit.FormCustomAPIResponseProperty_Information.Body;
		/** The Navigation of form CustomAPIResponseProperty_Information */
		Navigation: DevKit.FormCustomAPIResponseProperty_Information.Navigation;
		/** The SidePanes of form CustomAPIResponseProperty_Information */
		SidePanes: DevKit.SidePanes;
	}
	class CustomAPIResponsePropertyApi {
		/**
		* DynamicsCrm.DevKit CustomAPIResponsePropertyApi
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
		readonly ComponentState: OptionSet.CustomAPIResponseProperty.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier for the custom API that owns this custom API response property */
		CustomAPIId: string;
		/** Unique identifier for custom API response property instances */
		CustomAPIResponsePropertyId: string;
		/** Localized description for custom API response property instances */
		Description: string;
		/** Localized display name for custom API response property instances */
		DisplayName: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** The logical name of the entity bound to the custom API response property */
		LogicalEntityName: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The primary name of the custom API response property */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Custom API Response Property */
		statecode: OptionSet.CustomAPIResponseProperty.statecode;
		/** Reason for the status of the Custom API Response Property */
		statuscode: OptionSet.CustomAPIResponseProperty.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** The data type of the custom API response property */
		Type: OptionSet.CustomAPIResponseProperty.Type;
		/** Unique name for the custom API response property */
		UniqueName: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
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
			/** Unique identifier for the custom API that owns this custom API response property */
			readonly CustomAPIId: string;
			/** Unique identifier for custom API response property instances */
			readonly CustomAPIResponsePropertyId: string;
			/** Localized description for custom API response property instances */
			readonly Description: string;
			/** Localized display name for custom API response property instances */
			readonly DisplayName: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** The logical name of the entity bound to the custom API response property */
			readonly LogicalEntityName: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The primary name of the custom API response property */
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Custom API Response Property */
			readonly statecode: string;
			/** Reason for the status of the Custom API Response Property */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** The data type of the custom API response property */
			readonly Type: string;
			/** Unique name for the custom API response property */
			readonly UniqueName: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace CustomAPIResponseProperty {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
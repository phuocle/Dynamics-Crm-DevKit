//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AppConfigInstanceApi {
		/**
		* DynamicsCrm.DevKit AppConfigInstanceApi
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
		/** System-calculated App Configuration unique identifier. */
		AppConfigId: string;
		/** Enter the App Configuration unique identifier of AppConfig entity for which this customization belongs. */
		AppConfigIdUnique: string;
		/** System-Populated App Configuration instance identifier. */
		readonly AppConfigInstanceId: string;
		/** System-populated App Configuration Instance unique identifier. */
		AppConfigInstanceIdUnique: string;
		/** System-calculated App Configuration Master identifier. */
		AppConfigMasterId: string;
		/** System-Populated Published or UnPublished state of App Configuration Instance. */
		readonly ComponentState: OptionSet.AppConfigInstance.ComponentState;
		/** ComponentType */
		ComponentType: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalfÂ of another user. */
		readonly CreatedOnBehalfBy: string;
		/** For internal use only. */
		readonly ImportSequenceNumber: number;
		/** Shows the version in which the App Configuration Instance is introduced. */
		IntroducedVersion: string;
		/** Is Managed */
		readonly IsManaged: boolean;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** ObjectId */
		ObjectId: string;
		/** System-calculated field for Organization identifier. */
		readonly OrganizationId: string;
		/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly OverriddenCreatedOn_UtcDateOnly: Date;
		/** Shows the last overwrite time for the App Configuration Instance. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Set the solution idenfitier for associated solution. */
		readonly SolutionId: string;
		/** Set the supporting solution idenfitier for associated solution. */
		readonly SupportingSolutionId: string;
		/** Enter a value for the customization property that is valid as per the validator XML specified in the app configuration master record. */
		Value: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** System-calculated App Configuration unique identifier. */
			readonly AppConfigId: string;
			/** Enter the App Configuration unique identifier of AppConfig entity for which this customization belongs. */
			readonly AppConfigIdUnique: string;
			/** System-Populated App Configuration instance identifier. */
			readonly AppConfigInstanceId: string;
			/** System-populated App Configuration Instance unique identifier. */
			readonly AppConfigInstanceIdUnique: string;
			/** System-calculated App Configuration Master identifier. */
			readonly AppConfigMasterId: string;
			/** System-Populated Published or UnPublished state of App Configuration Instance. */
			readonly ComponentState: string;
			/** ComponentType */
			readonly ComponentType: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalfÂ of another user. */
			readonly CreatedOnBehalfBy: string;
			/** For internal use only. */
			readonly ImportSequenceNumber: string;
			/** Shows the version in which the App Configuration Instance is introduced. */
			readonly IntroducedVersion: string;
			/** Is Managed */
			readonly IsManaged: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** ObjectId */
			readonly ObjectId: string;
			/** System-calculated field for Organization identifier. */
			readonly OrganizationId: string;
			/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Shows the last overwrite time for the App Configuration Instance. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Set the solution idenfitier for associated solution. */
			readonly SolutionId: string;
			/** Set the supporting solution idenfitier for associated solution. */
			readonly SupportingSolutionId: string;
			/** Enter a value for the customization property that is valid as per the validator XML specified in the app configuration master record. */
			readonly Value: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppConfigInstance {
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
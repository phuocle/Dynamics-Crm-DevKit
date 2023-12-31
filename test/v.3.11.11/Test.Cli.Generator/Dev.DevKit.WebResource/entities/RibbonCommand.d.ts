//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class RibbonCommandApi {
		/**
		* DynamicsCrm.DevKit RibbonCommandApi
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
		/** The command's Id */
		Command: string;
		/** The JScript library and function to run when this command is executed. */
		CommandDefinition: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.RibbonCommand.ComponentState;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** The entity this rule applies to, also the entity this rule was imported from, will be exported to. */
		Entity1: string;
		readonly IsManaged: boolean;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier. */
		RibbonCommandId: string;
		/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
		readonly RibbonCommandUniqueId: string;
		/** Unique identifier of the ribbon customization with which the ribbon command is associated. */
		RibbonCustomizationId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** The command's Id */
			readonly Command: string;
			/** The JScript library and function to run when this command is executed. */
			readonly CommandDefinition: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** The entity this rule applies to, also the entity this rule was imported from, will be exported to. */
			readonly Entity1: string;
			readonly IsManaged: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier. */
			readonly RibbonCommandId: string;
			/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
			readonly RibbonCommandUniqueId: string;
			/** Unique identifier of the ribbon customization with which the ribbon command is associated. */
			readonly RibbonCustomizationId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RibbonCommand {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
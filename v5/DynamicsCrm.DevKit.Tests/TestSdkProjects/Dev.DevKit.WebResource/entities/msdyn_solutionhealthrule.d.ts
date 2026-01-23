//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_solutionhealthrule_Information {
		interface Tabs {
		}
		interface Body {
			/** Rule description. */
			msdyn_Description: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** OwningSolutionId */
			msdyn_OwningSolutionId: DevKit.Controls.String;
			/** ResolutionAction */
			msdyn_ResolutionAction: DevKit.Controls.Lookup;
			/** This message will be visible to end use when he/she tried to resolve rule failure. */
			msdyn_resolutionmessage: DevKit.Controls.String;
			/** Rule set to which the rule belongs to. */
			msdyn_solutionhealthrulesetId: DevKit.Controls.Lookup;
			/** Workflow */
			msdyn_Workflow: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	export class Formmsdyn_solutionhealthrule_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_solutionhealthrule_Information */
		Body: DevKit.Formmsdyn_solutionhealthrule_Information.Body;
	}
	export class msdyn_solutionhealthruleApi {
		/**
		* DynamicsCrm.DevKit msdyn_solutionhealthruleApi
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
		/** Type of the Component being diagnosed like appmodule, sitemap, systemform etc. */
		msdyn_ComponentType: string | null;
		/** Rule description. */
		msdyn_Description: string | null;
		/** The name of the custom entity. */
		msdyn_name: string | null;
		msdyn_OwningSolutionId: string | null;
		msdyn_ResolutionAction: string | null;
		/** This message will be visible to end use when he/she tried to resolve rule failure. */
		msdyn_resolutionmessage: string | null;
		/** Type of Resolution action. */
		msdyn_ResolutionType: OptionSet.msdyn_solutionhealthrule.msdyn_ResolutionType | null;
		/** Unique identifier for entity instances */
		msdyn_solutionhealthruleId: string | null;
		/** Rule set to which the rule belongs to. */
		msdyn_solutionhealthrulesetId: string | null;
		msdyn_uniquename: string | null;
		msdyn_Workflow: string | null;
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
		/** Status of the Solution Health Rule */
		statecode: OptionSet.msdyn_solutionhealthrule.statecode | null;
		/** Reason for the status of the Solution Health Rule */
		statuscode: OptionSet.msdyn_solutionhealthrule.statuscode | null;
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
			/** Type of the Component being diagnosed like appmodule, sitemap, systemform etc. */
			readonly msdyn_ComponentType: string;
			/** Rule description. */
			readonly msdyn_Description: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_OwningSolutionId: string;
			readonly msdyn_ResolutionAction: string;
			/** This message will be visible to end use when he/she tried to resolve rule failure. */
			readonly msdyn_resolutionmessage: string;
			/** Type of Resolution action. */
			readonly msdyn_ResolutionType: string;
			/** Unique identifier for entity instances */
			readonly msdyn_solutionhealthruleId: string;
			/** Rule set to which the rule belongs to. */
			readonly msdyn_solutionhealthrulesetId: string;
			readonly msdyn_uniquename: string;
			readonly msdyn_Workflow: string;
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
			/** Status of the Solution Health Rule */
			readonly statecode: string;
			/** Reason for the status of the Solution Health Rule */
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
	namespace msdyn_solutionhealthrule {
		enum msdyn_ResolutionType {
			/** Auto_Heal = 192350000*/
			Auto_Heal = 192350000,
			/** Customer_Action_Required = 192350001*/
			Customer_Action_Required = 192350001,
			/** Documenation = 192350002*/
			Documenation = 192350002,
			/** None = 192350003*/
			None = 192350003
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
			Inactive = 2
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormConnectionRole_Information {
		interface tab_general_Sections {
			_B0A70B0D_568C_10D3_1A3D_01C997A061C1: DevKit.Controls.Section;
			step1: DevKit.Controls.Section;
			step2: DevKit.Controls.Section;
		}
		interface tab_reciprocalroles_Sections {
			roleGrid: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_reciprocalroles extends DevKit.Controls.ITab {
			Section: tab_reciprocalroles_Sections;
		}
		interface Tabs {
			general: tab_general;
			reciprocalroles: tab_reciprocalroles;
		}
		interface Body {
			Tab: Tabs;
			/** Categories for connection roles. */
			Category: DevKit.Controls.OptionSet;
			/** Description of the connection role. */
			Description: DevKit.Controls.String;
			/** Name of the connection role. */
			Name: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			reciprocalRoleGrid: DevKit.Controls.Grid;
		}
	}
	class FormConnectionRole_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ConnectionRole_Information */
		Body: DevKit.FormConnectionRole_Information.Body;
		/** The Process of form ConnectionRole_Information */
		Process: DevKit.FormConnectionRole_Information.Process;
		/** The Grid of form ConnectionRole_Information */
		Grid: DevKit.FormConnectionRole_Information.Grid;
		/** The SidePanes of form ConnectionRole_Information */
		SidePanes: DevKit.SidePanes;
	}
	class ConnectionRoleApi {
		/**
		* DynamicsCrm.DevKit ConnectionRoleApi
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
		/** Categories for connection roles. */
		Category: DevKit.WebApi.OptionSetValue;
		/** State of the component. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the connection role. */
		ConnectionRoleId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the published or unpublished connection role record. */
		ConnectionRoleIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who created the relationship role. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the connection role was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the relationship role. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the connection role. */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the connection role. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the connection role was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the relationship role. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the connection role. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization that this connection role belongs to. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was last overwritten. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the connection role. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the connection role. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Version number of the connection role. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ConnectionRole {
		enum Category {
			/** 1 */
			Business,
			/** 2 */
			Family,
			/** 5 */
			Other,
			/** 4 */
			Sales,
			/** 1001 */
			Sales_Team,
			/** 1002 */
			Service,
			/** 3 */
			Social,
			/** 1000 */
			Stakeholder
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
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
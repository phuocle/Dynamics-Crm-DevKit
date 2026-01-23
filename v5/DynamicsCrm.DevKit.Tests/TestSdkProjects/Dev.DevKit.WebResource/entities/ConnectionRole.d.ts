//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormConnectionRole_Information {
		interface tab_general_Sections {
			/** Section1 */
			_B0A70B0D_568C_10D3_1A3D_01C997A061C1: DevKit.Controls.Section;
			/** Step 1: Describe the connection role */
			step1: DevKit.Controls.Section;
			/** Step 2: Select record types */
			step2: DevKit.Controls.Section;
		}
		interface tab_reciprocalroles_Sections {
			/** Step 3: List matching connection roles (optional) */
			roleGrid: DevKit.Controls.Section;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		/** Matching Connection Roles */
		interface tab_reciprocalroles extends DevKit.Controls.ITab {
			Section: tab_reciprocalroles_Sections;
		}
		interface Tabs {
			/** General */
			general: tab_general;
			/** Matching Connection Roles */
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
		interface Grid {
			/** Connection Roles */
			reciprocalRoleGrid: DevKit.Controls.Grid;
		}
	}
	export class FormConnectionRole_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form ConnectionRole_Information */
		Body: DevKit.FormConnectionRole_Information.Body;
		/** The Grid of form ConnectionRole_Information */
		Grid: DevKit.FormConnectionRole_Information.Grid;
	}
	export class ConnectionRoleApi {
		/**
		* DynamicsCrm.DevKit ConnectionRoleApi
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
		/** Categories for connection roles. */
		Category: OptionSet.ConnectionRole.Category | null;
		/** State of the component. */
		readonly ComponentState: OptionSet.ConnectionRole.ComponentState | null;
		/** Unique identifier of the connection role. */
		ConnectionRoleId: string | null;
		/** Unique identifier of the published or unpublished connection role record. */
		readonly ConnectionRoleIdUnique: string | null;
		/** Unique identifier of the user who created the relationship role. */
		readonly CreatedBy: string | null;
		/** Date and time when the connection role was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the relationship role. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of the connection role. */
		Description: string | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who last modified the connection role. */
		readonly ModifiedBy: string | null;
		/** Date and time when the connection role was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the relationship role. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the connection role. */
		Name: string | null;
		/** Unique identifier of the organization that this connection role belongs to. */
		readonly OrganizationId: string | null;
		/** Date and time when the record was last overwritten. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the connection role. */
		StateCode: OptionSet.ConnectionRole.StateCode | null;
		/** Reason for the status of the connection role. */
		StatusCode: OptionSet.ConnectionRole.StatusCode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Version number of the connection role. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Categories for connection roles. */
			readonly Category: string;
			/** State of the component. */
			readonly ComponentState: string;
			/** Unique identifier of the connection role. */
			readonly ConnectionRoleId: string;
			/** Unique identifier of the published or unpublished connection role record. */
			readonly ConnectionRoleIdUnique: string;
			/** Unique identifier of the user who created the relationship role. */
			readonly CreatedBy: string;
			/** Date and time when the connection role was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the relationship role. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the connection role. */
			readonly Description: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who last modified the connection role. */
			readonly ModifiedBy: string;
			/** Date and time when the connection role was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the relationship role. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the connection role. */
			readonly Name: string;
			/** Unique identifier of the organization that this connection role belongs to. */
			readonly OrganizationId: string;
			/** Date and time when the record was last overwritten. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the connection role. */
			readonly StateCode: string;
			/** Reason for the status of the connection role. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Version number of the connection role. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ConnectionRole {
		enum Category {
			/** Business = 1*/
			Business = 1,
			/** Family = 2*/
			Family = 2,
			/** Other = 5*/
			Other = 5,
			/** Sales = 4*/
			Sales = 4,
			/** Sales_Team = 1001*/
			Sales_Team = 1001,
			/** Service = 1002*/
			Service = 1002,
			/** Social = 3*/
			Social = 3,
			/** Stakeholder = 1000*/
			Stakeholder = 1000
		}
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
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
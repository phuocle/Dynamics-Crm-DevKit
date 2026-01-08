//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTeam_Templates_main_form {
		interface tab_general_Sections {
			/** General */
			Access_Rights: DevKit.Controls.Section;
			/** Description */
			Description: DevKit.Controls.Section;
			/** General */
			General: DevKit.Controls.Section;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** General */
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Default access rights mask for the access teams associated with entity instances. */
			DefaultAccessRightsMask: DevKit.Controls.Integer;
			/** Type additional information that describes the team. */
			Description: DevKit.Controls.String;
			/** Object type code of entity which is enabled for access teams */
			ObjectTypeCode: DevKit.Controls.Integer;
			/** Type the name of the team template. */
			TeamTemplateName: DevKit.Controls.String;
		}
	}
	export class FormTeam_Templates_main_form extends DevKit.IForm {
		/**
		* Team Templates main form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Team_Templates_main_form */
		Body: DevKit.FormTeam_Templates_main_form.Body;
	}
	namespace FormTeamTemplate {
		interface tab_general_Sections {
			/** General */
			Access_Rights: DevKit.Controls.Section;
			/** Description */
			Description: DevKit.Controls.Section;
			/** General */
			General: DevKit.Controls.Section;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** General */
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Default access rights mask for the access teams associated with entity instances. */
			DefaultAccessRightsMask: DevKit.Controls.Integer;
			/** Type additional information that describes the team. */
			Description: DevKit.Controls.String;
			/** Object type code of entity which is enabled for access teams */
			ObjectTypeCode: DevKit.Controls.Integer;
			/** Type the name of the team template. */
			TeamTemplateName: DevKit.Controls.String;
		}
	}
	export class FormTeamTemplate extends DevKit.IForm {
		/**
		* TeamTemplate [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form TeamTemplate */
		Body: DevKit.FormTeamTemplate.Body;
	}
	export class TeamTemplateApi {
		/**
		* DynamicsCrm.DevKit TeamTemplateApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.TeamTemplate.ComponentState | null;
		/** Unique identifier of the user who created the team template. */
		readonly CreatedBy: string | null;
		/** Date and time when the team template was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the team template. */
		readonly CreatedOnBehalfBy: string | null;
		/** Default access rights mask for the access teams associated with entity instances. */
		DefaultAccessRightsMask: number | null;
		/** Type additional information that describes the team. */
		Description: string | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Information about whether this team template is user-defined or system-defined. */
		readonly IsSystem: boolean | null;
		/** Unique identifier of the user who last modified the team template. */
		readonly ModifiedBy: string | null;
		/** Date and time when the team template was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the team template. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Object type code of entity which is enabled for access teams */
		ObjectTypeCode: number | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Unique identifier of the team template. */
		TeamTemplateId: string | null;
		/** Type the name of the team template. */
		TeamTemplateName: string | null;
		/** Version number for team template. */
		readonly versionnumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the team template. */
			readonly CreatedBy: string;
			/** Date and time when the team template was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the team template. */
			readonly CreatedOnBehalfBy: string;
			/** Default access rights mask for the access teams associated with entity instances. */
			readonly DefaultAccessRightsMask: string;
			/** Type additional information that describes the team. */
			readonly Description: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Information about whether this team template is user-defined or system-defined. */
			readonly IsSystem: string;
			/** Unique identifier of the user who last modified the team template. */
			readonly ModifiedBy: string;
			/** Date and time when the team template was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the team template. */
			readonly ModifiedOnBehalfBy: string;
			/** Object type code of entity which is enabled for access teams */
			readonly ObjectTypeCode: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique identifier of the team template. */
			readonly TeamTemplateId: string;
			/** Type the name of the team template. */
			readonly TeamTemplateName: string;
			/** Version number for team template. */
			readonly versionnumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace TeamTemplate {
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
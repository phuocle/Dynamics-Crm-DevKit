//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRoleEditorLayout_Information {
		interface Tabs {
		}
		interface Body {
			/** For ItemType Entity: the logicalname of the entity. */
			EntityLogicalName: DevKit.Controls.String;
			/** The type of role editor layout item. */
			ItemType: DevKit.Controls.OptionSet;
			/** The name of the role editor layout item. */
			Name: DevKit.Controls.String;
			/** For ItemType Privilege: Name of the privilege */
			PrivilegeName: DevKit.Controls.String;
			taborder: DevKit.Controls.ELSE3???;//taborder - 5546E6CD-394C-4BEE-94A8-4425E17EF6C6 -- FOR DEBUG 
		}
	}
	export class FormRoleEditorLayout_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form RoleEditorLayout_Information */
		Body: DevKit.FormRoleEditorLayout_Information.Body;
	}
	export class RoleEditorLayoutApi {
		/**
		* DynamicsCrm.DevKit RoleEditorLayoutApi
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
		readonly ComponentState: OptionSet.RoleEditorLayout.ComponentState | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Display name used for tabs, sections and miscellaneous privileges. */
		DisplayName: string | null;
		/** For ItemType Entity: the logicalname of the entity. */
		EntityLogicalName: string | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Whether this is a privacy related miscellaneous privilege. */
		IsPrivacyRelated: boolean | null;
		/** The type of role editor layout item. */
		ItemType: OptionSet.RoleEditorLayout.ItemType | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** The name of the role editor layout item. */
		Name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** For ItemType Privilege: Name of the privilege */
		PrivilegeName: string | null;
		/** Unique identifier for RoleEditorLayout associated with RoleEditorLayout. */
		RoleEditorLayoutHierarchyId: string | null;
		/** Unique identifier for role editor layout instances */
		RoleEditorLayoutId: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For ItemType Tab: the order of which this tab is for the UI. */
		TabOrder: number | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Display name used for tabs, sections and miscellaneous privileges. */
			readonly DisplayName: string;
			/** For ItemType Entity: the logicalname of the entity. */
			readonly EntityLogicalName: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Whether this is a privacy related miscellaneous privilege. */
			readonly IsPrivacyRelated: string;
			/** The type of role editor layout item. */
			readonly ItemType: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** The name of the role editor layout item. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** For ItemType Privilege: Name of the privilege */
			readonly PrivilegeName: string;
			/** Unique identifier for RoleEditorLayout associated with RoleEditorLayout. */
			readonly RoleEditorLayoutHierarchyId: string;
			/** Unique identifier for role editor layout instances */
			readonly RoleEditorLayoutId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For ItemType Tab: the order of which this tab is for the UI. */
			readonly TabOrder: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace RoleEditorLayout {
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
		enum ItemType {
			/** Entity = 4*/
			Entity = 4,
			/** Miscellaneous_Section = 3*/
			Miscellaneous_Section = 3,
			/** Privilege = 5*/
			Privilege = 5,
			/** Root = 1*/
			Root = 1,
			/** Tab = 2*/
			Tab = 2
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
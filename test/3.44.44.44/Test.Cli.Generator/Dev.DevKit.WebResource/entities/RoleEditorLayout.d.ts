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
		interface Navigation {
			roleeditorlayout_roleeditorlayout: DevKit.Controls.NavigationItem
		}
	}
	class FormRoleEditorLayout_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RoleEditorLayout_Information */
		Body: DevKit.FormRoleEditorLayout_Information.Body;
		/** The Navigation of form RoleEditorLayout_Information */
		Navigation: DevKit.FormRoleEditorLayout_Information.Navigation;
		/** The SidePanes of form RoleEditorLayout_Information */
		SidePanes: DevKit.SidePanes;
	}
	class RoleEditorLayoutApi {
		/**
		* DynamicsCrm.DevKit RoleEditorLayoutApi
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
		readonly ComponentState: OptionSet.RoleEditorLayout.ComponentState;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Display name used for tabs, sections and miscellaneous privileges. */
		DisplayName: string;
		/** For ItemType Entity: the logicalname of the entity. */
		EntityLogicalName: string;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Whether this is a privacy related miscellaneous privilege. */
		IsPrivacyRelated: boolean;
		/** The type of role editor layout item. */
		ItemType: OptionSet.RoleEditorLayout.ItemType;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** The name of the role editor layout item. */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** For ItemType Privilege: Name of the privilege */
		PrivilegeName: string;
		/** Unique identifier for RoleEditorLayout associated with RoleEditorLayout. */
		RoleEditorLayoutHierarchyId: string;
		/** Unique identifier for role editor layout instances */
		RoleEditorLayoutId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For ItemType Tab: the order of which this tab is for the UI. */
		TabOrder: number;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum ItemType {
			/** 4 */
			Entity,
			/** 3 */
			Miscellaneous_Section,
			/** 5 */
			Privilege,
			/** 1 */
			Root,
			/** 2 */
			Tab
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
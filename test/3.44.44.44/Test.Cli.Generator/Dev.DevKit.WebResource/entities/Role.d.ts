﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRole_Information {
		interface tab_general_Sections {
			role_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who created the role. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the role was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user who last modified the role. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the role was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Name of the role. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the parent role. */
			ParentRoleId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			lk_msdyn_roleid: DevKit.Controls.NavigationItem,
			msdyn_role_msdyn_personasecurityrolemapping: DevKit.Controls.NavigationItem,
			msdyn_role_msdyn_servicecopilotpluginrole_roleid: DevKit.Controls.NavigationItem,
			role_msdyn_appprofilerolemapping: DevKit.Controls.NavigationItem,
			role_parent_role: DevKit.Controls.NavigationItem,
			role_parent_root_role: DevKit.Controls.NavigationItem
		}
	}
	class FormRole_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Role_Information */
		Body: DevKit.FormRole_Information.Body;
		/** The Navigation of form Role_Information */
		Navigation: DevKit.FormRole_Information.Navigation;
		/** The SidePanes of form Role_Information */
		SidePanes: DevKit.SidePanes;
	}
	class RoleApi {
		/**
		* DynamicsCrm.DevKit RoleApi
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
		/** Personas/Licenses the security role applies to */
		AppliesTo: string;
		/** Unique identifier of the business unit with which the role is associated. */
		BusinessUnitId: string;
		/** Tells whether the role can be deleted. */
		CanBeDeleted: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.Role.ComponentState;
		/** Unique identifier of the user who created the role. */
		readonly CreatedBy: string;
		/** Date and time when the role was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the role. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the security role */
		Description: string;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Value indicating whether security role is auto-assigned based on user license */
		IsAutoAssigned: OptionSet.Role.IsAutoAssigned;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Role is inherited by users from team membership, if role associated with team. */
		IsInherited: OptionSet.Role.IsInherited;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who last modified the role. */
		readonly ModifiedBy: string;
		/** Date and time when the role was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the role. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the role. */
		Name: string;
		/** Unique identifier of the organization associated with the role. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the parent role. */
		readonly ParentRoleId: string;
		/** Unique identifier of the parent root role. */
		readonly ParentRootRoleId: string;
		/** Unique identifier of the role. */
		RoleId: string;
		/** For internal use only. */
		readonly RoleIdUnique: string;
		/** Unique identifier of the role template that is associated with the role. */
		readonly RoleTemplateId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Summary of Core Table Permissions of the Role */
		SummaryofCoreTablePermissions: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Version number of the role. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Personas/Licenses the security role applies to */
			readonly AppliesTo: string;
			/** Unique identifier of the business unit with which the role is associated. */
			readonly BusinessUnitId: string;
			/** Tells whether the role can be deleted. */
			readonly CanBeDeleted: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the role. */
			readonly CreatedBy: string;
			/** Date and time when the role was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the role. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the security role */
			readonly Description: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Value indicating whether security role is auto-assigned based on user license */
			readonly IsAutoAssigned: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Role is inherited by users from team membership, if role associated with team. */
			readonly IsInherited: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who last modified the role. */
			readonly ModifiedBy: string;
			/** Date and time when the role was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the role. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the role. */
			readonly Name: string;
			/** Unique identifier of the organization associated with the role. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the parent role. */
			readonly ParentRoleId: string;
			/** Unique identifier of the parent root role. */
			readonly ParentRootRoleId: string;
			/** Unique identifier of the role. */
			readonly RoleId: string;
			/** For internal use only. */
			readonly RoleIdUnique: string;
			/** Unique identifier of the role template that is associated with the role. */
			readonly RoleTemplateId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Summary of Core Table Permissions of the Role */
			readonly SummaryofCoreTablePermissions: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Version number of the role. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Role {
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
		enum IsAutoAssigned {
			/** 0 */
			No,
			/** 1 */
			Yes
		}
		enum IsInherited {
			/** 1 */
			Direct_User_Basic_access_level_and_Team_privileges,
			/** 0 */
			Team_privileges_only
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
﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormFieldSecurityProfile_Information {
		interface tab_general_Sections {
			desc: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the Profile */
			Description: DevKit.Controls.String;
			/** Name of the profile. */
			Name: DevKit.Controls.String;
		}
		interface Navigation {
			lk_fieldpermission_fieldsecurityprofileid: DevKit.Controls.NavigationItem
		}
	}
	class FormFieldSecurityProfile_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form FieldSecurityProfile_Information */
		Body: DevKit.FormFieldSecurityProfile_Information.Body;
		/** The Navigation of form FieldSecurityProfile_Information */
		Navigation: DevKit.FormFieldSecurityProfile_Information.Navigation;
		/** The SidePanes of form FieldSecurityProfile_Information */
		SidePanes: DevKit.SidePanes;
	}
	class FieldSecurityProfileApi {
		/**
		* DynamicsCrm.DevKit FieldSecurityProfileApi
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
		readonly ComponentState: OptionSet.FieldSecurityProfile.ComponentState;
		/** Unique identifier of the user who created the profile. */
		readonly CreatedBy: string;
		/** Date and time when the profile was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the role. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the Profile */
		Description: string;
		/** Unique identifier of the profile. */
		FieldSecurityProfileId: string;
		/** For internal use only. */
		readonly FieldSecurityProfileIdUnique: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who last modified the profile. */
		readonly ModifiedBy: string;
		/** Date and time when the profile was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the profile. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the profile. */
		Name: string;
		/** Unique identifier of the associated organization. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the profile. */
			readonly CreatedBy: string;
			/** Date and time when the profile was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the role. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the Profile */
			readonly Description: string;
			/** Unique identifier of the profile. */
			readonly FieldSecurityProfileId: string;
			/** For internal use only. */
			readonly FieldSecurityProfileIdUnique: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who last modified the profile. */
			readonly ModifiedBy: string;
			/** Date and time when the profile was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the profile. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the profile. */
			readonly Name: string;
			/** Unique identifier of the associated organization. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace FieldSecurityProfile {
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
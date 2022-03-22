//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormConstraintBasedGroup_Information {
		interface tab_Resources_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_Resources extends DevKit.Controls.ITab {
			Section: tab_Resources_Sections;
		}
		interface Tabs {
			Resources: tab_Resources;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the business unit that the record owner belongs to. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Type additional information to describe the resource group, such as the intended use or associated resource types. */
			Description: DevKit.Controls.String;
			/** Type a title or name that describes the resource group. */
			Name: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			Resources: DevKit.Controls.Grid;
		}
	}
	class FormConstraintBasedGroup_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ConstraintBasedGroup_Information */
		Body: DevKit.FormConstraintBasedGroup_Information.Body;
		/** The Process of form ConstraintBasedGroup_Information */
		Process: DevKit.FormConstraintBasedGroup_Information.Process;
		/** The Grid of form ConstraintBasedGroup_Information */
		Grid: DevKit.FormConstraintBasedGroup_Information.Grid;
		/** The SidePanes of form ConstraintBasedGroup_Information */
		SidePanes: DevKit.SidePanes;
	}
	class ConstraintBasedGroupApi {
		/**
		* DynamicsCrm.DevKit ConstraintBasedGroupApi
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
		/** Shows the business unit that the record owner belongs to. */
		BusinessUnitId: string;
		/** Unique identifier of the resource group. */
		ConstraintBasedGroupId: string;
		/** Shows the constraints defined for the users, equipment, teams, and other resource groups included as resources for the group, stored in XML format. */
		Constraints: string;
		/** Unique identifier of the user who created the resource group. */
		readonly CreatedBy: string;
		/** Date and time when the resource group was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the constraintbasedgroup. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the resource group, such as the intended use or associated resource types. */
		Description: string;
		/** Shows whether the resource group is static, dynamic or hidden. Hidden groups are for system use only and are not viewable in Microsoft Dynamics 365. */
		GroupTypeCode: OptionSet.ConstraintBasedGroup.GroupTypeCode;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who last modified the resource group. */
		readonly ModifiedBy: string;
		/** Date and time when the resource group was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the constraintbasedgroup. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a title or name that describes the resource group. */
		Name: string;
		/** Unique identifier of the organization associated with the resource group. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace ConstraintBasedGroup {
		enum GroupTypeCode {
			/** 1 */
			Dynamic,
			/** 2 */
			Hidden,
			/** 0 */
			Static
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
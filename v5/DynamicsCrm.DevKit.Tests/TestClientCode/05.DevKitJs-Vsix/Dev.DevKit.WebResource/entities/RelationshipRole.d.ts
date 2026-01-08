//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRelationshipRole_Information {
		interface tab_general_Sections {
			/** Information */
			Information: DevKit.Controls.Section;
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
			/** Name of the relationship role. */
			Name: DevKit.Controls.String;
		}
	}
	export class FormRelationshipRole_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form RelationshipRole_Information */
		Body: DevKit.FormRelationshipRole_Information.Body;
	}
	export class RelationshipRoleApi {
		/**
		* DynamicsCrm.DevKit RelationshipRoleApi
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
		/** Unique Identifier of the user who created the relationship role. */
		readonly CreatedBy: string | null;
		/** Date and time when the relationship role was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the relationshiprole. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of the relationship role. */
		Description: string | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who last modified the relationship role. */
		readonly ModifiedBy: string | null;
		/** Date and time when the relationship role was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the relationshiprole. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the relationship role. */
		Name: string | null;
		/** Unique Identifier of the organization that this relationship role belongs to. */
		readonly OrganizationId: string | null;
		/** Unique identifier of the relationship role. */
		RelationshipRoleId: string | null;
		/** Status of the relationship role. */
		StateCode: OptionSet.RelationshipRole.StateCode | null;
		/** Reason for the status of the relationship role. */
		StatusCode: OptionSet.RelationshipRole.StatusCode | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique Identifier of the user who created the relationship role. */
			readonly CreatedBy: string;
			/** Date and time when the relationship role was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the relationshiprole. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the relationship role. */
			readonly Description: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who last modified the relationship role. */
			readonly ModifiedBy: string;
			/** Date and time when the relationship role was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the relationshiprole. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the relationship role. */
			readonly Name: string;
			/** Unique Identifier of the organization that this relationship role belongs to. */
			readonly OrganizationId: string;
			/** Unique identifier of the relationship role. */
			readonly RelationshipRoleId: string;
			/** Status of the relationship role. */
			readonly StateCode: string;
			/** Reason for the status of the relationship role. */
			readonly StatusCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RelationshipRole {
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
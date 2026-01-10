//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formflowcredentialapplication_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	export class Formflowcredentialapplication_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form flowcredentialapplication_Information */
		Body: DevKit.Formflowcredentialapplication_Information.Body;
	}
	export class flowcredentialapplicationApi {
		/**
		* DynamicsCrm.DevKit flowcredentialapplicationApi
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
		/** Unique ID of the application as registered in the CyberArk CCP */
		applicationid: string | null;
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.flowcredentialapplication.ComponentState | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of the Flow Credential Application. */
		description: string | null;
		/** Unique identifier for entity instances */
		flowcredentialapplicationId: string | null;
		/** The flow machine group. */
		flowmachinegroupid: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the custom entity. */
		name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
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
		/** Certificate that will be used as an SSL client certificate to contact the CCP. This field is encrypted with the group public key. */
		primarycertificatefile: string | null;
		/** Certificate that will be used as an SSL client certificate to contact the CCP. This field is encrypted with the secondary group public key. */
		secondarycertificatefile: string | null;
		/** The flowcredentialapplication sharing type */
		sharingtype: OptionSet.flowcredentialapplication.sharingtype | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the flowcredentialapplication */
		statecode: OptionSet.flowcredentialapplication.statecode | null;
		/** Reason for the status of the flowcredentialapplication */
		statuscode: OptionSet.flowcredentialapplication.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Thumbprint corresponding to the CyberArk certificate used to identify the cert as it will be encrypt with the flow machine group keys. */
		thumbprint: string | null;
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
			/** Unique ID of the application as registered in the CyberArk CCP */
			readonly applicationid: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the Flow Credential Application. */
			readonly description: string;
			/** Unique identifier for entity instances */
			readonly flowcredentialapplicationId: string;
			/** The flow machine group. */
			readonly flowmachinegroupid: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Certificate that will be used as an SSL client certificate to contact the CCP. This field is encrypted with the group public key. */
			readonly primarycertificatefile: string;
			/** Certificate that will be used as an SSL client certificate to contact the CCP. This field is encrypted with the secondary group public key. */
			readonly secondarycertificatefile: string;
			/** The flowcredentialapplication sharing type */
			readonly sharingtype: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the flowcredentialapplication */
			readonly statecode: string;
			/** Reason for the status of the flowcredentialapplication */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Thumbprint corresponding to the CyberArk certificate used to identify the cert as it will be encrypt with the flow machine group keys. */
			readonly thumbprint: string;
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
	namespace flowcredentialapplication {
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
		enum sharingtype {
			/** Cascade = 0*/
			Cascade = 0,
			/** UnCascade = 1*/
			UnCascade = 1
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
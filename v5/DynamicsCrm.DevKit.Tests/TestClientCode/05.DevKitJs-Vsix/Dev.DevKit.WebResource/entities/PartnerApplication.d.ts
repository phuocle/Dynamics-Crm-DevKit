//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class PartnerApplicationApi {
		/**
		* DynamicsCrm.DevKit PartnerApplicationApi
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
		/** Indicates the application role. */
		ApplicationRole: OptionSet.PartnerApplication.ApplicationRole | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Contains the metadata URL. */
		MetadataUrl: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of Partner Application. */
		Name: string | null;
		/** Unique identifier of the organization associated with the record. */
		readonly OrganizationId: string | null;
		/** Unique identifier of the partner application. */
		PartnerApplicationId: string | null;
		/** Principal ID of the partner application. */
		PrincipalId: string | null;
		/** Indicates the realm. */
		Realm: string | null;
		/** Shows the status of the partner application. */
		readonly StateCode: OptionSet.PartnerApplication.StateCode | null;
		/** Select the partner application's status. */
		StatusCode: OptionSet.PartnerApplication.StatusCode | null;
		/** Shows the tenant ID. */
		TenantId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Select whether the partner application uses an authorization server. */
		UseAuthorizationServer: boolean | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the partner application. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Indicates the application role. */
			readonly ApplicationRole: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Contains the metadata URL. */
			readonly MetadataUrl: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of Partner Application. */
			readonly Name: string;
			/** Unique identifier of the organization associated with the record. */
			readonly OrganizationId: string;
			/** Unique identifier of the partner application. */
			readonly PartnerApplicationId: string;
			/** Principal ID of the partner application. */
			readonly PrincipalId: string;
			/** Indicates the realm. */
			readonly Realm: string;
			/** Shows the status of the partner application. */
			readonly StateCode: string;
			/** Select the partner application's status. */
			readonly StatusCode: string;
			/** Shows the tenant ID. */
			readonly TenantId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Select whether the partner application uses an authorization server. */
			readonly UseAuthorizationServer: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the partner application. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PartnerApplication {
		enum ApplicationRole {
			/** Client = 0*/
			Client = 0,
			/** Server = 1*/
			Server = 1
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Disabled = 2*/
			Disabled = 2,
			/** Enabled = 1*/
			Enabled = 1
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
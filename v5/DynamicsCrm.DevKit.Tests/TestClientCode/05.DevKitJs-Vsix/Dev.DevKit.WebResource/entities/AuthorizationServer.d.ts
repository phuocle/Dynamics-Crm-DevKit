//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class AuthorizationServerApi {
		/**
		* DynamicsCrm.DevKit AuthorizationServerApi
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
		/** Unique identifier for entity instances */
		AuthorizationServerId: string | null;
		/**  The type of the Authorization Server  */
		AuthorizationServerType: OptionSet.AuthorizationServer.AuthorizationServerType | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Contains the metadata for the authorization server. */
		Metadata: string | null;
		/** Shows the date and time when the metadata was refreshed from the authorization server. */
		readonly MetadataRefreshedOn_UtcDateAndTime: Date | null;
		/** Contains the URL for the metadata. */
		MetadataUrl: string | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type the name of the authorization server. */
		Name: string | null;
		/** Unique identifier for the organization */
		readonly OrganizationId: string | null;
		/** Contains the issuer ID of the authorization server. */
		PrincipalId: string | null;
		/** Indicates the realm. */
		Realm: string | null;
		/** Shows whether the authorization server is active or inactive. */
		readonly StateCode: OptionSet.AuthorizationServer.StateCode | null;
		/** Select the authorization server's status. */
		StatusCode: OptionSet.AuthorizationServer.StatusCode | null;
		/** Shows the tenant ID. */
		TenantId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the authorization server. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier for entity instances */
			readonly AuthorizationServerId: string;
			/**  The type of the Authorization Server  */
			readonly AuthorizationServerType: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Contains the metadata for the authorization server. */
			readonly Metadata: string;
			/** Shows the date and time when the metadata was refreshed from the authorization server. */
			readonly MetadataRefreshedOn_UtcDateAndTime: string;
			/** Contains the URL for the metadata. */
			readonly MetadataUrl: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type the name of the authorization server. */
			readonly Name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Contains the issuer ID of the authorization server. */
			readonly PrincipalId: string;
			/** Indicates the realm. */
			readonly Realm: string;
			/** Shows whether the authorization server is active or inactive. */
			readonly StateCode: string;
			/** Select the authorization server's status. */
			readonly StatusCode: string;
			/** Shows the tenant ID. */
			readonly TenantId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the authorization server. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace AuthorizationServer {
		enum AuthorizationServerType {
			/** Access_Control_Service = 0*/
			Access_Control_Service = 0,
			/** Evolved_STS = 1*/
			Evolved_STS = 1
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
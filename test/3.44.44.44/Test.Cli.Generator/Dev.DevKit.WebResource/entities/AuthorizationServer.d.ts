//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AuthorizationServerApi {
		/**
		* DynamicsCrm.DevKit AuthorizationServerApi
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
		/** Unique identifier for entity instances */
		AuthorizationServerId: string;
		/**  The type of the Authorization Server  */
		AuthorizationServerType: OptionSet.AuthorizationServer.AuthorizationServerType;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Contains the metadata for the authorization server. */
		Metadata: string;
		/** Shows the date and time when the metadata was refreshed from the authorization server. */
		readonly MetadataRefreshedOn_UtcDateAndTime: Date;
		/** Contains the URL for the metadata. */
		MetadataUrl: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Type the name of the authorization server. */
		Name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Contains the issuer ID of the authorization server. */
		PrincipalId: string;
		/** Indicates the realm. */
		Realm: string;
		/** Shows whether the authorization server is active or inactive. */
		readonly StateCode: OptionSet.AuthorizationServer.StateCode;
		/** Select the authorization server's status. */
		StatusCode: OptionSet.AuthorizationServer.StatusCode;
		/** Shows the tenant ID. */
		TenantId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the authorization server. */
		readonly VersionNumber: number;
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
			/** 0 */
			Access_Control_Service,
			/** 1 */
			Evolved_STS
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 2 */
			Disabled,
			/** 1 */
			Enabled
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
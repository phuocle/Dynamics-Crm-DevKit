//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ServiceEndpointApi {
		/**
		* DynamicsCrm.DevKit ServiceEndpointApi
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
		/** Specifies mode of authentication with SB */
		AuthType: OptionSet.ServiceEndpoint.AuthType;
		/** Authentication Value */
		AuthValue: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ServiceEndpoint.ComponentState;
		/** Connection mode to contact the service endpoint. */
		ConnectionMode: OptionSet.ServiceEndpoint.ConnectionMode;
		/** Type of the endpoint contract. */
		Contract: OptionSet.ServiceEndpoint.Contract;
		/** Unique identifier of the user who created the service endpoint. */
		readonly CreatedBy: string;
		/** Date and time when the service endpoint was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the service endpoint. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the service endpoint. */
		Description: string;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		readonly IsAuthValueSet: boolean;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		readonly IsSASKeySet: boolean;
		readonly IsSASTokenSet: boolean;
		/** Unique identifier for keyvaultreference associated with serviceendpoint. */
		KeyVaultReferenceId: string;
		/** Specifies the character encoding for message content */
		MessageCharset: OptionSet.ServiceEndpoint.MessageCharset;
		/** Content type of the message */
		MessageFormat: OptionSet.ServiceEndpoint.MessageFormat;
		/** Unique identifier of the user who last modified the service endpoint. */
		readonly ModifiedBy: string;
		/** Date and time when the service endpoint was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the service endpoint. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of Service end point. */
		Name: string;
		/** Full service endpoint address. */
		NamespaceAddress: string;
		/** Format of Service Bus Namespace */
		NamespaceFormat: OptionSet.ServiceEndpoint.NamespaceFormat;
		/** Unique identifier of the organization with which the service endpoint is associated. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Path to the service endpoint. */
		Path: string;
		/** For internal use only. Holds miscellaneous properties related to runtime integration. */
		RuntimeIntegrationProperties: string;
		/** Shared Access Key */
		SASKey: string;
		/** Shared Access Key Name */
		SASKeyName: string;
		/** Shared Access Token */
		SASToken: string;
		/** Specifies schema type for event grid events */
		SchemaType: OptionSet.ServiceEndpoint.SchemaType;
		/** Unique identifier of the service endpoint. */
		ServiceEndpointId: string;
		/** Unique identifier of the service endpoint. */
		readonly ServiceEndpointIdUnique: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Namespace of the App Fabric solution. */
		SolutionNamespace: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Full service endpoint Url. */
		Url: string;
		/** Use Auth Information in KeyVault */
		UseKeyVaultConfiguration: boolean;
		/** Additional user claim value type. */
		UserClaim: OptionSet.ServiceEndpoint.UserClaim;
		readonly FormattedValue: {
			/** Specifies mode of authentication with SB */
			readonly AuthType: string;
			/** Authentication Value */
			readonly AuthValue: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Connection mode to contact the service endpoint. */
			readonly ConnectionMode: string;
			/** Type of the endpoint contract. */
			readonly Contract: string;
			/** Unique identifier of the user who created the service endpoint. */
			readonly CreatedBy: string;
			/** Date and time when the service endpoint was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the service endpoint. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the service endpoint. */
			readonly Description: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			readonly IsAuthValueSet: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			readonly IsSASKeySet: string;
			readonly IsSASTokenSet: string;
			/** Unique identifier for keyvaultreference associated with serviceendpoint. */
			readonly KeyVaultReferenceId: string;
			/** Specifies the character encoding for message content */
			readonly MessageCharset: string;
			/** Content type of the message */
			readonly MessageFormat: string;
			/** Unique identifier of the user who last modified the service endpoint. */
			readonly ModifiedBy: string;
			/** Date and time when the service endpoint was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the service endpoint. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of Service end point. */
			readonly Name: string;
			/** Full service endpoint address. */
			readonly NamespaceAddress: string;
			/** Format of Service Bus Namespace */
			readonly NamespaceFormat: string;
			/** Unique identifier of the organization with which the service endpoint is associated. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Path to the service endpoint. */
			readonly Path: string;
			/** For internal use only. Holds miscellaneous properties related to runtime integration. */
			readonly RuntimeIntegrationProperties: string;
			/** Shared Access Key */
			readonly SASKey: string;
			/** Shared Access Key Name */
			readonly SASKeyName: string;
			/** Shared Access Token */
			readonly SASToken: string;
			/** Specifies schema type for event grid events */
			readonly SchemaType: string;
			/** Unique identifier of the service endpoint. */
			readonly ServiceEndpointId: string;
			/** Unique identifier of the service endpoint. */
			readonly ServiceEndpointIdUnique: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Namespace of the App Fabric solution. */
			readonly SolutionNamespace: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Full service endpoint Url. */
			readonly Url: string;
			/** Use Auth Information in KeyVault */
			readonly UseKeyVaultConfiguration: string;
			/** Additional user claim value type. */
			readonly UserClaim: string;
		}
	}
}
declare namespace OptionSet {
	namespace ServiceEndpoint {
		enum AuthType {
			/** 8 */
			Access_Key,
			/** 1 */
			ACS,
			/** 7 */
			Connection_String,
			/** 5 */
			Http_Header,
			/** 6 */
			Http_Query_String,
			/** 2 */
			SAS_Key,
			/** 3 */
			SAS_Token,
			/** 4 */
			Webhook_Key
		}
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
		enum ConnectionMode {
			/** 2 */
			Federated,
			/** 1 */
			Normal
		}
		enum Contract {
			/** 9 */
			Event_Grid,
			/** 7 */
			Event_Hub,
			/** 1 */
			OneWay,
			/** 2 */
			Queue,
			/** 6 */
			Queue_Persistent,
			/** 3 */
			Rest,
			/** 5 */
			Topic,
			/** 4 */
			TwoWay,
			/** 8 */
			Webhook
		}
		enum MessageCharset {
			/** 0 */
			Default,
			/** 1 */
			UTF8
		}
		enum MessageFormat {
			/** 1 */
			Binary_XML,
			/** 2 */
			Json,
			/** 3 */
			Text_XML
		}
		enum NamespaceFormat {
			/** 2 */
			Namespace_Address,
			/** 1 */
			Namespace_Name
		}
		enum SchemaType {
			/** 2 */
			Cloud_Events,
			/** 1 */
			Event_Grid
		}
		enum UserClaim {
			/** 1 */
			None,
			/** 2 */
			UserId,
			/** 3 */
			UserInfo
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
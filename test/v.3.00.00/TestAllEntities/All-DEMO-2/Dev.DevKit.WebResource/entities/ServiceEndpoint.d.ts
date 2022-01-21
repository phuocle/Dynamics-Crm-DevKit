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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Specifies mode of authentication with SB */
		AuthType: DevKit.WebApi.OptionSetValue;
		/** Authentication Value */
		AuthValue: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Connection mode to contact the service endpoint. */
		ConnectionMode: DevKit.WebApi.OptionSetValue;
		/** Type of the endpoint contract. */
		Contract: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the service endpoint. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the service endpoint was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the service endpoint. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the service endpoint. */
		Description: DevKit.WebApi.StringValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		IsAuthValueSet: DevKit.WebApi.BooleanValueReadonly;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		IsSASKeySet: DevKit.WebApi.BooleanValueReadonly;
		IsSASTokenSet: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier for keyvaultreference associated with serviceendpoint. */
		KeyVaultReferenceId: DevKit.WebApi.LookupValue;
		/** Specifies the character encoding for message content */
		MessageCharset: DevKit.WebApi.OptionSetValue;
		/** Content type of the message */
		MessageFormat: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who last modified the service endpoint. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the service endpoint was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the service endpoint. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of Service end point. */
		Name: DevKit.WebApi.StringValue;
		/** Full service endpoint address. */
		NamespaceAddress: DevKit.WebApi.StringValue;
		/** Format of Service Bus Namespace */
		NamespaceFormat: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the organization with which the service endpoint is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Path to the service endpoint. */
		Path: DevKit.WebApi.StringValue;
		/** For internal use only. Holds miscellaneous properties related to runtime integration. */
		RuntimeIntegrationProperties: DevKit.WebApi.StringValue;
		/** Shared Access Key */
		SASKey: DevKit.WebApi.StringValue;
		/** Shared Access Key Name */
		SASKeyName: DevKit.WebApi.StringValue;
		/** Shared Access Token */
		SASToken: DevKit.WebApi.StringValue;
		/** Specifies schema type for event grid events */
		SchemaType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the service endpoint. */
		ServiceEndpointId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the service endpoint. */
		ServiceEndpointIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Namespace of the App Fabric solution. */
		SolutionNamespace: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Full service endpoint Url. */
		Url: DevKit.WebApi.StringValue;
		/** Use Auth Information in KeyVault */
		UseKeyVaultConfiguration: DevKit.WebApi.BooleanValue;
		/** Additional user claim value type. */
		UserClaim: DevKit.WebApi.OptionSetValue;
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00'}
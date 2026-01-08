//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class ServiceEndpointApi {
		/**
		* DynamicsCrm.DevKit ServiceEndpointApi
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
		/** Specifies mode of authentication with SB */
		AuthType: OptionSet.ServiceEndpoint.AuthType | null;
		/** Authentication Value */
		AuthValue: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ServiceEndpoint.ComponentState | null;
		/** Connection mode to contact the service endpoint. */
		ConnectionMode: OptionSet.ServiceEndpoint.ConnectionMode | null;
		/** Type of the endpoint contract. */
		Contract: OptionSet.ServiceEndpoint.Contract | null;
		/** Unique identifier of the user who created the service endpoint. */
		readonly CreatedBy: string | null;
		/** Date and time when the service endpoint was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the service endpoint. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of the service endpoint. */
		Description: string | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		readonly IsAuthValueSet: boolean | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean | null;
		readonly IsSASKeySet: boolean | null;
		readonly IsSASTokenSet: boolean | null;
		/** Unique identifier for keyvaultreference associated with serviceendpoint. */
		KeyVaultReferenceId: string | null;
		/** Unique identifier for managed identity associated with serviceendpoint. */
		ManagedIdentityId: string | null;
		/** Specifies the character encoding for message content */
		MessageCharset: OptionSet.ServiceEndpoint.MessageCharset | null;
		/** Content type of the message */
		MessageFormat: OptionSet.ServiceEndpoint.MessageFormat | null;
		/** Unique identifier of the user who last modified the service endpoint. */
		readonly ModifiedBy: string | null;
		/** Date and time when the service endpoint was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the service endpoint. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of Service end point. */
		Name: string | null;
		/** Full service endpoint address. */
		NamespaceAddress: string | null;
		/** Format of Service Bus Namespace */
		NamespaceFormat: OptionSet.ServiceEndpoint.NamespaceFormat | null;
		/** Unique identifier of the organization with which the service endpoint is associated. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Path to the service endpoint. */
		Path: string | null;
		/** For internal use only. Holds miscellaneous properties related to runtime integration. */
		RuntimeIntegrationProperties: string | null;
		/** Shared Access Key */
		SASKey: string | null;
		/** Shared Access Key Name */
		SASKeyName: string | null;
		/** Shared Access Token */
		SASToken: string | null;
		/** Specifies schema type for event grid events */
		SchemaType: OptionSet.ServiceEndpoint.SchemaType | null;
		/** Unique identifier of the service endpoint. */
		ServiceEndpointId: string | null;
		/** Unique identifier of the service endpoint. */
		readonly ServiceEndpointIdUnique: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Namespace of the App Fabric solution. */
		SolutionNamespace: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Full service endpoint Url. */
		Url: string | null;
		/** Use Auth Information in KeyVault */
		UseKeyVaultConfiguration: boolean | null;
		/** Additional user claim value type. */
		UserClaim: OptionSet.ServiceEndpoint.UserClaim | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Unique identifier for managed identity associated with serviceendpoint. */
			readonly ManagedIdentityId: string;
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
			/** Access_Key = 8*/
			Access_Key = 8,
			/** ACS = 1*/
			ACS = 1,
			/** Connection_String = 7*/
			Connection_String = 7,
			/** Http_Header = 5*/
			Http_Header = 5,
			/** Http_Query_String = 6*/
			Http_Query_String = 6,
			/** Managed_Identity = 9*/
			Managed_Identity = 9,
			/** Not_Specified = 0*/
			Not_Specified = 0,
			/** SAS_Key = 2*/
			SAS_Key = 2,
			/** SAS_Token = 3*/
			SAS_Token = 3,
			/** Webhook_Key = 4*/
			Webhook_Key = 4
		}
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
		enum ConnectionMode {
			/** Federated = 2*/
			Federated = 2,
			/** Normal = 1*/
			Normal = 1
		}
		enum Contract {
			/** Container_Storage = 11*/
			Container_Storage = 11,
			/** Event_Grid = 9*/
			Event_Grid = 9,
			/** Event_Hub = 7*/
			Event_Hub = 7,
			/** Managed_Data_Lake = 10*/
			Managed_Data_Lake = 10,
			/** OneWay = 1*/
			OneWay = 1,
			/** Queue = 2*/
			Queue = 2,
			/** Queue_Persistent = 6*/
			Queue_Persistent = 6,
			/** Rest = 3*/
			Rest = 3,
			/** Topic = 5*/
			Topic = 5,
			/** TwoWay = 4*/
			TwoWay = 4,
			/** Webhook = 8*/
			Webhook = 8
		}
		enum MessageCharset {
			/** Default = 0*/
			Default = 0,
			/** UTF8 = 1*/
			UTF8 = 1,
			/** Windows1252 = 2*/
			Windows1252 = 2
		}
		enum MessageFormat {
			/** Binary_XML = 1*/
			Binary_XML = 1,
			/** Json = 2*/
			Json = 2,
			/** Text_XML = 3*/
			Text_XML = 3
		}
		enum NamespaceFormat {
			/** Namespace_Address = 2*/
			Namespace_Address = 2,
			/** Namespace_Name = 1*/
			Namespace_Name = 1
		}
		enum SchemaType {
			/** Cloud_Events = 2*/
			Cloud_Events = 2,
			/** Event_Grid = 1*/
			Event_Grid = 1
		}
		enum UserClaim {
			/** None = 1*/
			None = 1,
			/** UserId = 2*/
			UserId = 2,
			/** UserInfo = 3*/
			UserInfo = 3
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
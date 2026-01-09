//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAzureServiceConnection_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows whether the Azure service connection is active or inactive. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_general_Sections {
			/** CONNECTION INFORMATION */
			connectioninfo: DevKit.Controls.Section;
			/** CONNECTION TEST INFORMATION */
			connectiontestinfo: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type the Azure account key. */
			AccountKey: DevKit.Controls.String;
			/** Unique identifier of the user who created the Azure service connection. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Enter a description of the Azure service connection. */
			Description: DevKit.Controls.String;
			/** Shows the status of the last connection to the Azure service. */
			LastConnectionStatusCode: DevKit.Controls.OptionSet;
			/** shows the time of the last connection to the Azure service. */
			LastConnectionTime: DevKit.Controls.DateTime;
			/** Unique identifier of the user who modified the Azure service connection. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the Azure service connection was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Type a logical name for the connection. */
			Name: DevKit.Controls.String;
			/** Type the service URL for the Azure service. */
			ServiceUri: DevKit.Controls.String;
		}
	}
	export class FormAzureServiceConnection_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form AzureServiceConnection_Information */
		Body: DevKit.FormAzureServiceConnection_Information.Body;
		/** The Header section of form AzureServiceConnection_Information */
		Header: DevKit.FormAzureServiceConnection_Information.Header;
	}
	export class AzureServiceConnectionApi {
		/**
		* DynamicsCrm.DevKit AzureServiceConnectionApi
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
		/** Type the Azure account key. */
		AccountKey: string | null;
		/** Unique identifier of the Azure service connection. */
		AzureServiceConnectionId: string | null;
		/** Azure service connection type */
		ConnectionType: OptionSet.AzureServiceConnection.ConnectionType | null;
		/** Unique identifier of the user who created the Azure service connection. */
		readonly CreatedBy: string | null;
		/** Date and time when the Azure service connection was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the Azure service connection. */
		readonly CreatedOnBehalfBy: string | null;
		/** Enter a description of the Azure service connection. */
		Description: string | null;
		/** Shows the status of the last connection to the Azure service. */
		LastConnectionStatusCode: OptionSet.AzureServiceConnection.LastConnectionStatusCode | null;
		/** shows the time of the last connection to the Azure service. */
		LastConnectionTime_UtcDateAndTime: Date | null;
		/** Unique identifier of the user who modified the Azure service connection. */
		readonly ModifiedBy: string | null;
		/** Date and time when the Azure service connection was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the Azure service connection. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type a logical name for the connection. */
		Name: string | null;
		/** Unique identifier of the organization associated with the Azure service connection. */
		readonly OrganizationId: string | null;
		/** Type the service URL for the Azure service. */
		ServiceUri: string | null;
		/** Shows whether the Azure service connection is active or inactive. */
		StateCode: OptionSet.AzureServiceConnection.StateCode | null;
		/** Select the Azure service connection's status. */
		StatusCode: OptionSet.AzureServiceConnection.StatusCode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Type the Azure account key. */
			readonly AccountKey: string;
			/** Unique identifier of the Azure service connection. */
			readonly AzureServiceConnectionId: string;
			/** Azure service connection type */
			readonly ConnectionType: string;
			/** Unique identifier of the user who created the Azure service connection. */
			readonly CreatedBy: string;
			/** Date and time when the Azure service connection was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the Azure service connection. */
			readonly CreatedOnBehalfBy: string;
			/** Enter a description of the Azure service connection. */
			readonly Description: string;
			/** Shows the status of the last connection to the Azure service. */
			readonly LastConnectionStatusCode: string;
			/** shows the time of the last connection to the Azure service. */
			readonly LastConnectionTime_UtcDateAndTime: string;
			/** Unique identifier of the user who modified the Azure service connection. */
			readonly ModifiedBy: string;
			/** Date and time when the Azure service connection was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the Azure service connection. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a logical name for the connection. */
			readonly Name: string;
			/** Unique identifier of the organization associated with the Azure service connection. */
			readonly OrganizationId: string;
			/** Type the service URL for the Azure service. */
			readonly ServiceUri: string;
			/** Shows whether the Azure service connection is active or inactive. */
			readonly StateCode: string;
			/** Select the Azure service connection's status. */
			readonly StatusCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace AzureServiceConnection {
		enum ConnectionType {
			/** Recommendation = 1*/
			Recommendation = 1,
			/** Text_Analytics = 2*/
			Text_Analytics = 2
		}
		enum LastConnectionStatusCode {
			/** Failure = 2*/
			Failure = 2,
			/** Success = 1*/
			Success = 1
		}
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
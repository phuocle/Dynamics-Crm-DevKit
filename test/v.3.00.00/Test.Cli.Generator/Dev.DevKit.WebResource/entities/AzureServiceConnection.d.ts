//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAzureServiceConnection_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows whether the Azure service connection is active or inactive. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_general_Sections {
			connectioninfo: DevKit.Controls.Section;
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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormAzureServiceConnection_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form AzureServiceConnection_Information */
		Body: DevKit.FormAzureServiceConnection_Information.Body;
		/** The Header section of form AzureServiceConnection_Information */
		Header: DevKit.FormAzureServiceConnection_Information.Header;
		/** The Process of form AzureServiceConnection_Information */
		Process: DevKit.FormAzureServiceConnection_Information.Process;
		/** The SidePanes of form AzureServiceConnection_Information */
		SidePanes: DevKit.SidePanes;
	}
	class AzureServiceConnectionApi {
		/**
		* DynamicsCrm.DevKit AzureServiceConnectionApi
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
		/** Type the Azure account key. */
		AccountKey: string;
		/** Unique identifier of the Azure service connection. */
		AzureServiceConnectionId: string;
		/** Azure service connection type */
		ConnectionType: OptionSet.AzureServiceConnection.ConnectionType;
		/** Unique identifier of the user who created the Azure service connection. */
		readonly CreatedBy: string;
		/** Date and time when the Azure service connection was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the Azure service connection. */
		readonly CreatedOnBehalfBy: string;
		/** Enter a description of the Azure service connection. */
		Description: string;
		/** Shows the status of the last connection to the Azure service. */
		LastConnectionStatusCode: OptionSet.AzureServiceConnection.LastConnectionStatusCode;
		/** shows the time of the last connection to the Azure service. */
		LastConnectionTime_UtcDateAndTime: Date;
		/** Unique identifier of the user who modified the Azure service connection. */
		readonly ModifiedBy: string;
		/** Date and time when the Azure service connection was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the Azure service connection. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a logical name for the connection. */
		Name: string;
		/** Unique identifier of the organization associated with the Azure service connection. */
		readonly OrganizationId: string;
		/** Type the service URL for the Azure service. */
		ServiceUri: string;
		/** Shows whether the Azure service connection is active or inactive. */
		StateCode: OptionSet.AzureServiceConnection.StateCode;
		/** Select the Azure service connection's status. */
		StatusCode: OptionSet.AzureServiceConnection.StatusCode;
	}
}
declare namespace OptionSet {
	namespace AzureServiceConnection {
		enum ConnectionType {
			/** 1 */
			Recommendation,
			/** 2 */
			Text_Analytics
		}
		enum LastConnectionStatusCode {
			/** 2 */
			Failure,
			/** 1 */
			Success
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
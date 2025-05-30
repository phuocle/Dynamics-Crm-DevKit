﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormConnectionInstance_Information {
		interface Tabs {
		}
		interface Body {
			/** The Id of the Connection in Api Hub */
			ConnectionInternalId: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormConnectionInstance_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ConnectionInstance_Information */
		Body: DevKit.FormConnectionInstance_Information.Body;
		/** The Navigation of form ConnectionInstance_Information */
		Navigation: DevKit.FormConnectionInstance_Information.Navigation;
		/** The SidePanes of form ConnectionInstance_Information */
		SidePanes: DevKit.SidePanes;
	}
	class ConnectionInstanceApi {
		/**
		* DynamicsCrm.DevKit ConnectionInstanceApi
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
		/** The name for the account */
		AccountName: string;
		/** Whether or not allow sharing is enabled for the connection */
		AllowSharing: boolean;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ConnectionInstance.ComponentState;
		/** The display name of the Connection as seen by the user. */
		ConnectionInstanceDisplayName: string;
		/** Unique identifier for entity instances */
		ConnectionInstanceId: string;
		/** Connection Instance unique name */
		ConnectionInstanceLogicalName: string;
		/** The Id of the Connection in Api Hub */
		ConnectionInternalId: string;
		/** The Metadata for the connection */
		ConnectionMetadata: string;
		/** The connection parameters and values that will be passed on creation */
		ConnectionParametersConfig: string;
		/** The connection parameters set and values that are mainly used in case of multiauth connections */
		ConnectionParameterSetConfig: string;
		/** Unique identifier for Connection Reference associated with the Connection Instance. */
		ConnectionReferenceId: string;
		/** The status of the connection in ApiHub */
		ConnectionStatus: string;
		/** The version of the connection */
		ConnectionVersion: string;
		/** The id of the corresponding connector if present in Dataverse */
		ConnectorId: string;
		/** The id of the Connector in ApiHub */
		ConnectorInternalId: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier for the Credential used in the Connection Instance. */
		CredentialId: string;
		/** Icon for the Connection Instance */
		IconUri: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Connection Instance */
		statecode: OptionSet.ConnectionInstance.statecode;
		/** Reason for the status of the Connection Instance */
		statuscode: OptionSet.ConnectionInstance.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Links to test the connection */
		TestConnectionLinks: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** The name for the account */
			readonly AccountName: string;
			/** Whether or not allow sharing is enabled for the connection */
			readonly AllowSharing: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** The display name of the Connection as seen by the user. */
			readonly ConnectionInstanceDisplayName: string;
			/** Unique identifier for entity instances */
			readonly ConnectionInstanceId: string;
			/** Connection Instance unique name */
			readonly ConnectionInstanceLogicalName: string;
			/** The Id of the Connection in Api Hub */
			readonly ConnectionInternalId: string;
			/** The Metadata for the connection */
			readonly ConnectionMetadata: string;
			/** The connection parameters and values that will be passed on creation */
			readonly ConnectionParametersConfig: string;
			/** The connection parameters set and values that are mainly used in case of multiauth connections */
			readonly ConnectionParameterSetConfig: string;
			/** Unique identifier for Connection Reference associated with the Connection Instance. */
			readonly ConnectionReferenceId: string;
			/** The status of the connection in ApiHub */
			readonly ConnectionStatus: string;
			/** The version of the connection */
			readonly ConnectionVersion: string;
			/** The id of the corresponding connector if present in Dataverse */
			readonly ConnectorId: string;
			/** The id of the Connector in ApiHub */
			readonly ConnectorInternalId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier for the Credential used in the Connection Instance. */
			readonly CredentialId: string;
			/** Icon for the Connection Instance */
			readonly IconUri: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Connection Instance */
			readonly statecode: string;
			/** Reason for the status of the Connection Instance */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Links to test the connection */
			readonly TestConnectionLinks: string;
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
	namespace ConnectionInstance {
		enum ComponentState {
			/** 0 */
			Da_phat_hanh,
			/** 2 */
			Da_xoa,
			/** 3 */
			Da_xoa_Huy_phat_hanh,
			/** 1 */
			Huy_phat_hanh
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}
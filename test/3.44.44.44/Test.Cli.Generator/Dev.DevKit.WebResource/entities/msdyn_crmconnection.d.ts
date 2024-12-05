//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_crmconnection_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_apimuri: DevKit.Controls.String;
			/** Connection State */
			msdyn_connectionstate: DevKit.Controls.OptionSet;
			/** Connector Id Information */
			msdyn_connectorid: DevKit.Controls.String;
			/** URL of the connector */
			msdyn_connectoruri: DevKit.Controls.String;
			/** Nature of CRM Instance */
			msdyn_crmtype: DevKit.Controls.String;
			/** Url of third party CRM */
			msdyn_crmurl: DevKit.Controls.String;
			msdyn_crmuserid: DevKit.Controls.ELSE3???;//msdyn_crmuserid - 3B0980AC-6FF0-405F-BAC1-D1F0DD234C0F -- FOR DEBUG 
			/** Name of the BAP environment */
			msdyn_environmentid: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** SF Type */
			msdyn_sfenvironmenttype: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_crmconnection_msdyn_taggedrecord_connectionid: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_crmconnection_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_crmconnection_Information */
		Body: DevKit.Formmsdyn_crmconnection_Information.Body;
		/** The Navigation of form msdyn_crmconnection_Information */
		Navigation: DevKit.Formmsdyn_crmconnection_Information.Navigation;
		/** The SidePanes of form msdyn_crmconnection_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_crmconnectionApi {
		/**
		* DynamicsCrm.DevKit msdyn_crmconnectionApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_apimuri: string;
		/** Connection State */
		msdyn_connectionstate: OptionSet.msdyn_crmconnection.msdyn_connectionstate;
		/** Connector Id Information */
		msdyn_connectorid: string;
		/** URL of the connector */
		msdyn_connectoruri: string;
		/** Unique identifier for entity instances */
		msdyn_crmconnectionId: string;
		/** Nature of CRM Instance */
		msdyn_crmtype: string;
		/** Url of third party CRM */
		msdyn_crmurl: string;
		/** User id in CRM */
		msdyn_crmuserid: string;
		/** Name of the BAP environment */
		msdyn_environmentid: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Identifier to track the association of this record with a Copilot product type */
		msdyn_producttype: OptionSet.msdyn_crmconnection.msdyn_producttype;
		/** SF Type */
		msdyn_sfenvironmenttype: OptionSet.msdyn_crmconnection.msdyn_sfenvironmenttype;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
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
		/** Status of the CRMConnection */
		statecode: OptionSet.msdyn_crmconnection.statecode;
		/** Reason for the status of the CRMConnection */
		statuscode: OptionSet.msdyn_crmconnection.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_apimuri: string;
			/** Connection State */
			readonly msdyn_connectionstate: string;
			/** Connector Id Information */
			readonly msdyn_connectorid: string;
			/** URL of the connector */
			readonly msdyn_connectoruri: string;
			/** Unique identifier for entity instances */
			readonly msdyn_crmconnectionId: string;
			/** Nature of CRM Instance */
			readonly msdyn_crmtype: string;
			/** Url of third party CRM */
			readonly msdyn_crmurl: string;
			/** User id in CRM */
			readonly msdyn_crmuserid: string;
			/** Name of the BAP environment */
			readonly msdyn_environmentid: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Identifier to track the association of this record with a Copilot product type */
			readonly msdyn_producttype: string;
			/** SF Type */
			readonly msdyn_sfenvironmenttype: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
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
			/** Status of the CRMConnection */
			readonly statecode: string;
			/** Reason for the status of the CRMConnection */
			readonly statuscode: string;
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
	namespace msdyn_crmconnection {
		enum msdyn_connectionstate {
			/** 100000001 */
			Active,
			/** 100000000 */
			Created,
			/** 100000002 */
			Inactive
		}
		enum msdyn_producttype {
			/** 10000 */
			Copilot_for_Sales,
			/** 10001 */
			Copilot_for_Service,
			/** 11000 */
			Shared
		}
		enum msdyn_sfenvironmenttype {
			/** 100000000 */
			Production,
			/** 100000001 */
			Sandbox
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
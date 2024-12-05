//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_servicecopilotplugin_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_msdyn_servicecopilotplugin_msdyn_servicecopilotpluginaction_servicecopilotpluginid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_servicecopilotplugin_msdyn_servicecopilotpluginrole_servicecopilotpluginId: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_servicecopilotplugin_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_servicecopilotplugin_Information */
		Body: DevKit.Formmsdyn_servicecopilotplugin_Information.Body;
		/** The Navigation of form msdyn_servicecopilotplugin_Information */
		Navigation: DevKit.Formmsdyn_servicecopilotplugin_Information.Navigation;
		/** The SidePanes of form msdyn_servicecopilotplugin_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_servicecopilotpluginApi {
		/**
		* DynamicsCrm.DevKit msdyn_servicecopilotpluginApi
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
		/** Last Publish Success Time */
		LastPublishSuccessOn_UtcDateAndTime: Date;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** AI Plugin Id */
		msdyn_aipluginid: string;
		/** Interaction For Record */
		msdyn_analyticsenabled: boolean;
		msdyn_authmode: OptionSet.msdyn_servicecopilotplugin.msdyn_authmode;
		/** Bot component id */
		msdyn_botcomponentid: string;
		/** Is Connection Id Publish Pending */
		msdyn_connectionidpendingpublish: boolean;
		/** Custom connector context */
		msdyn_customconnectorcontext: string;
		/** Is Publish Pending */
		msdyn_ispublishpending: boolean;
		/** Last Plugin Metadata Sync Time */
		msdyn_lastbappluginsynctime_UtcDateOnly: Date;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Needs Role check */
		msdyn_needsrolecheck: boolean;
		/** Parameter Configuration */
		msdyn_parameterconfiguration: string;
		/** Plugin Description */
		msdyn_plugindescription: string;
		/** Plugin Name */
		msdyn_pluginname: string;
		msdyn_plugintype: OptionSet.msdyn_servicecopilotplugin.msdyn_plugintype;
		/** Plugin Unique Name */
		msdyn_pluginuniquename: string;
		/** Unique identifier for entity instances */
		msdyn_servicecopilotpluginId: string;
		/** Skip GPT response for plugin */
		msdyn_skipgptresponse: boolean;
		/** Enabled Status */
		msdyn_status: boolean;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Publish Initiated Time */
		PublishInitiatedOn_UtcDateAndTime: Date;
		/** Status of the Service Copilot Plugin */
		statecode: OptionSet.msdyn_servicecopilotplugin.statecode;
		/** Reason for the status of the Service Copilot Plugin */
		statuscode: OptionSet.msdyn_servicecopilotplugin.statuscode;
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
			/** Last Publish Success Time */
			readonly LastPublishSuccessOn_UtcDateAndTime: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** AI Plugin Id */
			readonly msdyn_aipluginid: string;
			/** Interaction For Record */
			readonly msdyn_analyticsenabled: string;
			readonly msdyn_authmode: string;
			/** Bot component id */
			readonly msdyn_botcomponentid: string;
			/** Is Connection Id Publish Pending */
			readonly msdyn_connectionidpendingpublish: string;
			/** Custom connector context */
			readonly msdyn_customconnectorcontext: string;
			/** Is Publish Pending */
			readonly msdyn_ispublishpending: string;
			/** Last Plugin Metadata Sync Time */
			readonly msdyn_lastbappluginsynctime_UtcDateOnly: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Needs Role check */
			readonly msdyn_needsrolecheck: string;
			/** Parameter Configuration */
			readonly msdyn_parameterconfiguration: string;
			/** Plugin Description */
			readonly msdyn_plugindescription: string;
			/** Plugin Name */
			readonly msdyn_pluginname: string;
			readonly msdyn_plugintype: string;
			/** Plugin Unique Name */
			readonly msdyn_pluginuniquename: string;
			/** Unique identifier for entity instances */
			readonly msdyn_servicecopilotpluginId: string;
			/** Skip GPT response for plugin */
			readonly msdyn_skipgptresponse: string;
			/** Enabled Status */
			readonly msdyn_status: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Publish Initiated Time */
			readonly PublishInitiatedOn_UtcDateAndTime: string;
			/** Status of the Service Copilot Plugin */
			readonly statecode: string;
			/** Reason for the status of the Service Copilot Plugin */
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
	namespace msdyn_servicecopilotplugin {
		enum msdyn_authmode {
			/** 0 */
			Invoker,
			/** 1 */
			Maker
		}
		enum msdyn_plugintype {
			/** 2 */
			Connector,
			/** 1 */
			CustomConnector,
			/** 0 */
			Dataverse
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
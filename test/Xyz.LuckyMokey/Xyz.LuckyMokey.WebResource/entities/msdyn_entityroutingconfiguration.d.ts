//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_entityroutingconfiguration_Information {
		interface Header {
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab__26576EBB_4A2E_42CE_A2A9_6B1DC50D2B2C_Sections {
			_D8D04141_73FF_41BF_B74D_819968C82ACE: DevKit.Form.Controls.ControlSection;
			_26576EBB_4A2E_42CE_A2A9_6B1DC50D2B2C_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Routing_Rules_Sections {
			Routing_Rule_Section: DevKit.Form.Controls.ControlSection;
		}
		interface tab__26576EBB_4A2E_42CE_A2A9_6B1DC50D2B2C extends DevKit.Form.Controls.IControlTab {
			Section: tab__26576EBB_4A2E_42CE_A2A9_6B1DC50D2B2C_Sections;
		}
		interface tab_Routing_Rules extends DevKit.Form.Controls.IControlTab {
			Section: tab_Routing_Rules_Sections;
		}
		interface Tabs {
			_26576EBB_4A2E_42CE_A2A9_6B1DC50D2B2C: tab__26576EBB_4A2E_42CE_A2A9_6B1DC50D2B2C;
			Routing_Rules: tab_Routing_Rules;
		}
		interface Body {
			Tab: Tabs;
			workstreamgrid: DevKit.Form.Controls.ControlGrid;
			/** Custom entity. */
			msdyn_entity: DevKit.Form.Controls.ControlString;
			/** Name of Entity Routing Configuration */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Field to bind Routing Rule Subgrid wrapper control */
			msdyn_routingrulesubgrid: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_entityroutingconfiguration_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_entityroutingconfiguration_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_entityroutingconfiguration_Information */
		Body: LuckyMokey.Formmsdyn_entityroutingconfiguration_Information.Body;
		/** The Header section of form msdyn_entityroutingconfiguration_Information */
		Header: LuckyMokey.Formmsdyn_entityroutingconfiguration_Information.Header;
	}
	class msdyn_entityroutingconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_entityroutingconfigurationApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_DeroutingProcess: DevKit.WebApi.LookupValue;
		/** Custom entity. */
		msdyn_entity: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_entityroutingconfigurationId: DevKit.WebApi.GuidValue;
		msdyn_entitysetname: DevKit.WebApi.StringValue;
		/** Name of Entity Routing Configuration */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_relationshipname: DevKit.WebApi.StringValue;
		/** Routing Process */
		msdyn_RoutingProcess: DevKit.WebApi.LookupValue;
		/** Field to bind Routing Rule Subgrid wrapper control */
		msdyn_routingrulesubgrid: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Entity Routing Configuration */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Entity Routing Configuration */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_entityroutingconfiguration {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
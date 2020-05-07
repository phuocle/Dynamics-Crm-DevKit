//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_iotalert_Information {
		interface Header {
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab__B4D9BB28_1BD1_4896_AA83_A8CD2A781DDE_Sections {
			AssetSection: DevKit.Form.Controls.ControlSection;
			HierarchySection: DevKit.Form.Controls.ControlSection;
			AlertDataSection: DevKit.Form.Controls.ControlSection;
			SuggestionsSection: DevKit.Form.Controls.ControlSection;
			Device_Summary_Visualization: DevKit.Form.Controls.ControlSection;
			Connected_Device_Readings: DevKit.Form.Controls.ControlSection;
		}
		interface tab_DeviceCommandsTab_Sections {
			DeviceCommandsSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_DeviceInsightsTab_Sections {
			DeviceInsightsSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab__B4D9BB28_1BD1_4896_AA83_A8CD2A781DDE extends DevKit.Form.Controls.IControlTab {
			Section: tab__B4D9BB28_1BD1_4896_AA83_A8CD2A781DDE_Sections;
		}
		interface tab_DeviceCommandsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_DeviceCommandsTab_Sections;
		}
		interface tab_DeviceInsightsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_DeviceInsightsTab_Sections;
		}
		interface Tabs {
			_B4D9BB28_1BD1_4896_AA83_A8CD2A781DDE: tab__B4D9BB28_1BD1_4896_AA83_A8CD2A781DDE;
			DeviceCommandsTab: tab_DeviceCommandsTab;
			DeviceInsightsTab: tab_DeviceInsightsTab;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			WebResource_PowerBIAlert: DevKit.Form.Controls.ControlWebResource;
			DeviceCommandsGrid: DevKit.Form.Controls.ControlGrid;
			/** Data sent from the device about the alert. */
			msdyn_AlertData: DevKit.Form.Controls.ControlString;
			/** Data sent from the device about the alert. */
			msdyn_AlertData_1: DevKit.Form.Controls.ControlString;
			/** The suggested priority score for this alert. */
			msdyn_alertpriorityscore: DevKit.Form.Controls.ControlInteger;
			/** The time the alert was issued. */
			msdyn_AlertTime: DevKit.Form.Controls.ControlDateTime;
			/** The unique reference to the event id on the IoT provider. */
			msdyn_AlertToken: DevKit.Form.Controls.ControlString;
			msdyn_alerttype: DevKit.Form.Controls.ControlOptionSet;
			/** External URL to view more information about the iot alert. */
			msdyn_AlertURL: DevKit.Form.Controls.ControlString;
			/** The asset connected to the IoT device that raised the alert. */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			/** A description for the alert. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** The IoT device for which this alert was raised. */
			msdyn_Device: DevKit.Form.Controls.ControlLookup;
			/** The IoT device for which this alert was raised. */
			msdyn_Device_1: DevKit.Form.Controls.ControlLookup;
			/** The IoT device for which this alert was raised. */
			msdyn_Device_2: DevKit.Form.Controls.ControlLookup;
			/** The ID of the IoT device that sent the alert. */
			msdyn_DeviceID: DevKit.Form.Controls.ControlString;
			/** Reference to a primary alert. This field is inferred if Primary Alert Token is set. */
			msdyn_ParentAlert: DevKit.Form.Controls.ControlLookup;
			/** Reference to a previously created primary iot alert */
			msdyn_ParentAlertToken: DevKit.Form.Controls.ControlString;
			/** The suggested priority for this alert. */
			msdyn_suggestedpriority: DevKit.Form.Controls.ControlOptionSet;
			/** Reason for the status of the IoT Alert */
			statuscode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface ProcessIoT_Alert_to_Case_Process {
			/** The time the alert was issued. */
			msdyn_AlertTime: DevKit.Form.Controls.ControlDateTime;
			/** The asset connected to the IoT device that raised the alert. */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			/** A description for the alert. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** The time the alert was issued. */
			msdyn_AlertTime: DevKit.Form.Controls.ControlDateTime;
			/** A description for the alert. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** The IoT device for which this alert was raised. */
			msdyn_Device: DevKit.Form.Controls.ControlLookup;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			IoT_Alert_to_Case_Process: ProcessIoT_Alert_to_Case_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
		}
	}
	class Formmsdyn_iotalert_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotalert_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_iotalert_Information */
		Body: LuckyMokey.Formmsdyn_iotalert_Information.Body;
		/** The Header section of form msdyn_iotalert_Information */
		Header: LuckyMokey.Formmsdyn_iotalert_Information.Header;
		/** The Process of form msdyn_iotalert_Information */
		Process: LuckyMokey.Formmsdyn_iotalert_Information.Process;
	}
	class msdyn_iotalertApi {
		/**
		* DynamicsCrm.DevKit msdyn_iotalertApi
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
		/** Data sent from the device about the alert. */
		msdyn_AlertData: DevKit.WebApi.StringValue;
		/** The suggested priority score for this alert. */
		msdyn_alertpriorityscore: DevKit.WebApi.IntegerValue;
		/** The time the alert was issued. */
		msdyn_AlertTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** The unique reference to the event id on the IoT provider. */
		msdyn_AlertToken: DevKit.WebApi.StringValue;
		msdyn_alerttype: DevKit.WebApi.OptionSetValue;
		/** External URL to view more information about the iot alert. */
		msdyn_AlertURL: DevKit.WebApi.StringValue;
		/** Case created for this iot alert. */
		msdyn_case: DevKit.WebApi.LookupValue;
		/** The asset connected to the IoT device that raised the alert. */
		msdyn_CustomerAsset: DevKit.WebApi.LookupValue;
		/** A description for the alert. */
		msdyn_Description: DevKit.WebApi.StringValue;
		/** The IoT device for which this alert was raised. */
		msdyn_Device: DevKit.WebApi.LookupValue;
		/** The ID of the IoT device that sent the alert. */
		msdyn_DeviceID: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_iotalertId: DevKit.WebApi.GuidValue;
		msdyn_LastCommandSent: DevKit.WebApi.LookupValue;
		msdyn_LastCommandSentTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Reference to a primary alert. This field is inferred if Primary Alert Token is set. */
		msdyn_ParentAlert: DevKit.WebApi.LookupValue;
		/** Reference to a previously created primary iot alert */
		msdyn_ParentAlertToken: DevKit.WebApi.StringValue;
		/** The suggested priority for this alert. */
		msdyn_suggestedpriority: DevKit.WebApi.OptionSetValue;
		/** Work order created for this iot alert. */
		msdyn_Workorder: DevKit.WebApi.LookupValue;
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
		/** Contains the id of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Contains the id of the stage where the entity is located. */
		stageid: DevKit.WebApi.GuidValue;
		/** Status of the IoT Alert */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the IoT Alert */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_iotalert {
		enum msdyn_alerttype {
			/** 192350000 */
			Anomaly,
			/** 192350001 */
			Info,
			/** 192350002 */
			Preventive_Maintenance,
			/** 192350003 */
			Test
		}
		enum msdyn_suggestedpriority {
			/** 192350000 */
			Calculating,
			/** 192350001 */
			High,
			/** 192350002 */
			Low,
			/** 192350003 */
			No_Suggestions
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive,
			/** 2 */
			InProgress,
			/** 3 */
			Closed
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive,
			/** 3 */
			In_Progress_Case_Created,
			/** 4 */
			In_Progress_Work_Order_Created,
			/** 5 */
			In_Progress_Command_Sent,
			/** 6 */
			Closed,
			/** 7 */
			In_Progress_Command_Failed
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
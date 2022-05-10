//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_iotdevicecommand_Information {
		interface tab__C820DAE9_B78D_4BBD_8FBE_DD255869040B_Sections {
			_5E35860A_0CC6_4E8A_9288_9E77DDB50B1E: DevKit.Controls.Section;
			_C820DAE9_B78D_4BBD_8FBE_DD255869040B_SECTION_2: DevKit.Controls.Section;
			_C820DAE9_B78D_4BBD_8FBE_DD255869040B_SECTION_5: DevKit.Controls.Section;
			IoTAlert: DevKit.Controls.Section;
			MessageSection: DevKit.Controls.Section;
		}
		interface tab_mfdTab_Sections {
		}
		interface tab__C820DAE9_B78D_4BBD_8FBE_DD255869040B extends DevKit.Controls.ITab {
			Section: tab__C820DAE9_B78D_4BBD_8FBE_DD255869040B_Sections;
		}
		interface tab_mfdTab extends DevKit.Controls.ITab {
			Section: tab_mfdTab_Sections;
		}
		interface Tabs {
			_C820DAE9_B78D_4BBD_8FBE_DD255869040B: tab__C820DAE9_B78D_4BBD_8FBE_DD255869040B;
			mfdTab: tab_mfdTab;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** This optional field denotes the command definition that is used to construct the command string. */
			msdyn_Command: DevKit.Controls.Lookup;
			/** This optional field denotes the command definition that is used to construct the command string. */
			msdyn_Command1: DevKit.Controls.Lookup;
			/** Describes the status of the command. If this stays at "In Progress" for a long time, verify the IoT endpoint configuration. */
			msdyn_CommandStatus: DevKit.Controls.OptionSet;
			/** A reason field that explains the command status. */
			msdyn_CommandStatusReason: DevKit.Controls.String;
			/** The command will be sent to a device connected to this asset. */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** The command will be sent to a device connected to this asset. */
			msdyn_CustomerAsset1: DevKit.Controls.Lookup;
			/** IoT device to send the message to. */
			msdyn_Device: DevKit.Controls.Lookup;
			/** IoT device to send the message to. */
			msdyn_Device1: DevKit.Controls.Lookup;
			/** The ID of the IoT device to send the message to. */
			msdyn_DeviceID: DevKit.Controls.String;
			/** Message to send to the IoT device. E.g.: A Json string. */
			msdyn_Message: DevKit.Controls.String;
			/** Message to send to the IoT device. E.g.: A Json string. */
			msdyn_Message1: DevKit.Controls.String;
			/** Message to send to the IoT device. E.g.: A Json string. */
			msdyn_Message2: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name1: DevKit.Controls.String;
			/** Reference to a primary alert in response to which the message is being sent. */
			msdyn_ParentAlert: DevKit.Controls.Lookup;
			/** Yes, if a copy of the command should be sent to all registered devices connected under the parent entity of the selected device. No, if this command needs to be sent only to the selected device. */
			msdyn_SendToAllConnectedDevices: DevKit.Controls.Boolean;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_iotdevicecommand_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iotdevicecommand_Information */
		Body: DevKit.Formmsdyn_iotdevicecommand_Information.Body;
		/** The Process of form msdyn_iotdevicecommand_Information */
		Process: DevKit.Formmsdyn_iotdevicecommand_Information.Process;
		/** The SidePanes of form msdyn_iotdevicecommand_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_iotdevicecommandApi {
		/**
		* DynamicsCrm.DevKit msdyn_iotdevicecommandApi
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
		/** This optional field denotes the command definition that is used to construct the command string. */
		msdyn_Command: string;
		/** Describes the status of the command. If this stays at "In Progress" for a long time, verify the IoT endpoint configuration. */
		msdyn_CommandStatus: OptionSet.msdyn_iotdevicecommand.msdyn_CommandStatus;
		/** A reason field that explains the command status. */
		msdyn_CommandStatusReason: string;
		/** The command will be sent to a device connected to this asset. */
		msdyn_CustomerAsset: string;
		/** IoT device to send the message to. */
		msdyn_Device: string;
		/** The ID of the IoT device to send the message to. */
		msdyn_DeviceID: string;
		/** Unique identifier for entity instances */
		msdyn_iotdevicecommandId: string;
		/** Message to send to the IoT device. E.g.: A Json string. */
		msdyn_Message: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Reference to a primary alert in response to which the message is being sent. */
		msdyn_ParentAlert: string;
		/** Yes, if a copy of the command should be sent to all registered devices connected under the parent entity of the selected device. No, if this command needs to be sent only to the selected device. */
		msdyn_SendToAllConnectedDevices: boolean;
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
		/** Status of the IoT Device Command */
		statecode: OptionSet.msdyn_iotdevicecommand.statecode;
		/** Reason for the status of the IoT Device Command */
		statuscode: OptionSet.msdyn_iotdevicecommand.statuscode;
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
			/** This optional field denotes the command definition that is used to construct the command string. */
			readonly msdyn_Command: string;
			/** Describes the status of the command. If this stays at "In Progress" for a long time, verify the IoT endpoint configuration. */
			readonly msdyn_CommandStatus: string;
			/** A reason field that explains the command status. */
			readonly msdyn_CommandStatusReason: string;
			/** The command will be sent to a device connected to this asset. */
			readonly msdyn_CustomerAsset: string;
			/** IoT device to send the message to. */
			readonly msdyn_Device: string;
			/** The ID of the IoT device to send the message to. */
			readonly msdyn_DeviceID: string;
			/** Unique identifier for entity instances */
			readonly msdyn_iotdevicecommandId: string;
			/** Message to send to the IoT device. E.g.: A Json string. */
			readonly msdyn_Message: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Reference to a primary alert in response to which the message is being sent. */
			readonly msdyn_ParentAlert: string;
			/** Yes, if a copy of the command should be sent to all registered devices connected under the parent entity of the selected device. No, if this command needs to be sent only to the selected device. */
			readonly msdyn_SendToAllConnectedDevices: string;
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
			/** Status of the IoT Device Command */
			readonly statecode: string;
			/** Reason for the status of the IoT Device Command */
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
	namespace msdyn_iotdevicecommand {
		enum msdyn_CommandStatus {
			/** 192350002 */
			Error,
			/** 192350000 */
			In_Progress,
			/** 192350001 */
			Sent
		}
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
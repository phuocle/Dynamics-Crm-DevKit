//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormUII_action_Information {
		interface tab__49A2FDF8_1814_49B5_BE5A_E7CAC97E0EE3_Sections {
			_B4B540BD_52D0_4CC9_BD42_16F4DDAEDDAD: DevKit.Controls.Section;
		}
		interface tab__80C2EEB7_9ADD_DE11_8E80_00155D289C61_Sections {
			_AAA1F133_9BDD_DE11_8E80_00155D289C61: DevKit.Controls.Section;
		}
		interface tab_General_Sections {
			Automation: DevKit.Controls.Section;
			General: DevKit.Controls.Section;
			URLNavigation: DevKit.Controls.Section;
		}
		interface tab__49A2FDF8_1814_49B5_BE5A_E7CAC97E0EE3 extends DevKit.Controls.ITab {
			Section: tab__49A2FDF8_1814_49B5_BE5A_E7CAC97E0EE3_Sections;
		}
		interface tab__80C2EEB7_9ADD_DE11_8E80_00155D289C61 extends DevKit.Controls.ITab {
			Section: tab__80C2EEB7_9ADD_DE11_8E80_00155D289C61_Sections;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface Tabs {
			_49A2FDF8_1814_49B5_BE5A_E7CAC97E0EE3: tab__49A2FDF8_1814_49B5_BE5A_E7CAC97E0EE3;
			_80C2EEB7_9ADD_DE11_8E80_00155D289C61: tab__80C2EEB7_9ADD_DE11_8E80_00155D289C61;
			General: tab_General;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Determines the mode of automation for this action */
			UII_AutomationMode: DevKit.Controls.OptionSet;
			/** THis attribute captures the additional data in an xml format which can be used by the action. */
			UII_ExtensionsXML: DevKit.Controls.String;
			/** Every Action should be mapped to a Hosted Application. The Hosted Application can have many Actions. */
			uii_hostedapplicationid: DevKit.Controls.Lookup;
			/** sets whether this action is executed as default action for the hosted application */
			UII_isDefault: DevKit.Controls.Boolean;
			/** Focus the application after the action is completed */
			UII_isFocussedApplication: DevKit.Controls.Boolean;
			/** Run automation asynchronously to desktop thread */
			UII_isRunModeAsynchronous: DevKit.Controls.Boolean;
			/** Specify the Method to be used to Navigate */
			UII_Method: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			UII_name: DevKit.Controls.String;
			/** Speify the Query String needs to be added to the URL attribute. */
			UII_QueryString: DevKit.Controls.String;
			/** Specify the URL to which the hosted web application should navigate. */
			UII_URL: DevKit.Controls.String;
			/** Captures the Workflow Assembly Type. This is required when Workflow Automation mode is selected */
			UII_WorkflowAssemblyType: DevKit.Controls.String;
			/** When Workflow XAML mode is selected for automation mode, this attribute captures the XAML code */
			UII_WorkflowXAML: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the UII Action */
			statecode: DevKit.Controls.OptionSet;
		}
	}
	class FormUII_action_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form UII_action_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form UII_action_Information */
		Body: DevKit.FormUII_action_Information.Body;
		/** The Footer section of form UII_action_Information */
		Footer: DevKit.FormUII_action_Information.Footer;
	}
	class UII_actionApi {
		/**
		* DynamicsCrm.DevKit UII_actionApi
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
		/** Help text used to describe action parameters */
		msdyusd_Help: DevKit.WebApi.StringValue;
		msdyusd_UnifiedServiceDeskCreated: DevKit.WebApi.BooleanValue;
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
		/** Status of the UII Action */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the UII Action */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier for entity instances */
		UII_actionId: DevKit.WebApi.GuidValue;
		/** Determines the mode of automation for this action */
		UII_AutomationMode: DevKit.WebApi.OptionSetValue;
		/** THis attribute captures the additional data in an xml format which can be used by the action. */
		UII_ExtensionsXML: DevKit.WebApi.StringValue;
		/** Every Action should be mapped to a Hosted Application. The Hosted Application can have many Actions. */
		uii_hostedapplicationid: DevKit.WebApi.LookupValue;
		/** sets whether this action is executed as default action for the hosted application */
		UII_isDefault: DevKit.WebApi.BooleanValue;
		/** Focus the application after the action is completed */
		UII_isFocussedApplication: DevKit.WebApi.BooleanValue;
		/** Run automation asynchronously to desktop thread */
		UII_isRunModeAsynchronous: DevKit.WebApi.BooleanValue;
		/** Specify the Method to be used to Navigate */
		UII_Method: DevKit.WebApi.OptionSetValue;
		/** The name of the custom entity. */
		UII_name: DevKit.WebApi.StringValue;
		/** Speify the Query String needs to be added to the URL attribute. */
		UII_QueryString: DevKit.WebApi.StringValue;
		/** Captures the Script path file which will be executed on selection of No Automation mode. */
		UII_ScriptFilePathtoRun: DevKit.WebApi.StringValue;
		/** Specify the URL to which the hosted web application should navigate. */
		UII_URL: DevKit.WebApi.StringValue;
		/** Captures the Workflow Assembly Type. This is required when Workflow Automation mode is selected */
		UII_WorkflowAssemblyType: DevKit.WebApi.StringValue;
		/** When Workflow XAML mode is selected for automation mode, this attribute captures the Rules xml. */
		UII_WorkflowRules: DevKit.WebApi.StringValue;
		/** When Workflow XAML mode is selected for automation mode, this attribute captures the XAML code */
		UII_WorkflowXAML: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace UII_action {
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
		enum UII_AutomationMode {
			/** 1 */
			No_Automation,
			/** 2 */
			Use_Workflow_Assembly,
			/** 3 */
			Use_Workflow_XAML
		}
		enum UII_Method {
			/** 1 */
			GET,
			/** 2 */
			POST
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
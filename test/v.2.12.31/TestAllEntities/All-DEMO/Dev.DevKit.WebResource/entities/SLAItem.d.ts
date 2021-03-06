﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSLAItem_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier for SLA associated with SLA Item. */
			SLAId: DevKit.Controls.Lookup;
		}
		interface tab_tabUC_Sections {
			Actions: DevKit.Controls.Section;
			ApplicableWhen: DevKit.Controls.Section;
			PauseConfiguration: DevKit.Controls.Section;
			SuccessConditions: DevKit.Controls.Section;
			Warn_and_Fail_Duration: DevKit.Controls.Section;
		}
		interface tab_tabUC extends DevKit.Controls.ITab {
			Section: tab_tabUC_Sections;
		}
		interface Tabs {
			tabUC: tab_tabUC;
		}
		interface Body {
			Tab: Tabs;
			/** Action URL */
			ActionURL: DevKit.Controls.String;
			/** Select whether this SLA will allow pausing and resuming during the time calculation. */
			AllowPauseResume: DevKit.Controls.Boolean;
			ApplicableEntity: DevKit.Controls.String;
			applicablewhencontrol: DevKit.Controls.ActionCards;
			/** Choose the business hours for calculating SLA item timelines. */
			BusinessHoursId: DevKit.Controls.Lookup;
			/** Select how soon the success criteria must be met until the SLA item is considered failed and failure actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			FailureAfter: DevKit.Controls.Integer;
			/** Select how soon the success criteria must be met until the SLA item is considered failed and failure actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			FailureAfter_1: DevKit.Controls.Integer;
			msdyn_AdvancedPauseConfiguration: DevKit.Controls.Boolean;
			msdyn_pauseconfigurationxml: DevKit.Controls.ActionCards;
			/** Unique identifier for SLAKPI associated with SLA Item. */
			msdyn_slakpiid: DevKit.Controls.Lookup;
			/** Type a descriptive name of the service level agreement (SLA) item. */
			Name: DevKit.Controls.String;
			/** Type a descriptive name of the service level agreement (SLA) item. */
			Name_1: DevKit.Controls.String;
			successconditioncontrol: DevKit.Controls.ActionCards;
			/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			WarnAfter: DevKit.Controls.Integer;
			/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			WarnAfter_1: DevKit.Controls.Integer;
			WebResource_preview: DevKit.Controls.WebResource;
			WebResource_slaitem_applicablewhen_notification: DevKit.Controls.WebResource;
			WebResource_slaitem_success_notification: DevKit.Controls.WebResource;
		}
	}
	class FormSLAItem_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form SLAItem_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SLAItem_Information */
		Body: DevKit.FormSLAItem_Information.Body;
		/** The Header section of form SLAItem_Information */
		Header: DevKit.FormSLAItem_Information.Header;
	}
	class SLAItemApi {
		/**
		* DynamicsCrm.DevKit SLAItemApi
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
		actionflowuniquename: DevKit.WebApi.StringValue;
		/** Action URL */
		ActionURL: DevKit.WebApi.StringValue;
		/** Select whether this SLA will allow pausing and resuming during the time calculation. */
		AllowPauseResume: DevKit.WebApi.BooleanValue;
		ApplicableEntity: DevKit.WebApi.StringValue;
		/** Condition for SLA item */
		ApplicableWhenXml: DevKit.WebApi.StringValue;
		/** Choose the business hours for calculating SLA item timelines. */
		BusinessHoursId: DevKit.WebApi.LookupValue;
		ChangedAttributeList: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the SLA Item */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate between the currency associated with the SLA Item record and the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Select how soon the success criteria must be met until the SLA item is considered failed and failure actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
		FailureAfter: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_AdvancedPauseConfiguration: DevKit.WebApi.BooleanValue;
		msdyn_PauseConfigurationXml: DevKit.WebApi.StringValue;
		/** Unique identifier for SLAKPI associated with SLA Item. */
		msdyn_slakpiid: DevKit.WebApi.LookupValue;
		/** Type a descriptive name of the service level agreement (SLA) item. */
		Name: DevKit.WebApi.StringValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the SLA Item record. */
		OwningUser: DevKit.WebApi.LookupValue;
		/** Select the service level agreement (SLA) key performance indicator (KPI) that this SLA Item is created for. */
		RelatedField: DevKit.WebApi.StringValue;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		SequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier for SLA associated with SLA Item. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the SLA Item. */
		SLAItemId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SLAItemIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Condition for SLA item */
		SuccessConditionsXml: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the currency associated with the SLA Item record. */
		TransactionCurrencyId: DevKit.WebApi.LookupValueReadonly;
		/** Version number of the SLA Item. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
		WarnAfter: DevKit.WebApi.IntegerValue;
		/** Workflow associated with the SLA Item. */
		WorkflowId: DevKit.WebApi.LookupValue;
	}
}
declare namespace OptionSet {
	namespace SLAItem {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
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
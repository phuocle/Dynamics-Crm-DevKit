//@ts-check
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
			FailureAfter1: DevKit.Controls.Integer;
			msdyn_AdvancedPauseConfiguration: DevKit.Controls.Boolean;
			msdyn_CustomTimeCalculation: DevKit.Controls.Boolean;
			/** Unique identifier for Custom Time Calculation Workflow associated with SLA Item. */
			msdyn_CustomTimeCalculationWorkflowId: DevKit.Controls.Lookup;
			msdyn_pauseconfigurationxml: DevKit.Controls.ActionCards;
			/** Unique identifier for SLAKPI associated with SLA Item. */
			msdyn_slakpiid: DevKit.Controls.Lookup;
			/** Type a descriptive name of the service level agreement (SLA) item. */
			Name: DevKit.Controls.String;
			/** Type a descriptive name of the service level agreement (SLA) item. */
			Name1: DevKit.Controls.String;
			successconditioncontrol: DevKit.Controls.ActionCards;
			/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			WarnAfter: DevKit.Controls.Integer;
			/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			WarnAfter1: DevKit.Controls.Integer;
			WebResource_preview: DevKit.Controls.WebResource;
			WebResource_slaitem_applicablewhen_notification: DevKit.Controls.WebResource;
			WebResource_slaitem_success_notification: DevKit.Controls.WebResource;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormSLAItem_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
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
		/** The Process of form SLAItem_Information */
		Process: DevKit.FormSLAItem_Information.Process;
		/** The SidePanes of form SLAItem_Information */
		SidePanes: DevKit.SidePanes;
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
		actionflowuniquename: string;
		/** Action URL */
		ActionURL: string;
		/** Select whether this SLA will allow pausing and resuming during the time calculation. */
		AllowPauseResume: boolean;
		ApplicableEntity: string;
		/** Condition for SLA item */
		ApplicableWhenXml: string;
		/** Choose the business hours for calculating SLA item timelines. */
		BusinessHoursId: string;
		ChangedAttributeList: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SLAItem.ComponentState;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the SLA Item */
		Description: string;
		/** Exchange rate between the currency associated with the SLA Item record and the base currency. */
		readonly ExchangeRate: number;
		/** Select how soon the success criteria must be met until the SLA item is considered failed and failure actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
		FailureAfter: number;
		/** For internal use only. */
		readonly IsManaged: boolean;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_AdvancedPauseConfiguration: boolean;
		msdyn_CustomTimeCalculation: boolean;
		/** Unique identifier for Custom Time Calculation Workflow associated with SLA Item. */
		msdyn_CustomTimeCalculationWorkflowId: string;
		msdyn_PauseConfigurationXml: string;
		/** Unique identifier for SLAKPI associated with SLA Item. */
		msdyn_slakpiid: string;
		/** Type a descriptive name of the service level agreement (SLA) item. */
		Name: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Select the service level agreement (SLA) key performance indicator (KPI) that this SLA Item is created for. */
		RelatedField: string;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		SequenceNumber: number;
		/** Unique identifier for SLA associated with SLA Item. */
		SLAId: string;
		/** Unique identifier of the SLA Item. */
		SLAItemId: string;
		/** For internal use only. */
		readonly SLAItemIdUnique: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Condition for SLA item */
		SuccessConditionsXml: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Unique identifier of the currency associated with the SLA Item record. */
		readonly TransactionCurrencyId: string;
		/** Version number of the SLA Item. */
		readonly VersionNumber: number;
		/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
		WarnAfter: number;
		/** Workflow associated with the SLA Item. */
		WorkflowId: string;
		readonly FormattedValue: {
			readonly actionflowuniquename: string;
			/** Action URL */
			readonly ActionURL: string;
			/** Select whether this SLA will allow pausing and resuming during the time calculation. */
			readonly AllowPauseResume: string;
			readonly ApplicableEntity: string;
			/** Condition for SLA item */
			readonly ApplicableWhenXml: string;
			/** Choose the business hours for calculating SLA item timelines. */
			readonly BusinessHoursId: string;
			readonly ChangedAttributeList: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the SLA Item */
			readonly Description: string;
			/** Exchange rate between the currency associated with the SLA Item record and the base currency. */
			readonly ExchangeRate: string;
			/** Select how soon the success criteria must be met until the SLA item is considered failed and failure actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			readonly FailureAfter: string;
			/** For internal use only. */
			readonly IsManaged: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_AdvancedPauseConfiguration: string;
			readonly msdyn_CustomTimeCalculation: string;
			/** Unique identifier for Custom Time Calculation Workflow associated with SLA Item. */
			readonly msdyn_CustomTimeCalculationWorkflowId: string;
			readonly msdyn_PauseConfigurationXml: string;
			/** Unique identifier for SLAKPI associated with SLA Item. */
			readonly msdyn_slakpiid: string;
			/** Type a descriptive name of the service level agreement (SLA) item. */
			readonly Name: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Select the service level agreement (SLA) key performance indicator (KPI) that this SLA Item is created for. */
			readonly RelatedField: string;
			/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
			readonly SequenceNumber: string;
			/** Unique identifier for SLA associated with SLA Item. */
			readonly SLAId: string;
			/** Unique identifier of the SLA Item. */
			readonly SLAItemId: string;
			/** For internal use only. */
			readonly SLAItemIdUnique: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Condition for SLA item */
			readonly SuccessConditionsXml: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique identifier of the currency associated with the SLA Item record. */
			readonly TransactionCurrencyId: string;
			/** Version number of the SLA Item. */
			readonly VersionNumber: string;
			/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			readonly WarnAfter: string;
			/** Workflow associated with the SLA Item. */
			readonly WorkflowId: string;
		}
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
		enum OwnerIdType {
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